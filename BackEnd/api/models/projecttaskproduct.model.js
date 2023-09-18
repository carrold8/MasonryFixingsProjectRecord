const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { ProjectTask } = require('./projecttask.model');
const { Product } = require('./product.model');
const { User } = require('./user.model');



var ProjectTaskProduct = database.define('project_task_product', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
project_task_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
product_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
quantity: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
user_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
}, {freezeTableName: true, timestamps: false});

ProjectTaskProduct.belongsTo(ProjectTask, {foreignKey: 'project_task_id'})
ProjectTaskProduct.belongsTo(Product, {foreignKey: 'product_id'})
ProjectTaskProduct.belongsTo(User, {foreignKey: 'user_id'})

module.exports.ProjectTaskProduct = ProjectTaskProduct;