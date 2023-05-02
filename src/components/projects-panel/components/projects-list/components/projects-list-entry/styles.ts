import styled from "styled-components";

export const Icon = styled.td`
  width: 5%;
  min-width: 20px;
`;

export const Name = styled.td`
  width: 40%;
  cursor: pointer;
`;

export const Neighborhood = styled.td`
  width: 20%;
  cursor: pointer;
`;

export const Date = styled.td`
  width: 15%;
`;

export const DetailsLink = styled.td`
  width: 5%;
`;

export const MoreButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    text-decoration: underline;
  }
`;
