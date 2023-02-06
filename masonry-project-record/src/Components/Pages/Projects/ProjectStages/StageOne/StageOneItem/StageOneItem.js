import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function StageOneItem({title, setArray}){

    const [showForm, setShowForm] = useState(false);


    const [timeline, setTimeline] = useState("");
    const [company, setCompany] = useState("");

 
    

    return(
        <div>
            <Card>
                <Card.Header onClick={() => setShowForm(!showForm)}>{title}</Card.Header>
                <Card.Body>
                    {showForm ? 
                        <div> 
                            <h1>showing the form</h1>
                            <h2> Checking for bigger things </h2>
                        </div>
                     : <p></p>}
                    <Button onClick={() => setArray("")}>Save</Button>
                </Card.Body>
            </Card>
            
        </div>
    )

}
export default StageOneItem;