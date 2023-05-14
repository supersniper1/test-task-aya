import { createSlice } from "@reduxjs/toolkit";

export interface ISizes {
  sizes: ISize[];
}

export interface ISize {
  id: number;
  label: string;
  number: number;
}

const initialState: ISizes = {
  sizes: [],
};

export const SizesSlice = createSlice({
  name: "Sizes",
  initialState,
  reducers: {
    SizesGet: (state, action) => {
      state.sizes = action.payload;
    },
  },
});

export const SizesReducer = SizesSlice.reducer;
export const SizesActions = SizesSlice.actions;
