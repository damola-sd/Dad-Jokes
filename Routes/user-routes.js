const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../Models/User/user-model');
const Jokes = require('../Models/Jokes/jokes-model');

const secret = require('../auth/secret');
const generateToken = require('../auth/generateToken');
const restricted = require('../auth/restricted');


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;

    User.createUser(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    User.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get('/:id/jokes', restricted, async (req, res) => {
    try {
        const jokes = await Jokes.findByUserId(req.params.id);
        res.status(201).json(jokes);
    }catch(error) {
        res.status(500).json({
            error: error.toString()
        })
    }
})

router.post('/:id/jokes', restricted, async (req, res) => {
    try {
        const jokes = await Jokes.insert(req.params.id, req.body);
        res.status(201).json(jokes);
    }catch(error) {
        res.status(500).json({
            error: error.toString()
        })
    }
})

router.delete('/:id/jokes/jid', restricted, async (req, res) => {
    try {
        const jokes = await Jokes.remove(req.params.jid);
        res.status(201).json(jokes);
    }catch(error) {
        res.status(500).json({
            error: error.toString()
        })
    }
})
module.exports = router;


