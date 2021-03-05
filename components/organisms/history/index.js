import React from "react";
import {
  Container,
  Flex,
  Image,
  Description,
  Text,
  Row,
  Strong,
  TextBottom,
  StrongBottom
} from "./style";

export default function History(){
    return(
        <Container>
            <Flex>
                <Image src='history.png' />
                <Description>
                    <Text>A história da New School começou com apenas uma vida. 
                        <Strong> Gabriel Victor Malara</Strong>, jovem da periferia da zona sul de São Paulo. 
                        Caçula de uma família de 7 filhos com pais semi-analfabetos. 
                        Apaixonado pelo prato de arroz feijão, bife à milanesa e purê de 
                        batata da dona Ana, que trabalhou como faxineira e cozinheira a vida 
                        toda para sustentar os filhos. Com o Sr. Airton, seu pai, adorava soltar 
                        pipa na quebrada. Gabi, como era chamado na infância,  tinha o sonho de 
                        se tornar jogador de futebol. 
                        </Text>
                        <Text>
                        Gabriel perdeu a vida no 
                        chão de uma farmácia, nos braços da mãe, baleado em cena 
                        por um policial. Naquele dia, era seu aniversário de 19 
                        anos, um almoço especial de sua mãe e sua família o 
                        esperavam em casa. 
                    </Text>
                </Description>
            </Flex>
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
           
        </Container>
    );
}