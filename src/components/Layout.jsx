import {Outlet} from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';


const primaryNav = [
    { title: 'About', path: '/about' },
    { title: 'Cats', path: '/cats' },
    { title: 'Contact', path: '/contact' },
    { title: 'store', path: '/store'},
];
const Layout = () => {
    return (
        <div>
            <Navigation navItems={primaryNav} />
            <Outlet />

            <Footer/>
        </div>
    );
}
export default Layout;