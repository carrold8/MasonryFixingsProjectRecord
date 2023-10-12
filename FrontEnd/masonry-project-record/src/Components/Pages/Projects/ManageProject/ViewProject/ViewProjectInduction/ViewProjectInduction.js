import React from "react";
import './ViewProjectInduction.css';
import ViewInductionTable from "./ViewInductionTable/ViewInductionTable";

export default function ViewProjectInduction({projectInfo}){



    return(
        <div className="view-project-induction-container">
            <h3>Induction</h3>
            <div>
                <strong>Required:</strong>
                <span><input type="checkbox" checked={projectInfo.induction_required} disabled={true} /></span>
            </div>
            <div><strong>Provided On:</strong> {projectInfo.induction_provided}</div>

            <ViewInductionTable projectID={projectInfo.id} />


        </div>
    )
}