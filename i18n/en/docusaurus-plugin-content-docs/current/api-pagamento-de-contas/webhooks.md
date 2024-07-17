---
id: webhooks
title: Webhooks
hide_title: true
sidebar_label: Webhooks
---
<h1 className="titulo">Webhooks</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
This section brings together endpoints for managing notifications from the receiving PSP to the receiving user
</div>

<br/>
<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>By Banco Central regulations, it will be necessary to insert a public key from Efí into your server so that communication follows the <strong>mTLS standard</strong>, the same standard used in the Pix API.</p>
<p>To understand the mTLS standard and configure your server, click <a href="/en/docs/api-pix/webhooks#understanding-the-mtls-pattern" target="_blank">here</a>.</p>
</div>


<br/>

 ## Create payment webhook

Endpoint for creating the payment webhook.

  <div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/webhook</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>payment.webhook.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/payments/webhooks/Configurar_webhook.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Example', value: 'exemplo', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
  {
    "url": "string"
  }
  ``` 
  </TabItem>
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

  The responses below represent Success(201) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 201', value: 'saida', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "url": "string"
  }
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "string",
    "mensagem": "string"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

## List payment webhooks

Endpoint for listing payment webhooks using parameters such as <code>dataInicio</code> and <code>dataFim</code>. The attributes are inserted as query parameters.

 
  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/webhook</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>payment.webhook.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/payments/webhooks/Listar_webhook.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Request</b></p>
  The snippet below shows how the <code>dataInicio</code> and <code>dataFim</code> parameters (required) should be passed in the request.<br/><br/>
  <code>/v1/webhook/?dataInicio=2024-01-22T16:01:35Z&dataFim=2024-10-23T16:01:35Z</code>
    
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
    ]}>
  <TabItem value="saida">

  ```json
{
    "parametros": {
      "inicio": "string",
      "fim": "string",
      "paginacao": {
        "paginaAtual": 0,
        "itensPorPagina": 100,
        "quantidadeDePaginas": 1,
        "quantidadeTotalDeItens": 5
      }
    },
    "webhooks": [
      {
        "url": "string",
        "criacao": "string"
      }
    ]
}
  ``` 
  </TabItem>
  
  <TabItem value="400">

  ```json
{
    "nome": "string",
    "mensagem": "string"
}
  ```
  </TabItem>
  </Tabs>

</details>
</div> 

<br/>

## Delete payment webhook

Endpoint for deleting the payment webhook.


  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v1/webhook</b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requires authorization for the scope: <code>payment.webhook.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/payments/webhooks/Configurar_webhook.md" />
          </div>
      </div>
      <br/><br/>
     <p><b>Request</b></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Example', value: 'exemplo', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
  {
    "url": "string"
  }
  ``` 
  </TabItem>
  </Tabs>

  <br/>    

  <b>Responses</b>

  <br/> 
  The responses below represents Consumer Success(204).

  <Tabs
    defaultValue="saida"
    values={[
      {label: '🟢 204', value: 'saida', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
  Webhook deleted
  ``` 
  </TabItem>
  
  <TabItem value="400">

  ```json
{
    "nome": "string",
    "mensagem": "string"
}
  ```
  </TabItem>
  
  </Tabs>

</details>
</div>

<br/>

## Receiving Callbacks
This service is protected by a layer of mTLS authentication. Callbacks are sent by Efí via <code>POST url-registered-webhook</code> when there is a change in the Payment status.

### Request

<div className="link-responsivo">
<div className="requisicao">
<p>When there is a change in the status of a payment associated with the used application, Efí sends a <code>POST</code> request to the webhook URL you defined. A JSON object (like the examples below) will be sent to your server. Each callback request has a timeout of 60 seconds, meaning it is interrupted if there is no response in 60 seconds.</p>


<details  className="no_border">

  <summary>
    <b> Examples:</b>
</summary>
<div className="left">
  Below, see some examples of the JSON object sent.
</div>
<div className="right">
  <Modal filename="/markdown/i18n/payments/webhooks/Recebendo_callbacks.md" />
</div>
<br/> <br/>
      <p></p>
<Tabs
    defaultValue="Em-processamento"
    values={[
    { label: 'Em processamento', value: 'Em-processamento', },
    { label: 'Agendado', value: 'Agendado', },
    { label: 'Executado', value: 'Executado', },
    { label: 'Liquidado', value: 'Liquidado', },
    { label: 'Nao realizado', value: 'Nao-realizado', },
    { label: 'Cancelado', value: 'Cancelado', }
  ]}>

  <TabItem value="Em-processamento">

  ```json
{
    "identificador": "1013",
    "status": {
        "anterior": "CRIADO",
        "atual": "EM_PROCESSAMENTO"
    },
    "valor": "150.10",
    "horario": {
        "solicitacao": "2024-02-07T14:32:54.000Z"
    },
    "efiExtras": {
        "dataExecucao": "2024-02-07",
        "codigoBarras": "23797962400000213204150060000055503009010000",
        "linhaDigitavel": "23794150096000005550330090100006796240000021320"
    }
}
  ``` 
  </TabItem>
  <TabItem value="Agendado">

  ```json
{
    "identificador": "1012",
    "status": {
        "anterior": "CRIADO",
        "atual": "AGENDADO"
    },
    "valor": "150.10",
    "horario": {
        "solicitacao": "2024-02-07T14:17:36.000Z"
    },
    "efiExtras": {
        "dataExecucao": "2024-02-08",
        "codigoBarras": "23792962400000180004150060000055567609010000",
        "linhaDigitavel": "23794150096000005556076090100009296240000018000"
    }
}
  ``` 
  </TabItem>

<TabItem value="Executado">

  ```json
{
    "valor": "650.00",
    "status": {
      "atual": "EXECUTADO",
      "anterior": "EM_PROCESSAMENTO"
    },
    "horario": {
      "solicitacao": "2024-02-01T15:12:21"
    },
    "efiExtras": {
      "protocolo": "936879015",
      "codigoBarras": "10497962600000650008527261000100040064915871",
      "dataExecucao": "2024-02-01",
      "motivoRecusa": null,
      "linhaDigitavel": "10498527246100010004200649158714796260000065000"
    },
    "identificador": "5968942"
}
  ``` 
  </TabItem>

  <TabItem value="Liquidado">

  ```json
{
    "valor": "650.00",
    "status": {
      "atual": "LIQUIDADO",
      "anterior": "EXECUTADO"
    },
    "horario": {
      "liquidacao": "2024-02-01T15:12:33",
      "solicitacao": "2024-02-01T15:12:21"
    },
    "efiExtras": {
      "protocolo": "936879015",
      "codigoBarras": "10497962600000650008527261000100040064915871",
      "dataExecucao": "2024-02-01",
      "motivoRecusa": null,
      "linhaDigitavel": "10498527246100010004200649158714796260000065000"
    },
    "identificador": "5968942"
}
  ``` 
  </TabItem>
    

  <TabItem value="Nao-realizado">

  ```json
{
    "valor": "582.30", 
    "status": { 
      "atual": "NAO_REALIZADO", 
      "anterior": "AGENDADO" 
    }, 
    "horario": { 
      "solicitacao": "2024-02-06T01:55:31.000Z" 
    }, 
    "efiExtras": { 
      "protocolo": "949096655", 
      "codigoBarras": "65593166800000582300000001007500004640804500", 
      "dataExecucao": "2024-02-07", 
      "motivoRecusa": "Saldo Insuficiente. Data: 07/02/2024.", 
      "linhaDigitavel": "65590000020100750000046408045006316680000058230" 
    }, 
    "identificador": "5978351"
}
  ``` 
  </TabItem>

  <TabItem value="Cancelado">

  ```json
{
    "valor": "20.00",
    "status": {
      "atual": "CANCELADO",
      "anterior": "AGENDADO"
    },
    "horario": {
      "solicitacao": "2024-01-23T10:36:07"
    },
    "efiExtras": {
      "protocolo": null,
      "codigoBarras": "36491000000000020000000700014334200000000066",
      "dataExecucao": "2024-01-24",
      "motivoRecusa": null,
      "linhaDigitavel": "36490000760001433420500000000661100000000002000"
    },
    "identificador": "5949678"
}
  ``` 
  </TabItem>

  </Tabs>

  <b>Responses</b>

  <br/> 

 Callback requests wait for a response with HTTP status 2XX. If the client's server returns a different status, Efí will make up to 10 new notification attempts. The first new attempt will be made 5 minutes after the failure to send the callback. If the error persists, subsequent attempts will be sent at increasingly longer intervals, as shown in the table below.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>In cases where the client's server returns HTTP status 429 (<i>too many requests</i>), Efí's servers will attempt to send the notification up to 10 times according to the table below.</p>
</div>


 <br/>
  <table className="table"> 
  <tbody>
    <tr>
      <th>N° of attempts</th>
      <th align="center">Time (in minutes)</th>
    </tr>
    <tr>
      <td>1</td>
      <td>5</td>
    </tr>
    <tr>
      <td>2</td>
      <td>10</td>
    </tr>
    <tr>
      <td>3</td>
      <td>20</td>
    </tr>
    <tr>
      <td>4</td>
      <td>40</td>
    </tr>
    <tr>
      <td>5</td>
      <td>80</td>
    </tr>
    <tr>
      <td>6</td>
      <td>160</td>
    </tr>
    <tr>
      <td>7</td>
      <td>320</td>
    </tr>
    <tr>
      <td>8</td>
      <td>640</td>
    </tr>
    <tr>
      <td>9</td>
      <td>1280</td>
    </tr>
    <tr>
      <td>10</td>
      <td>52560</td>
    </tr>
    </tbody>
</table>

</details>
</div>
</div>

</div>