import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { Form } from "react-bootstrap";
import { MdAddCircle } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

export default function CreateProduct({handleAddNew}){

    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');

    const addNewTaskProduct = () => {

        setSending(true);
        const postJSON = {
            name: productName,
            price: price
        }
        if(productName !=='' && price !== ''){
            MaintenanceAPIs.PostProduct(postJSON)
            .then((response) => {
                if(response.status === 200){
                    handleAddNew();
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

    return(
        <tr>
            <td>
                <Form.Control value={productName} onChange={(e) => setProductName(e.target.value)} />
            </td>
            <td>
                <Form.Control type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
            </td>
            <td>
                <button disabled={sending} onClick={() => addNewTaskProduct()}><MdAddCircle/></button>
            </td>
        </tr>
    )

}