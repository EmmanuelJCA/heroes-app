import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesLayout, DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes"

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <HeroesLayout />,
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
                path: "/hero",
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
