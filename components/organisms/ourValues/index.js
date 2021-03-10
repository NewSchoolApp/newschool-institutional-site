import React from 'react';
import { Container, Flex, Column, Title, List, Ul, Li } from './style';

export default function OurVision(){
    return(
        <Container>
            <Title>Nossos Valores</Title>
            <Flex>
                <Column>
                    <List>
                        <Ul>
                            <Li>Nunca esquecer das nossas origens</Li>
                            <Li>Equidade</Li>
                            <Li>Liberdade de expressão</Li>
                            <Li>Certo pelo certo</Li>
                            <Li>Não atrasar ninguém</Li>
                        </Ul>
                    </List>
                </Column>
                <Column>
                    <List>
                        <Ul>
                            <Li>Pensar sempre no progresso individual e coletivo</Li>
                            <Li>Humildade</Li>
                            <Li>Saber chegar e saber sair</Li>
                            <Li>Protagonismo</Li>
                            <Li>Transparência</Li>
                        </Ul>
                    </List>
                </Column>
            </Flex>
        </Container>
    );
}