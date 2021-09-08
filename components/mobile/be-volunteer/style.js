import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url("/be-volunteer-background.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Flex = styled.div`
  padding: 5px;  
  justify-content: flex-start;
`;

export const Title = styled.h1`
  color: ${COLORS.white};
  font-weight: 800;
  font-size: 27px;
  line-height: 100%;
  text-align: center;  
  height: 20vh;
`;

export const Text = styled.h6`
  width: 100%;
  margin: 3% auto;
  text-align: center;
  color: ${COLORS.white};
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  height: 40vh;
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 3%;
  text-decoration: underline;
  color: ${COLORS.link};
  font-weight: 800;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  cursor: pointer;
  filter: none !important;
  height: 20vh;
`;
