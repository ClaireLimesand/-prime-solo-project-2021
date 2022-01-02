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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
