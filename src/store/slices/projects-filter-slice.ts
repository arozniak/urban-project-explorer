import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProjectFilter =
  | "None"
  | "ProjectConstructionCompletePurple"
  | "ProjectUnderConstructionRed"
  | "ProjectApprovedGreen";

interface ProjectFilterState {
  currentFilter: ProjectFilter;
}

const initialState = {
  currentFilter: "None",
} as ProjectFilterState;

const projectFilterSlice = createSlice({
  name: "projectsFilter",
  initialState,
  reducers: {
    setFilter(state, param: PayloadAction<{ newFilter: ProjectFilter }>) {
      state.currentFilter = param.payload.newFilter;
    },
  },
});

export const { setFilter } = projectFilterSlice.actions;
export default projectFilterSlice.reducer;
