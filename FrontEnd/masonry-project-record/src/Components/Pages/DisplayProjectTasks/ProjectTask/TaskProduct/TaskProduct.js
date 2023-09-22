import React from "react";

export default function TaskProduct({taskProductID}){

    //Use product Id to get the info related to the ProjectTaskProduct

    const fakeProduct = {
        name: 'Product ' + taskProductID,
        quantity: taskProductID,
        approxVal: 5,
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
            <div>{fakeProduct.name}</div>|
            <div>{fakeProduct.quantity}</div>|
            <div>{fakeProduct.approxVal}</div>|
        </div>
    )



}
