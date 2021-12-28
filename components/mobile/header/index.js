import React,{useState} from "react";
import Link from "next/link";
import { Container, Header, Flex, MenuLabel, Icon, Navigation, NavBackground, List } from "./style";
import Image from "next/image";
import styled from "styled-components";

const StyledLink = styled.a`
  color: #ffffff;  
  display: inline-block;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: #ffffff;
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover, 
  &:active {
    background-position: 100%;
    color: #ffffff;
    transform: translateX(1rem);
  }
`;

export default function HeaderComponent(_) {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);    

  return (
    <Header>
      <Container>
      <Flex>
          <Link href="/">
            <Image width="120" height="120" src="/newschool-logo.svg" />
          </Link>
        </Flex>
        <Flex> 
        <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>
      <Navigation clicked={click}>
        <List>          
          <li>
            <StyledLink href="/historia" onClick={handleClick} to="/about">
              História
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/newschool" onClick={handleClick} to="/about">
              New School
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/faca-parte" onClick={handleClick} to="/portfolio">
              Faça parte
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/conheca-o-app" onClick={handleClick} to="/blog">
              Conheça o App
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/midia" onClick={handleClick} to="/contact">
             New School na Mídia
            </StyledLink>
                      </li>
                      <li>
          <StyledLink href="/newschool-tech" onClick={handleClick} to="/contact">
             New School Tech
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/doar" onClick={handleClick} to="/contact">
              Seja um doador
            </StyledLink>
          </li>
        </List>
      </Navigation>               
        </Flex>      
      </Container>
    </Header>
  );
}
