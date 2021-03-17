import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  margin-bottom: 127px;
  height: 100vh;
`;

export const Video = styled.video`
  width: 100%;
  max-width: 1600px;

  @media (min-width: 1600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

export const VideoSource = styled.source``;
