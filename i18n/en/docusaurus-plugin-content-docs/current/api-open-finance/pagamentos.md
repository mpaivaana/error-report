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
Information about payments available in the Open Finance API.
</div>

<br/>
<br/>

## Request to start using Pix via Open Finance

This endpoint is used to enter payment information that will be initiated in the Open Finance API. The response of this endpoint will be a redirection URL, which must be incorporated into a button in the application or web page. When the user clicks on this button, they will be redirected to the account holding institution, where the payment will be made.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/pagamentos/pix</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.opb.payment.pix.send</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/open-finance/config-aplicacao/solicitar_iniciacao.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Payment initiation', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
Example of payment initiation
{
    "pagador": {
      "idParticipante": "9f4cd202-8f2b-11ec-b909-0242ac120002",
      "cpf": "45204392050", 
      "cnpj": "90293071000112"
    },
    "favorecido": {
      "contaBanco": {
        "codigoBanco": "09089356",
        "agencia": "0001",
        "documento": "11122233344",
        "nome": "Luiz Silva",
        "conta": "654984",
        "tipoConta": "CACC"
      }
    },
    "detalhes": {
      "valor": "9.90",
      "infoPagador": "Compra dia xx",
      "idProprio": "2330",
      "dataAgendamento": "2023-09-20"
    }
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
      {label: '🔴 401', value: '401', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 409', value: '409', },
      {label: '🔴 422', value: '422', },
      {label: '🔴 431', value: '431', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "identificadorPagamento": "urn:efi:ae71713f-875b-4af3-9d85-0bcb43288847",
    "redirectURI": "https://open-banking.banco.com.br/authorize?request=eyJjd"
  }
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
  {
    "nome": "codigo_banco_favorecido_obrigatorio",
    "mensagem": "O código do banco favorecido é obrigatório"
  }

Or

{
    "nome": "agencia_favorecido_obrigatorio",
    "mensagem": "A agência do favorecido é obrigatório"
}

Or

{
    "nome": "numero_conta_favorecido_obrigatorio",
    "mensagem": "O número da conta do favorecido é obrigatório"
}

Or

{
    "nome": "tipo_conta_favorecido_obrigatorio",
    "mensagem": "O tipo conta do favorecido é obrigatório"
}

Or

{
    "nome": "documento_favorecido_obrigatorio",
    "mensagem": "O documento do favorecido é obrigatório"
}

Or

{
    "nome": "nome_favorecido_obrigatorio",
    "mensagem": "O nome do favorecido é obrigatório"
}

Or

{
    "nome": "cpf_pagador_obrigatorio",
    "mensagem": "O cpf do pagador é obrigatório"
}

Or

{
    "nome": "dados_pagador_obrigatorio",
    "mensagem": "Os dados do pagador são obrigatórios"
}

Or

{
    "nome": "erro_iniciacao_pagamento",
    "mensagem": "${mensagem}"
}

Or

{
    "nome": "chave_idempotencia_obrigatorio",
    "mensagem": "O cabeçalho de 'x-idempotency-key' é obrigatório"
}

Or

{
    "nome": "identificador_participante_obrigatorio",
    "mensagem": "O identificador do participante é requerido"
}

Or

{
    "nome": "valor_obrigatorio",
    "mensagem": "O valor da transação é obrigatório"
}
  ```
 </TabItem>
  <TabItem value="401">

  ```json
 This error occurs in the following situations:

* Certificate or credentials do not exist;
* Certificate or credentials are disabled;
* Certificate and credentials are not linked to the same Efí account;
* Integrator does not have permission for the necessary service scope to consume this endpoint.
  ```
  </TabItem>
  <TabItem value="403">

  ```json
This error occurs in the following situations:

* Integrator requests access to a scope to which it does not have permission.
  ```
  </TabItem>

  <TabItem value="409">

  ```json
 {
    "nome": "conflito_chave_idempotencia",
    "mensagem": "Chave de idempotência repetida para pagamento diferente"
  }
  ```
  </TabItem>

  <TabItem value="422">

  ```json
 {
    "nome": "codigo_banco_nao_permitido",
    "mensagem": "O código do banco informado não é permitido"
  }

Or

{
    "nome": "codigo_banco_invalido",
    "mensagem": "O código do banco é inválido"
}

Or

{
    "nome": "agencia_invalida",
    "mensagem": "A agência é invalida"
  }

Or

{
    "nome": "numero_conta_favorecido_invalido",
    "mensagem": "O número da conta do favorecido é inválido"
}

Or

{
    "nome": "tipo_conta_favorecido_invalida",
    "mensagem": "O tipo conta do favorecido é invalida, permitido (CACC/SLRY/SVGS/TRAN)"
}

Or

{
    "nome": "documento_favorecido_invalido",
    "mensagem": "O documento do favorecido é inválido"
}

Or

{
    "nome": "id_proprio_invalido",
    "mensagem": "O campo idProprio deve ser texto"
}

Or

{
    "nome": "cnpj_pagador_invalido",
    "mensagem": "O cnpj do pagador é obrigatório"
}

Or

{
    "nome": "cpf_pagador_invalido",
    "mensagem": "O cpf do pagador é obrigatório"
}

Or

{
    "nome": "codigo_cidade_ibge_invalido",
    "mensagem": "O código de IBGE da cidade é inválido"
}

Or

{
    "nome": "nome_favorecido_invalido",
    "mensagem": "O nome do favorecido é inválido"
}

Or

{
    "nome": "identificador_participante_invalido",
    "mensagem": "O identificador do participante é inválido"
}

Or

{
    "nome": "valor_invalido",
    "mensagem": "O valor da transação é inválido"
}
  ```
  </TabItem>

  <TabItem value="431">

  ```json
Application error
{
    "nome": "chave_idempotencia_invalida",
    "mensagem": "Tamanho da chave de idempotência inválido"
}
  ```
  </TabItem>


  <TabItem value="500">

  ```json
Application error
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

## List of Payments for a Specific Period

This endpoint is used to list information about payments that were made within a specific time period.


<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/pagamentos/pix</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.opb.payment.pix.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/open-finance/config-aplicacao/listar_pagamentos.md" />
          </div>
      </div>
      <br/> <br/>
  <p><b>Request</b></p>
   To obtain the query result, it is necessary to inform the parameters `inicio` and `fim`, as shown in the code snippet below. These parameters represent the date range within which the queried payments should be included.
<br/>
  <code>/v1/pagamentos/pix?inicio=2022-05-01&fim=2022-12-30</code>

  <br/>    
   <br/>

  <b>Responses</b>

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 404', value: '404', },
      {label: '🔴 422', value: '422',},
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "pagamentos": [
      {
        "identificadorPagamento": "urn:efi:49315a93-d39c-4564-9edb-9a73678dbdb1",
        "endToEndId": "E00038166201907261559y6j6",
        "valor": "1.99",
        "status": "aceito",
        "dataCriacao": "2022-04-29T11:55:03.000Z",
        "devolucoes": [
          {
            "identificadorDevolucao": "D09089356202211111429d82ecc2ecde",
            "valor": "1.99",
            "status": "aceito",
            "dataCriacao": "2022-04-29T11:59:03.000Z"
          }
        ],
        "idProprio": "6236574863254"
      }
    ],
    "total": 3,
    "porPagina": 1,
    "ultimo": "/pagamentos/pix?inicio=2022-04-29&fim=2022-04-29&quantidade=1&pagina=3",
    "proximo": "/pagamentos/pix?inicio=2022-04-29&fim=2022-04-29&quantidade=1&pagina=2",
    "anterior": null,
    "atual": "/pagamentos/pix?inicio=2022-04-29&fim=2022-04-29&quantidade=1&pagina=1"
}
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "data_inicio_invalido",
    "mensagem": "A data início é inválida"
}

