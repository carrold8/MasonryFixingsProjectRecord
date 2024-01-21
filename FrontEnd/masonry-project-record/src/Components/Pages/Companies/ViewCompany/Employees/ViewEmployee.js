import React, { useEffect, useState } from "react";
import EmployeeAPIs from "../../../../../MasonyFixingsAPIs/EmployeeAPIs/EmployeeAPIs";
import {  FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ViewEmployee({employeeID}){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [edit, setEdit] = useState(false);
    const [sending, setSending] = useState(false);

    const [employeeData, setEmployeeData] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [employeeTypeID, setEmployeeTypeID] = useState();

    const getEmployee = (employeeID) => {

        EmployeeAPIs.GetEmployee(employeeID)
        .then((response) => {
            if(response.status === 200){
                setEmployeeData(response.data);
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setPhone(response.data.phone);
                setEmployeeTypeID(response.data.employee_type_id);
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

    const updateEmployee = () => {

        setSending(true);
        const putJSON = {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            employee_type_id: employeeTypeID
        }

        if(
            firstName !== '' &&
            lastName !== '' &&
            phone !== '' &&
            employeeID !== ''
        ){
            EmployeeAPIs.PutEmployee(employeeID, putJSON)
            .then((response) => {
                if(response.status === 200){
                    setEdit(false);
                    getEmployee(employeeID);
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

    }

    const handleCancel = () => {
        setFirstName(employeeData.first_name);
        setLastName(employeeData.lastName);
        setPhone(employeeData.phone);
        setEmployeeTypeID(employeeData.employee_type_id);
        setEdit(false);
    }

    useEffect(() => {
        getEmployee(employeeID);
    }, [employeeID]);

    if(loading){
        return(<tr><td>Loading employee...</td></tr>)
    }
    else{
    return(
        
        <tr>
        
       
            <td>{edit ? <input value={firstName} onChange={(e) => setFirstName(e.target.value)} /> : firstName} </td> 
            <td>{edit ? <input value={lastName} onChange={(e) => setLastName(e.target.value)} /> : lastName} </td> 
            <td>{edit ? <input value={phone} onChange={(e) => setPhone(e.target.value)} /> : phone}</td> 
            {edit ? 
                <td>
                    <button disabled={sending} onClick={() => updateEmployee()}><FaSave/></button> 
                    <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                </td>
                :
                <td><button onClick={() => setEdit(true)}><AiFillEdit/></button></td> 
            }
    
        </tr>
      
    )
    }


}