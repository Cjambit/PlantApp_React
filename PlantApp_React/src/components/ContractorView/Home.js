import React, { useEffect } from "react";
import InvoiceForm from "./InvoiceForm";
import '../../App.css'; 

function ContractorHome() {
      
    return (
        <main>
            <div className="home">
                <h1>Contractor Home:</h1>
                <InvoiceForm />
            </div>
        </main>
      );

}

export default ContractorHome;