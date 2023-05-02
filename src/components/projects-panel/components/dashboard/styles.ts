import styled, { css } from "styled-components";
import UnstyledChart from "./components/chart";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Statistics = styled.div`
  text-align: left;
  margin: 1rem;
  display: flex;
  gap: 2rem;
  flex: 0 0 auto;
`;

export const StatsButton = styled.button<{ $active: boolean }>`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.25rem 0.75rem;

  &:hover {
    background: ${(props) => props.theme.colors.background.hover};
  }

  & label {
    cursor: pointer;
    margin: 0;
  }

  ${(props) =>
    props.$active &&
    css`
      border: 1px solid ${(props) => props.theme.colors.border.primary};
      background: ${(props) => props.theme.colors.background.darker};
    `}
`;

export const Count = styled.div<{ $color: string }>`
  font-size: 40px;
  font-weight: 600;
  color: ${(props) => props.$color};
`;

export const Chart = styled(UnstyledChart)`
  flex: 1 1 auto;
`;
