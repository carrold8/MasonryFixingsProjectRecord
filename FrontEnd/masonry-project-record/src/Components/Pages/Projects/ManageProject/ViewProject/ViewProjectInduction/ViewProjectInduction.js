import React, { useEffect, useState } from "react";
import './ViewProjectInduction.css';
import ViewInductionTable from "./ViewInductionTable/ViewInductionTable";
import { useParams } from "react-router-dom";
import ProjectAPIs from "../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import { FaChevronUp, FaChevronDown, FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { Form } from "react-bootstrap";

export default function ViewProjectInduction(){

    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [showInductions, setShowInductions] = useState(false);

    const [inductionData, setInductionData] = useState();
    const [indRequired, setIndRequired] = useState();
    const [providedOn, setProvidedOn] = useState();

    const getInductionData = (projectID) => {

        ProjectAPIs.GetProjectInduction(projectID)
        .then((response) => {
            if(response.status === 200){
                setInductionData(response.data);
                setIndRequired(response.data.induction_required);
                setProvidedOn(response.data.induction_provided);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const editInduction = (e) => {

        e.preventDefault();
        e.stopPropagation();

        const putJSON = {
            induction_required: indRequired,
            induction_provided: providedOn
        }
        ProjectAPIs.PutProjectInduction(params.ProjectID, putJSON)
        .then((response) => {
            if(response.status === 200){
                getInductionData(params.ProjectID);
                setEditing(false);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleCancel = () => {
        setIndRequired(inductionData.induction_required);
        setProvidedOn(inductionData.induction_provided);
        setEditing(false);
    }

    useEffect(() => {
        getInductionData(params.ProjectID);
    }, [params.ProjectID]);


    if(loading){
        return(<div>Loading Inductions...</div>);
    }
    else{
        return(
            <div className="view-project-induction-container">

                <div className="title">
                    <h3>Induction</h3>
                    <span align='center' onClick={() => setShowInductions(!showInductions)}>
                        {showInductions ? <FaChevronUp/> : <FaChevronDown/>}
                    </span>
                </div>

                <div className={showInductions ? 'show-inductions active' : 'show-inductions'}>
                    <Form onSubmit={editInduction}>
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
                
                    <div>
                        <strong>Required:</strong>
                        <span>
                            <input 
                                type="checkbox" 
                                checked={indRequired}
                                onChange={() => setIndRequired(!indRequired)} 
                                disabled={!editing} 
                            />
                        </span>
                    </div>
                    <div><strong>Provided On</strong> {editing ?
                        <Form.Control value={providedOn} onChange={(e) => setProvidedOn(e.target.value)} />
                        :
                         <div>{providedOn}</div>}
                        </div>
    
                    <ViewInductionTable projectID={params.ProjectID} />
                    </Form>
                </div>
                
                
    
    
            </div>
        )
    }
    
}