import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
  height: calc(100vh - 71px);

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: 100%;
    margin-bottom: 100px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 450px;
  height: 100%;
  width: 50%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;

    margin-top: 100px;
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: 56px;
  line-height: 56px;

  span {
    color: ${colors.blue};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 500;

  a {
    color: ${colors.blue};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  span {
    height: 450px;
    width: 450px;
    border-radius: 50%;
    border-top-color: ${colors.blue};
    box-shadow: 0 -4px 5px ${colors.blue};
    animation: is-rotate 5s infinite ease-in-out;
    position: absolute;

    @keyframes is-rotate {
      to {
        transform: rotate(1turn);
      }
    }
  }

  div {
    height: 450px;
    width: 450px;
    border-radius: 50%;

    overflow: hidden;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;

    span,
    div {
      height: 250px;
      width: 250px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Social = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 16px;
  font-size: 40px;

  a {
    color: ${colors.white};
    transition: 0.3s ease-in-out;
  }

  a:hover {
    color: ${colors.blue};
    transition: 0.3s ease-in-out;
  }
`;
