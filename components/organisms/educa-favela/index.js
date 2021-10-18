import React from "react";
import Link from "next/link";
import {
  Container,
  Image,
  Title,
  Text,
  Button,
  Section,
  LinkDonate,
} from "./style";
import Menu from "../../atoms/menu";

export default function EducaFavela(_) {
  return (
    <Container>
      <Section>
        <Image src="/logo-educa.png" />
        <Title>Revolucionando o acesso à educação</Title>
        <Text>
          Quer fortalecer a causa e proporcionar um futuro melhor para um jovem
          da periferia? Doe educação!
        </Text>
        
        <Button>
          <LinkDonate
            href="https://donorbox.org/new-school-doe-um-futuro"
            target="_blank"
          >
            SEJA UM DOADOR
          </LinkDonate>
        </Button>
      </Section>
    </Container>
  );
}
