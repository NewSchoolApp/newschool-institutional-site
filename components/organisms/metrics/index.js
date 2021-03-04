import React from "react";
import Link from "next/link";
import { Container, MetricTextImage } from "./style";
import Menu from "../../atoms/menu";

export default function Metrics(_) {
  return (
    <Container>
        <MetricTextImage src="/metrics-text.svg" />
    </Container>
  );
}
