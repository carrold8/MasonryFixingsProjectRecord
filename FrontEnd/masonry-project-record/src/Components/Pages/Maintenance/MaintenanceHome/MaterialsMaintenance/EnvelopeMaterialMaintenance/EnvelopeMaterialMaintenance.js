import React, { useEffect, useState } from "react";
import CreateEnvelopeMaterial from "./CreateEnvelopeMaterial";
import LookupAPIs from "../../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { Card, Row, Col, Table } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import ViewEnvelopeMaterial from "./ViewEnvelopeMaterial";

export default function EnvelopeMaterialMaintenance(){

    const [materialData, setMaterialData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addMat, setAddMat] = useState(false);

    const getMaterialData = () => {

        LookupAPIs.GetEnvelopeMaterial()
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
                            <strong>Envelope Material</strong>
                        </Col>    
                        <Col align='end'>
                        <span onClick={() => setAddMat(!addMat)}><MdAddCircle/></span>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body>

                    {addMat && <CreateEnvelopeMaterial handleAddNew={handleAddMaterial} />}

                    <Table>
                        <tbody>
                            {materialData.length === 0 ? 
                                <div>No Envelope Materials</div>
                                :
                                materialData.map((material) => {
                                    return(
                                        <ViewEnvelopeMaterial key={material.id} material={material} getMaterialData={getMaterialData}/>
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
