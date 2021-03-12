import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: grid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;
  padding: 2%;
  background-image:url('foto-banner-new-school-pb-1.svg');
  background-size: 100% 100vh;
  background-repeat: no-repeat;
  background-position: left;
`;

export const Flex = styled.div `
  width: 100%;
  padding: 1%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  grid-gap: 2%;
`;

export const Column = styled.div`
    display: flex;
    flex-direction:column;
    align-items: left;
    justify-content: center;
    width: 28%;
`;

export const Text = styled.p `
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  margin-bottom: 5%;
  color: #FFFFFF;
`;

export const Title = styled.p `
  font-family: Montserrat;
  font-size: 29px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 1%;
  color: #FFFFFF;
`;
