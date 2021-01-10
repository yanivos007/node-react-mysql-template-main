const router = require('express').Router();
const dbService = require('../utils/dbService');



router.get('/', async (req, res) => {
    try {
        const vacations = await dbService.executeQuery('SELECT * FROM vacations;');
        res.json(vacations)
    } catch (err) {
        console.log(err)
    }
})

router.post('/post', async (req, res) => {
    try {
        const { destination, description, cost, dates, followers } = req.body
        const newVacation = await dbService.executeQuery('INSERT INTO  vacations (destination, description, cost, dates,followers) VALUES(?,?,?,?,?)',
            [destination, description, cost, dates, followers])
        // return newVacation;
        console.log(newVacation);
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;