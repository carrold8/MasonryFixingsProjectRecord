const database = require('../../config/database').database;
const {  DataTypes } = require('sequelize');
const { Address } = require('./address.model');
const { Company } = require('./company.model');
const { Employee } = require('./employee.model');
const { FrameMaterial } = require('./framematerial.model');
const { Category } = require('./category.model');
const { Sector } = require('./sector.model');
const { FloorMaterial } = require('./floormaterial.model');
const { EnvelopeMaterial } = require('./envelopematerial.model');
const { RoofMaterial } = require('./roofmaterial.model');
const { PartitioningMaterial } = require('./partitioningmaterial.model');



var Project = database.define('project', {
 id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    primaryKey: true 
},
 name: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
cis_id: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
completed: { 
    type: DataTypes.BOOLEAN, 
    allowNull: false 
},
address_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
applicant: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
architect_company_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
architect_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
engineering_company_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
engineer_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
contacted_engineer: { 
    type: DataTypes.BOOLEAN, 
    allowNull: false 
},
category_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
sector_id: { 
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
induction_required: { 
    type: DataTypes.BOOLEAN, 
    allowNull: false 
},
induction_provided: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
building_description: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
footprint: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
frame_material_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
floor_material_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
envelope_material_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
roof_material_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
partitioning_material_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
main_contractor_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
account_contact_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
foreman_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
safety_officer_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},
storeman_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
},

}, {freezeTableName: true, timestamps: false});

Project.belongsTo(Address, {foreignKey: 'address_id'});
Project.belongsTo(Company, {foreignKey: 'architect_company_id'});
Project.belongsTo(Employee, {foreignKey: 'architect_id'});
Project.belongsTo(Company, {foreignKey: 'engineering_company_id'});
Project.belongsTo(Employee, {foreignKey: 'engineer_id'});
Project.belongsTo(Category, {foreignKey: 'category_id'});
Project.belongsTo(Sector, {foreignKey: 'sector_id'});
Project.belongsTo(FrameMaterial, {foreignKey: 'frame_material_id'});
Project.belongsTo(FloorMaterial, {foreignKey: 'floor_material_id'});
Project.belongsTo(EnvelopeMaterial, {foreignKey: 'envelope_material_id'});
Project.belongsTo(RoofMaterial, {foreignKey: 'roof_material_id'});
Project.belongsTo(PartitioningMaterial, {foreignKey: 'partitioning_material_id'});
Project.belongsTo(Company, {foreignKey: 'main_contractor_id'});
Project.belongsTo(Employee, {foreignKey: 'account_contact_id'});
Project.belongsTo(Employee, {foreignKey: 'foreman_id'});
Project.belongsTo(Employee, {foreignKey: 'safety_officer_id'});
Project.belongsTo(Employee, {foreignKey: 'storeman_id'});

module.exports.Project = Project;