import React, {useState} from "react";

const Stock = ({species,reqKey,contract}) => {
    
    return(
        <div>
            <h3>{species}&nbsp;{reqKey}&nbsp;Contract: {contract}</h3>
        </div>
    );
}

export default Stock;