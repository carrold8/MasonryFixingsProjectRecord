import React, {useState, useEffect} from "react";
import axios from "axios";

export default function ViewProjectEngineer({projectInfo}){
    
    const [loading, setLoading] = useState(true);
    const [engineerData, setEngineerData] = useState();
    const [engineerEmployees, setEngineerEmployees] = useState([]);

    const getEngineerData = (engineerID) => {
        axios.get('http://localhost:8080/company/' + engineerID )
        .then((company) => {
            setEngineerData(company.data);

            axios.get('http://localhost:8080/company/' + engineerID + '/employees')
            .then((employees) => {
                setEngineerEmployees(employees.data);
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
        getEngineerData(projectInfo.engineering_company_id);
    }, [projectInfo.engineering_company_id])
    
    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    else {
        return(
            <div className="view-project-contractor-container">
                <h5>Engineer: {engineerData.name}</h5>

                <div className="employees">
                    <div className="employee">
                    {engineerEmployees.filter((employee) => employee.id === projectInfo.engineer_id)
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

                <div>Contacted: <input type="checkbox" disabled={true} checked={projectInfo.contacted_engineer}/></div>

            </div>
        )
    }
}