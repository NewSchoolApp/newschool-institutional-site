import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  margin-bottom: 127px;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Video = styled.video`
  width: 100%;
`;

export const VideoSource = styled.source``;
