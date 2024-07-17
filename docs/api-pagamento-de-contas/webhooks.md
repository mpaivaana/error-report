---
id: webhooks
title: Webhooks
hide_title: true
sidebar_label: Webhooks
---
<h1 className="titulo">Webhooks</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Esta seção reúne endpoints para gerenciamento de notificações por parte do PSP recebedor a pessoa usuária recebedora.

</div>

<br/>
<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Por norma do Banco Central, será necessário a inserção de uma chave pública da Efí em seu servidor para que a comunicação obedeça o <strong>padrão mTLS</strong>, mesmo padrão utilizado na API Pix.</p>
<p>Para entender o padrão mTLS e configurar seu servidor, clique <a href="/docs/api-pix/webhooks#entendendo-o-padrão-mtls" target="_blank">aqui</a>.</p>
</div>

<br/>

  ## Criar webhook de pagamento

  Endpoint para criação do webhook de pagamento.

  <div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/webhook</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>payment.webhook.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/payments/webhooks/Configurar_webhook.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Exemplo', value: 'exemplo', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
  {
    "url": "string"
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
    "url": "string"
  }
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "string",
    "mensagem": "string"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

  ## Listar webhooks de pagamento
Endpoint para listar webhooks de pagamento através de parâmetros como <code>dataInicio</code> e <code>dataFim</code>. Os atributos são inseridos como <em>query params</em>.
  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/webhook</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>payment.webhook.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/payments/webhooks/Listar_webhook.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Requisição</b></p>
  O trecho abaixo mostra como os parâmetros <code>dataInicio</code> e <code>dataFim</code> (obrigatórios) devem ser repassados na requisição.<br/><br/>
  <code>/v1/webhook/?dataInicio=2024-01-22T16:01:35Z&dataFim=2024-10-23T16:01:35Z</code>
    
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
    ]}>
  <TabItem value="saida">

  ```json
{
    "parametros": {
      "inicio": "string",
      "fim": "string",
      "paginacao": {
        "paginaAtual": 0,
        "itensPorPagina": 100,
        "quantidadeDePaginas": 1,
        "quantidadeTotalDeItens": 5
      }
    },
    "webhooks": [
      {
        "url": "string",
        "criacao": "string"
      }
    ]
}
  ``` 
  </TabItem>
  
  <TabItem value="400">

  ```json
{
    "nome": "string",
    "mensagem": "string"
}
  ```
  </TabItem>
  </Tabs>

</details>
</div> 

<br/>

  ## Deletar webhook de pagamento
  Endpoint para deleção do webhook de pagamento.

  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v1/webhook</b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>payment.webhook.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/payments/webhooks/Configurar_webhook.md" />
          </div>
      </div>
      <br/><br/>
     <p><b>Requisição</b></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Exemplo', value: 'exemplo', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
  {
    "url": "string"
  }
  ``` 
  </TabItem>
  </Tabs>

  <br/>    

  <b>Respostas</b>

  <br/> 

  A resposta abaixo representa Sucesso(204) do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      {label: '🟢 204', value: 'saida', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
  Webhook deletado
  ``` 
  </TabItem>
  
  <TabItem value="400">

  ```json
{
    "nome": "string",
    "mensagem": "string"
}
  ```
  </TabItem>
  
  </Tabs>

</details>
</div>

<br/>

## Recebendo Callbacks 
Esse serviço está protegido por uma camada de autenticação mTLS. Os callbacks são enviados pela Efí via <code>POST url-webhook-cadastrada</code> quando há uma alteração no status do Pagamento.  

### Requisição

<div className="link-responsivo">
<div className="requisicao">
<p>Quando ocorre uma alteração no status de um pagamento associado a aplicação utilizada, a Efí envia uma requisição <code>POST</code> para a URL de webhook que você definiu. Um objeto JSON (como os exemplos abaixo) será enviado ao seu servidor. Cada requisição de callback possui um timeout de 60 segundos, ou seja, é interrompida se não houver resposta em 60 segundos.</p>

<details  className="no_border">

  <summary>
    <b> Exemplos:</b>
</summary>
<div className="left">
  A seguir, veja alguns exemplos do objeto JSON enviado.
</div>
<div className="right">
  <Modal filename="/markdown/payments/webhooks/Recebendo_callbacks.md" />
</div>
<br/> <br/>
      <p></p>
<Tabs
    defaultValue="Em-processamento"
    values={[
    { label: 'Em processamento', value: 'Em-processamento', },
    { label: 'Agendado', value: 'Agendado', },
    { label: 'Executado', value: 'Executado', },
    { label: 'Liquidado', value: 'Liquidado', },
    { label: 'Nao realizado', value: 'Nao-realizado', },
    { label: 'Cancelado', value: 'Cancelado', }
  ]}>

  <TabItem value="Em-processamento">

  ```json
{
    "identificador": "1013",
    "status": {
        "anterior": "CRIADO",
        "atual": "EM_PROCESSAMENTO"
    },
    "valor": "150.10",
    "horario": {
        "solicitacao": "2024-02-07T14:32:54.000Z"
    },
    "efiExtras": {
        "dataExecucao": "2024-02-07",
        "codigoBarras": "23797962400000213204150060000055503009010000",
        "linhaDigitavel": "23794150096000005550330090100006796240000021320"
    }
}
  ``` 
  </TabItem>
  <TabItem value="Agendado">

  ```json
{
    "identificador": "1012",
    "status": {
        "anterior": "CRIADO",
        "atual": "AGENDADO"
    },
    "valor": "150.10",
    "horario": {
        "solicitacao": "2024-02-07T14:17:36.000Z"
    },
    "efiExtras": {
        "dataExecucao": "2024-02-08",
        "codigoBarras": "23792962400000180004150060000055567609010000",
        "linhaDigitavel": "23794150096000005556076090100009296240000018000"
    }
}
  ``` 
  </TabItem>

