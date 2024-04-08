import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const pageSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    increment: (state) => {
      
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setPageValue: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { increment, decrement, setPageValue } = pageSlice.actions

export default pageSlice.reducer