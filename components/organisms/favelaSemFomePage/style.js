import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

export const Flex = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 2%;
`;

export const Card = styled.div`
  width: 45%;
  position: relative;
`;

export const Image = styled.img`
  z-index: 2;
  position: relative;
  width: 487px;
  height: 487px;
  filter: grayscale(100%);
  transition: 0.2s ease-out;

  &:hover {
    transition: 0.2s ease-in;
    filter: none;
  }
`;

export const Icon = styled.img`
  z-index: 2;
  position: relative;
  width: 48px;
  height: 48px;
`;

export const Background = styled.img`
  z-index: 1;
  position: relative;
  left: 9%;
  top: -400px;
`;

export const Description = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 47px;
  line-height: 64px;
  text-align: left;
  color: ${COLORS.primary};

  margin-bottom: 5%;
  margin-top: -4%;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: ${COLORS.primary};
  margin-bottom: 5%;
`;
export const TextBold = styled.p`
  font-size: 24px;
  line-height: 27px;
  font-weight: 500;
  color: ${COLORS.primary};
  margin-bottom: 5%;
`;


export const TextTitle = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: #3f3d56;
`;

export const Button = styled.button`
  padding: 10px 25px;
  width: 50%;
  color: ${COLORS.primary};
  list-style: none;
  border: 2px solid ${COLORS.PRIMARY};
  background-color: ${COLORS.white};
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${COLORS.primary};
    cursor: pointer;
    transition: background-color 0.2s ease-in;
    color: ${COLORS.white};
  }

  &:hover a {
    color: ${COLORS.white};
  }
`;

export const Row = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-items: center;
  padding: 1% 3%;
`;

export const LinkDonate = styled.a`
  color: ${COLORS.primary};
  font-weight: bold;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
    cursor: pointer;
    transition: background-color 0.2s ease-in;
  }
`;

export const TextRight = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: ${COLORS.primary};
  display: block;
  margin-left: 5%;
`;
