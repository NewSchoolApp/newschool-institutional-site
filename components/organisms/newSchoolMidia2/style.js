import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
  }
`;

export const Partners = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  justify-content: center;
  grid-template-columns: 176px 176px 176px 176px 176px 176px;
  grid-gap: 2%;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;
export const Image = styled.img`
  width: 176px;
  margin: 1% 0;
  height: 176px;
  object-fit: cover;
  border-radius: 16px;
  filter: grayscale(100%);
  &:hover {
    filter: none;
    opacity: 1;
    transition: 0.2s ease-in;
  }
`;

export const text = styled.h1`
font-size: 0;
font-family: sans-serif;
font-weight: bold;
text-transform: uppercase;
color: #fff;
text-decoration: none;
transition: all .5s ease-in-out;


`;
