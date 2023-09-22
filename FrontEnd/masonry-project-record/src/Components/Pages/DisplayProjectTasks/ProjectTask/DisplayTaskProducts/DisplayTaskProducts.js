import React from "react";
import TaskProduct from "../TaskProduct/TaskProduct";

export default function DisplayTaskProducts({taskID}){


    //use taskID to get all the ProjectTaskProducts associated with it

    const fakeProducts = [
        {id: 1},
        {id: 2},
        {id: 3},
    ]

    return(
        <div>
            {fakeProducts.map((product) => {
                return(
                    <TaskProduct key={product.id} taskProductID={product.id} />
                )
            }) }
        </div>
    )

}