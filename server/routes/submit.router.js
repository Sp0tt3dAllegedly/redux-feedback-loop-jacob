const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.post('/', (req, res) => {
    const submittedFeedback = req.body;
    console.log('req.body', req.body);
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
      VALUES ($1, $2, $3, $4);`;
    const values = [submittedFeedback.feeling, submittedFeedback.understanding, 
        submittedFeedback.support, submittedFeedback.comments]
    console.log(values);
    pool.query(sqlText, values).then((result) => {
        console.log(`Added feedback:`, newFeedback);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error with adding ${sqlText}`, error);
        res.sendStatus(500);
    });
})

module.exports = router;