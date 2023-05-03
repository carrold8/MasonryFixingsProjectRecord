
const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('hello world');
})

app.listen(8081, () => {
    console.log('listening on port 8081');
});