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
  TextTitle,
  LinkDonate,
} from "./style";
import PackImage from "../../mobile/pack-image/";

export default function DonateBolsaEduca() {
  return (
    <Container>
      <Flex>
        <Description>
          <TextTitle>
            Apoie o desenvolvimento de um jovem
          </TextTitle>
          <Title>Bolsa de estudos</Title>
          <Text>
          Por apenas 29,90 por mês, você apoia um jovem a ter acesso ao aplicativo,
           onde este aluno poderá assistir aulas de desenvolvimento social, educativo,
            profissional e soft skills.
            <Text>
              Nosso maior objetivo é formar os protagonistas da quebrada e
              empoderá-los, para que saibam que podem alcançar seus objetivos e
              chegar aonde quiserem.
            </Text>
          </Text>
        </Description>
        <Card>
          <PackImage
            icon="tools.svg"
            background="gray/background-texture.png"
            image="gray/bolsaEduca.png"
          />
        </Card>
      </Flex>
      <Flex>
        <Description>
          <Title>Como funciona?</Title>
          <Text>
            O jovem participa de oficinas de esporte e cultura, workshops,
            cursos rápidos e videoaulas, tudo gratuito e pensado para a
            quebrada.
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
          <Text>
            A Bolsa de estudo pode ser adquirida por qualquer pessoa que apoia a
            causa e oferecida a um jovem de favela.
          </Text>
          <Text>
            Você doa um valor fixo mensal e +1 jovem é inserido, tendo acesso à
            educação de qualidade.
          </Text>

          <Button>
            <LinkDonate
              href="https://donorbox.org/new-school-doe-um-futuro"
              target="_blank"
            >
              SEJA UM DOADOR
            </LinkDonate>
          </Button>
        </Description>
      </Flex>
    </Container>
  );
}
