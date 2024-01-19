import React, { useEffect, useState } from "react";
import CreateTaskType from "./CreateTaskType";
import LookupAPIs from "../../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { Card, Row, Col, Table } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import ViewTaskType from "./ViewTaskType";
import { useNavigate } from "react-router-dom";

export default function TaskTypeMaintenance({taskID}){

    const navigate = useNavigate();
    const [taskTypeData, setTaskTypeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addNew, setAddNew] = useState(false);

    const getTaskTypeData = (taskID) => {

        LookupAPIs.GetTaskType(taskID)
        .then((response) => {
            if(response.status === 200){
                setTaskTypeData(response.data);
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
                    window.alert(err.response.data.message)
                }
            }
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getTaskTypeData(taskID);
    }


    useEffect(() => {
        getTaskTypeData(taskID);
    }, [taskID])


    if(loading){
        return(
            <div>Loading Task Type Data...</div>
        )
    }
    else{
        return(
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <strong>Task Types</strong>
                        </Col>
                        <Col align='end'>
                            <span onClick={() => setAddNew(!addNew)}><MdAddCircle/></span>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body>
                    {addNew && <CreateTaskType taskID={taskID} handleAddNew={handleAddNew} />}
            
                <Table>
                    <tbody>
                    {taskTypeData.map((filteredTaskType) => {
                        return(
                            <ViewTaskType key={filteredTaskType.id} taskID={taskID} taskType={filteredTaskType} getTaskTypeData={getTaskTypeData}/>
                        )
                    })}
                    </tbody>
                </Table>
                

               
                </Card.Body>
                
                
                

            </Card>
        )
    }

    
}