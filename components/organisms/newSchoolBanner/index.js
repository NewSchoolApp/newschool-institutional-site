import React from "react";
import { Container, Title, Partners, Image } from "./style";



import Link from "next/link";
import { Background } from "../../atoms/pack-image/style";

export default function NewSchoolBanner() {
  return (
    <Container>
        
        <Partners>
        <nav>
    <ul class="container">
        <li class="item primeiro">
            <a href="natacao.html"><span class="text">NewSchool</span></a>
            
            
        </li>
          <li class="item segundo">
            <a href="natacao.html"><span class="text">NataÃ§Ã£o</span></a>
        </li>
        <li class="item terceiro">
            <a href="natacao.html"><span class="text">Basquete</span></a>
        </li>
        <li class="item quarto">
            <a href="natacao.html"><span class="text">Corrida</span></a>
        </li>
    </ul>
</nav>

        </Partners>
    </Container>
  );
}
