const router = require('express').Router();
const usersRepository = require ('../utils/usersRepository')


router.get('/', async (req, res) => {
    try {
        const users = await usersRepository.getAll()
        res.json(users)
    } catch (err) {
        alert(err)
    }
})
///get by userName
router.get('/:userName', async (req, res) => {
    const userName = await usersRepository
    .findByUserName(userName)
    res.json(req.body)
    .then(res =>res.json())
    res.json(userName);
    return userName;
})
router.post('/login', async (req,res)=>{
    try {
        const {userName,password} = req.body
        const user = await usersRepository.login(userName,password)
        
        if(typeof user === "string"){
            res.status(500).send({error:[user]})
        }else{
            res.status(200).send(user);
            
        }
    } catch (err) {
        console.log(err)
    }
})
// const removeProperties = (obj, properties) => {
//     const result = { ...obj };
//     for (const property of properties) {
//         delete result[property];
//     }
//     return result;
// }
router.post('/register', async (req, res) => {
    try {
        const newUserData = req.body
        const newUser = await usersRepository.addNewUser(newUserData)
        if(!newUser){
            res.status(500).send({error:['something went wrong']})
            .then(res=>res.json())
        }else{
            res.status(200).send(newUser);
            
        }
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;
