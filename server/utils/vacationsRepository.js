const dbService = require('./dbService');


class vacationsRepository {
 
async getAll() {
    return await dbService.executeQuery('SELECT * FROM vacations');
  }

  async addVacation(newVacationData) {
    console.log(newVacationData);
    const {description, destination, price, dates, followers} = newVacationData
    if(!newVacationData){
      throw ({error:["vacation is already exist!"]});
    }else{
      const createdAt = Date.now();
      const newVacation = { description, destination, price, dates, followers};
      const results =  await dbService.executeQuery('INSERT INTO  vacations set ?' , 
      newVacation) ;
      return {id: results.insertId, ...newVacation, createdAt};
    }
  }
  async update(data) {
    const result = await dbService.executeQuery('UPDATE INTO vacations SET ?', data);
    return { id: result.insertId, ...data };
  }
  async deleteById(id) {
    const results = await dbService.executeQuery('DELETE FROM vacations WHERE id = ?', [id]);
    return (results.length === 0) ? null : results[0];
  }
}


const REPOSITORY = new vacationsRepository();
module.exports = REPOSITORY;