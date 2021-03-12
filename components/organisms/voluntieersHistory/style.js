import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 5%;
`;

export const Image = styled.img`
  left: 9%;
  display: block;
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

export const ImageContainer = styled.div`
  position: relative;
  width: 60%;
  height: 600px;
  padding: 6% 12%;
`;

export const Title = styled.h1`
  font-weight: bold;
  line-height: 40px;
  color: ${COLORS.white};
  margin: 0 5% 0;
  width: 60%;
  font-size: 47px;
  line-height: 70px;
`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 34px;
  font-weight: 500;
  padding: 0 5%;
  margin-bottom: 3%;
  width: 60%;
  color: ${COLORS.gray};
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  width: 60%;
  color: ${COLORS.gray};
  margin-bottom: 0;
  padding: 0 5%;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
`;

export const Column = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
