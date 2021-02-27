import React from "react";
import { Container, Video, VideoSource } from "./style";
import ReactPlayer from "react-player";

export default function MenuComponent(_) {
  return (
    <Container>
        <Video autoPlay muted loop>
          <source  src="video-home.mp4"/>
        </Video>
    </Container>
  );
}
