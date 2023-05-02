import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
  background: ${(props) => props.theme.colors.background.darker};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const DashboardSection = styled.section`
  flex: 0 0 auto;
  height: 40%;
  max-height: 420px;
  overflow: auto;
  background: ${(props) => props.theme.colors.background.primary};
  border: 1px solid ${(props) => props.theme.colors.border.primary};
  margin-bottom: 1rem;
`;

export const ProjectListSection = styled.section`
  flex: 1 1 auto;
  min-height: 200px;
`;

export const CenteredContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
