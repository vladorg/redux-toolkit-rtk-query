import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import burgerReducer from './slices/burgerSlice'
import postsSlice from './slices/postsSlice'
import { postsAPI } from '../services/postsServise'

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
    posts: postsSlice,
    [postsAPI.reducerPath]: postsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsAPI.middleware), // TODO: fix error when fetch reject
})
