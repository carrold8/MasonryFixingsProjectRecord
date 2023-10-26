import React, { useEffect, useState } from "react";
import axios from 'axios';
import CreateSector from "./CreateSector";

export default function SectorMaintenance({categoryID}){

    const [sectorData, setSectorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addNew, setAddNew] = useState(false);

    const getSectorData = () => {

        axios.get('http://localhost:8080/lookup/sector')
        .then((response) => {
            if(response.status === 200){
                setSectorData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getSectorData();
    }

    useEffect(() => {
        getSectorData();
    }, []);

    if(loading){
        return(
            <div>Loading Sector Data...</div>
        )
    }
    else{
        return(
            <div>
                <h5>Sector:</h5>
                <span onClick={() => setAddNew(!addNew)}>Add</span>

                {sectorData.filter((data) => {return data.id === parseInt(categoryID)}).length === 0 ? 
                    <div>No Sectors</div>
                    :
                    sectorData.filter((data) => {return data.category_id === parseInt(categoryID)})
                    .map((sector) => {
                        return(
                            <div key={sector.id}>{sector.name}</div>
                        )
                    })
                }


                {addNew && <CreateSector handleAddNew={handleAddNew} categoryID={categoryID} />}
            </div>
        )
    }

}
