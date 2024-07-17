---
id: cobrancas-com-vencimento
title: Cobranças com vencimento
hide_title: true
sidebar_label: Cobranças com vencimento
---
<h1 className="titulo">Cobranças com vencimento</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
O conjunto de endpoints a seguir é responsável pela gestão de cobranças com vencimento. As cobranças, no contexto da API Pix, representam uma transação financeira entre um pagador e um recebedor, cuja forma de pagamento é o Pix.

</div>

<br/>
<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Informação</b>
</div>
<p>Para testar os endpoints de cobrança Pix Cobv em ambiente de homologação, é possível simular todos os status retornados pela nossa API e webhook.</p>
<p>Cobranças com valor entre <b>R$ 0.01</b> à <b>R$ 10.00</b> são confirmadas, e você receberá a informação via Webhook.<br/>
Cobranças com valor acima de <b>R$ 10.00</b> permanecem ativas, sem confirmação, e não há webhook nesses casos.<br/></p>
</div>
<br/>


## Criar cobrança com vencimento
Endpoint para cadastrar uma cobrança com vencimento e um identificador de transação (<code>txid</code>).

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/cobv/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cobv.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cobv/Cobranca_imediata_cobv.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Exemplo 1 ', value: 'exemplo', },
    { label: 'Exemplo 2 (loc)', value: 'exemplo2', }
    ]}>
    
  <TabItem value="exemplo">

  ```json
{
    "calendario": {
      "dataDeVencimento": "2022-12-01",
      "validadeAposVencimento": 30
    },
    "devedor": {
      "logradouro": "Alameda Souza, Numero 80, Bairro Braz",
      "cidade": "Recife",
      "uf": "PE",
      "cep": "70011750",
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "valor": {
      "original": "123.45",
      "multa": {
        "modalidade": 2,
        "valorPerc": "15.00"
      },
      "juros": {
        "modalidade": 2,
        "valorPerc": "2.00"
      },
      "desconto": {
        "modalidade": 1,
        "descontoDataFixa": [
          {
            "data": "2022-11-30",
            "valorPerc": "30.00"
          }
        ]
      }
    },
    "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",
    "solicitacaoPagador": "Cobrança dos serviços prestados."
}
  ```
  </TabItem>
   <TabItem value="exemplo2">

  ```json
  {
    "calendario": {
      "dataDeVencimento": "2022-12-01",
      "validadeAposVencimento": 30
    },
    "devedor": {
      "logradouro": "Alameda Souza, Numero 80, Bairro Braz",
      "cidade": "Recife",
      "uf": "PE",
      "cep": "70011750",
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "valor": {
      "original": "123.45",
      "multa": {
        "modalidade": 2,
        "valorPerc": "15.00"
      },
      "juros": {
        "modalidade": 2,
        "valorPerc": "2.00"
      },
      "desconto": {
        "modalidade": 1,
        "descontoDataFixa": [
          {
            "data": "2022-11-30",
            "valorPerc": "30.00"
          }
        ]
      }
    },
    "loc": {
      "id": 1
    },
    "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",
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
      { label: '🔴 403', value: '403', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 503', value: '503', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "calendario": {
      "criacao": "2020-09-09T20:15:00.358Z",
      "dataDeVencimento": "2020-12-31",
      "validadeAposVencimento": 30
    },
    "txid": "7978c0c97ea847e78e8849634473c1f1",
    "revisao": 0,
    "loc": {
      "id": 789,
      "location": "pix.example.com/qr/c2/cobv/9d36b84fc70b478fb95c12729b90ca25",
      "tipoCob": "cobv"
    },
    "status": "ATIVA",
    "devedor": {
      "logradouro": "Alameda Souza, Numero 80, Bairro Braz",
      "cidade": "Recife",
      "uf": "PE",
      "cep": "70011750",
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "recebedor": {
      "logradouro": "Rua 15 Numero 1200, Bairro São Luiz",
      "cidade": "São Paulo",
      "uf": "SP",
      "cep": "70800100",
      "cnpj": "56989000019533",
      "nome": "Empresa de Logística SA"
    },
    "valor": {
      "original": "123.45"
    },
    "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",
    "solicitacaoPagador": "Cobrança dos serviços prestados.",
    "pixCopiaECola": "00020101021226880014BR.GOV.BCB.PIX2116qrcodespix.sejaefi.com.br/v2/cobv/c24c8d65fd024836bc7bac75d5c4002f5204000053039865802BR5905EFISA6008SAOPAULO62070503***6304C225"
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  InvalidOperationError
{
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
  ApplicationError
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


## Revisar cobrança com vencimento
Endpoint para revisar (modificar) uma cobrança a partir do seu <code>txid</code>.

<!-- Método PATCH -->
<div className="patch">
<details className="col-100">
  <summary>
    <b><HighlightPatch>PATCH</HighlightPatch> /v2/cobv/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cobv.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cobv/Revisar_cobranca_cobv.md" />
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
      "id": 789
    },
    "devedor": {
      "logradouro": "Alameda Souza, Numero 80, Bairro Braz",
      "cidade": "Recife",
      "uf": "PE",
      "cep": "70011750",
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "valor": {
      "original": "123.45"
    },
    "solicitacaoPagador": "Cobrança dos serviços prestados."
}
  ``` 
  </TabItem>
  <TabItem value="exemplo2">

  ```json
{
    "valor": {
      "original": "567.89"
    },
    "solicitacaoPagador": "Informar cartão fidelidade"
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
      { label: '🔴 403', value: '403', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 503', value: '503', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "calendario": {
      "criacao": "2020-09-09T20:15:00.358Z",
      "dataDeVencimento": "2020-12-31",
      "validadeAposVencimento": 30
    },
    "txid": "7978c0c97ea847e78e8849634473c1f1",
    "revisao": 0,
    "loc": {
      "id": 789,
      "location": "pix.example.com/qr/c2/cobv/9d36b84fc70b478fb95c12729b90ca25",
      "tipoCob": "cobv"
    },
    "status": "ATIVA",
    "devedor": {
      "logradouro": "Alameda Souza, Numero 80, Bairro Braz",
      "cidade": "Recife",
      "uf": "PE",
      "cep": "70011750",
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "recebedor": {
      "logradouro": "Rua 15 Numero 1200, Bairro São Luiz",
      "cidade": "São Paulo",
      "uf": "SP",
      "cep": "70800100",
      "cnpj": "56989000019533",
      "nome": "Empresa de Logística SA"
    },
    "valor": {
      "original": "123.45"
    },
    "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",
    "solicitacaoPagador": "Cobrança dos serviços prestados.",
    "pixCopiaECola": "00020101021226880014BR.GOV.BCB.PIX2116qrcodespix.sejaefi.com.br/v2/cobv/c24c8d65fd024836bc7bac75d5c4002f5204000053039865802BR5905EFISA6008SAOPAULO62070503***6304C225"
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  UnknownRegisterError
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

## Consultar cobrança com vencimento
Endpoint para consultar uma cobrança com vencimento a partir do txid.


<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/cobv/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cobv.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cobv/Consultar_cobranca_cobv.md" />
          </div>
      </div>
       <br/> <br/>
  <p><b>Requisição</b></p>
  
  Também é possível consultar informações de uma revisão específica de uma cobrança. Para isso é necessário informar o <i>query param</i> <code>revisao</code>. Exemplo: <code>/v2/cobv/:txid/?revisao=1</code>. Quando o parâmetro não é informado, a revisão mais recente é retornada como padrão.

  <br/>    
   <br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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
    "calendario": {
      "criacao": "2020-09-09T20:15:00.358Z",
      "dataDeVencimento": "2020-12-31",
      "validadeAposVencimento": 30
    },
    "txid": "7978c0c97ea847e78e8849634473c1f1",
    "revisao": 0,
    "loc": {
      "id": 789,
      "location": "pix.example.com/qr/c2/cobv/9d36b84fc70b478fb95c12729b90ca25",
      "tipoCob": "cobv"
    },
    "status": "ATIVA",
    "devedor": {
      "logradouro": "Alameda Souza, Numero 80, Bairro Braz",
      "cidade": "Recife",
      "uf": "PE",
      "cep": "70011750",
      "cpf": "12345678909",
      "nome": "Francisco da Silva"
    },
    "recebedor": {
      "logradouro": "Rua 15 Numero 1200, Bairro São Luiz",
      "cidade": "São Paulo",
      "uf": "SP",
      "cep": "70800100",
      "cnpj": "56989000019533",
      "nome": "Empresa de Logística SA"
    },
    "valor": {
      "original": "123.45"
    },
    "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",
    "solicitacaoPagador": "Cobrança dos serviços prestados.",
    "pixCopiaECola": "00020101021226880014BR.GOV.BCB.PIX2116qrcodespix.sejaefi.com.br/v2/cobv/c24c8d65fd024836bc7bac75d5c4002f5204000053039865802BR5905EFISA6008SAOPAULO62070503***6304C225"
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
  UnknownRegisterError
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

## Consultar lista de cobranças com vencimento

Endpoint para consultar cobranças com vencimento através de parâmetros como início, fim, cpf, cnpj e status.

<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/cobv</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cobv.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cobv/Listar_cobrancas_cobv.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Requisição</b></p>
  O trecho de código abaixo ilustra o consumo do endpoint em uma requisição com o mínimo de parâmetros possível (o intervalo de datas <code>inicio</code> e <code>fim</code>) e o formato em que esses parâmetros devem ser repassados.

<br/><br/>

  <code>
  /v2/cobv?inicio=2020-10-22T16:01:35Z&fim=2020-11-30T20:10:00Z
 </code>

  <br/>    
 <br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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
      "inicio": "2022-01-01T23:59:59.000Z",
      "fim": "2022-12-31T23:59:59.000Z",
      "paginacao": {
        "paginaAtual": 0,
        "itensPorPagina": 100,
        "quantidadeDePaginas": 1,
        "quantidadeTotalDeItens": 13
      }
    },
    "cobs": [
      {
        "calendario": {
          "criacao": "2022-11-12T18:32:10.000Z",
          "dataDeVencimento": "2090-12-31",
          "validadeAposVencimento": 90
        },
        "txid": "31a0baG77448041d64352h4523459",
        "revisao": 1,
        "status": "ATIVA",
        "devedor": {
          "nome": "Empreendimentos",
          "cnpj": "53747188000100"
        },
        "recebedor": {
          "logradouro": "Rua 15 Numero 1200, Bairro São Luiz",
          "cidade": "São Paulo",
          "uf": "SP",
          "cep": "70800100",
          "cnpj": "56989000019533",
          "nome": "Empresa de Logística SA"
        },
        "valor": {
          "original": "123.45",
          "juros": {
            "modalidade": 2,
            "valorPerc": "0.30"
          },
          "multa": {
            "modalidade": 2,
            "valorPerc": "2.00"
          },
          "desconto": {
            "modalidade": 1,
            "descontoDataFixa": [
              {
                "data": "2022-10-15",
                "valorPerc": "30.00"
              }
            ]
          }
        },
        "chave": "5f84a6c5-c5cb-4569-9f13-7eb4d410dacc",
        "solicitacaoPagador": "Cobrança dos serviços prestados.",
        "infoAdicionais": [
          {
            "nome": "Campo 1",
            "valor": "Informação Adicional1"
          },
          {
            "nome": "Campo 2",
            "valor": "Informação Adicional2"
          }
        ],
        "loc": {
          "id": 220,
          "location": "qrcodes-pix.gerencianet.com.br/v2/cobv/ba942520ab0746cfae2858d9afe485fd0",
          "tipoCob": "cobv",
          "criacao": "2022-11-12T18:32:10.000Z"
        },
        "pixCopiaECola": "00020101021226880014BR.GOV.BCB.PIX2116qrcodespix.sejaefi.com.br/v2/cobv/c24c8d65fd024836bc7bac75d5c4002f5204000053039865802BR5905EFISA6008SAOPAULO62070503***6304C2"
      },
      {
        "calendario": {
          "criacao": "2022-10-27T17:30:59.000Z",
          "dataDeVencimento": "2022-12-31",
          "validadeAposVencimento": 30
        },
        "txid": "7976c0c97ea847578e8845634473c1f2",
        "revisao": 0,
        "status": "ATIVA",
        "devedor": {
          "logradouro": "Alameda Souza, Numero 80, Bairro Braz",
          "cidade": "Recife",
          "uf": "PE",
          "cep": "70011750",
          "cpf": "12345678909",
          "nome": "Francisco da Silva"
        },
        "recebedor": {
          "logradouro": "Rua 15 Numero 1200, Bairro São Luiz",
          "cidade": "São Paulo",
          "uf": "SP",
          "cep": "70800100",
          "cnpj": "56989000019533",
          "nome": "Empresa de Logística SA"
        },
        "valor": {
          "original": "100.00",
          "juros": {
              "modalidade": 1,
              "valorPerc": "0.25"
          },
          "multa": {
              "modalidade": 2,
              "valorPerc": "2.00"
          },
          "abatimento": {
              "modalidade": 1,
              "valorPerc": "5.00"
          },
          "desconto": {
              "modalidade": 3,
              "valorPerc": "1.00"
          }
        },
        "chave": "5f84a6c5-c5cb-4569-9f13-7eb4d410dacc",
        "solicitacaoPagador": "Informe o número ou identificador do pedido.",
        "loc": {
          "id": 215,
          "location": "qrcodes-pix.gerencianet.com.br/v2/cobv/68ae6f11868040ce980d6803ff6d904d",
          "tipoCob": "cobv",
          "criacao": "2022-10-27T17:30:59.000Z"
        },
        "pixCopiaECola": "00020101021226880014BR.GOV.BCB.PIX2116qrcodespix.sejaefi.com.br/v2/cobv/c24c8d65fd024836bc7bac75d5c4002f5204000053039865802BR5905EFISA6008SAOPAULO62070503***6304C2",
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