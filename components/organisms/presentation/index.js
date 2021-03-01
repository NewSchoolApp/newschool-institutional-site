import React from "react";
import { Container, Section, Title, Text, Message, Video, Button } from "./style";
import VideoThumbnail from 'react-video-thumbnail'; // use npm published version

import Image from "next/image";
export default function MenuComponent(_) {

  const message = "Assista o vídeo ao lado para entender mais. >";
  return (
    <Container>
      <Section>
        <Title>
          A New School <br />é um movimento
        </Title>
        <Text>
          Somos uma startup social de educação que cria experiências de
          aprendizagem lúdica e prática para jovens das periferias de todo
          Brasil
        </Text>
        <Text>
          Através da New School App proporcionamos acesso à educação de
          qualidade na linguagem da quebrada e formamos os protagonistas do
          futuro.
        </Text>

        <Message>{message}</Message>
      </Section>
      <Section>
        <Video controls id="video">
          <source src="video-movimento-home.mp4" />
        </Video>
      </Section>
    </Container>
  );
}
