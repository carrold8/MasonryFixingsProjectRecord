import React, { useEffect, useState } from 'react';
import ProjectTaskAPIs from '../../../../MasonyFixingsAPIs/ProjectTaskAPIs/ProjectTaskAPIs';
import DropDown from '../../../DropDown/DropDown';
import { Table } from 'react-bootstrap';
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';
import ApiResponseHandler from '../../../../MasonyFixingsAPIs/ApiResponseHandler';
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function ViewUpcomingTasks(){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [upcomingTasks, setUpcomingTasks] = useState([]);

    const ColumnHeaders = ['Company', 'Type', 'Value', 'Start', 'View'];

    const thData = () => {
        return ColumnHeaders.map((header) => {
            return(<th>{header}</th>)
        })
    }

    const tdData = () => {
        return upcomingTasks.map((task) => {
            return(
                <tr>
                    <td><DropDown.AllCompanies disabled={true} value={task.company_id} /></td>
                    <td><DropDown.Task disabled={true} value={task.task_id}/></td>
                    <td>{task.approx_val}</td>
                    <td>{format(new Date(task.start_date), 'do-MMM-yyyy')}</td>
                    <td><button onClick={() => navigate('/project/' + task.project_id)}><FaArrowAltCircleRight/></button></td>
                </tr>
            )
        })
    }

    const getUpcomingTasks = () => {

        ProjectTaskAPIs.GetUpcomingTasks()
        .then((response) => {
            if(response.status === 200) {
                setUpcomingTasks(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            setLoading(false);
            ApiResponseHandler(err.response, navigate);
        })
    }

    useEffect(() => {
        getUpcomingTasks();
    }, [])
    
    if(loading){
        return(
            <div>Loading upcoming tasks...</div>
        )
    }
    else{
        return(
            <div>
                <Table hover striped responsive>
                    <thead>
                        <tr>{thData()}</tr>
                    </thead>
                    <tbody>
                        {
                        upcomingTasks.length === 0 ? 
                            <tr><td>You have no upcoming tasks.</td></tr>
                            :
                            tdData()
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}