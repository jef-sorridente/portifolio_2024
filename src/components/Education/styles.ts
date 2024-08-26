import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.section`
  display: flex;
  gap: 32px;
  align-items: start;
  justify-content: space-between;
  background-color: ${colors.greyBlack};
  padding: 80px 32px;
  border-radius: 16px 16px 0 0;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const ContainerEducation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 50%;
`;

export const EducationItem = styled.article`
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

export const Line = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-right: 8px;

  div {
    width: 3px;
    height: 100%;
    background-color: ${colors.white};
  }
`;
