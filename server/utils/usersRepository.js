// const router = require('../routers/vactionsRouter');
const dbService = require('./dbService');
const bcrypt = require('bcrypt');


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

  async findByUserName(userName) {
    userName = userName.trim().toLowerCase();
    const results = await dbService.executeQuery('SELECT * FROM users WHERE userName = ?', [userName]);
    console.log(results)
    return results[0];
  };

  async addNewUser(newUserData) {
    const { firstName, lastName, userName, password } = newUserData
    const user = await this.findByUserName(userName)
    if (user) {
      response.status(401).send('user already in used')
    } else {
      const hash = await bcrypt.hash(password, 10);
      const createdAt = Date.now();
      const newUser = { firstName, lastName, userName, password: hash };
      const results = await dbService.executeQuery('INSERT INTO  users set ?', newUser);
      return { id: results.insertId, ...newUser, createdAt };
    }
  }

  async login(userName, password) {
    const user = await dbService.executeQuery('SELECT * FROM USERS WHERE userName =? ', [password])
    console.log(user)
    console.log(userName)
    if (!user.length) {
      return 'user not found';
    } else {
      const response = await bcrypt.compare(password, user[0].password)
      if (response == true) {
        return user[0];
      } else {
        return 'password id not matched'
      }
    }

  }

}

const REPOSITORY = new usersRepository();
module.exports = REPOSITORY;
