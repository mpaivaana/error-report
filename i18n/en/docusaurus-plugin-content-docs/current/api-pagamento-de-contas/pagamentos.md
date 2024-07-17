---
id: pagamentos
title: Payments
hide_title: true
sidebar_label: Payments
---
<h1 className="titulo">Payments</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
This page contains all the endpoints of the Efí Bill Payment API.
</div>

<br/>
<br/>

## Detailing barcode for payment
This endpoint should be used to detail the information linked to a barcode of any type of charge. Using this endpoint is mandatory before making a payment, as it helps to avoid errors in processing.


<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>
<p>There are two types of charges and they can return different information. Are they:</p>
<p><ol>
<li><strong>Tribute type</strong> – also known as titles and agreements, this type of charge is issued by service concessionaires, such as: water, electricity, telephone, and gas bills. They are not registered with the "Câmara Interbancária de Pagamento" (CIP) and therefore do not return the same information as a ticket registered with the CIP.</li>
<li><strong>Billet type</strong> – has registration with the "Câmara Interbancária de Pagamento" (CIP) and therefore, after being consulted, the endpoint returns more complete information about the payment.</li>
</ol></p>
<p>In the item "Responses" below, you can check the return of the queries of each type of charge.</p>
</div>

<br/>


<!-- Método GET -->

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/codBarras/<HighlightVar>:codBarras</HighlightVar></b>
  </summary>
  <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.barcode.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/payments/consultar_cod_barras.md" />
          </div>
      </div>
      <br/> <br/>
       <p><b>Request</b></p>

  This endpoint uses query params in its operation, so they must be sent via the URL, as exemplified in the code snippet below.

<code>/v1/codBarras/:codBarras</code>

  <br/>    
   <br/>

  <b>Responses</b>

  The responses below represent Success(200) and consumption failures/errors(400).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200 (Billet type)', value: 'saida', },
      { label: '🟢 200 (Tribute type)', value: '200', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "tipo": "boleto",
    "banco": {
      "codigo": 364,
      "nome": "EFI S.A."
    },
    "codBarras": "0000000000000000000000000000000000",
    "linhaDigitavel": "000000000000000000000000000000000",
    "datas": {
      "vencimento": "2021-06-22 14:23:42",
      "limitePagamento": "2021-09-22 14:23:42"
    },
    "beneficiario": {
      "nome": "João da Silva",
      "fantasia": "Padaria do João",
      "documento": "00000000000000"
    },
    "pagador": {
      "nome": "Gorbadock Oldbuck",
      "documento": "00000000000"
    },
    "valores": {
      "original": 1000,
      "abatimento": 0,
      "multa": 200,
      "juros": 2,
      "desconto": 300,
      "final": 902
    },
    "informacoesPagamento": {
      "divergente": {
        "deveAceitar": false,
        "valorMinimo": 0,
        "valorMaximo": 0
      },
      "parcial": {
        "deveAceitar": false,
        "limiteDePagamentos": 0
      },
      "podeSerPago": true
    }
}
  ``` 
  </TabItem>
  <TabItem value="200">

  ```json
{
    "tipo": "tributo",
    "banco": null,
    "codBarras": "84620000000470000113222928260060772936353800",
    "linhaDigitavel": "846200000004470000113220292826006077729363538004",
    "datas": {
      "vencimento": "contraApresentacao",
      "limitePagamento": null
    },
    "beneficiario": null,
    "pagador": null,
    "sacadorAvalista": null,
    "valores": {
      "original": 4700,
      "abatimento": null,
      "pago": null,
      "final": 4700
    },
    "informacoesPagamento": null
}
  ```
 </TabItem>
  <TabItem value="400">

  ```json
  UnknownRegisterError
{
    "erro": 0,
    "descricao": "Código de barras inválido"
}

Or

{
    "nome": "erro_de_validacao",
    "mensagem": "Código de barras inválido"
}

Or

{
    "mensagem": "must NOT have more than 48 characters"
}

Or

{
    "mensagem": "must NOT have fewer than 44 characters"
}

Or

{
    "nome": "Error",
    "mensagem": "must be number"
}

Or

