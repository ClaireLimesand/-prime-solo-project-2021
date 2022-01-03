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
        WHERE "user_id"=$1;
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

router.post('/', (req, res) => {
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
    const sqlQuery = `
    SELECT 
        "friends"."name",
        "events"."event_name",
        "events"."event_date",
        "gifts"."idea"
    FROM "friends" 
        JOIN "events"
            ON "friends"."id"="events"."freind_id"
        JOIN "gifts"
            ON "friends"."id"="gifts"."friend_id"
        WHERE "id" = $1;
    `
    const sqlValues =
        req.params.id;
    pool.query(sqlQuery, [sqlValues])
        .then((dbRes) => {
            // console.log('************')
            // console.log(dbRes.rows)
            let friendDetails = {}
            friendDetails.name = dbRes.rows[0].name;
            friendDetails.event = dbRes.rows.map((row) => {
                return row.event_name
            })
            friendDetails.date = dbRes.rows.map((row) => {
                return row.event_date
            })
            friendDetails.ideas = dbRes.rows.map((row) => {
                return row.idea
            })
            console.log('DETAILS', friendDetails)
            res.send(friendDetails);
        })
        .catch((dbErr) => {
            console.error(dbErr);
        })
})

module.exports = router;
