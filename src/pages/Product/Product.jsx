import "./product.scss";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from './../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("img");
  const [count, setCount] = useState(1);
  
  const {data, loading, error} = useFetch(`/products/${id}?populate=*`);

  const dispatch = useDispatch()
  
  // const images = [
  //   "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/1998251/pexels-photo-1998251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // ];


  return (

    <div className="producr">
     
     { loading? "loding" : <>
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data.attributes.url} alt="" onClick={(e) => setSelectedImg("img")} />
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data.attributes.url} alt="" onClick={(e) => setSelectedImg("img2")} />
        </div>

        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data.attributes.url} alt="" />
        </div>
      </div>

      <div className="right">
        <h2>{data?.attributes?.title}</h2>
        <span style={{color:"green"}}>${data?.attributes?.price}</span>
        <p>
          {data?.attributes?.desc}
        </p>
        <div className="quantity">
          <button onClick={()=>setCount(prev=>prev === 1? 1 : prev - 1)}>-</button>
            {count}
          <button onClick={()=>setCount(prev=>prev+1)}>+</button>
        </div>

        <button onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.desc,
          price:data.attributes.price,
          img: data.attributes.img.data.attributes.url,
          count
        }))} className="add"><AddShoppingCartIcon className="icon"/>ADD TO CART</button>
        
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon className="icon"/> ADD to wish list
          </div>

          <div className="item">
            <BalanceIcon className="icon"/> add to compare
          </div>
        </div>
          <div className="type">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-shirt, Women, Top</span>
          </div>
          <hr className="hr"/>
          <div className="other">
            <span>description</span>
            <hr className="hr1"/>
            <span>additional information</span>
            <hr className="hr1"/>
            faq
          </div>
      </div> </>}
    </div>
  );
};

export default Product;
