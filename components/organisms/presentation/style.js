import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  position: relative;
  max-width: 1400px;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    margin-top: -75px;
  }
`;

export const Section = styled.div`
  width: 50%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 500px) {
    width: 90%;
    margin: 0 5%;
    order: 2;
  }
`;

export const SectionVideo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 500px) {
    width: 90%;
    margin: 0 5% 10%;
    order: 1;
  }
`;

export const VideoBordered = styled.div`
  margin: 0 2%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  color: ${COLORS.primary};
  font-weight: 800;
  font-size: 47px;
  margin-bottom: 48px;
  margin-top: 0;
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 140%;
    width: 100%;
    margin-bottom: 10%;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`;

export const Message = styled.p`
  color: ${COLORS.primary};
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Video = styled.video`
  width: 65ch;
  position: relative;
  outline: none;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 90%;
    margin: 0 5%;
  }
`;

export const Button = styled.button`
  color: red;
  position: relative;
  bottom: 34%;
  left: 43%;
  width: 100px;
  background-color: transparent;
  border: none;
  outline: none;
`;
