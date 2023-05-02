import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SortColumn {
  Status = "Status",
  ProjectName = "Project name",
  Neighborhood = "Neighborhood",
  StartDate = "Start date",
  EndDate = "End date",
}

export enum SortOrder {
  ASC,
  DSC,
}

interface ProjectSortState {
  sortColumn: SortColumn;
  sortOrder: SortOrder;
}

const initialState = {
  sortColumn: SortColumn.ProjectName,
  sortOrder: SortOrder.DSC,
} as ProjectSortState;

const projectsSortSlice = createSlice({
  name: "projectSort",
  initialState,
  reducers: {
    setSort(
      state,
      param: PayloadAction<{
        newSortColumn: SortColumn;
        newSortOrder: SortOrder;
      }>
    ) {
      const { payload } = param;
      state.sortColumn = payload.newSortColumn;
      state.sortOrder = payload.newSortOrder;
    },
  },
});

export const { setSort } = projectsSortSlice.actions;
export default projectsSortSlice.reducer;
