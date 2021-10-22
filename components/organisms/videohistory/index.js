import { defaultHead } from "next/head";
import React from "react";
import { Container, Flex, Title, Text, Video } from "./style";

export default function BePart() {
  return (
    <Container>
      <Flex>
        <Title>
          A história da<br />
          New School
        </Title>

        <Video controls id="video">
          <source src="https://newschool-intitucional.s3.us-east-2.amazonaws.com/videos/video-historia.mp4" />
        </Video>
      </Flex>
    </Container>
  );
}
