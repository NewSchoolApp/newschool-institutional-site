import React from "react";
import {
  Container,
  Section,
  Title,
  Text,
  Message,
  VideoBordered,
} from "./style";
import homeVideo from "../../../assets/videos/video-home.mp4";
import ReactPlayer from "react-player";

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
        <ReactPlayer
          style={{
            borderRadius: 10,
            overflow: "hidden",
          }}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </Section>
    </Container>
  );
}
