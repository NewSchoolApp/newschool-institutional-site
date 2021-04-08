import React, { useState } from "react";
import {
  Container,
  Title,
  Card,
  Icon,
  Value,
  Description,
  ProgressContainer,
  ProgressValue,
  Section,
  FlexContainer,
  InfoContainer,
  TotalContainer,
  TitleGoal,
  ValueGoal,
  Image,
} from "./style";

import { httpDonation } from "../../../services/config";

const GOAL = 100000;

export default function DonatePresentation() {
  const [families, setFamilies] = useState(0);
  const [donatedBaskets, setDonatedBaskets] = useState(0);
  const [donors, setDonors] = useState(0);
  const [impactedPeople, setImpactedPeople] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const donations = async () => {
    const response = await httpDonation.get("donations");
    const [
      { families, donated_baskets, donors, impacted_people, total_value },
    ] = response.data;



    setFamilies(parseNumber(families));
    setDonatedBaskets(parseNumber(donated_baskets));
    setDonors(parseNumber(donors));
    setImpactedPeople(parseNumber(impacted_people));
    setTotalValue(parseNumber(total_value));

    const percentage = (total_value * 100) / GOAL;

    setPercentage(percentage.toFixed(2));
  };


  const parseNumber = (number) => {
      return number.toLocaleString().replace(/\,/gi, '.')
  }

  donations();

  return (
    <Container>
      <Title>Nossos dados em tempo real:</Title>
      <Section>
        <Card>
          <Icon src="heart-coin.svg" />
          <FlexContainer>
            <Value>R$ {totalValue}</Value>
            <Description>Valor arrecadado</Description>
          </FlexContainer>
        </Card>
        <Card>
          <Icon src="heart-hand.svg" />
          <FlexContainer>
            <Value>{donatedBaskets}</Value>
            <Description>Cestas doadas</Description>
          </FlexContainer>
        </Card>

        <Card>
          <Icon src="prato-food.svg" />
          <FlexContainer>
            <Value>{families}</Value>
            <Description>Famílias atendidas</Description>
          </FlexContainer>
        </Card>
        <Card>
          <Icon src="person.svg" />
          <FlexContainer>
            <Value>{impactedPeople}</Value>
            <Description>Pessoas impactadas</Description>
          </FlexContainer>
        </Card>
        <Card>
          <Icon src="hands.svg" />
          <FlexContainer>
            <Value>{donors}</Value>
            <Description>Doadores</Description>
          </FlexContainer>
        </Card>
      </Section>

      <ProgressContainer>
        <ProgressValue value={percentage}></ProgressValue>
      </ProgressContainer>

      <InfoContainer>
        <TotalContainer>
          <TitleGoal>Arrecadado</TitleGoal>
          <ValueGoal>R${totalValue}</ValueGoal>
        </TotalContainer>
        <Image src="Vs.svg" />        <TotalContainer>
          <TitleGoal>Meta</TitleGoal>
          <ValueGoal>R$ {parseNumber(GOAL)}</ValueGoal>
        </TotalContainer>
      </InfoContainer>
    </Container>
  );
}
