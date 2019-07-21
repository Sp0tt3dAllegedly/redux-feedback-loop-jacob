const express = require('express');
const router = express.Router();

const submission = [

]

router.post('/', (req, res) =>{
    let newSubmission = req.body;
    submission.push(newSubmission);
    console.log('Added feedback', newSubmission, submission);
    res.sendStatus(201);
})

module.exports = router;