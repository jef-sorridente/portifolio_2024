import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.article`
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 16px;
  border-radius: 8px;
`;

export const Main = styled.main`
  margin: 8px 0;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

export const Header = styled.header`
  h3 {
    color: ${colors.blue};
    text-align: center;
    margin: 8px 0;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 60%;

    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-weight: 600;
    text-transform: capitalize;
  }

  li {
    font-size: 14px;
    border: 1px solid ${colors.greyBlack};
    padding: 2px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      border: 1px solid ${colors.blue};
      background-color: ${colors.blue};
      color: ${colors.white};
      transition: 0.3s ease-in-out;
    }
  }

  div {
    display: flex;
    gap: 8px;

    button {
      border: none;
      padding: 8px;
      border-radius: 8px;
      width: 60px;
      cursor: pointer;
      font-weight: bold;
      background-color: ${colors.blue};
      color: ${colors.white};
    }
  }

  a {
    color: ${colors.white};
  }
`;
