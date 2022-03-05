import React, {useEffect, useState} from 'react';
import CrypList from './CrypList';
import CrypLoading from './CrypLoading';
import axios from 'axios';

function Crypto(props){
    const ListLoading = CrypLoading(CrypList);
    const[cryptoState, setCryptoState]=useState({
        loading: false,
        cur: null,
    }
    );
    const[timeState, setTimeState]=useState({
        loading: false,
        time: null,
    }
    );
    const[ethState, setEthState]=useState({
        loading: false,
        eth: null,
    }
    );
    //Retrive bitcoin spot price in CAD from coinbase using fetch
    useEffect(()=>{
        setCryptoState({loading: true});//going to load data from external api 
        const apiUrl = 'https://api.coinbase.com/v2/prices/BTC-CAD/spot';
        fetch(apiUrl)
            .then((res)=> res.json()) //returns a promise converted to .json
            .then((cur)=> {
                setCryptoState({loading:false, cur: cur.data.amount});
            });
    },[setCryptoState]);
    //axios retrieve bitcoin spt price in CAD from coinbase 
    // useEffect( () => {
    // async function fetchData() {
    //     setCryptoState({ loading: true });
    //     //make a get request
    //     const apiUrl = 'https://api.coinbase.com/v2/prices/BTC-CAD/spot';
    //     const response = await axios.get(apiUrl);
    //     setCryptoState({ loading: false, cur: response.data.amount})
    //   }
    //   fetchData();
    // }, [setCryptoState])
    //using Axios
    // useEffect(()=>{
    //     setCryptoState({loading: true});//going to load data from external api 
    //     const apiUrl = 'https://api.coinbase.com/v2/prices/spot?currency=CAD';
    //     axios.get(apiUrl).then((cur)=>{
    //         setCryptoState({loading:false, cur: (cur.data)});
    //     });
    // },[setCryptoState]);
         
    //Retrieve a time stamp associated with price estimate from coinbase
    useEffect(()=>{
        setTimeState({loading: true});//going to load data from external api 
        const apiUrlTime = 'https://api.coinbase.com/v2/time';
        fetch(apiUrlTime)
            .then((res)=> res.json()) //returns a promise converted to .json
            .then((time)=> {
                setTimeState({loading:false, time: time.data.iso});
            });
    },[setTimeState]);
    ///https://api.coinbase.com/v2/prices/ETH-CAD/spot retrieve ETH spot price in CAD
    useEffect(()=>{
        setEthState({loading: true});//going to load data from external api 
        const apiUrlEth = 'https://api.coinbase.com/v2/prices/ETH-CAD/spot';
        fetch(apiUrlEth)
            .then((res)=> res.json()) //returns a promise converted to .json
            .then((eth)=> {
                setEthState({loading:false, eth: eth.data.amount});
            });
    },[setEthState]);
    return(
        <div>
            <ListLoading isLoading={cryptoState.loading} cur={cryptoState.cur} time={timeState.time} eth={ethState.eth} rate={props.rate} planted={props.planted}/>
        </div>
    ); 
}

export default Crypto;