import React from "react";
import { Container, Video, VideoSource } from "./style";
import homeVideo from "../../../assets/videos/video-home.mp4";
import ReactPlayer from "react-player";

export default function MenuComponent(_) {
  return (
    <Container>
        <ReactPlayer width="100%" height="100vh" url={"https://www.youtube.com/watch?v=ysz5S6PUM-U"} />
    </Container>
  );
}
