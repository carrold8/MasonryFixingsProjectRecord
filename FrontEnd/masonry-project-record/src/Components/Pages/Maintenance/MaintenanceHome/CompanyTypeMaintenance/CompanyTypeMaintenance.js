import React, { useEffect, useState } from "react";
import axios from 'axios';
import CreateCompanyType from "./CreateCompanyType/CreateCompanyType";

export default function CompanyTypeMaintenance(){

    const [companyTypeData, setCompTypeData] = useState([]);
    const [addNew, setAddNew] = useState(false);

    const getCompanyTypeData = () => {

        axios.get('http://localhost:8080/lookup/company-type')
        .then((response) => {
            if(response.status === 200){
                setCompTypeData(response.data);
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

    return(
        <div>
            <h5>Company Types</h5>
            <span onClick={() => setAddNew(!addNew)}>Add</span>
            {companyTypeData.map((type) => {
                return(
                    <div key={type.id}>{type.name}</div>
                )
            })}

            {addNew && <CreateCompanyType handleAddNew={handleAddNew} />} 
        </div>
    )
}