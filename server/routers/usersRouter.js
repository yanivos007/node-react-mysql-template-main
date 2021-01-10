const router = require('express').Router();

router.get('/', async (req,res) =>{
    try{
       const users =  await dbService.executeQuery('SELECT * FROM users');
        res.json(users)
    }catch(err){
        alert(err)
    }
})

router.post('/register', async (req,res) =>{
    try{
        const {firstName, lastName, userName, password } = req.body
        const newVacation = await dbService.executeQuery('INSERT INTO `project`.`users``firstName`,`lastName`,`userName`,`password`',
        [firstName, lastName, userName, password])
        // const { firstName, lastName, userName, password}= req.body;
        // const newUser = fetch('/api/users')
    }catch(err){
console.log(err)
    }
})
module.exports = router;