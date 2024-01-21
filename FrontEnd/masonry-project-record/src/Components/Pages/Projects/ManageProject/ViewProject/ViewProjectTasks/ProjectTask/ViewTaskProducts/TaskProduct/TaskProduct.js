import React, { useEffect, useState } from "react";
import './TaskProduct.css' 
import ProjectTaskAPIs from "../../../../../../../../../MasonyFixingsAPIs/ProjectTaskAPIs/ProjectTaskAPIs";
import { Form } from "react-bootstrap";
import DropDown from "../../../../../../../../DropDown/DropDown";
import { MdCancel, MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function TaskProduct({getTaskProducts, projectTaskID, taskProductID}){

    //Use product Id to get the info related to the ProjectTaskProduct

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);

    const [taskProductInfo, setTaskProductInfo] = useState();
    const [productID, setProductID] = useState();
    const [quantity, setQuantity] = useState();


    const getTaskProductInfo = (projectTaskID, taskProductID) => {
        ProjectTaskAPIs.GetProjectTaskProduct(projectTaskID, taskProductID)
        .then((response) => {
            if(response.status === 200){
                setTaskProductInfo(response.data);
                setProductID(response.data.product_id);
                setQuantity(response.data.quantity);
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
                    setEditing(false);
                    window.alert(err.response.data.message)
                }
            }
        })
    }

    const handleEditTaskProduct = () => {
        setSending(true);
        const putJSON = {
            product_id: productID,
            quantity: quantity
        }

        ProjectTaskAPIs.PutProjectTaskProduct(projectTaskID, taskProductID, putJSON)
        .then((response) => {
            if(response.status === 200){
                getTaskProductInfo(projectTaskID, taskProductID);
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
                    handleCancel();
                    window.alert(err.response.data.message)
                }
            }
        })
    }

    const deleteProduct = () => {
        setSending(true);
        ProjectTaskAPIs.DeleteProjectTaskProduct(projectTaskID, taskProductID)
        .then((response) => {
            if(response.status === 200){
                getTaskProducts(projectTaskID);
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
                    setEditing(false);
                    window.alert(err.response.data.message)
                }
            }
        })
    }

    const handleDeleteProduct = () => {
        if(window.confirm('Are you sure you want to delete this Product from task?')){
            deleteProduct();
        }
    }

    const handleCancel = () => {
        setProductID(taskProductInfo.product_id);
        setQuantity(taskProductInfo.quantity);
        setEditing(false);
    }
    

    useEffect(() => {
        getTaskProductInfo(projectTaskID, taskProductID)
    }, [projectTaskID, taskProductID])

    if(loading){
        return(<div>Loading Product...</div>)
    }
    else{
        return(
            <tr>

                <td>
                    <DropDown.Products disabled={!editing} value={productID} onChange={(e) => setProductID(e.target.value)} />
                </td>
                <td>
                    <Form.Control 
                        type='number'
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                        disabled={!editing}
                    />
                </td>

                <td>
                {editing ? 
                    <button disabled={sending} onClick={() => handleEditTaskProduct()}><FaSave/></button>
                    :
                    <button disabled={sending} onClick={() => handleDeleteProduct()}><MdDelete/></button>
                }
                </td>

                <td>
                    {editing ? 
                        <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                        :
                        <button onClick={() => setEditing(true)}><AiFillEdit/></button>
                    }
                </td>
        
                
            
            </tr>
        )
    }



}
