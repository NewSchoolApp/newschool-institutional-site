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

export default function PartnersComponent() {
  return (
    <Container>
      <FlexContainer>
        <Section>
          <Politics>
            <PoliticsText>Política de privacidade</PoliticsText>
            <PoliticsText>Termos de uso</PoliticsText>
          </Politics>
          <SocialMedias>
            <Image src="facebook.png"></Image>
            <Image src="linkedin.png"></Image>
            <Image src="instagram.png"></Image>
          </SocialMedias>
        </Section>
        <Section>
          <Logo>
            <Image src="newschool-logo.png" />
          </Logo>
          <Copyright>
            <Text>Todos os direitos reservados. New School 2021.</Text>
          </Copyright>
        </Section>
      </FlexContainer>
    </Container>
  );
}
