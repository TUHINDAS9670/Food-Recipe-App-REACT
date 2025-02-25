import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Searchresult = () => {
  const { searchItem } = useParams();
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`
      );
      const data = await api.json();
      setSearchData(data.meals);
      console.log(data.meals);
    };
    fetchData();
  }, [searchItem,searchData]);
  return (
    <div className="overflow-x-hidden">
      {" "}
      <Navbar />
      <h1 className="text-center text-4xl">Results For : {searchItem.toUpperCase()}</h1>
      <div className="grid grid-cols-4 p-5 text-center text-xl ">
        {searchData.map((d) => (
          <Link to={`/${d.idMeal}`} className="pb-4" key={d.idMeal}>
            <div>
              <img
                src={d.strMealThumb}
                alt=""
                className="w-[350px] h-[300px] className='p-3 mt-1 rounded-md transition delay-100 duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer  '"
              />
              <p className="text-white">{d.strMeal}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Searchresult;
