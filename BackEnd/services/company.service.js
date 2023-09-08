const dbServices = require("./db.services");
const helper = require("../helper")
const config = require("../config/db.config");

async function getAll(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await dbServices.query(
        'select * from company'
    );
    const companies = helper.emptyOrRows(rows);
    const meta = {page};
      
        return {
          companies,
          meta
        }
}


async function getByID(page = 1, id){

    const queryString = 'select * from company where id = ' + id; 
    console.log(queryString);
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await dbServices.query(
        queryString
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
      
        return {
          data,
          meta
        }
}

async function getByComapnyTypeID(page = 1, id){

    if(id === 0){
        console.log('Getting All Companies')
        return getAll();
    }

    console.log('ID Value: ', id);

    const queryString = 'select * from company where company_type_id = ' + id; 
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
    getByID,
    getByComapnyTypeID
}