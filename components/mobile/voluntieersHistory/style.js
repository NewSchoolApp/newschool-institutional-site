import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;  
  padding: 0 0%;  
`;

export const Image = styled.img`
  left: 0%;
  display: block;  
`;

export const ImageAbsolute = styled.img`
  padding: 10%;
  width: 100%;  
  filter: grayscale(100%);
  transition: 0.3s filter;    

  &:hover {
    filter: none;
    transition: 0.3s filter;
  }
`;

export const ImageContainer = styled.div`
  position: relative;  
  padding: 5% 0;  
`;

export const Title = styled.h1`
  font-weight: bold;
  line-height: 40px;
  color: ${COLORS.white};
  width: 100%;
  font-size: 47px;
  line-height: 70px;
  padding: 0 5%;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 450;
  margin-left: 1%;
  text-align: center;
  color: ${COLORS.gray};    
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  color: ${COLORS.gray};
  margin-left: 1%;  
`;

export const Column = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;  
`;
