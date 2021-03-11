import { defaultHead } from "next/head";
import React from "react";
import { Container, Flex, Title, Text, Video } from "./style";

export default function BePart() {
  return (
    <Container>
      <Flex>
        <Title>
          Empresas que <br />
          quebram paradigmas
        </Title>

        <Video controls id="video">
          <source src="faça-parte-video-empresas.mp4" />
        </Video>
      </Flex>
    </Container>
  );
}
