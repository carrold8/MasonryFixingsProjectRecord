const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');



var User = database.define('user', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 first_name: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
last_name: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
password: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
email: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
role: { 
    type: DataTypes.TEXT,
    enum: ['Admin', 'Management', 'Sales'], 
    allowNull: false,
},
username: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},

}, {freezeTableName: true, timestamps: false});

module.exports.User = User;