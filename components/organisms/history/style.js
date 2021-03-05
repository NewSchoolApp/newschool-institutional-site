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
  max-width: 1400px;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 2%;
`;

export const Image = styled.img`
  z-index: 2;
  position: relative;
  width: 592px;
  height: 400px;
  
`;

export const Description = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 28.8px;
  color: #3f3d56;
  margin-bottom: 5%;
`;

export const TextBottom = styled.p`
  font-size: 24px;
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
  font-weight: 500;
  font-size: 24px;
`;