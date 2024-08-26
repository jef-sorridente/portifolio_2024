import tecnod from "../../assets/Images/tecnod.jpg";
import efood from "../../assets/Images/efood.jpg";
import lgam from "../../assets/Images/lgam.jpg";
import shrek from "../../assets/Images/shrek.jpg";
import lotus from "../../assets/Images/lotus.jpg";
import calculadora from "../../assets/Images/calculadora.jpg";

export const project = [
  {
    id: 1,
    name: "LGAM",
    description:
      "Página da Liga Gaúcha de Artes Marciais, criada com objetivo de ser uma página de apresentação da LGAM.",
    tecnolog: [
      "React",
      "React Router Dom",
      "Redux Toolkit",
      "Styled Components",
    ],
    deploy: "https://lgamrs.com.br/",
    git: "",
    image: lgam,
  },
  {
    id: 2,
    name: "Efood",
    description:
      "Site de tecnologia ficticio com layout criado pelo Figma e projeto feito em HTML e CSS durante o cusrso da EBAC.",
    tecnolog: ["Html", "Css", "Figma"],
    deploy: "https://efood-a3lu.vercel.app",
    git: "https://github.com/jef-sorridente/efood",
    image: efood,
  },
  {
    id: 3,
    name: "Tecno D",
    description:
      "Site de tecnologia ficticio com layout criado pelo Figma e projeto feito em HTML e CSS durante o cusrso da EBAC.",
    tecnolog: ["Html", "Css", "Figma"],
    deploy: "https://projeto-1-ebac-ruby.vercel.app",
    git: "https://github.com/jef-sorridente/projeto-1-ebac",
    image: tecnod,
  },

  {
    id: 4,
    name: "Landing Page – Filme",
    description:
      "Landing Page de um filme, com sessões de sobre, filmes e personagens.",
    tecnolog: ["HTML", "SASS", "JS"],
    deploy: "https://shrek-page.vercel.app/",
    git: "https://github.com/jef-sorridente/shrek_page",
    image: shrek,
  },
  {
    id: 5,
    name: "Lotus Fino",
    description:
      "Landing Page de um restaurante, com sessões de sobre, cardápio e fale conosco. ",
    tecnolog: ["Figma", "Html", "Css", "Bootstrap", "JQuery"],
    deploy: "https://lotus-fino.vercel.app/",
    git: "https://github.com/jef-sorridente/projeto-3-ebac",
    image: lotus,
  },
  {
    id: 6,
    name: "Calculadora IMC",
    description: "Calculadora IMC feita durante no curso de frontend da EBAC",
    tecnolog: ["Figma", "Html", "Css", "Js"],
    deploy: "https://calculadora-imc-eight-black.vercel.app",
    git: "https://github.com/jef-sorridente/calculadora-imc",
    image: calculadora,
  },
];
