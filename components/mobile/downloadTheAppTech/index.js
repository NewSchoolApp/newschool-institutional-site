import React from "react";
import {
  Container,
  Flex,
  Image,
  ImageLogo,
  Description,
  Text,
  Title,
  Row,
  Column,
 

} from "./style";
import Link from "next/link";

export default function DownloadTheAppTechMobile(){
    return(
        <Container>
            <Flex>
                <Column>
                    <Row>
                        <Title>New School App</Title>
                    </Row>
                    <Description>
                        <Text>
                            Você pode encontrar o aplicativo nas lojas 
                            Google Play e App Store.
                        </Text>
                    </Description>
                    <Row>                      
                        <Link href="https://play.google.com/store/apps/details?id=com.newschool.app">
                        <a target="_blank">
                        <ImageLogo src='google-play-logo.svg' /></a>
            </Link>
            <Link href="https://apps.apple.com/br/app/new-school/id1503840666">
              <a target="_blank">
                                     <ImageLogo src='app-store-logo.svg' />
              </a>
            </Link>
                    </Row>
 
                    
                </Column>
               
            </Flex>
        </Container>
    );
}