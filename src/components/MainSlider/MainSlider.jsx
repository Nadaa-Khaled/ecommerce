import React from 'react'
import Slider from "react-slick";
import slide1 from "../../assets/images/2ae8db13-5700-463b-943f-7a0d0e26cb69.avif"
import slide2 from "../../assets/images/81bbb7ba-51a0-42d2-b34a-d6332a79a9e4.avif"
import slide3 from "../../assets/images/d41533b5-5fb4-44e3-ae24-706ede8e02c7.avif"


export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false
    
  };
  return (
    <>
      <Slider {...settings}>
     <img src={slide1} alt="" />
     <img src={slide2} alt="" />
     <img src={slide3} alt="" />
    </Slider>
    
    
    
    </>
  )
}
