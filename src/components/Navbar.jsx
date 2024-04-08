import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import { setCuisine,setQuery } from "../features/filter/filterSlice";
const Navbar = () => {
  const cuisines = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese"
];

const filter = useSelector((state)=>state.filter)

const dispatch = useDispatch()

  return (
    <div className="py-3 w-full bg-white">
      <div className="w-[96%] lg:w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row gap-y-5 items-center justify-between">
          <div className="md:w-[70%] w-full">
            <input
              type="text"
              value={filter.name}
              onChange={(e)=>dispatch(setQuery(e.target.value))}
              placeholder="search for recipe by names e.g chicken"
              className="py-3 pl-4 placeholder:text-gray-500 border border-gray-300 w-full md:w-[70%]"
            />
          </div>
          <div className="w-full md:w-[250px]">
          <select className="md:w-[250px] w-full py-3 border border-solid " value={filter.cuisine} onChange={(e)=>dispatch(setCuisine(e.target.value))}>
            <option value="" hidden>Select Cuisine</option>
            {
              cuisines.map((item,i)=>(
                <option value={item} key={i}>{item}</option>
              ))
            }
          </select>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
