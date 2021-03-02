import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  background-color: ${COLORS.light_gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

export const Partners = styled.div`
  width: 80%;
  max-width: 1400px;
  margin: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 2%;
  flex-wrap: wrap;
`;
export const Image = styled.img`
  height: 60px;
  margin-bottom: 4%;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: 0.2s ease-out;

  &:hover {
    filter: none;
    opacity: 1;
    transition: 0.2s ease-in;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 47px;
  line-height: 64px;
  text-align: center;
  color: ${COLORS.primary};

  margin-bottom: 5%;
`;
