import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const CartContainer = () => {
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

         <button className="clearButton" > Clear All </button>
       </div>
    </div>
    )
}

export default CartContainer;