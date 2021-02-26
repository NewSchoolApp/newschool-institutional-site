import React from "react";
import {
  Container,
  Section,
  Title,
  Text,
  Message,
  VideoBordered,
} from "./style";
import homeVideo from "../../../assets/videos/video-home.mp4";
import ReactPlayer from "react-player";
import HomeCard from "../../atoms/home-card";

export default function MenuComponent(_) {
  const values = [
    {
      icon: "",
      title: "EDUCAÇÃO DE QUALIDADE",
      text:
        "Curadoria de conteúdo feita com base na metodologia educacional da New School e nas habilidades do futuro.",
    },
    {
      icon: "",
      title: "P&D DA QUEBRADA",
      text:
        "Linguagem original da periferia fazendo diálogo com o nosso público-alvo.",
    },
    {
      icon: "",
      title: "PROTAGONISMO JOVEM",
      text:
        "Desenvolvimento de competências de liderança para empoderar os jovens a construir seu próprio futuro.",
    },
    {
      icon: "",
      title: "TRANSFORMAÇÃO SOCIAL",
      text:
        "Aproximar os jovens das oportunidades e mudar o modo social de pensar.",
    },
  ];

  const cards = values.map((item) => <HomeCard {...item} />);
  return <Container>{cards}</Container>;
}