{
    "nome": "erro_de_validacao",
    "mensagem": "Código de barras não localizado na base centralizada"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>
<br/>

## Request barcode payment

This endpoint should be used to request payment of a barcode for the current or future date.

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>
<p>For same-day payments, bills are accepted until 10 PM, except for bills with values ​​exceeding R$249,000.00 which are accepted until 2 PM. In the case of consumer bills (water, electricity, cable TV, gas, and telephone) and taxes, processing occurs until 6 PM. However, it is possible to schedule them for the next business day.</p>
</div>
<br/>


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/codBarras/<HighlightVar>:codBarras</HighlightVar></b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.barcode.pay.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/payments/solicitar_pagamento.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      
      
This endpoint uses query parameters in its operation, therefore they must be sent via the URL, as exemplified in the code snippet below.
<br/>
<br/>
<code>/v1/codBarras/:codBarras</code>

<br/><br/>
      
  <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Example', value: 'exemplo', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
{
    "valor": 500,
    "dataPagamento": "2022-03-10",
    "descricao": "Pagamento de boleto, teste API Pagamento de Contas"
}
  ``` 
  </TabItem>
  
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

  The responses below represent Success(201) and consumption failures/errors(400).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 201', value: 'saida', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "idPagamento": "31234652",
    "valorPago": 500,
    "status": "LIQUIDADO",
    "data": {
      "solicitacao": "2021-06-22 14:23:42",
      "pagamento": "2021-06-25 13:03:20"
    }
  }
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  {
    "erro": 0,
    "descricao": "Código de barras inválido"
  }
  ```
  </TabItem>
 
  </Tabs>

</details>

</div>
<br/>

## Get payment request

Check the status of the payment request previously made using the <code>idPagamento</code>.

<!-- Método GET -->

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/<HighlightVar>:idPagamento</HighlightVar></b>
  </summary>
  <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.barcode.pay.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/payments/consultar_solicitacao_de_pagamento.md" />
          </div>
      </div>
      <br/><br/>
       <p><b>Request</b></p>
 
This endpoint uses query parameters in its operation, therefore they must be sent via the URL, as exemplified in the code snippet below.
<br/>    
   <br/>

<code>/v1/:idPagamento</code>

  <br/>    
   <br/>

  <b>Responses</b>

  The responses below represent Success(200) and consumption failures/errors(400).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200 (SETTLED)', value: 'saida', },
      { label: '🟢 200 (UNSETTLED)', value: '200', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "idPagamento": "304578214",
    "valorPago": 1000,
    "status": "LIQUIDADO",
    "motivoRecusa": null,
    "data": {
      "solicitacao": "2021-09-22 14:23:42",
      "pagamento": "2021-09-22 10:23:42"
    }
}
  ``` 
  </TabItem>
  <TabItem value="200">

  ```json
{
    "idPagamento": 524090299,
    "codBarras": "36400000000000000000000000000000000000000000",
    "linhaDigitavel": "36400000000000000000000000000000000000000000000",
    "valorPago": 2000,
    "status": "NAO_REALIZADO",
    "retornoBancario": "Limite mensal excedido.",
    "protocolo": null,
    "descricao": "EFI S.A.",
    "horario": {
      "solicitacao": "2022-04-01T12:47:04.000Z"
    }
}
  ```
 </TabItem>
  <TabItem value="400">

  ```json
{
    "erro": 0,
    "descricao": "Pagamento não encontrado"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>
<br/>

## Get summary of payment requests

This endpoint should be used to retrieve a summary of payment requests made within a specified period.


<!-- Método GET -->

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/resumo</b>
  </summary>
  <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.barcode.pay.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/payments/consultar_resumo_pagamento.md" />
          </div>
      </div>
      <br/><br/>
       <p><b>Request</b></p>

  This endpoint uses query parameters in its operation, therefore they must be sent via the URL, as exemplified in the code snippet below.

<code>/v1/resumo</code>

  <br/>    
   <br/>

  <b>Responses</b>

  The responses below represent Success(200) and consumption failures/errors(400).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "datas": {
      "inicial": "2022-04-01",
      "final": "2022-10-25"
    },
    "solicitacoes": {
      "total": 0,
      "processando": 0,
      "sucesso": 0,
      "falha": 0,
      "cancelada": 0
    },
    "solicitacoesFalhas": [
      0
    ]
}
  ``` 
  </TabItem>
  
  <TabItem value="400">

  ```json
{
    "nome": "erro_de_validacao",
    "mensagem": "A propriedade dataInicio é obrigatória"
}

Or

{
    "nome": "erro_de_validacao",
    "mensagem": "A propriedade dataFim é obrigatória"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>


</div>
