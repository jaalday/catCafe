import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";   
import About from "./About";
import Cats from "./Cats";
// import Cats from "./components/Cats";  
 

// import Store from "./components/Store";
import Error from "./components/Error";
import Home from "./Home";
import Contact from "./Contact";


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
            // {
            //     path: '/store',
            //     element: <Store/>
            // }
            
        ],
    },
]);

function Routes() {
    return (
        <RouterProvider router={router}/>
    );
}

export default Routes;

