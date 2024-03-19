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
      img: "https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Fbanner%2Fbanner3.jpg?alt=media&token=ed4942c8-5176-438c-82d4-da86e5f719ee",
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
  document.cookie = "name: Hoang" ; 
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
  