import React from "react";
import {
  Container,
  Flex,
  Card,
  Image,
  Description,
  Title,
  Text,
  Button,
  CardAbsolute,
  ImageEducationFirst,
  ImageEducationSecond,
  ImageEducationThird,
  ImageAbsolute,
  Strong
} from "./style";

export default function TechnologyContent() {
  return (
    <Container>
      <Flex>
        <Description>
          <Title>Tecnologia <br /> <Strong>&</Strong> Conteúdo</Title>
          <Text>
            Juntamos uma galera de todo Brasil, através de uma comunidade open
            source, e desenvolvemos um aplicativo moderno e interativo para
            revolucionar a educação, através da tecnologia e curadoria de
            conteúdos que não chegam na periferia.
          </Text>
          
        </Description>        
        <Card>
          <Image src="conheca-foto-1.png" />
        </Card>
        <CardAbsolute>
          <ImageEducationFirst src="conheca-icone-1.svg" />          
        </CardAbsolute>
        <Card>
          <ImageAbsolute src="conheca-foto-2.png" />
        </Card>
      </Flex>      
    </Container>
  );
}
