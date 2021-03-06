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
  Column

} from "./style";

export default function DownloadTheApp(){
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
                        <ImageLogo src='google-play-logo.svg' />
                        <ImageLogo src='app-store-logo.svg' />
                    </Row>
                </Column>
                <Column>
                    <Image src="iPhone.png" />
                </Column>
            </Flex>
        </Container>
    );
}