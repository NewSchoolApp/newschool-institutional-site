import React from "react";
import Link from 'next/link'
import {
  Container,
  Flex,
  Card,
  Image,
  Description,
  Title,
  Text,
  Button,
} from "./style";

export default function AboutUs() {
  return (
    <Container>
     
      <Flex>
        
        <Card>
          <Image style={{ marginLeft: "10%" }} src="gray/tech1.png" />
        </Card>
      </Flex>

    
    </Container>
  );
}
