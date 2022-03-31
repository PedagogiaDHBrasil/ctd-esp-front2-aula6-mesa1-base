/*

3.3.1 - Identificação do erro [A]

Sempre que uma mensagem de erro for exibida,
ela deve identificar claramente qual é o elemento
que gerou o erro de forma visual e audível (exemplo:
mudança de cor no elemento + um ícone de alerta +
uma mensagem em texto).

*/

import "./style.css";

const Email = () => {
  return (
    // Deverá ser feita uma verificação se o campo de
    // e-mail contém algo digitado. Caso não, deverá
    // sinalizar um erro de preenchimento vazio, para
    // isso você pode utilizar no input de email o "required"
    <form>
      <input type="email" placeholder="Digite aqui seu melhor e-mail" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Email;
