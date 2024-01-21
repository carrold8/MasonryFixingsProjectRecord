import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DropDown from '../../../../../../../DropDown/DropDown';
import ProjectTaskAPIs from '../../../../../../../../MasonyFixingsAPIs/ProjectTaskAPIs/ProjectTaskAPIs';
import { MdAddCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function AddTaskProduct({projectTaskID, handleAddNew}){

    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [productID, setProductID] = useState('');
    const [quantity, setQuantity] = useState('');

    const addNewTaskProduct = () => {
        setSending(true);
        const postJSON = {
            product_id: productID,
            quantity: quantity
        }
        if(productID !=='' && quantity !== ''){
            ProjectTaskAPIs.PostProjectTaskProduct(projectTaskID, postJSON)
            .then((response) => {
                if(response.status === 200){
                    handleAddNew();
                    setSending(false);
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
                        setSending(false);
                    }
                }
            })
        }
    }

    return(
        <tr>
            <td>
                <DropDown.Products required value={productID} onChange={(e) => setProductID(e.target.value)} />
            </td>
            <td>
                <Form.Control type='number' required value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </td>
            <td>
                <button disabled={sending} onClick={() => addNewTaskProduct()}><MdAddCircle/></button>
            </td>
        </tr>
    )

}