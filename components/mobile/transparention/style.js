import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 0 5%;
  background-color: ${COLORS.primary};
`;

export const Image = styled.img`
  display: flex;
  cursor: pointer;
`;

export const ImageAbsolute = styled.img`
  display: flex;
  cursor: pointer;
  z-index: 1;
  top: 0;
  right: 0.9%;
  position: absolute;
  filter: grayscale(100%);
  transition: 0.3s filter;

  &:hover {
    filter: none;
    transition: 0.3s filter;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-weight: bold;
  line-height: 40px;
  color: ${COLORS.white};
  margin: 0 0 5% 0;
  width: 50%;
  font-size: 47px;
  line-height: 70px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: ${COLORS.white};
  width: 75%;
  margin-bottom: 3%;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.white};
  width: 80%;
  margin-bottom: 0;
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

export const Section = styled.div``;

export const Column = styled.div`
  width: 100%;  
  flex-direction: row;
`;
