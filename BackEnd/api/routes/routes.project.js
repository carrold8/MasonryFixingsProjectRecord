const express = require('express');
const { Task } = require('../models/task.model');
const { ProjectTask } = require('../models/projecttask.model');
const { InductionRegister } = require('../models/inductionregister.model');
const { AnchorTraining } = require('../models/anchortraining.model');
const { User } = require('../models/user.model');
const { Project } = require('../models/project.model');
const { Address } = require('../models/address.model');
const { ProjectTaskProduct } = require('../models/projecttaskproduct.model');
const { Company } = require('../models/company.model');
const { HeadOffice } = require('../models/headoffice.model');
const { Employee } = require('../models/employee.model');
const { where } = require('sequelize');
const router = express.Router();



router.get('/',  function(request, response) {
    Project.findAll({ 
        // include: {all: true, nested: true},
    })
    .then(function(projects) {
      response.json(projects);
    })
   });
   
   router.get('/:projectID',  function(request, response) {
    Project.findOne({ 
        // include: {all: true, nested: true},
        where: {id: request.params.projectID},
    })
    .then(function(project) {
        if(project === null){
            response.status(404);
        }
        else{
            response.status(200).send('Project Found');
        }
    })
   });

   router.delete('/:projectID',  function(request, response) {
    AnchorTraining.destroy({where: {project_id: request.params.projectID}})
    .then(function(){
        InductionRegister.destroy({where: {project_id: request.params.projectID}})
        .then(function() {
            ProjectTask.findAll({where: {project_id: request.params.projectID}})
            .then(async function(projectTasks){
                await projectTasks.map((projectTask) => {
                    ProjectTaskProduct.destroy({where: {project_task_id: projectTask.id}})
                    .then(function() {
                    })
                })
                ProjectTask.destroy({where: {project_id: request.params.projectID}})
                    .then(function(){
                        Project.destroy({ 
                            where: {id: request.params.projectID},
                        })
                        .then(function(project) {
                            response.json(project);
                        })
                        });
                    })
                
            })
        })
    })
    

   router.get('/:projectID/title-info',  function(request, response) {
    Project.findOne({ 
        // include: {all: true, nested: true},
        where: {id: request.params.projectID},
        attributes: [
                'name',
                'cis_id',
                'applicant',
                'category_id',
                'sector_id',
                'building_description',
                'footprint'
        ]
    })
    .then(function(project) {
      response.json(project);
    })
   });

   router.get('/:projectID/materials',  function(request, response) {
    Project.findOne({ 
        // include: {all: true, nested: true},
        where: {id: request.params.projectID},
        attributes: [
                'frame_material_id',
                'floor_material_id',
                'envelope_material_id',
                'partitioning_material_id',
                'roof_material_id'
        ]
    })
    .then(function(project) {
      response.json(project);
    })
   });
   router.put('/:projectID/materials',  function(request, response) {
    Project.update(
        { 
            frame_material_id: request.body.frame_material_id,
            floor_material_id: request.body.floor_material_id,
            envelope_material_id: request.body.envelope_material_id,
            partitioning_material_id: request.body.partitioning_material_id,
            roof_material_id: request.body.roof_material_id
        },
        {where: {id: request.params.projectID}
    })
    .then(function(project) {
      response.json(project);
    })
   });

   router.get('/:projectID/main-contractor',  function(request, response) {
    Project.findOne({ 
        where: {id: request.params.projectID},
    })
    .then(function(project) {
        Company.findOne({
            where: {id: project.main_contractor_id},
            attributes: ['id', 'name']
        })
        .then(function(company) {

            response.json({
                company: company,
                account_contact_id: project.account_contact_id,
                foreman_id: project.foreman_id,
                safety_officer_id: project.safety_officer_id,
                storeman_id: project.storeman_id
            });
        })
        
    })
   });
   router.put('/:projectID/main-contractor',  function(request, response) {
    Project.update(
        { 
            main_contractor_id: request.body.main_contractor_id,
            account_contact_id: request.body.account_contact_id,
            foreman_id: request.body.foreman_id,
            safety_officer_id: request.body.safety_officer_id,
            storeman_id: request.body.storeman_id
        },
        {where: {id: request.params.projectID}
    })
    .then(function(project) {
      response.json(project);
    })
   });


   router.get('/:projectID/engineer',  function(request, response) {
    Project.findOne({ 
        where: {id: request.params.projectID},
    })
    .then(function(project) {
        Company.findOne({
            where: {id: project.engineering_company_id},
            attributes: ['id', 'name']
        })
        .then(function(company) {
            Employee.findOne({
                where: {id: project.engineer_id},
                attributes: ['phone']
            })
            .then(function(engineer){
                response.json({
                    company: company,
                    engineer_id: project.engineer_id,
                    contacted_engineer: project.contacted_engineer,
                    phone: engineer.phone
                });
            })
            
        })
    })
   });

   router.put('/:projectID/engineer',  function(request, response) {
    Project.update(
        { 
            engineering_company_id: request.body.engineering_company_id,
            engineer_id: request.body.engineer_id,
            contacted_engineer: request.body.contacted_engineer
        },
        {where: {id: request.params.projectID}
    })
    .then(function(project) {
        Employee.update(
            {
                phone: request.body.phone
            },
            {where: {id: request.body.engineer_id}}
        )
        .then(function(employee){
            response.json(employee);
        })
    })
   });


   router.get('/:projectID/architect',  function(request, response) {
    Project.findOne({ 
        where: {id: request.params.projectID},
    })
    .then(function(project) {
        Company.findOne({
            where: {id: project.architect_company_id},
            attributes: ['id', 'name']
        })
        .then(function(company) {
            Employee.findOne({
                where: {id: project.architect_id},
                attributes: ['phone']
            })
            .then(function(architect){
                response.json({
                    company: company,
                    architect_id: project.architect_id,
                    phone: architect.phone
                });
            })
            
        })
    })
   });

   router.put('/:projectID/architect',  function(request, response) {
    Project.update(
        { 
            architect_company_id: request.body.architect_company_id,
            architect: request.body.architect,
        },
        {where: {id: request.params.projectID}
    })
    .then(function(project) {
        Employee.update(
            {
                phone: request.body.phone
            },
            {where: {id: request.body.architect_id}}
        )
        .then(function(employee){
            response.json(employee);
        })
    })
   });

