---
id: cobrancas-lote
title: Batch charges
hide_title: true
sidebar_label: Batch charges
---
<h1 className="titulo">Batch charges</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
The following set of endpoints is responsible for managing batch payments. Payments, in the context of the Pix API, represent a financial transaction between a payer and a payee, with Pix as the payment method.

</div>

<br/>
<br/>


## Due charges in Batch

Brings together endpoints designed to handle the management of batch payments with due dates.

### Create/Update batch of due charges
Endpoint used to create or update a batch of due charges.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Information</b>
</div>
<p>A request for <strong>creating</strong> a payment with status "IN_PROCESS" or "DENIED" is associated with a payment that does not actually exist, therefore it will not be listed in <code>GET /cobv</code> or <code>GET /cobv/:txid</code>.</p>
<p>A charge, once created via <code>PUT /cobv/:txid</code>, cannot be associated with a batch later.</p>
<p>A charge, once created via <code>PUT /lotecobv/:id</code>, cannot be associated with a new batch later.</p>
<p>The batch creation must contain at least <strong>1</strong> payment and at most <strong>1000</strong>.</p>
</div>

<br/>


<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Dica</b>
</div>
<p>After generating the batch payment, you can use the endpoint to <a href="/en/docs/api-pix/cobrancas-com-vencimento#get-due-charges-list" target="_blank">retrieve list of due charges</a>, providing the <code>loteCobvId</code> parameter to return information about the batch.</p>
</div>

<br/>

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/lotecobv/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>lotecobv.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/cobv/Criar_cobranca_lote.md" />
          </div>
      </div>
      <br/> <br/>

For the use case of changing payments, the array to be assigned in the request must be composed of the exact creation requests of payments that appeared in the array assigned in the original request.

You cannot use this endpoint to change a batch of payments by adding or removing existing payments within the set of payments originally created in the batch request.

In other words, if a batch was originally created with payments <code>[a, b, and c]</code>, you cannot change this original set of payments represented by the batch to <code>[a, b, c, d]</code>, or to <code>[a, b]</code>. However, you can change, in batch, the payments <code>[a, b, c]</code>, as originally listed in the batch request.

