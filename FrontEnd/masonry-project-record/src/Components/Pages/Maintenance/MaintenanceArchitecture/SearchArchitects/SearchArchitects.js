import React from "react";
import ArchitectTable from "./ArchitectTable/ArchitectTable";
import FilterArchitects from "./FilterArchitects/FilterArchitects";

function SearchArchitects(){


    return(
        <div style={{margin: '2%', padding: '1%', border: '1px solid rgb(3, 162, 3)', boxShadow: '2px 3px 4px rgb(3, 162, 3)'}}>
        
            <div>
            <   FilterArchitects />
            </div>
            <div style={{marginTop: '2%'}}>
                <ArchitectTable />
            </div>
        </div>
    )
}
export default SearchArchitects;