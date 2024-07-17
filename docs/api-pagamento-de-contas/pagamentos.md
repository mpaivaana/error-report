---
id: pagamentos
title: Pagamentos
hide_title: true
sidebar_label: Pagamentos
---
<h1 className="titulo">Pagamentos</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Esta página contém todos os endpoints da API Pagamento de contas Efí.
</div>

<br/>
<br/>

## Detalhar código de barras para pagamento
Este endpoint deve ser usado para detalhar as informações vinculadas a um código de barras de qualquer tipo de cobrança. O uso deste endpoint é obrigatório antes de realizar um pagamento, pois ele ajuda a evitar erros no processamento.


<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
  </div>
<p>Há dois tipos de cobranças e elas podem retornar informações diferentes. São eles:</p>
<p><ol>
<li><strong>Tipo tributo</strong> – conhecido também como títulos e convênios, esse tipo de cobrança é emitido por concessionárias de serviços, como: conta de água, luz, telefone e gás. Eles não são registrados na Câmara Interbancária de Pagamento (CIP) e, por isso, não retornam as mesmas informações que um boleto registrado na CIP apresenta.</li>
<li><strong>Tipo boleto</strong> – possui registro na Câmara Interbancária de Pagamento (CIP) e, por isso, após ser consultado, o endpoint retorna informações mais completas sobre o pagamento.</li>
</ol></p>
<p>No item “Respostas”, a seguir, você confere o retorno das consultas que é apresentado em cada tipo de cobrança.</p>
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
            Requer autorização para o escopo: <code>gn.barcode.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/payments/consultar_cod_barras.md" />
          </div>
      </div>
      <br/> <br/>
       <p><b>Requisição</b></p>

  Este endpoint utiliza query params em seu funcionamento, portanto devem ser enviados pela URL, como exemplificado no trecho de código abaixo.

<code>/v1/codBarras/:codBarras</code>

  <br/>    
   <br/>

  <b>Respostas</b>

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo(400).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200 (Tipo boleto)', value: 'saida', },
      { label: '🟢 200 (Tipo Tributo)', value: '200', },
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

Ou

{
    "nome": "erro_de_validacao",
    "mensagem": "Código de barras inválido"
}

Ou

{
    "mensagem": "must NOT have more than 48 characters"
}

Ou

{
    "mensagem": "must NOT have fewer than 44 characters"
}

Ou

{
    "nome": "Error",
    "mensagem": "must be number"
}

Ou

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

## Solicitar pagamento de código de barras

Este endpoint deve ser usado para solicitar o pagamento de um código de barras para a data atual ou futura.

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
  </div>
<p>Para pagamento no mesmo dia, os boletos são aceitos até as 22 horas, com exceção dos boletos com valores superiores a R$249.000,00 que são aceitos até as 14 horas. No caso de contas de consumo (água, energia, TV a cabo, gás e telefone) e tributos, o processamento ocorre até às 18 horas. Mas, é possível agendá-los para o próximo dia útil.</p>
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
            Requer autorização para o escopo: <code>gn.barcode.pay.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/payments/solicitar_pagamento.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      
      
Este endpoint utiliza query params em seu funcionamento, portanto devem ser enviados pela URL, como exemplificado no trecho de código abaixo.
<br/>
<br/>
<code>/v1/codBarras/:codBarras</code>

<br/>
<br/>
      
  <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Exemplo', value: 'exemplo', },
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo(400).
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

## Consultar solicitação de pagamento

Consulta o status da solicitação de pagamento anteriormente efetuada a partir do <code>idPagamento</code>.

<!-- Método GET -->

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/<HighlightVar>:idPagamento</HighlightVar></b>
  </summary>
  <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.barcode.pay.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/payments/consultar_solicitacao_de_pagamento.md" />
          </div>
      </div>
      <br/><br/>
       <p><b>Requisição</b></p>
 
  Este endpoint utiliza query params em seu funcionamento, portanto devem ser enviados pela URL, como exemplificado no trecho de código abaixo.
<br/>
<br/>
<code>/v1/:idPagamento</code>

  <br/>    
   <br/>

  <b>Respostas</b>

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo(400).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200 (LIQUIDADO)', value: 'saida', },
      { label: '🟢 200 (NÃO LIQUIDADO)', value: '200', },
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

## Consultar resumo de solicitações de pagamento

Este endpoint deve ser usado para solicitar o resumo das solicitações de pagamento realizadas em um período informado.

<!-- Método GET -->

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/resumo</b>
  </summary>
  <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.barcode.pay.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/payments/consultar_resumo_pagamento.md" />
          </div>
      </div>
      <br/><br/>
       <p><b>Requisição</b></p>

  Este endpoint utiliza query params em seu funcionamento, portanto devem ser enviados pela URL, como exemplificado no trecho de código abaixo.

<code>/v1/resumo</code>

  <br/>    
   <br/>

  <b>Respostas</b>

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo(400).
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

Ou

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
