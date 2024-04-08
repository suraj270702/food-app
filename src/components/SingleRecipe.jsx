import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleRecipeQuery } from "../services/Api";

const SingleRecipe = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleRecipeQuery(id);

  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="w-[96%] lg:w-[90%] mx-auto">
            <div className="flex items-center gap-x-5">
                <Link to="/" className="">
                    <span className="hover:text-gray-400">Home</span>
                </Link>
                <span>{data?.title}</span>
            </div>
          <div className="mt-10">
            <div className="flex flex-col md:flex-row items-start gap-x-10 w-full h-full">
              <div className="h-full w-full md:w-1/2">
                <img
                  src={data?.image}
                  className="w-full h-full object-cover"
                  alt="Palak Paneer"
                />
              </div>

              <div className="flex flex-col justify-between bg-white rounded-lg md:w-1/2 w-full h-full p-5">
                <div className="flex flex-col justify-center">
                  <h1 className="text-2xl  font-medium mb-5">{data?.title}</h1>
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="lg:text-md text-base font-medium">
                      <p>Ready in Minutes: {data?.readyInMinutes}</p>
                    </div>
                    <div className="lg:text-md text-base font-medium">
                      <p>Servings: {data?.servings}</p>
                    </div>
                  </div>
                  {data?.cuisines && (
                    <div className="mt-3 lg:text-md text-base font-medium">
                      <div className="flex flex-col md:flex-row gap-y-3 gap-x-3">
                        <h1>Cuisines</h1>
                        <div className="flex flex-col md:flex-row gap-y-3 gap-x-3">
                          {data?.cuisines.map((item, i) => (
                            <span key={i}>{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="mt-3 lg:text-md text-base font-medium">
                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-3">
                      <h1>Dish Types</h1>
                      <div className="flex flex-col md:flex-row gap-y-3 gap-x-3">
                        {data?.dishTypes.map((item, i) => (
                          <span key={i}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 lg:text-md text-base font-medium">
                    <div className="flex flex-col md:flex-row gap-y-3 gap-x-3">
                      <h1>Diets</h1>
                      <div className="flex flex-col md:flex-row gap-y-3 gap-x-3">
                        {data?.diets.map((item, i) => (
                          <span key={i}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white mt-10 p-5 rounded-lg w-full">
              <h1 className="text-center text-2xl  font-bold mb-5 mt-5">
                Summary
              </h1>
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: data?.summary }}
              ></div>
            </div>
            <div className="bg-white mt-10 p-5 rounded-lg w-full">
              <h1 className="text-center text-2xl  font-bold mb-5 mt-5">
                Ingredients
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5">
                {data?.extendedIngredients.map((item, i) => (
                  <div className="flex flex-col items-center gap-y-2 p-3 bg-gray-100" key={item.id}>
                    <span>{item?.name}</span>
                    <span>{item?.original}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white mt-10 p-5 rounded-lg w-full">
              <h1 className="text-center text-2xl  font-bold mb-5 mt-5">
                Instructions
              </h1>
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: data?.instructions }}
              ></div>
            </div>

            <div className="mt-10">
              {data?.analyzedInstructions[0].steps.map((item, i) => (
                <div
                  className="bg-white rounded-lg p-2 w-full h-full mb-5"
                  key={i}
                >
                  <div>
                    <h1 className="text-lg text-center font-bold">
                      Step {item.number}
                    </h1>
                    <div>
                      <p>{item.step}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-3 mt-5">
                      {item.ingredients.map((item, i) => (
                        <div
                          className="flex flex-col items-center gap-y-2 w-full h-full"
                          key={i}
                        >
                          <img
                            src={item.image}
                            alt={`${item.name} image`}
                            className="w-fit h-[60px]"
                          />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleRecipe;
