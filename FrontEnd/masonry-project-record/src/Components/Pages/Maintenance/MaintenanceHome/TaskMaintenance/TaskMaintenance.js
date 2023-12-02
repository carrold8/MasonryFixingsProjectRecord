import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import LookupAPIs from "../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import ViewTask from "./ViewTask";
import { Card, Col, Row } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import StageSelectionTabs from "../../../../StageSelectionTabs/StageSelectionTabs";

export default function TaskMaintenance(){


    const [taskData, setTaskData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addNew, setAddNew] = useState(false);
    const [stage, setStage] = useState('');

    const getTaskData = () => {

        LookupAPIs.GetTask()
        .then((response) => {
            if(response.status === 200){
                setTaskData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getTaskData();
    }


    useEffect(() => {
        getTaskData();
    }, [])


    if(loading){
        return(
            <div>Loading Task Data...</div>
        )
    }
    else{
        return(
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <strong>Task Maintenance</strong>
                        </Col>
                        <Col align='end'>
                        <span onClick={() => setAddNew(!addNew)}><MdAddCircle/></span>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body>
                {addNew && <CreateTask handleAddNew={handleAddNew} />}
               
                <StageSelectionTabs value={stage} setStageValue={setStage} />

                {stage === '' ? 

                taskData.map((task) => {
                    return(
                        <ViewTask key={task.id} task={task} getTaskData={getTaskData} />
                    )
                })
                :
                taskData.filter((task) => {return task.stage_id === parseInt(stage)})
                .map((filteredTask) => {
                    return(
                        <ViewTask key={filteredTask.id} task={filteredTask} getTaskData={getTaskData} />
                    )
                })}
                </Card.Body>
            </Card>
        )
    }

    
}