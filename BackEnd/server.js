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
const cors = require('cors');
const port = process.env.PORT || 8080;
const database = require('./config/database');
require('./api/routes/routes')(app);



app.use(function (error, request, response, next) {
 console.error(error.stack);
 response.status(400).send(error.message);
});
app.listen(port, function() {
 console.log('Node app is running at localhost:' + port);
});