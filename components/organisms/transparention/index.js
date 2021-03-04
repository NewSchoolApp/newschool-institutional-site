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
  Description,
} from "./style";
import Menu from "../../atoms/menu";

export default function Transparention(_) {
  return (
    <Container>
      <Column>
        <Description>Acompanhe nosso impacto na quebrada</Description>
        <Title>Transparência</Title>
        <Text>
          Nossos esquilos roxos trabalharam duro para revolucionar a educação e
          impactar a vida de centenas de jovens e suas famílias. Para isso,
          temos ao nosso lado diversos apoiadores que chegam junto e fecham com
          a gente.
        </Text>
        <Text>
          Você pode acompanhar nosso impacto através do relatório, disponível
          para consulta.
        </Text>
        <Button>Baixar o relatório</Button>
      </Column>
      <ImageContainer>
        <Image src="/pack-doar1.png" />
        <ImageAbsolute src="/foto-doar-1.png" />
      </ImageContainer>
    </Container>
  );
}
