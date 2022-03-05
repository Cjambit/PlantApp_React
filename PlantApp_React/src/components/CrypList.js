import React from 'react';

const CrypList = (props) => {
  const cur = parseFloat(props.cur);
  const time = props.time;
  const eth = parseFloat(props.eth);
  const rate = parseInt(props.rate);
  const planted = parseInt(props.planted);
  const exchangeB = 1/cur;
  const exchangeE = 1/eth;
  const btcDue = (.01*rate)*planted*exchangeB;
  const ethDue = (.01*rate)*planted*exchangeE;
  //toFixed(2);
//if (!cur || cur.length === 0) return <p className="red-alert">Currency data not currently available.</p>;
  
return (
    <div className="blockchain-price-list">
      <h3>Current Bitcoin Rate in CAD:  ${cur.toFixed(2)}</h3>
      <h3>Amount Due in BTC:  {btcDue}</h3>
      <h3>Current Ether Rate in CAD:  ${eth.toFixed(2)}</h3>
      <h3>Amount Due in ETH:  {ethDue}</h3>
      <h4>Time of price quotes: {time}</h4>
      {/* only refreshing when page is loaded */}
    </div>
  );
};
export default CrypList;