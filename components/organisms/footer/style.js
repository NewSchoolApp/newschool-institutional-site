import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 35vh;
  background-color: ${COLORS.secondary};
`;

export const FlexContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Politics = styled.div`
  display: flex;
  grid-gap: 2%;
  width: 80%;
`;

export const PoliticsText = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  text-decoration-line: underline;
  color: ${COLORS.white};
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;
`;

export const Logo = styled.div`
  width: 45%;
`;

export const Copyright = styled.div`
  width: 45%;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: ${COLORS.white};
  text-align: right;
`;

export const Image = styled.img`
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
`;
