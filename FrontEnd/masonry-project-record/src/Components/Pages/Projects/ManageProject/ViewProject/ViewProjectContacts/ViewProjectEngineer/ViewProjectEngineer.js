import React, {useState, useEffect} from "react";
import ProjectAPIs from "../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { Form } from "react-bootstrap";
import DropDown from "../../../../../../DropDown/DropDown";

export default function ViewProjectEngineer(){
    
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [engineerData, setEngineerData] = useState();

    const [engineerCompanyID, setEngineerCompanyID] = useState();
    const [engineerID, setEngineerID] = useState();
    const [contactedEng, setContactedEng] = useState();
    // const [phone, setPhone] = useState()

    const getEngineerData = (projectID) => {
        ProjectAPIs.GetProjectEngineer(projectID)
        .then((response) => {
            if(response.status === 200){
                setEngineerData(response.data);
                setEngineerCompanyID(response.data.company.id);
                setEngineerID(response.data.engineer_id);
                setContactedEng(response.data.contacted_engineer);
                // setPhone(response.data.phone);
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

    const editProjectEngineer = (e) => {

        e.preventDefault();
        e.stopPropagation();
        const putJSON = {
            engineering_company_id: parseInt(engineerCompanyID),
            engineer_id: parseInt(engineerID),
            contacted_engineer: contactedEng,
            // phone: phone
        }
        ProjectAPIs.PutProjectEngineer(params.ProjectID, putJSON)
        .then((response) => {
            if(response.status === 200){
                getEngineerData(params.ProjectID);
                setEditing(false);
            }
        })


    }

    const handleCancel = () => {
        setEngineerID(engineerData.engineer_id)
        setEngineerCompanyID(engineerData.company.id);
        setEditing(false);
    }

    const handleChangeCompany = (e) => {
        setEngineerCompanyID(e.target.value);
        setEngineerID('');
    }

    useEffect(() => {
        getEngineerData(params.ProjectID);
    }, [params.ProjectID])
    
    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    else {
        return(
            <div className="view-project-contractor-container">
                <Form onSubmit={editProjectEngineer}>
                    <div className="title">
                        <h5><strong>Engineering</strong></h5>
                        <div align='end'>
                            {editing ? 
                                <>
                                    <button type="button" onClick={() => handleCancel()}><MdCancel/></button>
                                    <button type={"submit"} ><FaSave/></button>
                                </>
                                :
                                <button type="button" onClick={() => setEditing(true)}><AiFillEdit/></button>
                            }
                        </div>
                    </div>
                {editing?
                    <DropDown.AllCompanies value={engineerCompanyID} onChange={handleChangeCompany} />
                    : 
                    <h5>{engineerData.company.name}</h5>
                }
                
                <div className="employees">
                    <div className="employee">
                        <DropDown.CompanyEmployees 
                            companyID={engineerCompanyID} 
                            value={engineerID}
                            onChange={(e) => setEngineerID(e.target.value)}
                            disabled={!editing}
                            required
                            size='sm'
                        />
                        {/* <div>
                            {editing ?
                            <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} />
                            :  
                            phone}
                        </div> */}
                    </div>
                </div>

                <div>Contacted: <input 
                    type="checkbox" 
                    disabled={!editing} 
                    checked={contactedEng}
                    onChange={(e) => setContactedEng(!contactedEng)} 
                    />
                </div>
                </Form>
            </div>
        )
    }
}