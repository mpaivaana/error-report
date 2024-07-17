---
id: cobrancas-imediatas
title: Cobranças imediatas
hide_title: true
sidebar_label: Cobranças imediatas
---
<h1 className="titulo">Cobranças imediatas </h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
O conjunto de endpoints a seguir é responsável pela gestão de cobranças imediatas. As cobranças, no contexto da API Pix representam uma transação financeira entre um pagador e um recebedor, cuja forma de pagamento é o Pix.

</div>

<br/>
<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Informação</b>
</div>
<p>Para testar os endpoints de cobrança Pix Cob em ambiente de homologação, é possível simular todos os status retornados pela nossa API e webhook.</p>
<p>Cobranças com valor entre <b>R$ 0.01</b> à <b>R$ 10.00</b> são confirmadas, e você receberá a informação via Webhook.<br/>
Cobranças com valor acima de <b>R$ 10.00</b> permanecem ativas, sem confirmação, e não há webhook nesses casos.<br/></p>
</div>
<br/>

## Criar cobrança imediata (sem txid)
Endpoint para criar uma cobrança imediata sem informar um <code>txid</code>.

Geralmente, o <code>txid</code> é criado pelo usuário recebedor e está sob sua responsabilidade. No entanto, este endpoint é uma exceção a essa regra, e, nesse caso, o <code>txid</code> será definido pela Efí.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v2/cob</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cob.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cob/Cobranca_imediata.md" />
          </div>
      </div>
      <br/> <br/>
      <p><p><b>Requisição</b></p></p>
     
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Exemplo 1 (CPF)', value: 'exemplo1', },
    { label: 'Exemplo 2 (CNPJ)', value: 'exemplo2', },
    { label: 'Exemplo 3 (loc)', value: 'exemplo3', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "calendario": {
      "expiracao": 3600
    },
    "devedor": {
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "valor": {
      "original": "123.45"
    },
    "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be",
    "solicitacaoPagador": "Cobrança dos serviços prestados."
  }
  ``` 
  </TabItem>
  <TabItem value="exemplo2">

  ```json
  {
    "calendario": {
      "expiracao": 3600
    },
    "devedor": {
      "cnpj": "12345678000195",
      "nome": "Empresa de Serviços SA"
    },
    "valor": {
      "original": "37.00"
    },
    "chave": "ac107ed7-97cd-4fe7-8df5-a5f5659bf2f3",
    "solicitacaoPagador": "Serviço realizado.",
    "infoAdicionais": [
      {
        "nome": "Campo 1",
        "valor": "Informação Adicional1 do PSP-Recebedor"
      },
      {
        "nome": "Campo 2",
        "valor": "Informação Adicional2 do PSP-Recebedor"
      }
    ]
  }
  ```
  </TabItem>
  <TabItem value="exemplo3">

  ```json
  {
    "calendario": {
      "expiracao": 3600
    },
    "devedor": {
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "valor": {
      "original": "123.45"
    },
    "loc": {
      "id": 1
    },
    "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be",
    "solicitacaoPagador": "Cobrança dos serviços prestados."
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
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "calendario": {
      "criacao": "2020-09-09T20:15:00.358Z",
      "expiracao": 3600
    },
    "txid": "7978c0c97ea847e78e8849634473c1f1",
    "revisao": 0,
    "loc": {
      "id": 789,
      "location": "pix.example.com/qr/v2/9d36b84fc70b478fb95c12729b90ca25",
      "tipoCob": "cob"
    },
    "location": "pix.example.com/qr/v2/9d36b84fc70b478fb95c12729b90ca25",
    "status": "ATIVA",
    "devedor": {
      "cnpj": "12345678000195",
      "nome": "Empresa de Serviços SA"
    },
    "valor": {
      "original": "567.89"
    },
    "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",
    "solicitacaoPagador": "Informar cartão fidelidade",
    "pixCopiaECola": "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2/41e0badf811a4ce6ad8a80b306821fce5204000053000065802BR5905EFISA6008SAOPAULO60070503***61040000"
  }
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  InvalidOperationError
  {
    "nome": "documento_bloqueado",
    "mensagem": "O documento desta conta tem bloqueios que impedem a emissão"
  }

  Ou

  {
    "nome": "chave_invalida",
    "mensagem": "A chave informada não faz referência à conta Efí autenticada"
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

   Ou

  {
    "nome": "valor_invalido",
    "mensagem": "Documento CNPJ em devedor.cnpj é inválido"
  }
  ```
  </TabItem>
  <TabItem value="409">

  ```json
  DuplicatedRegisterError
  {
    "nome": "txid_duplicado",
    "mensagem": "Campo txid informado já foi utilizado em outra cobrança"
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

## Criar cobrança imediata (com txid)
Endpoint para cadastrar uma cobrança com um identificador de transação (<code>txid</code>).

<!-- Método PUT -->
<div className="put"> 
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/cob/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cob.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cob/Cobranca_imediata_txid.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Exemplo 1 (CPF)', value: 'exemplo1', },
    { label: 'Exemplo 2 (CNPJ)', value: 'exemplo2', },
    { label: 'Exemplo 3 (loc)', value: 'exemplo3', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "calendario": {
      "expiracao": 3600
    },
    "devedor": {
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "valor": {
      "original": "123.45"
    },
    "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be",
    "solicitacaoPagador": "Cobrança dos serviços prestados."
  }
  ``` 
  </TabItem>
  <TabItem value="exemplo2">

  ```json
  {
    "calendario": {
      "expiracao": 3600
    },
    "devedor": {
      "cnpj": "12345678000195",
      "nome": "Empresa de Serviços SA"
    },
    "valor": {
      "original": "37.00"
    },
    "chave": "ac107ed7-97cd-4fe7-8df5-a5f5659bf2f3",
    "solicitacaoPagador": "Serviço realizado.",
    "infoAdicionais": [
      {
        "nome": "Campo 1",
        "valor": "Informação Adicional1 do PSP-Recebedor"
      },
      {
        "nome": "Campo 2",
        "valor": "Informação Adicional2 do PSP-Recebedor"
      }
    ]
  }
  ```
  </TabItem>
  <TabItem value="exemplo3">

  ```json
  {
    "calendario": {
      "expiracao": 3600
    },
    "devedor": {
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "valor": {
      "original": "123.45"
    },
    "loc": {
      "id": 1
    },
    "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be",
    "solicitacaoPagador": "Cobrança dos serviços prestados."
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
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "calendario": {
      "criacao": "2020-09-09T20:15:00.358Z",
      "expiracao": 3600
    },
    "txid": "7978c0c97ea847e78e8849634473c1f1",
    "revisao": 0,
    "loc": {
      "id": 789,
      "location": "pix.example.com/qr/v2/9d36b84fc70b478fb95c12729b90ca25",
      "tipoCob": "cob"
    },
    "location": "pix.example.com/qr/v2/9d36b84fc70b478fb95c12729b90ca25",
    "status": "ATIVA",
    "devedor": {
      "cnpj": "12345678000195",
      "nome": "Empresa de Serviços SA"
    },
    "valor": {
      "original": "567.89"
    },
    "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",
    "solicitacaoPagador": "Informar cartão fidelidade",
    "pixCopiaECola": "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2/41e0badf811a4ce6ad8a80b306821fce5204000053000065802BR5905EFISA6008SAOPAULO60070503***61040000"
  }
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  InvalidOperationError
  {
    "nome": "documento_bloqueado",
    "mensagem": "O documento desta conta tem bloqueios que impedem a emissão"
  }

  Ou

  {
    "nome": "chave_invalida",
    "mensagem": "A chave informada não faz referência à conta Efí autenticada"
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

   Ou

  {
    "nome": "valor_invalido",
    "mensagem": "Documento CNPJ em devedor.cnpj é inválido"
  }
  ```
  </TabItem>
  <TabItem value="409">

  ```json
  DuplicatedRegisterError
  {
    "nome": "txid_duplicado",
    "mensagem": "Campo txid informado já foi utilizado em outra cobrança"
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

## Revisar cobrança
Endpoint para revisar (modificar) uma cobrança a partir do seu <code>txid</code>.

<!-- Método PATCH -->
<div className="patch">
<details className="col-100">
  <summary>
    <b><HighlightPatch>PATCH</HighlightPatch> /v2/cob/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cob.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cob/Revisar_cobranca.md" />
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
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "loc": {
      "id": 7768
    },
    "devedor": {
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "valor": {
      "original": "123.45"
    },
    "solicitacaoPagador": "Informe o número ou identificador do pedido."
  }
  ``` 
  </TabItem>
  <TabItem value="exemplo2">

  ```json
  {
    "valor": {
      "original": "567.89"
    },
    "solicitacaoPagador": "Informe o número ou identificador do pedido."
  }
  ```
  </TabItem>
  <TabItem value="exemplo3">

  ```json
  {
    "status": "REMOVIDA_PELO_USUARIO_RECEBEDOR"
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
      { label: '🔴 409', value: '409', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "status": "ATIVA",
    "calendario": {
      "criacao": "2020-09-09T20:15:00.358Z",
      "expiracao": 3600
    },
    "location": "pix.example.com/qr/9d36b84f-c70b-478f-b95c-12729b90ca25",
    "txid": "7978c0c97ea847e78e8849634473c1f1",
    "revisao": 1,
    "devedor": {
      "cnpj": "12345678000195",
      "nome": "Empresa de Serviços SA"
    },
    "valor": {
      "original": "567.89"
    },
    "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",
    "solicitacaoPagador": "Informe o número ou identificador do pedido.",
    "pixCopiaECola": "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2/41e0badf811a4ce6ad8a80b306821fce5204000053000065802BR5905EFISA6008SAOPAULO60070503***61040000"
  }
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  UnknownRegisterError
  {
    "nome": "cobranca_nao_encontrada",
    "mensagem": "Nenhuma cobrança encontrada para o txid informado"
  }

  Ou

  InvalidOperationError
  {
    "nome": "status_cobranca_invalido",
    "mensagem": "A cobrança não está mais com o status ATIVA"
  }

  Ou

  {
    "nome": "chave_invalida",
    "mensagem": "A chave informada não faz referência à conta Efí autenticada"
  }

  Ou

  InvalidValueError
  {
    "nome": "valor_invalido",
    "mensagem": "Campo calendario.expiracao deve ser maior ou igual a 1"
  }

  Ou

  {
    "nome": "valor_invalido",
    "mensagem": "Documento CPF em devedor.cpf é inválido"
  }

  Ou

  {
    "nome": "valor_invalido",
    "mensagem": "Documento CNPJ em devedor.cnpj é inválido"
  }
  ```
  </TabItem>
  <TabItem value="409">

  ```json
  DuplicatedRegisterError
  {
    "nome": "txid_duplicado",
    "mensagem": "Campo txid informado já foi utilizado em outra cobrança"
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

## Consultar cobrança
Endpoint para consultar uma cobrança a partir do <code>txid</code>.


<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/cob/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cob.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cob/Consultar_cobranca.md" />
          </div>
      </div>
      <br/> <br/>
  <p><b>Requisição</b></p>
  
  Também é possível consultar informações de uma revisão específica de uma cobrança. Para isso é necessário informar o <i>query param</i> <code>revisao</code>. Exemplo: <code>/v2/cob/:txid/?revisao=1</code>. Quando o parâmetro não é informado, a revisão mais recente é retornada como padrão.

  <br/>    
   <br/>

  <b>Respostas</b>

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🟢 200', value: '200', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "status": "ATIVA",
    "calendario": {
      "criacao": "2020-09-09T20:15:00.358Z",
      "expiracao": "3600"
    },
    "location": "pix.example.com/qr/9d36b84f-c70b-478f-b95c-12729b90ca25",
    "txid": "7978c0c97ea847e78e8849634473c1f1",
    "revisao": 1,
    "devedor": {
      "cnpj": "12345678000195",
      "nome": "Empresa de Serviços SA"
    },
    "valor": {
      "original": "567.89"
    },
    "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",
    "solicitacaoPagador": "Informe o número ou identificador do pedido.",
    "pixCopiaECola": "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2/41e0badf811a4ce6ad8a80b306821fce5204000053000065802BR5905EFISA6008SAOPAULO60070503***61040000"
  }
  ``` 
  </TabItem>
  <TabItem value="200">

  ```json
  {
    "status": "CONCLUIDA",
    "calendario": {
      "criacao": "2020-09-09T20:15:00.358Z",
      "expiracao": "3600"
    },
    "location": "qrcodes-pix.gerencianet.com.br/1dd7f893-a58e-4172-8702-8dc33e21a403",
    "txid": "655dfdb1-a451-4b8f-bb58-254b958913fb",
    "revisao": 1,
    "devedor": {
      "cnpj": "12345678000195",
      "nome": "Empresa de Serviços SA"
    },
    "valor": {
      "original": "100.00"
    },
    "chave": "40a0932d-1918-4eee-845d-35a2da1690dc",
    "solicitacaoPagador": "Informe o número ou identificador do pedido.",
    "pix": [
      {
        "endToEndId": "E12345678202009091221kkkkkkkkkkk",
        "txid": "655dfdb1-a451-4b8f-bb58-254b958913fb",
        "valor": "110.00",
        "horario": "2020-09-09T20:15:00.358Z",
        "infoPagador": "0123456789",
        "devolucoes": [
          {
            "id": "123ABC",
            "rtrId": "Dxxxxxxxx202009091221kkkkkkkkkkk",
            "valor": "10.00",
            "horario": {
              "solicitacao": "2020-09-09T20:15:00.358Z"
            },
            "status": "EM_PROCESSAMENTO"
          }
        ]
      }
    ]
  }
  ```
 </TabItem>
  <TabItem value="400">

  ```json
  UnknownRegisterError
  {
    "nome": "cobranca_nao_encontrada",
    "mensagem": "Nenhuma cobrança encontrada para o txid informado"
  }
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

## Consultar lista de cobranças
Endpoint para consultar várias cobranças.

Este endpoint possui filtros para afunilar os resultados da busca, tais como CPF/CNPJ e status. Dentre todos os filtros disponíveis, os filtros <code>inicio</code> e <code>fim</code> são obrigatórios e representam o intervalo de datas em que as cobranças consultadas devem estar compreendidas.
<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/cob</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cob.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cob/Listar_cobrancas.md" />
          </div>
      </div>
      <br/> <br/>
  <p><b>Requisição</b></p>
  O trecho de código abaixo ilustra o consumo do endpoint em uma requisição com o mínimo de parâmetros possível (o intervalo de datas <code>inicio</code> e <code>fim</code>) e o formato em que esses parâmetros devem ser repassados.

<br/>
<br/>

  <code>
  /v2/cob?inicio=2020-10-22T16:01:35Z&fim=2020-11-30T20:10:00Z
 </code>

  <br/>    
   <br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🟢 200', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "parametros": {
      "inicio": "2020-04-01T00:00:00Z",
      "fim": "2020-04-02T10:00:00Z",
      "paginacao": {
        "paginaAtual": 0,
        "itensPorPagina": 100,
        "quantidadeDePaginas": 1,
        "quantidadeTotalDeItens": 2
      }
    },
    "cobs": [
      {
        "status": "ATIVA",
        "calendario": {
          "criacao": "2020-09-09T20:15:00.358Z",
          "expiracao": "3600"
        },
        "location": "qrcodes-pix.gerencianet.com.br/9d36b84f-c70b-478f-b95c-12729b90ca25",
        "txid": "7978c0c97ea847e78e8849634473c1f1",
        "revisao": 1,
        "devedor": {
          "cnpj": "12345678000195",
          "nome": "Empresa de Serviços SA"
        },
        "valor": {
          "original": "567.89"
        },
        "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",
        "solicitacaoPagador": "Informe o número ou identificador do pedido.",
        "pixCopiaECola": "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2/41e0badf811a4ce6ad8a80b306821fce5204000053000065802BR5905EFISA6008SAOPAULO60070503***61040000"
      },
      {
        "status": "CONCLUIDA",
        "calendario": {
          "criacao": "2020-09-09T20:15:00.358Z",
          "expiracao": "3600"
        },
        "location": "qrcodes-pix.gerencianet.com.br/1dd7f893-a58e-4172-8702-8dc33e21a403",
        "txid": "655dfdb1a4514b8fbb58254b958913fb",
        "revisao": 1,
        "devedor": {
          "cnpj": "12345678000195",
          "nome": "Empresa de Serviços SA"
        },
        "valor": {
          "original": "100.00"
        },
        "chave": "40a0932d-1918-4eee-845d-35a2da1690dc",
        "solicitacaoPagador": "Informe o número ou identificador do pedido.",
        "pixCopiaECola": "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2/41e0badf811a4ce6ad8a80b306821fce5204000053000065802BR5905EFISA6008SAOPAULO60070503***61040000",
        "pix": [
          {
            "endToEndId": "E12345678202009091221kkkkkkkkkkk",
            "txid": "655dfdb1a4514b8fbb58254b958913fb",
            "valor": "110.00",
            "horario": "2020-09-09T20:15:00.358Z",
            "pagador": {
              "cnpj": "12345678000195",
              "nome": "Empresa de Serviços SA"
            },
            "infoPagador": "0123456789",
            "devolucoes": [
              {
                "id": "123ABC",
                "rtrId": "Dxxxxxxxx202009091221kkkkkkkkkkk",
                "valor": "10.00",
                "horario": {
                    "solicitacao": "2020-09-09T20:15:00.358Z"
                },
                "status": "EM_PROCESSAMENTO"
              }
            ]
          }
        ]
      }
    ]
}

  ``` 
  </TabItem>
  <TabItem value="200">

  ```json
{
    "parametros": {
      "inicio": "2020-04-01T00:00:00Z",
      "fim": "2020-04-01T23:59:59Z",
      "paginacao": {
        "paginaAtual": 0,
        "itensPorPagina": 100,
        "quantidadeDePaginas": 1,
        "quantidadeTotalDeItens": 1
      }
    },
    "cobs": [
      {
        "status": "ATIVA",
        "calendario": {
          "criacao": "2020-09-09T20:15:00.358Z",
          "expiracao": "3600"
        },
        "location": "qrcodes-pix.gerencianet.com.br/9d36b84f-c70b-478f-b95c-12729b90ca25",
        "txid": "7978c0c9-7ea8-47e7-8e88-49634473c1f1",
        "revisao": 1,
        "devedor": {
          "cnpj": "12345678000195",
          "nome": "Empresa de Serviços SA"
        },
        "valor": {
          "original": "567.89"
        },
        "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",
        "solicitacaoPagador": "Informe o número ou identificador do pedido."
      }
    ]
}
  ```
 </TabItem>
  </Tabs>

</details>
</div> 
<br/>

</div>