import styled from "styled-components";
import { COLORS } from "../../../styles/colors";

export const FlexList = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  padding: 10px 15px;
  color: ${COLORS.white};
  display: inline-block;
  list-style: none;
  font-weight: bold;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 15px;
    background: #fff;
    transition: width 0.5s ease;
  }

  &:hover {
      cursor: pointer;
   }

  &:hover:after {
    width: 75%;
    left: 15px;
    background: #fff;
    cursor: pointer;
  }
  
`;

export const ListItemSpecial = styled.li`
  padding: 10px 25px;
  margin-left: 30px;
  color: ${COLORS.white};
  list-style: none;
  border: 1px solid ${COLORS.white};
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.1s ease-out;

  &:hover {
    background-color: ${COLORS.white};
    color: ${COLORS.primary};
    cursor: pointer;
    transition: background-color 0.1s ease-in;
  }
`;

export const Menu = styled.nav``;