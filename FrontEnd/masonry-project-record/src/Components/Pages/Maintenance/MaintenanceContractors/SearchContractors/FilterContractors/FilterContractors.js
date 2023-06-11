import React from "react";
import { Form } from "react-bootstrap";

function FilterContractors(){


    return(
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
                <Form.Select>
                    <option value={0}>Head Office</option>
                    <option value={1}>Blanch</option>
                    <option value={2}>Middleton</option>
                </Form.Select>
            </div>
        </div>
    )

}
export default FilterContractors;