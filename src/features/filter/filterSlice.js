import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  cuisine:""
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery:(state,action)=>{
        state.name=action.payload
    },
    setCuisine:(state,action)=>{
        state.cuisine=action.payload
    }
  },
})


export const { setCuisine,setQuery } = filterSlice.actions

export default filterSlice.reducer