router.post('/',  function(request, response) {
    Address.create({
        line1: request.body.address.line1,
        line2: request.body.address.line2,
        city: request.body.address.city,
        county_id: request.body.address.county_id,
        country_id: request.body.address.country_id,
    })
    .then(function(address){
        Project.create({ 
        name: request.body.name,
        cis_id: request.body.cis_id,
        completed: request.body.completed,
        address_id: address.id,
        applicant: request.body.applicant,
        architect_company_id: request.body.architect_company_id,
        architect_id: request.body.architect_id,
        engineering_company_id: request.body.engineering_company_id,
        engineer_id: request.body.engineer_id,
        contacted_engineer: request.body.contacted_engineer,
        category_id: request.body.category_id,
        sector_id: request.body.sector_id,
        start_date: request.body.start_date,
        end_date: request.body.end_date,
        induction_required: request.body.induction_required,
        induction_provided: request.body.induction_provided,
        building_description: request.body.building_description,
        footprint: request.body.footprint,
        frame_material_id: request.body.frame_material_id,
        floor_material_id: request.body.floor_material_id,
        envelope_material_id: request.body.envelope_material_id,
        roof_material_id: request.body.roof_material_id,
        partitioning_material_id: request.body.partitioning_material_id,
        main_contractor_id: request.body.main_contractor_id,
        account_contact_id: request.body.account_contact_id,
        foreman_id: request.body.foreman_id,
        safety_officer_id: request.body.safety_officer_id,
        storeman_id: request.body.storeman_id,

    }            
).then(function(newProject) {
    response.json(newProject);
})})

});

router.get('/:projectID/tasks',  function(request, response) {
    ProjectTask.findAll({ 
        where: {project_id: request.params.projectID},
        include: [{model: Task, attributes: ['stage_id']}],
        attributes: ['id']
    })
    .then(function(projectTasks) {
        response.json(projectTasks);
    })
});
router.put('/:projectID/task/:projectTaskID',  function(request, response) {
    ProjectTask.update(
        { 
            task_id: request.body.task_id,
            company_id: request.body.company_id,
            task_type_id: request.body.task_type_id,
            approx_val: request.body.approx_val,
            start_date: request.body.start_date,
            end_date: request.body.end_date,
            user_id: request.body.user_id
        },
        {where: {id: request.params.projectTaskID}
    })
    .then(function(projectTask) {
        response.json(projectTask);
    })
});

router.post('/:projectID/task',  function(request, response) {
    ProjectTask.create({ 
        project_id: request.params.projectID,
        task_id: request.body.task_id,
        company_id: request.body.company_id,
        task_type_id: request.body.task_type_id,
        approx_val: request.body.approx_val,
        start_date: request.body.start_date,
        end_date: request.body.end_date,
        user_id: request.body.user_id
    })
    .then(function(projectTask) {
        response.json(projectTask);
    })
});

