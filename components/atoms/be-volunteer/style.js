import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Image = styled.img`
 width: 55%;
 max-width: 1400px;
 position: absolute;
  z-index: 1;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin:  0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
