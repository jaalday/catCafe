import { useContext } from "react";
import Store from "./Store";
import { products } from "./Store";



 export const Cart = () => {

    return (
        <div className="cart">
            <h1>Cart</h1>
            <p className="cartText">Your cart is currently empty. Please add some items to your cart!</p>
            <div className="cartItems">
           
            </div>
        </div>
    );

}

export default Cart;

