import React from "react";
import './TaskProduct.css' 

export default function TaskProduct({taskProduct}){

    //Use product Id to get the info related to the ProjectTaskProduct

    return(
        <div className="task-product-container">
        <div className="task-product-line"> 
            <div>{taskProduct.product.name}</div>
            <div>{taskProduct.quantity}</div>
            <div>{taskProduct.project_task.approx_val}</div>
        </div>
        </div>
    )



}
