import React from "react";
import { Form } from "react-bootstrap";

function FilterEngineers(){

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div>
                <Form.Control
                    placeholder="Search Name"
                />
            </div>
            <div>
                <Form.Control
                    placeholder="Search City"
                />
            </div>
            <div>
                <Form.Control
                    placeholder="Search County"
                />
            </div>
        </div>
    )
}
export default FilterEngineers;