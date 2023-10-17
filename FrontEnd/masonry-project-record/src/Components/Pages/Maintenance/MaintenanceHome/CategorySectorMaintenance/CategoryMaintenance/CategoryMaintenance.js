import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateCategory from "./CreateCategory/CreateCategory";

export default function CategoryMaintenance(){

    const [categoryData, setCategoryData] = useState([]);
    const [addNew, setAddNew] = useState(false);

    const getCategoryData = () => {
        axios.get('http://localhost:8080/lookup/category')
        .then((response) => {
            if(response.status === 200){
                setCategoryData(response.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleAddNew = () => {
        setAddNew(false);
        getCategoryData();
    }
    
    useEffect(() => {
        getCategoryData();
    }, []);

    return(
        <div>
            <h5>Categories</h5>
            <span onClick={() => setAddNew(!addNew)}>Add</span>
            {categoryData.map((category) => {
                return(
                    <div key={category.id}>{category.name}</div>
                )
            })}

            {addNew && <CreateCategory handleAddNew={handleAddNew} />}
        </div>
    )
}