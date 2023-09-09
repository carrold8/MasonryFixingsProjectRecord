const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');

const EmployeeType = require('./employeetype.model').EmployeeType;

var Employee = database.define('employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employee_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {freezeTableName: true, timestamps: false})

Employee.belongsTo(EmployeeType, {foreignKey: 'employee_type_id'});

module.exports.Employee = Employee;