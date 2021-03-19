import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Image = styled.img`
  width: 100vw;
  overflow: hidden;
  position: absolute;
  margin-top: -8%;
`;

export const Container = styled.div``;
export const TopicTitle = styled.h6`
  font-weight: 700;
`;

export const Section = styled.div`
  width: 80%;
  margin: 2% auto 5%;
`;

export const Title = styled.h1`
  color: ${COLORS.primary};
  font-style: normal;
  font-weight: 800;
  font-size: 47px;
  line-height: 130%;
  margin-bottom: 3%;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`
