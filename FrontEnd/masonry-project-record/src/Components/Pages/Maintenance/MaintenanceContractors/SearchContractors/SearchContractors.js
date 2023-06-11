import React from "react";
import ContractorsTable from "./ContractorsTable/ContractorsTable";
import FilterContractors from "./FilterContractors/FilterContractors";

function SearchContractors(){

    return(
        
        <div>
            <FilterContractors />
            <ContractorsTable />

        </div>
    )

}
export default SearchContractors;