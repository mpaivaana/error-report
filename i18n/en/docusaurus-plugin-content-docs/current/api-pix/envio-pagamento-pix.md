---
id: envio-pagamento-pix
title: Payment and Send Pix
hide_title: true
sidebar_label: Payment and Send Pix
---
<h1 className="titulo">Payment and Send Pix</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
The following endpoints bring the functionalities available for managing Pix Sending and Pix QR Code Payment.
</div>

<br/>
<br/>

## Request for Pix sending
Endpoint designed to perform the direct sending of a Pix to a Pix key registered with a PSP, whether it's Efí or another. This endpoint may undergo changes when it enters the BACEN standardization scope. In this case, enabled clients will be notified in advance.

To enable the pix/send endpoint in production, it is necessary to fill out <a href="https://www.cognitoforms.com/GerencianetPagamentos1/Formul%C3%A1rioDeSolicita%C3%A7%C3%A3oDePermiss%C3%A3oParaEnvioDeValoresPixViaAPI" target="_blank">this form</a>. After filling it out, just wait for us to contact you.

To use the Request for Pix sending <i>endpoint</i>, in addition to releasing the <i>pix.send</i> scope, it is necessary for the payer's Pix key to have a <i>webhook</i> associated with it. Through the <i>webhook</i>, Efí will inform you whether the Pix sending was successful or not.

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>Instructions for testing in the Sandbox environment</b>
  </div>
  <p>If you need to test the Pix sending endpoint, we have a functional Sandbox environment where it is possible to simulate all statuses returned by our API and by the webhook.</p>
  <ul>
  <li>If the value of Pix is between <strong>R$ 0.01</strong> and <strong>R$ 10.00</strong>:  <br/>
      <i>Pix is confirmed, information will come via Webhook.</i></li>
  <li>If the value of Pix is between <strong>R$ 10.01</strong> and <strong>R$ 20.00</strong>: <br/>
      <i>Pix is rejected, information will come via Webhook</i></li>
  <li>If the Pix value is above <strong>R$ 20.00</strong>: <br/>
      <i>Pix is rejected already in the request, information will not come via Webhook.</i></li>
  <li>Payments sent with a value of <strong>R$ 4.00</strong> will generate two refunds received in the value of <strong>R$ 2.00</strong>.</li>
  <li>Payments sent with a value of <strong>R$ 5.00</strong> will generate one refund received in the value of <strong>R$ 5.00</strong>.</li>
  <li>Payments sent via key will only be confirmed or rejected if the test key is used: <code>efipay@sejaefi.com.br</code>. Otherwise, an invalid key error will be reported.</li>
  <li>Payments sent via bank details will not be changed.</li>
  </ul>

</div>
<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>To improve service performance and avoid balance conflicts, we recommend that <strong>the Pix sending via API be conditioned on the completion of the previous transaction, which is notified through the webhook</strong>. If this practice is not followed and multiple sending requests are made at the same time, the integrator may face issues with sending.</p>
</div>
<br/>

