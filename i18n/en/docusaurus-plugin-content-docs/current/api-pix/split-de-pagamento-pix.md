---
id: split-de-pagamento-pix
title: Pix payment split
hide_title: true
sidebar_label: Pix payment split
---
<h1 className="titulo">Pix payment split</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
In this section, you will find all available endpoints for performing Payment Split in the Efí's Pix API. 

</div>

<br/>
<br/>

## Payment Split Configuration

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>

<p>The <strong>Pix Payment Split</strong> can only be performed between Efí accounts, with a maximum limit of 20 accounts for the split.</p>
</div> 
<br/>

The following set of endpoints is responsible for configuring Payment Splits in the Pix API. Charges, in the context of the Pix API, represent a financial transaction between a payer and a receiver, whose payment method is Pix.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Information</b>
</div>
<p>The same Split configuration can be used in various charges. This means that you can define a division of values for a partner and apply it to all related charges.</p>

</div>


<br/>

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Configure Payment Split in QR Code and static copy and paste!</b>
</div>
<p>You have the flexibility to divide the payment of QR Codes and static copy and paste among different Efí accounts. This means that when generating a QR Code or a static copy and paste code for payment, you can specify how the received amount will be distributed, facilitating financial management and ensuring that funds are allocated correctly from the start.</p>
</div>
<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Instructions for Testing in Sandbox Environment</b>
</div>
<p>In the payment split process, it is essential to provide a valid EFÍ digital account.</p>
<p>It is important to note that it is not possible to split to your own account. Therefore, if you are testing in a Sandbox environment and do not have a valid account for the splits, you will need to create a sub-account. See how to do this <a href="https://sejaefi.com.br/central-de-ajuda/efi-bank/ter-mais-de-uma-conta-efi#conteudo" target="_blank">here</a>.</p>

</div>



<br/>

