import React from "react";
import "./featuredProducts.scss"
import Card from "../../components/card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  
  // const [data, setData] = useState([]);

  // const [error, setError] = useState(null);


  // useEffect(() =>{
  //  const fetchData = async () => {
  //   try{                                                          // products
  //     const res = await axios.get(`http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}` ,
  //     {
  //      headers: {
  //       Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
  //      }
  //     });
  //     setData(res.data.data)
  //     console.log(res)
  //    }
  //    catch(error){
  //     setError(error)
  //    }
  //  }
  //  fetchData();
  // },[]);


  // if (error) {
  //   // Print errors if any
  //   return <div style={{fontSize:"30px", fontw
  // :"800", textAlign:"center", color:"red", padding:"50px"}}>An error occured: {error.message}</div>;
  // }



//another 
  // useEffect(() => {
  //   axios.get('http://localhost:1337/api/products')
  //   .then(res => {setData(res.data.data)})
  //     .catch((error) => setError(error))
  // }, [])

  // if (error) {
  //   // Print errors if any
  //   return <div>An error occured: {error.message}</div>;
  // }

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          voluptatem eum excepturi blanditiis voluptatum quisquam id maiores
          Earum quidem sequi nam impedit dolore aliquam assumenda mollitia sunt ab aliquid?
        </p>
      </div>
      
      <div className="bottom">


      {error
          ? "Something went wrong please try again leter!"
          : loading
          ? "page loading"
          : data?.map((item) => 
            <Card item={item} key={item.id} />)}


      </div>
    </div>
  );
};

export default FeaturedProducts;
