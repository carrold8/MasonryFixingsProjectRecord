import React, { useState }  from "react";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";

export default function ViewProduct({product, getProductData}){

    const [editing, setEditing] = useState(false);
    const [productName, setProductName] = useState(product.name);
    const [price, setPrice] = useState(product.price);

    const editProduct = () => {

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
                }
            })
            .catch((err) => {
                console.log(err);
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
                    <span onClick={() => handleCancel()}><MdCancel/></span>
                </td>
                <td>
                    <span onClick={() => editProduct()}><FaSave/></span>
                </td>
            </tr>
        )
    }
    return(
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span onClick={() => setEditing(true)}><AiFillEdit/></span>
            </td>
        </tr>
    )

}