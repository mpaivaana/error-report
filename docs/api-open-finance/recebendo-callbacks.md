---
id: recebendo-callbacks
title: Recebendo Callbacks
hide_title: true
sidebar_label: Recebendo Callbacks
---
<h1 className="titulo">Recebendo Callbacks</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Informações referentes aos recebimentos de callbacks da API Open Finance Efí.
</div>

<br/>
<br/>

Esse serviço possui duas formas de proteção à segurança:
- <b>Autenticação mTLS:</b> No domínio que representa o seu servidor, você deverá configurar a exigência da chave pública (mTLS) que estamos disponibilizando, para que ocorra a autenticação mútua. É necessário que o seu servidor tenha a versão mínima do TLS 1.2. <br/>
<p>Para configurar seu servidor, você pode seguir os exemplos citados na <a href="/docs/api-pix/webhooks#exemplos-de-configurações-de-servidor" target="_blank">API Pix</a>.</p>
<p>Os callbacks são enviados pela Efí via <code>POST url-webhook-cadastrada</code> quando há uma alteração no status. </p>

  
- <b>Validação por hash cadastrada no webhook:</b> Um hmac (uma identificação própria) será acrescentado ao final da URL no momento do envio do callback. Essa hash cadastrada no webhook será utilizada para validar a origem da notificação. Assim, todos os webhooks enviados ao seu servidor terão essa identificação final e sua aplicação deve confirmar a presença da mesma.
<p>Os callbacks são enviados pela Efí via <code>POST url-webhook-cadastrada?hmac=hash-cadastrada</code> quando há uma alteração no status. </p>


 

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Informação</b>
</div>
<p>Caso você precise testar os endpoints de Pagamentos do Open Finance, temos um ambiente de homologação funcional que permite simular todos os status retornados pela nossa API e webhook.</p>
<p>Se o valor do pagamento for de <b>R$ 0.11</b>:<br/>
<i>O pagamento será rejeitado, e a informação será enviada via webhook.</i><br/>
Se o valor do pagamento for diferente de <b>R$ 0.11</b>:<br/>
<i>O pagamento será aceito, e a informação será enviada via webhook.</i><br/></p>
</div>
<br/>

### Requisição
 
<div className="link-responsivo">
<div className="requisicao">
<p>Uma requisição <code>POST</code> é enviada pela Efí para a URL que você cadastrou como webhook. É importante mencionar que cada requisição de callback (envio do objeto JSON) possui um limite de tempo de resposta de 25 segundos. Caso seu servidor não responda dentro desse prazo, a requisição será interrompida.</p>

<details  className="no_border">

  <summary>
 <b> Exemplos:</b>
</summary>
<div className="left">
    A seguir, veja alguns exemplos do objeto JSON enviado.
</div>
<div className="right">
    <Modal filename="/markdown/open-finance/config-aplicacao/recebendo_callbacks.md" />
</div>

<br/>
<br/>

<Tabs
    defaultValue="Exemplo1"
    values={[
    { label: 'Exemplo 1 - Iniciação de Pagamento', value: 'Exemplo1', },
    { label: 'Exemplo 2 - Iniciação de Pagamento', value: 'Exemplo2', },
    { label: 'Devolução', value: 'Exemplo', },
    ]}>
    
  <TabItem value="Exemplo1">

  ```json
 // Exemplo - 200 (Notificação enviada com sucesso)
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
 // Exemplo - 200 (Notificação enviada com sucesso)
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
// Exemplo - 200 (Notificação enviada com sucesso)
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

  <b>Respostas</b>

  <br/> 

 As requisições de callback aguardam uma resposta com status HTTP 2XX. Caso o servidor do cliente retorne um status diferente, a Efí fará até 10 novas tentativas de notificação. A primeira nova tentativa será feita 5 minutos após a falha do envio do callback. Persistindo o erro, as tentativas subsequentes serão enviadas em intervalos de tempo cada vez maiores, conforme mostra a tabela abaixo.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Em casos onde o servidor do cliente retorna o status HTTP 429 (<i>too many requests</i>), os servidores da Efí tentarão enviar a notificação até 10 vezes também de acordo com a tabela abaixo.</p>
</div>

 <br/>
  <table className="table">
  <tbody>
    <tr>
      <th>Número da tentativa</th>
      <th>Tempo (em minutos)</th>
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