const router = require('express').Router();
const dbService = require('../utils/dbService');
// const bcrypt = require('bcrypt');


router.get('/', async (req, res) => {
    try {
        const users = await dbService.executeQuery('SELECT * FROM users');
        res.json(users)
    } catch (err) {
        alert(err)
    }
})

// router.post('/login', (req,res)=>{
//         const { userName, password } = req.body;
// bcrypt.hash(password, saltRounds, function(err, hash) {
//         if(userName && password){
//             db.query('SELECT password FROM users WHERE userName = ?', [userName], 
//             (error, results, fields)=> {
//                 await bcrypt.compare(password, results, (err, match) =>{
//                     if(match){
//                         const sessionUser = remove(user, ["password"]);
//                         req.session.user = sessionUser;
//                         res.cookie('userName', userName);
//                         res.send(sessionUser)
    
//                     }else{
//                         res.status(401).send({errors: ["Bad user name or password"]});

//                     }
                
//                 }
//         }else{
//         res.send('Please enter Username and Password!');

//     }
// })
// });
// router.post('/login', (req,res)=>{
//         const { userName, password } = req.body;
//         if(userName && password){
//             db.query('SELECT password FROM users WHERE userName = ?', [userName], 
//             (error, results, fields)=> {
//                 if(bcrypt.compare(password, results)){
//                     res.send('something good is happening');
//                 }else{
//                     res.send(error)
//                 }
//         }
//     )}else{
//         res.send('Please enter Username and Password!');

//     }
// })

// router.post('/login', async (req, res) => {
//     const { userName, password } = req.body;
//     const user = await dbService.executeQuery(`SELECT * FROM users where userName =${userName} `, [userName]);
//     if (!user) {
//         alert('you need to register first')
//     } else {
//         res.send(user)

//     }
// })
const removeProperties = (obj, properties) => {
	const result = {...obj};
	for (const property of properties) {
		delete result[property];
	}
	return result;
}
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, userName, password } = req.body
        const newUser = await dbService.executeQuery('INSERT INTO  users (firstName, lastName, userName, password) VALUES(?,?,?,?)',
            [firstName, lastName, userName, password]);
            if(userName){
                res.status(401).send({error: ["user name already exist in the DB"]});
            }else {
                
                res.send(removeProperties(newUser , ["password"]))
                then.console.log(newUser)
            }
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;