// const express = require('express');
// const cors = require('cors');

// const app = express();
// const countyRouter = require("./routes/routes.county");
// const companyRouter = require('./routes/routes.company');
// const addressRouter = require('./routes/routes.address');
// const tutorialRouter = require('./routes/tutorial.routes');

// var corsOptions = {
//     origin: 'http://localhost:3000'
// }

// app.use(cors(corsOptions));

// //Used to parse requests of JSON's
// app.use(express.json());

// // Parse requests of form url coded
// app.use(express.urlencoded({extended: true}));



// app.get('/', (req, res) => {
//     res.json({message: 'Welcome to backend'})
// });

// // app.get('/county', (req, res) => {
// //     const sendMsg = countyService.getAll();
// //     // console.log(sendMsg);
// //     res.json({message: sendMsg})
// // })

// app.use('/county', countyRouter);
// app.use('/company', companyRouter);
// app.use('/address', addressRouter);
// app.use('/tutorial', tutorialRouter);

// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     console.error(err.message, err.stack);
//     res.status(statusCode).json({ message: err.message });
//     return;
//   });

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//     console.log('Server is running on port ', PORT);
// });



const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const path = require('path');


require('./api/routes/routes')(app);

const{ County } = require('./api/models/county.model');
const{ Country } = require('./api/models/country.model');
const{ Address } = require('./api/models/address.model');
const{ HeadOffice } = require('./api/models/headoffice.model');
const{ CompanyType } = require('./api/models/companytype.model');
const{ Company } = require('./api/models/company.model');
const{ Stage } = require('./api/models/stage.model');
const{ Task }= require('./api/models/task.model');
const{ TaskType } = require('./api/models/tasktype.model');
const { User } = require('./api/models/user.model');
const { Employee } = require('./api/models/employee.model');
const { EmployeeType } = require('./api/models/employeetype.model');
const { Category } = require('./api/models/category.model');
const { Sector } = require('./api/models/sector.model');
const { EnvelopeMaterial } = require('./api/models/envelopematerial.model');
const { FloorMaterial } = require('./api/models/floormaterial.model');
const { FrameMaterial } = require('./api/models/framematerial.model');
const { PartitioningMaterial } = require('./api/models/partitioningmaterial.model');
const { Product } = require('./api/models/product.model');
const { RoofMaterial } = require('./api/models/roofmaterial.model');
const { Project } = require('./api/models/project.model');
const { ProjectTask } = require('./api/models/projecttask.model');
const { ProjectTaskProduct } = require('./api/models/projecttaskproduct.model');
const { InductionRegister } = require('./api/models/inductionregister.model');
const { AnchorTraining } = require('./api/models/anchortraining.model');


const databaseSync = () => {

    County.sync();
    County.sync();
    Country.sync();
    Address.sync();
    HeadOffice.sync();
    CompanyType.sync();
    Company.sync();
    EmployeeType.sync();
    Employee.sync();
    Stage.sync();
    Task.sync();
    TaskType.sync();
    User.sync();
    Category.sync();
    Sector.sync();
    EnvelopeMaterial.sync();
    FloorMaterial.sync();
    FrameMaterial.sync();
    PartitioningMaterial.sync();
    Product.sync();
    RoofMaterial.sync();
    Project.sync();
    ProjectTask.sync();
    ProjectTaskProduct.sync();
    InductionRegister.sync();
    AnchorTraining.sync();

    
}


// databaseSync();

app.use(function (error, request, response, next) {
 console.error(error.stack);
 response.status(400).send(error.message);
});
app.listen(port, function() {
 console.log('Node app is running at localhost:' + port);
});


const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../FrontEnd/masonry-project-record/build");

app.use(express.static(buildPath))
app.get("/*", function(req, res){
    res.sendFile(
        path.join(__dirname, "../FrontEnd/masonry-project-record/index.html"),
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    );
})