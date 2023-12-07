import React, { useEffect, useState } from "react";
import TaskProduct from "./TaskProduct/TaskProduct";
import ProjectTaskAPIs from "../../../../../../../../MasonyFixingsAPIs/ProjectTaskAPIs/ProjectTaskAPIs";
import AddTaskProduct from "./AddTaskProduct";
import { Card, Row, Col, Table } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";

export default function ViewTaskProducts({projectTaskID}){

    const ColumnHeaders = ['Product', 'Quantity', 'Edit'];

    const [loading, setLoading] = useState(true);
    const [addNew, setAddNew] = useState(false);

    const [taskProducts, setTaskProducts] = useState([])
    const getTaskProducts = (projectTaskID) => {
        ProjectTaskAPIs.GetProjectTaskProductList(projectTaskID)
        .then((response) => {
            if(response.status === 200){
                setTaskProducts(response.data);
                setLoading(false);
            }
        })
    }

    const thData = () => {

        return ColumnHeaders.map((header, index) => {
            return(
                <th key={index}>{header}</th>
            )
        })
    }

    const handleAddNew = () => {
        getTaskProducts(projectTaskID);
        setAddNew(false);
    }

    useEffect(() => {
        getTaskProducts(projectTaskID);
    }, [projectTaskID])


    if(loading){
        return(
            <div>Loading Products...</div>
        )
    }

    return(
        <Card>
            <Card.Header>
                    <Row>
                        <Col>
                            <strong>Products</strong>
                        </Col>    
                        <Col align='end'>
                            <span onClick={() => setAddNew(!addNew)}><MdAddCircle/></span>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                

                    <Table striped hover responsive>
                        <thead>
                            <tr>{thData()}</tr>
                        </thead>
                        <tbody>
                        {addNew && <AddTaskProduct projectTaskID={projectTaskID} handleAddNew={handleAddNew} />}
                        {taskProducts.length > 0 ? 
                        taskProducts.map((product) => {
                            return(
                                <TaskProduct key={product.id} projectTaskID={projectTaskID} taskProductID={product.id} />
                            )
                        })
                        :
                        <tr><td>No Products yet</td></tr> 
                        }
                        </tbody>
                    </Table>
                    
                </Card.Body>
            
            
        </Card>
    )

}