import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.section`
  display: flex;
  gap: 32px;
  align-items: start;
  justify-content: space-between;
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 80px 32px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const ContainerExperience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 50%;
`;

export const ExperienceItem = styled.article`
  display: flex;

  h3 {
    color: ${colors.blue};
  }
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: 56px;
  line-height: 66px;
  width: 50%;

  span {
    color: ${colors.blue};
  }
`;
