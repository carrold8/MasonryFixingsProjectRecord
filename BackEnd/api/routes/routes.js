const { where } = require('sequelize');
const { CompanyType } = require('../models/companytype.model');
const { Country } = require('../models/country.model');
const { Employee } = require('../models/employee.model');
const { EmployeeType } = require('../models/employeetype.model');
const { HeadOffice } = require('../models/headoffice.model');

const County = require('../models/county.model').County;
bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const redis = require("redis");
const RedisStore = require("connect-redis").default


const Address = require('../models/address.model').Address;
const Company = require('../models/company.model').Company;

const authenticateRouter = require('./routes.authenticate');
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
    origin: '*'
}
  app.use(cors(corsOptions));

  const redisClient = redis.createClient();
  redisClient.connect().catch(console.error)
  

  const redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
  })

  app.use(
    session({
        secret: 'mysecretkey',
        store: redisStore,
        credentials: true,
        name: 'sessionid',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 2, // 2 hours
            sameSite: 'lax',
            secure: false
        }
    })
)

  // app.use(session({
  //   secret: 'BigSecret',
  //   resave: true,
  //   cookie: {
  //     maxAge: 10 * 60 * 60 * 1000, //2 mins
  //     secure: false,
  //     sameSite: 'none',
  //   },
  //   saveUninitialized: true
  // }));

    app.use(bodyParser.json());

    app.use('/api/authenticate', authenticateRouter);
    app.use('/api/county', countyRouter);
    app.use('/api/company', companyRouter);
    app.use('/api/address', addressRouter);
    app.use('/api/employee', employeeRouter);
    app.use('/api/project', projectRouter);
    app.use('/api/project-task', projectTaskRouter);
    app.use('/api/lookup', lookupRouter);
    app.use('/api/maintenance', maintenanceRouter);

   
     app.get('/api/testing-me', function(request, response) {
      console.log('got to here');
      County.findAll()
      .then(function(address) {
        if(request.session.user){
          console.log('User found');
        }
        else{
          console.log('no user found');
        }
        response.json(address);
      })
     });

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

     app.get('/api/address', function(request, response) {
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


       app.get('/api/headOffice', function(request, response) {
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

       app.get('/api/employee', function(request, response) {
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














    app.get('/api/user', function(request, response) {
      User.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });


     app.get('/api/product', function(request, response) {
      Product.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });

     app.get('/api/project', function(request, response) {
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

     app.get('/api/project-task-product', function(request, response) {
      ProjectTaskProduct.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });

     app.get('/api/stage', function(request, response) {
      Stage.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });

     app.get('/api/task', function(request, response) {
      Task.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });

     app.get('/api/task-type', function(request, response) {
      TaskType.findAll({
          include: {all: true, nested: true},
      })
      .then(function(address) {
        response.json(address);
      })
     });




   };