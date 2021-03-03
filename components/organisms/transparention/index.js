import React from "react";
import Link from "next/link";
import {
  Container,
  Image,
  Title,
  Text,
  Button,
  Section,
  Column,
  ImageAbsolute,
  ImageContainer,
} from "./style";
import Menu from "../../atoms/menu";

export default function Transparention(_) {
  return (
    <Container>
      <Column>
        <Title>Revolucionando o acesso à educação</Title>
        <Text>
          Quer fortalecer a causa e proporcionar um futuro  melhor para um jovem
          da periferia? Doe educação!
        </Text>
        <Button>SEJA UM DOADOR</Button>
      </Column>
      <ImageContainer>
        <Image src="/pack-doar1.png" />
        <ImageAbsolute src="/foto-doar-1.png" />
      </ImageContainer>
    </Container>
  );
}
