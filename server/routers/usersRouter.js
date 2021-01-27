require('dotenv').config()

const router = require('express').Router();
const usersRepository = require ('../utils/usersRepository')
const dbService = require('../utils/dbService');
const jwt = require('jsonwebtoken')

router.get('/', async (req, res) => {
    try {
        const users = await usersRepository.getAll()
        res.json(users)
    } catch (err) {
    console.log(err)  
  }
})
///get by userName
router.get('/users/:userName', async (req, res) => {
    const userName = await usersRepository.findByUserName(userName)
    return userName;
})

router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params
 const user = await dbService.executeQuery('DELETE FROM users where id =?', [id], (err, response)=>{
     if(!err){
         res.send(response + 'user is deleted')
         console.log(response)
     }else{
         console.log(err)
     }
 })
 return user;
})
 
router.post('/login', authenticateToken, async (req,res)=>{
    try {
        const {userName,password} = req.body;
        const user = await usersRepository.login(userName,password)
        console.log(user[0])
        if(typeof user === "string"){
           const accessToken = jwt.sign(userName, process.env.ACCESS_TOKEN_SECRET)
            res.json({accessToken: accessToken})
            console.log(accessToken)
            res.status(500).send({error:[user]})
        }else{
            res.status(200).send(user);
            
        }
    } catch (err) {
        console.log(err)
    }
})

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
if ( token == null) return res.sendStatus(401) 
jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user)=> {
    if(err) return res.sendStatus(403)
    req.userName = userName
    next()
})
}

router.post('/register', async (req, res) => {
    try {
        const newUserData = req.body
        const newUser = await usersRepository.addNewUser(newUserData)
        if(!newUser){
            res.status(500).send({error:['something went wrong']})
            // .then(res=>res.json())
        }else{
            res.status(200).send(newUser);
            
        }
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;
