import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.white};
  height: 372px;
  width: 280px;
  padding: 20px;
  border-radius:15px;
  box-shadow: 4px 10px 25px rgba(63, 61, 86, 0.52);
`;

export const Title = styled.h1`
text-align: center;
font-weight: bold;
font-size: 18px;
line-height: 26px;
color: ${COLORS.light_black};
`

export const Icon = styled.img`
text-align: center;
margin-bottom: 20px;

`

export const Text = styled.p`
text-align: center;
font-size: 16px;
line-height: 24px;
color: ${COLORS.gray};

`


