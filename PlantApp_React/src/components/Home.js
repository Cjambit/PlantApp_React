import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

function Home() {
    return (
        <main>
            <div className="homePortalDiv">
                <h2>Select from Client or Contractor Portal:</h2>
                <Link underline="none" className="homePortal1" to="/ClientView/ClientHome">Client Portal</Link> 
                <Link className="homePortal2" to="/ContractorView/Home">Contractor Portal</Link>
            </div>
        </main>
      );

}
export default Home;

