import React from "react";
import FilterEngineers from "./FilterEngineers/FilterEngineers";
import EngineersTable from "./EngineersTable/EngineersTable";

function SearchEngineers(){


    return(
        <div style={{margin: '2%', padding: '1%', border: '1px solid blue', boxShadow: '2px 3px 4px blue'}}>
            
            <div>
                <FilterEngineers />
            </div>
            <div style={{marginTop: '2%'}}>
                <EngineersTable />
            </div>
        </div>
    );

}
export default SearchEngineers;