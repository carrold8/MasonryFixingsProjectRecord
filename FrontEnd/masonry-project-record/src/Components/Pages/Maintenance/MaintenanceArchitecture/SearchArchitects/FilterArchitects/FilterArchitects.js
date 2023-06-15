import React from "react";
import { Form } from "react-bootstrap";

function FilterArchitects(){

    return(
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: '15%', marginRight: '5%'}}>
                <Form.Control
                    placeholder="Search Name"
                />
            </div>
            <div style={{width: '15%', marginRight: '5%'}}>
            <Form.Control
                    placeholder="Search City"
                />
            </div>
            <div style={{width: '15%', marginRight: '5%'}}>
                <Form.Select>
                    <option value={0}>Head Office</option>
                    <option value={1}>Blanch</option>
                    <option value={2}>Middleton</option>
                </Form.Select>
            </div>
        </div>
    )
}
export default FilterArchitects;