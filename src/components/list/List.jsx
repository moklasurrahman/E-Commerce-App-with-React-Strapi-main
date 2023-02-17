import "./list.scss"
import Card from "./../../components/card/Card"
import useFetch from "../../hooks/useFetch"


const List = ({ SubCats, maxPrice, sort, catId}) => {
   
  const {data, loading, error} = useFetch(
    
    // `/products?populate=*&[filters][categories][id]=${catId}${SubCats.map(
    //   (item)=>`&[filters][subcategories][id][$eq]=${item}`
    //   )}`

    `/products?populate=*&[filters][categories][id]=${catId}${SubCats.map(
      (item) => `&[filters][subcategories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
      
      )
 
  

  return (
    
    <div className="list">
    {loading
      ? "loading"
      : data?.map((item) => <Card item={item} key={item.id} />)}
  </div>  
  )
}

export default List