router.post('/:projectID/task/product',  function(request, response) {
    ProjectTaskProduct.create({ 
        project_task_id: request.body.project_task_id,
        product_id: request.body.product_id,
        quantity: request.body.quantity
    })
    .then(function(projectTaskProduct) {
        response.json(projectTaskProduct);
    })
});


router.get('/:projectID/induction',  function(request, response) {
    Project.findOne({ 
        where: {id: request.params.projectID},
        attributes: ['induction_required', 'induction_provided']
    })
    .then(function(induction) {
        response.json(induction);
    })
});
router.put('/:projectID/induction',  function(request, response) {
    Project.update( 
        {
            induction_required: request.body.induction_required,
            induction_provided: request.body.induction_provided
        },
        {where: {id: request.params.projectID}
    })
    .then(function(induction) {
        response.json(induction);
    })
});

router.put('/:projectID/induction-list/:inductionID',  function(request, response) {
    InductionRegister.update( 
        {
            user_id: request.body.user_id,
            date: request.body.date
        },
        {where: {id: request.params.inductionID}
    })
    .then(function(induction) {
        response.json(induction);
    })
});

router.get('/:projectID/induction-list',  function(request, response) {
    InductionRegister.findAll({ 
        where: {project_id: request.params.projectID},
        include: [{model: User, attributes: ['id', 'first_name', 'last_name']}],
        attributes: ['id', 'date']
    })
    .then(function(inductions) {
        response.json(inductions);
    })
});
router.post('/:projectID/inductions',  function(request, response) {
    InductionRegister.create({ 
        project_id: request.params.projectID,
        user_id: request.body.user_id,
        date: request.body.date
    })
    .then(function(inductions) {
        response.json(inductions);
    })
});

router.delete('/:projectID/induction-list/:inductionID',  function(request, response) {
    InductionRegister.destroy( 
        {where: {id: request.params.inductionID}
    })
    .then(function(induction) {
        response.json(induction);
    })
});

router.get('/:projectID/anchor-training',  function(request, response) {
    AnchorTraining.findAll({ 
        where: {project_id: request.params.projectID},
        include: [{model: User, attributes: ['id', 'first_name', 'last_name']}],
        attributes: ['id', 'date', 'note']
    })
    .then(function(anchorTraining) {
        response.json(anchorTraining);
    })
});
router.post('/:projectID/anchor-training', function(request, response){
    AnchorTraining.create({
        project_id: request.params.projectID,
        user_id: request.body.user_id,
        date: request.body.date,
        note: request.body.note
    })
    .then(function(anchorTraining){
        response.json(anchorTraining);
    })
});
router.put('/:projectID/anchor-training/:anchorTrainingID',  function(request, response) {
    AnchorTraining.update( 
        {
            user_id: request.body.user_id,
            date: request.body.date,
            note: request.body.note
        },
        {where: {id: request.params.anchorTrainingID}
    })
    .then(function(anchorTraining) {
        response.json(anchorTraining);
    })
});

router.delete('/:projectID/anchor-training/:anchorTrainingID',  function(request, response) {
    AnchorTraining.destroy( 
        {where: {id: request.params.anchorTrainingID}
    })
    .then(function(anchorTraining) {
        response.json(anchorTraining);
    })
});

router.put('/:projectID/title-info',  function(request, response) {
    Project.update(
        { 
            name: request.body.name,
            cis_id: request.body.cis_id,
            applicant: request.body.applicant,
            category_id: request.body.category_id,
            sector_id: request.body.sector_id,
            building_description: request.body.building_description,
            footprint: request.body.footprint
        },
        {where: {id: request.params.projectID}
    })
    .then(function(project) {
        response.json(project);
    })
});


router.put('/:projectID/contacts',  function(request, response) {
    Project.update(
        { 
            architect_company_id: request.body.architect_company_id,
            architect_id: request.body.architect_id,
            engineering_company_id: request.body.engineering_company_id,
            engineer_id: request.body.engineer_id,
            contacted_engineer: request.body.contacted_engineer,
            main_contractor_id: request.body.main_contractor_id,
            account_contact_id: request.body.account_contact_id,
            foreman_id: request.body.foreman_id,
            safety_officer_id: request.body.safety_officer_id,
            storeman_id: request.body.storeman_id
        },
        {where: {id: request.params.projectID}
    })
    .then(function(project) {
        response.json(project);
    })
    });

   module.exports = router;