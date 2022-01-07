const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');

    // POST to add a new gift 

    router.post('/', rejectUnauthenticated, (req, res) => {
        console.log('in POST gifts server', req.user);
        const newGift = req.body;
        console.log('server newGift', newGift)
    
        const sqlQuery = `
        INSERT INTO "gifts" ("idea", "friend_id")
        VALUES ($1, $2)
    `;
        const sqlValues = [
            newGift.idea,
            newGift.friend_id,
        ]
        pool.query(sqlQuery, sqlValues)
            .then((dbRes) => {
            res.sendStatus(201);
            })
            .catch((dbErr) => {
            console.error('POST gifts error', dbErr);
            res.sendStatus(500);
            })
    });

    router.delete('/:id', rejectUnauthenticated, (req, res) => {
        console.log('in deleteGift server', req.params.id)

        const sqlQuery = `
        DELETE FROM "gifts" 
            WHERE "gift_id"=$1;
        `;

        const sqlValues = [
            req.params.id
        ]

        pool.query(sqlQuery, sqlValues)
            .then((dbRes) => {
                res.sendStatus(201);
            })
            .catch((dbErr) => {
                console.error('DELETE events error', dbErr);
                res.sendStatus(500);
            })
    });

    
    module.exports = router;