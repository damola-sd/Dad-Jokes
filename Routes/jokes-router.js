const router = require('express').Router();
const restricted = require('../auth/restricted');

const Jokes = require('../Models/Jokes/jokes-model');

router.get('/', async(req, res) => {
    try {
        const publicJokes = await Jokes.getPublicJokes();
        res.status(201).json(publicJokes);
    }catch(error) {
        res.status(500).json({
            error: error.toString()
        })
    }
})





module.exports = router;