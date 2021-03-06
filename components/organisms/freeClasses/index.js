import React from "react";
import {
  Container,
  Flex,
  Image,
  ImageLogo,
  Description,
  Text,
  Row,
  H2Title,
  H2TitleStrong,
  Video
} from "./style";

export default function FreeClass(){
    return(
        <Container>
            <Flex>
                <Description>
                    <H2Title>
                        Aulas <H2TitleStrong>gratuitas</H2TitleStrong> na 
                        linguagem da <H2TitleStrong>quebrada</H2TitleStrong>. 
                    </H2Title>
                    <Text>
                        Assista ao take da aula que fala sobre o medo. 
                        Um debate intenso sobre o tema que é tão presente e 
                        pouco falado. Quer continuar assistindo? 
                        É só baixar nosso APP para ter acesso a todos 
                        os nossos conteúdos na faixa. 
                    </Text>
                    <Row>
                        <ImageLogo src='google-play-logo.svg' />
                        <ImageLogo src='app-store-logo.svg' />
                    </Row>
                </Description>
                    <Image src="take-aula-site_Moment1.png" />
            </Flex>
        </Container>
    );
}