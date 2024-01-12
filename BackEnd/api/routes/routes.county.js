const express = require('express');
const router = express.Router();
// const countyService = require('../../services/county.service');
const { County } = require('../models/county.model');
const {userAuth, managementAuth} = require('./routes.sessionauth');

// router.get('/', async function(req, res, next){
//     try{
//         res.json(await countyService.getAll());
//     } catch(err) {
//         console.error(`Error while getting counties`, err.message);
//     next(err);
//     }
// })

// router.get('/:id', async function(req, res, next){

//     try{
//         res.json(await countyService.getByID(1, req.params.id));
//     } catch(err) {
//         console.error(`Error while getting counties`, err.message);
//     next(err);
//     }
// });

// router.post('/county', async function(req, res, next){

//     console.log('Res in post: ', res)
//     try{
//         res.json(await countyService.createNew(1, req.body));
//     } catch(err) {
//         console.error(`Error while updating county`, err.message);
//     next(err);
//     }
// });


router.get('/', managementAuth, function(request, response) {
  County.findAll()
  .then(function(county) {
    response.json(county);
  })
 });

module.exports = router;