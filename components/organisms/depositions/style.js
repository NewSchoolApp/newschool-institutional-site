import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  padding: 0 5%;
  margin-bottom: 10%;
`;

export const Image = styled.img``;

export const ImageHover = styled.img`
  display: flex;
  cursor: pointer;
  margin-right: 30%;
  filter: grayscale(100%);
  transition: 0.3s filter;

  &:hover {
    filter: none;
    transition: 0.3s filter;
  }
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
  width: 75%;
  margin-bottom: 3%;
  width: 100%;
`;

export const BoldText = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
  width: 75%;
  margin-bottom: 3%;
  width: 100%;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.white};
  width: 80%;
  margin-bottom: 0;
`;

export const Video = styled.video`
  width: 75ch;
  position: relative;
  outline: none;
  border-radius: 10px;
  margin-left: 40%;
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

export const Section = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionCenter = styled.div`
  height: 70%;
  width: 35%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  margin: 5% auto;
`;
