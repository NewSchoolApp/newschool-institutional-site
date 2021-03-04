import React from "react";
import {
  Container,
  Flex,
  Card,
  Image,
  Description,
  Title,
  Text,
  Button,
  Row,
  Icon,
  TextRight,
  TextTitle
} from "./style";
import PackImage from "../../atoms/pack-image/";

export default function DonateBolsaEduca(){
    return(
        <Container>
            <Flex>
                <Description>
                    <TextTitle>Apoie o desenvolvimento de um jovem Bolsa Educa+</TextTitle>
                    <Title>Bolsa Educa+</Title>
                    <Text>
                    Por apenas 29,90 por mês, você apoia um jovem a ter acesso a atividades 
                    de esporte e cultura no Espaço Resenha e ao aplicativo, onde assiste a aulas 
                    que abordam temas sociais, educativos e desenvolve soft skills.
                    <Text>
                    Nosso maior objetivo é formar os protagonistas da quebrada e 
                    empoderá-los, para que saibam que podem alcançar seus objetivos 
                    e chegar aonde quiserem.
                    </Text>
                    </Text>
                </Description>
                <Card>
                    <PackImage
                        icon = "tools.svg" 
                        background="gray/background-texture.png" 
                        image="gray/bolsaEduca.png"/>
                </Card>
            </Flex>
            <Flex>
                <Description>
                    <Title>Como funciona?</Title>
                    <Text>
                    O jovem participa de oficinas de esporte e cultura, workshops, 
                    cursos rápidos e videoaulas, tudo gratuito e pensado para a quebrada.
                    </Text>
                    <Row>
                        <Icon src="heart-hand.svg"></Icon>
                        <TextRight>Recebemos sua doação</TextRight>
                    </Row>
                    <Row>
                        <Icon src="house-heart.svg"></Icon>
                        <TextRight>Transformamos a ferramenta em educação</TextRight>
                    </Row>
                    <Row>
                        <Icon src="heart-coin.svg"></Icon>
                        <TextRight>Oferecemos o serviço gratuito ao jovem</TextRight>
                    </Row>
                    <Row>
                        <Icon src="partners.svg"></Icon>
                        <TextRight>Revolucionamos o futuro</TextRight>
                    </Row>
                </Description>
                <Description>
                    <Title>Quem pode apoiar?</Title>
                    <Text>A Bolsa Educa+ pode ser adquirida por qualquer pessoa que apoia 
                        a causa e oferecida a um jovem de favela. 
                    </Text>
                    <Text>
                        Você doa um valor fixo 
                        mensal e +1 jovem é inserido, tendo acesso à educação de qualidade.
                    </Text>
                    <Button>SEJA UM DOADOR</Button>
                </Description>
            </Flex>
        </Container>
    );
}