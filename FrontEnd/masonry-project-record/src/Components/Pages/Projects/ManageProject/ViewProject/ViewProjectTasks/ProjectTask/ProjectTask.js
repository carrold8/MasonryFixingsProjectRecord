import React, { useEffect, useState } from 'react';
import './ProjectTask.css';
import ViewTaskProducts from './ViewTaskProducts/ViewTaskProducts';
import ProjectTaskAPIs from '../../../../../../../MasonyFixingsAPIs/ProjectTaskAPIs/ProjectTaskAPIs';
import { AiFillEdit } from 'react-icons/ai';
import DropDown from '../../../../../../DropDown/DropDown';
import { Form, Row, Col } from 'react-bootstrap';
import ProjectAPIs from '../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs';
import { useNavigate, useParams } from 'react-router-dom';
import { MdCancel, MdDelete, MdShoppingCart } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';
import {format} from 'date-fns'

export default function ProjectTask({projectTaskID, getProjectTasks}){

    const params = useParams();
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    const [projectTaskInfo, setProjectTaskInfo] = useState();
    const [taskID, setTaskID] = useState();
    const [companyID, setCompanyID] = useState();
    const [taskTypeID, setTaskTypeID] = useState();
    const [approxVal, setApproxVal] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [userID, setUserID] = useState();

    // Use taskID to make an API call to get the ProjectTask

    const getProjectTaskInfo = (projectTaskID) => {

        ProjectTaskAPIs.GetProjectTask(projectTaskID)
        .then((response) => {
            if(response.status === 200){
                setProjectTaskInfo(response.data);
                setTaskID(response.data.task.id);
                setCompanyID(response.data.company.id);
                setTaskTypeID(response.data.task_type.id);
                setApproxVal(response.data.approx_val);
                setStartDate(format(new Date(response.data.start_date), 'yyyy-MM-dd'));
                setEndDate(format(new Date(response.data.end_date), 'yyyy-MM-dd'));
                setUserID(response.data.user_id);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    setEditing(false);
                    window.alert(err.response.data.message)
                }
            }
        })
    } 

    const editProjectTask = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const putJSON = {
            task_id: taskID,
            company_id: companyID,
            task_type_id: taskTypeID,
            approx_val: approxVal,
            start_date: startDate,
            end_date: endDate,
            user_id: userID
        }

        ProjectAPIs.PutProjectTask(params.ProjectID, projectTaskID, putJSON)
        .then((response) => {
            if(response.status === 200){
                getProjectTasks(params.ProjectID)
                setEditing(false);
            }
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    handleCancel();
                    window.alert(err.response.data.message)
                }
            }
        })
    }

    const deleteProjectTask = () => {
        ProjectTaskAPIs.DeleteProjectTask(projectTaskID)
        .then((response) => {
            if(response.status === 200){
                getProjectTasks(params.ProjectID);
                setEditing(false);
            }
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    setEditing(false);
                    window.alert(err.response.data.message)
                }
            }
        })
    }

    const handledDelete = () => {

        if(window.confirm('Are you sure you want to delete this task? You will lose all associated products and potential sales figures.')){
            deleteProjectTask();
        }
    }

    const handleChangeTask = (e) => {
        setTaskID(e.target.value);
        setTaskTypeID('');
    }

    const handleCancel = () => {
        setTaskID(projectTaskInfo.task.id);
        setCompanyID(projectTaskInfo.company.id);
        setTaskTypeID(projectTaskInfo.task_type.id);
        setApproxVal(projectTaskInfo.approx_val);
        setStartDate(format(new Date(projectTaskInfo.start_date), 'yyyy-MM-dd'));
        setEndDate(format(new Date(projectTaskInfo.end_date), 'yyyy-MM-dd'));
        setUserID(projectTaskInfo.user_id);
        setEditing(false);
    }

    useEffect(()  => {
        getProjectTaskInfo(projectTaskID);
    }, [projectTaskID])

    if(loading){
        return(
            <div className='project-task-container'>Loading...</div>
        )
    }


    else{
        return(
            <div className='project-task-container'>

                <Form onSubmit={editProjectTask}>
                <div className='project-task-body'>
                    
                    <div>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}><strong>Task:</strong></Form.Label>
                            <Col sm={9}>
                                <DropDown.Task disabled={!editing} size='sm' required value={taskID} onChange={handleChangeTask} />
                            </Col>
                        </Form.Group>
                        <Row>
                            <Col>
                                
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}><strong>Task Type:</strong></Form.Label>
                                    <Col>
                                        <DropDown.TaskType 
                                            size='sm'
                                            taskID={taskID} 
                                            disabled={!editing}
                                            value={taskTypeID}
                                            onChange={(e) => setTaskTypeID(e.target.value)}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}><strong>Approx Val:</strong></Form.Label>
                                    <Col>
                                        <Form.Control
                                            type='number'
                                            value={approxVal}
                                            onChange={(e) => setApproxVal(e.target.value)}
                                            size='sm'
                                            required
                                            disabled={!editing}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}><strong>Rep:</strong></Form.Label>
                                    <Col>
                                        <DropDown.Users 
                                            size='sm'
                                            value={userID} 
                                            onChange={(e) => setUserID(e.target.value)}
                                            required
                                            disabled={!editing}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}><strong>Company:</strong></Form.Label>
                                    <Col>
                                        <DropDown.AllCompanies disabled={!editing} size='sm' required value={companyID} onChange={(e) => setCompanyID(e.target.value)} />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}><strong>Start Date:</strong></Form.Label>
                                    <Col>
                                        <Form.Control 
                                            size='sm'
                                            type='date' 
                                            value={startDate} 
                                            onChange={(e) => setStartDate(e.target.value)}
                                            required 
                                            disabled={!editing}
                                        />
                                        </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}><strong>End Date:</strong></Form.Label>
                                    <Col>
                                        <Form.Control 
                                            size='sm'
                                            type='date' 
                                            value={endDate} 
                                            onChange={(e) => setEndDate(e.target.value)}
                                            required 
                                            disabled={!editing}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>

                    <div align='end'>
                        <div>
                              
                            {editing ? 
                            <div>
                                <button type={'submit'}><FaSave/></button> 
                                <button type='button' onClick={() => handleCancel()}><MdCancel/></button> 
                            </div>   
                            :
                            <div>
                                <button type={'button'} onClick={() => handledDelete()}><MdDelete/></button> 
                                <button type='button' onClick={() => setEditing(true)}><AiFillEdit/></button>
                            </div>
                            }
                        </div>
                        
                        <div><button type='button' onClick={() => setShowProducts(!showProducts)}><MdShoppingCart/></button></div>
                    </div>
                    
                </div>
                </Form>
                
                
                

                {showProducts &&
                    <ViewTaskProducts projectTaskID={projectTaskID} />
                }

            </div>
        )
    }
}
