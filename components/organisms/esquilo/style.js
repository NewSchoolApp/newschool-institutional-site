import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2% 10%;
  margin-bottom: 5%;
`;

export const Flex = styled.div`
  max-width: 1400px;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 2%;
`;

export const Card = styled.div`
  width: 45%;
  position: relative;
`;

export const Image = styled.img`
height: 50%;
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
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 47px;
  line-height: 64px;
  text-align: left;
  color: ${COLORS.primary};

  margin-bottom: 5%;
  margin-top: -4%;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 27px;
  color: #3f3d56;
  margin-bottom: 5%;
`;

export const TextDescription = styled.p`
  font-size: 14px;
  line-height: 27px;
  color: #3f3d56;
  margin-bottom: 5%;
  width: 70%
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