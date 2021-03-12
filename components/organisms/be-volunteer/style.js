import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/be-volunteer-background.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Flex = styled.div`
  padding: 5px;
  margin-top: -10%;
`;

export const Title = styled.h1`
  color: ${COLORS.white};
  font-weight: 800;
  font-size: 47px;
  line-height: 130%;
  text-align: center;
`;

export const Text = styled.h6`
  width: 60%;
  margin: 3% auto;
  text-align: center;
  color: ${COLORS.white};
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 3%;
  text-decoration: underline;
  color: ${COLORS.link};
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  cursor: pointer;
  filter: none !important;
`;
