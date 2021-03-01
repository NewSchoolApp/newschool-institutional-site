import React from "react";
import {
  Container,
  Section,
  Title,
  Text,
  Message,
  VideoBordered,
} from "./style";
import ReactPlayer from "react-player";
import HomeCard from "../../atoms/home-card";

export default function MenuComponent(_) {
  const values = [
    {
      icon: "home-educacao-qualidade.svg",
      title: "EDUCAÇÃO DE QUALIDADE",
      text:
        "Curadoria de conteúdo feita com base na metodologia educacional da New School e nas habilidades do futuro.",
    },
    {
      icon: "home-p_d-da-quebrada.svg",
      title: "P&D DA QUEBRADA",
      text:
        "Linguagem original da periferia fazendo diálogo com o nosso público-alvo.",
    },
    {
      icon: "home-protagonismo-jovem.svg",
      title: "PROTAGONISMO JOVEM",
      text:
        "Desenvolvimento de competências de liderança para empoderar os jovens a construir seu próprio futuro.",
    },
    {
      icon: "home-transformação-social.svg",
      title: "TRANSFORMAÇÃO SOCIAL",
      text:
        "Aproximar os jovens das oportunidades e mudar o modo social de pensar.",
    },
  ];

  const cards = values.map((item, i) => <HomeCard {...item} key={i} />);
  return (
    <Container>
      <Section>{cards}</Section>
    </Container>
  );
}
