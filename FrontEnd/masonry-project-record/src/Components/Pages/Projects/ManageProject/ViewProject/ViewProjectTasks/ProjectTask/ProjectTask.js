import React, { useEffect, useState } from 'react';
import './ProjectTask.css';
import ViewTaskProducts from './ViewTaskProducts/ViewTaskProducts';
import ProjectTaskAPIs from '../../../../../../../MasonyFixingsAPIs/ProjectTaskAPIs/ProjectTaskAPIs';
import { AiFillEdit } from 'react-icons/ai';
import DropDown from '../../../../../../DropDown/DropDown';
import { Form, Button } from 'react-bootstrap';
import ProjectAPIs from '../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs';
import { useParams } from 'react-router-dom';

export default function ProjectTask({projectTaskID}){

    const params = useParams();
    
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
                setStartDate(response.data.start_date);
                setEndDate(response.data.end_date);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err);
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
            end_date: endDate
        }

        ProjectAPIs.PutProjectTask(params.ProjectID, projectTaskID, putJSON)
        .then((response) => {
            if(response.status === 200){
                getProjectTaskInfo(projectTaskID)
                setEditing(false);
            }
        })
    }


    const handleChangeTask = (e) => {
        setTaskID(e.target.value);
        setTaskTypeID('');
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
                <div className='project-task-line'  >
                    <span onClick={() => setEditing(!editing)}><AiFillEdit/></span>
                    <span onClick={() => setShowProducts(!showProducts)}>Products</span>

                    {editing ? 

                        <Form onSubmit={editProjectTask}>
                            <div>
                                <DropDown.Task required value={taskID} onChange={handleChangeTask} />
                            </div>
                            <div>
                                <DropDown.AllCompanies required value={companyID} onChange={(e) => setCompanyID(e.target.value)} />
                            </div>
                            <div>
                                <DropDown.TaskType 
                                    taskID={taskID} 
                                    disabled={taskID ===''}
                                    onChange={(e) => setTaskTypeID(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Control 
                                    type='date' 
                                    value={startDate} 
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required 
                                />
                            </div>
                            <div>
                                <Form.Control 
                                    type='date' 
                                    value={endDate} 
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required 
                                />
                            </div>

                            <Button type={'submit'}>Save</Button>
                        </Form>
                        :
                        <>
                            <div>{projectTaskInfo.task.name}</div>
                            <div>{projectTaskInfo.company.name}</div>
                            <div>{projectTaskInfo.task_type.name}</div>
                            <div>{projectTaskInfo.approx_val}</div>
                        </>
                    }
                    
                </div>

                {showProducts &&
                    <ViewTaskProducts taskID={projectTaskID} />
                }

            </div>
        )
    }
}
