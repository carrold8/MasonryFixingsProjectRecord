const dbServices = require("./db.services");
const helper = require("../helper")
const config = require("../config/db.config");

const mysql = require('mysql');

async function getAll(page = 1){

    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await dbServices.query(
        "select * from address"
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
      
        // return {
        //   data,
        //   meta
        // }
        return data;
}

async function getByID(page = 1, id){

    const queryString = 'select * from address where id = ' + id; 
    console.log(queryString);
    const offset = helper.getOffset(page, config.listPerPage);
    const address = await dbServices.query(
        queryString
    );
    console.log('rows before: ', address);
    const data = helper.emptyOrRows(address);

    const county = await dbServices.query('select * from county where id = ' + address[0].id);
    const meta = {page};
      
        // return {
        //   address: data[0],
        //   meta
        // }
        // return data;
        return {
            address: {
                line1: address[0].line1,
                city: address[0].city,
                county: county[0]
            }
        }
}


async function createNew(page = 1, address){

    
    
    const queryString = "insert into address (??, ??, ??, ??, ??) values (??, ??,??,??,??)";
    const table = 
    ["line1", "line2", "city", "county_id", "country_id",
    address.line1, address.line2, address.city, address.county_id, address.country_id] 
    const query = mysql.format(queryString, table);
    console.log('Query formatted: ',query);
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await dbServices.query(
        query
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
    createNew
}