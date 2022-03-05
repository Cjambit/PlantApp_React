import React, { useState, useRef, useEffect, useContext} from "react";//component = router
import Form from "./Form";
import FilterButton from "./FilterButton";
import StockList from "./StockList";
import Pay from "./Pay";
import { nanoid } from "nanoid";
import {StockContext} from "../../StockContext"

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
 
const FILTER_MAP = {
    All: () => true,
    Active: invoice => !invoice.submitted,
    Submitted: invoice => invoice.submitted
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function InvoiceForm(props) {
    const [stocks, setStock] = useContext(StockContext);
    const [invoices, setInvoices] = useState([]);
    const [filter, setFilter] = useState('All'); //hook to read and set new filter

    useEffect(() => {
        //gets the list of invoices from localStorage and updates the state(setInvoices)
        const data = localStorage.getItem('list');
        if (data) {
            setInvoices(JSON.parse(data));
        }
    }, []);

    //local storage to persist state. 
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(invoices));
    }, [invoices])

    function addInvoice(inputs) {
        const newInvoice = { id: "pay-" + nanoid(), name: inputs.blockName, planted: inputs.planted, species: inputs.species, rate: inputs.rate, submitted: false };
        setInvoices([...invoices, newInvoice]);
    }
    function deleteInvoice(id) {
        const remainingInvoices = invoices.filter(invoice => id !== invoice.id);
        setInvoices(remainingInvoices);
    }
    function clearInvoices() {
        localStorage.clear();
        setInvoices([]);
    }
    function editInvoice(id, newName, newPlanted, newRate) {
        const editedInvoiceList = invoices.map(invoice => {
            if (id === invoice.id) {
                return {...invoice, name: newName, planted: newPlanted, rate: newRate}
            }
            return invoice;
        });
        setInvoices(editedInvoiceList);
    }
    function toggleInvoiceSubmitted(id) {
        const updatedInvoices = invoices.map(invoice => {
            if (id === invoice.id) {
                return {...invoice, submitted: !invoice.submitted }
            }
            return invoice;
        });
        setInvoices(updatedInvoices);
    }

    const invoiceList = invoices.filter(FILTER_MAP[filter]).map(invoice => ( <
        Pay id = { invoice.id }
        name = { invoice.name }
        planted = {invoice.planted}
        species ={invoice.species}
        rate = {invoice.rate}
        submitted = { invoice.submitted }
        key = { invoice.id }
        toggleInvoiceSubmitted = { toggleInvoiceSubmitted }
        deleteInvoice = { deleteInvoice }
        editInvoice = { editInvoice }
        />
    ));
    const filterList = FILTER_NAMES.map(name => ( <
        FilterButton key = { name }
        name = { name }
        isPressed = { name === filter }
        setFilter = { setFilter }
        />
    ));

    const invoicesNoun = invoiceList.length !== 1 ? 'invoices' : 'invoice';
    const headingText = `${invoiceList.length} ${invoicesNoun} remaining`;
    const listHeadingRef = useRef(null);
    const prevInvoiceLength = usePrevious(invoices.length);
    useEffect(() => {
        if (invoices.length - prevInvoiceLength === -1) {
            listHeadingRef.current.focus();
        }
    }, [invoices.length, prevInvoiceLength]);
    return (
        <main>
            <div className="invoice-form">
         
            <h1>BlockPay</h1>
            
            <Form addInvoice={addInvoice} />
            <div >
                {filterList}
                <button type = "button" className = "btn" onClick = {() => clearInvoices() } > Clear All Invoices </button>
            </div>
            <h2 id="invoice-heading" tabIndex="-1" ref={listHeadingRef}>{headingText}</h2>
            <ul
                role="list"
                className="pay-list"
            >
                {invoiceList}
            </ul>
            <StockList />
            </div>
        </main>
      );
}

export default InvoiceForm;