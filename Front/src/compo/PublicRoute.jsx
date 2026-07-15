import { Navigate, Outlet } from "react-router-dom"

export const PublicRoute = function () {
    const token = localStorage.getItem("authToken")

    // If user is already logged in, redirect to home
    if (token) {
        return <Navigate to="/home" replace />
    }
    // Otherwise show login/signup page
    return <Outlet />
}
