import React, { useEffect, useState } from 'react';
import EmployeeAPIs from '../../../../../../../../MasonyFixingsAPIs/EmployeeAPIs/EmployeeAPIs';
import { Form } from 'react-bootstrap';
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function ViewProjectContractorEmployee({employeeID}){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [employeeData, setEmployeeData] = useState();

    const [phone, setPhone] = useState();

    const getEmployee = (employeeID) => {

        EmployeeAPIs.GetEmployee(employeeID)
        .then((response) => {
            if(response.status === 200){
                setEmployeeData(response.data);
                setPhone(response.data.phone);
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

    const editEmployee = () => {

        const putJSON = {
            phone: phone
        }

        EmployeeAPIs.PutEmployee(employeeID, putJSON)
        .then((response) => {
            if(response.status === 200){
                setEditing(false);
                getEmployee(employeeID);
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

    const handleCancel = () => {
        setPhone(employeeData.phone);
        setEditing(false);
    }
    useEffect(() => {
        getEmployee(employeeID);
    }, [employeeID]);

    if(loading){
        return(<div>Loading employee details..</div>)
    }
    else{
        return(
            <div>
                <div align='end'>
                    {editing ? 
                        <>
                            <button type="button" onClick={() => handleCancel()}><MdCancel/></button>
                            <button type={"submit"} onClick={() => editEmployee()}><FaSave/></button>
                        </>
                        :
                        <button type="button" onClick={() => setEditing(true)}><AiFillEdit/></button>
                    }
                </div>
                <strong>Phone</strong>
                <div>
                
                    {editing? 
                    <Form.Control size='sm' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    :
                     phone
                    }
                </div>
            </div>
        )
    }

}