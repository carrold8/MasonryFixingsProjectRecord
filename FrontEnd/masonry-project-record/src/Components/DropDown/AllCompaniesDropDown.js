import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import CompanyAPIs from "../../MasonyFixingsAPIs/CompanyAPIs/CompanyAPIs";

export default function AllCompaniesDropDown(props){

    const [companyData, setCompanyData] = useState([]);
    
    const getCompanyData = () => {
        CompanyAPIs.GetAllCompanies()
        .then((companies) => {
            setCompanyData(companies.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getCompanyData()
    }, []);

    return(
        <Form.Select
            className={props.className}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            size={props.size}
            required={props.required}
            disabled={props.disabled}
        >
            <option value={''}>Company</option>
            {companyData.map((company) => {
                return(
                    <option key={company.id} value={company.id}>{company.name}</option>
                )
            })}
        </Form.Select>
    )


}