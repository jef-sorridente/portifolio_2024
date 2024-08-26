import perfil from "../../assets/Images/jeferson.jpg";

import {
  Container,
  ContainerTitle,
  ContainerImage,
  Title,
  Image,
  SubTitle,
  Social,
} from "./styles";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => (
  <Container id="sobre">
    <ContainerTitle>
      <Title>
        <span>Solucionando</span> seus problemas com <span>tecnologia</span>.
      </Title>
      <SubTitle>
        Olá, meu nome é{" "}
        <a
          href="https://www.linkedin.com/in/jeferson-soares-dev/"
          target="_blank"
        >
          Jeferson
        </a>
        , sou desenvolvedor Front-end.
      </SubTitle>
      <p>
        Sou um estudante em busca da minha primeirva vaga como dev. Sou muito
        comunicativo e tenho o grande desejo de aprender e se desenvolver na
        área de Desenvolvimento. Tenho 3 anos de experiencia como assistente de
        tecnologia
      </p>
      <Social>
        <a href="https://www.linkedin.com/in/jeferson-soares-dev/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/jef-sorridente">
          <FaGithub />
        </a>
      </Social>
    </ContainerTitle>
    <ContainerImage>
      <div>
        <Image src={perfil} alt="foto de perfil" />
      </div>
      <span></span>
    </ContainerImage>
  </Container>
);

export default Hero;
