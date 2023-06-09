import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurantList: [],
  totalRestaurants: 0
}

export const cardSlice = createSlice({
  name: 'restaurantCard',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.restaurantList.push(action.payload);
      state.totalRestaurants += 1;
    },
    updateCard: (state, action) => {
      const { id, updatedEntry } = action.payload;
      state.restaurantList[id] = updatedEntry;
    },
    deleteCard: (state, action) => {
      state.restaurantList.splice(action.payload, 1);
      state.totalRestaurants -= 1;
    },
    initializeState: (state, action) => {
      const { restaurantList, totalRestaurants } = action.payload;
      state.restaurantList = restaurantList;
      state.totalRestaurants = totalRestaurants;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCard, updateCard, deleteCard, initializeState } = cardSlice.actions

export default cardSlice.reducer