---
id: cobrancas-lote
title: Cobranças em Lote
hide_title: true
sidebar_label: Cobranças em Lote
---
<h1 className="titulo">Cobranças em Lote</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
O conjunto de endpoints a seguir é responsável pela gestão de cobranças em lote. As cobranças, no contexto da API Pix, representam uma transação financeira entre um pagador e um recebedor, cuja forma de pagamento é o Pix.

</div>

<br/>
<br/>


## Cobranças com vencimento em lote

Reúne endpoints destinados a lidar com gerenciamento de cobranças com vencimento em lote.

### Criar/Alterar lote de cobranças com vencimento
Endpoint utilizado para criar ou alterar um lote de cobranças com vencimento.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Informação</b>
</div>
<p>Uma solicitação de <strong>criação</strong> de cobrança com status "EM_PROCESSAMENTO" ou "NEGADA" está associada a uma cobrança não existe de fato, portanto não será listada em <code>GET /cobv</code> ou <code>GET /cobv/:txid</code>.</p>
<p>Uma cobrança, uma vez criada via <code>PUT /cobv/:txid</code>, não pode ser associada a um lote posteriormente.</p>
<p>Uma cobrança, uma vez criada via <code>PUT /lotecobv/:id</code>, não pode ser associada a um novo lote posteriormente.</p>
<p>A criação do lote deve conter pelo menos <strong>1</strong> cobrança e no máximo <strong>1000</strong>.</p>
</div>

<br/>


<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Dica</b>
</div>
<p>Após a geração da cobrança em lote, você pode utilizar o endpoint de <a href="/docs/api-pix/cobrancas-com-vencimento#consultar-lista-de-cobranças-com-vencimento" target="_blank">Consultar lista de cobranças com vencimento</a>, informado o parâmetro <code>loteCobvId</code> para retornar as informações do lote.</p>
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
            Requer autorização para o escopo: <code>lotecobv.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cobv/Criar_cobranca_lote.md" />
          </div>
      </div>
      <br/> <br/>

Para o caso de uso de alteração de cobranças, o array a ser atribuído na requisicão deve ser composto pelas exatas requisições de criação de cobranças que constaram no array atribuído na requisição originária.

Não se pode utilizar este endpoint para alterar um lote de cobranças com vencimento agregando ou removendo cobranças já existentes dentro do conjunto de cobranças criadas na requisição originária do lote.

Em outras palavras, se originalmente criou-se um lote, por exemplo, com as cobranças <code>[a, b e c]</code>, não se pode alterar esse conjunto de cobranças original que o lote representa para <code>[a, b, c, d]</code>, ou para <code>[a, b]</code>. Por outro lado, pode-se alterar, em lote as cobranças <code>[a, b, c]</code>, conforme originalmente constam na requisição originária do lote.

<br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Exemplo 1', value: 'exemplo', },
    { label: 'Exemplo 2 (loc)', value: 'exemplo 2', }
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo.
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

### Revisar cobranças específicas de um lote
Endpoint utilizado para revisar cobranças específicas dentro de um lote de cobranças com vencimento.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Informação</b>
</div>
<p>A diferença deste endpoint para o endpoint PUT correlato é que este endpoint admite um array <code>cobsv</code> com menos solicitações de criação ou alteração de cobranças do que o array atribuído na requisição originária do lote.</p>
<p>Não se pode, entretanto, utilizar esse endpoint para agregar ou remover solicitações de alteração ou criação de cobranças conforme constam na requisição originária do lote.</p>
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
            Requer autorização para o escopo: <code>lotecobv.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cobv/Revisar_cobranca_lote.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Exemplo', value: 'exemplo1', }
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
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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

### Consultar lote de cobranças com vencimento.
Endpoint para consultar um lote específico de cobranças com vencimento.


<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/lotecobv/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>lotecobv.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cobv/Consultar_lote_cobv.md" />
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

### Consultar lista de lotes de cobranças com vencimento

Endpoint para consultar cobranças com vencimento através de parâmetros como início, fim, cpf, cnpj e status.

<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/lotecobv</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>lotecobv.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/cobv/Listar_lotes_cobv.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Requisição</b></p>
  O trecho de código abaixo ilustra o consumo do endpoint em uma requisição com o mínimo de parâmetros possível (o intervalo de datas <code>inicio</code> e <code>fim</code>) e o formato em que esses parâmetros devem ser repassados.

<br/><br/>

  <code>
  /v2/lotecobv?inicio=2023-01-01T16:01:35Z&fim=2023-12-30T16:01:35Z
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