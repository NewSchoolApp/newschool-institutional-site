import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;  
`;

export const Flex = styled.div`
  width: 100%;
   padding: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 2%;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 30px;  
  text-align: center;
  color: ${COLORS.primary};  
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0px;
`;

export const Video = styled.video`
  width: 100%;
  position: relative;
  outline: none;
  border-radius: 15px;
  margin-top: 5%;  
`;
