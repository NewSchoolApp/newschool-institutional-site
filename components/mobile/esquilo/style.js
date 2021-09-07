import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  justify-content: center;  
  padding: 10%;
  margin-bottom: 5%;
  float: left;
`;

export const Flex = styled.div`  
  padding: 3%;    
  grid-gap: 2%;
  float: left;
`;

export const Card = styled.div`
  width: 100%;
  position: relative;
`;

export const Image = styled.img`
  height: 150px;
  margin-left: 30%;
`;

export const TextDescription = styled.p`
  font-size: 14px;
  line-height: 27px;
  color: #3f3d56;
  margin-bottom: 10%;  
  margin-top: 5%;  
  width: 100%;
  text-align: center;  
`;

export const Icon = styled.img`
  z-index: 2;
  position: relative;
  width: 48px;
  height: 48px;

`;

export const Background = styled.img`
  z-index: 1;
  position: relative;
  left: 9%;
  top: -400px;
`;

export const Description = styled.div`
  height: 100px;  
  align-items: left;
  justify-content: center;  
  position: relative;  
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  color: ${COLORS.primary};  
  margin-bottom: 5%;  
`;

export const Text = styled.p`
font-size: 14px;
line-height: 27px;
color: #3f3d56;
margin-bottom: 10%;
margin-top: 1%;
width: 100%;
text-align: center;
position: relative;
float: left;
`;


export const TextTitle = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: #3f3d56;
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

export const Row = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
  padding: 1% 3%;
  
  
`;

export const TextRight = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: #3f3d56;
  display:block;
  margin-left: 5%;
  

`;