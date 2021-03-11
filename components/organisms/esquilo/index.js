import React from "react";
import {
  Container,
  Flex,
  Card,
  Image,
  Description,
  Title,
  Text,
  TextTitle,
  TextDescription,
} from "./style";
import PackImage from "../../atoms/pack-image/";

export default function Esquilo() {
  return (
    <Container>
      <Flex>
        <Card>
          <Image src="newschool-icon.svg" />
          <TextDescription>
            Gabi é o nome do esquilo roxo, em homenagem ao Gabriel, irmão do
            Jotapê.
          </TextDescription>
        </Card>
        <Description>
          <Title>Porque o esquilo roxo?</Title>
          <Text>
            O esquilo anda entre os ratos, eles dividem o mesmo espaço. A
            diferença é que ele só se alimenta de coisas boas, enquanto os ratos
            se satisfazem com qualquer coisa. 
            <br/>
            <br/>
            Nós somos assim na New School! Em
            meio a tantos problemas e caminhos, ensinamos os jovens a serem
            esquilos, escolhendo o que é melhor.
            <br/>
            <br/>
             O roxo significa transformação.
            O celular na mão significa o jovem conectado com o conhecimento do
            mundo. E o esquilo, está na pose de quebrada, para que nunca esqueça
            de suas origens.
          </Text>
        </Description>
      </Flex>
    </Container>
  );
}
