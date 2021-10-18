import React from "react";
import { Container, Section, SectionVideo, Title, Text, Message, Video, Button } from "./style";

import Image from "next/image";
export default function MenuComponent(_) {

  const message = "Assista o vídeo ao lado para entender mais. >";
  return (
    <Container>
      <Section>
        <Title>
          Conheça o movimento <br />Esquilo Roxo
        </Title>
        <Text>
        Somos uma startup social de educação que cria experiências de aprendizagem lúdica 
        e prática para jovens das periferias de todo Brasil.
        
        </Text>
        <Text>
        Através do nosso aplicativo, proporcionamos de forma gratuita acesso à 
        educação de qualidade na linguagem da quebrada para formar protagonistas do futuro.
        </Text>

        <Message>{message}</Message>
      </Section>
      <SectionVideo>
        <Video controls id="video">
          <source src="video-movimento-home.mp4" />
        </Video>
      </SectionVideo>
    </Container>
  );
}
