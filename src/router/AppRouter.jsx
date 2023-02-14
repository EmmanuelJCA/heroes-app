import { Children } from "react"
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage, MarvelPage } from "../heroes/pages"
import { HeroesApp } from "../HeroesApp"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroesApp />,
        children: [
            {
                path: "/marvel",
                element: <MarvelPage />,
            },
            {
                path: "/dc",
                element: <DcPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/",
                element: <Navigate to={"/marvel "}/>,
            }
        ]
    }
    
])
export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={ router } />
        </>
    )
}
