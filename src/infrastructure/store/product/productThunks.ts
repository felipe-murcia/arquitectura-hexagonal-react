// src/infrastructure/store/product/productThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit"; 

import { ProductUseCase } from '../../../application/usecases/ProductUseCase';
import { ProductAPIRepository } from '../../../infrastructure/adapters/ProductAPIRepository';
import { HttpClient } from '../../../infrastructure/http/HttpClient';

export const fetchAllProductsThunk = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try { 
        const productService = new ProductAPIRepository(HttpClient);
        const useCase = new ProductUseCase(productService);
        const products = await useCase.execute();
        return products; 
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
