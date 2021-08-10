import Footer from './Footer';
import { useState } from 'react';

function Home() {
  const [texto, setTexto] = useState('');
  const [texto2, setTexto2] = useState('');

  const atualizarTexto = (evento) => {
    setTexto(evento.target.value);
  };

  const atualizahtml = (evento) => {
    setTexto2(texto)
  }

  return (
    <div>
      <div>
        <blockquote>
          {texto2}
        </blockquote>
      </div>
      <div>
        <input
          type="text"
          placeholder="Escreva seu texto"
          onChange={atualizarTexto} />
        <button
          onClick = {atualizahtml}>Inserir Citação</button>
      </div>
      <Footer paginaAtual='Contato' />
    </div>
  );
}

export default Home;
