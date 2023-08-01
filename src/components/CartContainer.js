import CartItem from "./CartItem";
import {useDispatch, useSelector } from "react-redux";
import { Button } from 'reactstrap';
import { clearCart } from "../freatures/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const {cartItems, amount, total} = useSelector((state) => state.cart);
  if(amount < 1){
    return <h1> Your Bag is Empty!</h1>
  }
    return(
    <div className="cart-container">
       <div className="header">
          <h1> Your Bag</h1>
       </div>
       <div className="content">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />
            })}
       </div>
       <div className="footer">
         Total  <h1> {total} </h1>
         <Button color="primary" onClick={() => dispatch(clearCart())}> Clear All </Button>
       </div>
    </div>
    )
}

export default CartContainer;