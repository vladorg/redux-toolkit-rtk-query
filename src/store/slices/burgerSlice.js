import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false,
}

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    burgerOpen: (state) => {
      if (!state.status) {
        state.status = true
      }      
    },
    burgerClose: (state) => {
      if (state.status) {
        state.status = false
      }   
    },
  },
})

// Action creators are generated for each case reducer function
export const { burgerOpen, burgerClose } = burgerSlice.actions

export default burgerSlice.reducer
