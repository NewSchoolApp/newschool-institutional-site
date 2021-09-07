import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  margin-bottom: 10%;
`;

export const Flex = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 2%;
`;

export const Image = styled.img`
  z-index: 1;
  position: relative;
  width: 594;
  height: 430;
  border-radius: 6px;
  margin: 3%;
`;

export const ImageLogo = styled.img`
  z-index: 2;
  position: relative;
  width: 177px;
  height: 54px;
  margin: 1%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: #3f3d56;
  margin-bottom: 5%;
`;

export const Row = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
  padding: 5% 0;
  width: 100%;
  margin-bottom: 5%;
`;

export const H2Title = styled.h2`
  font-size: 32px;
  line-height: 52px;
  font-weight: 800;
`;

export const H2TitleStrong = styled.strong`
  font-size: 32px;
  line-height: 52px;
  font-weight: 800;
  color: ${COLORS.primary};
`;

export const Video = styled.video`
  width: 100%;
  position: relative;
  outline: none;
  border-radius: 15px;
  margin-top: 5%;  
`;
