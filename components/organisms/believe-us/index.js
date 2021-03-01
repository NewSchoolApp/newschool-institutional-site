import React from "react";
import { Container, Title, Partners, Image } from "./style";

export default function PartnersComponent() {
  return (
    <Container>
        <Title>Quem acredita na causa:</Title>
        <Partners>
            <Image src="gray/smart-fit.png" />
            <Image src="gray/semantix-logo.png" />
            <Image src="gray/experience-club-logo.png" />
            <Image src="gray/instituto-semear-logo.png" />
            <Image src="gray/RHIS_LOGO.png" />
            <Image src="gray/sotto-maior.png" />
            <Image src="gray/link-Api-logo.png" />
            <Image src="gray/cavaliere-logo.png" />
            <Image src="gray/candio-e-costa-logo.png" />
        </Partners>
    </Container>
  );
}
