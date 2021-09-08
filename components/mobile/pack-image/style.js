import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.white};  
  width: 100%;
  padding: 20px;
  border-radius:15px;
  position: relative;
  
  `;
  
  export const IconDiv = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
  display:block;
  `;
  
  export const Icon = styled.img`
  text-align: center;
  width: 72px;
  height: 72px;
  `
  
  export const BackgroundDiv = styled.div`
  position: relative;
  left: 5px;
  bottom: 5px;
  display:block;
  z-index: 1;
  `;
  export const Background = styled.img`
  left: 9%;
  width: 487px;
  height: 370px;
  display:block;
`;

export const ImageDiv = styled.div`
position: absolute;
right: 5px;
top: 5px;
display:block;
z-index:2;
box-shadow: 4px 10px 25px rgba(63, 61, 86, 0.52);
`;

export const Image = styled.img`
  z-index: 2;
  display:block;
  position: relative;
  width: 100%;  
  filter: grayscale(100%);
  transition: .2s ease-out;


  &:hover {
    transition: .2s ease-in;
    filter: none;
  }
`;

