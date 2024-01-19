const express = require('express');
const router = express.Router();
const { where } = require('sequelize');
const { Employee } = require('../models/employee.model');


router.get('/:employeeID', function(request, response) {
    Employee.findOne({ 
        where: {id: request.params.employeeID},
    })
    .then(function(employee) {
      response.json(employee);
    })
});

router.put('/:employeeID', function(request, response){

    Employee.update({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone: request.body.phone,
        employee_type_id: request.body.employee_type_id,
        company_id: request.params.company_id
        }, 
        {where: { id: request.params.employeeID}
})
.then(function(employee) {
    response.json(employee);
})
});

module.exports = router;