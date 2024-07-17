---
id: envio-pagamento-pix
title: Envio e Pagamento Pix
hide_title: true
sidebar_label: Envio e Pagamento Pix
---
<h1 className="titulo">Envio e Pagamento Pix</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Os endpoints a seguir trazem as funcionalidades disponíveis para a gestão do Envio de Pix e do Pagamento de QR Codes Pix.
</div>

<br/>
<br/>

  ## Requisitar envio de Pix
Endpoint destinado a realizar o envio direto de um Pix para uma chave Pix cadastrada em um PSP seja da Efí ou outro. Esse endpoint poderá sofrer alterações quando entrar no escopo de padronização do BACEN. Neste caso, os clientes habilitados serão avisados com antecedência.

  Para habilitar o endpoint de Envio de Pix em produção, é necessário preencher <a href="https://www.cognitoforms.com/GerencianetPagamentos1/Formul%C3%A1rioDeSolicita%C3%A7%C3%A3oDePermiss%C3%A3oParaEnvioDeValoresPixViaAPI" target="_blank">este formulário</a>. Após o preenchimento, basta aguardar que entraremos em contato. 

  Para utilização do <i>endpoint</i> de Requisitar envio de Pix, além da liberação do escopo <i>pix.send</i> é necessário que a chave Pix do pagador tenha um <i>webhook</i> associado a ela. Por meio do <i>webhook</i> a Efí irá informar a você se o envio do Pix foi realizado com sucesso ou não.

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b> Instruções para testes em homologação</b>
  </div>
  <p>Se você precisa testar o endpoint de envio de Pix, temos um ambiente funcional de homologação onde é possível simular todos os status retornados pela nossa API e pelo webhook.</p>
  <ul>
  <li>Se o valor do Pix está entre <strong>R$ 0.01</strong> à <strong>R$ 10.00</strong>:  <br/>
      <i>Pix é confirmado, informação virá via Webhook.</i></li>
  <li>Se o valor do Pix está entre <strong>R$ 10.01</strong> à <strong>R$ 20.00</strong>: <br/>
      <i>Pix é rejeitado, informação virá via Webhook</i></li>
  <li>Se o valor do Pix é acima de <strong>R$ 20.00</strong>: <br/>
      <i>Pix é rejeitado já na requisição, informação não virá via Webhook.</i></li>
  <li>Os pagamentos enviados com valor de <strong>R$ 4,00</strong> irão gerar duas devoluções recebidas no valor de <strong>R$ 2,00</strong>.</li>
  <li>Os pagamentos enviados com valor de <strong>R$ 5,00</strong> irão gerar uma devolução recebida no valor de <strong>R$ 5,00</strong>.</li>
  <li>Os pagamentos enviados via chave só serão confirmados ou rejeitados se for utilizada a chave de homologação: <code>efipay@sejaefi.com.br</code>. Caso contrário, um erro de chave inválida será informado.</li>
  <li>Os pagamentos enviados via dados bancários não sofrem alterações.</li>
  </ul>

