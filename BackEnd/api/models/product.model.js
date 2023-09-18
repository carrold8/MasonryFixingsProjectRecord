const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');



var Product = database.define('product', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 name: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
price: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
}, {freezeTableName: true, timestamps: false});

module.exports.Product = Product;