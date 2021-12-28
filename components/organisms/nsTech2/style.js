import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 1400px
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0%;
  @media (max-width: 1000px) {
    margin-bottom: 5%;
    
  }
`;

export const Flex = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 2%;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    background: none;
    height: 100%;
  }
`;

export const Card = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    background: none;
    width: 100%;
    margin-bottom: 5%;
  }
`;

export const Image = styled.img`
  z-index: 2;
  position: relative;
  width: 1400px;
  height: 10p%;
  filter: grayscale(100%);
  transition: 0.2s ease-out;

  &:hover {
    transition: 0.2s ease-in;
    filter: none;
  }

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    background: none;    
   
    width: 98%;
    margin-left: 0% !important;
    filter: none
  }
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
 
`;

export const Description = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    background: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
