import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const recipeAPi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com' }),
    endpoints: (builder) => ({
      getRecipes: builder.query({
        query: ({page,cuisine,query}) => `/recipes/complexSearch?apiKey=${process.env.api_key}&query=${query}&offset=${(page-1)*20}&number=20&cuisine=${cuisine}`,
        
      }),
      getSingleRecipe:builder.query({
        query:(id)=>`recipes/${id}/information?apiKey=${process.env.api_key}`
      })
      
      
    }),
    
  })


  export const {useGetRecipesQuery,useGetSingleRecipeQuery}= recipeAPi
  