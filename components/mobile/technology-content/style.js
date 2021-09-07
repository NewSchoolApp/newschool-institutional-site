import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

export const Flex = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 2%;
`;

export const Card = styled.div`  
  position: relative;
  filter: grayscale(100%);
  transition: 0.2s ease-in;

  &:hover {
    transition: 0.2s ease-in;
    filter: none;
  }
`;

export const CardAbsolute = styled.div`
  width: 100%;
  position: relative;  
`;

export const Image = styled.img`
  z-index: 1;
  position: relative;
  width: 100vw;
  height: auto;  
  filter: grayscale(100%);
  transition: 0.2s ease-out;
  &:hover {
    transition: 0.2s ease-in;
    filter: none;
  }
`;

export const ImageAbsolute = styled.img`
  z-index: 2;
  position: relative;  

  width: 100vw;
  height: auto;
  filter: brightness(80%);
  transition: 0.2s ease-out;

  &:hover {
    transition: 0.2s ease-in;
    filter: none;
  }
`;

export const ImageEducationFirst = styled.img`
  z-index: 5;
  position: absolute;
  top: -20px;
  left: 40px;  
  height: 100px;
`;

export const Icon = styled.img`
  z-index: 2;
  position: relative;
  left: 11px;
  top: -413px;
`;

export const Background = styled.img`
  z-index: 1;
  position: relative;
  left: 9%;
  top: -400px;
`;

export const Description = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Strong = styled.span`
  color: ${COLORS.light_black}
`

export const Title = styled.h1`
  font-weight: 800;
  font-size: 47px;
  line-height: 64px;
  text-align: center;
  color: ${COLORS.primary};  
  margin-bottom: 10%;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: #3f3d56;
  margin-bottom: 13%;
`;

export const Button = styled.button`
  padding: 10px 25px;
  width: 180px;
  color: ${COLORS.primary};
  list-style: none;
  border: 1px solid ${COLORS.PRIMARY};
  background-color: ${COLORS.white};
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
    cursor: pointer;
    transition: background-color 0.2s ease-in;
  }
`;
