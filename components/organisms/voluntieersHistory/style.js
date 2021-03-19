import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  margin: 0 auto 1%;
  max-width: 1400px;
`;

export const Image = styled.img`
  left: 9%;
  display: block;
  width: 488px;
  height: 488px;
`;

export const ImageAbsolute = styled.img`
  padding: 10%;
  filter: grayscale(100%);
  transition: 0.3s filter;
  width: 488px;
  height: 488px;

  &:hover {
    filter: none;
    transition: 0.3s filter;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 1200px;
  height: 600px;
  padding: 9% 0;
`;

export const Title = styled.h1`
  font-weight: bold;
  line-height: 40px;
  color: ${COLORS.white};
  width: 90%;
  font-size: 47px;
  line-height: 70px;
  padding: 0 5%;

`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 34px;
  font-weight: 500;
  color: ${COLORS.gray};
  margin: 0 5% 5%;
  padding: 0 5%;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: ${COLORS.gray};
  margin: 0 5%;
  padding: 0 5%;
`;

export const Row = styled.div`
  width: 100%;
  margin: 0 auto 5%;
  max-width: 1019px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1%;
`;
