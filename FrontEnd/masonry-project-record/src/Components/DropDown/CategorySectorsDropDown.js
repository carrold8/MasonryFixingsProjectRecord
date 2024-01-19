import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';
import { useNavigate } from 'react-router-dom';

export default function CategorySectorsDropDown(props){

    const navigate = useNavigate();
    const [sectorData, setSectorData] = useState([]);
    
    const getSectorData = (catID) => {
        LookupAPIs.GetCategorySectors(catID)
        .then((sectors) => {
            setSectorData(sectors.data);
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
        if(props.categoryID !== ''){
            getSectorData(props.categoryID);
        }
        
    }, [props.categoryID]);

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
            <option value={''}>Sector</option>
            {sectorData.map((sector) => {
                return(
                    <option key={sector.id} value={sector.id}>{sector.name}</option>
                )
            })}
        </Form.Select>
    )
}
