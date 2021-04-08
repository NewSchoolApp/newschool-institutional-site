import React from "react";
import Link from "next/link";
import { FlexList, ListItem, Menu, ListItemSpecial } from "./style";

export default function MenuComponent(_) {
  return (
    <Menu>
      <FlexList>
        <Link href="/historia">
          <ListItem>História</ListItem>
        </Link>
        <Link href="newschool">
          <ListItem>New School</ListItem>
        </Link>
        <Link href="/faca-parte">
          <ListItem>Faça parte</ListItem>
        </Link>
        <Link href="/conheca-o-app">
          <ListItem>Conheça o App</ListItem>
        </Link>
        <Link href="/doar-cestas">
          <ListItemSpecial>Seja um doador</ListItemSpecial>
        </Link>
      </FlexList>
    </Menu>
  );
}
