import { useContext } from "react";
import Store from "./Store";
import { products } from "./Store";
import { ShopContext } from "./components/Shop-context";



 export const Cart = () => {

    const {cartItems} = useContext(ShopContext);

    return (
        <>
        <h1>Cart</h1>
        <p className="cartText">Your cart items!</p>

        <div className="cartItems">
        {products.map((product) => {
            if (cartItems[product.id] > 0) {
                return (
                    <div key={product.id} className="cartItem">
                        <h3>{product.name}</h3>
                        <img className="img2" src={product.img} alt={product.name}/>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {cartItems[product.id]}</p>
                    </div>
                )
            }
        })}
        <div className="cart">
           
      
           
            </div>
        </div>
        </>
    );

}

export default Cart;

