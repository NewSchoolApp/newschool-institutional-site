import React from "react";
import Link from "next/link";
import {
  Container,
  Flex,
  Title,
  Text,
  InputContainer,
  Input,
  Button,
} from "./style";
import Menu from "../../atoms/menu";

export default function StayOnPage(_) {
  return (
    <Container>
      <Flex>
        <Title>Fique por dentro!</Title>
        <Text>Insira seu e-mail para receber nossas novidades</Text>
        <InputContainer>
          <Input placeholder="Digite seu melhor e-mail" type="email" />
          <Button>Se inscreva</Button>
        </InputContainer>
      </Flex>
    </Container>
  );
}
