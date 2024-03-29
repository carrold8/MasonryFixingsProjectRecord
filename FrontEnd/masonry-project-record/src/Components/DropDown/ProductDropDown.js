import React, { useEffect, useState } from 'react';
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ProductDropDown(props){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState();


    const getProductData = () => {
        LookupAPIs.GetProducts()
        .then((response) => {
            if(response.status === 200){
                setProductData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
            }
        })
    }

    useEffect(() => {
        getProductData();
    }, []);

    if(loading){
        return(
            <Form.Select
            className={props.className}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            size={props.size}
            required={props.required}
            disabled={props.disabled}
        ><option>Loading...</option></Form.Select>
        )
    }
    else{
        return(
            <Form.Select
                className={props.className}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                size={props.size}
                required={props.required}
                disabled={props.disabled}
            >
                <option value={''}>Product</option>
                {productData.map((product) => {
                    return(
                        <option key={product.id} value={product.id}>{product.name}</option>
                    )
                })}
            </Form.Select>
        )
    }

}