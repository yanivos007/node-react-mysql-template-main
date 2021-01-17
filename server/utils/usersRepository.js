// const router = require('../routers/vactionsRouter');
const dbService = require('./dbService');
// const bcrypt = require('bcrypt');


class usersRepository {
constructor(){
this.user =[]
this.nextId = 1;

} 
 async getAll() {
    this.users =  await dbService.executeQuery('SELECT * FROM users');
  }

async findByUserName(userName){
  userName = userName.trim().toLowerCase();
  const results = await dbService.executeQuery('SELECT * FROM users WHERE userName = ?', [userName]);
  return results;
};

   async addNewUser(newUserData) {
     const {firstName, lastName, userName, password} = newUserData
    const newUser =  await dbService.executeQuery('INSERT INTO  users (firstName, lastName, userName, password) VALUES(?,?,?,?)', 
    [firstName, lastName, userName, password]) ;
    if(this.findByUserName(userName)){
      throw ({error:["userName is already in used!"]});
    }else{
      const hash = await bcrypt.hash(password, 10);
      const createdAt = Date.now();
      const brandNewUser = { ...newUser, password: hash, createdAt };
      res.send(brandNewUser)
    }
    return newUserData;
   }

  // async save(data) {
  //   const result = await dbService.executeQuery('INSERT INTO users SET ?', data);
  //   return { id: result.insertId, ...data };
  // }
  // async deleteById(id) {
  //   const results = await dbService.executeQuery('DELETE FROM users WHERE id = ?', [id]);
  //   return (results.length === 0) ? null : results[0];
  // }
}

const REPOSITORY = new usersRepository();
module.exports = REPOSITORY;
