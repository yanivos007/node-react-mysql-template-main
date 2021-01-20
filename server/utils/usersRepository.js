// const router = require('../routers/vactionsRouter');
const dbService = require('./dbService');
const bcrypt = require('bcrypt');
const { response } = require('express');


class usersRepository {
constructor(){
this.user =[]
this.nextId = 1;

} 
 async getAll() {
    const user =  await dbService.executeQuery('SELECT * FROM users');
    const newUser = this.setState({
      user: newUser
    });
    console.log(newUser)
    console.log(user)
    return user;
  }

async findByUserName(userName){
  userName = userName.trim().toLowerCase();
  const results = await dbService.executeQuery('SELECT * FROM users WHERE userName = ?', [userName]);

  return results[0];
};

   async addNewUser(newUserData) {
    const {firstName, lastName, userName, password} = newUserData
    const user = await this.findByUserName(userName)
    if(user){
      response.status(401).send('user already in used')
    }else{
      const hash = await bcrypt.hash(password, 10);
      const createdAt = Date.now();
      const newUser = {firstName,lastName, userName, password: hash };
      const results =  await dbService.executeQuery('INSERT INTO  users set ?' , newUser) ;
      return {id: results.insertId, ...newUser, createdAt};
    }
   }

   async login(userName,password){
    const user = await dbService.executeQuery('SELECT * FROM USERS WHERE userName =? ',[userName] )
  if(!user.length){
    return 'user not found';
  }else{
    const response = await bcrypt.compare(password, user[0].password)
  if (response == true){
    return user[0];
  }else{
    return 'password id not matched'
  }
  }

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
