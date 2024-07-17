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
Informações dos pagamentos disponíveis na API Open Finance
</div>

<br/>
<br/>

## Solicitar iniciação de Pix via Open Finance

Este endpoint é utilizado para inserir as informações do pagamento que será iniciado na API Open Finance. A resposta desse endpoint será uma URL de redirecionamento, que deve ser incorporada a um botão no aplicativo ou página web. Quando a pessoa usuária clicar nesse botão, ela será redirecionada para a instituição detentora da conta, onde o pagamento será efetuado.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/pagamentos/pix</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.opb.payment.pix.send</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/open-finance/config-aplicacao/solicitar_iniciacao.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Iniciação de pagamento', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
Exemplo de iniciação de pagamento
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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

Ou

{
    "nome": "agencia_favorecido_obrigatorio",
    "mensagem": "A agência do favorecido é obrigatório"
}

Ou

{
    "nome": "numero_conta_favorecido_obrigatorio",
    "mensagem": "O número da conta do favorecido é obrigatório"
}

Ou

{
    "nome": "tipo_conta_favorecido_obrigatorio",
    "mensagem": "O tipo conta do favorecido é obrigatório"
}

Ou

{
    "nome": "documento_favorecido_obrigatorio",
    "mensagem": "O documento do favorecido é obrigatório"
}

Ou

{
    "nome": "nome_favorecido_obrigatorio",
    "mensagem": "O nome do favorecido é obrigatório"
}

Ou

{
    "nome": "cpf_pagador_obrigatorio",
    "mensagem": "O cpf do pagador é obrigatório"
}

Ou

{
    "nome": "dados_pagador_obrigatorio",
    "mensagem": "Os dados do pagador são obrigatórios"
}

Ou

{
    "nome": "erro_iniciacao_pagamento",
    "mensagem": "${mensagem}"
}

Ou

{
    "nome": "chave_idempotencia_obrigatorio",
    "mensagem": "O cabeçalho de 'x-idempotency-key' é obrigatório"
}

Ou

{
    "nome": "identificador_participante_obrigatorio",
    "mensagem": "O identificador do participante é requerido"
}

Ou

{
    "nome": "valor_obrigatorio",
    "mensagem": "O valor da transação é obrigatório"
}
  ```
 </TabItem>
  <TabItem value="401">

  ```json
  Este erro ocorre nas seguintes situações:

* Certificado ou credenciais não existem;
* Certificado ou credenciais estão desativados;
* Certificado e credenciais não estão vinculados a mesma conta Efí
* Integrador não tem permissão para o escopo de serviço necessário para consumir este endpoint.
  ```
  </TabItem>
  <TabItem value="403">

  ```json
 Este erro ocorre nas seguintes situações:

* Integrador solicita acesso a um escopo ao qual não tem permissão.
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

Ou

{
    "nome": "codigo_banco_invalido",
    "mensagem": "O código do banco é inválido"
}

Ou

{
    "nome": "agencia_invalida",
    "mensagem": "A agência é invalida"
  }

Ou

{
    "nome": "numero_conta_favorecido_invalido",
    "mensagem": "O número da conta do favorecido é inválido"
}

Ou

{
    "nome": "tipo_conta_favorecido_invalida",
    "mensagem": "O tipo conta do favorecido é invalida, permitido (CACC/SLRY/SVGS/TRAN)"
}

Ou

{
    "nome": "documento_favorecido_invalido",
    "mensagem": "O documento do favorecido é inválido"
}

Ou

{
    "nome": "id_proprio_invalido",
    "mensagem": "O campo idProprio deve ser texto"
}

Ou

{
    "nome": "cnpj_pagador_invalido",
    "mensagem": "O cnpj do pagador é obrigatório"
}

Ou

{
    "nome": "cpf_pagador_invalido",
    "mensagem": "O cpf do pagador é obrigatório"
}

Ou

{
    "nome": "codigo_cidade_ibge_invalido",
    "mensagem": "O código de IBGE da cidade é inválido"
}

Ou

{
    "nome": "nome_favorecido_invalido",
    "mensagem": "O nome do favorecido é inválido"
}

Ou

{
    "nome": "identificador_participante_invalido",
    "mensagem": "O identificador do participante é inválido"
}

Ou

{
    "nome": "valor_invalido",
    "mensagem": "O valor da transação é inválido"
}
  ```
  </TabItem>

  <TabItem value="431">

  ```json
 Erro na aplicação
{
    "nome": "chave_idempotencia_invalida",
    "mensagem": "Tamanho da chave de idempotência inválido"
}
  ```
  </TabItem>


  <TabItem value="500">

  ```json
 Erro na aplicação
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

## Listar pagamentos por um determinado período

Este endpoint é utilizado para listar as informações dos pagamentos que foram efetuados em um período de tempo.

<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/pagamentos/pix</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.opb.payment.pix.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/open-finance/config-aplicacao/listar_pagamentos.md" />
          </div>
      </div>
      <br/> <br/>
  <p><b>Requisição</b></p>
  Para obter o resultado da consulta é necessário informar os parâmetros inicio e fim, como exibido no trecho de código abaixo. Esses parâmetros representam o intervalo de datas em que as cobranças consultadas devem estar compreendidas.
<br/>
  <code>/v1/pagamentos/pix?inicio=2022-05-01&fim=2022-12-30</code>

  <br/>    
   <br/>

  <b>Respostas</b>

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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

Ou

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

Ou

{
    "nome": "data_fim_obrigatorio",
    "mensagem": "A data fim é obrigatória"
}

Ou

{
    "nome": "identificador_pagamento_invalido",
    "mensagem": "O identificador do pagamento é inválido"
}

Ou

{
    "nome": "status_pagamento_invalido",
    "mensagem": "O status do pagamento informado é inválido, permitido (pendente/agendado/rejeitado/aceito/erro)"
}
  ```
  </TabItem>
<TabItem value="500">

  ```json
 Erro na aplicação
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

## Cancelar um pagamento agendado

Este endpoint é utilizado para cancelar um pagamento agendado

<!-- Método PATCH -->
<div className="patch">
<details className="col-100">
  <summary>
    <b><HighlightPatch>PATCH</HighlightPatch> /v1/pagamentos/pix/<HighlightVar>:identificadorPagamento</HighlightVar>/cancelar</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.opb.payment.pix.cancel</code> 
          </div>
          <div className="right">
           <Modal filename=" /markdown/open-finance/config-aplicacao/cancelar.md" />
          </div>
      </div>
     <br/> <br/>

  <p><b>Requisição</b></p>
  A requisição enviada para esse endpoint não precisa de um body, apenas os cabeçalhos de autorização OAuth, parâmetros e o certificado da conta.
    
  <br/>
    <br/>

  <b>Respostas</b>
  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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