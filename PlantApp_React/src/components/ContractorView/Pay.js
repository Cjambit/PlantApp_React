import React, { useEffect, useRef, useState } from "react";
import Crypto from "../Crypto";
import Total from "./Total";


function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
export default function Pay(props) {
    const [isEditing, setEditing] = useState(false);
    const [newInputs, setNewInputs] = useState('');
    const [due, setDue] = useState(false);
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);
    const wasEditing = usePrevious(isEditing);

    function handleChange(e) {
        const name = (e.target.name);
        const value = (e.target.value);
        setNewInputs(values=>({...values,[name]:value}));
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.editInvoice(props.id, newInputs.name, newInputs.planted);
        setNewInputs("");
        setEditing(false);
    }
    const editingTemplate = ( 
        <form className = "pay-form" onSubmit = { handleSubmit } >
            <div className = "pay-card" >
                <label className = "pay-label" htmlFor = { props.id } >
                    New name for { props.name } 
                </label> 
                <input 
                type = "text" 
                id = { props.id } 
                className = "pay-text" 
                name = "name"
                value = { newInputs.name } 
                onChange = { handleChange } 
                ref = { editFieldRef }/> 
                <label className = "pay-label" htmlFor = { props.id } >
                    New total Planted 
                </label> 
                <input 
                id = { props.id } 
                className = "pay-text" 
                type = "text" 
                value = { newInputs.planted } 
                onChange = { handleChange } 
                ref = { editFieldRef }/> 
                
                </div> 
                <div className = "btn" >
                <button type = "button" className = "btn pay-cancel" onClick = {() => setEditing(false) }>
                    Cancel 
                <span className = "hide" > editing { props.name } </span> 
                </button> 
                <button type = "submit" className = "btn btn__primary pay-edit" >Save <span className = "hide" > edited info for { props.name } </span> 
                </button>  
            </div> 
        </form>
    );
    const viewTemplate = ( 
        <div className = "card">
            <div className = { `c-cb ${due ? 'due' : ''}` } >
                <h2>{props.name}&nbsp;Invoice</h2>
                <h4>Tree Rate:&nbsp;{props.rate}cents/tree</h4>
                <h4>Total Planted:&nbsp;{props.planted} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stock Planted: {props.species}</h4>
                <h3>Payment Options:</h3>
                <Total rate={props.rate} planted={props.planted}/>
                <Crypto rate={props.rate} planted={props.planted}/>
                
                <button type = "button" className = "submit-Invoice" onClick = {() => props.toggleInvoiceSubmitted(props.id) } >
                    Submit Invoice
                </button>
                <br />
                </div> 
                <div className = "btns" >
                <button type = "button" className = "edit-btn" onClick = {() => setEditing(true) } ref = { editButtonRef } >
                Edit 
                <span className = "hide" > { props.name } </span> 
                </button> 
                <button type = "button" className = "delete-btn"  onClick = {() => props.deleteInvoice(props.id) } >
                Mark as paid and remove 
                <span className = "hide" > { props.name } </span> 
                </button> 
                {/* <button type = "button" className = "mark-due-btn" onClick = {() => setDue(!due) } > Invoice Due </button>  */}
            </div> 
        </div>
    );
    useEffect(() => {
        if (!wasEditing && isEditing) {
            editFieldRef.current.focus();
        }
        if (wasEditing && !isEditing) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);
    return <li className = "pay" > { isEditing ? editingTemplate : viewTemplate } </li>;
}