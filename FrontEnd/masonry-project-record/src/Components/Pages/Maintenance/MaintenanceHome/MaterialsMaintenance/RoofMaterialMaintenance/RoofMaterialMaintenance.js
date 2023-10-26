import React, { useEffect, useState } from "react";
import axios from 'axios';
import CreateRoofMaterial from "./CreateRoofMaterial";

export default function RoofMaterialMaintenance(){

    const [materialData, setMaterialData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addMat, setAddMat] = useState(false);

    const getMaterialData = () => {

        axios.get('http://localhost:8080/lookup/roof-material')
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
            <div>Loading Roof Materials...</div>
        )
    }
    else{
        return(
            <div>
                <h5>Roof Material:</h5>
                <span onClick={() => setAddMat(!addMat)}>Add</span>

                {materialData.length === 0 ? 
                    <div>No Roof Materials</div>
                    :
                    materialData.map((material) => {
                        return(
                            <div key={material.id}>{material.name}</div>
                        )
                    })
                }


                {addMat && <CreateRoofMaterial handleAddNew={handleAddMaterial} />}
            </div>
        )
    }

}
