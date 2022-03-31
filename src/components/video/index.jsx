/* 1.4.2 - Controle de áudio [A]

Deve ser fornecida uma forma simples de pausar, deixar mudo
ou ajustar o volume para qualquer áudio que toque 
automaticamente por mais de 3 segundos na interface.
*/

import "./style.css";

const Video = () => {
  return (
    <div className="container-video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vkXfKMhgLQ8?controls=0" //?controls=0 é responsável pelo controle de vídeo
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
