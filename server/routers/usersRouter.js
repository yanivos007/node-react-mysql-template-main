const router = require('express').Router();
const dbService = require('../utils/dbService');
const bcrypt = require('bcrypt');


router.get('/', async (req, res) => {
    try {
        const users = await dbService.executeQuery('SELECT * FROM users');
        res.json(users)
    } catch (err) {
        alert(err)
    }
})
router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const user = await dbService.executeQuery(`SELECT * FROM users where userName =${userName} `, [userName]);
    if (!user) {
        console.log('you need to register first')
        console.log(user)
    } else {
        res.send(user)

    }
})

router.post('/post', async (req, res) => {
    try {
        const { firstName, lastName, userName, password } = req.body
        const newVacation = await dbService.executeQuery('INSERT INTO  users (firstName, lastName, userName, password) VALUES(?,?,?,?)',
            [firstName, lastName, userName, password])
        console.log(newVacation)
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;