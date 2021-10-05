import React from "react";
import { Container, Title, Partners, Image, Paragrafo, } from "./style";

export default function PartnersComponent() {
  return (
    <Container>
        <Title>Clientes</Title>
        <Paragrafo>Ajudando a construir sonhos</Paragrafo>

        <Partners>
           <Image src="logos/smart-fit.png" />
            <Image src="logos/ifood.png" />
            <Image src="logos/bic.png" />
            <Image src="logos/instituto-semear-logo.png" />
            <Image src="logos/adsplay.png" />
           
        </Partners>
    </Container>
  );
}
