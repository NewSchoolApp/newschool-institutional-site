import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 4%;
  margin: 50px auto 120px; ;
`;

export const TextInput = styled.input.attrs({
  type: "text",
})`
  height: 56px;
  background-color: ${COLORS.light_gray};
  box-sizing: border-box;
  border-radius: 8px;
  border: 2px solid #a3a3a3;
  padding: 8px;
  margin: 8px 12px;
  width: calc(100% - 32px);
`;

export const TextAreaInput = styled.textarea.attrs({
  type: "text",
})`
  resize: none;
  width: calc(100% - 32px);
  height: 168px;
  background-color: ${COLORS.light_gray};
  box-sizing: border-box;
  border-radius: 8px;
  border: 2px solid #a3a3a3;
  padding: 8px;
  margin: 12px 16px;
`;

export const Row = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  width: 100%;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 100%;
  display: flex;
  align-items: flex-start;
`;

export const FormContainer = styled.form`
  width: 100%;  
`;

export const Button = styled.button`
  padding: 10px 25px;
  width: calc(100% - 32px);
  margin-left: 16px;
  color: ${COLORS.primary};
  list-style: none;
  border: 1px solid ${COLORS.PRIMARY};
  background-color: ${COLORS.white};
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
    cursor: pointer;
    transition: background-color 0.2s ease-in;
  }
`;
