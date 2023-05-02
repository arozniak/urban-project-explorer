import styled from "styled-components";

import "@esri/calcite-components/dist/components/calcite-input-text";
import { CalciteInputText } from "@esri/calcite-components-react";

export const Wrapper = styled.div`
  text-align: left;
  height: calc(100% - 2rem - 32px);
  overflow-y: scroll;
`;

export const Table = styled.table`
  background: ${(props) => props.theme.colors.background.primary};
  border-spacing: 0;
  width: 100%;

  & td,
  & th {
    font-size: ${(props) => props.theme.fontSize};
    font-weight: normal;
    padding: 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.border.primary};
  }

  & th {
    cursor: pointer;
  }
`;

export const TableHeader = styled.thead`
  border-bottom: 2px solid #ccc !important;
  position: sticky;
  top: 0;

  background-color: ${(props) => props.theme.colors.background.darker};
`;

export const ColumnTitle = styled.span`
  margin-inline-end: 5px;
`;

export const Count = styled.div<{ $color: string }>`
  font-size: 40px;
  font-weight: 600;
  color: ${(props) => props.$color};
`;

export const SearchToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
`;

export const ScreenReaderOnly = styled.div`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const SearchInput = styled(CalciteInputText)`
  width: 50%;
`;
