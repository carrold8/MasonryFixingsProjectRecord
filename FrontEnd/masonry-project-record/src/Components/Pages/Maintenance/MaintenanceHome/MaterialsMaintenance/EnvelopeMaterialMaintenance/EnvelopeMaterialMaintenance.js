import React, { useEffect, useState } from "react";
import CreateEnvelopeMaterial from "./CreateEnvelopeMaterial";
import LookupAPIs from "../../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import ViewEnvelopeMaterial from "./ViewEnvelopeMaterial";
import { Card, Row, Col, Table } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function EnvelopeMaterialMaintenance(){

    const navigate = useNavigate();
    const [materialData, setMaterialData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMats, setShowMats] = useState(false);
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
                    <h4>Envelope Materials</h4>
                    <span onClick={() => setShowMats(!showMats)}>
                        {showMats ? <FaChevronUp/> : <FaChevronDown/>}
                    </span>
                </div>

                <div className={showMats ? "materials active" : "materials"}>
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
