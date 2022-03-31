/*
1.4.8 - Apresentação visual [AAA]

Fornecer controles específicos para permitir o 
controle da apresentação das informações em tela sem
comprometer sua legibilidade.


*/

import "./style.css";

const About = () => {
  return (
    <div>
      <div className="blockText">
        <p>Rick and Morty é uma série de animação.</p>
        <p>
          A série estreou em 2 de dezembro de 2013 e acompanha as perigosas
          aventuras do cientista alcoólatra Rick e seu neto Morty, que divide
          seu tempo entre a vida familiar e viagens interdimensionais. Em 2016,
          suas duas primeiras temporadas foram lançadas na Netflix com a
          dublagem brasileira.
        </p>

        <a
          href="https://pt.wikipedia.org/wiki/Rick_and_Morty"
          className="buttonAbout"
        >
          <img src="download.png" alt="" />
          <p>Leia mais sobre</p>
        </a>
      </div>

      <div>
        <img src="cite.png" alt="" className="imageCite" />
      </div>
    </div>
  );
};

export default About;
