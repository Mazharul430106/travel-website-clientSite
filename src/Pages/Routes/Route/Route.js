import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import AboutUs from "../../AboutUs/AboutUs";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <div>Data Not Found</div>
            }
        ]
    },

])