import {Link} from 'react-router-dom';

function Footer () {
    return (
        <footer className='footer'>
            <p className='copy'>&copy; 2024 Cat Cafe</p>
            <nav className='footerText'>
            
                    <h4>
                        <Link className='footerText' to="/">Home</Link>
                    </h4>
                    <h4>
                        <Link className='footerText' to="/cats">Cats</Link>
                    </h4>
                    <h4>
                        <Link className='footerText' to="/contact">Contact</Link>
                    </h4>
                    <h4>
                        <Link className='footerText' to="/store">Store</Link>
                    </h4>
                    <h4>
                        <Link className='footerText' to="/careers">Careers</Link>
                    </h4>
               
            </nav>
        </footer>
    );


}

export default Footer;