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
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.restaurantList.push(action.payload);
      state.totalRestaurants += 1;
    },

    // how can I invoke the form element again
    updateCard: (state, action) => {
      const { id, updatedEntry } = action.payload;
      state.restaurantList[id] = updatedEntry;
    },

    deleteCard: (state, action) => {
      state.restaurantList.splice(action.payload, 1);
      state.totalRestaurants -= 1;
    }
  },
})



// Action creators are generated for each case reducer function
export const { addCard, updateCard, deleteCard } = cardSlice.actions

export default cardSlice.reducer