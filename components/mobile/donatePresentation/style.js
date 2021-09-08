import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 415px;
  margin: 0 auto 15%;
  height: 40vh;
  position: relative;
  max-width: 1400px;
  ;
`;

export const Section = styled.div`
  margin: auto 10% 0;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 19px;
`;