import styled from "styled-components"

export const Label = styled.p `
  font-family: Montserrat;
  font-size: ${props => props.size || 47}px;
  line-height: 130%;
  font-weight: 800;
  color:${props => props.color};
  text-align: center;
`;