
import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    count:100
  }

const productSlice = createSlice({
    name:"total",
    initialState,
    reducers:{
      increment(state, action){
        state.count += action.payload;
      },
      decrement(state,action){
        state.count -= action.payload;
      }
    }
  })

  export const {increment,decrement} = productSlice.actions;
  export default productSlice.reducer;