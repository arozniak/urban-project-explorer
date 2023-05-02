import { useClient } from "urql";
import { useEffect } from "react";
import ProjectsPanel from "../projects-panel";
import MapPanel from "../map-panel";
import { fetchNeighborhoods } from "../../services/data-fetch";
import { useAppDispatch } from "../../store/hooks";

import * as Styled from "./styles";

const App: React.FC<{}> = () => {
  console.clear();

  const dispatch = useAppDispatch();
  const apiClient = useClient();

  useEffect(() => {
    fetchNeighborhoods(dispatch, apiClient);
  }, [dispatch, apiClient]);

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Icon />
        <Styled.CityName>Boston Projects Explorer</Styled.CityName>
      </Styled.Header>
      <Styled.Body>
        <Styled.Section>
          <ProjectsPanel />
        </Styled.Section>
        <Styled.Section>
          <MapPanel />
        </Styled.Section>
      </Styled.Body>
    </Styled.Wrapper>
  );
};

export default App;
