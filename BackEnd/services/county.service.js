const dbServices = require("./db.services");
const helper = require("../helper")
const config = require("../config/db.config");

async function getAll(page = 1){

    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await dbServices.query(
        'select * from county'
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
      
        return {
          data,
          meta
        }
}

async function getByID(page = 1, id){

    const queryString = 'select * from county where id = ' + id; 
    console.log(queryString);
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await dbServices.query(
        // 'select * from county where id = ${id}'
        queryString
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
      
        return {
          data,
          meta
        }
}


module.exports = {
    getAll,
    getByID
}