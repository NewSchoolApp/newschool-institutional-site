import React from "react";
import { Container, Title, Partners, Image,  } from "./style";

export default function PartnersComponent() {
  return (
    <Container>
        <Title>Parceiros</Title>
        

        <Partners>
           <Image src="logos/parceiros/ja.png" />
            <Image src="logos/parceiros/experience.png" />
            <Image src="logos/parceiros/deal.png" />
            
            <Image src="logos/parceiros/salesforce.png" />
        </Partners>
        <Partners>
            <Image src="logos/parceiros/kingston.png" />
            
            <Image src="logos/parceiros/google.png" />
            
            <Image src="logos/parceiros/microsoft.png" />
            <Image src="logos/parceiros/village.png" />
           
        </Partners>
    </Container>
  );
}
