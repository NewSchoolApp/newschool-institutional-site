import React, {useState} from "react";
import { COLORS } from "../../../styles/colors";
import { Title } from "../../mobile/title";
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
  const [phone, setPhone] = useState()
  const [message, setMessage] = useState()
  const [company, setCompany] = useState()
  const [email, setEmail] = useState()
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await getExternalCredentials();
      const token = res.data.accessToken
      
      const messageSubmited = await contactUs.submit({
        name,
        message,
        cellphone: phone
      }, token)

     if(messageSubmited) {
       alert("Valeu, deu tudo certo!")
       resetForm() 
      }
     
    }catch (err) {
      alert(error)
    }
  };
  const resetForm = () => {
      setName("")
      setMessage("")
      setPhone("")
      setEmail("")
      setCompany("")
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
          <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"></TextInput>
          <TextInput value={email} placeholder="E-mail"></TextInput>                      
          <TextInput value={company} placeholder="Empresa"></TextInput>            
          <TextInput value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone"></TextInput>                      
          <TextAreaInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensagem"></TextAreaInput>
        </Column>
        <Button onClick={(e) => handleSubmit(e)}>Enviar mensagem</Button>
      </FormContainer>
    </Container>
  );
}
