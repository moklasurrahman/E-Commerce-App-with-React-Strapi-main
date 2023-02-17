import React from "react";
import "./cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector(state=>state.cart.products);
  const dispatch = useDispatch()

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.count*item.price;
    });
    return total.toFixed(2);
   
  };

  return (
    <div className="cart">
      <h1>Product in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />

          <div className="details">
            <h2>{item.title}</h2>
            <p>{item.desc?.substring(0, 100)} ...</p>
            <div className="price">{item.count} X ${item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="delet" onClick={() => dispatch(removeItem(item.id))}/>
        </div>
      ))}

      <div className="total">
        <span>Subtotal</span>
        <span>${totalPrice()}</span>
      </div>
      <button>proceed to Checkout</button>
      <span className="reset"  onClick={() => dispatch(resetCart())}>reset Cart</span>
    </div>
  );
};

export default Cart;
