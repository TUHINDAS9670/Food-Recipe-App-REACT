import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import LowerSlider from "../components/LowerSlider";
const RecipeDetails = () => {
  const [active,setActive]=useState("ingredient")
  const [recipeData, setRecipeData] = useState([]);
  const { idMeal } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();
      //meals because the json data that is comming from the api is a form of array and the name of the array is meals. u can check it by log the data only
      setRecipeData(data.meals[0]);
      console.log(data.meals[0]);
    };
    fetchData();
  }, [idMeal]);
  // const recipe_details=recipeData.filter((data)=>
  //   data.idMeal==id
  // )
  const ingredients = [];
  for (let i = 1; i <= 20; i++) { // Adjust 20 if necessary
    const ingredient = recipeData[`strIngredient${i}`];
    const measure = recipeData[`strMeasure${i}`];
    if (ingredient)//if ingredient is not ""
     {
      ingredients.push(`${ingredient} - ${measure}`);
    } else {
      break; // Exit the loop if no more ingredients
    }
  }
 


  return (
    <>
      <Navbar />

      <div className=" w-[90%] m-auto text-center ">
        <h1 className="text-3xl mb-12 ">{recipeData.strMeal}</h1>
        <div className="flex gap-[200px] " >
          <div className=" ">
            <img src={recipeData.strMealThumb} alt="" className="h-[400px] w-[600px] rounded-xl bg-opacity-25" />
          </div>
          <div className="h-[90%] w-[90%] font-bold  ">
          <button className="p-2 border-[3px] border-white  rounded-md transition delay-100 duration-500 ease-out hover:-translate-y-1 hover:scale-105 cursor-pointer bg-yellow-500 text-red-500 m-4" onClick={()=>{setActive('ingredient')}}>Ingrediengts</button>
          <button className="p-2 border-[3px] border-white  rounded-md transition delay-100 duration-500 ease-out hover:-translate-y-1 hover:scale-105 cursor-pointer bg-yellow-500 text-red-500" onClick={()=>{setActive('instruction')}}>Instructions</button>

          {active === 'ingredient' ? ( <div>
            {ingredients.map((ing, index) => (
                  <h2 key={index}>{ing}</h2>
                ))}
            
           
          </div>):(<p>
            {`${recipeData.strInstructions}`.split(".")}
            </p>)}
         
          
          </div>
         
        </div>
      </div>

      <LowerSlider />
    </>
  );
};

export default RecipeDetails;
