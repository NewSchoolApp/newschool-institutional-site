import React from "react";
import { Container, Title, Partners, Image, Paragrafo, Lista, Item } from "./style";

export default function PartnersComponent() {
  return (
    <Container>
        <Title>Apoio pró-bono</Title>
        <Paragrafo>Ajudando a construir sonhos</Paragrafo>
        <Lista>
          <Item>Contabilidade Allume Contabilidade</Item>          
          <Item>Legal Natal & Manssur Advogados</Item>          
          <Item>Auditoria documental e financeira Bakertilly</Item>                                              
        </Lista>        
        <Partners>
           <Image src="logos/parceiros/allune.png" />
            <Image src="logos/parceiros/natal.png" />
            <Image src="logos/parceiros/baker.png" />
            
            {/*vou por mais imagens*/}
        </Partners>
    </Container>
  );
}
