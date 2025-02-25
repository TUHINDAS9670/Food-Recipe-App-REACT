import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const CountryWiseRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  
  const { name } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      );
      const data=await api.json()
      // console.log(data.meals)
      setRecipe(data.meals)
    };
    fetchData();
  },[name]);

  return <div className="overflow-x-hidden">
    <Navbar/>
    <h1 className="text-center text-4xl">{name.toUpperCase()}</h1>
    <div className="grid grid-cols-4 p-5 text-center text-xl " >
   {recipe.map((d)=>
   
    <Link  to={`/${d.idMeal}`} className="pb-4" >
      <div key={d.idMeal}>

      <img src={d.strMealThumb} alt="" className="w-[350px] h-[300px] p-3 mt-1 rounded-md transition delay-100 duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer" />
    <p className="text-white">{d.strMeal}</p>
      </div>
  </Link>
      
   )}
  </div>
  </div>
};

export default CountryWiseRecipe;
