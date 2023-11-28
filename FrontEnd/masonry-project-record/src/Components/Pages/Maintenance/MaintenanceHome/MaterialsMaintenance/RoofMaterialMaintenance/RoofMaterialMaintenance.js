import React, { useEffect, useState } from "react";
import CreateRoofMaterial from "./CreateRoofMaterial";
import LookupAPIs from "../../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { Card, Row, Col, Table } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import ViewRoofMaterial from "./ViewRoofMaterial";

export default function RoofMaterialMaintenance(){

    const [materialData, setMaterialData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addMat, setAddMat] = useState(false);

    const getMaterialData = () => {

        LookupAPIs.GetRoofMaterial()
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
            <div>Loading Roof Materials...</div>
        )
    }
    else{
        return(
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <strong>Roof Material</strong>
                        </Col>    
                        <Col align='end'>
                        <span onClick={() => setAddMat(!addMat)}><MdAddCircle/></span>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body>

                    {addMat && <CreateRoofMaterial handleAddNew={handleAddMaterial} />}

                    <Table>
                        <tbody>
                            {materialData.length === 0 ? 
                                <div>No Roof Materials</div>
                                :
                                materialData.map((material) => {
                                    return(
                                        <ViewRoofMaterial key={material.id} material={material} getMaterialData={getMaterialData}/>
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
