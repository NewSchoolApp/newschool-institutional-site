import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 5%;
  height: 70vh;
`;

export const Section = styled.div`
  margin: 0 2%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const VideoBordered = styled.div`
  margin: 0 2%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  color: ${COLORS.primary};
  font-weight: 800;
  font-size: 47px;
  margin-bottom: 0;
  margin-top: 0;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
`;

export const Message = styled.p`
  color: ${COLORS.primary};
  font-weight: 500;
  font-size: 18px;
`;
