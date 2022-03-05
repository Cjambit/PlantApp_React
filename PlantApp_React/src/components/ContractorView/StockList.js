import React, {useState, useContext} from "react";
import Stock from "./Stock";
import {StockContext} from "../../StockContext"

const StockList = () => {
    const [stocks, setStock] = useContext(StockContext);
    return(
        
        <div className="stockSelection">
            <h2>Legend of Available Stocks:</h2>
            {stocks.map(stock=>(
            <Stock species={stock.species} reqKey={stock.reqKey} key={stock.id} contract={stock.contract}/>
        ))}</div>
    );
}

export default StockList;