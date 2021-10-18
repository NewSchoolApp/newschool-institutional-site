import React from "react";
import { Container, Title, Partners, Image,} from "./style";

export default function PartnersComponent() {
  return (
    <Container>
        <Title>Apoio</Title>
                
        <Partners>
           <Image src="logos/parceiros/allune.png" />
            <Image src="logos/parceiros/natal.png" />
            <Image src="logos/parceiros/baker.png" />
            
          
        </Partners>
    </Container>
  );
}
