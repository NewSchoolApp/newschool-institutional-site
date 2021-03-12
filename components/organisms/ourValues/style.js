import styled from 'styled-components';
import { COLORS } from "../../../styles/colors";

export const Container = styled.div `
  width: 100%;
  height: 60vh;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;
  padding: 2%;
`;

export const Flex = styled.div `
  width: 100%;
  max-width: 1400px;
  padding: 1%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Column = styled.div`
    display: flex;
    flex-direction:column;
    align-items: left;
    justify-content: center;
`;

export const Title = styled.p `
  font-family: Montserrat;
  font-size: 47px;
  line-height: 130%;
  font-weight: 800;
  margin-bottom: 5%;
  color:${COLORS.primary};
  text-align: center;
`;

export const List = styled.div `
width: 103%;
`;

export const Ul = styled.ul `
list-style-image: url('done_24px.svg');
font-size: 24px;
line-height: 34px;
font-weight: 500;
color: #484848;

`;

export const Li = styled.li `
padding-left: 3%;
`;