import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Slider from "react-slick";//from react-slick official docs

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const UpperSlider = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
        const api=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
        const data=await api.json();
        console.log(data.meals)//meals because the json data that is comming from the api is a form of array and the name of the array is meals. u can check it by log the data only
        setData(data.meals)
    }
    fetchData();
  },[])

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true
  };

  return (
    <>
    <div className='text-white bg-transparent w-[1300px] items-center justify-center ml-28 mt-10 '>
    
      <Slider {...settings}>
       {data.map((d)=>{
        return(
          <Link  to={`/${d.idMeal}`}  key={d.idMeal}>
          <div className='w-full rounded border-2 ' >
          <img src={d.strMealThumb} alt="" className='p-3 
          h-[300px] w-[400px] mt-1 rounded-md transition delay-100 duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer  ' />
        </div>
      </Link>
        )
       })}
      </Slider>
    
    </div>
    </>
  )
}

export default UpperSlider