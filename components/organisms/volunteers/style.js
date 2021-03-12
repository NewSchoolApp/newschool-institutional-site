import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2%;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    height: 100%;
  }
`;

export const Partners = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 2%;
  flex-wrap: wrap;
`;
export const Image = styled.img`
  width: 176px;
  margin: 1% 0;
  height: 176px;
  border-radius: 16px;
  filter: grayscale(100%);
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
