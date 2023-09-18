const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { Task } = require('./task.model');


var TaskType = database.define('task_type', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 name: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
task_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
}, {freezeTableName: true, timestamps: false});


TaskType.belongsTo(Task, {foreignKey: 'task_id'});

module.exports.TaskType = TaskType;