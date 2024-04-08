import React from "react";
import Navbar from "./Navbar";
import RecipeCard from "./RecipeCard";
import { useGetRecipesQuery } from "../services/Api";
import {useSelector} from 'react-redux'
import PaginationCard from "./PaginationCard";
import Loader from "./Loader";

const Home = () => {
    const page = useSelector((state)=>state.pagination.value)
    const filter = useSelector((state)=>state.filter)
   // console.log("page value",page)
    const {data,isLoading,isError} = useGetRecipesQuery({page,cuisine:filter.cuisine,query:filter.name})
  return (
    <>
    {
        isLoading ? (
            <div className="flex items-center justify-center h-screen">
                  <Loader />
            </div>
        ):(
            <div>
      <Navbar />
      <div className="mt-10 w-[96%] lg:w-[90%] mx-auto grid grid-cols-2 gap-x-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5">
        {
            data && data.results?.map((item,i)=>(
                <RecipeCard title={item.title} img={item.image} id={item.id} key={i} />
            ))
        }

      </div>
      <div className="mt-10 flex items-center justify-center">
        <PaginationCard />

      </div>
    </div>
        )
    }
    </>
  );
};

export default Home;
