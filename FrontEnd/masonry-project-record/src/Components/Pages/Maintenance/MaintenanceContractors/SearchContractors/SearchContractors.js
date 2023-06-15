import React from "react";
import ContractorsTable from "./ContractorsTable/ContractorsTable";
import FilterContractors from "./FilterContractors/FilterContractors";

function SearchContractors(){

    return(
        
        <div style={{margin: '2%', padding: '1%', border: '1px solid orange', boxShadow: '2px 3px 4px orange'}}>
            <div>
                <FilterContractors />
            </div>
            <div>
            <ContractorsTable />
            </div>
            
            

        </div>
    )

}
export default SearchContractors;