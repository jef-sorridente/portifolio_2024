import {
  Container,
  ContainerEducation,
  EducationItem,
  Title,
  Line,
} from "./styles";

import { BsCircleFill } from "react-icons/bs";

const Education = () => (
  <Container id="formacao">
    <Title>
      <span>Formação</span>.
    </Title>
    <ContainerEducation>
      <EducationItem>
        <Line>
          <BsCircleFill />
          <div>.</div>
        </Line>
        <div>
          <h3>Analise e Desenvolvimento de Sistemas</h3>
          <p>Escolas e Faculdades QI</p>
          <p>Tecnólogo</p>
        </div>
      </EducationItem>
      <EducationItem>
        <Line>
          <BsCircleFill />
          <div>.</div>
        </Line>
        <div>
          <h3>Engenheiro Front End</h3>
          <p>EBAC - escola britânica de artes criativas & tecnologia</p>
          <p>Curso livre profissionalizante</p>
        </div>
      </EducationItem>
      <EducationItem>
        <Line>
          <BsCircleFill />
          <div>.</div>
        </Line>
        <div>
          <h3>Técnico de Informática</h3>
          <p>Escolas e Faculdades QI</p>
          <p>Curso técnico</p>
        </div>
      </EducationItem>
    </ContainerEducation>
  </Container>
);

export default Education;
