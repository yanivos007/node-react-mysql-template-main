const router = require('express').Router();
// const dbService = require('../utils/dbService');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
    const userName = await usersRepository.findByUserName(userName);
    res.json(userName);
    return userName;
})


const removeProperties = (obj, properties) => {
    const result = { ...obj };
    for (const property of properties) {
        delete result[property];
    }
    return result;
}
router.post('/register', async (req, res) => {
    try {
        const newUserData = req.body
        const newUser = await usersRepository.addNewUser(newUserData);
        if(!newUser){
            res.status(500).send({error:['something went wrong']})
        }else{
            res.status(200).send(newUser)
        }
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;

// const router = require('express').Router();
// const dbService = require('../utils/dbService');
// const usersRepository = require('../utils/usersRepository');
// // const bcrypt = require('bcrypt');


// router.get('/', async (req, res) => {
//         const users = usersRepository.getAll();
//         if(users){
//             res.json(users)
//             console.log(users)
//         }else{
//             res.status(401).send({errors: ["something went wrong"]});
//         } 
// });
// router.get('/users/:id', (req,res) => {
//         const id = req.params
//         console.log(id)
// });

// router.post('/register', async (req, res) => {
//     try {
//         const user = await usersRepository.addNewUser(newUser)
//             if(user){
//                 res.status(401).send({error: ["user name already exist in the DB"]});
//             }else {
//                 res.send(user),
//                console.log(user)
//             }
//     } catch (err) {
//         res.status(500).send({err: ["couldn't do it dude"]});
//     }
// });

// router.post('/login', async (req,res)=>{
//     const user = await usersRepository.getAll(userName, password);
//     if(user){

//     }
// })

// const removeProperties = (obj, properties) => {
// 	const result = {...obj};
// 	for (const property of properties) {
// 		delete result[property];
// 	}
// 	return result;
// }

// module.exports = router;


// // router.post('/login', (req,res)=>{
// //         const { userName, password } = req.body;
// // bcrypt.hash(password, saltRounds, function(err, hash) {
// //         if(userName && password){
// //             db.query('SELECT password FROM users WHERE userName = ?', [userName], 
// //             (error, results, fields)=> {
// //                 await bcrypt.compare(password, results, (err, match) =>{
// //                     if(match){
// //                         const sessionUser = remove(user, ["password"]);
// //                         req.session.user = sessionUser;
// //                         res.cookie('userName', userName);
// //                         res.send(sessionUser)

// //                     }else{
// //                         res.status(401).send({errors: ["Bad user name or password"]});

// //                     }

// //                 }
// //         }else{
// //         res.send('Please enter Username and Password!');

// //     }
// // })
// // });
// // router.post('/login', (req,res)=>{
// //         const { userName, password } = req.body;
// //         if(userName && password){
// //             db.query('SELECT password FROM users WHERE userName = ?', [userName], 
// //             (error, results, fields)=> {
// //                 if(bcrypt.compare(password, results)){
// //                     res.send('something good is happening');
// //                 }else{
// //                     res.send(error)
// //                 }
// //         }
// //     )}else{
// //         res.send('Please enter Username and Password!');

// //     }
// // })

// // router.post('/login', async (req, res) => {
// //     const { userName, password } = req.body;
// //     const user = await dbService.executeQuery(`SELECT * FROM users where userName =${userName} `, [userName]);
// //     if (!user) {
// //         alert('you need to register first')
// //     } else {
// //         res.send(user)

// //     }
// // })