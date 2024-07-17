---
id: recebendo-callbacks
title: Receiving Callbacks
hide_title: true
sidebar_label: Receiving Callbacks
---
<h1 className="titulo">Receiving Callbacks</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Information regarding callbacks reception from the Efí Open Finance API.
</div>

<br/>
<br/>

This service has two security protection methods:
- <b>mTLS Authentication:</b> In your server's domain representing, you should configure the requirement of the public key (mTLS) that we are providing, for mutual authentication to occur. It is necessary for your server to have a minimum TLS version of 1.2. <br/>
<p>To configure your server, you can follow the examples mentioned in the <a href="/en/docs/api-pix/webhooks#examples-of-server-settings" target="_blank">Pix API</a>.</p>
<p>Callbacks are sent by Efí via <code>POST url-webhook-registered</code> when there is a change in status.</p>

  
- <b>Validation by hash registered in webhook:</b> An HMAC (a unique identifier) will be appended to the end of the URL when sending the callback. This hash registered in the webhook will be used to validate the notification's origin. Thus, all webhooks sent to your server will have this final identification, and your application must confirm its presence.
<p>Callbacks are sent by Efí via <code>POST url-registered-webhook?hmac=registered-hash</code> when there is a change in status.</p>


 

<div class="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Information</b>
</div>
<p>If you need to test the Payment endpoints of the Open Finance, we have a functional testing environment that allows simulating all the statuses returned by our API and webhook.</p>
<p>If the payment amount is <b>R$ 0.11</b>:<br/>
<i>The payment will be rejected, and the information will be sent via webhook.</i><br/>
If the payment amount is different from <b>R$ 0.11</b>:<br/>
<i>The payment will be accepted, and the information will be sent via webhook.</i><br/></p>
</div>
<br/>


### Request
 
<div className="link-responsivo">
<div className="requisicao">
<p>An HTTP <code>POST</code> request is sent by Efí to the URL you registered as a webhook. It is important to mention that each callback request (sending of the JSON object) has a response time limit of 25 seconds. If your server does not respond within this time frame, the request will be interrupted.</p>


<details  className="no_border">

  <summary>
 <b> Examples:</b>
</summary>
<div className="left">
    Below are some examples of the JSON object sent.
</div>
<div className="right">
    <Modal filename="/markdown/i18n/open-finance/config-aplicacao/recebendo_callbacks.md" />
</div>

<br/>
<br/>

<Tabs
    defaultValue="Exemplo1"
    values={[
    { label: 'Example 1 - Payment Initiation', value: 'Exemplo1', },
    { label: 'Examplo 2 - Payment Initiation', value: 'Exemplo2', },
    { label: 'Refund', value: 'Exemplo', },
    ]}>
    
  <TabItem value="Exemplo1">

  ```json
 // Example - 200 (Notification sent successfully)
{
    "identificadorPagamento": "urn:instituicaoDetentoraDeConta:fd2be7c4-604c-4493-9236-78fe66f40597",
    "valor": "9.90",
    "status": "aceito",
    "dataCriacao": "2024-09-20T18:37:23.000Z",
    "endToEndId": "E090993562022060954525a47762681g",
    "idProprio": "6236574863254",
    "tipo": "pagamento" 
}

  ``` 
  </TabItem>
  <TabItem value="Exemplo2">

  ```json
 // Example - 200 (Notification sent successfully)
{
    "identificadorPagamento": "urn:instituicaoDetentoraDeConta:fd2be7c4-604c-4493-9236-78fe66f40597",
    "valor": "9.90",
    "status": "expirado",
    "dataCriacao": "2024-09-20T18:37:23.000Z",
    "endToEndId": "E090993562022060954525a47762681g",
    "idProprio": "6236574863254",
    "tipo": "pagamento",
    "motivo": "Pagamento recusado no destino"
}
  ```
  </TabItem>

  <TabItem value="Exemplo">

  ```json
// Example - 200 (Notification sent successfully)
{
    "identificadorPagamento": "urn:nubank:eb164079-dbc3-37ec-80bd-1f5d5ea46cec",
    "identificadorDevolucao": "D09089356202211301744509406dc544",
    "endToEndId": "E09089356202211301744e53afc1c1c0",
    "idProprio": "4ad0394de750cd22dcbed11882a9a775",
    "valor": "0.01",
    "status": "aceito",
    "dataCriacao": "2022-11-30T17:44:35.000Z",
    "tipo": "devolucao"
}
  ```
  </TabItem>

  </Tabs>

  <b>Response</b>

  <br/> 

Callback requests wait for a response with HTTP status 2XX. If the client's server returns a different status, Efí will make up to 10 new notification attempts. The first new attempt will be made 5 minutes after the failure to send the callback. If the error persists, subsequent attempts will be sent at increasingly longer intervals, as shown in the table below.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>In cases where the client's server returns HTTP status 429 (<i>too many requests</i>),  Efí's servers will also attempt to send the notification up to 10 times according to the table below.</p>
</div>

 <br/>
  <table className="table">
  <tbody>
    <tr>
      <th>N° of attempts</th>
      <th>Time (in minutes)</th>
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