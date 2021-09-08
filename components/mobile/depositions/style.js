import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100vw;    
  display: flex;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImageHover = styled.img`
  display: flex;
  cursor: pointer;  
  filter: grayscale(100%);
  transition: 0.3s filter;

  &:hover {
    filter: none;
    transition: 0.3s filter;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  line-height: 40px;
  color: ${COLORS.white};
  margin: 0 0 0 0;
  width: 100%;
  font-size: 47px;
  line-height: 70px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 27px;  
  margin-bottom: 3%;
  width: 100%;
`;

export const BoldText = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 3%;  
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.white};
  width: 100%;
  margin-bottom: 0;
`;

export const Video = styled.video`
  width: 100vw;
  position: relative;
  outline: none;
  border-radius: 10px;  
`;

export const Button = styled.p`
  color: ${COLORS.white};
  font-size: 18px;
  line-height: 27px;
  color: ${COLORS.white};
  text-decoration: underline;
  margin-top: 3.5%;
  transition: 0.2s filter;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
    transition: 0.2s filter;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;  
`;

export const Row = styled.div`
  display: flex;  
  width: 100%;
  justify-content: center;  
`;