import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesLayout, DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

const router = createBrowserRouter([
    {
        path: "/login",
        element: <PublicRoute> <LoginPage /> </PublicRoute>,
    },
    {
        path: "/",
        element: <PrivateRoute> <HeroesLayout /> </PrivateRoute>,
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
                path: "/search",
                element: <SearchPage />,
            },
            {
                path: "/hero/:id",
                element: <HeroPage />,
            },
            {
                path: "/",
                element: <Navigate to={"/marvel "}/>,
            }
        ]
    },
    
])
export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={ router } />
        </>
    )
}
