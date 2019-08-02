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

router.get('/:id', async(req, res) => {
    try {
        const joke = await Jokes.getPublicJokesById(req.params.id);
        res.status(201).json(joke);
    }catch(error) {
        res.status(500).json({
            error: error.toString()
        })
    }
})

router.put('/:id', async(req, res) => {
    try {
        const joke = await Jokes.update(req.params.id, req.body);
        res.status(201).json(joke);
    }catch(error) {
        res.status(500).json({
            error: error.toString()
        })
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const joke = await Jokes.remove(req.params.id);
        res.status(201).json(joke);
    }catch(error) {
        res.status(500).json({
            error: error.toString()
        })
    }
});





module.exports = router;