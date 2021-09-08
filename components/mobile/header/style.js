import styled from "styled-components";
import { COLORS } from "../../../styles/colors";
import Link from "next/link";

export const Header = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 10vh;
  background-color: ${COLORS.primary};
  z-index: 999;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Image = styled.img`
  cursor: pointer;
  width: 120px;
  height: auto;
`;

export const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(
    #6f42c1,
    #FFFFFF
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

export const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

export const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;  
`;

export const MenuLabel = styled.label`
  background-color: rgb(179,128,230);
  position: fixed;
  top: 0.7rem;
  right: 0.6rem;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;  
`;

export const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 0.8rem;
  height: 2px;
  display: inline-block;
  margin-top: 1.2rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 0.8rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.6rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.6rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;