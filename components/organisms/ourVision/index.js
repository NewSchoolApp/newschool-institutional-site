import React from 'react';
import { Container, Text, Title, Flex , Column } from './style';

export default function OurVision(){
    return(
        <Container>
            <Flex>
                <Column>
                    <Title>Nossa Visão</Title>
                    <Text>
                        Dar aos jovens a oportunidade de tomar as melhores 
                        decisões na vida, nos estudos e sobretudo, ser protagonista 
                        do seu futuro.
                    </Text>
                </Column>
                <Column>
                    <Title>Nossa Missão</Title>
                    <Text>
                        Revolucionar o sistema educacional, 
                        criando um novo ecossistema de educação. 
                    </Text>
                </Column>
            </Flex>
        </Container>
    );
}