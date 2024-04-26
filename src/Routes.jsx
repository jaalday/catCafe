import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";   
import About from "./About";
import Cats from "./Cats";
// import Cats from "./components/Cats";  
 
// import Contact from "./components/Contact";
// import Store from "./components/Store";
import Home from "./Home";


const router = createBrowserRouter ([
    {
        element: <Layout/>,
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
            // {
            //     path: '/contact',
            //     element: <Contact/>
            // },
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