<TabItem value="Executado">

  ```json
{
    "valor": "650.00",
    "status": {
      "atual": "EXECUTADO",
      "anterior": "EM_PROCESSAMENTO"
    },
    "horario": {
      "solicitacao": "2024-02-01T15:12:21"
    },
    "efiExtras": {
      "protocolo": "936879015",
      "codigoBarras": "10497962600000650008527261000100040064915871",
      "dataExecucao": "2024-02-01",
      "motivoRecusa": null,
      "linhaDigitavel": "10498527246100010004200649158714796260000065000"
    },
    "identificador": "5968942"
}
  ``` 
  </TabItem>

  <TabItem value="Liquidado">

  ```json
{
    "valor": "650.00",
    "status": {
      "atual": "LIQUIDADO",
      "anterior": "EXECUTADO"
    },
    "horario": {
      "liquidacao": "2024-02-01T15:12:33",
      "solicitacao": "2024-02-01T15:12:21"
    },
    "efiExtras": {
      "protocolo": "936879015",
      "codigoBarras": "10497962600000650008527261000100040064915871",
      "dataExecucao": "2024-02-01",
      "motivoRecusa": null,
      "linhaDigitavel": "10498527246100010004200649158714796260000065000"
    },
    "identificador": "5968942"
}
  ``` 
  </TabItem>
    

  <TabItem value="Nao-realizado">

  ```json
{
    "valor": "582.30", 
    "status": { 
      "atual": "NAO_REALIZADO", 
      "anterior": "AGENDADO" 
    }, 
    "horario": { 
      "solicitacao": "2024-02-06T01:55:31.000Z" 
    }, 
    "efiExtras": { 
      "protocolo": "949096655", 
      "codigoBarras": "65593166800000582300000001007500004640804500", 
      "dataExecucao": "2024-02-07", 
      "motivoRecusa": "Saldo Insuficiente. Data: 07/02/2024.", 
      "linhaDigitavel": "65590000020100750000046408045006316680000058230" 
    }, 
    "identificador": "5978351"
}
  ``` 
  </TabItem>

  <TabItem value="Cancelado">

  ```json
{
    "valor": "20.00",
    "status": {
      "atual": "CANCELADO",
      "anterior": "AGENDADO"
    },
    "horario": {
      "solicitacao": "2024-01-23T10:36:07"
    },
    "efiExtras": {
      "protocolo": null,
      "codigoBarras": "36491000000000020000000700014334200000000066",
      "dataExecucao": "2024-01-24",
      "motivoRecusa": null,
      "linhaDigitavel": "36490000760001433420500000000661100000000002000"
    },
    "identificador": "5949678"
}
  ``` 
  </TabItem>

  </Tabs>

  <b>Respostas</b>

  <br/> 

 As requisições de callback aguardam uma resposta com status HTTP 2XX. Caso o servidor do cliente retorne um status diferente, a Efí fará até 10 novas tentativas de notificação. A primeira nova tentativa será feita 5 minutos após a falha do envio do callback. Persistindo o erro, as tentativas subsequentes serão enviadas em intervalos de tempo cada vez maiores, conforme mostra a tabela abaixo.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Em casos onde o servidor do cliente retorna o status HTTP 429 (<i>too many requests</i>), os servidores da Efí tentarão enviar a notificação até 10 vezes também de acordo com a tabela abaixo.</p>
</div>

 <br/>
  <table className="table"> 
  <tbody>
    <tr>
      <th>N° da tentativa</th>
      <th align="center">Tempo (em minutos)</th>
    </tr>
    <tr>
      <td>1</td>
      <td>5</td>
    </tr>
    <tr>
      <td>2</td>
      <td>10</td>
    </tr>
    <tr>
      <td>3</td>
      <td>20</td>
    </tr>
    <tr>
      <td>4</td>
      <td>40</td>
    </tr>
    <tr>
      <td>5</td>
      <td>80</td>
    </tr>
    <tr>
      <td>6</td>
      <td>160</td>
    </tr>
    <tr>
      <td>7</td>
      <td>320</td>
    </tr>
    <tr>
      <td>8</td>
      <td>640</td>
    </tr>
    <tr>
      <td>9</td>
      <td>1280</td>
    </tr>
    <tr>
      <td>10</td>
      <td>52560</td>
    </tr>
    </tbody>
</table>

</details>
</div>
</div>

</div>