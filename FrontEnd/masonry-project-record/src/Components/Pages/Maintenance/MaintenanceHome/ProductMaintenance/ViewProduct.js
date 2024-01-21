import React, { useState }  from "react";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel, MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ApiResponseHandler from "../../../../../MasonyFixingsAPIs/ApiResponseHandler";

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
                setSending(false);
                ApiResponseHandler(err.response, navigate);
            })
        }
    }

    const deleteProduct = () => {
        setSending(true);
        MaintenanceAPIs.DeleteProduct(product.id)
        .then((response) => {
            if(response.status === 200){
                getProductData();
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
        
    }

    const handleCancel = () => {
        setEditing(false);
        setProductName(product.name);
        setPrice(product.price);
    }

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to permanently ' + product.name + ' from products?')){
            deleteProduct();
        }
    }

    if(editing){
        return(
            <tr>
                <td width={'50%'}>
                    <input value={productName} onChange={(e) => setProductName(e.target.value)}/>
                </td>
                <td width={'20%'}>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </td>
                <td width={'15%'}>
                    <button disabled={sending} onClick={() => editProduct()}><FaSave/></button>
                </td>
                <td width={'15%'}>
                    <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                </td>
            </tr>
        )
    }
    return(
        <tr>
            <td width={'50%'}>{product.name}</td>
            <td width={'20%'}>{product.price}</td>
            <td width={'15%'}>
                <button disabled={sending} onClick={() => handleDelete()}><MdDelete/></button>
            </td>
            <td width={'15%'}>
                <button disabled={sending} onClick={() => setEditing(true)}><AiFillEdit/></button>
            </td>
        </tr>
    )

}