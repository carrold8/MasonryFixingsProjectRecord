const { where } = require('sequelize');
const { CompanyType } = require('../models/companytype.model');
const { Country } = require('../models/country.model');
const { Employee } = require('../models/employee.model');
const { EmployeeType } = require('../models/employeetype.model');
const { HeadOffice } = require('../models/headoffice.model');

const County = require('../models/county.model').County;
bodyParser = require('body-parser');
const cors = require('cors');

const Address = require('../models/address.model').Address;
const Company = require('../models/company.model').Company;


module.exports = function(app) {

  var corsOptions = {
    origin: 'http://localhost:3000'
}
  app.use(cors(corsOptions));


    app.use(bodyParser.json());
    app.get('/county', function(request, response) {
      County.findAll()
      .then(function(county) {
        response.json(county);
      })
     });

    //  User.findAll({ include: { all: true, nested: true }});
     app.get('/company', function(request, response) {
      Company.findAll({
          include: {all: true, nested: true},
          attributes: {exclude: ['company_type_id', 'head_office_id']}
      })
      .then(function(address) {
        response.json(address);
      })
     });

     app.post('/company', function(request, response) {
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


     app.get('/company/:id', function(request, response) {
      Company.findOne({ 
          where: {id: request.params.id},
          include: {all: true, nested: true},
          attributes: {exclude: ['company_type_id', 'head_office_id']}
      })
      .then(function(address) {
        response.json(address);
      })
     });

     app.put('/company/:id', function(request, response) {
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

     app.get('/company/:id/employees', function(request, response) {
      Employee.findAll({
          
          where: {company_id: request.params.id},
          include: {model: EmployeeType},
          attributes: {exclude: ['employee_type_id']}
      })
      .then(function(employees) {
        response.json(employees ? employees : []);
      })
     });

     app.post('/company/:id/employee', function(request, response) {
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



     app.put('/company/:company_id/employee', function(request, response){

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

     app.get('/address', function(request, response) {
        Address.findAll({
            attributes: { exclude: ['county_id', 'country_id'] },
            include: [
                {model: County},
                {model: Country, attributes: {exclude: ['address_id']}, include: [{model: Address}]}
            ]
        })
        .then(function(address) {
          response.json(address);
        })
       });


       app.get('/headOffice', function(request, response) {
        HeadOffice.findAll({
            attributes: { exclude: ['address_id'] },
            include: [
                {model: Address}
            ]
        })
        .then(function(address) {
          response.json(address);
        })
       });

       app.get('/employee', function(request, response) {
        Employee.findAll({
            // attributes: { exclude: ['employee_type_id'] },
            // include: [
            //     {model: EmployeeType}
            // ]
        })
        .then(function(address) {
          response.json(address);
        })
       });

   };