import React, {useState, createContext} from "react";
//create context 
export const StockContext = createContext();

export const StockProvider=(props)=>{
    const [stocks, setStock] = useState([
        {
            id: 1,
            species: 'pli',
            reqKey: 'DM045',
            contract: 'FSJ',
            bundle: '20'
        },
        {
            id: 2,
            species: 'Sx',
            reqKey: 'DMK023',
            contract: 'Williams Lake',
            bundle: '15'
        },
        {
            id: 3,
            species: 'Fdi',
            reqKey: 'JK045',
            contract: 'Quesnel',
            bundle: '10'
        },
    ]);

    //{props.children} renders all child components
    return(
        <StockContext.Provider value={[stocks, setStock]}>
            {props.children}
        </StockContext.Provider>
    );
}

    