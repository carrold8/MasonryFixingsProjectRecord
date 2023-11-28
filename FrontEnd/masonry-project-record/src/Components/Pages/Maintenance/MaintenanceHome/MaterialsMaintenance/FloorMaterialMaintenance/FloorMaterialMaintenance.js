import React, { useEffect, useState } from "react";
import CreateFloorMaterial from "./CreateFloorMaterial";
import LookupAPIs from "../../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import ViewFloorMaterial from "./ViewFloorMaterial";
import { Card, Row, Col, Table } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";

export default function FloorMaterialMaintenance(){

    const [materialData, setMaterialData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addMat, setAddMat] = useState(false);

    const getMaterialData = () => {

        LookupAPIs.GetFloorMaterial()
        .then((response) => {
            if(response.status === 200){
                setMaterialData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleAddMaterial = () => {
        setAddMat(false);
        getMaterialData();
    }

    useEffect(() => {
        getMaterialData();
    }, []);

    if(loading){
        return(
            <div>Loading Envelope Materials...</div>
        )
    }
    else{
        return(
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <strong>Floor Material</strong>
                        </Col>    
                        <Col align='end'>
                        <span onClick={() => setAddMat(!addMat)}><MdAddCircle/></span>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body>

                    {addMat && <CreateFloorMaterial handleAddNew={handleAddMaterial} />}

                    <Table>
                        <tbody>
                            {materialData.length === 0 ? 
                                <div>No Floor Materials</div>
                                :
                                materialData.map((material) => {
                                    return(
                                        <ViewFloorMaterial key={material.id} material={material} getMaterialData={getMaterialData}/>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    
                </Card.Body>
            </Card>
        )
    }

}
