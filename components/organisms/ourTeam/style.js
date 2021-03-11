import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;
  padding: 2%;
`;

export const Flex = styled.div `
  width: 100%;
  max-width: 1400px;
  padding: 1%;
  margin-top: 82px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-gap: 2%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction:column;
  align-items: left;
  justify-content: center;
  width: 100%;
`;

export const Row = styled.div `
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-items: center;
  padding: 1% 1% 1%;
  margin-bottom: 2%;
  width: 100%;
  height: 350px;;  
`;

export const Title = styled.p `
  font-family: 'Montserrat';
  font-size: 47px;
  line-height: 61px;
  font-weight: 800;
  margin-bottom: 1%;
  color:${COLORS.primary};
`;

export const Subtitle = styled.text`
  font-size: 29px;
  line-height: 35px;
  font-weight: 700;
  font-family: 'Montserrat';
  color: ${COLORS.primary};
`;

export const Text = styled.p `
  font-size: 18px;
  line-height: 27px;
  font-family: 'Roboto';
  color: #484848;
  margin-bottom: 5%;
`;

export const ImageLogo = styled.img `
  z-index: 2;
  position: relative;
  width: 178px;
  height: 178px;  
  margin: 1%;
  margin-right: 5%;
`;
