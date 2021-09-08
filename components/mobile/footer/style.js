import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 15vh;
  background-color: ${COLORS.secondary};
  z-index: 999;  
`;

export const FlexContainer = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;  
`;

export const Logo = styled.div`
  width: 100%;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: ${COLORS.white};
  text-align: right;
`;

export const Image = styled.img`
  cursor: pointer;
  width: 100%;
  &:hover {
    filter: brightness(80%);
  }
`;
