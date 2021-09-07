import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url("./banner-doacao.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Image = styled.img`
  display: flex;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  color: ${COLORS.white};
  margin: 15% 0 0;
  width: 50%;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: ${COLORS.white};
  width: 80%;
`;

export const LinkDonate = styled.a`
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.white};
    color: ${COLORS.primary};
    transition: 0.2s ease-in;
    cursor: pointer;
  }
`

export const Button = styled.button`
  width: 175px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1.25px solid #ffffff;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${COLORS.white};
  background-color: transparent;
  outline: none;
  transition: 0.2s ease-out;
  margin-top: 1.5%;

  &:hover, &:hover a {
    background-color: ${COLORS.white};
    color: ${COLORS.primary};
    transition: 0.1s ease-in;
    cursor: pointer;
  }
`;

export const Section = styled.div`
  width: 30%;
  margin: 88px auto 0 10%;
`;
