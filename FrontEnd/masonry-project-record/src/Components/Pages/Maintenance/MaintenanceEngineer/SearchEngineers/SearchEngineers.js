import React from "react";
import FilterEngineers from "./FilterEngineers/FilterEngineers";
import EngineersTable from "./EngineersTable/EngineersTable";

function SearchEngineers(){


    return(
        <div>
            <FilterEngineers />
            <EngineersTable />
        </div>
    );

}
export default SearchEngineers;