import React from "react";
import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
const Navbar = () => {
  const [searchData,setSearchData]=useState("");
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
e.preventDefault();
navigate(`/search/${searchData}`)
  }

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <>
      <div className="flex bg-blue-800 h-20 justify-between items-center px-5 font-bold text-[18px] md:w-[1535px] m-0 ">
        {/* logo */}
        <div>
          <Link to={"/"} className="text-red-500 text-2xl">
            React Recipe App
          </Link>
        </div> 
        {/* searchbar */}
        <div>
          <form  onSubmit={handleSubmit}>
          <input
            type="text"
            className=" p-2 rounded-s-xl outline-none font-light font-serif text-green-500"
            onChange={(e)=>{setSearchData(e.target.value)}}
          />
          <button className=" p-2 rounded-e-xl border text-orange-500 bg-slate-200">
            Search
          </button>
          </form>
        </div>
        {/* country wise dishes */}
        <div className="flex gap-3 text-white cursor-pointer ">
          <Link to={`/country/Indian`}>
            <div className="hover:bg-white hover:text-black duration-500 transition-all p-2 rounded-md">
              Indian
            </div>
          </Link>

          <Link to={`/country/American`}>
            {" "}
            <div className="hover:bg-white hover:text-black duration-500 transition-all p-2 rounded-md">
              American
            </div>
          </Link>

          <Link to={`/country/British`}>
            {" "}
            <div className="hover:bg-white hover:text-black duration-500 transition-all p-2 rounded-md">
              British
            </div>
          </Link>

          <Link to={`/country/Chinese`}>
            <div className="hover:bg-white hover:text-black duration-500 transition-all p-2 rounded-md">
              Chinese
            </div>
          </Link>

          <Link to={`/country/Thai`}>
            <div className="hover:bg-white hover:text-black duration-500 transition-all p-2 rounded-md">
              Thai
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
