import React, { useEffect, useState } from "react";
import './ViewProjectAnchorTraining.css';

export default function ViewProjectAnchorTraining({projectInfo}){


    const [loading, setLoading] = useState(true);
    const [anchorTrainingData, setAnchorTrainingData] = useState([]);

    useEffect(() => {
        setLoading(false);
        setAnchorTrainingData(['1', '2']);
    }, [])

    if(loading){
        return(<div>Loading...</div>)
    }
    else{
        return(
            <div className="view-project-anchor-training">
                <h3>Anchor Training</h3>

                {anchorTrainingData.length === 0 ? 
                    <div>No Anchor Training Provided Yet</div>
                    :
                    <div>
                        {anchorTrainingData.map((training, index) => {
                            return(
                                <div key={index}>Anchor Training Item</div>
                            )
                        })}
                    </div>
                }
                
            </div>
        )
        
    }
    
}