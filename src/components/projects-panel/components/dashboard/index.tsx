import { Project } from "../../../../generated/graphql.d";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  setFilter,
  ProjectFilter,
} from "../../../../store/slices/projects-filter-slice";

import * as Styled from "./styles";

import { StatusType, statusTypeDetails } from "../../../constants/statusTypes";

interface Props {
  projects: Project[];
}

const Dashboard: React.FC<Props> = ({ projects }) => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector((state) => state.projectsFilter.currentFilter);

  const filterProjectsByStatusType = (statusType: string) => {
    let filter = statusType as ProjectFilter;
    dispatch(setFilter({ newFilter: filter }));
  };

  const countProjectsByStatusType = (statusType: string) => {
    return projects.filter(
      (project) =>
        statusType === StatusType.None ||
        project?.statusType?.attributes.Icon === statusType
    ).length;
  };

  return (
    <Styled.Wrapper>
      <Styled.Statistics>
        {Object.values(StatusType).map((statusType, index) => (
          <Styled.StatsButton
            key={index}
            $active={filter === statusType}
            onClick={() => filterProjectsByStatusType(statusType)}
          >
            <Styled.Count $color={statusTypeDetails[statusType].color}>
              {countProjectsByStatusType(statusType)}
            </Styled.Count>
            <label>{statusTypeDetails[statusType].displayName}</label>
          </Styled.StatsButton>
        ))}
      </Styled.Statistics>
      <Styled.Chart projects={projects} />
    </Styled.Wrapper>
  );
};

export default Dashboard;
