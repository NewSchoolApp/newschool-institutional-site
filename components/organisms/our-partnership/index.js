import React from "react"
import { COLORS } from "../../../styles/colors"
import { Title } from "../../atoms/title"
import { Button, Column, Container, FormContainer, TextContainer, TextInput, TextAreaInput, Row, Paragraph } from "./styles"

export default function OurPartnership(_) {
    return <Container>
        <TextContainer>
        <Title color={COLORS.gray}>Nossa parceria pode
        <Title>mudar vidas</Title></Title>
        <Paragraph>
        Saiba como sua empresa, lado a lado com a New School, pode quebrar os paradigmas, e revolucionar a educação de centenas de jovens da quebrada. Deixe seus dados que nosso time entrará em contato para conversarmos melhor.
        </Paragraph>
        </TextContainer>
      <FormContainer>
        <Column>
          <TextInput placeholder="Nome"></TextInput>
          <TextInput placeholder="E-mail"></TextInput>
          <Row>
            <Column>
            <TextInput placeholder="Empresa"></TextInput>
            </Column>
            <Column>
            <TextInput placeholder="Telefone"></TextInput>
            </Column>
            
          </Row>
          <TextAreaInput placeholder="Mensagem">
          </TextAreaInput>
        </Column>
        <Button>Enviar mensagem</Button>
      </FormContainer>
    </Container>
  }
  