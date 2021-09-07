import React from 'react';
import { Column, Container, Row, Subtitle, Text, Title, ImageLogo } from './style';

export default function OurTeam(){
    return(
        <Container>
            <Title>Nossos times</Title>                            
            <Row>                
                <Column>
                    <ImageLogo src="search-1.svg" />
                    <Subtitle>P&D da quebrada:</Subtitle>
                    <Text>
                        Área de pesquisa e desenvolvimento responsável 
                        pela curadoria e identidade da New School, criação de 
                        aulas, desenvolvimento e interação com o público.
                        Buscamos a melhor linha de comunicação com a favela, 
                        utilizando o dialeto da quebrada.
                    </Text>
                </Column>
            </Row>
            <Row>                    
                <Column>
                    <ImageLogo src="target-1.svg" />
                    <Subtitle>Visão:</Subtitle>
                    <Text>
                        Time responsável pelo impacto social da New School dentro 
                        das escolas públicas do Brasil. O objetivo é despertar no 
                        jovem da quebrada o seu protagonismo.
                    </Text>
                </Column>
            </Row>                
            <Row>                
                <Column>
                    <ImageLogo src="mask-group-1.svg" />
                    <Subtitle>Criação e mídias:</Subtitle>
                    <Text>
                        Área responsável por toda criação de redes e mídias da 
                        New School. Utilizamos os mecanismos da comunicação 
                        para expandir e levar o conhecimento de marca o mais 
                        longe possível.
                    </Text>
                </Column>
            </Row>
            <Row>                  
                <Column>
                    <ImageLogo src="laptop-1.svg" />
                    <Subtitle>Tech:</Subtitle>
                    <Text>
                        Desenvolvedores responsáveis pelas tomadas de decisões 
                        técnicas e melhorias tecnológicas do nosso aplicativo.
                    </Text>
                </Column>
            </Row>
        </Container>
    );
}