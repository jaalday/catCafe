import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";   
import About from "./About";
import Cats from "./Cats";
import Cart from "./Cart";
import Menu from "./Menu";
 
 
import Contact from "./Contact";

import Error from "./components/Error";
import Home from "./Home";

import Store from "./Store";



const router = createBrowserRouter ([
    {
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/cats',
                element: <Cats/>
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/store',
                element: <Store/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/contact',
                element: <Contact/>

            }
        
            
        ],
    },
]);

function Routes() {
    return (
        <RouterProvider router={router}/>
    );
}

export default Routes;

