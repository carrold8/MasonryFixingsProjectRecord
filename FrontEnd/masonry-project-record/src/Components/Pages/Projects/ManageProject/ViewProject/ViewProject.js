import React from "react";
import DisplayProjectTasks from "../../../DisplayProjectTasks/DisplayProjectTasks";

export default function ViewProject(){


    return(
        <div>

            <h3>Project Info</h3>
            <div>Name:</div>
            <div>CIS ID:</div>
            <div>Category</div>
            <div>Sector</div>

            <h3>Induction</h3>
            <div>Basic Induction stuff</div>
            <div>Table of staff that have completed it</div>


            <h3>Building Description</h3>
            <div>Long text box</div>

            <h3>More details</h3>
            <div>Footprint etc </div>
            <div>Materials</div>

            <h3>Companies</h3>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                <div>
                    <h5>Contractor</h5>
                    <div>Company</div>
                    <div>Person</div>
                </div>

                <div>
                    <h5>Engineer</h5>
                    <div>Company</div>
                    <div>Person</div>
                </div>

                <div>
                    <h5>Architect</h5>
                    <div>Company</div>
                    <div>Person</div>
                </div>
            </div>

            <h3>Anchor Training</h3>
            <div>Table of what has and has not been completed</div>

            <h3>Tasks</h3>
            <DisplayProjectTasks projectID={1} />

            <h3>Calendar</h3>
            <div>Calendar based off times of the tasks</div>
        </div>
    )

}