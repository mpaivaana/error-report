---
id: devolucao
title: Refund
hide_title: true
sidebar_label: Refund
---
<h1 className="titulo">Refund</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Information about Refunds from the Efí Open Finance API

</div>

<br/>
<br/>

## Perform a payment refund

This endpoint is used to process a payment refund.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/pagamentos/pix/<HighlightVar>:identificadorPagamento</HighlightVar>/devolver</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.opb.payment.pix.refund</code>
          </div>
          <div className="right">
          <Modal filename=" /markdown/i18n/open-finance/config-aplicacao/devolucao.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Refund', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "valor": "0.01"
  }
  ``` 
  </TabItem>
  
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

  The responses below represent Success(202) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 202', value: 'saida', },
      { label: '🔴 400', value: '400', },
      {label: '🔴 422', value: '422', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  Processando devolução
{
    "identificadorPagamento": "urn:efi:ae71713f-875b-4af3-9d85-0bcb43288847",
    "valorDevolucao": "0.01",
    "dataCriacao": "2022-10-28 10:02:25",
    "status": "pendente"
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
Erro na requisição
{
    "nome": "identificador_pagamento_obrigatorio",
    "mensagem": "O campo identificadorPagamento é obrigatório"
}

Or

{
    "nome": "valor_devolucao_invalido",
    "mensagem": "O valor de devolução inválido"
}
  ```

  </TabItem>

  <TabItem value="422">

  ```json
Erro na requisição
{
    "nome": "identificador_pagamento_invalido",
    "mensagem": "O identificador de pagamento é inválido"
}

Or

{
    "nome": "status_pagamento_invalido_para_devolucao",
    "mensagem": "O status do pagamento é invalido para devolução"
}

Or

{
    "nome": "saldo_devolucao_insuficiente",
    "mensagem": "O valor da devolução ultrapassou o valor recebido"
}

Or

{
    "nome": "saldo_insuficiente",
    "mensagem": "O saldo em conta é insuficiente para efetuar esta transação"
}

  ```
  </TabItem>
    <TabItem value="500">

  ```json
Erro no servidor
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