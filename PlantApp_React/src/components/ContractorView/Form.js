import React, { useState, useContext } from "react";
import {StockContext} from "../../StockContext"
import Button from '@mui/material/Button';

function Form(props) {
    const [inputs, setFormInput] = useState('');
    const [stocks, setStock] = useContext(StockContext);

    function handleChange(e) {
        const name = (e.target.name);
        const value = (e.target.value);
        setFormInput (values=>({...values,[name]:value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addInvoice(inputs);
    }

   return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label>
          Start a new Invoice
        </label>
      </h2>
      <label>
        Block Name
      </label>&nbsp;
      <input
        type="text"
        id="block-input"
        className="block-input"
        name="blockName"
        autoComplete="off"
        value={inputs.blockName}
        onChange={handleChange}
      />
      <br />
      <label>
        Total Planted
      </label>&nbsp;
      <input
        type="number"
        id="planted-input"
        className="planted-input"
        name="planted"
        autoComplete="off"
        value={inputs.planted}
        onChange={handleChange}
      />
      <br />
      <br />
      <label>
        Stock Type
      </label>&nbsp;
      <select id="species-input"
        className="species-input"
        name="species"
        value={inputs.species}
        onChange={handleChange}>
        {stocks.map(stock=>(
          <option value={stock.species} key={stock.id}>{stock.species}</option>
        ))}</select>
      <br />
      <label>
        Tree Rate (cents/tree)
      </label>&nbsp;
      <input
        type="number"
        id="rate-input"
        className="rate-input"
        name="rate"
        autoComplete="off"
        value={inputs.rate}
        onChange={handleChange}
      />  
      <br />
      <button type="submit" className="draft" variant="contained">
        Draft Invoice
      </button>
      <br />
      <br />
    </form>
    );
}

export default Form;