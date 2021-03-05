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
  width: 69.8%;
  height: 13.7%;
  
`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 34px;
  color: #3f3d56;
  
`;

export const Video = styled.video`
  width:69.7%;
  height: 52.4%;
  position: relative;
  outline: none;
  border-radius: 10px;
`;