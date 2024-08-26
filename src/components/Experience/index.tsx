import {
  Container,
  ContainerExperience,
  ExperienceItem,
  Title,
} from "./styles";

const Experience = () => (
  <Container id="experiencia">
    <Title>
      <span>Ex. Profissional</span>.
    </Title>
    <ContainerExperience>
      <ExperienceItem>
        <div>
          <h3>Assistente de Tecnologia</h3>
          <p>3S Corporate, Novo Hamburgo, RS.</p>
          <p>Agosto de 2022 - maio de 2024.</p>
        </div>
      </ExperienceItem>
      <ExperienceItem>
        <div>
          <h3>Assistente de Tecnologia</h3>
          <p>Laboratório Nobel LTDA e Dasa Empresas, Esteio, RS</p>
          <p>Agosto de 2022 - maio de 2024.</p>
        </div>
      </ExperienceItem>
    </ContainerExperience>
  </Container>
);

export default Experience;
