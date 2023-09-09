const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { Address } = require('./address.model');


var HeadOffice = database.define('head_office', {
    id: { 
       type: DataTypes.INTEGER,
       autoIncrement: true, 
       primaryKey: true 
   },
    phone: { 
       type: DataTypes.TEXT, 
       allowNull: false 
   },
   address_id: {
    type: DataTypes.INTEGER,
    allowNull: false
},
   }, {freezeTableName: true, timestamps: false});

HeadOffice.belongsTo(Address, {foreignKey: 'address_id'});
// Address.hasOne(HeadOffice, {foreignKey: 'address_id'});
   
   module.exports.HeadOffice = HeadOffice;