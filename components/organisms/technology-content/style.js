import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/background-know-us.png");
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

export const Text = styled.p`
  margin-top: -3%;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: ${COLORS.white};
`;

export const InputContainer = styled.div`
  width: 125%;
  margin-left: -12%;
`;

export const Input = styled.input`
  width: 79%;
  border: 1px solid ${COLORS.white};
  outline: none;
  padding: 6px 10px;
  background: transparent;
  color: ${COLORS.white};

  ::placeholder {
    color: ${COLORS.white};
  }
`;

export const Button = styled.button`
  padding: 6.5px 25px;
  margin-left: -1px;
  margin-top: 4%;
  text-transform: uppercase;
  border: none;
  color: ${COLORS.primary};
  border-radius: 0px 4px 4px 0px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  outline: none;

  &:hover {
    filter: brightness(80%);
  }
`;