</div>
<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>Para melhorar o desempenho do serviço e evitar conflitos de saldo, recomendamos que <strong>o envio de Pix por API seja condicionado à conclusão da transação anterior, que é notificada por meio do webhook</strong>. Se essa prática não for seguida e várias requisições de envio forem feitas ao mesmo tempo, o integrador pode enfrentar problemas no envio.</p>
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
            Requer autorização para o escopo: <code>pix.send</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/payment/Enviar_pix.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Exemplo 1', value: 'exemplo1', },
    { label: 'Exemplo 2', value: 'exemplo2', },
    { label: 'Exemplo 3', value: 'exemplo3', },
    { label: 'Exemplo 4', value: 'exemplo4', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  //Exemplo de transferência para chave Pix
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
  //Exemplo de transferência para dados bancários
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
//Exemplo validando o titular da chave
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
  //Exemplo com chave favorecido tipo telefone
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo.
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
    "mensagem": "A chave informada não faz referência à conta Efí autenticada"
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

## Consultar Pix enviado através do endToEndId

  Endpoint para consultar um Pix enviado através de seu <code>e2eId</code>.

<!-->Matodo GET<-->

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/pix/enviados/<HighlightVar>:e2eId</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.pix.send.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/payment/Consultar_pix_enviado.md" />
          </div>
      </div>
 <br/> <br/>   
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🟢 200', value: '200', },
      { label: '🔴 404', value: '404', },
    ]}>
  <TabItem value="saida">

  ```json
 { // Pix enviado através endpoint da API Pix para uma chave pix
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
  { // Pix enviado através endpoint da API Pix via dados bancários
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

## Consultar Pix enviado através do Identificador da transação

  Endpoint para consultar um Pix enviado através do <code>idEnvio</code>.

<!-->Matodo GET<-->

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/pix/enviados/id-envio/<HighlightVar>:idEnvio</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.pix.send.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/payment/Consultar_pix_enviado_id.md" />
          </div>
      </div>
 <br/> <br/>   
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🟢 200', value: '200', },
      { label: '🔴 404', value: '404', },
    ]}>
  <TabItem value="saida">

  ```json
 { // Pix enviado através endpoint da API Pix para uma chave pix
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
  { // Pix enviado através endpoint da API Pix via dados bancários
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

  ## Consultar lista de Pix enviados
Endpoint para consultar vários Pix enviados.

Este endpoint possui filtros para afunilar os resultados da busca. Dentre todos os filtros disponíveis, os filtros <code>inicio</code> e <code>fim</code> são obrigatórios e representam o intervalo de datas em que as cobranças consultadas devem estar compreendidas.
  
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/pix/enviados</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.pix.send.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/payment/Listar_enviados.md" />
          </div>
      </div>
      <br/>

  <br/>    

  <p><b>Requisição</b></p> 
   Para obter o resultado da consulta é necessário informar os parâmetros inicio e fim, como exibido no trecho de código abaixo. Esses parâmetros restringem os resultados para os Pix enviados compreendidos nesse intervalo de datas.  
<br/>
<br/>
   <code>/v2/gn/pix/enviados?inicio=2022-01-01T00:00:00.000Z&fim=2022-12-31T23:59:59.000Z</code>


  <br/>
<br/>
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🟢 200', value: '200', },
      { label: '🔴 404', value: '404', },
    ]}>
  <TabItem value="saida">

  ```json
   Pix enviado através endpoint da API Pix para uma chave pix
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
 Pix enviado através endpoint da API Pix via dados bancários
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

## Detalhar QR Code Pix 

Endpoint que permite detalhar as informações associadas a um QR Code Pix.



<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v2/gn/qrcodes/detalhar</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.qrcodes.read</code> 
          </div>
          <div className="right">
           <Modal filename="/markdown/pix/payment/Detalhar_qrcode.md" />
          </div>
      </div>
      <br/> <br/>
      <p><p><b>Requisição</b></p></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Exemplo', value: 'exemplo', },
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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

## Pagar QR Code Pix 

Endpoint que permite pagar um QR Code Pix via API. 

O endpoint de pagar um QR Code Pix via API é semelhante ao de enviar Pix, pois o envio em questão será destinado a pagar a cobrança especificada no campo <i>pixCopiaECola</i>. Esse endpoint poderá sofrer alterações quando entrar no escopo de padronização do BACEN. Neste caso, os clientes habilitados serão avisados com antecedência.

Para utilização do endpoint Pagar QR Code Pix, além da liberação do escopo <i>gn.qrcodes.pay</i>, é necessário que a chave Pix do pagador tenha um webhook associado a ela. Por meio do webhook a Efí irá informar a você se o pagamento foi realizado com sucesso ou não.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Para pagar uma cobrança via API é necessário informar o <strong>idEnvio</strong>, assim como acontece no envio comum. Este identificador deve ser único tanto para envios comuns quanto para envios de pagamentos de QR Code;</p>
<p>Para consumir o endpoint de pagamento de QR Code Pix não é necessário um prévio consumo do endpoint de detalhar QR Code Pix. O endpoint de detalhar é complementar ao de pagamento, ou seja, o integrador pode consumir o endpoint de detalhamento, conferir as informações e, posteriormente, consumir o endpoint de pagamento. Entretanto, o integrador tem liberdade de consumir o endpoint de pagamento diretamente;</p>
</div>
<br/>


<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/gn/pix/<HighlightVar>:idEnvio</HighlightVar>/qrcode</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.qrcodes.pay</code> 
          </div>
          <div className="right">
         <Modal filename="/markdown/pix/payment/Pagar_qrcode.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Exemplo', value: 'exemplo', },
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo.
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