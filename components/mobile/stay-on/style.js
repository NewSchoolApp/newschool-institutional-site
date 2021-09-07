import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;  
  height: 161px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/background-know-us.png");
  background-repeat: no-repeat;
  background-size: 100%;
  margim-bottom: 0px;
`;

export const Flex = styled.div`
  padding: 5px;  
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${COLORS.white};
  font-weight: 800;
  font-size: 37px;  
  text-align: center;
`;

export const Text = styled.p`
  font-weight: 200;
  font-size: 16px;
  line-height: 34px;
  text-align: center;
  color: ${COLORS.white};
  justify-content: center;
`;

export const InputContainer = styled.div`
  width: 100%;  
  justify-content: center;
  display:flex;
  flex-direction: row;
`;

export const Input = styled.input`  
  border: 1px solid ${COLORS.white};
  outline: none;
  padding: 5.5px 10px;
  background: transparent;
  color: ${COLORS.white};

  ::placeholder {
    color: ${COLORS.white};
  }
`;

export const Button = styled.button`
  padding: 10px 25px;
  text-transform: uppercase;
  border: none;
  border-top: 1px solid ${COLORS.white};
  color: ${COLORS.primary};
  border-radius: 0px 4px 4px 0px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  outline: none;  
`;
