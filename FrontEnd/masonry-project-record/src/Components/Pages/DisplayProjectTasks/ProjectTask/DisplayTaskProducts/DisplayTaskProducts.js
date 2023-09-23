import React, { useEffect, useState } from "react";
import TaskProduct from "../TaskProduct/TaskProduct";
import axios from "axios";

export default function DisplayTaskProducts({taskID}){


    //use taskID to get all the ProjectTaskProducts associated with it

    const [taskProducts, setTaskProducts] = useState([])
    const getTaskProducts = (taskID) => {
        axios.get('http://localhost:8080/project-task/'+taskID+'/products')
        .then((products) => {
            setTaskProducts(products.data);
            console.log(products.data);
        })
    }

    useEffect(() => {
        getTaskProducts(taskID);
    }, [taskID])


    return(
        <div>
            {taskProducts.map((product) => {
                return(
                    <TaskProduct key={product.id} taskProduct={product} />
                )
            }) }
        </div>
    )

}