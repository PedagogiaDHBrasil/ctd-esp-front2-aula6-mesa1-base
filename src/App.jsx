/* 
  4.1.2 - Nome, função, valor [A]

  Deve ser fornecido código semanticamente correto e sem
  erros significativos.

  ---

  4.1.1 - Análise (código) [A]

  Toda tecnologia assistiva faz uso das propriedades de 
  nome, função e valor para identificar adequadamente os 
  elementos padronizados do HTML. Qualquer componente 
  customizado deve trazer também essas marcações de forma
  adequada.
*/

import "./App.css";
import Navbar from "./components/navbar";
import Email from "./components/email";
import About from "./components/about";
import Video from "./components/video";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="footerPage">
        <aside>
          <h2>Vídeo</h2>
          <Video />
        </aside>
        <div className="about">
          <h2>Sobre Rick and Morty</h2>
          <About />
        </div>
        <div className="section">
          <h2>Receber notícias sobre a série</h2>
          <Email />
        </div>
      </main>
    </>
  );
};

export default App;