### Payment Split Configuration (without providing an id)
Endpoint to create a Payment Split without specifying an <code>id</code>.
Generally, the id is created by the receiving party and is their responsibility. However, in this case, the id will be defined by Efí, making an exception to the standard rule.

  <div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v2/gn/split/config</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.split.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/split/Configurar_split.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
      { label: 'Example config dynamic percentage', value: 'exemplo1', },
      { label: 'Example config dynamic fixed', value: 'exemplo2', },
      { label: 'Example config static', value: 'exemplo3', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "descricao": "Batatinha frita 1, 2, 3",
    "lancamento": {
      "imediato": true
    },
    "split": {
      "divisaoTarifa": "assumir_total",
      "minhaParte": {
        "tipo": "porcentagem",
        "valor": "60.00"
      },
      "repasses": [
        {
          "tipo": "porcentagem",
          "valor": "15.00",
          "favorecido": {
            "cpf": "12345678909",
            "conta": "1234567"
          }
        },
        {
          "tipo": "porcentagem",
          "valor": "25.00",
          "favorecido": {
            "cpf": "94271564656",
            "conta": "7654321"
          }
        }
      ]
    }
}
  ```
  </TabItem>
  <TabItem value="exemplo2">

  ```json
{
    "descricao": "Batatinha frita 1, 2, 3",
    "lancamento": {
      "imediato": true
    },
    "split": {
      "divisaoTarifa": "assumir_total",
      "minhaParte": {
        "tipo": "fixo",
        "valor": "50.00"
      },
      "repasses": [
        {
          "tipo": "fixo",
          "valor": "5.00",
          "favorecido": {
            "cpf": "12345678909",
            "conta": "1234567"
          }
        },
        {
          "tipo": "fixo",
          "valor": "10.00",
          "favorecido": {
            "cpf": "94271564656",
            "conta": "7654321"
          }
        }
      ]
    }
}
  ```
  </TabItem>
  <TabItem value="exemplo3">

  ```json
{
    "descricao": "Batatinha frita 1, 2, 3",
    "txid": "SplitEstatico001",
    "lancamento": {
      "imediato": true
    },
    "split": {
      "divisaoTarifa": "assumir_total",
      "minhaParte": {
        "tipo": "porcentagem",
        "valor": "60.00"
      },
      "repasses": [
        {
          "tipo": "porcentagem",
          "valor": "15.00",
          "favorecido": {
            "cpf": "12345678909",
            "conta": "1234567"
          }
        },
        {
          "tipo": "porcentagem",
          "valor": "25.00",
          "favorecido": {
            "cpf": "94271564656",
            "conta": "7654321"
          }
        }
      ]
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
    ]}>
  <TabItem value="saida">

  ```json
{
    "id": "00000000000000000abcd",
    "status": "ATIVA",
    "txid": "SplitEstatico001",
    "descricao": "Batatinha frita 1, 2, 3",
    "lancamento": {
      "imediato": true
    },
    "split": {
      "divisaoTarifa": "assumir_total",
      "minhaParte": {
        "tipo": "porcentagem",
        "valor": "60.00"
      },
      "repasses": [
        {
          "tipo": "porcentagem",
          "valor": "15.00",
          "favorecido": {
            "conta": "1234567",
            "cpf": "12345678909"
          }
        },
        {
          "tipo": "porcentagem",
          "valor": "25.00",
          "favorecido": {
            "conta": "7654321",
            "cpf": "94271564656"
          }
        }
      ]
    }
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  {
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitConfigOperacaoInvalida",
    "title": "Operação Inválida",
    "status": 400,
    "detail": "A requisição que busca alterar ou criar uma configuração de split não respeita o schema ou está semanticamente errada.",
    "violacoes": [
      {
          "razao": "A configuração de split a ser alterada não está mais ATIVA."
        Ou
          "razao": "A configuração de split a ser alterada não é do tipo informado."
        Ou
          "razao": "No momento, lançamentos só podem ser feitos de forma imediata."
        Ou
          "razao": "Os parâmetros de lançamento estão semanticamente incorretos ou com campos ausentes."
        Ou
          "razao": "O tipo especificado para a divisão de tarifa é invalido."
        Ou
          "razao": "O tipo do valor especificado é inválido."
        Ou
          "razao": "A soma total das porcentagens é inválida, resulta em mais de cem porcento."
        Ou
          "razao": "A soma total das porcentagens é inválida, não atinge cem porcento."
        Ou
          "razao": "A soma total das porcentagens atinge cem porcento mas também foi especificado valores fixos, incorretamente."
        Ou
          "razao": "Uma das contas informadas na configuração dos repasses não existe."
        Ou
          "razao": "O documento de uma das contas informadas na configuração dos repasses não condiz com o documento real da conta."
        Ou 
          "razao": "Um dos valores informados na configuração dos repasses é inválido, deve ser maior que zero."
        Ou     
          "propriedade": "split.config"
        Ou
          "propriedade": "split.config.lancamento"
        Ou
          "propriedade": "split.config.split"
        Ou
          "propriedade": "split.config.split.minhaParte"
        Ou
          "propriedade": "split.config.split.repasses"
      }
    ]
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>


<br/>

### Payment Split Configuration (with id)
This is the endpoint to register a charge with a transaction identifier (<code>id</code>). The id is created by the receiving user and is their responsibility. If the user provides an id that already exists, this endpoint will update the charge configuration.

  <div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/gn/split/config/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>cgn.split.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/split/Configurar_split_id.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
      { label: 'Example config dynamic percentage', value: 'exemplo1', },
      { label: 'Example config dynamic fixed', value: 'exemplo2', },
      { label: 'Example config static', value: 'exemplo3', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "descricao": "Batatinha frita 1, 2, 3",
    "lancamento": {
      "imediato": true
    },
    "split": {
      "divisaoTarifa": "assumir_total",
      "minhaParte": {
        "tipo": "porcentagem",
        "valor": "60.00"
      },
      "repasses": [
        {
          "tipo": "porcentagem",
          "valor": "15.00",
          "favorecido": {
            "cpf": "12345678909",
            "conta": "1234567"
          }
        },
        {
          "tipo": "porcentagem",
          "valor": "25.00",
          "favorecido": {
            "cpf": "94271564656",
            "conta": "7654321"
          }
        }
      ]
    }
}
  ```
  </TabItem>
    <TabItem value="exemplo2">

  ```json
{
    "descricao": "Batatinha frita 1, 2, 3",
    "lancamento": {
      "imediato": true
    },
    "split": {
      "divisaoTarifa": "assumir_total",
      "minhaParte": {
        "tipo": "fixo",
        "valor": "50.00"
      },
      "repasses": [
        {
          "tipo": "fixo",
          "valor": "5.00",
          "favorecido": {
            "cpf": "12345678909",
            "conta": "1234567"
          }
        },
        {
          "tipo": "fixo",
          "valor": "10.00",
          "favorecido": {
            "cpf": "94271564656",
            "conta": "7654321"
          }
        }
      ]
    }
}
  ```
  </TabItem>
  <TabItem value="exemplo3">

  ```json
{
    "descricao": "Batatinha frita 1, 2, 3",
    "txid": "SplitEstatico001",
    "lancamento": {
      "imediato": true
    },
    "split": {
      "divisaoTarifa": "assumir_total",
      "minhaParte": {
        "tipo": "porcentagem",
        "valor": "60.00"
      },
      "repasses": [
        {
          "tipo": "porcentagem",
          "valor": "15.00",
          "favorecido": {
            "cpf": "12345678909",
            "conta": "1234567"
          }
        },
        {
          "tipo": "porcentagem",
          "valor": "25.00",
          "favorecido": {
            "cpf": "94271564656",
            "conta": "7654321"
          }
        }
      ]
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
    ]}>
  <TabItem value="saida">

  ```json
{
    "id": "00000000000000000abcd",
    "status": "ATIVA",
    "descricao": "Batatinha frita 1, 2, 3",
    "txid": "SplitEstatico001",
    "lancamento": {
      "imediato": true
    },
    "split": {
      "divisaoTarifa": "assumir_total",
      "minhaParte": {
        "tipo": "porcentagem",
        "valor": "60.00"
      },
      "repasses": [
        {
          "tipo": "porcentagem",
          "valor": "15.00",
          "favorecido": {
            "conta": "1234567",
            "cpf": "12345678909"
          }
        },
        {
          "tipo": "porcentagem",
          "valor": "25.00",
          "favorecido": {
            "conta": "7654321",
            "cpf": "94271564656"
          }
        }
      ]
    }
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  {
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitConfigOperacaoInvalida",
    "title": "Operação Inválida",
    "status": 400,
    "detail": "A requisição que busca alterar ou criar uma configuração de split não respeita o schema ou está semanticamente errada.",
    "violacoes": [
      {
          "razao": "A configuração de split a ser alterada não está mais ATIVA."
        Ou
          "razao": "A configuração de split a ser alterada não é do tipo informado."
        Ou
          "razao": "No momento, lançamentos só podem ser feitos de forma imediata."
        Ou
          "razao": "Os parâmetros de lançamento estão semanticamente incorretos ou com campos ausentes."
        Ou
          "razao": "O tipo especificado para a divisão de tarifa é invalido."
        Ou
          "razao": "O tipo do valor especificado é inválido."
        Ou
          "razao": "A soma total das porcentagens é inválida, resulta em mais de cem porcento."
        Ou
          "razao": "A soma total das porcentagens é inválida, não atinge cem porcento."
        Ou
          "razao": "A soma total das porcentagens atinge cem porcento mas também foi especificado valores fixos, incorretamente."
        Ou
          "razao": "Uma das contas informadas na configuração dos repasses não existe."
        Ou
          "razao": "O documento de uma das contas informadas na configuração dos repasses não condiz com o documento real da conta."
        Ou 
          "razao": "Um dos valores informados na configuração dos repasses é inválido, deve ser maior que zero."
        Ou
          "propriedade": "split.config"
        Ou
          "propriedade": "split.config.lancamento"
        Ou
          "propriedade": "split.config.split"
        Ou
          "propriedade": "split.config.split.minhaParte"
        Ou
          "propriedade": "split.config.split.repasses"
      }
    ]
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>


<br/>

### Get Payment Split Configuration by id

Endpoint to retrieve a Payment Split configuration by <code>id</code>.

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/split/config/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.split.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/split/Consultar_configuracao.md" />
          </div>
        </div>
      <br/> <br/>
  <p><b>Request</b></p>
  
  It's also possible to query information from a specific revision of the configuration. To do this, it's necessary to provide the revisao query param. Example: <code>/v2/gn/split/config/:id?revisao=2</code>. When the parameter is not provided, the most recent revision is returned by default.

  <br/> <br/>    

  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "id": "00000000000000000abcd",
    "status": "ATIVA",
    "revisao": 0,
    "descricao": "Batatinha frita 1, 2, 3",
    "lancamento": {
      "imediato": true
    },
    "split": {
      "divisaoTarifa": "assumir_total",
      "minhaParte": {
        "tipo": "porcentagem",
        "valor": "60.00"
      },
      "repasses": [
        {
          "tipo": "porcentagem",
          "valor": "15.00",
          "favorecido": {
            "conta": "1234567",
            "cpf": "12345678909"
          }
        },
        {
          "tipo": "porcentagem",
          "valor": "25.00",
          "favorecido": {
            "conta": "7654321",
            "cpf": "94271564656"
          }
        }
      ]
    }
}
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitConfigNaoEncontrado",
    "title": "Não Encontrado",
    "status": 404,
    "detail": "Configuração de split não encontrada para o id informado."
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

  ## Split charges 

The following set of endpoints is responsible for managing charges with payment split in the Pix API. Charges, in the context of Split, represent a financial transaction between a payer and multiple receivers, whose payment method is Pix.

### Create Charge

Endpoint to register a charge with a transaction identifier (<code>txid</code>).

<div class="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Information</b>
</div>
<p>To consume this endpoint and generate the charge, you can follow the same example from the immediate charge generation endpoint with <code>:txid</code> in the Pix API by following <a href="/en/docs/api-pix/cobrancas-imediatas#create-immediate-charge-without-txid)" target="_self">this link</a>.</p>
</div>
<br/> 

  <div className="put">
    <details className="col-100">
      <summary>
        <b><HighlightPut>PUT</HighlightPut> /v2/cob/<HighlightVar>:txid</HighlightVar></b>
      </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>cob.write</code>
          </div>
          <br/>
        </div>
      </details>
    </div>
    <br/>

### Link a Charge to a Payment Split

This is the endpoint to link a Pix charge to a Payment Split. It uses two fields (charge txid and Payment Split splitConfigId) to make this linkage when the Pix charge is active.

  <div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/gn/split/cob/<HighlightVar>:txid</HighlightVar>/vinculo/<HighlightVar>:splitConfigId</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.split.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/split/Vincular_cobranca.md" />
          </div>
      </div>
      <br/> <br/>

  <b>Responses</b>

  <br/> 

  The responses below represent Success(204) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      {label: '🟢 204', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  No content 
* O split foi vinculado à cobrança
  ```
  </TabItem>

  <TabItem value="400">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitOperacaoInvalida",
    "title": "Operação Inválida",
    "status": 400,
    "detail": "A requisição que busca alterar ou criar um vínculo entre cobrança e configuração de split não respeita o schema ou está semanticamente errada.",
    "violacoes": [
      {
        "razao": "A cobrança já existe, não está ATIVA, e a presente requisição busca vinculá-la."
        Ou
        "razao": "A configuração de split já existe, não está ATIVA, e a presente requisição busca vinculá-la."
        Ou
        "razao": "O valor da cobrança não corresponde à soma dos valores fixos da configuração de split."
        Ou
        "propriedade": "cobv.status"
        Ou
        "propriedade": "cob.status"
        Ou
        "propriedade": "split.config.status"
        Ou
        "propriedade": "cob.valor.original"
        Ou
        "propriedade": "cobv.valor.original"
      }
    ]
}
  ```
  </TabItem>

  <TabItem value="404">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitNaoEncontrado",
    "title": "Não encontrado",
    "status": 404,
    "detail": "Cobrança não encontrada."
    Ou
    "detail": "Configuração de Split não encontrada."
}
  ```
  </TabItem>

  <TabItem value="500">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitErroInterno",
    "title": "Erro interno",
    "status": 500,
    "detail": "Ocorreu um erro na criação do vínculo entre cobrança e configuração de split."
    Ou
    "detail": "'Ocorreu um erro na alteração do vínculo entre cobrança e configuração de split."
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

### Get Charge with Payment Split by txid

Endpoint to retrieve a charge with Payment Split using the <code>txid</code>.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/split/cob/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.split.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/split/Consultar_cobranca_split.md" />
          </div>
      </div>
      <br/><br/>

  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 500', value: '500', },
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
    "valor": {
      "original": "123.45"
    },
    "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",
    "solicitacaoPagador": "Cobrança dos serviços prestados.",
    "config": {
      "id": "6aeddee74dd1a890c0ace00000000a",
      "status": "ATIVA",
      "descricao": "Batatinha frita"
    },
    "pixCopiaECola": "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2/41e0badf811a4ce6ad8a80b306821fce5204000053000065802BR5905EFISA6008SAOPAULO60070503***61040000"
}
  ``` 
  </TabItem>
  <TabItem value="404">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/CobrancaSplitNaoEncontrada",
    "title": "Não encontrado",
    "status": 404,
    "detail": "Cobrança não encontrada."
    Ou
    "detail": "A cobrança informada não possui configuração de split vinculada."
}
  ```
  </TabItem>
    <TabItem value="500">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/CobrancaSplitNaoEncontrada",
    "title": "Erro interno",
    "status": 500,
    "detail": "Ocorreu um erro interno ao processar a requisição"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

## Delete the link between a Payment Split and a charge

Endpoint to delete the link between a Payment Split and a charge using the <code>txid</code>.

  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v2/gn/split/cob/<HighlightVar>:txid</HighlightVar>/vinculo</b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.split.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/split/Deletar_vinculo.md" />
          </div>
      </div>
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
      { label: '🔴 404', value: '404', },
    ]}>
  <TabItem value="saida">

  ```json
  status: 200
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
// If an invalid txid is provided, the error code returned is 400 and the error message returned is:
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitOperacaoInvalida",
    "title": "Operação Inválida",
    "status": 400,
    "detail": "A requisição que busca remover um vínculo entre cobrança e configuração de split não respeita o schema ou está semanticamente errada.",
    "violacoes": [
      {
        "razao": "Algum dos parâmetros informados não respeita o schema.",
        "propriedade": "split.params.txid"
      }
    ]
}

