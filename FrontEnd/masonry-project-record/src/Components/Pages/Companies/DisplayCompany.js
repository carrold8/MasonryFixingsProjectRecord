import React, { useState } from "react";
import DisplayEmployees from "./Employees/DisplayEmployees";

function DisplayCompany({CompanyData}){

    const [showEmployees, setShowEmployees] = useState(false);


    return(
        <div style={{border: '1px solid red', padding: '2rem', margin: '0.5rem'}}>
            <h2 >{CompanyData.name} {CompanyData.companyType}</h2>
            <button onClick={() => setShowEmployees(!showEmployees)}>Employees</button>
            {showEmployees && <DisplayEmployees CompanyID={CompanyData.id} />}
        </div>
    )

}
export default DisplayCompany;