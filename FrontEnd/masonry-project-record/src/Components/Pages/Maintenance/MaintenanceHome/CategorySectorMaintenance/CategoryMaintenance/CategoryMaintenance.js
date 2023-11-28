import React, { useEffect, useState } from "react";
import CreateCategory from "./CreateCategory/CreateCategory";
import LookupAPIs from "../../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { Card, Col, Row } from "react-bootstrap";
import ViewCategory from "./ViewCategory";
import { MdAddCircle } from "react-icons/md";

export default function CategoryMaintenance(){

    const [categoryData, setCategoryData] = useState([]);
    const [addNew, setAddNew] = useState(false);

    const getCategoryData = () => {
        
        LookupAPIs.GetCategory()
        .then((response) => {
            if(response.status === 200){
                setCategoryData(response.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getCategoryData();
    }
    
    useEffect(() => {
        getCategoryData();
    }, []);

    return(
        <Card>
            <Card.Header>
                <Row>
                    <Col>
                        <strong>Category Maintenance</strong>
                    </Col>
                    <Col align={'end'}>
                        <span onClick={() => setAddNew(!addNew)}><MdAddCircle/></span>
                    </Col>
                </Row>
            </Card.Header>

            <Card.Body>

            {addNew && <CreateCategory handleAddNew={handleAddNew} />}
            
            {categoryData.map((category) => {
                return(
                    <ViewCategory key={category.id} category={category} getCategoryData={getCategoryData}/>
                )
            })}

            
            </Card.Body>
        </Card>
    )
}