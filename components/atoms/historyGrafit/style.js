import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Image = styled.img`
    width: 98.8vw;
    overflow: hidden;
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 95px;`;

export const Container = styled.div`
  @media (max-width: 1000px) {
   display: none;
  }
`

