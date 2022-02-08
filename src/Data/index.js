import podcastream from "../assets/podcastream.png";

import alura from "../assets/aluraquiz.png";
import ctd from "../assets/ctd-e-commerce.png";

const dataArr = [
  {
    imagem: `${ctd}`,
    titulo: "CTD E-Commerce",
    descricao: 
    "Projeto fullstack em grupo usando Java, AWS/Heroku, React",

    link: "https://ctd-checkpoint-integrador-frontend.vercel.app/",
  },
  {
    imagem: `${podcastream}`,
    titulo: "Podcastream",
    descricao:
      "Trabalho final desenvolvido em grupo para a disciplina de frontend, HTML5, CSS3 e Javascript",
    link: "https://hiimgui.github.io/PodCastream/index.html",
  },
  {
    imagem: `${alura}`,
    titulo: "Alura Quiz - Imersão Next.js",
    descricao:
      "Projeto desenvolvido ao longo dos dias do evento de imersão da Alura",
    link: "https://github.com/hiimgui/aluraquiz-hiimgui",
  },
  
];
export default dataArr;
