import ProjectItem from "../ProjectItem";
import { Container, ContainerProjects, Title } from "./styles";

const Projects = () => {
  return (
    <Container id="projetos">
      <Title>
        <span>Trabalhos e Projetos.</span>
      </Title>
      <ContainerProjects>
        <ProjectItem />
      </ContainerProjects>
    </Container>
  );
};

export default Projects;
