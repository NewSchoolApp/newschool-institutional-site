import React, { useState } from "react";
import {
  Container,
  Flex,
  Title,
  Text,
  InputContainer,
  Input,
  Button,
} from "./style";

export default function StayOnPage(_) {
  const [message, setMessage] = useState();
  const handleSignin = (e) => {
    e.preventDefault()

    if(!message || !message.includes("@") || !message.includes(".")){
      return alert("Por favor, insira um e-mail válido")
    }


    setMessage("")
    return alert("Em breve a New School disponibilizará as novidades!");
  };
  return (
    <Container>
      <Flex>
        <Title>Fique por dentro!</Title>
        <Text>Insira seu e-mail para receber nossas novidades</Text>
        <InputContainer>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite seu melhor e-mail"
            type="email"
          />
          <Button onClick={(e) => handleSignin(e)}>Se inscreva</Button>
        </InputContainer>
      </Flex>
    </Container>
  );
}
