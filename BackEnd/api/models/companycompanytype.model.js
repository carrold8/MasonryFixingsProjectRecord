const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { CompanyType } = require('./companytype.model');


var CompanyCompanyType = database.define('company_company_type', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 company_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
company_type_id: {
    type: DataTypes.INTEGER,
}
}, {freezeTableName: true, timestamps: false});

CompanyCompanyType.belongsTo(CompanyType, {foreignKey: 'company_type_id'})

module.exports.CompanyCompanyType = CompanyCompanyType;