Or

{
    "nome": "data_fim_invalido",
    "mensagem": "A data fim é inválida"
}
  ```
 </TabItem>
  <TabItem value="404">

  ```json
  {
    "nome": "pagamento_nao_encontrado",
    "mensagem": "Nenhum pagamento encontrado"
  }
  ```
  </TabItem>
  <TabItem value="422">

  ```json
{
    "nome": "data_inicio_obrigatorio",
    "mensagem": "A data início é obrigatória"
}

Or

{
    "nome": "data_fim_obrigatorio",
    "mensagem": "A data fim é obrigatória"
}

Or

{
    "nome": "identificador_pagamento_invalido",
    "mensagem": "O identificador do pagamento é inválido"
}

Or

{
    "nome": "status_pagamento_invalido",
    "mensagem": "O status do pagamento informado é inválido, permitido (pendente/agendado/rejeitado/aceito/erro)"
}
  ```
  </TabItem>
<TabItem value="500">

  ```json
Application error
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

## Cancel a scheduled payment

This endpoint is used to cancel a scheduled payment

<!-- Método PATCH -->
<div className="patch">
<details className="col-100">
  <summary>
    <b><HighlightPatch>PATCH</HighlightPatch> /v1/pagamentos/pix/<HighlightVar>:identificadorPagamento</HighlightVar>/cancelar</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.opb.payment.pix.cancel</code>
          </div>
          <div className="right">
           <Modal filename=" /markdown/i18n/open-finance/config-aplicacao/cancelar.md" />
          </div>
      </div>
     <br/> <br/>

  <p><b>Request</b></p>
  The request sent to this endpoint does not need a body, only the OAuth authorization headers, the parameters and the account certificate.
    
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
      { label: '🔴 422', value: '422', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "pagamentos": {
      "identificadorPagamento": "urn:efi:ae71713f-875b-4af3-9d85-0bcb43288847",
      "dataCancelamento": "2023-08-16 10:02:25",
      "status": "cancelado"
    }
  }
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  {
    "nome": "identificador_pagamento_obrigatorio",
    "mensagem": "O campo identificadorPagamento é obrigatório"
  }
  ```
  </TabItem>
  <TabItem value="422">

  ```json
  {
    "nome": "identificador_pagamento_invalido",
    "mensagem": "O identificador do pagamento é inválido"
  }
  ```
  </TabItem>
  <TabItem value="500">

  ```json
  {
    "nome": "erro_aplicacao",
    "mensagem": "Erro interno do servidor"
  }
  ```
  </TabItem>
  </Tabs>

</details>

</div>

</div>