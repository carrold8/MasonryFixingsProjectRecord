const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { Project } = require('./project.model');
const { User } = require('./user.model');


var AnchorTraining = database.define('anchor_training', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    project_id: {
        type: DataTypes.STRING,
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
    note: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {freezeTableName: true, timestamps: false})

AnchorTraining.belongsTo(Project, {foreignKey: 'project_id'});
AnchorTraining.belongsTo(User, {foreignKey: 'user_id'});


module.exports.AnchorTraining = AnchorTraining;