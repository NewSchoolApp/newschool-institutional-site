import React from "react";
import Link from "next/link";
import { Container, Header, Flex, Image } from "./style";
import newschoolLogo from "../../../assets/logos/newschool-logo.png";
import Menu from "../../atoms/menu";

export default function HeaderComponent(_) {
  return (
    <Header>
      <Container>
        <Flex>
          <Link href="/">
            <Image src={newschoolLogo} alt="Logo New School" />
          </Link>
        </Flex>
        <Flex>
          <Menu />
        </Flex>
      </Container>
    </Header>
  );
}
