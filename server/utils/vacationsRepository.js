const dbService = require('./dbService');


class vacationsRepository {
 
async getAll() {
    return await dbService.executeQuery('SELECT * FROM vacations');
  }
  
  async addVacation(newVacationData) {
    const {description, destination, price, date, toDate, followers} = newVacationData
    console.log(newVacationData)
    if(!newVacationData){
      response.status(401).send('vacation is already exist')
    }else{
      const newVacation = { description, destination, price, date, toDate, followers};
      const results =  await dbService.executeQuery('INSERT INTO vacations set ?' , newVacation) ;
      return {id: results.insertId, ...newVacation};
    }
  }
  async update(data) {
    const newVacation = { description, destination, price, date, toDate, followers};

    const result = await dbService.executeQuery('UPDATE INTO vacations SET ?', newVacation);
    return { id: result.insertId, ...data };
  }
  async deleteById(id) {
    const results = await dbService.executeQuery('DELETE FROM vacations WHERE id = ?', [id]);
    return (results.length === 0) ? null : results[0];
  }
}


const REPOSITORY = new vacationsRepository();
module.exports = REPOSITORY;