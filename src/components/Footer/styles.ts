import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.footer`
  margin-top: 150px;
  padding: 32px;
  text-align: center;

  a {
    font-weight: bold;
    color: ${colors.greyBlack};
    transition: 0.3s ease-in-out;
  }

  a:hover {
    color: ${colors.white};
    transition: 0.3s ease-in-out;
  }
`;
