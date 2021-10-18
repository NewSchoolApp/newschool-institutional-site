import React from "react";
import queryString from 'query-string';
import { Container, Flex, Title, Text, LinkText } from "./style";

export default function BeVolunteerPage(_) {
  
  setTimeout(
    function()
    {
      if (location.hash != "")
        window.location.href=location.hash;
    }, 500);

  return (
    <Container>
      <Flex>
        <Title><a name="voluntario">Seja voluntário</a></Title>
        <Text>
          Você que pensa em apoiar uma causa e ao mesmo tempo, doar seu
          conhecimento em prol do social. Essa é a sua oportunidade!
        </Text>
        <LinkText>
          <a href="https://forms.office.com/r/NQSC3qzDGw" target="_blank">Se inscreva por esse formulário.</a>
        </LinkText>
      </Flex>
    </Container>
  );
}
