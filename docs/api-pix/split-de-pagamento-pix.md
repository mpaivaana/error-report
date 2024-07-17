---
id: split-de-pagamento-pix
title: Split de pagamento Pix
hide_title: true
sidebar_label: Split de pagamento Pix
---
<h1 className="titulo">Split de pagamento Pix</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Nesta seção você encontrará todos os endpoints disponíveis para a realização do Split de pagamento na API Pix Efí. 

</div>

<br/>
<br/>

  ## Configuração de um Split de pagamento

  <div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>

<p>O <strong>Split de pagamento Pix</strong> só pode ser realizado entre contas Efí, com limite máximo de 20 contas para o repasse.</p>
</div> 
<br/>

  O conjunto de endpoints a seguir é responsável pela configuração dos Splits de pagamento na API Pix. As cobranças, no contexto da API Pix representam uma transação financeira entre um pagador e um recebedor, cuja forma de pagamento é o Pix.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Informação</b>
</div>
<p>Uma mesma configuração de Split pode ser utilizada em várias cobranças. Isso significa que você pode definir uma divisão de valores para um parceiro e aplicá-la em todas as cobranças relacionadas.</p>

</div>


<br/>

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Configure Split de Pagamento em QR Code e copia e cola estático!</b>
</div>
<p>Você tem a flexibilidade de dividir o pagamento dos QR Codes e copia e cola estático entre diferentes contas Efí. Isso significa que, ao gerar um QR Code ou um código copia e cola estáticos para pagamento, você pode especificar como o valor recebido será distribuído, facilitando a gestão financeira e assegurando que os fundos sejam alocados corretamente desde o início.</p>
</div>
<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Instruções para testes em Homologação</b>
</div>
<p>No processo de split de pagamento, é essencial fornecer uma conta digital EFÍ válida.</p>
<p>É importante destacar que não é possível realizar o split para a própria conta. Portanto, se estiver realizando testes em ambiente de homologação e não possuir uma conta válida para os repasses, será necessário criar uma subconta. Veja como fazer isso <a href="https://sejaefi.com.br/central-de-ajuda/efi-bank/ter-mais-de-uma-conta-efi#conteudo" target="_blank">aqui</a>.</p>

</div>


<br/>

  ### Configuração de um Split de pagamento (sem passar id)
  Endpoint para criar Split de pagamento sem informar um <code>id</code>.
  Em geral, o id é criado pela pessoa recebedora e está sob sua responsabilidade. Porém, neste caso, o id será definido pela Efí, fazendo uma exceção à regra padrão.

  <div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v2/gn/split/config</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.split.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/split/Configurar_split.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
      { label: 'Exemplo config dinâmico porcentagem', value: 'exemplo1', },
      { label: 'Exemplo config dinâmico fixo', value: 'exemplo2', },
      { label: 'Exemplo config estático', value: 'exemplo3', },
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo.
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

  ### Configuração de um Split de pagamento (com id)
  Este é o endpoint para cadastrar uma cobrança com um identificador de transação (<code>id</code>). O id é criado pela pessoa usuária recebedora e está sob sua responsabilidade. Caso o usuário informe um id que já exista, esse endpoint irá atualizar a configuração da cobrança.

  <div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/gn/split/config/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.split.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/split/Configurar_split_id.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
      { label: 'Exemplo config dinâmico porcentagem', value: 'exemplo1', },
      { label: 'Exemplo config dinâmico fixo', value: 'exemplo2', },
      { label: 'Exemplo config estático', value: 'exemplo3', },
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo.
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

  ### Consultar configuração do Split por id

Endpoint para consultar um Split de pagamento partir do <code>id</code>.

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/split/config/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.split.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/split/Consultar_configuracao.md" />
          </div>
        </div>
      <br/> <br/>
  <p><b>Requisição</b></p>
  
  Também é possível consultar informações de uma revisão específica da configuração. Para isso é necessário informar o query param revisao. Exemplo: <code>/v2/gn/split/config/:id?revisao=2</code>. Quando o parâmetro não é informado, a revisão mais recente é retornada como padrão.

  <br/> <br/>    

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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

  ## Cobranças com Split 

