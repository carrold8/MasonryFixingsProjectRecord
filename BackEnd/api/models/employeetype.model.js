const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');

var EmployeeType = database.define('employee_type', {
    id: { 
       type: DataTypes.INTEGER,
       autoIncrement: true, 
       primaryKey: true 
   },
    name: { 
       type: DataTypes.TEXT, 
       allowNull: false 
   },
   }, {freezeTableName: true, timestamps: false});
   
   module.exports.EmployeeType = EmployeeType;