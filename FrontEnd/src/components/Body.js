import MainPage from "./MainPage"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import Login from "./Login"
import Profile from "./Profile"
import Header from "./Header"
import Error from "./Error"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/profile",
                element: <Profile />
            },
        ]
    },
]);

const Body = () => {
    return (
        <div>
            <RouterProvider router={appRouter}>
            </RouterProvider>
        </div>
    )
}

export default Body