<br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Example 1', value: 'exemplo', },
    { label: 'Example 2 (loc)', value: 'exemplo 2', }
    ]}>
    
  <TabItem value="exemplo">

  ```json
{
    "descricao": "Cobranças dos alunos do turno vespertino",
    "cobsv": [
      {
        "calendario": {
            "dataDeVencimento": "2020-12-31",
            "validadeAposVencimento": 30
        },
        "txid": "fb2761260e554ad593c7226beb5cb650",
        "devedor": {
            "cpf": "08577095428",
            "nome": "João Souza"
        },
        "valor": {
            "original": "100.00"
        },
        "chave": "7c084cd4-54af-4172-a516-a7d1a12b75cc",
        "solicitacaoPagador": "Informar matrícula"
        },
        {
        "calendario": {
            "dataDeVencimento": "2020-12-31",
            "validadeAposVencimento": 30
        },
        "txid": "7978c0c97ea847e78e8849634473c1f1",
        "devedor": {
            "cpf": "15311295449",
            "nome": "Manoel Silva"
        },
        "valor": {
            "original": "100.00"
        },
        "chave": "7c084cd4-54af-4172-a516-a7d1a12b75cc",
        "solicitacaoPagador": "Informar matrícula"
      }
    ]
}
  ```
  </TabItem>
     <TabItem value="exemplo 2">

  ```json
{
    "descricao": "Cobranças dos alunos do turno vespertino",
    "cobsv": [
      {
        "calendario": {
            "dataDeVencimento": "2020-12-31",
            "validadeAposVencimento": 30
        },
        "txid": "fb2761260e554ad593c7226beb5cb650",
        "loc": {
            "id": 789
        },
        "devedor": {
            "logradouro": "Alameda Souza, Numero 80, Bairro Braz",
            "cidade": "Recife",
            "uf": "PE",
            "cep": "70011750",
            "cpf": "08577095428",
            "nome": "João Souza"
        },
        "valor": {
            "original": "100.00"
        },
        "chave": "7c084cd4-54af-4172-a516-a7d1a12b75cc",
        "solicitacaoPagador": "Informar matrícula"
        },
        {
        "calendario": {
            "dataDeVencimento": "2020-12-31",
            "validadeAposVencimento": 30
        },
        "txid": "7978c0c97ea847e78e8849634473c1f1",
        "loc": {
            "id": 57221
        },
        "devedor": {
            "logradouro": "Rua 15, Numero 1, Bairro Campo Grande",
            "cidade": "Recife",
            "uf": "PE",
            "cep": "70055751",
            "cpf": "15311295449",
            "nome": "Manoel Silva"
        },
        "valor": {
            "original": "100.00"
        },
        "chave": "7c084cd4-54af-4172-a516-a7d1a12b75cc",
        "solicitacaoPagador": "Informar matrícula"
      }
    ]
}
  ```
  </TabItem>

  </Tabs>

  <br/>   
        
  <b>Responses</b>

  <br/> 

  The Responses below represent Success(201) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 202', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 503', value: '503', },
    ]}>
  <TabItem value="saida">

  ```json
Lote de cobranças com vencimento solicitado para criação.
  ```
  </TabItem>
  <TabItem value="400">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/LoteCobVOperacaoInvalida",
    "title": "Lote de cobranças inválido.",
    "status": 400,
    "detail": "A requisição que busca alterar ou criar um lote de cobranças com vencimento não respeita o _schema_ ou está semanticamente errada.",
    "violacoes": [
      {
      "razao": "O objeto loteCobV.cobsV não respeita o _schema_.",
      "propriedade": "loteCobV.cobsV"
      },
      {
      "razao": "O campo loteCobV.descricao não respeita o _schema_.",
      "propriedade": "loteCobV.descricao"
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
  <TabItem value="404">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/NaoEncontrado",
    "title": "Não Encontrado",
    "status": 404,
    "detail": "Entidade não encontrada."
}
  ```
  </TabItem>
  <TabItem value="503">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/ServicoIndisponivel",
    "title": "Serviço Indisponível",
    "status": 503,
    "detail": "Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento."
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

### Review batch specific charges
Endpoint used to review specific charges within a batch of due charges.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Information</b>
</div>
<p>The difference between this endpoint and the related PUT endpoint is that this endpoint supports a <code>cobsv</code> array with fewer requests to create or change charges than the array assigned in the original batch request.</p >
<p>You cannot, however, use this endpoint to add or remove requests for changes or creation of charges as contained in the original batch request.</p>
</div>

<br/>

<!-- Método PATCH -->
<div className="patch">
<details className="col-100">
  <summary>
    <b><HighlightPatch>PATCH</HighlightPatch> /v2/lotecobv/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>lotecobv.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/cobv/Revisar_cobranca_lote.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Example', value: 'exemplo1', }
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "cobsv": [
      {
        "calendario": {
          "dataDeVencimento": "2020-01-10"
        },
        "txid": "fb2761260e554ad593c7226beb5cb650",
        "valor": {
          "original": "110.00"
        }
      },
      {
        "calendario": {
          "dataDeVencimento": "2020-01-10"
        },
        "txid": "7978c0c97ea847e78e8849634473c1f1",
        "valor": {
          "original": "110.00"
        }
      }
    ]
}

  ``` 
  </TabItem>
  </Tabs>
  

  <br/>        
  <b>Responses</b>

  <br/> 

  The Responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 202', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 503', value: '503', },
    ]}>
  <TabItem value="saida">

  ```json
Solicitação de revisão do Lote de cobranças encaminhada para processamento.
  ```
  </TabItem>
  <TabItem value="400">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/CobVOperacaoInvalida",
    "title": "Operação inválida.",
    "status": 400,
    "detail": "Cobrança não encontra-se mais com o status ATIVA, somente cobranças ativas podem ser revisadas."
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
  <TabItem value="404">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/NaoEncontrado",
    "title": "Não Encontrado",
    "status": 404,
    "detail": "Entidade não encontrada."
}
  ```
  </TabItem>
  <TabItem value="503">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/ServicoIndisponivel",
    "title": "Serviço Indisponível",
    "status": 503,
    "detail": "Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento."
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

### GET batch of due charges
Endpoint to retrieve a specific batch of due charges.

<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/lotecobv/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>lotecobv.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/cobv/Consultar_lote_cobv.md" />
          </div>
      </div>
       <br/> <br/>

  <b>Responses</b>

  <br/> 

  The Responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 503', value: '503', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "descricao": "Cobranças dos alunos do turno vespertino",
    "criacao": "2020-11-01T20:15:00.358Z",
    "cobsv": [
      {
        "criacao": "2020-11-01T20:15:00.358Z",
        "txid": "fb2761260e554ad593c7226beb5cb650",
        "status": "CRIADA"
      },
      {
        "txid": "7978c0c97ea847e78e8849634473c1f1",
        "status": "NEGADA",
        "problema": {
          "type": "https://pix.bcb.gov.br/api/v2/error/CobVOperacaoInvalida",
          "title": "Cobrança inválida.",
          "status": 400,
          "detail": "A requisição que busca alterar ou criar uma cobrança com vencimento não respeita o _schema_ ou está semanticamente errada.",
          "violacoes": [
            {
              "razao": "O objeto cobv.devedor não respeita o _schema_.",
              "propriedade": "cobv.devedor"
            }
          ]
        }
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
 <TabItem value="404">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/NaoEncontrado",
    "title": "Não Encontrado",
    "status": 404,
    "detail": "Entidade não encontrada."
}
  ```
 </TabItem>
  <TabItem value="503">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/ServicoIndisponivel",
    "title": "Serviço Indisponível",
    "status": 503,
    "detail": "Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento."
}
  ```
  </TabItem>
  </Tabs>

</details>
</div> 

<br/>

### Get list of batch of due charges

Endpoint to retrieve due charges using parameters such as inicio, fim, cpf, cnpj and status.

<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/lotecobv</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>lotecobv.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/cobv/Listar_lotes_cobv.md" />
          </div>
      </div>
      <br/> <br/>

<p><b>Request</b></p>
The code snippet below illustrates the consumption of the endpoint in a request with the minimum possible parameters (the date range <code>inicio</code> and <code>fim</code>) and the format in which these parameters should be passed.

<br/><br/>

  <code>
  /v2/lotecobv?inicio=2023-01-01T16:01:35Z&fim=2023-12-30T16:01:35Z
 </code>

  <br/>    
 <br/>

  <b>Responses</b>

  <br/> 

  The Responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 503', value: '503', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "parametros": {
      "inicio": "2020-01-01T00:00:00Z",
      "fim": "2020-12-01T23:59:59Z",
      "paginacao": {
        "paginaAtual": 0,
        "itensPorPagina": 100,
        "quantidadeDePaginas": 1,
        "quantidadeTotalDeItens": 2
      }
    },
    "lotes": [
      {
        "$ref": "openapi.yaml#/components/examples/loteCobVResponse1/value"
      },
      {
        "$ref": "openapi.yaml#/components/examples/loteCobVResponse2/value"
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
  <TabItem value="503">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/ServicoIndisponivel",
    "title": "Serviço Indisponível",
    "status": 503,
    "detail": "Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento."
}
  ```
  </TabItem>
  </Tabs>

</details>
</div>


</div>