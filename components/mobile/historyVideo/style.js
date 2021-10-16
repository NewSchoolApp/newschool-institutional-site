import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  padding: 3%;
 
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Flex = styled.div`
  width: 99%;
  max-width: 1400px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  grid-gap: 2%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100;
  height: 100%;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0px;
  
  
`;

export const Video = styled.video`
  width: 320px;
  height: 220px;
  position: relative;
  outline: none;
  border-radius: 10px;
  margin-bottom: 20%;
`;
