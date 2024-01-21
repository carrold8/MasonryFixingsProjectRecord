import React, { useState }  from "react";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ViewProduct({product, getProductData}){

    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);
    const [productName, setProductName] = useState(product.name);
    const [price, setPrice] = useState(product.price);

    const editProduct = () => {
        setSending(true);
        const putJSON = {
            name: productName,
            price: price
        }

        if(productName !== '' && price !== ''){

            MaintenanceAPIs.PutProduct(product.id, putJSON)
            .then((response) => {
                if(response.status === 200){
                    getProductData();
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
    }


    const handleCancel = () => {
        setEditing(false);
        setProductName(product.name);
        setPrice(product.price);
    }

    if(editing){
        return(
            <tr>
                <td>
                    <input value={productName} onChange={(e) => setProductName(e.target.value)}/>
                </td>
                <td>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </td>
                <td>
                    <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                </td>
                <td>
                    <button disabled={sending} onClick={() => editProduct()}><FaSave/></button>
                </td>
            </tr>
        )
    }
    return(
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <button onClick={() => setEditing(true)}><AiFillEdit/></button>
            </td>
        </tr>
    )

}