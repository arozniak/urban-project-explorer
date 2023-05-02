import * as Styled from "./styles";
import { HydratedProject } from "../../types";
import ArrowBoldLeftIcon from "calcite-ui-icons-react/ArrowBoldLeftIcon";
import { useEffect } from "react";
import { zoomToProject } from "../../../map-panel";
import defaultProjectThumbnail from "../../../../img/default-project-thumbnail.png";
import { toDate } from "../../../../services/utilities/date-format";
import { statusTypeDetails } from "../../../constants/statusTypes";

interface Props extends HydratedProject {
  onBackButtonClick: () => void;
}

const ProjectDetails: React.FC<Props> = ({
  attributes,
  neighborhood,
  statusType,
  onBackButtonClick,
}) => {
  useEffect(() => {
    zoomToProject(attributes.GlobalID);
  }, [attributes]);

  console.log(attributes.Thumbnail);

  const imageSrc = attributes.Thumbnail
    ? `data:image/jpeg;base64,${attributes.Thumbnail}`
    : defaultProjectThumbnail;

  const statusTypeDetail = statusTypeDetails[statusType];

  return (
    <Styled.Wrapper>
      <Styled.BackButton onClick={onBackButtonClick}>
        <ArrowBoldLeftIcon size={18} />
      </Styled.BackButton>

      <Styled.Image src={imageSrc} />

      <Styled.ProjectName>{attributes.EventName}</Styled.ProjectName>

      <Styled.Description>{attributes.Description}</Styled.Description>

      <Styled.Owner>
        <Styled.OwnerLabel>Owner: </Styled.OwnerLabel>
        {attributes.OwnerName}
      </Styled.Owner>

      <Styled.DetailsGrid>
        <div>
          <Styled.DetailsContent $color={statusTypeDetail.color}>
            {statusTypeDetail.displayName}
          </Styled.DetailsContent>
          <div>Status</div>
        </div>
        <div>
          <Styled.DetailsContent>{neighborhood}</Styled.DetailsContent>
          <div>Neighborhood</div>
        </div>
        <div>
          <Styled.DetailsContent>
            {toDate(attributes.StartDate)}
          </Styled.DetailsContent>
          <div>Start date</div>
        </div>
        <div>
          <Styled.DetailsContent>
            {toDate(attributes.EndDate)}
          </Styled.DetailsContent>
          <div>End date</div>
        </div>
      </Styled.DetailsGrid>
    </Styled.Wrapper>
  );
};

export default ProjectDetails;
