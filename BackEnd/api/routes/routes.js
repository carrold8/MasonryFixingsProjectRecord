const { Country } = require('../models/country.model');

const County = require('../models/county.model').County;
bodyParser = require('body-parser');

const Address = require('../models/address.model').Address;
const Company = require('../models/company.model').Company;


module.exports = function(app) {
    app.use(bodyParser.json());
    app.get('/county', function(request, response) {
      County.findAll()
      .then(function(county) {
        response.json(county);
      })
     });

     app.get('/company', function(request, response) {
        Company.findAll()
        .then(function(company) {
          response.json(company);
        })
       });

     app.get('/address', function(request, response) {
        Address.findAll({
            attributes: { exclude: ['county_id', 'country_id'] },
            include: [
                {model: County},
                {model: Country},
            ]
        })
        .then(function(address) {
          response.json(address);
        })
       });

   };