import {Link} from 'react-router-dom';


const Navigation = () => {
    return (
        <nav className='navBar'>
         
     
            <h3>
            <Link to="/"><img  className="logo"src="https://static.vecteezy.com/system/resources/previews/026/515/352/original/cat-cafe-sign-free-png.png"/>
            <h2 className='title'>Cat Cafe</h2></Link>
            </h3>
         
            
            <div className='navText'>
        
            <h3>
                <Link  className='navText' to="/about">About</Link>
            </h3>
            
            <h3>
            <Link  className='navText' to="/cats">Cats</Link>
            </h3>
            <h3>
                <Link  className='navText' to="/contact">Contact</Link>
            </h3>
            <h3>
                <Link  className='navText' to="/store">Store</Link>
            </h3>
            <img  className="cart"src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"/>
         
            </div>

        </nav>
    );
}

export default Navigation;