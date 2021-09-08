import React from "react";
import Link from "next/link";
import { Container, Image, Title, Text, BoldText, Section, Row, Video,ImageHover, ImageLeft } from "./style";

export default function Depositions(_) {
  return (
    <Container>
      <Row>
        <Title>Depoimentos</Title>
      </Row>
      <Row>
        <Section>
          <Text>
            "Se tivesse existido algo assim antes. Se tivessem pensado nisso
            antes, acho que hoje meu tio estaria comigo e muitos amigos meus que
            cresceram comigo estariam vivendo essa mesma coisa".
          </Text>
          <BoldText>
            Maria Júlia, líder do time de Esporte do Espaço Físico.
          </BoldText>
        </Section>
        <Section>
          <Video controls id="video">
            <source src="video-doacao.mp4" />
          </Video>
        </Section>
      </Row>
      <Row>
        <Section>
          <ImageHover src="/pack-doar2.png" />
        </Section>
        <Section>
          <Image src="title-donate.png" />
          <Text>
            Quando eu penso no que a New School representa para mim, uma palavra
            não sai da minha cabeça, motivação!
          </Text>
          <Text>
            Conheci pessoas incríveis, pessoas que passaram pelas mesmas coisas
            que eu e conseguiram alcançar seus sonhos que eram tão impossíveis
            quanto os meus.
          </Text>
          <Text>
            Graças a New School me sinto mais motivado e forte para seguir em
            frente e lutar pelos meus sonhos. É incrível saber que estão
            ajudando crianças e jovens como eu a não desistir e não seguir o
            caminho errado".
          </Text>
          <BoldText>
            Gabriel Oliveira, líder do time de Cultura do Espaço Físico.
          </BoldText>
        </Section>
      </Row>
    </Container>
  );
}
