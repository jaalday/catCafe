import { useContext } from "react";
import Store from "./Store";
import { products } from "./Store";
import { ShopContext } from "./components/Shop-context";



 export const Cart = () => {

    const {cartItems, removeFromCart, addToCart} = useContext(ShopContext);

    return (
        <>
        <h1>Cart</h1>
        <p className="cartText">Your cart items!</p>


                  <div >
        {products.map((product) => {
            if (cartItems[product.id] > 0) {
                return (
                   
                    <div key={product.id} className="cartItem">
                        <h3>{product.name}</h3>
                        <img className="cartImg" src={product.img} alt={product.name}/>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {cartItems[product.id]}</p>
                        <div className="countHandler">
                            <button onClick={() => removeFromCart(product.id)}>-</button>
                            <button onClick={() => addToCart(product.id)}>+</button>
                        </div>
                    </div>
                )
            }
        })}
        </div>
        {/* put an adding equation here for the total in the cart */}
    
        </>
    );

}

export default Cart;

