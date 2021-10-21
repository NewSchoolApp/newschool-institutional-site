import React from "react";
import Link from 'next/link'
import {
  Container,
  Flex,
  Card,
  Image,
  Description,
  Title,
  Text,
  Button,
  Strong, Row,
  TextBottom,  StrongBottom

} from "./style";

export default function AboutUs() {
  return (
    <Container>
      

      <Flex>
        <Description style={{ alignItems: "flex-end" }}>
        <Row>
                <TextBottom>
                    <StrongBottom>
                    O crime custou seu futuro e sua própria vida, e tem custado 
                    também a vida de milhares de jovens todos os dias no Brasil.
                    </StrongBottom>
                    Segundo a versão mais recente do Atlas da Violência, 
                    jovens de a partir de 15 anos são maioria entre as vítimas 
                    de homicídio no país. Assim como o Gabriel, muitos deles 
                    vêem no crime organizado o único caminho possível para quem 
                    é de quebrada e não tem acesso às mesmas oportunidades dos 
                    jovens que pertencem à outra realidade socioeconômica.
                </TextBottom>
            </Row>

          
        </Description>
        <Card>
          <Image style={{ marginLeft: "10%" }} src="gray/pack4.png" />
        </Card>
      </Flex>

     
    </Container>
  );
}
