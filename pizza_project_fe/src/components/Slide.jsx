import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
function SampleNextArrow(props) {
const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block",position: "absolute", fontSize:"30px", right: "2%",zIndex: "2"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block" , position: "absolute", fontSize:"30px", left: "1%",zIndex: "2"}}
      onClick={onClick}
    />
  );
}
const Slide = () => {
  const sliders = [
    {
      img: "https://cdn.pizzahut.vn/images/Web_V3/Homepage/DESTKOP-VIE_M6265_131120231031.jpg",
      alt: "Slide1",
      linkto :"/sign-up" 
    },
    {
      img: "/pizza_project_image/banner/banner3.jpg",
      alt: "Slide2",
      linkto :"/order" 
    }
  ]
  const Navigate = useNavigate();
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
      <Slider {...settings}>  
      {
        sliders.map((slider, index) => {
          return (
            <div key={index}>
              <img className=" cursor-pointer h-[350px]" src={slider.img} alt={slider.alt} onClick={()=>Navigate(slider.linkto)}/>
            </div>
          )
        })
      }
      </Slider>
  );
};

export default Slide;
  