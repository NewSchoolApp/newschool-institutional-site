import React from "react";
import { Container, Title, Partners, Image, Paragrafo, } from "./style";

export default function PartnersComponent() {
  return (
    <Container>
        <Title>Parceiros</Title>
        <Paragrafo>Ajudando a construir sonhos</Paragrafo>

        <Partners>
           <Image src="logos/parceiros/ja.png" />
            <Image src="logos/parceiros/experience.png" />
            <Image src="logos/parceiros/deal.png" />
            <Image src="logos/parceiros/salesforce.png" />
            <Image src="logos/parceiros/kingston.png" />
            <Image src="logos/parceiros/saint.png" />
            <Image src="logos/parceiros/google.png" />
            <Image src="logos/parceiros/microsoft.png" />
           
        </Partners>
    </Container>
  );
}
