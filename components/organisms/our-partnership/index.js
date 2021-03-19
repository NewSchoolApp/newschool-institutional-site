import React, {useState} from "react";
import { COLORS } from "../../../styles/colors";
import { Title } from "../../atoms/title";
import {
  Button,
  Column,
  Container,
  FormContainer,
  TextContainer,
  TextInput,
  TextAreaInput,
  Row,
  Paragraph,
} from "./styles";
import contactUs from "../../../services/contactUs";
import { getExternalCredentials } from "../../../services/getExternalCredentials";

export default function OurPartnership(_) {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await getExternalCredentials();
      const token = res.data.accessToken
      
      const messageSubmited = await contactUs.submit({
        name: "Leonardo",
        message: "Muito massa",
        cellphone: "9645979824"
      }, token)

     if(messageSubmited) {
       alert("Obrigado, deu tudo certo!")
       resetForm() 
      }
     
    }catch (err) {
      alert(error)
    }
  };
  const resetForm = () => {
      alert("Formulario resetado")
  }

  return (
    <Container>
      <TextContainer>
        <Title color={COLORS.gray}>
          Nossa parceria pode
          <Title>mudar vidas</Title>
        </Title>
        <Paragraph>
          Saiba como sua empresa, lado a lado com a New School, pode quebrar os
          paradigmas, e revolucionar a educação de centenas de jovens da
          quebrada. Deixe seus dados que nosso time entrará em contato para
          conversarmos melhor.
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
          <TextAreaInput placeholder="Mensagem"></TextAreaInput>
        </Column>
        <Button onClick={(e) => handleSubmit(e)}>Enviar mensagem</Button>
      </FormContainer>
    </Container>
  );
}
