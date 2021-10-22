import { defaultHead } from "next/head";
import React from "react";
import { Container, Flex, Description, Text, Strong, Row, Video, TextBottom,  StrongBottom
} from "./style";

export default function HistoryVideo() {
  return (
    <Container>
      <Flex>
      
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
          <br />
          <br />
          
        </Description>

        
      </Flex>
    </Container>
  );
}