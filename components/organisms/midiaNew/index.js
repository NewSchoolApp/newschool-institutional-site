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
        <Description style={{ alignItems: "flex-end" }}>
          <Title>ESTAMOS NA MÍDIA!</Title>
          <Text style={{ textAlign: "right" }}>
           A New School foi tema para diversas reportagens
           publicadas nos seguintes veiculos: "G1, Portal Uol, Veja SP, 
           Flow Estudios, Casa Hacker, Portal IG, Fundação Telefonica e outros." 
          </Text>

          <Link href="/midia">
            <Button>Saiba mais</Button>
          </Link>
        </Description>
        <Card>
          <Image style={{ marginLeft: "10%" }} src="gray/pack5.png" />
        </Card>
      </Flex>

    
    </Container>
  );
}
