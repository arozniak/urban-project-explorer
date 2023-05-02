import ProjectListEntry from "./components/projects-list-entry";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  setSort,
  SortColumn,
  SortOrder,
} from "../../../../store/slices/projects-sort-slice";
import { getSortCallback } from "./helpers";
import { Project } from "../../../../generated/graphql";

import { HydratedProject } from "../../types";

import CaretDownIcon from "calcite-ui-icons-react/CaretDownIcon";
import CaretUpIcon from "calcite-ui-icons-react/CaretUpIcon";

import * as Styled from "./styles";
import { useState } from "react";

interface Props {
  projects: Project[];
  onProjectSelect: (project: HydratedProject) => void;
}

const ProjectsList: React.FC<Props> = ({ projects, onProjectSelect }) => {
  const dispatch = useAppDispatch();
  const [queryString, setQueryString] = useState("");
  const neighborhoodData = useAppSelector((state) => state.neighborhoods);
  const sort = useAppSelector((state) => state.projectsSort);
  const filter = useAppSelector((state) => state.projectsFilter.currentFilter);

  const filterExpression = (proj: any): boolean => {
    return (
      proj?.attributes.EventName.toLowerCase().includes(
        queryString.toLowerCase()
      ) &&
      (filter === "None" || proj?.statusType.attributes.Icon === filter)
    );
  };

  const projectsToDisplay = projects
    .map((project) => {
      const neighborhood =
        neighborhoodData.neighborhoods.find(
          (entry) => entry.id === project?.attributes.GlobalID
        )?.name ?? "";
      return {
        ...project,
        attributes: { ...project?.attributes, neighborhood },
      };
    })
    .filter(filterExpression)
    .sort((a, b) => getSortCallback(sort, a, b))
    .map((proj: any) => {
      return (
        <ProjectListEntry
          key={proj?.attributes.GlobalID}
          attributes={proj?.attributes}
          statusType={proj?.statusType.attributes.Icon}
          neighborhood={proj?.attributes.neighborhood}
          onProjectSelect={onProjectSelect}
        />
      );
    });

  const sortAction = (column: SortColumn) => {
    if (sort.sortColumn === column) {
      return setSort({
        newSortColumn: column,
        newSortOrder:
          sort.sortOrder === SortOrder.DSC ? SortOrder.ASC : SortOrder.DSC,
      });
    } else {
      return setSort({
        newSortColumn: column,
        newSortOrder: SortOrder.DSC,
      });
    }
  };

  const getCaretIcon = (column: SortColumn) => {
    if (sort.sortColumn !== column) return null;

    if (sort.sortColumn === column && sort.sortOrder === SortOrder.DSC) {
      return <CaretUpIcon size={14} />;
    }

    return <CaretDownIcon size={14} />;
  };

  return (
    <>
      <Styled.SearchToolbar>
        <Styled.SearchInput
          label="ProjectSearch"
          placeholder="Search"
          icon="search"
          clearable
          onCalciteInputTextInput={(event) => {
            setQueryString(event.target.value);
          }}
        />

        <div>{`${projectsToDisplay.length} projects`}</div>
      </Styled.SearchToolbar>
      <Styled.Wrapper>
        <Styled.Table>
          <Styled.TableHeader>
            <tr>
              {Object.values(SortColumn).map((sortColumn, index) => (
                <th
                  key={index}
                  onClick={() => dispatch(sortAction(sortColumn as SortColumn))}
                >
                  <Styled.ColumnTitle>
                    {sortColumn === SortColumn.Status ? (
                      <Styled.ScreenReaderOnly>
                        {sortColumn}
                      </Styled.ScreenReaderOnly>
                    ) : (
                      sortColumn
                    )}
                  </Styled.ColumnTitle>
                  {getCaretIcon(sortColumn as SortColumn)}
                </th>
              ))}
              <th>
                <Styled.ScreenReaderOnly>Actions</Styled.ScreenReaderOnly>
              </th>
            </tr>
          </Styled.TableHeader>
          <tbody>{projectsToDisplay}</tbody>
        </Styled.Table>
      </Styled.Wrapper>
    </>
  );
};

export default ProjectsList;
