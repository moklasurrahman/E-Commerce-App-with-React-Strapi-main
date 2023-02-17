import "./products.scss"
import { useParams } from 'react-router-dom'
import List from '../../components/list/List'
import { useState } from 'react';
import useFetch from './../../hooks/useFetch';

const Products = () => {

  const catId = parseInt(useParams().id)
  const[maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/subcategories?[filters][categories][id][$eq]=${catId}`
  );

  

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
    console.log(selectedSubCats)
  };
  
  

  return (
    <div className="products">
      <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
           
           {
            data?.map((item)=>(
              <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} valu={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
            ))
           }


          </div>

          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>

          <div className="filterItem">
            <h2>Sort by</h2>
            
            <div className="inputItem">
              <input type="radio" id="asc" nmae="price" onChange={(e)=>setSort("asc")}/>
              <label htmlFor="asc">Price Lowest first</label>
            </div>

            <div className="inputItem">
              <input type="radio" id="desc" nmae="price"  onChange={(e)=>setSort("desc")}/>
              <label htmlFor="desc">Price Highest first</label>
            </div>

          </div>
      </div>
     
      <div className="right">
         <img className='catImg' src="https://images.pexels.com/photos/3865912/pexels-photo-3865912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

         <List catId={catId} maxPrice={maxPrice} sort={sort} SubCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products