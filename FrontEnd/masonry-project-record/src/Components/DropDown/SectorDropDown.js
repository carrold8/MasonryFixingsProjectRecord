import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import LookupAPIs from '../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs';

export default function SectorDropDown(props){

    const [sectorData, setSectorData] = useState([]);
    
    const getSectorData = () => {
        LookupAPIs.GetSector()
        .then((sectors) => {
            setSectorData(sectors.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getSectorData()
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
            <option value={''}>Sector</option>
            {sectorData.map((sector) => {
                return(
                    <option key={sector.id} value={sector.id}>{sector.name}</option>
                )
            })}
        </Form.Select>
    )
}
