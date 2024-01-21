import React, {useState, useEffect} from "react";
import ProjectAPIs from "../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { Form } from "react-bootstrap";
import DropDown from "../../../../../../DropDown/DropDown";

export default function ViewProjectArchitect(){
    
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);
    const [architectData, setArchitectData] = useState();

    const [architectCompanyID, setArchitectCompanyID] = useState();
    const [architectID, setArchitectID] = useState();

    const getArchitectData = (projectID) => {
        ProjectAPIs.GetProjectArchitect(projectID)
        .then((response) => {
            if(response.status === 200){
                setArchitectData(response.data);
                setArchitectCompanyID(response.data.company.id);
                setArchitectID(response.data.architect_id);
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

    const editProjectArchitect = (e) => {

        e.preventDefault();
        e.stopPropagation();
        setSending(true);
        const putJSON = {
            architect_company_id: parseInt(architectCompanyID),
            architect_id: parseInt(architectID)
            // phone: phone
        }
        ProjectAPIs.PutProjectArchitect(params.ProjectID, putJSON)
        .then((response) => {
            if(response.status === 200){
                getArchitectData(params.ProjectID);
                setEditing(false);
                setSending(false);
            }
        })
        .catch((err) => {
            console.log(err)
            setSending(false);
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

    const handleCancel = () => {
        setArchitectID(architectData.architect_id)
        setArchitectCompanyID(architectData.company.id);
        setEditing(false);
    }

    const handleChangeCompany = (e) => {
        setArchitectCompanyID(e.target.value);
        setArchitectID('');
    }

    useEffect(() => {
        getArchitectData(params.ProjectID);
    }, [params.ProjectID])
    
    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    else {
        return(
            <div className="view-project-contractor-container">
                <Form onSubmit={editProjectArchitect}>
                    <div className="title">
                        <h5><strong>Architecture</strong></h5>
                        <div align='end'>
                            {editing ? 
                                <>
                                    <button disabled={sending} type="button" onClick={() => handleCancel()}><MdCancel/></button>
                                    <button disabled={sending} type={"submit"} ><FaSave/></button>
                                </>
                                :
                                <button type="button" onClick={() => setEditing(true)}><AiFillEdit/></button>
                            }
                        </div>
                    </div>
                {editing?
                    <DropDown.AllCompanies value={architectCompanyID} onChange={handleChangeCompany} />
                    : 
                    <h5>{architectData.company.name}</h5>
                }
                
                <div className="employees">
                    <div className="employee">
                        <DropDown.CompanyEmployees 
                            companyID={architectCompanyID} 
                            value={architectID}
                            onChange={(e) => setArchitectID(e.target.value)}
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

                </Form>
            </div>
        )
    }
}