import { configureStore } from "@reduxjs/toolkit";
import likeReducer from './postSlice'

export const store = configureStore({
  reducer: {
    likes: likeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>