O conjunto de endpoints a seguir é responsável pela gestão de cobranças com split de pagamento na API Pix. As cobranças, no contexto do Split, representam uma transação financeira entre um pagador e mais de um recebedor, cuja forma de pagamento é o Pix.

  ### Criar uma cobrança 

  Endpoint para cadastrar uma cobrança com um identificador de transação (<code>txid</code>).

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Informação</b>
</div>
<p>Para consumir esse endpoint e gerar a cobrança, você pode seguir o mesmo exemplo do endpoint de geração de uma cobrança com <code>:txid</code> na API Pix seguindo <a href="/docs/api-pix/cobrancas-imediatas#criar-cobrança-imediata-com-txid" target="_self"> esse link</a>.</p>
</div>
<br/>

  <div className="put">
    <details className="col-100">
      <summary>
        <b><HighlightPut>PUT</HighlightPut> /v2/cob/<HighlightVar>:txid</HighlightVar></b>
      </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cob.write</code> 
          </div>
          <br/>
        </div>
      </details>
    </div>
    <br/>

  ### Vincular uma cobrança a um Split de pagamento 

  Este é o endpoint para vincular uma cobrança Pix a um Split de pagamento. Ele utiliza dois campos (txid da cobrança e splitConfigId do Split de pagamento) para fazer essa vinculação quando a cobrança Pix está ativa.

  <div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/gn/split/cob/<HighlightVar>:txid</HighlightVar>/vinculo/<HighlightVar>:splitConfigId</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.split.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/split/Vincular_cobranca.md" />
          </div>
      </div>
      <br/> <br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(204) e Falhas/erros do consumo.
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

  ### Consultar cobrança com Split de pagamento por txid

  Endpoint para consultar uma cobrança com Split de pagamento a partir do <code>txid</code>.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/split/cob/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.split.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/split/Consultar_cobranca_split.md" />
          </div>
      </div>
      <br/><br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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

  ### Deletar o vínculo entre um Split de pagamento e uma cobrança

  Endpoint para deletar o vinculo entre um split de pagamento e uma cobrança a partir do <code>txid</code>.
  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v2/gn/split/cob/<HighlightVar>:txid</HighlightVar>/vinculo</b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.split.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/split/Deletar_vinculo.md" />
          </div>
      </div>
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
      { label: '🔴 404', value: '404', },
    ]}>
  <TabItem value="saida">

  ```json
  status: 200
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
// Em caso de mandar um txid fora do padrão o código de erro retornado é 400 e a mensagem de erro retornado é:
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

//Em caso de tentar remover o Split de uma cobrança que já foi paga (status CONCLUIDA) o código de erro retornado é 400 e a mensagem de erro retornado é:
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
// No caso de mandar um txid de cobrança existente, mas que não tem configuração de Split vinculada o código de erro retornado é 404 e a mensagem de erro retornado é:
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitNaoEncontrado",
    "title": "Não encontrado",
    "status": 404,
    "detail": "A cobrança informada não possui configuração de split vinculada."
}

//No caso de mandar um txid dentro do padrão, mas não encontrar uma cobrança correspondente o código de erro retornado é 404 e a mensagem de erro retornado é:
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

## Cobranças com vencimento e com Split 

  O conjunto de endpoints a seguir é responsável pela gestão de cobranças com vencimento e com split de pagamento. As cobranças, no contexto do Split na API Pix, representam uma transação financeira entre um pagador e mais de um recebedores, cuja forma de pagamento é o Pix.

<br/>

  ### Criar uma cobrança com vencimento 

Endpoint para cadastrar uma cobrança com um identificador de transação (<code>txid</code>).

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Informação</b>
</div>
<p>Para consumir esse endpoint e gerar a cobrança, você pode seguir o mesmo exemplo do endpoint de geração de uma cobrança com vencimento na API Pix seguindo <a href="/docs/api-pix/cobrancas-com-vencimento#criar-cobrança-com-vencimento" target="_self"> esse link</a>.</p>
</div>
<br/>

  <div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/cobv/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>cob.write</code> 
          </div>
          <br/>
        </div>
      </details>
    </div>

<br/>

  ### Vincular uma cobrança com vencimento a um Split de pagamento por txid
Endpoint para vincular uma cobrança com vencimento (COBV) a um Split de pagamento.

<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/gn/split/cobv/<HighlightVar>:txid</HighlightVar>/vinculo/<HighlightVar>:splitConfigId</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.split.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/split/Vincular_cobranca_cobv.md" />
          </div>
      </div>
      <br/>   <br/>
  
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo.
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

  ### Consultar cobrança com vencimento e com Split de pagamento por txid
  Endpoint para consultar uma cobrança com vencimento e com a partir do <code>txid</code>.

   <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/split/cobv/<HighlightVar>:txid</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.split.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/split/Consultar_cobranca_split_cobv.md" />
          </div>
      </div>
      <br/><br/>
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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

  ### Deletar o vínculo entre um Split de pagamento e uma cobrança com vencimento

  Endpoint para deletar o vinculo entre um split de pagamento e uma cobrança com vencimento a partir do <code>txid</code>.

  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v2/gn/split/cobv/<HighlightVar>:txid</HighlightVar>/vinculo</b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.split.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/split/Deletar_vinculo_cobv.md" />
          </div>
      </div>
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
      { label: '🔴 404', value: '404', },
    ]}>
  <TabItem value="saida">

  ```json
  status: 200
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
// Em caso de mandar um txid fora do padrão o código de erro retornado é 400 e a mensagem de erro retornado é:
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

//Em caso de tentar remover o Split de uma cobrança que já foi paga (status CONCLUIDA) o código de erro retornado é 400 e a mensagem de erro retornado é:
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
// No caso de mandar um txid de cobrança existente, mas que não tem configuração de Split vinculada o código de erro retornado é 404 e a mensagem de erro retornado é:
{
    "type": "https://pix.bcb.gov.br/api/v2/error/SplitNaoEncontrado",
    "title": "Não encontrado",
    "status": 404,
    "detail": "A cobrança informada não possui configuração de split vinculada."
}

//No caso de mandar um txid dentro do padrão, mas não encontrar uma cobrança correspondente o código de erro retornado é 404 e a mensagem de erro retornado é:
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