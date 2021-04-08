import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto 15%;
  position: relative;
  max-width: 1400px;
`;

export const Title = styled.h1`
  margin-top: 5%;
  font-weight: 800;
  font-size: 42px;
  line-height: 130%;
  color: ${COLORS.primary};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2%;
`;

export const Card = styled.div`
  display: flex;
  width: 35%;
  margin-left: 13%;
  margin-top: 5%;
  justify-content: flex-start;
  align-items: flex-start;
  grid-gap: 4%;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;

export const Value = styled.h2`
  font-weight: 800;
  font-size: 42px;
  line-height: 130%;
  color: ${COLORS.primary_light};
`;

export const Description = styled.p`
  width: 100%;
  margin-top: -12px;
  font-weight: bold;
  font-size: 25px;
  color: ${COLORS.gray};
`;

export const ProgressContainer = styled.div`
  width: 72%;
  height: 7px;
  margin-top: 5%;
  background-color: ${COLORS.secondary_gray};
`;

export const ProgressValue = styled.div`
  width: ${(props) => props.value || 0}%;
  height: 7px;
  background-color: ${COLORS.primary};

  ::before {
    content: "";
    position: absolute;
    margin-top: -7px;
    left: 13%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.value > 1 ? COLORS.primary : COLORS.secondary_gray};
  }

  ::after {
    content: "";
    position: absolute;
    margin-top: -7px;
    right: 13%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.value > 99 ? COLORS.primary : COLORS.secondary_gray};
  }
`;

export const InfoContainer = styled.div`
  width: 74%;
  margin: 2% 15% 0 15%;
  display: flex;
  justify-content: space-between;
`;

export const TotalContainer = styled.div``;

export const TitleGoal = styled.h2`
  font-weight: 800;
  font-size: 42px;
  line-height: 130%;
  color: ${COLORS.primary_light};
`;

export const ValueGoal = styled.p`
  margin-top: -12px;
  font-weight: bold;
  font-size: 25px;
  color: ${COLORS.gray};
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5%;
`;
