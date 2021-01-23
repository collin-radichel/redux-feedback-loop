const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST route to send data to DB "prime_feedback"
router.post('/', (req,res) => {
    const feedback = req.body

    let feeling = feedback.feeling
    let understanding = feedback.understanding
    let support = feedback.support
    let comments = feedback.comments


    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`

    pool.query(queryText, [feeling, understanding, support, comments])
    .then(result => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log(`Error making database query ${queryText}`, error);
        res.sendStatus(500);
    })
}); //end POST ROUTE

module.exports = router;