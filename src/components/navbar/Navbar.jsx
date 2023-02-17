import "./navbar.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import { useState } from "react";

import {Link} from "react-router-dom"
import Cart from "../cart/Cart";
import {useSelector} from "react-redux"


const Navbar = () => {

  const [open, setOpen] = useState(false)

  const products = useSelector(state=>state.cart.products);


return(
  <div className="navbar">
    <div className="warper">
      <div className="left">

        <div className="item">
          <img src="/imgs/en.png" alt="" />
          <KeyboardArrowDownIcon />
        </div>

        <div className="item">
          <span>USD</span>
          <KeyboardArrowDownIcon />
        </div>

        <div className="item">
          <Link to="/products/1">
            <span>Men</span>
          </Link>
        </div>

        <div className="item">
          <Link to="/products/2">
            <span>Women</span>
          </Link>
        </div>

        <div className="item">
          <Link to="/products/3">
            <span>Children</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/products/4">
            <span>Accessories</span>
          </Link>
        </div>


      </div>
      
      <div className="center">
        <div className="logo">
          <Link className="logo" to="/">
          Eshop🛒
          </Link>
        </div>
      </div>


      <div className="right">
        <div className="item">
          <Link to="/">
          <span>Homepage</span>
          </Link>
        </div>

        <div className="item">
          <Link to="">
          <span>About</span>
          </Link>
        </div>

        <div className="item">
          <Link to="">
          <span>Contact</span>
          </Link>
        </div>

        <div className="item">
          <Link to="/stores">
          <span>Stores</span>
          </Link>
        </div>

        <div className="item">
          <SearchIcon className="icon"/>
        </div>
        <div className="item">
          <Person3OutlinedIcon className="icon"/>
        </div>
        <div className="item">
          <FavoriteBorderOutlinedIcon className="icon"/>
        </div>

        
        <div className="item" onClick={()=>setOpen(!open)}> {/* cart open */}
          <div className="count">{products.length}</div>
          <LocalGroceryStoreOutlinedIcon className="icon"/>
        </div>
      </div>
    </div>
    {open && <Cart/>} {/* import cart from cart component for open  */}
  </div>
)
}
export default Navbar