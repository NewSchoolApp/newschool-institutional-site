import React from "react";
import {
  Container,
  FlexContainer,
  Section,
  Politics,
  PoliticsText,
  SocialMedias,
  Image,
  Logo,
  Copyright,
  Text,
} from "./style";

import Link from "next/link";

export default function PartnersComponent() {
  return (
    <Container>
      <FlexContainer>
        <Section>
          <Politics>
            <PoliticsText>Política de privacidade</PoliticsText>
            <Link href="/termos-de-uso">
              <PoliticsText>Termos de uso</PoliticsText>
            </Link>
          </Politics>
          <SocialMedias>
            <Link href="https://www.facebook.com/newschoolapp">
              <a target="_blank">
                <Image src="facebook.png"></Image>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/newschoolapp/">
              <a target="_blank">
                <Image src="linkedin.png"></Image>
              </a>
            </Link>
            <Link href="https://www.instagram.com/newschoolapp/?hl=pt-br">
              <a target="_blank">
                <Image src="instagram.png"></Image>
              </a>
            </Link>
          </SocialMedias>
        </Section>
        <Section>
          <Logo>
            <Image src="newschool-logo.svg" />
          </Logo>
          <Copyright>
            <Text>Todos os direitos reservados. New School 2021.</Text>
          </Copyright>
        </Section>
      </FlexContainer>
    </Container>
  );
}
