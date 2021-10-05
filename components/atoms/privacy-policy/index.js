import React from "react";
import { Container, Title, Section, TopicTitle, Text } from "./style";

export default function PrivacyPolicy() {
  return (
    <Container>
      <Section>
        <Title>Política de privacidade</Title>
        <Text>
          Salve, salve! Que daora que você está aqui! <br />A New School
          acredita no poder da educação e da tecnologia para formar cidadãos
          capazes de transformar suas próprias realidades.
        </Text>
        <Text>
          Nós queremos impactar a vida dos jovens das periferias de todo o país,
          formando os novos protagonistas de todas as quebradas, favelas,
          subúrbios, comunidades, ou como quer que você chame, aí no seu estado.
        </Text>
        <Text>
          Quando você utiliza nossos serviços, fornece algumas informações para
          que possamos atingir as suas expectativas em relação à qualidade do
          nosso produto, e também para que possamos fazer comunicações
          necessárias para construir nosso relacionamento atual e futuro, certo?
        </Text>
        <Text>
          Assim, entendemos que você está confiando em nós, para proteger suas
          informações e essa é a nossa responsa.
        </Text>
        <Text>
          Você está aqui para saber quais dados coletamos, para que utilizamos
          estes dados e como estamos fazendo isso.
        </Text>
        <Text>
          Nós vamos detalhar isso abaixo, em nossa Política de Privacidade e
          Proteção de Dados (Política). Por favor, leia esse documento
          atentamente, pois ele lhe ajudará a gerenciar melhor todos os seus
          direitos, conforme a nova lei brasileira 13.709/2018 (LGPD).
        </Text>
        <br />
        <TopicTitle>DADOS QUE COLETAMOS</TopicTitle>
        <br />
        <TopicTitle>PODEMOS COLETAR OU VOCÊ PODERÁ NOS FORNECER</TopicTitle>
        <br />
        <Text>
          Você poderá navegar em nosso site e acessar os nossos conteúdos sem se
          cadastrar, mas, para utilizar alguns Serviços, pode ser requerido que
          registre o seu e-mail. Neste caso, você deverá fornecer um e-mail
          válido e informações cadastrais precisas, completas e atualizadas.
        </Text>
        <Text>
          {" "}
          Usamos esses dados, também, para informar sobre novidades,
          funcionalidades, conteúdos, notícias e eventos relacionados aos nossos
          serviços. Além disso, os dados também são utilizados para a sua
          proteção, seja para cumprir obrigações legais e assim assegurar seus
          direitos ou até mesmo para prevenir alguma fraude.
        </Text>
        <Text>
          {" "}
          Além disso, esclarecemos os motivos específicos pelos quais
          precisaremos tratar os seus dados (cumprir obrigações legais, atender
          suas expectativas e melhorar nossa relação).
        </Text>
        <Text>
          {" "}
          tem mais, pode rolar uma internacionalização dos dados devido ao uso
          de recurso de armazenamento em nuvem, mas tá tranquilo, independente
          de onde for armazenados, a gente se preocupa em tomar todas as medidas
          de segurança necessárias!
        </Text>
        <br />
        <TopicTitle>PRAZO E LOCAL DE ARMAZENAMENTO DOS DADOS</TopicTitle>
        <Text>
          Nós guardamos seus dados por períodos diferentes, utilizando diversas
          tecnologias, de acordo com a natureza do dado e de acordo com
          determinações legais. Seus dados serão armazenados pelo prazo em que
          durar a nossa relação, até você pedir o apagamento ou até todos os
          prazos legais de guarda acabarem, e quando esse prazo acabar, serão
          definitivamente eliminados.
        </Text>

        <br />
        <TopicTitle>ACESSIBILIDADE DOS DADOS PESSOAIS</TopicTitle>
        <Text>
          Você pode exportar uma cópia das suas informações ou excluí-las a
          qualquer momento, desde que não envolvam informações relacionadas a
          segredo comercial ou não haja impeditivos legais para fazer isso.
        </Text>

        <br />
        <TopicTitle>Quais opções eu possuo?</TopicTitle>
        <Text>
          • Caso você preferir não receber e-mails, correspondências ou
          publicidades relativas aos nossos produtos e serviços, basta nos
          informar quando você fornecer as suas informações pessoais ou seguir
          as instruções contidas em nossos sites para remover o seu nome da
          nossa lista(s) de correspondências.
        </Text>
        <Text>
          • Você tem o direito de acessar (revisar, corrigir, alterar ou apagar)
          as suas informações pessoais entrando em contato com a gente, pelo
          contato@akiehnewschool.com
        </Text>
        <Text>
          • Caso você tenha criado um "perfil de usuário" em nosso aplicativo,
          você poderá alterar as suas informações após fazer o login, clicando
          em “quem sou”.
        </Text>

        <br />
        <TopicTitle>E em relação à segurança das informações? </TopicTitle>
        <Text>
          • Quando você fornece informações pessoais, nós empregamos
          determinadas medidas de segurança, tais como encriptação quando
          apropriado.
        </Text>
        <Text>
          • As informações pessoais que você nos fornece podem vir a ser
          transmitidas, usadas, armazenadas e de outras formas processadas fora
          do país em que você registrou essas informações, ou seja tem a
          possibilidade dos dados irem para um pais com leis de proteção
          diferentes.
        </Text>
        <Text>
          • Independentemente de onde essas atividades ocorrerem, tomamos
          medidas adequadas para assegurar que as suas informações serão
          tratadas de forma segura.
        </Text>
        <br />
        <TopicTitle>E em relação à privacidade dos meus filhos?</TopicTitle>

        <Text>
          {" "}
          • O nosso site e aplicativo destinam-se apenas ao uso por pessoas com
          mais de 16 anos. Pessoas com menos de 16 anos não deverão submeter
          informações pessoais à New School sem que tenha o consentimento dos
          pais ou responsáveis, que poderá ser acessado em nosso Termo e
          Condições de Uso.
        </Text>
        <br />
        <TopicTitle>CANAL DE CONTATO</TopicTitle>
        <Text>
          Em caso de qualquer dúvida com relação às disposições da Política,
          você poderá entrar em contato com nosso DPO através do email
        </Text>
        <Text>contato@akiehnewschool.com</Text>
      </Section>
    </Container>
  );
}
