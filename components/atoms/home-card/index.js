import React from "react";
import { Container, Icon, Title, Text, Section } from "./style";
import ReactPlayer from "react-player";

export default function HomeCard({ icon, title, text }) {
  return (
    <Container>
      <Icon src={icon} />
      <Section>
      <Title>{title}</Title>
      <Text>{text}</Text>

      </Section>
    </Container>
  );
}
