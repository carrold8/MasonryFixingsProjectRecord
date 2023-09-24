import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function CategoryDropDown(props){

    const [categoryData, setCategoryData] = useState([]);
    
    const getCategoryData = () => {
        axios.get('http://localhost:8080/lookup/category')
        .then((categories) => {
            setCategoryData(categories.data)
        })
        .catch((err) => {
            console.log(err);
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
