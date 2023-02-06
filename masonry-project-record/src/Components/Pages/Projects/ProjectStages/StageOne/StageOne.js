import React, { useState } from "react";
import StageOneItem from "./StageOneItem/StageOneItem";

function StageOne(){

    const [hoarding, setHoarding] = useState("");
    const [scaffolding, setScaffolding] = useState("");


    return(
        <div>
            <StageOneItem title={'Hoarding'} setArray={setHoarding} />
            <StageOneItem title={'Scaffolding'} setArray={setScaffolding} />
        </div>
    );


}
export default StageOne;