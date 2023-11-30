import React, { useEffect, useState } from "react";
import CreateRoofMaterial from "./CreateRoofMaterial";
import LookupAPIs from "../../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import ViewRoofMaterial from "./ViewRoofMaterial";
import { Card, Row, Col, Table } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function RoofMaterialMaintenance(){

    const [materialData, setMaterialData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMats, setShowMats] = useState(false);
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
            <div>Loading Envelope Materials...</div>
        )
    }
    else{
        return(
            <div className="material-maintenance-container">
        
                <div className="body">
                    <h4>Roof Materials</h4>
                    <span onClick={() => setShowMats(!showMats)}>
                        {showMats ? <FaChevronUp/> : <FaChevronDown/>}
                    </span>
                </div>

                <div className={showMats ? "materials active" : "materials"}>
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
                                        })}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    
                </div>
            </div>
        )
    }

}
