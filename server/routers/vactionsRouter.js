const router = require('express').Router();
const { json } = require('body-parser');
// const dbService = require('../utils/dbService');
const REPOSITORY = require('../utils/vacationsRepository');


router.get('/', async (req, res) => {
    try {
        const vacations = await REPOSITORY.getAll();
        res.send(vacations)
    } catch (err) {
        console.log(err)
    }
})

router.post('/post', async (req, res) => {
    try {
   const newVacationData = req.body
    const newVacation = await REPOSITORY.addVacation(newVacationData)
    console.log(newVacation)    
    if(!newVacation){
            res.status(500).send({error:['something went wrong']})
        }else{
            console.log('no vacations')
            res.status(200).send(newVacation)
        }
} catch (err) {
        console.log(err)
    }
})
// router.delete('/delete', async (req,res)=>{
//             const { destination, description, cost, dates, followers } = req.body

// })

module.exports = router;