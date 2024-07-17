---
id: participantes
title: Participantes
hide_title: true
sidebar_label: Participantes
---
<h1 className="titulo">Participantes</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->
<div className="subtitulo">
Informações dos participantes disponíveis na API Open Finance
</div>

<br/>
<br/>

## Recuperar as instituições participantes do Open Finance

  Esse endpoint é utilizado para retornar informações sobre um ou mais participantes que estão ativos no Open Finance. 

<div className="admonition admonition_tip">
  <div>
  <img src="/img/info-circle-green.svg"/> <b>Dica</b>
  </div>
<p>Para listar todos os participantes ativos, não é necessário enviar o atributo 'nome' na requisição.</p>
</div>
<br/>

<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/participantes</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.opb.participants.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/open-finance/config-aplicacao/recuperar_inst_participantes.md" />
          </div>
      </div>
      <br/> <br/>
  <p><b>Requisição</b></p>
  O trecho abaixo mostra como os parâmetros <code>organizacao</code> e <code>nome</code> devem ser repassados na requisição. 
  <br/> 
  <code>/open-finance/participantes?organizacao=false&nome=exemplo</code>
   <br/><br/>

  <b>Respostas</b>

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      {label: '🔴 401', value: '401', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  Lista com um ou mais participantes do Open Finance
{
    "participantes": [
      {
        "identificador": "ebbed125-5cd7-42e3-965d-2e7af8e3b7ae",
        "nome": "Efí S.A.",
        "descricao": "Descrição da marca",
        "portal": "https://openbankingbrasil.org.br/quem-participa/",
        "logo": "https://www.gerencianet.com.br/logo.png",
        "organizacoes": [
          {
            "nome": "Efí S.A.",
            "cnpj": "09089356000118,",
            "status": "Ativo"
          }
        ]
      }
    ]
}
  ``` 
  </TabItem>

  <TabItem value="401">

  ```json
  Este erro ocorre nas seguintes situações:

* Certificado ou credenciais não existem;
* Certificado ou credenciais estão desativados;
* Certificado e credenciais não estão vinculados a mesma conta Efí
* Integrador não tem permissão para o escopo de serviço necessário para consumir este endpoint.
  ```
  </TabItem>
  <TabItem value="403">

  ```json
 Este erro ocorre nas seguintes situações:

* Integrador solicita acesso a um escopo ao qual não tem permissão.
  ```
  </TabItem>

  <TabItem value="404">

  ```json
  Nome inválido
{
    "nome": "participante_nao_encontrado",
    "mensagem": "Nenhum participante encontrado"
}
  ```
 </TabItem>

  <TabItem value="500">

  ```json
 Erro na aplicação
{
    "nome": "erro_aplicacao",
    "mensagem": "Erro interno do servidor"
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

</div>