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
export const Strong = styled.strong`
  color: ${COLORS.primary};
  font-weight: 700;
  font-size: 18px;
`;
export const Row = styled.div`
 
  position: relative;
  
  justify-items: center;
  width: 100%;
  height: 50%;
  margin-bottom: 5%;
`;
export const TextBottom = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 36px;
  color: #3f3d56;
  margin-bottom: 5%;
`;
export const StrongBottom = styled.p`
  color: ${COLORS.primary};
  font-weight: 600;
  font-size: 20px;
  
`;