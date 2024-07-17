---
id: gestao-de-pix
title: Pix management
hide_title: true
sidebar_label: Pix management
---
<h1 className="titulo">Pix management</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
The following endpoints bring the functionalities available for managing Pix transactions, that is, the maintenance Pix receipts and refunds.
</div>

<br/>
<br/>

## Get Pix

Endpoint to retrieve a Pix through an <code>e2eId</code>.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>This endpoint returns only information about <b>received Pix</b>.</p>
</div>
<br/>

<!-->Matodo GET<-->

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/pix/<HighlightVar>:e2eId</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>pix.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/pix/Consultar_pix.md" />
          </div>
      </div>
      <br/> <br/>

      
  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🟢 200', value: '200', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "endToEndId": "E12345678202009091221abcdef12345",
    "txid": "cd1fe328c875481285a6f233ae41b662",
    "valor": "100.00",
    "horario": "2020-09-10T13:03:33.902Z",
    "infoPagador": "Reforma da casa",
    "devolucoes": [
      {
        "id": "000AAA111",
        "rtrId": "D12345678202009091000abcde123456",
        "valor": "11.00",
        "horario": {
          "solicitacao": "2020-09-10T13:03:33.902Z"
        },
        "status": "EM_PROCESSAMENTO"
      }
    ]
}
  ``` 
  </TabItem>
  <TabItem value="403">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/AcessoNegado",
    "title": "Acesso Negado",
    "status": 403,
    "detail": "Requisição de participante autenticado que viola alguma regra de autorização."
}
  ```
 </TabItem>
 <TabItem value="200">

  ```json
{
    "endToEndId": "E12345678202009091221ghijk78901234",
    "txid": "5b933948f3224266b1050ac54319e775",
    "valor": "200.00",
    "horario": "2020-09-10T13:03:33.902Z",
    "infoPagador": "Revisão do carro"
}
  ```
 </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "pix_nao_encontrado",
    "mensagem": "Nenhum pix encontrado para o identificador informado"
}
  ```
  </TabItem>
   <TabItem value="500">

  ```json
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao buscar o pix"
}
  ```
  </TabItem>
  </Tabs>

</details>
</div> 
<br/>

## Get received Pix
Endpoint to Get multiple Pix received.

  
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/pix</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>pix.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/pix/Consultar_recebidos.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Request</b></p>
  This endpoint offers filters to narrow down the results. All filters are of type <em>query params</em>, therefore they should be sent via URL, as exemplified in the code snippet below.

<br/>
<br/>

  <code>
  /v2/pix?inicio=2020-04-01T00:00:00Z&fim=2020-04-01T23:59:59Z
 </code>
  <br/>    
  <br/>
  The <code>inicio</code> and <code>fim</code> filters define a date range in which the Pix transactions must be included to be returned. These filters are mandatory.
  <br/>    
  <br/>
  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "parametros": {
      "inicio": "2022-01-01T00:00:00.000Z",
      "fim": "2022-12-31T23:00:00.000Z",
      "paginacao": {
        "paginaAtual": 0,
        "itensPorPagina": 100,
        "quantidadeDePaginas": 2,
        "quantidadeTotalDeItens": 150
      }
    },
    "pix": [
      {
        "endToEndId": "E182361232022110114206014506ed00",
        "txid": "465669b3847d4a30ae14848c5d4d1683",
        "valor": "0.01",
        "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",
        "horario": "2022-11-01T14:20:41.425Z"
      },
      {
        "endToEndId": "E18236129202210311159s01f572d8b1",
        "txid": "0002712070000000000000209BONAE2",
        "valor": "5.00",
        "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",
        "horario": "2022-10-31T11:59:13.220Z"
      },
      {
        "endToEndId": "E18236126202210091755s13093ea838",
        "txid": "fc9a4386fefdh964b5dbc6c91a8722d5",
        "valor": "0.02",
        "chave": "5f84a4c5-c5cb-4590-9f13-7eb4d419dacc",
        "horario": "2022-10-19T17:56:09.173Z",
        "devolucoes": [
          {
            "id": "fc9a4386fefdh964b5dbc6c91a8722d5",
            "rtrId": "D09089556202210191757eeb3cf6972c",
            "valor": "0.01",
            "horario": {
              "solicitacao": "2022-10-19T17:57:02.000Z",
              "liquidacao": "2022-10-19T17:57:03.000Z"
            },
            "status": "DEVOLVIDO"
          },
          {
            "id": "fc9a4386fefdh964b5dbc6c91a8722d6",
            "rtrId": "D09089356002210191757c95a3620972",
            "valor": "0.01",
            "horario": {
              "solicitacao": "2022-10-19T17:57:33.000Z",
              "liquidacao": "2022-10-19T17:57:35.000Z"
            },
            "status": "DEVOLVIDO"
          }
        ]
      }
    ]
}
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "valor_invalido",
    "mensagem": "Campo de data fim deve ser maior ou igual ao campo de data inicio"
}
  ```
 </TabItem>
  <TabItem value="500">

  ```json
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao buscar pix recebidos"
}
  ```
  </TabItem>
  </Tabs>