// If trying to remove the Split from a charge that has already been paid (status CONCLUIDA), the error code returned is 400 and the error message returned is:
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitOperacaoInvalida",
    "title": "Operação inválida",
    "status": 400,
    "detail": "A requisição que busca remover um vínculo entre cobrança e configuração de split não respeita o schema ou está semanticamente errada.",
    "violacoes": [
      {
        "razao": "A cobrança não está ATIVA, invalidando a presente operação.",
        "propriedade": "cob.status"
      }
    ]
}
  ```
 </TabItem>
   <TabItem value="404">

  ```json
// If providing a txid of an existing charge that does not have a linked Split configuration, the error code returned is 404 and the error message returned is:

{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitNaoEncontrado",
    "title": "Não encontrado",
    "status": 404,
    "detail": "A cobrança informada não possui configuração de split vinculada."
}

// If providing a txid within the standard format but not finding a corresponding charge, the error code returned is 404 and the error message returned is:

{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitNaoEncontrado",
    "title": "Não encontrado",
    "status": 404,
    "detail": "Cobrança não encontrada."
}
  ```
 </TabItem>
  </Tabs>

</details>
</div>
<br/>

## Due charges and Payment Split

The following set of endpoints is responsible for managing due charges and payment split in the Pix API. Charges, in the context of Split in the Pix API, represent a financial transaction between a payer and multiple receivers, whose payment method is Pix.

<br/>

## Create Due Charge

Endpoint to register a due charge with a transaction identifier (<code>txid</code>).

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Information</b>
</div>
<p>To consume this endpoint and generate the charge, you can follow the same example from the endpoint for generating a charge with due date in the Pix API by following <a href="/en/docs/api-pix/cobrancas-com-vencimento#create-due-charge" target="_self">this link</a>.</p>
 
</div>
<br/>

  <div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/cobv/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>cob.write</code>
          </div>
          <br/>
        </div>
      </details>
    </div>

<br/>

### Link a due charge a Payment Split by txid
Endpoint to link a charge with due date (COBV) to a Payment Split.

<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/gn/split/cobv/<HighlightVar>:txid</HighlightVar>/vinculo/<HighlightVar>:splitConfigId</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.split.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/split/Vincular_cobranca_cobv.md" />
          </div>
      </div>
      <br/>   <br/>
  
  <b>Responses</b>

  <br/> 

  The responses below represent Success(201) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      {label: '🟢 204', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  status 200
  ```
  </TabItem>
  <TabItem value="400">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitOperacaoInvalida",
    "title": "Operação inválida",
    "status": 400,
    "detail": "A requisição que busca alterar ou criar um vínculo entre cobrança e configuração de split não respeita o schema ou está semanticamente errada."
    "violacoes": [
      {
        "razao": "A cobrança já existe, não está ATIVA, e a presente requisição busca vinculá-la."
        Ou
        "razao": "A configuração de split já existe, não está ATIVA, e a presente requisição busca vinculá-la." 
        "propriedade":"cobv.status"
        Ou
        "propriedade":"cob.status"
        Ou
        "propriedade":"split.config.status" 
      }
    ]
}
  ```
  </TabItem>
  <TabItem value="404">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitNaoEncontrado",
    "title": "Não encontrado",
    "status": 404,
    "detail": "Cobrança não encontrada."
    Ou
    "detail": "Configuração de Split não encontrada."
}
  ```
  </TabItem>
  <TabItem value="500">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitErroInterno",
    "title": "Erro interno",
    "status": 500,
    "detail": "Ocorreu um erro na criação do vínculo entre cobrança e configuração de split."
    Ou
    "detail": "Ocorreu um erro na alteração do vínculo entre cobrança e configuração de split."
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

