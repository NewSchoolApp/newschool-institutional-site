import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS.white};
  height: 40vh;
  width: 40ch;
  padding: 15px;
  border-radius:15px;
  box-shadow: 1px 1px 5px black;
`;

export const Title = styled.h1`
text-align: center;

`

export const Icon = styled.img`
text-align: center;

`

export const Text = styled.p`
text-align: center;

`


