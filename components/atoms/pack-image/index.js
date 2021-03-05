import React from 'react';
import { 
    Container,
    Icon,
    Image,
    Background,
    IconDiv,
    BackgroundDiv,
    ImageDiv
} from './style';

export default function PackImage({ icon, image, background }){
    return(
        <Container>
            <IconDiv>
                <Icon src={icon} />
            </IconDiv>
            <BackgroundDiv>
                <Background src={background} />
            </BackgroundDiv>
            <ImageDiv>
                <Image src={image}/>
            </ImageDiv>
        </Container>
    );
}