### Get due charge and Payment Split by txid
Endpoint to retrieve a charge with due date and Payment Split using the <code>txid</code>.

   <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/split/cobv/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.split.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/split/Consultar_cobranca_split_cobv.md" />
          </div>
      </div>
      <br/><br/>
        
  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 500', value: '500', },
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
    "config": {
      "id": "6aeddee74dd1a890c0000070001",
      "status": "ATIVA",
      "descricao": "Batatinha frita"
    },
    "pixCopiaECola": "00020101021226880014BR.GOV.BCB.PIX2116qrcodespix.sejaefi.com.br/v2/cobv/c24c8d65fd024836bc7bac75d5c4002f5204000053039865802BR5905EFISA6008SAOPAULO62070503***6304C225"
}
  ``` 
  </TabItem>
  <TabItem value="404">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/CobrancaSplitNaoEncontrada",
    "title": "Não encontrado",
    "status": 404,
    "detail": "Cobrança não encontrada."
    Ou
    "detail": "A cobrança informada não possui configuração de split vinculada."
}
  ```
  </TabItem>
    <TabItem value="500">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/ErroInterno",
    "title": "Erro interno",
    "status": 500,
    "detail": "Ocorreu um erro interno ao processar a requisição"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

### Delete the link between a Payment Split and a due charge

