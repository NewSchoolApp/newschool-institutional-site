import React from "react";
import {
  Container,
  Header,
  Flex,
  Image,
} from "./style";
import newschoolLogo from "../../../assets/logos/newschool-logo.png";
import Menu from "../../atoms/menu";

export default function HeaderComponent(_) {
  return (
    <Header>
      <Container>
        <Flex>
          <Image src={newschoolLogo} alt="Logo New School" />
        </Flex>
        <Flex> 
        <Menu />
        </Flex>
      </Container>
    </Header>
  );
}
