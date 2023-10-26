import React, { useEffect, useState } from "react";
import axios from 'axios';
import CreateFloorMaterial from "./CreateFloorMaterial";

export default function FloorMaterialMaintenance(){

    const [materialData, setMaterialData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addMat, setAddMat] = useState(false);

    const getMaterialData = () => {

        axios.get('http://localhost:8080/lookup/floor-material')
        .then((response) => {
            if(response.status === 200){
                setMaterialData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleAddMaterial = () => {
        setAddMat(false);
        getMaterialData();
    }

    useEffect(() => {
        getMaterialData();
    }, []);

    if(loading){
        return(
            <div>Loading Floor Materials...</div>
        )
    }
    else{
        return(
            <div>
                <h5>Floor Material:</h5>
                <span onClick={() => setAddMat(!addMat)}>Add</span>

                {materialData.length === 0 ? 
                    <div>No Floor Materials</div>
                    :
                    materialData.map((material) => {
                        return(
                            <div key={material.id}>{material.name}</div>
                        )
                    })
                }


                {addMat && <CreateFloorMaterial handleAddNew={handleAddMaterial} />}
            </div>
        )
    }

}
