import React, { useEffect, useState } from "react";
import CreateCompanyType from "./CreateCompanyType/CreateCompanyType";
import LookupAPIs from "../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { Card, Row, Col, Table } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import ViewCompanyType from "./ViewCompanyType";

export default function CompanyTypeMaintenance(){

    const [companyTypeData, setCompTypeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addNew, setAddNew] = useState(false);

    const getCompanyTypeData = () => {

        LookupAPIs.GetCompanyType()
        .then((response) => {
            if(response.status === 200){
                setCompTypeData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }


    const handleAddNew = () => {
        setAddNew(false);
        getCompanyTypeData();
    }

    useEffect(() => {
        getCompanyTypeData();
    }, [])


    if(loading){
        return(
            <div>Loading Company Types...</div>
        )
    }
    else{
        return(
            <div>
                <Card>
                    <Card.Header>
                        <Row>
                            <Col>
                                <strong>Company Type Maintenance</strong>
                            </Col>
                            <Col align={'end'}>
                                <span onClick={() => setAddNew(!addNew)}><MdAddCircle/></span>
                            </Col>
                        </Row>
                    </Card.Header>

                    <Card.Body>
                        {addNew && <CreateCompanyType handleAddNew={handleAddNew} />}

                        {companyTypeData.length === 0 ?
                    <div>No Company Types</div>
                    :
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companyTypeData.map((companyType) => {
                                return(
                                    <ViewCompanyType key={companyType.id} companyType={companyType} getCompanyTypeData={getCompanyTypeData}/>
                                )
                            }) }  
                        </tbody>
                    </Table>
                }
                    
                    </Card.Body>

                </Card>
                {/* <h5>Company Types</h5>
                <span onClick={() => setAddNew(!addNew)}>Add</span>
                {companyTypeData.map((type) => {
                    return(
                        <div key={type.id}>{type.name}</div>
                    )
                })}

                {addNew && <CreateCompanyType handleAddNew={handleAddNew} />}  */}
            </div>
        )
    }
}