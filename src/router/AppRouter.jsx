import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"
import { LoginPage } from "../auth"
import { DcPage, MarvelPage } from "../heroes"
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
