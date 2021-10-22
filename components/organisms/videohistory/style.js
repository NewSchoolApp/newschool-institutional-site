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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-gap: 2%;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 47px;
  line-height: 64px;
  text-align: center;
  color: ${COLORS.primary};

  margin-bottom: 5%;
  margin-top: -4%;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 24px;
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
`;
