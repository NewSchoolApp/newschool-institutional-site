import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;
  padding: 2%;
  background-image:url('grafit-bg.svg');
  background-size: 100% 100vh;
  background-repeat: no-repeat;
  background-position: left;
`;

export const Flex = styled.div `
  width: 100%;  
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 2%;
`;

export const Column = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

export const ImageLogo = styled.img `
  z-index: 2;
  position: relative;
  width: 177px;
  height: 54px;  
  margin: 1%;
`;

export const Description = styled.div `  
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;  
`;

export const Text = styled.p `
  font-size: 16px;
  line-height: 34px;
  font-weight: 500;
  color: #3f3d56;  
  color:${COLORS.primary};
`;

export const Title = styled.p `
  font-family: Montserrat;
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;  
  color:${COLORS.primary};
`;

export const Row = styled.div `
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
  padding: 1% 1% 1%;  
  `;

export const RowLine = styled.div `  
  position: relative;
  align-items: center;  
  padding: 1% 1% 1%;   
  `;

export const Image = styled.img `
  z-index: 1;
  position: relative;
  width: 100vw;
  height: auto;
  border-radius: 6px;    
  flex:auto;
  transform: rotate(-6.69deg);  
`;