import React, {useState, useEffect} from "react";
import axios from "axios";

export default function ViewProjectArchitect({projectInfo}){

    const [loading, setLoading] = useState(true);
    const [architectData, setArchitectData] = useState();
    const [architectEmployees, setArchitectEmployees] = useState([]);

    const getArchitectData = (architectID) => {
        axios.get('http://localhost:8080/company/' + architectID )
        .then((company) => {
            setArchitectData(company.data);

            axios.get('http://localhost:8080/company/' + architectID + '/employees')
            .then((employees) => {
                setArchitectEmployees(employees.data);
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
        getArchitectData(projectInfo.architect_company_id);
    }, [projectInfo.architect_company_id])
    
    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    else {
        return(
            <div className="view-project-contractor-container">
                <h5>Architect: {architectData.name}</h5>

                <div className="employees">
                    <div className="employee">
                    {architectEmployees.filter((employee) => employee.id === projectInfo.architect_id)
                        .map((employee) => {
                            return(
                                <div key={employee.id}>
                                    <span>{employee.first_name} {employee.last_name}</span>
                                    <span>Phone: {employee.phone}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}