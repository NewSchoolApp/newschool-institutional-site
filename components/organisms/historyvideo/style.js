import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0%;
`;

export const Flex = styled.div`
  width: 70%;
  max-width: 1400px;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-gap: 2%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 99.8%;
  height: 13.7%;
  margin-bottom: 60px;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 22px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0px;
`;

export const Video = styled.video`
  width: 69.7%;
  height: 52.4%;
  position: relative;
  outline: none;
  border-radius: 10px;
  margin-bottom: 2%;
`;
export const TextBottom = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 36px;
  color: #3f3d56;
  margin-bottom: 5%;
`;

export const Row = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
  padding: 2% 5% 5%;
  width: 70%;
  margin-bottom: 5%;
`;


export const Strong = styled.strong`
  color: ${COLORS.primary};
  font-weight: 700;
  font-size: 18px;
`;

export const StrongBottom = styled.p`
  color: ${COLORS.primary};
  font-weight: 600;
  font-size: 24px;
  
`;
