import { configureStore } from "@reduxjs/toolkit";
import neighborhoodReducer from "./slices/neighborhoods-slice";
import projectsFilterReducer from "./slices/projects-filter-slice";
import projectsSortReducer from "./slices/projects-sort-slice";

export const store = configureStore({
  reducer: {
    neighborhoods: neighborhoodReducer,
    projectsFilter: projectsFilterReducer,
    projectsSort: projectsSortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
