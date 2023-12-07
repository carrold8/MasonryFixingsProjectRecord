import React, { useEffect, useState } from "react";
import './TaskProduct.css' 
import ProjectTaskAPIs from "../../../../../../../../../MasonyFixingsAPIs/ProjectTaskAPIs/ProjectTaskAPIs";
import { Form } from "react-bootstrap";
import DropDown from "../../../../../../../../DropDown/DropDown";
import { MdCancel } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FaSave } from "react-icons/fa";


export default function TaskProduct({projectTaskID, taskProductID}){

    //Use product Id to get the info related to the ProjectTaskProduct

    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);

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
            console.log(err);
        })
    }

    const handleEditTaskProduct = () => {
        const putJSON = {
            product_id: productID,
            quantity: quantity
        }

        ProjectTaskAPIs.PutProjectTaskProduct(projectTaskID, taskProductID, putJSON)
        .then((response) => {
            if(response.status === 200){
                getTaskProductInfo(projectTaskID, taskProductID);
                setEditing(false);
            }
        })
        .catch((err) => {
            console.log(err);
        })
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

                {editing && <td><button onClick={() => handleEditTaskProduct()}><FaSave/></button></td>}

                <td>
                    {editing ? 
                        <button onClick={() => handleCancel()}><MdCancel/></button>
                        :
                        <button onClick={() => setEditing(true)}><AiFillEdit/></button>
                    }
                </td>
        
                
            
            </tr>
        )
    }



}
