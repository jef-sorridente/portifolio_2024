import styled from "styled-components";
import { breakpoints, colors } from "../../styles";
import { animated } from "@react-spring/web";

export const Container = styled.header`
  padding: 16px 0;
  position: sticky;
  top: 0;
  background-color: ${colors.black};

  backdrop-filter: blur(5px);
  z-index: 1;

  h1 {
    text-transform: capitalize;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  h1:hover {
    color: ${colors.blue};
    transition: 0.3s ease-in-out;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const List = styled(animated.ul)`
  display: flex;
  gap: 16px;
  overflow: hidden;

  li {
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  li:hover {
    color: ${colors.blue};
    transition: 0.3s ease-in-out;
  }

  a {
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: start;
    top: 64px;
    left: 0px;
    padding: 32px 5%;

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
      -45deg,
      ${colors.blue},
      ${colors.black} 40%
    );
  }
`;
