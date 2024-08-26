import { useEffect, useState } from "react";
import { Container, List } from "./styles";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useTransition } from "@react-spring/web";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleRezise = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleRezise);
    return () => window.removeEventListener("resize", handleRezise);
  }, [windowSize]);

  const mobile = windowSize <= 786;

  const animation = useTransition(openMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Container>
      <div className="container">
        <h1>Jeferson Soares</h1>
        {mobile ? (
          <>
            {animation(
              (styles, item) =>
                item && (
                  <>
                    <List style={styles}>
                      <li onClick={handleMenu}>
                        <a href="#sobre">Sobre</a>
                      </li>
                      <li onClick={handleMenu}>
                        <a href="#formacao">Formação</a>
                      </li>
                      <li onClick={handleMenu}>
                        <a href="#experiencia">Ex. Profissional</a>
                      </li>
                      <li onClick={handleMenu}>
                        <a href="#projetos">Projetos </a>
                      </li>
                    </List>
                  </>
                )
            )}
            {openMenu ? (
              <IoClose size={32} onClick={handleMenu} />
            ) : (
              <HiOutlineMenuAlt3 size={32} onClick={handleMenu} />
            )}
          </>
        ) : (
          <List>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#formacao">Formação</a>
            </li>
            <li>
              <a href="#experiencia">Ex. Profissional</a>
            </li>
            <li>
              <a href="#projetos">Projetos </a>
            </li>
          </List>
        )}
      </div>
    </Container>
  );
};

export default Header;
