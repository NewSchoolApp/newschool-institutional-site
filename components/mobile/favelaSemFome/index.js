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
        <Title>70% dos moradores de
favela estão passando
fome nessa pandemia. </Title>
        <Text>
        Faça a sua doação e nos ajude a levar alimento para a mesa de centenas de famílias.
        </Text>
        <Button>
          <LinkDonate
            href="https://donorbox.org/new-school-doe-um-futuro"
            target="_blank"
          >
            DOAR CESTAS BÁSICAS
          </LinkDonate>
        </Button>
      </Section>
    </Container>
  );
}
