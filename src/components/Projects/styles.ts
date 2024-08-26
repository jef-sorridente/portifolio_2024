import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${colors.blue};
  padding: 80px 32px;
  border-radius: 0 0 16px 16px;
`;

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: 56px;
  width: 100%;
  text-align: center;
  span {
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.tablet}) {
    text-align: start;
  }
`;
