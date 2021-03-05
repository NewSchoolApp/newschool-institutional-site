import { defaultHead } from "next/head";
import React from "react";
import { Container, Flex, Description, Text, Video } from "./style";

export default function HistoryVideo() {
  return (
    <Container>
      <Flex>
        <Description>
          <Text>
            Nós acreditamos no poder da educação de formar cidadãos capazes de
            transformar suas próprias realidades. Através da educação e da
            tecnologia, queremos impactar a vida dos jovens das periferias de
            todo o país, formando os novos protagonistas da quebrada.
          </Text>

          <Text>
            Saiba mais sobre a história do Jotapê, nosso fundador e irmão do
            Gabriel:
          </Text>
          <br />
          <br />
          <br />
        </Description>

        <Video controls id="video">
          <source src="https://newschool-intitucional.s3.us-east-2.amazonaws.com/videos/video-historia.mp4" />
        </Video>
      </Flex>
    </Container>
  );
}
