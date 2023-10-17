import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateEmployeeType from "./CreateEmployeeType/CreateEmployeeType";

export default function EmployeeTypeMaintenance(){

    const [employeeTypeData, setEmployeeTypeData] = useState([]);
    const [addNew, setAddNew] = useState(false);

    const getEmployeeTypes = () => {
        axios.get('http://localhost:8080/lookup/employee-type')
        .then((response) => {
            if(response.status === 200){
                setEmployeeTypeData(response.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getEmployeeTypes();
    }

    useEffect(() => {
        getEmployeeTypes();
    }, [])

    return(
        <div>
            <h5>Employee Types</h5>
            <span onClick={() => setAddNew(!addNew)}>Add</span>
            {employeeTypeData.map((type) => {
                return(
                    <div key={type.id}>{type.name}</div>
                )
            })}

            {addNew && <CreateEmployeeType handleAddNew={handleAddNew} />}
        </div>
    )
}