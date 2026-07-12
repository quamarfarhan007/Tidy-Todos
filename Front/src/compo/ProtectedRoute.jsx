import { Navigate, Outlet } from "react-router-dom"
export const ProtectedRoute = function () {
    const boken = localStorage.getItem("authToken")

    if (!boken) {
        return <Navigate to="/login" replace />
    }
    return <Outlet />
}