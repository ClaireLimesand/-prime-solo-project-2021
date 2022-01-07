const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
    } = require('../modules/authentication-middleware');

    // POST to add a new event 

    router.post('/', rejectUnauthenticated, (req, res) => {
        console.log('in POST events server', req.user);
        const newEvent = req.body;
        console.log('server newEvent', newEvent)
    
        const sqlQuery = `
        INSERT INTO "events" ("event_name", "event_date", "freind_id")
        VALUES ($1, $2, $3)
    `;
        const sqlValues = [
            newEvent.event,
            newEvent.date,
            newEvent.friend_id
        ]
        
        pool.query(sqlQuery, sqlValues)
            .then((dbRes) => {
                res.sendStatus(201);
            })
            .catch((dbErr) => {
                console.error('POST events error', dbErr);
                res.sendStatus(500);
            })
    });

    router.delete('/:id', rejectUnauthenticated, (req, res) => {
        console.log('in deleteEvent server', req.params.id)

        const sqlQuery = `
        DELETE FROM "events" 
            WHERE "event_id"=$1;
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