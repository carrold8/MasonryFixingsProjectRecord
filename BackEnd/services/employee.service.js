const dbServices = require("./db.services");
const helper = require("../helper")
const config = require("../config/db.config");

async function getAllForCompany(page = 1, company_id){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await dbServices.query(
        'select * from employee where company_id =' + company_id
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
      
        return {
          data,
          meta
        }
}

module.exports = {
    getAllForCompany
}