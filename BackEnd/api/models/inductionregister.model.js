const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { Project } = require('./project.model');
const { User } = require('./user.model');


var InductionRegister = database.define('induction_register', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {freezeTableName: true, timestamps: false})

InductionRegister.belongsTo(Project, {foreignKey: 'project_id'});
InductionRegister.belongsTo(User, {foreignKey: 'user_id'});


module.exports.InductionRegister = InductionRegister;