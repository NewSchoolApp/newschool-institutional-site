import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div `
  width: 100%;
  display: flex;
  margin-top: 5%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;
  padding: 2%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Row = styled.div `
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-items: center;
  padding: 1% 1% 1%;  
  width: 100%;
`;

export const Title = styled.p `
  font-family: 'Montserrat';
  font-size: 30px;
  line-height: 61px;
  font-weight: 800;
  margin-bottom: 1%;
  color:${COLORS.primary};
`;

export const Subtitle = styled.text`
  font-size: 29px;
  line-height: 28px;
  font-weight: 700;
  font-family: 'Montserrat';
  color: ${COLORS.primary};
  margin-bottom: 10%;
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
  width: 100px;
  height: auto;  
  margin: 1%;
  margin-right: 5%;
`;
