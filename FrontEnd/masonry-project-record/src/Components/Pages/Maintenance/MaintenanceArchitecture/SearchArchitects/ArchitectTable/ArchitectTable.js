import React from "react";
import { useNavigate } from "react-router-dom";

function ArchitectTable(){

    const navigate = useNavigate();
    return(
        <div onClick={() => navigate('view-architect')}>
            ArchitectTable
        </div>
    )
}
export default ArchitectTable;