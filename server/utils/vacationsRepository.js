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

  async addVacation(newVacationData) {
    try{
      const {description, destination, price, dates, followers} = newVacationData
      const vacation = await dbService.executeQuery('INSERT INTO vacations (description, destination, price, dates, followers) VALUES(?,?,?,?,?)',
    [description, destination, price, dates, followers]);
    const createdAt = Date.now();

    const newVacation ={...vacation, id: vacation.id, createdAt}
    res.send(newVacation) ;
    }catch (error){
      console.log(error)
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