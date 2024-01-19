import React, { useEffect, useState } from "react";
import CreateSector from "./CreateSector";
import LookupAPIs from "../../../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { Card, Row, Col, Table} from "react-bootstrap";
import ViewSector from "./ViewSector";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function SectorMaintenance({categoryID}){

    const navigate = useNavigate();
    const [sectorData, setSectorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addNew, setAddNew] = useState(false);

    const getSectorData = (categoryID) => {
        
        LookupAPIs.GetCategorySectors(categoryID)
        .then((response) => {
            if(response.status === 200){
                setSectorData(response.data);
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
        getSectorData();
    }

    useEffect(() => {
        getSectorData(categoryID);
    }, [categoryID]);

    if(loading){
        return(
            <div>Loading Sector Data...</div>
        )
    }
    else{
        return(
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <strong>Sector Maintenance</strong>
                        </Col>
                        <Col align={'end'}>
                            <span onClick={() => setAddNew(!addNew)}><MdAddCircle/></span>
                        </Col>    
                    </Row></Card.Header>

                <Card.Body>
                    {addNew && <CreateSector handleAddNew={handleAddNew} categoryID={categoryID} />}


                    {sectorData.length === 0 ? 
                    <div>No Sectors</div>
                    :

                    <Table responsive>
                        <tbody>
                            {sectorData.map((sector) => {
                                    return(
                                        <ViewSector key={sector.id} sector={sector} getSectorData={getSectorData}/>
                                    )
                                })}
                        </tbody>
                    </Table>
                    
                }


                </Card.Body>
                
                

                


                
            </Card>
        )
    }

}
