import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { ResContext } from "./Context/ResContext";

function Dashboard() {
    const dataset = useContext(ResContext);
    return <>
        <Navbar/>
        <div className="container">
            <div className="card text-white bg-success">
                <div className="card-body">Selamat Datang {dataset.userData.username}!</div>
            </div>
        </div>
    </>
}

export default Dashboard;