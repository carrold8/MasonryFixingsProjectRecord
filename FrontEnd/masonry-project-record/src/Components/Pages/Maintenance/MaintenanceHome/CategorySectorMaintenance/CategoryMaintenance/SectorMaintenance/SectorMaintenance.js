import React, { useEffect, useState } from "react";
import CreateSector from "./CreateSector";
import LookupAPIs from "../../../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { Card, Row, Col, Table} from "react-bootstrap";
import ViewSector from "./ViewSector";
import { MdAddCircle } from "react-icons/md";

export default function SectorMaintenance({categoryID}){

    const [sectorData, setSectorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addNew, setAddNew] = useState(false);

    const getSectorData = (categoryID) => {
        
        LookupAPIs.GetSector()
        .then((response) => {
            if(response.status === 200){
                setSectorData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
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


                    {sectorData.filter((data) => {return data.category_id === parseInt(categoryID)}).length === 0 ? 
                    <div>No Sectors</div>
                    :

                    <Table responsive>
                        <tbody>
                            {sectorData.filter((data) => {return data.category_id === parseInt(categoryID)})
                                .map((sector) => {
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
