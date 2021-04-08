import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.white};
  height: 372px;
  width: 280px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 4px 10px 25px rgba(63, 61, 86, 0.52);
  @media (max-width: 1000px) {
    margin: 5% 0;
  }

  @media (max-width: 500px) {
    background-color: transparent;
    box-shadow: none;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    grid-gap: 15px;
    height: 200px;
    margin: 5% auto;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: ${COLORS.light_black};
  @media (max-width: 500px) {
    font-size: 12px;
    text-align: left;
    color: ${COLORS.primary};
  }
`;

export const Icon = styled.img`
  text-align: center;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.gray};
  flex-direction: column;
  @media (max-width: 500px) {
    font-size: 11px;
    text-align: left;
    color: ${COLORS.white};
  }
`;

export const Section = styled.div``;
