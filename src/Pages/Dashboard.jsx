import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { ResContext } from "./Context/ResContext";
import { NavLink } from "react-router";

function Dashboard() {
    const dataset = useContext(ResContext);
    return <>
        <Navbar/>
        <div className="container">
            <div className="card text-white bg-success">
                <div className="card-body">Selamat Datang {dataset.userData.username}!</div>
            </div>

            <NavLink to='/createpost' className="btn btn-sm btn-outline-dark mt-3">Tambah Post</NavLink>

            
        </div>
    </>
}

export default Dashboard;