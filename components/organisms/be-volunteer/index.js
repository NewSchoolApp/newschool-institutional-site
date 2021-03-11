import React from "react";
import { Container, Flex, Title, Text, LinkText } from "./style";
import Menu from "../../atoms/menu";

export default function BeVolunteerPage(_) {
  return (
    <Container>
      <Flex>
        <Title>Seja voluntário</Title>
        <Text>
          Você que pensa em apoiar uma causa e ao mesmo tempo, doar seu
          conhecimento em prol do social. Essa é a sua oportunidade!
        </Text>
        <LinkText>Se inscreva por esse formulário.</LinkText>
      </Flex>
    </Container>
  );
}
