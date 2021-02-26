import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10vh;
  background-color: ${COLORS.primary};
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
`;



export const Image = styled.img``;
