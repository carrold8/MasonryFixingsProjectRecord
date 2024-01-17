const express = require('express');
const router = express.Router();

const {Company} = require('../models/company.model');
const { HeadOffice } = require('../models/headoffice.model');
const {Address} = require('../models/address.model');
const { Employee } = require('../models/employee.model');
const { EmployeeType } = require('../models/employeetype.model');
const { CompanyCompanyType } = require('../models/companycompanytype.model');
const { CompanyType } = require('../models/companytype.model');
const { managementAuth, userAuth } = require('./routes.sessionauth');

router.get('/', userAuth, function(request, response) {
    Company.findAll({
        // include: {all: true, nested: true},
        // attributes: {exclude: ['company_type_id', 'head_office_id']}
    })
    .then(function(address) {
      response.json(address);
    })
   });

   router.post( '/', userAuth, function(request, response) {
    Address.create({
        line1: request.body.head_office.address.line1,
        line2: request.body.head_office.address.line2,
        city: request.body.head_office.address.city,
        county_id: request.body.head_office.address.county_id,
        country_id: request.body.head_office.address.country_id,
    })
    .then(function(address) {
      
      HeadOffice.create({
        phone: request.body.head_office.phone,
        address_id: address.id
      }).then(function(head_office){
        Company.create({
          name: request.body.name,
          company_type_id: request.body.company_type_id,
          head_office_id: head_office.id
        }).then(function(company){
          response.json(company);
        })
      })

    })
   });

   router.get('/:id', userAuth, function(request, response) {
    Company.findOne({ 
        where: {id: request.params.id},
    })
    .then(function(company) {
      response.json(company);
    })
   });

   router.get('/:companyID/head-office', userAuth, function(request, response){
    Company.findOne(
      {where: {id: request.params.companyID}}
    )
    .then(function(company){
      HeadOffice.findOne(
        {where: {id: company.head_office_id}}
      )
      .then(function(headOffice){
        response.json(headOffice);
      })
    })
   });

   router.put('/:companyID/head-office', userAuth, function(request, response){
    Company.findOne(
      {where: {id: request.params.companyID}}
    )
    .then(function(company){
      HeadOffice.update(
        {phone: request.body.phone},
        {where: {id: company.head_office_id}}
      )
      .then(function(headOffice){
        Address.update(
          {
            line1: request.body.line1,
            line2: request.body.line2,
            city: request.body.city,
            county_id: request.body.county_id,
            country_id: request.body.country_id,
          },
          {where: {id: request.body.address_id}}
        )
        .then(function(address){
          response.json(address);
        })
      })
    })
   })


   router.put('/:id', userAuth, function(request, response) {
      Company.update(
        {name: request.body.name},
        {where: {id: request.params.id}}
      )
      .then(function(company) {
        response.json(company);
      })
   });


   router.get('/:id/employees', userAuth, function(request, response) {
    Employee.findAll({
        
        where: {company_id: request.params.id},
        include: {model: EmployeeType},
        attributes: {exclude: ['employee_type_id']}
    })
    .then(function(employees) {
      response.json(employees ? employees : []);
    })
   });

   router.post('/:companyID/employee', userAuth, function(request, response) {
    Employee.create({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone: request.body.phone,
        employee_type_id: request.body.employee_type_id,
        company_id: request.params.companyID
    })
    .then(function(employee) {
      response.json(employee);
    })
   });

   router.put('/:companyID/employee', userAuth, function(request, response){

        Employee.update({
        
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone: request.body.phone,
        employee_type_id: request.body.employee_type_id,
        company_id: request.params.company_id
        }, 
        {where: { id: request.params.companyID}
    })
    .then(function(employee) {
        response.json(employee);
    })
    });

    



module.exports = router;