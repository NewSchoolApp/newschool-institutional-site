import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  @media (max-width: 1000px) {
    margin-bottom: 5%;
  }
`;

export const Flex = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 5%;
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
  width: 45%;
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
  width: 487px;
  height: 487px;
  filter: grayscale(100%);
  transition: 0.2s ease-out;

  &:hover {
    transition: 0.2s ease-in;
    filter: none;
  }

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    background: none;    
    margin-top: 20%;
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
  top: -400px;
`;

export const Description = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
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

export const Title = styled.h1`
  font-weight: 800;
  font-size: 24px;
  line-height: 44px;
  text-align: left;
  color: ${COLORS.primary};

  @media (max-width: 1000px) {
    margin-left:-80px;
    font-size: 27px;
  }

  margin-bottom: 5%;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: #3f3d56;
  margin-bottom: 8%;
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
