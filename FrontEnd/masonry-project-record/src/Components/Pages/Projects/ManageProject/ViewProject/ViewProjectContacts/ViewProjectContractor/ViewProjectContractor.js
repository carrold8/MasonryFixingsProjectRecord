import React, { useState, useEffect } from "react";
import axios from "axios";
import './ViewProjectContractor.css';

export default function ViewProjectContractor({projectInfo}){

    const [loading, setLoading] = useState(true);
    const [contractorData, setContractorData] = useState();
    const [contractorEmployees, setContractorEmployees] = useState([]);

    const getContractorData = (contractorID) => {
        axios.get('http://localhost:8080/company/' + contractorID )
        .then((company) => {
            setContractorData(company.data);

            axios.get('http://localhost:8080/company/' + contractorID + '/employees')
            .then((employees) => {
                setContractorEmployees(employees.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            })
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getContractorData(projectInfo.main_contractor_id);
    }, [projectInfo.main_contractor_id])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    else {
        return(
            <div className="view-project-contractor-container">
                <h5>Contractor: {contractorData.name}</h5>

                <div className="employees">
                    <div className="employee">
                        <strong>Account Contact: </strong>
                        {contractorEmployees.filter((employee) => employee.id === projectInfo.account_contact_id)
                        .map((employee) => {
                            return(
                                <div key={employee.id}>
                                    <span>{employee.first_name} {employee.last_name}</span>
                                    <span>Phone: {employee.phone}</span>
                                </div>
                            )
                        }
                        
                        
                        )}
                    </div>

                    <div className="employee">
                        <strong>Foreman: </strong> 
                        {contractorEmployees.filter((employee) => employee.id === projectInfo.account_contact_id)
                        .map((employee) => {
                            return(
                                <div key={employee.id}>
                                    <span>{employee.first_name} {employee.last_name}</span>
                                    <span>Phone: {employee.phone}</span>
                                </div>
                            )
                        }
                        
                        
                        )}
                    </div>

                    <div className="employee">
                        <strong>Safety Officer: </strong> 
                        {contractorEmployees.filter((employee) => employee.id === projectInfo.account_contact_id)
                        .map((employee) => {
                            return(
                                <div key={employee.id}>
                                    <span>{employee.first_name} {employee.last_name}</span>
                                    <span>Phone: {employee.phone}</span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="employee">
                        <strong>Storeman: </strong> 
                        {contractorEmployees.filter((employee) => employee.id === projectInfo.account_contact_id)
                        .map((employee) => {
                            return(
                                <div key={employee.id}>
                                    <span>{employee.first_name} {employee.last_name}</span>
                                    <span>Phone: {employee.phone}</span>
                                </div>
                            )
                        }
                        
                        
                        )}
                    </div>
                </div>

            </div>
        )
    }
}