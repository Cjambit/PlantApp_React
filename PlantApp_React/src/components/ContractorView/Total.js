import React, {useEffect, useState} from 'react';

function Total(props){
    const rateInt= parseInt(props.rate);
    const plantedInt= parseInt(props.planted);
    const dollarDue= rateInt*.01*plantedInt;
    const dollarDueRounded= dollarDue.toFixed(2);
   
    return(
        <div>
            <h3 className="red">Amount Due in CAD: ${dollarDueRounded}</h3>
        </div>
    ); 
}

export default Total;