import React, { useEffect, useState } from "react";
import LookupAPIs from "../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import './StageSelectionTabs.css';


export default function StageSelectionTabs({value, setStageValue}){

    const [stageData, setStageData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currStage, setCurrStage] = useState(value);


    const getStageData = () => {
        LookupAPIs.GetStage()
        .then((response) => {
            setStageData(response.data)
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleClick = (value) => {
        setStageValue(value);
        setCurrStage(value);
    }
    useEffect(() => {
        getStageData()
    }, []);

    return(
        <div className="stage-selection-container">
                <div className="body">

                    <div
                        onClick={() => handleClick('')}
                        className={currStage === '' ? 'selected' : ''}
                    >
                        <strong>
                            {
                            loading ?  'Loading...' 
                            : 
                            stageData.length > 0 ? 'All Stages' : 'No Stages'}</strong>
                    </div>
                    
                    {
                        stageData.map((stage) =>{
                            return(
                                <div 
                                    key={stage.id} 
                                    onClick={() => handleClick(stage.id)}
                                    className={stage.id === currStage ? 'selected' : ''}
                                >
                                    <strong>{stage.name}</strong>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )

}