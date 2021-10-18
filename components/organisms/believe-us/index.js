import React from "react";
import { Container, Title, Partners, Image,  } from "./style";

export default function PartnersComponent() {
  return (
    <Container>
        <Title>Clientes</Title>
        

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
