import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  padding: 3rem;
  position: relative;
  text-align: start;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 10px;
  inset-inline-start: 10px;
  border: none;
  background: ${(props) => props.theme.colors.brand.primary};
  cursor: pointer;
  padding-top: 3px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.colors.background.primary};
`;

export const Image = styled.img`
  margin: -4rem -4rem 2rem -4rem;
  width: calc(100% + 8rem);
  max-width: initial;
  height: 35%;
  aspect-ratio: 3.236 / 2;
  object-fit: cover;
`;

export const ProjectName = styled.h1`
  font-size: 24px;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
`;

export const Owner = styled.p`
  margin-bottom: 2rem;
`;

export const OwnerLabel = styled.span`
  font-weight: bold;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  gap: 2rem;
`;

export const DetailsContent = styled.div<{ $color?: string }>`
  font-weight: bold;
  font-size: 28px;
  color: ${(props) => props.$color};
`;
