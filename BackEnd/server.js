const express = require('express');
const cors = require('cors');

const app = express();
const countyRouter = require("./routes/routes.county");
// const countyService = require("./services/county.service")

var corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));

//Used to parse requests of JSON's
app.use(express.json());

// Parse requests of form url coded
app.use(express.urlencoded({extended: true}));



app.get('/', (req, res) => {
    res.json({message: 'Welcome to backend'})
});

// app.get('/county', (req, res) => {
//     const sendMsg = countyService.getAll();
//     // console.log(sendMsg);
//     res.json({message: sendMsg})
// })

app.use('/county', countyRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});