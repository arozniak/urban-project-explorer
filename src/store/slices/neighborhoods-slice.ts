import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NeighborhoodsState {
  loaded: boolean;
  neighborhoods: { name: string; id: string }[];
}

const initialState = {
  loaded: false,
  neighborhoods: [],
} as NeighborhoodsState;

const neighborhoodsSlice = createSlice({
  name: "neighborhoods",
  initialState,
  reducers: {
    setNeighborhoods(
      state,
      param: PayloadAction<{ name: string; id: string }[]>
    ) {
      state.neighborhoods = param.payload;
      state.loaded = true;
    },
  },
});

export const { setNeighborhoods } = neighborhoodsSlice.actions;
export default neighborhoodsSlice.reducer;
