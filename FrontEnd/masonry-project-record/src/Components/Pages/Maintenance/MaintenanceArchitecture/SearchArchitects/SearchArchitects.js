import React from "react";
import ArchitectTable from "./ArchitectTable/ArchitectTable";
import FilterArchitects from "./FilterArchitects/FilterArchitects";

function SearchArchitects(){


    return(
        <div>
            Search Architects 
            <FilterArchitects />
            <ArchitectTable />
        </div>
    )
}
export default SearchArchitects;