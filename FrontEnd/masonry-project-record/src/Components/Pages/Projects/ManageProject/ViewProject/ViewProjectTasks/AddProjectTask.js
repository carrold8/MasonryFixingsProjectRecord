import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import DropDown from "../../../../../DropDown/DropDown";
import ProjectAPIs from "../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import { useParams } from "react-router-dom";

export default function AddProjectTask({handleAddNew}){

    const params = useParams();

    const [stageID, setStageID] = useState('');
    const [taskID, setTaskID] = useState('');
    const [companyID, setCompanyID] = useState('');
    const [taskTypeID, setTaskTypeID] = useState('');
    const [approxVal, setApproxVal] = useState(0);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    const handleChangeStage = (e) => {
        setStageID(e.target.value);
        setTaskID('');
        setTaskTypeID('');
    }
    const handleChangeTask = (e) => {
        setTaskID(e.target.value);
        setTaskTypeID('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const postJSON = {
            task_id: taskID,
            company_id: companyID,
            task_type_id: taskTypeID,
            approx_val: approxVal,
            start_date: startDate,
            end_date: endDate
        }

        ProjectAPIs.PostProjectTask(params.ProjectID, postJSON)
        .then((response) => {
            if(response.status === 200){
                handleAddNew();
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Stage:</Form.Label>
                <Col>
                    <DropDown.Stage required value={stageID} onChange={handleChangeStage} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Task:</Form.Label>
                <Col>
                    <DropDown.StageTasks stageID={stageID} disabled={stageID===''} required value={taskID} onChange={handleChangeTask} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={3}>Company:</Form.Label>
                <Col>
                    <DropDown.AllCompanies  required value={companyID} onChange={(e) => setCompanyID(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={3}>Task Type:</Form.Label>
                <Col>
                    <DropDown.TaskType taskID={taskID} disabled={taskID===''} required value={taskTypeID} onChange={(e) => setTaskTypeID(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={3}>Approx Value:</Form.Label>
                <Col>
                    <Form.Control required type="number" value={approxVal} onChange={(e) => setApproxVal(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={3}>Start Date:</Form.Label>
                <Col>
                    <Form.Control type="date" required value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={3}>End Date:</Form.Label>
                <Col>
                    <Form.Control type='date' required value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </Col>
            </Form.Group>

            <Button type="submit">Add</Button>
        </Form>
    )


}