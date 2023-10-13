const express = require('express');
const router = express.Router();
const { where } = require('sequelize');

const {Company} = require('../models/company.model');
const { HeadOffice } = require('../models/headoffice.model');
const {Address} = require('../models/address.model');
const { Employee } = require('../models/employee.model');
const { EmployeeType } = require('../models/employeetype.model');
const { CompanyCompanyType } = require('../models/companycompanytype.model');
const { CompanyType } = require('../models/companytype.model');

router.get('/', function(request, response) {
    Company.findAll({
        include: {all: true, nested: true},
        attributes: {exclude: ['company_type_id', 'head_office_id']}
    })
    .then(function(address) {
      response.json(address);
    })
   });

   router.post( '/', function(request, response) {
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

   router.get('/:id', function(request, response) {
    Company.findOne({ 
        where: {id: request.params.id},
        include: {all: true, nested: true},
        // include: [
          // {model: CompanyCompanyType, as: 'types'}],
        // include: {model: CompanyCompanyType},
        // include: {model: CompanyCompanyType.findAll({where: {company_id: request.params.id}})},
        attributes: {exclude: ['company_type_id', 'head_office_id']}
    })
    .then(function(company) {
      response.json(company);
      // CompanyCompanyType.findAll({
      //   where: {company_id: company.id},
      //   include: [{model: CompanyType, attributes: ['id','name']}],
      //   attributes: {exclude: ['company_id', 'company_type_id']}
      // })
      // .then(function(types){
      //   company.test = types;
      //   response.json(company);
      // })
    })
   });


   router.put('/:id', function(request, response) {
    Address.update(
      {
          line1: request.body.head_office.address.line1,
          line2: request.body.head_office.address.line2,
          city: request.body.head_office.address.city,
          county_id: request.body.head_office.address.county_id,
          country_id: request.body.head_office.address.country_id,
      },
      { where: {id: request.body.head_office.address.id},
        
    })
    .then(function(address) {
      HeadOffice.update(
        {
          phone: request.body.head_office.phone,
          address_id: address.id
        },
        {where: {id: request.body.head_office.id}}
      )
      .then(function(head_office) {
        Company.update(
          {
            name: request.body.name,
            company_type_id: request.body.company_type_id,
            head_office_id: head_office.id,
          },
          {where: {id: request.body.id}}
        )
      })
      .then(function(company){
        response.json(company);
      })
    })
   });


   router.get('/:id/employees', function(request, response) {
    Employee.findAll({
        
        where: {company_id: request.params.id},
        include: {model: EmployeeType},
        attributes: {exclude: ['employee_type_id']}
    })
    .then(function(employees) {
      response.json(employees ? employees : []);
    })
   });

   router.post('/:id/employee', function(request, response) {
    Employee.create({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone: request.body.phone,
        employee_type_id: request.body.employee_type_id,
        company_id: request.body.company_id
    })
    .then(function(employees) {
      response.json(employees);
    })
   });

   router.put('/:company_id/employee', function(request, response){

        Employee.update({
        
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone: request.body.phone,
        employee_type_id: request.body.employee_type_id,
        company_id: request.params.company_id
        }, 
        {where: { id: request.body.id}
    })
    .then(function(employee) {
        response.json(employee);
    })
    });

    router.put('/company/:company_id/employee', function(request, response){

      Employee.update({
        
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone: request.body.phone,
        employee_type_id: request.body.employee_type_id,
        company_id: request.params.company_id
      }, 
      {where: { id: request.body.id}
    })
   .then(function(employee) {
      response.json(employee);
    })
   });




module.exports = router;