Endpoint to delete the link between a Payment Split and a charge with due date using the <code>txid</code>.


  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v2/gn/split/cobv/<HighlightVar>:txid</HighlightVar>/vinculo</b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.split.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/split/Deletar_vinculo_cobv.md" />
          </div>
      </div>
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
      { label: '🔴 404', value: '404', },
    ]}>
  <TabItem value="saida">

  ```json
  status: 200
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
// If an invalid txid is provided, the error code returned is 400 and the error message returned is:
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitOperacaoInvalida",
    "title": "Operação Inválida",
    "status": 400,
    "detail": "A requisição que busca remover um vínculo entre cobrança e configuração de split não respeita o schema ou está semanticamente errada.",
    "violacoes": [
      {
        "razao": "Algum dos parâmetros informados não respeita o schema.",
        "propriedade": "split.params.txid"
      }
    ]
}

// If trying to remove the Split from a charge that has already been paid (status CONCLUIDA), the error code returned is 400 and the error message returned is:
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitOperacaoInvalida",
    "title": "Operação inválida",
    "status": 400,
    "detail": "A requisição que busca remover um vínculo entre cobrança e configuração de split não respeita o schema ou está semanticamente errada.",
    "violacoes": [
      {
        "razao": "A cobrança não está ATIVA, invalidando a presente operação.",
        "propriedade": "cobv.status"
      }
    ]
}
  ```
 </TabItem>
   <TabItem value="404">

  ```json
// If providing a txid of an existing charge that does not have a linked Split configuration, the error code returned is 404 and the error message returned is:
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitNaoEncontrado",
    "title": "Não encontrado",
    "status": 404,
    "detail": "A cobrança informada não possui configuração de split vinculada."
}

// If providing a txid within the standard format but not finding a corresponding charge, the error code returned is 404 and the error message returned is:
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitNaoEncontrado",
    "title": "Não encontrado",
    "status": 404,
    "detail": "Cobrança não encontrada."
}
  ```
 </TabItem>
  </Tabs>

</details>
</div>

</div>