<br/>
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/gn/pix/<HighlightVar>:idEnvio</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>pix.send</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/payment/Enviar_pix.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Example 1', value: 'exemplo1', },
    { label: 'Example 2', value: 'exemplo2', },
    { label: 'Example 3', value: 'exemplo3', },
    { label: 'Example 4', value: 'exemplo4', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
 // Example of transfer to Pix key
{
    "valor": "12.34",
    "pagador": {
      "chave": "19974764017",
      "infoPagador": "Segue o pagamento da conta"
    },
    "favorecido": {
      "chave": "joão@meuemail.com"
    }
}
  ``` 
  </TabItem>
  <TabItem value="exemplo2">

  ```json
  //Example of transfer for bank details
{
    "valor": "12.34",
    "pagador": {
      "chave": "19974764017",
      "infoPagador": "Segue o pagamento da conta"
    },
    "favorecido": {
      "contaBanco": {
        "nome": "JOSE CARVALHO",
        "cpf": "10519952057",
        "codigoBanco": "09089356",
        "agencia": "1",
        "conta": "123453",
        "tipoConta": "cacc"
      }
    }
}
  ```
  </TabItem>
  <TabItem value="exemplo3">

  ```json
//Example validating the key holder
{
    "valor": "12.34",
    "pagador": {
      "chave": "19974764017"
    },
    "favorecido": {
      "chave": "joão@meuemail.com",
      "cpf": "58629188090"
    }
}
  ```
  </TabItem>
   <TabItem value="exemplo4">

  ```json
  //Example with favored key type telephone
{
    "valor": "12.34",
    "pagador": {
      "chave": "19974764017",
      "infoPagador": "Segue o pagamento da conta"
    },
    "favorecido": {
      "chave": "+5531999998888"
    }
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
      { label: '🔴 409', value: '409', },
      { label: '🔴 422', value: '422', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "idEnvio": "12453567890123456789",
    "e2eId": "E09089356202011251226APIff82f2e5",
    "valor": "12.31",
    "horario": {
      "solicitacao": "2021-11-25T12:26:42.905Z"
    },
    "status":"EM_PROCESSAMENTO"
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json

  {
    "nome": "documento_bloqueado",
    "mensagem": "O documento desta conta tem bloqueios que impedem a emissão"
  }

  Ou

  {
    "nome": "chave_invalida",
    "mensagem": "A chave informada não faz referência à conta Efíautenticada"
  }

  Ou

  {
    "nome": "chave_nao_pertence_ao_documento",
    "mensagem": "O cpf do favorecido é diferente do documento em posse da chave"
  }

  InvalidValueError
  {
    "nome": "valor_invalido",
    "mensagem": "Campo valor.original deve ser maior que zero"
  }

  Ou

  {
    "nome": "valor_invalido",
    "mensagem": "Campo calendario.expiracao deve ser maior que zero"
  }

  Ou

  {
    "nome": "valor_invalido",
    "mensagem": "Documento CPF em devedor.cpf é inválido"
  }

  {
    "nome": "valor_invalido",
    "mensagem": "Documento CNPJ em devedor.cnpj é inválido"
  }
  ```
  </TabItem>
  <TabItem value="409">

  ```json
 {
    "nome": "id_envio_duplicado",
    "mensagem": "O id de envio informado já foi utilizado em outro pagamento"
 }
  ```
  </TabItem>
  <TabItem value="422">

  ```json
{
    "nome": "pagamento_negado",
    "mensagem": "Pagamento negado por análises"
}
  ```
  </TabItem>
  <TabItem value="500">

  ```json
  ApplicationError
  {
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao validar a chave"
  }
  ```
  </TabItem>
  </Tabs>

</details>

</div>
<br/>

## Get Pix sent through the endToEndId

  Endpoint to retrieve a Pix sent through its <code>e2eId</code>.

<!-->Matodo GET<-->

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/pix/enviados/<HighlightVar>:e2eId</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.pix.send.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/payment/Consultar_pix_enviado.md" />
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
      { label: '🔴 404', value: '404', },
    ]}>
  <TabItem value="saida">

  ```json
 { // Pix sent through Pix API endpoint to a pix key
    "endToEndId": "E09089356202210251208APIcdbe38b4",
    "idEnvio": "identificadoEnvio123456789",
    "valor": "0.01",
    "chave": "19974764017",
    "status": "REALIZADO",
    "infoPagador": "Segue o pagamento da conta (endpoint pix sent)",
    "horario": {
      "solicitacao": "2022-10-26T09:05:32.000Z",
      "liquidacao": "2022-10-26T09:05:31.000Z"
    },
    "favorecido": {
      "chave": "francisco@meuemail.com",
      "identificacao": {
        "nome": "Francisco da Silva",
        "cpf": "***.456.789-**"
      }
    }
}
  ``` 
  </TabItem>
 
 <TabItem value="200">

  ```json
  { // Pix sent through Pix API endpoint via bank details
    "endToEndId": "E09089356202210262021APIbh1457fa",
    "idEnvio": "4",
    "valor": "0.01",
    "chave": "19974764017",
    "status": "REALIZADO",
    "infoPagador": "Segue o pagamento da conta (pix.sent dados bancarios)",
    "horario": {
      "solicitacao": "2022-10-26T17:21:19.000Z",
      "liquidacao": "2022-10-26T17:21:18.000Z"
    },
    "favorecido": {
      "contaBanco": {
        "nome": "Francisco da Silva",
        "cpf": "***.456.789-**",
        "agencia": "1",
        "conta": "12345678",
        "tipoConta": "corrente"
      }
    }
}
  ```
 </TabItem>
  <TabItem value="404">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/PixEnviadoNaoEncontrado",
    "title": "Não Encontrado",
    "status": 404,
    "detail": "Pix enviado não encontrado para o e2eId informado."
}
  ```
  </TabItem>
  
  </Tabs>

</details>
</div> 

<br/>

## Get Pix sent through the Transaction identifier

Endpoint to retrieve a Pix sent through its <code>idEnvio</code>.

<!-->Matodo GET<-->

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/pix/enviados/id-envio/<HighlightVar>:idEnvio</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>lotecobv.write</code>
            Requer autorização para o escopo: <code>gn.pix.send.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/payment/Consultar_pix_enviado_id.md" />
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
      { label: '🔴 404', value: '404', },
    ]}>
  <TabItem value="saida">

  ```json
 { // Pix sent through Pix API endpoint to a pix key
    "endToEndId": "E09089356202210251208APIcdbe38b4",
    "idEnvio": "identificadoEnvio123456789",
    "valor": "0.01",
    "chave": "19974764017",
    "status": "REALIZADO",
    "infoPagador": "Segue o pagamento da conta (endpoint pix sent)",
    "horario": {
      "solicitacao": "2022-10-26T09:05:32.000Z",
      "liquidacao": "2022-10-26T09:05:31.000Z"
    },
    "favorecido": {
      "chave": "francisco@meuemail.com",
      "identificacao": {
        "nome": "Francisco da Silva",
        "cpf": "***.456.789-**"
      }
    }
}
  ``` 
  </TabItem>
 
 <TabItem value="200">

  ```json
  { // Pix sent through Pix API endpoint via bank details
    "endToEndId": "E09089356202210262021APIbh1457fa",
    "idEnvio": "4",
    "valor": "0.01",
    "chave": "19974764017",
    "status": "REALIZADO",
    "infoPagador": "Segue o pagamento da conta (pix.sent dados bancarios)",
    "horario": {
      "solicitacao": "2022-10-26T17:21:19.000Z",
      "liquidacao": "2022-10-26T17:21:18.000Z"
    },
    "favorecido": {
      "contaBanco": {
        "nome": "Francisco da Silva",
        "cpf": "***.456.789-**",
        "agencia": "1",
        "conta": "12345678",
        "tipoConta": "corrente"
      }
    }
}
  ```
 </TabItem>
  <TabItem value="404">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/PixEnviadoNaoEncontrado",
    "title": "Não Encontrado",
    "status": 404,
    "detail": "Pix enviado não encontrado para o idEnvio informado."
}
  ```
  </TabItem>
  
  </Tabs>

</details>
</div> 

<br/>

  ## Get list of sent Pix
Endpoint to retrieve multiple sent Pix.

This endpoint has filters to narrow down the search results. Among all available filters, the <code>inicio</code> and <code>fim</code> filters are mandatory and represent the date range in which the queried transactions must be included.
  
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/pix/enviados</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.pix.send.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/payment/Listar_enviados.md" />
          </div>
      </div>
      <br/>

  <br/>    

  <p><b>Request</b></p> 
   To obtain the query result, it is necessary to inform the inicio and fim parameters, as shown in the code snippet below. These parameters restrict the results to the sent Pix transactions within this date range.  
<br/>
<br/>
   <code>/v2/gn/pix/enviados?inicio=2022-01-01T00:00:00.000Z&fim=2022-12-31T23:59:59.000Z</code>


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
      { label: '🔴 404', value: '404', },
    ]}>
  <TabItem value="saida">

  ```json
  // Pix sent through Pix API endpoint to a pix key
{ 
    "endToEndId": "E09089356202210251208APIcdbe38b4",
    "idEnvio": "identificadoEnvio123456789",
    "valor": "0.01",
    "chave": "19974764017",
    "status": "REALIZADO",
    "infoPagador": "Segue o pagamento da conta (endpoint pix sent)",
    "horario": {
      "solicitacao": "2022-10-26T09:05:32.000Z",
      "liquidacao": "2022-10-26T09:05:31.000Z"
    },
    "favorecido": {
      "chave": "francisco@meuemail.com",
      "identificacao": {
        "nome": "Francisco da Silva",
        "cpf": "***.456.789-**"
      }
    }
}
  ``` 
  </TabItem>
  <TabItem value="200">

  ```json
