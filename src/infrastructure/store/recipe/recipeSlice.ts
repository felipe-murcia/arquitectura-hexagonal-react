// src/infrastructure/store/product/productSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllRecipesThunk } from "./recipeThunks";
import type { Recipe } from '../../../domain/entities/Recipe';

export interface RecipeState {
  items: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  items: [],
  loading: false,
  error: null
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecipesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllRecipesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllRecipesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default recipeSlice.reducer;
