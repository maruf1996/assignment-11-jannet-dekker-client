import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import About from "../../Pages/About/About";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import MyReview from "../../Pages/Reviews/MyReview/MyReview";
import UpdateReview from "../../Pages/Reviews/MyReview/UpdateReview/UpdateReview";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router=createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('https://jannet-dekker-server.vercel.app/services')
            },
            {
                path:'/addService',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/myReviews',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>,
            },
            {
                path:'/updateReview/:id',
                element:<UpdateReview></UpdateReview>,
                loader: ({params}) => fetch(`https://jannet-dekker-server.vercel.app/myReview/${params.id}`)
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails> ,
                loader:({params})=>fetch(`https://jannet-dekker-server.vercel.app/service/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])