</details>
</div> 

<br/>

## Refund request
This is the endpoint used to request a refund using the Pix's <code>e2eId</code> and the refund's <code>refund ID</code>. The reason attributed to the PACS.004 will be "Refund requested by the receiving user of the original payment", with the code "MD06", as stated in the RTReason tab of the PACS.004 in the Pix Message Catalog.
 
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/pix/<HighlightVar>:e2eId</HighlightVar>/devolucao/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>pix.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/pix/Solicitar_devolucao.md" />
          </div>
      </div>
       
  <br/> 
  <br/>  
  
  <b>Responses</b>

  <br/> 

  The responses below represent Success(201) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 201', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 409', value: '409', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "id": "123456",
    "rtrId": "D12345678202009091000abcde123456",
    "valor": "7.89",
    "horario": {
      "solicitacao": "2020-09-11T15:25:59.411Z"
    },
    "status": "EM_PROCESSAMENTO"
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  {
    "nome": "pix_nao_encontrado",
    "mensagem": "Nenhum pix encontrado para o identificador informado"
  }
  ```
  </TabItem>
  <TabItem value="409">

  ```json
  {
    "nome": "devolucao_id_duplicado",
    "mensagem": "O id informado já foi utilizado em outra devolução"
  }
  ```
  </TabItem>
  <TabItem value="500">

  ```json
  {
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao solicitar devolução"
  }
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>Instructions</b>
  </div>
  <p> <b>Sending the Refund by <code>id</code> through the endpoint <code>PUT/v2/pix/:e2eId/devolucao/:id </code>.</b> </p>
  <p>You can simulate the rejection of the refund using the value of <b>R$ 0.01</b>. These refunds will be rejected and notified to simulate the production flow. Refunds with values other than <b>R$ 0.01</b> will follow the normal refund flow with several other validations. If they are in compliance, they will be confirmed and notified, simulating the production flow. </p>

  
</div>
<br/>

<br/>

  ## Get refund

Endpoint to retrieve a refund through a Pix's <code>e2eId</code> and the <code>refund ID</code>.

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/pix/<HighlightVar>:e2eId</HighlightVar>/devolucao/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>pix.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/pix/Consultar_devolucao.md" />
          </div>
      </div>
 <br/>   
   <br/>        
  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🟢 200', value: '200', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "id": "123456",
    "rtrId": "D12345678202009091000abcde123456",
    "valor": "7.89",
    "horario": {
      "solicitacao": "2020-09-11T15:25:59.411Z"
    },
    "status": "EM_PROCESSAMENTO"
}
  ``` 
  </TabItem>
  <TabItem value="200">

  ```json
 {
    "id": "502",
    "rtrId": "D12345678202011111000fghij789012",
    "valor": "20.00",
    "horario": {
      "solicitacao": "2020-09-11T15:25:59.411Z"
    },
    "status": "NAO_REALIZADO",
    "motivo": "Negado por timeout"
  }
  ```
 </TabItem>
  <TabItem value="400">

  ```json
  {
    "nome": "devolucao_nao_encontrada",
    "mensagem": "Nenhuma devolução encontrada para o identificador informado"
  }

Or

  {
    "nome": "pix_nao_encontrado",
    "mensagem": "Nenhum pix encontrado para o identificador informado"
  }
  ```
  </TabItem>
  <TabItem value="500">

  ```json
  {
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao buscar devolução"
  }
  ```
  </TabItem>
  </Tabs>

</details>
</div> 

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>Instructions</b>
  </div>
  <p> <b>Retrieving a Refund Sent by <code>id</code> through the endpoint <code>GET/v2/pix/:e2eId/devolucao/:id </code>. </b> </p>
  <p>It is possible to query information about a refund simulated by the Refund Sending endpoint in the testing environment. </p>
  <p>The functionality occurs exactly as in the production environment.</p>
</div>
<br/>

</div>