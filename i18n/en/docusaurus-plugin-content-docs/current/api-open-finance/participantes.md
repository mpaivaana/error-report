---
id: participantes
title: Participants
hide_title: true
sidebar_label: Participants
---
<h1 className="titulo">Participants</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->
<div className="subtitulo">
Information about participants available in the Open Finance API.
</div>

<br/>
<br/>

## Get the participants institutions of Open Finance

This endpoint is used to retrieve information about one or more participants that are active in Open Finance.  

<div className="admonition admonition_tip">
  <div>
  <img src="/img/info-circle-green.svg"/> <b>Tip</b>
  </div>
<p>To list all active participants, it is not necessary to send the 'name' attribute in the request.</p>
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
            Requires authorization for the scope: <code>gn.opb.participants.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/open-finance/config-aplicacao/recuperar_inst_participantes.md" />
          </div>
      </div>
      <br/> <br/>
  <p><b>Request</b></p>
  The snippet below shows how the <code>organizacao</code> and <code>nome</code> parameters should be passed in the request.
  <br/> 
  <code>/open-finance/participantes?organizacao=false&nome=exemplo</code>
   <br/><br/>

  <b>Responses</b>

  The responses below represent Success(200) and consumption failures/errors.
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
  List with one or more Open Finance participants
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
This error occurs in the following situations:

* Certificate or credentials do not exist;
* Certificate or credentials are disabled;
* Certificate and credentials are not linked to the same Efí account;
* Integrator does not have permission for the necessary service scope to consume this endpoint.
  ```
  </TabItem>
  <TabItem value="403">

  ```json
This error occurs in the following situations:

* Integrator requests access to a scope to which it does not have permission.
  ```
  </TabItem>

  <TabItem value="404">

  ```json
Invalid name
{
    "nome": "participante_nao_encontrado",
    "mensagem": "Nenhum participante encontrado"
}
  ```
 </TabItem>

  <TabItem value="500">

  ```json
Application error
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