import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto 15%;
  height: 40vh;
  position: relative;  
  ;
`;

export const Section = styled.div`
  margin: auto 5% 0;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
`;