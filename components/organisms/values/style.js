import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url('./favela.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    background-size: cover;
    height: 100%;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

