import React, { useEffect, useState } from "react";
import CreatePartitioningMaterial from "./CreatePartitioningMaterial";
import LookupAPIs from "../../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import ViewPartitioningMaterial from "./ViewPartitioningMaterial";
import { Card, Row, Col, Table } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function PartitioningMaterialMaintenance(){

    const [materialData, setMaterialData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMats, setShowMats] = useState(false);
    const [addMat, setAddMat] = useState(false);

    const getMaterialData = () => {

        LookupAPIs.GetPartitioningMaterial()
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
                    <h4>Partitioning Materials</h4>
                    <span onClick={() => setShowMats(!showMats)}>
                        {showMats ? <FaChevronUp/> : <FaChevronDown/>}
                    </span>
                </div>

                <div className={showMats ? "materials active" : "materials"}>
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col>
                                    <strong>Partitioning Material</strong>
                                </Col>    
                                <Col align='end'>
                                <span onClick={() => setAddMat(!addMat)}><MdAddCircle/></span>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            {addMat && <CreatePartitioningMaterial handleAddNew={handleAddMaterial} />}
                            <Table>
                                <tbody>
                                    {materialData.length === 0 ? 
                                        <div>No Partitioning Materials</div>
                                        :
                                        materialData.map((material) => {
                                            return(
                                                <ViewPartitioningMaterial key={material.id} material={material} getMaterialData={getMaterialData}/>
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
