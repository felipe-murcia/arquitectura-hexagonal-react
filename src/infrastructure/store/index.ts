import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import recipeReducer from "./recipe/recipeSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    recipes: recipeReducer,
    users: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
