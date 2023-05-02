import { RootState } from "../../../../store";
import {
  SortColumn,
  SortOrder,
} from "../../../../store/slices/projects-sort-slice";

export const getSortCallback = (
  sort: RootState["projectsSort"],
  a: any,
  b: any
): number => {
  const compareOp = (a: any, b: any, accessor: (t: any) => any) => {
    if (sort.sortOrder === SortOrder.DSC) {
      return accessor(a) < accessor(b);
    } else {
      return accessor(b) < accessor(a);
    }
  };

  switch (sort.sortColumn) {
    case SortColumn.Status: {
      if (compareOp(a, b, (t: any) => t?.statusType.attributes.Icon)) return -1;
      else return 1;
    }
    case SortColumn.ProjectName: {
      if (compareOp(a, b, (t: any) => t?.attributes.EventName)) return -1;
      else return 1;
    }
    case SortColumn.Neighborhood: {
      if (compareOp(a, b, (t: any) => t?.attributes.neighborhood)) return -1;
      else return 1;
    }
    case SortColumn.StartDate: {
      if (compareOp(a, b, (t: any) => t?.attributes.StartDate)) return -1;
      else return 1;
    }
    case SortColumn.EndDate: {
      if (compareOp(a, b, (t: any) => t?.attributes.EndDate)) return -1;
      else return 1;
    }
  }
};
