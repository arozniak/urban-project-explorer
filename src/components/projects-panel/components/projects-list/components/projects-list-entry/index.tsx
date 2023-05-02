import { zoomToNeighborhood, zoomToProject } from "../../../../../map-panel";

import * as Styled from "./styles";
import { HydratedProject } from "../../../../types";
import { toDate } from "../../../../../../services/utilities/date-format";
import { statusTypeDetails } from "../../../../../constants/statusTypes";

interface ProjectListEntryProps extends HydratedProject {
  onProjectSelect: (project: HydratedProject) => void;
}

const ProjectsListEntry: React.FC<ProjectListEntryProps> = ({
  attributes,
  statusType,
  neighborhood,
  onProjectSelect,
}: ProjectListEntryProps) => {
  return (
    <tr key={attributes.GlobalID}>
      <Styled.Icon>
        <img
          src={statusTypeDetails[statusType].icon}
          width="20px"
          height="20px"
          alt="StatusType"
        />
      </Styled.Icon>
      <Styled.Name
        onClick={() => {
          zoomToProject(attributes.GlobalID);
        }}
      >
        {attributes.EventName}
      </Styled.Name>
      <Styled.Neighborhood
        onClick={() => {
          zoomToNeighborhood(neighborhood);
        }}
      >
        {neighborhood}
      </Styled.Neighborhood>
      <Styled.Date>{toDate(attributes.StartDate)}</Styled.Date>
      <Styled.Date>{toDate(attributes.EndDate)}</Styled.Date>
      <Styled.DetailsLink>
        <Styled.MoreButton
          onClick={() =>
            onProjectSelect({
              attributes,
              statusType,
              neighborhood,
            })
          }
        >
          More
        </Styled.MoreButton>
      </Styled.DetailsLink>
    </tr>
  );
};

export default ProjectsListEntry;
