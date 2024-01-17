import React, { useEffect, useState } from 'react';
import ProjectTask from './ProjectTask/ProjectTask';
import AddProjectTask from './AddProjectTask';
import ProjectAPIs from '../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs';
import { useNavigate, useParams } from 'react-router-dom';
import './ViewProjectTasks.css';
import StageSelectionTabs from '../../../../../StageSelectionTabs/StageSelectionTabs';
import { Card, Row, Col } from 'react-bootstrap';
import { MdAddCircle } from 'react-icons/md';

export default function ViewProjectTasks(){

    const params = useParams();
    const navigate = useNavigate();

    const [stageID, setStageID] = useState('');
    const [addNew, setAddNew] = useState(false);

    const [projectTasks, setProjectTasks] = useState([]);

    const getProjectTasks = (projectID) => {

        ProjectAPIs.GetProjectTasks(projectID)
        .then((projectTasks) => {
            setProjectTasks(projectTasks.data);
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    window.alert(err.response.data.message)
                }
            }
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getProjectTasks(params.ProjectID);
    }


    useEffect(() => {
        getProjectTasks(params.ProjectID);
    }, [params.ProjectID]);

    return(
        <div className='project-tasks-container'>
            <h3>Tasks</h3>
            <StageSelectionTabs value={stageID} setStageValue={setStageID} />

            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <strong>Project Tasks</strong>
                        </Col>    
                        <Col align='end'>
                            <span onClick={() => setAddNew(!addNew)}><MdAddCircle/></span>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body>
                {addNew ? 
                <div className='project-tasks'>
                    <AddProjectTask handleAddNew={handleAddNew} />
                </div>
                :
                <div className='project-tasks'>
                        {stageID > 0 ? 
                        
                        projectTasks.filter((task) => parseInt(task.task.stage_id) === parseInt(stageID))
                        .map((task) => {
                                return(
                                    <ProjectTask key={task.id} projectTaskID={task.id} getProjectTasks={getProjectTasks}/>
                                )
                            }
                            
                        )
                            :
                            projectTasks.map((task) => {
                                return(
                                    <ProjectTask key={task.id} projectTaskID={task.id} getProjectTasks={getProjectTasks}/>
                                )
                            })
                    }
                </div>
                }       

                </Card.Body>
            </Card>
            

        {/* {addNew && <AddProjectTask handleAddNew={handleAddNew} />} */}



        </div>
    )

}