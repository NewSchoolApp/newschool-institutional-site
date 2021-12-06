import React from "react";
import Link from 'next/link'
import {
  Container,  
  Caixa,
  ItemPrimeiro,  
  ItemSegundo,
  ItemTerceiro,
  ItemQuarto
} from "./style";

export default function midiaStilo() {
  return (    
    <Caixa>
        <ItemPrimeiro id="item">
            <span class="text">New</span>            
        </ItemPrimeiro>

        <ItemSegundo id="item">
           <span class="text">School</span>
        </ItemSegundo>

        <ItemTerceiro id="item">
           <span class="text">Na Mídia</span>
        </ItemTerceiro>

        <ItemQuarto id="item">
          <span class="text">New School na Mídia</span>
          </ItemQuarto>

        <li class="item quarto">
            <span class="text">New School na Mídia</span>

        </li>
    </Caixa>    
  );
}
