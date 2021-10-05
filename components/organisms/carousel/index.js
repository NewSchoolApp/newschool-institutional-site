import React from "react";
import {
  Container,
  Flex,
  Card,
  Image,
  Description,
  Title,
  Text,
  TextTitle,
  TextDescription,
} from "./style";
import Carousel from "react-bootstrap/Carousel";

export default function Galery() {
  return (
    <Container>
      <Title>Nosso espaço físico</Title>

      <Carousel fade>
        <Carousel.Item>
          <Image src="galeria/1.png" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="galeria/2.png" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="galeria/3.png" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="galeria/4.png" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="galeria/5.png" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="galeria/6.png" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="galeria/7.png" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="galeria/8.png" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="galeria/9.png" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="galeria/10.png" />
        </Carousel.Item>
      </Carousel>
      <Text>
        O Espaço da New School, localizado no Jardim João XXIII, zona oeste de
        SP, é voltado para atividades de educação, esporte e cultura, para
        jovens e adolescentes. 
        Fechado para visitações devido à pandemia de Covid-19.
        <br />
        <br />
        Educação, Cultura e Esporte: Teatro, coral, dança, ballet, sarau,
        poesia, libras, aulas de inglês, contação de histórias da cultura
        brasileira, futebol, vôlei, handebol, basquete, beisebol, além de
        oficinas como yoga e cinema.
      </Text>
    </Container>
  );
}
