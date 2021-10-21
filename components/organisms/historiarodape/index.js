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
          <Image src="gray/history.png" />
        </Card>
        <Description>
          <Title>Saiba mais sobre a história do Jotapê, nosso fundador e irmão do Gabriel:</Title>
          <Text>
          Nós acreditamos no poder da educação de formar cidadãos capazes de
        transformar suas próprias realidades. Através da educação e da
        tecnologia, queremos impactar a vida dos jovens das periferias de
        todo o país, formando os novos protagonistas da quebrada.
          </Text>

          
        </Description>
      </Flex>
    </Container>
  );
}
