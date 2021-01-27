// const router = require('../routers/vactionsRouter');
const dbService = require('./dbService');
const bcrypt = require('bcrypt');
const { response } = require('express');


class usersRepository {

  async getAll() {
    return await dbService.executeQuery('SELECT * FROM users');
  }

  // async deleteUser() {
  //   const {id} = req.params
  //   const response = await dbService.executeQuery('DELETE FROM users where id =?', [id]);
  //   console.log(response);
  //   return userName + 'has deleted'
  // }

  async findByUserName(userName) { //validation of user / admin? 
    userName = userName.trim().toLowerCase();
    const admin = await dbService.executeQuery('SELECT * FROM users WHERE role = "admin"');
    const results = await dbService.executeQuery('SELECT * FROM users WHERE userName = ?', [userName]);
    if (admin){
      console.log("admin is connected")
      return admin;
    }
    console.log("user is connected")
    return results[0];
  };

  async addNewUser(newUserData) {
    const { firstName, lastName, userName, password } = newUserData
    const user = await this.findByUserName(newUserData.userName)
    console.log(user)
    if (!user) {
      const admin = user;
      console.log(admin)
      response.status(401).send('user already in used')
    } else {
      const hash = await bcrypt.hash(password, 10);
      const createdAt = Date.now();
      const newUser = { firstName, lastName, userName, password: hash };
      const results = await dbService.executeQuery('INSERT INTO users set ?', newUser);
      return { id: results.insertId, ...newUser, createdAt };
    }
  }
  // async admin(userName, password){
  //   const user = await dbService.executeQuery('select * from users WHERE userName = 123 && password = 123 ', )

  // }

  async login(userName, password) {
    const user = await dbService.executeQuery('select * from users WHERE userName =? ', [userName])
    console.log(user)
    // .then(user => response.json(user))

    if (!user.length) {
      return 'user not found';
    } else {
      const response = await bcrypt.compare(password, user[0].password)
      if (response == true) {
        const newUser = user[0]
        delete newUser.password
        return newUser;
      } else {
        return 'password id not matched'
      }
    }

  }

}

const REPOSITORY = new usersRepository();
module.exports = REPOSITORY;
