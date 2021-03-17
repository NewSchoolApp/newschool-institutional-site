import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto 15%;
  height: 70vh;
  position: relative;
  max-width: 1400px;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    height: 100%;
  }
`;

export const Section = styled.div`
  margin: 0 1%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

export const Video = styled.video`
  width: 65ch;
  position: relative;
  outline: none;
  border-radius: 10px;
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
