import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 0 5%;
`;

export const Image = styled.img`
  left: 9%;
  display:block;
  width: 488px;
  height: 488px;

`;

export const ImageAbsolute = styled.img`
  filter: grayscale(100%);
  transition: 0.3s filter;
  width: 488px;
  height: 488px;

  &:hover {
    filter: none;
    transition: 0.3s filter;
  }
`;

export const BackgroundDivEsq = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
  display:block;
  z-index: 0;
  width: 488px;
  height: 488px;
`;

export const ImageDivEsq = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
  display:block;

  width: 488px;
  height: 488px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
`;

export const BackgroundDivDir = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  display:block;
  z-index: 0;
  width: 488px;
  height: 488px;
`;

export const ImageDivDir = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display:block;

  width: 488px;
  height: 488px;
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
  font-size: 24px;
  line-height: 34px;
  font-weight: 500;
  
  margin-bottom: 3%;
  color: ${COLORS.gray};
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: ${COLORS.gray};
  
  margin-bottom: 0;
`;

export const Row = styled.div`
  width: 100%;
  justify-content: space-between;
  display: inline-flex;
  align-items: center;
  margin-bottom: 5%;

`;

export const Column = styled.div`
  width: 40%;
  height: 70%;

`;









