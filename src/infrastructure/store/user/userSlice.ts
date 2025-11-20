// src/infrastructure/store/product/productSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsersThunk } from "./userThunks";
import type { User } from "../../../domain/entities/User";

export interface UserState {
  items: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  items: [],
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default userSlice.reducer;
