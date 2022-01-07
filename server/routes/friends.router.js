const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');


// GET for a user's friends

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('in GET friends server', req.user);
    
    const sqlQuery = `
        SELECT * FROM "friends"
        WHERE "user_id"=$1
        ORDER BY "name" ASC;
    `;
    const sqlValues = [req.user.id];
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((dbErr) => {
        res.sendStatus(500);
    })
});

// POST to add a new friend 

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('in POST friends server', req.user);
    const newFriend = req.body;

    const sqlQuery = `
    INSERT INTO "friends" ("name", "user_id")
    VALUES ($1, $2)
`;
    const sqlValues = [
        newFriend.name,
        req.user.id
    ]
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((dbErr) => {
            console.error('POST friends error', dbErr);
            res.sendStatus(500);
        })
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
// left join query for events
const sqlQuery = `
SELECT 
    "friends"."name",
    "events"."event_name",
    "events"."event_date",
    "events"."event_id"
FROM "friends" 
    LEFT JOIN "events"
    ON "friends"."id"="events"."freind_id"
WHERE "friends"."id" = $1;
` 
const sqlValues = req.params.id;
pool.query (sqlQuery, [sqlValues])
    .then((dbRes1) => {
        let friendDetails = {
            name: dbRes1.rows[0].name,
            event: dbRes1.rows.map((row) => {
                return {
                    name: row.event_name,
                    date: row.event_date,
                    event_id: row.event_id
                }
            })
        }
        const giftsQuery = `
        SELECT 
            "gifts"."idea",
            "gifts"."gift_id"
        FROM "gifts"
        WHERE "friend_id" = $1;
        `
        pool.query (giftsQuery, [sqlValues])
            .then((dbRes2) => {
                friendDetails.gifts = dbRes2.rows.map((row) => {
                    return {
                        idea: row.idea,
                        gift_id: row.gift_id
                    }
                })
                console.log(friendDetails)
                res.send(friendDetails)
            })
            .catch((dbErr) => {
                console.error('GET details error 2', dbErr);
                res.sendStatus(500);
            })
    })
    .catch((dbErr) => {
        console.error('GET details error 2', dbErr);
        res.sendStatus(500);
        })
})

module.exports = router;