// Pix sent through Pix API endpoint via bank details
  { 
    "endToEndId": "E09089356202210262021APIbh1457fa",
    "idEnvio": "4",
    "valor": "0.01",
    "chave": "19974764017",
    "status": "REALIZADO",
    "infoPagador": "Segue o pagamento da conta (pix.sent dados bancarios)",
    "horario": {
      "solicitacao": "2022-10-26T17:21:19.000Z",
      "liquidacao": "2022-10-26T17:21:18.000Z"
    },
    "favorecido": {
      "contaBanco": {
        "nome": "Francisco da Silva",
        "cpf": "***.456.789-**",
        "agencia": "1",
        "conta": "12345678",
        "tipoConta": "corrente"
      }
    }
}
  ```
 </TabItem>
  <TabItem value="404">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/PixEnviadoNaoEncontrado",
    "title": "Não Encontrado",
    "status": 404,
    "detail": "Pix enviado não encontrado para o e2eId informado."
}
  ```
  </TabItem>
  </Tabs>

</details>
</div> 

<br/>
 

## Detail QR Code Pix 

Endpoint that allows you to detail the information associated with a QR Code Pix.



<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v2/gn/qrcodes/detalhar</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.qrcodes.read</code> 
          </div>
          <div className="right">
           <Modal filename="/markdown/i18n/pix/payment/Detalhar_qrcode.md" />
          </div>
      </div>
      <br/> <br/>
      <p><p><b>Request</b></p></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Example', value: 'exemplo', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
{
    "pixCopiaECola": "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2 41e0badf811a4ce6ad8a80b306821fce5204000053000065802BR5905EFISA6008SAOPAULO60070503***61040000"
}
  ``` 
  </TabItem>
  </Tabs>


  <br/>
        
  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 422', value: '422', },
      { label: '🔴 429', value: '429', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "tipoCob": "cob",
    "txid": "7978c0c97ea847e78e8849634473c1f1",
    "revisao": 0,
    "calendario": {
        "criacao": "2024-07-03T12:34:27.000Z",
        "apresentacao": "2024-07-03T12:34:40.238Z",
        "expiracao": 3600
    },
    "status": "ATIVA",
    "devedor": {
        "nome": "Francisco da Silva",
        "cpf": "***.456.789-**"
    },
    "recebedor": {
        "nome": "Empresa de Serviços SA",
        "cpf": "***.456.789-**"
    },
    "valor": {
        "final": "567.89"
    },
    "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",
    "solicitacaoPagador": "Cobrança dos serviços prestados."
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/QrcodeOperacaoInvalida", 
    "title": "Operação Inválida", 
    "status": 400, 
    "detail": "A requisição que busca pagar um qrcode não respeita o schema ou está semanticamente errada.", 
    "violacoes": [ 
      { 
        "razao": "O pixCopiaECola informado é referente a uma cobrança estática",
        "propriedade": "qrcode.pixCopiaECola" 
      } 
    ]
}

Ou

{
    "type": "https://pix.bcb.gov.br/api/v2/error/QrcodeOperacaoInvalida", 
    "title": "Operação Inválida", 
    "status": 400, 
    "detail": "A requisição que busca pagar um qrcode não respeita o schema ou está semanticamente errada.", 
    "violacoes": [ 
      { 
        "razao": "A chave do recebedor não foi encontrada",
        "propriedade": "qrcode.pixCopiaECola" 
      } 
    ]
}
  ```
  </TabItem>
      <TabItem value="403">

  ```json
{
    "error": "insufficient_scope", 
    "error_description": "Access token has insufficient scope" 
}
```
  </TabItem>
    <TabItem value="422">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/QrcodeOperacaoInvalida", 
    "title": "Operação Inválida", 
    "status": 422, 
    "detail": "A requisição que busca pagar um qrcode não respeita o schema ou está semanticamente errada.", 
    "violacoes": [ 
      { 
        "razao": "O pixCopiaECola informado é inválido.",
        "propriedade": "qrcode.pixCopiaECola" 
      } 
    ]
}

  ```
  </TabItem>
       <TabItem value="429">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/BaldeFichasVazio", 
    "title": "Balde de Fichas Vazio ", 
    "status": 429, 
    "detail": "Não há fichas no balde a serem consumidas "
}
```
  </TabItem>
  <TabItem value="500">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/QrcodeErroInterno",
    "title": "Erro Interno",
    "status": 500,
    "detail": "Funcionalidade desabilitada em ambiente de homologação."
}

