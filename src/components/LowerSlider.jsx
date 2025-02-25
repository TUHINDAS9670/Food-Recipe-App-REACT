import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; //from react-slick official docs

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LowerSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
      );
      const data = await api.json();
      console.log(data.meals); //meals because the json data that is comming from the api is a form of array and the name of the array is meals. u can check it by log the data only
      setData(data.meals);
    };
    fetchData();
  }, []);
  //copied from react slick slider for slider functionality
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <>
      <div className="text-white bg-transparent p-3 w-full  md:w-[1535px]  mt-12 ">
        <Slider {...settings}>
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`}  key={d.idMeal}>
                <div className="w-full">
                  <img
                    src={d.strMealThumb}
                    alt=""
                    className=" 
          h-[200px] w-[200px] mt-1 
          hover:border-[5px]
          hover:border-yellow-300 rounded-md transition delay-100 duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer
            "
                  />
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default LowerSlider;
