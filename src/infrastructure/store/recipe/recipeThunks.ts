// src/infrastructure/store/product/productThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit"; 

import { HttpClient } from '../../http/HttpClient';
import { RecipeAPIRepository } from "../../adapters/RecipeAPIRepository";
import RecipeUseCase from "../../../application/usecases/RecipeUseCase";

export const fetchAllRecipesThunk = createAsyncThunk(
  "recipes/fetchAll",
  async (_, thunkAPI) => {
    try { 
        const recipeService = new RecipeAPIRepository(HttpClient);
        const useCase = new RecipeUseCase(recipeService);
        const recipes = await useCase.execute();
        return recipes; 
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
