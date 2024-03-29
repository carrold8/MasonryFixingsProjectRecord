const express = require('express');
const { User } = require('../models/user.model');
const { CompanyType } = require('../models/companytype.model');
const { EmployeeType } = require('../models/employeetype.model');
const { Category } = require('../models/category.model');
const { FloorMaterial } = require('../models/floormaterial.model');
const { FrameMaterial } = require('../models/framematerial.model');
const { EnvelopeMaterial } = require('../models/envelopematerial.model');
const { RoofMaterial } = require('../models/roofmaterial.model');
const { PartitioningMaterial } = require('../models/partitioningmaterial.model');
const { Task } = require('../models/task.model');
const { TaskType } = require('../models/tasktype.model');
const { Sector } = require('../models/sector.model');
const { Product } = require('../models/product.model');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/user', async function(request, response) {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    User.findAll({where: {username: request.body.username }})
  .then(function(username) {
    if(username.length !== 0){
      response.sendStatus(409);
    }
    else{
      User.create({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        password: hashedPassword,
        email: request.body.email,
        role: request.body.role,
        username: request.body.username
      })
      .then(function(user) {
        response.json(user);
      })
    }
  })
    
});
router.put('/user/:userID', function(request, response) {

  User.findAll({where: {username: request.body.username }})
  .then(function(username) {
    if(username.length === 1 && username[0].dataValues.id != request.params.userID){
      response.sendStatus(409);
    }
    else{
      User.update({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        role: request.body.role,
        username: request.body.username
    },
    {where: {id: request.params.userID}})
    .then(function(user) {
      response.json(user);
    })
    }
  })
 
});
router.delete('/user/:userID', function(request, response) {

  User.destroy({where: {id: request.params.userID }})
  .then(function(user) {
    response.json(user);
  })
  // .catch((err) => {
  //   response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  // })
 
});

router.put('/user/:userID/password', async function(request, response) {

  const hashedPassword = await bcrypt.hash(request.body.password, 10);
  User.update({
      password: hashedPassword,
  },
  {where: {id: request.params.userID}})
  .then(function(user) {
    response.json(user);
  })
});

