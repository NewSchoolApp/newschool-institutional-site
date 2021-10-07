import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.light_white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    height: 100%;
  }
`;

export const Partners = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 2% auto 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 2%;
  flex-wrap: wrap;
`;
export const Image = styled.img`
  height: 50px;
  margin-bottom: 14%;
  margin-left: 4%;
  
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 62px;
  line-height: 64px;
  text-align: center;
  color: ${COLORS.primary};
  @media (max-width: 500px) {
    font-size: 32px;
  }

  margin: 10% auto;
`;

export const Paragrafo = styled.h1`
  font-weight: 800;
  font-size: 32px;
  line-height: 64px;
  text-align: center;
  color: rgb(98,201,155);
  margin-bottom: 14%;
  font-family: "Jost";
  @media (max-width: 500px) {
    font-size: 22px;
  }

  margin: 1% auto;
`;
export const Lista = styled.ul`    
  text-align: center;  
  margin: 3% auto;
  
`;

export const Item = styled.li`
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  text-align: left;
  color: black;
  font-family: "Jost";
  @media (max-width: 500px) {
    font-size: 14px;
  }  
`;



