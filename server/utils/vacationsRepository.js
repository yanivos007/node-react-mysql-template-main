const { json } = require('body-parser');
const dbService = require('./dbService');


// const vacation = await dbService.executeQuery('INSERT INTO `project1`.`vacations`(`description`,`destination`,`price`,`dates`,`followers`)',
// [description, destination, price, dates, followers]);
class vacationsRepository {
    constructor(){
    this.vacations =[]
    }  
async getAll() {
    return await dbService.executeQuery('SELECT * FROM vacations');
  }
//POST /api/vacations/post
  // async addVacation(vacation) {
  //   const newVacationData =  {description, destination, price, dates, followers} 
  //     const results = await dbService.executeQuery(
  //     'INSERT INTO vacations SET ? ', newVacationData)
  //   return vacation = { id: results.insertId, results, createdAt}

  // }
  async addVacation(newVacationData) {
    const {description, destination, price, dates, followers} = newVacationData
    if(!newVacationData){
      throw ({error:["vacation is already exist!"]});
    }else{
      const createdAt = Date.now();
      const newVacation = { description, destination, price, dates, followers};
      const results =  await dbService.executeQuery('INSERT INTO  users set ?' , 
      newVacation) ;
      return {id: results.insertId, ...newVacation, createdAt};
    }
  }
  async save(data) {
    const result = await dbService.executeQuery('INSERT INTO vacations SET ?', data);
    return { id: result.insertId, ...data };
  }
  async deleteById(id) {
    const results = await dbService.executeQuery('DELETE FROM vacations WHERE id = ?', [id]);
    return (results.length === 0) ? null : results[0];
  }
}


const REPOSITORY = new vacationsRepository();
module.exports = REPOSITORY;