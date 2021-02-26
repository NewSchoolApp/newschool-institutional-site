import React from "react";
import {
  FlexList,
  ListItem,
  Menu,
  ListItemSpecial,
} from "./style";
import newschoolLogo from "../../../assets/logos/newschool-logo.png";

export default function MenuComponent(_) {
  return (
          <Menu>
            <FlexList>
              <ListItem>História</ListItem>
              <ListItem>New School</ListItem>
              <ListItem>Faça parte</ListItem>
              <ListItem>Conheça o App</ListItem>
              <ListItemSpecial>Seja um doador</ListItemSpecial>
            </FlexList>
          </Menu>
  );
}
