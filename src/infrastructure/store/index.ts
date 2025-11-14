import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import recipeReducer from "./recipe/recipeSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    recipes: recipeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
