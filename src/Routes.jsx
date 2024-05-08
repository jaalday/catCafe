import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";   
import About from "./About";
import Cats from "./Cats";
import Cart from "./Cart";
 
 


import Error from "./components/Error";
import Home from "./Home";
import Contact from "./Contact";
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
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/store',
                element: <Store/>
            },
            {
                path: '/cart',
                element: <Cart/>
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

