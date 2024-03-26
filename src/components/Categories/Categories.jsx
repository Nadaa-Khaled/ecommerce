import axios from "axios"
import { useEffect, useState } from "react"
import Slider from "react-slick";


export default function Categories() {
  const [categories, setCategories] = useState([])
 async function getCategories(){
   let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/categories/')
   setCategories(data.data)
   
  }
useEffect(()=>{
  getCategories()
},[])
  

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  
};
return (
  <div className="my-4 container">
    <h3>Shop Popular Categories</h3>

    <Slider {...settings}>
  {
    categories.map((val)=>
 <div className="px-1">
            <img src={val.image} className="w-100" height={200} alt="" />
            <h5>{val.name}</h5>


 </div>
    )
  }
  </Slider>
  
  
  
  </div>
)
}

