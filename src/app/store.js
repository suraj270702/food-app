import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../features/page/pageSlice";
import filterReducer from '../features/filter/filterSlice'
import { recipeAPi } from "../services/Api";

export const store = configureStore({
  reducer: {
    pagination: pageReducer,
    [recipeAPi.reducerPath]: recipeAPi.reducer,
    filter:filterReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeAPi.middleware),
});
