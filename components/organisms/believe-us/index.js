import React from "react";
import { Container, Title, Partners, Image } from "./style";

export default function PartnersComponent() {
  return (
    <Container>
        <Title>Quem acredita na causa:</Title>
        <Partners>
            <Image src="logos/smart-fit.png" />
            <Image src="logos/semantix-logo.png" />
            <Image src="logos/experience-club-logo.png" />
            <Image src="logos/instituto-semear-logo.png" />
            <Image src="logos/RHIS_LOGO.png" />
            <Image src="logos/soto-logo.svg" />
            <Image src="logos/link-Api-logo.png" />
            <Image src="logos/cavaliere-logo.png" />
            <Image src="logos/candio-e-costa-logo.png" />
        </Partners>
    </Container>
  );
}
