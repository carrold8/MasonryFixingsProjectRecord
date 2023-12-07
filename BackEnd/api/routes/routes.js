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

const countyRouter = require('./routes.county');
const companyRouter = require('./routes.company');
const addressRouter = require('./routes.address');
const projectRouter = require('./routes.project');
const employeeRouter = require('./routes.employee');
const projectTaskRouter = require('./routes.projecttask');
const lookupRouter = require('./routes.lookup');
const maintenanceRouter = require('./routes.maintenance');
const { User } = require('../models/user.model');
const { Product } = require('../models/product.model');
const { ProjectTask } = require('../models/projecttask.model');
const { ProjectTaskProduct } = require('../models/projecttaskproduct.model');
const { Stage } = require('../models/stage.model');
const { Task } = require('../models/task.model');
const { TaskType } = require('../models/tasktype.model');
const { Project } = require('../models/project.model');

module.exports = function(app) {

  var corsOptions = {
    origin: 'http://localhost:3000'
}
  app.use(cors(corsOptions));


    app.use(bodyParser.json());


    app.use('/county', countyRouter);
    app.use('/company', companyRouter);
    app.use('/address', addressRouter);
    app.use('/employee', employeeRouter);
    app.use('/project', projectRouter);
    app.use('/project-task', projectTaskRouter);
    app.use('/lookup', lookupRouter);
    app.use('/maintenance', maintenanceRouter);

   
    //  app.get('/company', function(request, response) {
    //   Company.findAll({
    //       include: {all: true, nested: true},
    //       attributes: {exclude: ['company_type_id', 'head_office_id']}
    //   })
    //   .then(function(address) {
    //     response.json(address);
    //   })
    //  });

    //  app.post('/company', function(request, response) {
    //   Address.create({
    //       line1: request.body.head_office.address.line1,
    //       line2: request.body.head_office.address.line2,
    //       city: request.body.head_office.address.city,
    //       county_id: request.body.head_office.address.county_id,
    //       country_id: request.body.head_office.address.country_id,
    //   })
    //   .then(function(address) {
        
    //     HeadOffice.create({
    //       phone: request.body.head_office.phone,
    //       address_id: address.id
    //     }).then(function(head_office){
    //       Company.create({
    //         name: request.body.name,
    //         company_type_id: request.body.company_type_id,
    //         head_office_id: head_office.id
    //       }).then(function(company){
    //         response.json(company);
    //       })
    //     })

    //   })
    //  });


    //  app.get('/company/:id', function(request, response) {
    //   Company.findOne({ 
    //       where: {id: request.params.id},
    //       include: {all: true, nested: true},
    //       attributes: {exclude: ['company_type_id', 'head_office_id']}
    //   })
    //   .then(function(address) {
    //     response.json(address);
    //   })
    //  });

    //  app.put('/company/:id', function(request, response) {
    //   Address.update(
    //     {
    //         line1: request.body.head_office.address.line1,
    //         line2: request.body.head_office.address.line2,
    //         city: request.body.head_office.address.city,
    //         county_id: request.body.head_office.address.county_id,
    //         country_id: request.body.head_office.address.country_id,
    //     },
    //     { where: {id: request.body.head_office.address.id},
          
    //   })
    //   .then(function(address) {
    //     HeadOffice.update(
    //       {
    //         phone: request.body.head_office.phone,
    //         address_id: address.id
    //       },
    //       {where: {id: request.body.head_office.id}}
    //     )
    //     .then(function(head_office) {
    //       Company.update(
    //         {
    //           name: request.body.name,
    //           company_type_id: request.body.company_type_id,
    //           head_office_id: head_office.id,
    //         },
    //         {where: {id: request.body.id}}
    //       )
    //     })
    //     .then(function(company){
    //       response.json(company);
    //     })
    //   })
    //  });

    //  app.get('/company/:id/employees', function(request, response) {
    //   Employee.findAll({
          
    //       where: {company_id: request.params.id},
    //       include: {model: EmployeeType},
    //       attributes: {exclude: ['employee_type_id']}
    //   })
    //   .then(function(employees) {
    //     response.json(employees ? employees : []);
    //   })
    //  });

    //  app.post('/company/:id/employee', function(request, response) {
    //   Employee.create({
    //       first_name: request.body.first_name,
    //       last_name: request.body.last_name,
    //       phone: request.body.phone,
    //       employee_type_id: request.body.employee_type_id,
    //       company_id: request.body.company_id
    //   })
    //   .then(function(employees) {
    //     response.json(employees);
    //   })
    //  });



    //  app.put('/company/:company_id/employee', function(request, response){

    //     Employee.update({
          
    //       first_name: request.body.first_name,
    //       last_name: request.body.last_name,
    //       phone: request.body.phone,
    //       employee_type_id: request.body.employee_type_id,
    //       company_id: request.params.company_id
    //     }, 
    //     {where: { id: request.body.id}
    //   })
    //  .then(function(employee) {
    //     response.json(employee);
    //   })
    //  });

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














    app.get('/user', function(request, response) {
      User.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });


     app.get('/product', function(request, response) {
      Product.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });

     app.get('/project', function(request, response) {
      Project.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });

    //  app.get('/project-task', function(request, response) {
    //   ProjectTask.findAll({
    //       include: {all: true, nested: true},
    //   })
    //   .then(function(address) {
    //     response.json(address);
    //   })
    //  });

     app.get('/project-task-product', function(request, response) {
      ProjectTaskProduct.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });

     app.get('/stage', function(request, response) {
      Stage.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });

     app.get('/task', function(request, response) {
      Task.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });

     app.get('/task-type', function(request, response) {
      TaskType.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });




   };