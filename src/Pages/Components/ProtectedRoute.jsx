import React, { useContext } from "react";
import { ResContext } from "../Context/ResContext";
import { Navigate } from "react-router";

function ProtectedRoute({children}) {
    const dataset = useContext(ResContext);

    if (dataset.loading) {
        return <h1>Masih loading</h1>;
    }

    if (!dataset.userData) {
        return <Navigate to="/login"/>
    }

    return children;
}









export default ProtectedRoute;