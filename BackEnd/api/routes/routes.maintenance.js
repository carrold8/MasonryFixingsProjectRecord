const express = require('express');
const { User } = require('../models/user.model');
const { CompanyType } = require('../models/companytype.model');
const { EmployeeType } = require('../models/employeetype.model');
const { Category } = require('../models/category.model');
const router = express.Router();



router.post('/user', function(request, response) {
    User.create({
        name: request.body.name
    })
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

router.post('/company-type', function(request, response) {
  CompanyType.create({
      name: request.body.name
  })
  .then(function(companyType) {
    response.json(companyType);
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

module.exports = router;