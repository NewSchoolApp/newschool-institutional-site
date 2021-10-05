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
  TextBold,
  LinkDonate,
} from "./style";
import PackImage from "../../atoms/pack-image";

export default function DonateBolsaEduca() {
  return (
    <Container>
      <Flex>
        <Card>
          <PackImage
            icon="tools.svg"
            background="gray/background-texture.png"
            image="baskets.png"
          />
        </Card>
        <Description>
          <Title>#Favela sem fome</Title>
          <Text>
            <TextBold>
              70% dos moradores de favela estão passando fome nessa pandemia.
            </TextBold>
            <Text>
              Faça a sua doação e nos ajude a levar alimento para a mesa de
              centenas de famílias.
            </Text>
          </Text>
          <Button>
            <LinkDonate
              href="https://donorbox.org/new-school-doe-um-futuro"
              target="_blank"
            >
              DOAR CESTAS BÁSICAS
            </LinkDonate>
          </Button>
        </Description>
      </Flex>
      <Flex>
        <Description>
          <Title>Como funciona?</Title>
          <Row>
            <Icon src="heart-hand.svg"></Icon>
            <TextRight>Recebemos sua doação</TextRight>
          </Row>
          <Row>
            <Icon src="cesta.svg"></Icon>
            <TextRight>Convertemos em cesta básica</TextRight>
          </Row>
          <Row>
            <Icon src="heart-coin.svg"></Icon>
            <TextRight>
              Entregamos para as famílias que mais necessitam
            </TextRight>
          </Row>
          <Row>
            <Icon src="food.svg"></Icon>
            <TextRight>Levamos comida para a mesa</TextRight>
          </Row>
        </Description>
        <Description>
          <Title>Quem pode apoiar?</Title>
          <Text>
            Qualquer pessoa pode apoiar, e com qualquer valor. O importante é
            apoiar o próximo e combater a fome.
          </Text>
          <Text>Vamos ajudar quem mais precisa!</Text>

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
