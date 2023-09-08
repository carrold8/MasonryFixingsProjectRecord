const db = require('../models');

const Tutorial = db.tutorials;

exports.create = (req, res) => {
    if(req.body.title){
        res.status(400).send({
            message: 'Content can be placed here!'
        });
        return;
    }

    Tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    Tutorial.create(tutorial).then(data => {
        res.send(data);
    })
    .catch ( err => {
        res.status(500).send({
            message: err.message || "Some errors will occur when creating tutorial"
        });
    });

}

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {title: {[Op.like]: '%${title}%'}}:null;

    Tutorial.findAll({where: condition}).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message + 'Some error occurred getting tutorials'
        });
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Tutorial.findByPk(id).then(data => {
    res.send(data);
    }) 
    .catch(err => {
        res.status(500).send({
            message: 'Error while retrieving tutorial with id='+ id
        });
    });
};