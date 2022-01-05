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

    
    module.exports = router;