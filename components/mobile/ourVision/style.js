import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
  height: 80vh;    
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  padding: 2%;
  background-image:url('foto-banner-new-school-pb-1.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  float: left;
`;

export const Flex = styled.div `
  width: 100%;
  padding: 1%;
  float: left;
  justify-content: space-around;  
  grid-gap: 2%;
`;

export const Column = styled.div`
    display: flex;
    flex-direction:column;
    align-items: left;
    justify-content: center;
    width: 100%;
    padding: 10%;
`;

export const Text = styled.p `
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  margin-bottom: 5%;
  color: #FFFFFF;
`;

export const Title = styled.p `
  font-size: 29px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 1%;
  color: #FFFFFF;
`;
