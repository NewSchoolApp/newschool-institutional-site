import React from "react";
import Link from "next/link";
import { Container, Header, Flex } from "./style";
import Image from "next/image";
import Menu from "../../atoms/menu";

export default function HeaderComponent(_) {
  return (
    <Header>
      <Container>
        <Flex>
          <Link href="/">
            <Image width="155" height="77" src="/newschool-logo.svg" />
          </Link>
        </Flex>
        <Flex>
          <Menu />
        </Flex>
      </Container>
    </Header>
  );
}
