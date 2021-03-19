import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Image = styled.img`
  position: absolute;
  top: 78%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
