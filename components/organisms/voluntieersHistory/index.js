import React from "react";
import {
  Container,
  Image,
  Title,
  Text,
  Button,
  Row,
  Column,
  ImageAbsolute,
  ImageContainer,
  Description,
  ImageDivEsq, 
  BackgroundDivEsq,
  ImageDivDir, 
  BackgroundDivDir
} from "./style";
import PackImage from '../../atoms/pack-image/index'

export default function volunteersHistory(){
    return(
        <Container>
            <Column>
                <Row>
                    <ImageContainer>
                        <BackgroundDivEsq>
                            <Image src="./gray/background-texture.png" />                            
                        </BackgroundDivEsq>
                        <ImageDivEsq>
                            <ImageAbsolute src="faca-parte-foto-leo-1.png" />  
                        </ImageDivEsq>
                    </ImageContainer>
                      
              
                    <Column>
                        <Text>
                            Este é o Leo. Um jovem da periferia do extremo leste de São Paulo 
                            que entrou para o time de voluntários da New School e em pouco 
                            tempo aprendeu a programar e ganhou grande destaque. 
                        </Text>
                        <Description>
                            Aproveitou a oportunidade, se destacou no projeto Open Source e hoje 
                            trabalha como Engenheiro de Software em uma grande instituição bancária.
                        </Description>
                        
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Text>
                            Este é o Luan. Ele fez parte da criação da primeira versão do nosso 
                            aplicativo.
                        </Text>
                        <Description>
                            Na época, com 17 anos, ele usou um computador emprestado 
                            para programar. Seu trabalho foi tão incrível que se 
                            destacou no time e conquistou uma oportunidade de trabalhar 
                            na plataforma de um dos nossos patrocinadores, LinkApi.
                            Hoje aos 18, Luan leva renda para sua família, está 
                            crescendo na área de tecnologia e se tornou referência 
                            para os jovens da sua quebrada.  
                        </Description>
                    </Column>
                  
                        <ImageContainer>
                            <BackgroundDivDir>
                                <Image src="./gray/background-texture.png" />                            
                            </BackgroundDivDir>
                            <ImageDivDir>
                                <ImageAbsolute src="faca-parte-foto-luan-1.png" />  
                            </ImageDivDir>
                        </ImageContainer>
                  
                </Row>
            </Column>            
       </Container>
    );
}