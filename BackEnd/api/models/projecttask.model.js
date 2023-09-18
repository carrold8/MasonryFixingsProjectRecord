const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { Project } = require('./project.model');
const { Task } = require('./task.model');
const { Company } = require('./company.model');
const { TaskType } = require('./tasktype.model');



var ProjectTask = database.define('project_task', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
project_id: {
    type: DataTypes.INTEGER,
    allowNull: false
},
task_id: {
    type: DataTypes.INTEGER,
    allowNull: false
},
company_id: {
    type: DataTypes.INTEGER,
    allowNull: false
},
task_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false
},
approx_val: {
    type: DataTypes.INTEGER,
    allowNull: false
},
 start_date: { 
    type: DataTypes.DATE, 
    allowNull: false 
},
end_date: { 
    type: DataTypes.DATE, 
    allowNull: false 
},

}, {freezeTableName: true, timestamps: false});

ProjectTask.belongsTo(Project, {foreignKey: 'project_id'});
ProjectTask.belongsTo(Task, {foreignKey: 'task_id'});
ProjectTask.belongsTo(Company, {foreignKey: 'company_id'});
ProjectTask.belongsTo(TaskType, {foreignKey: 'task_type_id'});

module.exports.ProjectTask = ProjectTask;