router.post('/category', function(request, response) {
  Category.create({
      name: request.body.name
  })
  .then(function(category) {
    response.json(category);
  })
 });
 router.put('/category/:categoryID', function(request, response) {
  Category.update({
      name: request.body.name
  },
  {where: {id: request.params.categoryID}}
  )
  .then(function(category) {
    response.json(category);
  })
 });
 router.delete('/category/:categoryID', function(request, response) {
  Category.destroy({where: {id: request.params.categoryID}})
  .then(function(category) {
    response.json(category);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

 router.post('/sector', function(request, response) {
  Sector.create({
      name: request.body.name,
      category_id: request.body.category_id
  })
  .then(function(sector) {
    response.json(sector);
  })
 });
 router.put('/sector/:sectorID', function(request, response) {
  Sector.update({
      name: request.body.name
  },
  {where: {id: request.params.sectorID}})
  .then(function(sector) {
    response.json(sector);
  })
 });
 router.delete('/sector/:sectorID', function(request, response) {
  Sector.destroy({where: {id: request.params.sectorID}})
  .then(function(sector) {
    response.json(sector);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

router.post('/company-type', function(request, response) {
  CompanyType.create({
      name: request.body.name
  })
  .then(function(companyType) {
    response.json(companyType);
  })
 });
 router.put('/company-type/:companyTypeID', function(request, response) {
  CompanyType.update({
      name: request.body.name
  },
  {where: {id: request.params.companyTypeID}})
  .then(function(companyType) {
    response.json(companyType);
  })
 });
 router.delete('/company-type/:companyTypeID', function(request, response) {
  CompanyType.destroy({where: {id: request.params.companyTypeID}})
  .then(function(companyType) {
    response.json(companyType);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

 router.post('/employee-type', function(request, response) {
  EmployeeType.create({
      name: request.body.name
  })
  .then(function(employeeType) {
    response.json(employeeType);
  })
 });
 router.put('/employee-type/:employeeTypeID', function(request, response) {
  EmployeeType.update({
      name: request.body.name
  },
  {where: {id: request.params.employeeTypeID}})
  .then(function(employeeType) {
    response.json(employeeType);
  })
 });
 router.delete('/employee-type/:employeeTypeID', function(request, response) {
  EmployeeType.destroy({where: {id: request.params.employeeTypeID}})
  .then(function(employeeType) {
    response.json(employeeType);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

 router.post('/frame-material', function(request, response) {
  FrameMaterial.create({
      name: request.body.name
  })
  .then(function(frameMat) {
    response.json(frameMat);
  })
 });
 router.put('/frame-material/:frameMaterialID', function(request, response) {
  FrameMaterial.update({
      name: request.body.name
  },
  {where: {id: request.params.frameMaterialID}})
  .then(function(frameMat) {
    response.json(frameMat);
  })
 });
 router.delete('/frame-material/:frameMaterialID', function(request, response) {
  FrameMaterial.destroy({where: {id: request.params.frameMaterialID}})
  .then(function(frameMat) {
    response.json(frameMat);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

 router.post('/floor-material', function(request, response) {
  FloorMaterial.create({
      name: request.body.name
  })
  .then(function(floorMat) {
    response.json(floorMat);
  })
 });
 router.put('/floor-material/:floorMaterialID', function(request, response) {
  FloorMaterial.update({
      name: request.body.name
  }, 
  {where: {id: request.params.floorMaterialID}})
  .then(function(floorMat) {
    response.json(floorMat);
  })
 });
 router.delete('/floor-material/:floorMaterialID', function(request, response) {
  FloorMaterial.destroy({where: {id: request.params.floorMaterialID}})
  .then(function(floorMat) {
    response.json(floorMat);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

 router.post('/envelope-material', function(request, response) {
  EnvelopeMaterial.create({
      name: request.body.name
  })
  .then(function(envMat) {
    response.json(envMat);
  })
 });
 router.put('/envelope-material/:matID', function(request, response) {
  EnvelopeMaterial.update({
      name: request.body.name
  },
  {where: {id: request.params.matID}})
  .then(function(envMat) {
    response.json(envMat);
  })
 });
 router.delete('/envelope-material/:matID', function(request, response) {
  EnvelopeMaterial.destroy({where: {id: request.params.matID}})
  .then(function(envMat) {
    response.json(envMat);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

 router.post('/roof-material', function(request, response) {
  RoofMaterial.create({
      name: request.body.name
  })
  .then(function(roofMat) {
    response.json(roofMat);
  })
 });
 router.put('/roof-material/:matID', function(request, response) {
  RoofMaterial.update({
      name: request.body.name
  },
  {where: {id: request.params.matID}}
  )
  .then(function(roofMat) {
    response.json(roofMat);
  })
 });
 router.delete('/roof-material/:matID', function(request, response) {
  RoofMaterial.destroy({where: {id: request.params.matID}}
  )
  .then(function(roofMat) {
    response.json(roofMat);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

 router.post('/partitioning-material', function(request, response) {
  PartitioningMaterial.create({
      name: request.body.name
  })
  .then(function(partitionMat) {
    response.json(partitionMat);
  })
 });
 router.put('/partitioning-material/:matID', function(request, response) {
  PartitioningMaterial.update({
      name: request.body.name
  },
  {where: {id: request.params.matID}})
  .then(function(partitionMat) {
    response.json(partitionMat);
  })
 });

 router.delete('/partitioning-material/:matID', function(request, response) {
  PartitioningMaterial.destroy({where: {id: request.params.matID}})
  .then(function(partitionMat) {
    response.json(partitionMat);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

 router.post('/task', function(request, response) {
  Task.create({
      name: request.body.name,
      stage_id: request.body.stage_id
  })
  .then(function(task) {
    response.json(task);
  })
 });
 router.put('/task/:taskID', function(request, response) {
  Task.update({
      name: request.body.name
  },
  {where: {id: request.params.taskID}})
  .then(function(task) {
    response.json(task);
  })
 });
 router.delete('/task/:taskID', function(request, response) {
  Task.destroy({where: {id: request.params.taskID}})
  .then(function(task) {
    response.json(task);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

 router.post('/task-type', function(request, response) {
  TaskType.create({
      name: request.body.name,
      task_id: request.body.task_id
  })
  .then(function(taskType) {
    response.json(taskType);
  })
 });
 router.put('/task-type/:taskTypeID', function(request, response) {
  TaskType.update({
      name: request.body.name
  },
  {where: {id: request.params.taskTypeID}})
  .then(function(taskType) {
    response.json(taskType);
  })
 });

 router.delete('/task-type/:taskTypeID', function(request, response) {
  TaskType.destroy({where: {id: request.params.taskTypeID}})
  .then(function(taskType) {
    response.json(taskType);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });

 router.post('/product', function(request, response) {
  Product.create({
      name: request.body.name,
      price: request.body.price
  })
  .then(function(product) {
    response.json(product);
  })
 });
 router.put('/product/:productID', function(request, response) {
  Product.update({
      name: request.body.name,
      price: request.body.price
  },
  {where: {id: request.params.productID}})
  .then(function(product) {
    response.json(product);
  })
 });

 router.delete('/product/:productID', function(request, response) {
  Product.destroy({where: {id: request.params.productID}})
  .then(function(product) {
    response.json(product);
  })
  .catch((err) => {
    response.status(403).json({message: "This resource cannot be deleted as it is being referenced elsewhere in the system. If you wish to delete this resource you need to remove all references to it."});
  })
 });
 

module.exports = router;