import React from "react";
import Link from 'next/link'
import {
  Container,
  Flex,
  Card,
  Image,
  Description,
  Title,
  Text,
  Button,
} from "./style";

export default function AboutUs() {
  return (
    <Container>
      <Flex>
        <Card>
          <Image src="gray/pack1.png" />
        </Card>
        <Description>
          <Title>New School App</Title>
          <Text>
            Conheça o aplicativo que leva educação de qualidade para a quebrada,
            em uma linguagem única e diferenciada.
          </Text>
          <Link href="/conheca-o-app">
            <Button>Saiba mais</Button>
          </Link>
        </Description>
      </Flex>

      <Flex>
        <Description style={{ alignItems: "flex-end" }}>
          <Title>Doação</Title>
          <Text style={{ textAlign: "right" }}>
            Doe um futuro. Apoie um jovem da favela e transforme uma vida
            inteira.
          </Text>

          <Link href="/doar-cestas">
            <Button>Saiba mais</Button>
          </Link>
        </Description>
        <Card>
          <Image style={{ marginLeft: "10%" }} src="gray/pack2.png" />
        </Card>
      </Flex>

      <Flex>
        <Card>
          <Image src="gray/pack3.png" />
        </Card>
        <Description>
          <Title>Seja voluntário</Title>
          <Text>
            Faça parte do nosso time de esquilos roxos e revolucione a educação
            no Brasil.
          </Text>

          <Link href="/faca-parte">
            <Button>Saiba mais</Button>
          </Link>
        </Description>
      </Flex>
    </Container>
  );
}
