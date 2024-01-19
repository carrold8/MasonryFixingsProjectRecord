import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { useNavigate } from 'react-router-dom';

export default function CategoryDropDown(props){

    const navigate = useNavigate();
    const [categoryData, setCategoryData] = useState([]);
    
    const getCategoryData = () => {
        LookupAPIs.GetCategory()
        .then((categories) => {
            setCategoryData(categories.data)
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
        getCategoryData()
    }, []);

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
            <option value={''}>Category</option>
            {categoryData.map((category) => {
                return(
                    <option key={category.id} value={category.id}>{category.name}</option>
                )
            })}
        </Form.Select>
    )
}
