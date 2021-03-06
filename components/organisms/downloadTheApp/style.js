import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  background-image:url('grafit.png');
`;

export const Flex = styled.div `
  width: 100%;
  max-width: 1400px;
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 2%;
`;

export const Image = styled.img `
  z-index: 1;
  position: relative;
  width: 904px;
  height: 713px;
  border-radius: 6px;
  margin: 1%;
  right:0;
  top: 14%;
  position: absolute;
  flex:auto;
  transform: rotate(-6.69deg);  
`;

export const ImageLogo = styled.img `
  z-index: 2;
  position: relative;
  width: 177px;
  height: 54px;  
  margin: 1%;
`;

export const Description = styled.div `
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  
`;

export const Column = styled.div`
    display: flex;
    flex-direction:column;
    align-items: left;
    justify-content: center;
`;

export const Text = styled.p `
  font-size: 24px;
  line-height: 34px;
  font-weight: 500;
  color: #3f3d56;
  margin-bottom: 5%;
  color:${COLORS.primary};
`;

export const Title = styled.p `
  font-family: Montserrat;
  font-size: 76px;
  line-height: 102px;
  font-weight: 700;
  margin-bottom: 1%;
  color:${COLORS.primary};
`;

export const Row = styled.div `
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
  padding: 1% 1% 1%;
  width: 100%;
  
  `;
