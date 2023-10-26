import React, { useEffect, useState } from "react";
import axios from 'axios';
import CreatePartitioningMaterial from "./CreatePartitioningMaterial";

export default function PartitioningMaterialMaintenance(){

    const [materialData, setMaterialData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addMat, setAddMat] = useState(false);

    const getMaterialData = () => {

        axios.get('http://localhost:8080/lookup/partitioning-material')
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
            <div>Loading Partitioning Materials...</div>
        )
    }
    else{
        return(
            <div>
                <h5>Partitioning Material:</h5>
                <span onClick={() => setAddMat(!addMat)}>Add</span>

                {materialData.length === 0 ? 
                    <div>No Partitioning Materials</div>
                    :
                    materialData.map((material) => {
                        return(
                            <div key={material.id}>{material.name}</div>
                        )
                    })
                }


                {addMat && <CreatePartitioningMaterial handleAddNew={handleAddMaterial} />}
            </div>
        )
    }

}