OU

{
    "type": "https://pix.bcb.gov.br/api/v2/error/QrcodeErroInterno",
    "title": "Erro Interno",
    "status": 500,
    "detail": "Ocorreu um erro interno ao processar a requisição para detalhar o qrcode."
}

OU

{
    "type": "https://pix.bcb.gov.br/api/v2/error/QrcodeErroInterno",
    "title": "Erro Interno",
    "status": 500,
    "detail": "Ocorreu um erro interno ao buscar os detalhes da chave do recebedor."
}

OU

{
    "nome": "erro_interno_servidor", 
    "mensagem": "Erro Interno do servidor"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

## Pay QR Code Pix 

Endpoint that allows you to pay for a Pix QR Code via API. 

The endpoint of paying a QR Code Pix via API is similar to Pix sending, as the sending in question will be used to pay the charge specified in the <i>pixCopiaECola</i> field. This endpoint may undergo changes when it enters the BACEN standardization scope. In this case, enabled clients will be notified in advance.

To use Pay QR Code Pix endpoint, in addition to releasing the <i>gn.qrcodes.pay</i> scope, it is necessary for the payer's Pix key to have a webhook associated with it. Through the webhook, Efí will inform you whether the payment was made successfully or not.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>To pay a charge via API it is necessary to inform the <strong>idEnvio</strong>, just as with regular shipping. This identifier must be unique for both common shipments and QR Code payment submissions;</p>
<p>To consume the QR Code Pix payment endpoint, it is not necessary to previously consume the Detail QR Code Pix endpoint. The detailing endpoint is complementary to the payment endpoint, that is, the integrator can consume the detailing endpoint, check the information and, later, consume the payment endpoint. However, the integrator is free to consume the payment endpoint directly;</p>
</div>
<br/>


<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/gn/pix/<HighlightVar>:idEnvio</HighlightVar>/qrcode</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.qrcodes.pay</code> 
          </div>
          <div className="right">
         <Modal filename="/markdown/i18n/pix/payment/Pagar_qrcode.md" />
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
    "pagador": {
      "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",
      "infoPagador": "Pagamento de QR Code via API Pix"
    },
    "pixCopiaECola": "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2 41e0badf811a4ce6ad8a80b306821fce5204000053000065802BR5905EFISA6008SAOPAULO60070503***61040000"
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
      {label: '🟢 201', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "idEnvio": "12453567890123456789",
    "e2eId": "E09089356202011251226APIff82f2e5",
    "valor": "12.31",
    "horario": {
      "solicitacao": "2021-11-25T12:26:42.905Z"
    },
    "status":"EM_PROCESSAMENTO"
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/QrcodeOperacaoInvalida", 
    "title": "Operação Inválida", 
    "status": 400, 
    "detail": "A requisição que busca pagar um qrcode não respeita o schema ou está semanticamente errada.", 
    "violacoes": [ 
      { 
        "razao": "Saldo insuficiente para realizar o pagamento", 
        "propriedade": "qrcode.pagador" 
      } 
    ]
}
  ```
  </TabItem>
      <TabItem value="403">

  ```json
{
    "error": "insufficient_scope", 
    "error_description": "Access token has insufficient scope" 
}
```
  </TabItem>
  <TabItem value="500">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/QrcodeErroInterno",
    "title": "Erro Interno",
    "status": 500,
    "detail": "Funcionalidade desabilitada em ambiente de homologação."
}

OU

{
    "nome": "erro_interno_servidor", 
    "mensagem": "Erro Interno do servidor"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>
<br/>

</div>