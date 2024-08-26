import { Container, Header, Main, Footer } from "./styles";

import { project } from "./project";

const ProjectItem = () => (
  <>
    {project.map((item) => (
      <Container key={item.id}>
        <Header>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </Header>
        <Main>
          <img src={item.image} alt={item.name} />
        </Main>
        <Footer>
          <ul>
            {item.tecnolog.map((i) => (
              <li>{i}</li>
            ))}
          </ul>
          <div>
            <button>
              <a href={item.deploy} target="_blank">
                Deploy
              </a>
            </button>
            {item.git && (
              <button>
                <a href={item.git} target="_blank">
                  Github
                </a>
              </button>
            )}
          </div>
        </Footer>
      </Container>
    ))}
  </>
);

export default ProjectItem;
