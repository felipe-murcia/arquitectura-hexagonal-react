// src/infrastructure/store/product/productThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit"; 

import { GetAllUsersUseCase } from '../../../application/usecases/user/GetAllUsersUseCase';
import { UserAPIRepository } from '../../adapters/UserAPIRepository';
import { HttpClient } from '../../http/HttpClient';

export const fetchAllUsersThunk = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try { 
        const userService = new UserAPIRepository(HttpClient);
        const useCase = new GetAllUsersUseCase(userService);
        const users = await useCase.execute();
        return users; 
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
