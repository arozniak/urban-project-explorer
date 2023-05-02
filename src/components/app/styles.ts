import styled from "styled-components";

import UrbanModelIcon from "calcite-ui-icons-react/UrbanModelIcon";

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  text-align: center;
`;

export const Header = styled.header`
  height: 35px;
  font-size: 20px;
  padding: 0.5rem 1rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.primary};
`;

export const CityName = styled.h1`
  margin: 0;
  font-size: 20px;
`;

export const Icon = styled(UrbanModelIcon)`
  margin-bottom: 4px;
`;

export const Body = styled.main`
  display: flex;
  height: calc(100% - 35px);
`;

export const Section = styled.div`
  width: 50%;
`;
