import React from "react";
import ReactModal from 'react-modal';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { useState, useEffect } from "react";

export default function Modal({ filename }) {

  // Hook que demonstra se a modal está aberta ou não
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(filename)
      .then(res => res.text())
      .then(res => setMarkdown(res))
      .catch(err => console.log(err))
  });

  // Código JSX necessário para criar uma modal simples que abre e fecha
  return (
    <div>
      <button className="button-referencia" onClick={abrirModal}>
        Consultar atributos
        <svg className="icon_referencia">
        </svg>
      </button>
      <ReactModal className="modal"
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        ariaHideApp={false}
        contentLabel="Modal de exemplo">
        <div className="conteudo-modal">
          <div className="col-99">
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
          </div>
          <div className="col-1">
            <a href="#" onClick={fecharModal}><svg id="times" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <rect id="canvas" width="20" height="20" fill="none"/>
  <path id="Caminho_19617" data-name="Caminho 19617" d="M411.061,290l5.469-5.47a.75.75,0,0,0-1.06-1.06L410,288.939l-5.47-5.469a.75.75,0,0,0-1.06,1.06l5.469,5.47-5.469,5.47a.75.75,0,1,0,1.06,1.06l5.47-5.469,5.47,5.469a.75.75,0,0,0,1.06-1.06Z" transform="translate(-400 -280)" fill="#0ba1c2"/>
</svg></a>
          </div>
        </div>

      </ReactModal>
    </div>
  );
}






