---
id: payload-locations
title: Payload Locations
hide_title: true
sidebar_label: Payload Locations
---
<h1 className="titulo">Payload Locations </h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
O conjunto de endpoints a seguir são destinados a lidar com configuração e remoção de locations para uso dos payloads.
</div>

<br/>
<br/>

  ## Criar location do payload
  Endpoint para criar location do payload. Necessário enviar no body da requisição o atributo <code>tipoCob</code> com o valor COB ou COBV.

<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v2/loc</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>payloadlocation.write</code> 
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'COB', value: 'exemplo1', },
    { label: 'COBV', value: 'COBV', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "tipoCob": "cob"
}
  ``` 
  </TabItem>
  <TabItem value="COBV">

  ```json
  {
    "tipoCob": "cobv"
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
    "id": 66,
    "location": "qrcodes-pix.gerencianet.com.br/v2/7796e273b8e447c2b2c0ac2c58fe1a13",
    "tipoCob": "cob",
    "criacao": "2021-01-15T20:13:39.462Z"
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  {
    "nome": "json_invalido",
    "mensagem": "Valores ou tipos de campo inválidos",
    "erros": [
      {
        "chave": "enum",
        "caminho": ".body.tipoCob",
        "mensagem": "deve ser igual a um dos valores predefinidos"
      }
    ]
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

  ## Consultar locations cadastradas
  Endpoint para consultar locations cadastradas.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/loc</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>payloadlocation.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/location/Consultar_locations.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Requisição</b></p>
  Para obter o resultado da consulta de locations é necessário informar os parâmetros <code>inicio</code> e <code>fim</code>, como exibido no trecho de código abaixo. Esses parâmetros restringem os resultados para os locations compreendidos nesse intervalo de datas.
<br/>
<br/>
  <code>
  /v2/loc/?inicio=2020-10-22T16:01:35Z&fim=2020-10-23T16:01:35Z
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
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "parametros": {
      "inicio": "2022-01-22T16:01:35.000Z",
      "fim": "2024-01-22T16:01:35.000Z",
      "paginacao": {
        "paginaAtual": 0,
        "itensPorPagina": 100,
        "quantidadeDePaginas": 3,
        "quantidadeTotalDeItens": 215
      }
    },
    "loc": [
      {
        "id": 1,
        "location": "qrcodes-pix.gerencianet.com.br/v2/05a9c9f346294ea1be67fb3dbac0fb9c",
        "tipoCob": "cob",
        "criacao": "2022-11-12T18:42:05.000Z"
      },
      {
        "id": 2,
        "location": "qrcodes-pix.gerencianet.com.br/v2/cobv/ba942526a50746cfae28e8d9af89afd0",
        "tipoCob": "cobv",
        "criacao": "2022-11-12T18:32:10.000Z",
        "txid": "31a0baG77448041d64352h4523459"
      },
      {
        "id": 3,
        "location": "qrcodes-pix.gerencianet.com.br/v2/de2fe49560c64a5fb70aa8249853279f",
        "tipoCob": "cob",
        "criacao": "2022-11-12T18:25:36.000Z",
        "txid": "31a0ba6a7a80g8d64352345334e5h7"
      }
    ]
}
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "valor_invalido",
    "mensagem": "Campo de data fim deve ser maior ou igual ao campo de data inicio"
}
  ```
 </TabItem>
  </Tabs>

</details>
</div> 

<br/>

  ## Recuperar location do payload
Endpoint para recuperar a location do payload

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/loc/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>payloadlocation.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/location/Recuperar_location.md" />
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
    ]}>
  <TabItem value="saida">

  ```json
  {
    "id": 7716,
    "txid": "fda9460fe04e4f129b72863ae57ee22f",
    "location": "pix.example.com/qr/v2/cobv/2353c790eefb11eaadc10242ac120002",
    "tipoCob": "cobv",
    "criacao": "2020-03-11T21:19:51.013Z"
  }
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
 {
    "nome": "location_nao_encontrada",
    "mensagem": "Nenhuma location encontrado para o identificador informado"
  }
  ```
 </TabItem>
  </Tabs>

</details>
</div> 

<br/>

  ## Gerar QR Code de um location
Endpoint para gerar QR Code de um location.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/loc/<HighlightVar>:id</HighlightVar>/qrcode</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>payloadlocation.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/location/Gerar_qrcode.md" />
          </div>
      </div>
      <br/>

  <br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <p><b>Atenção:</b> O link de Visualização funciona apenas para cobranças Pix emitidas em ambiente de produção.</p>

  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode ou copia e cola
    "imagemQrcode": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." ,
    "linkVisualizacao": "https://pix.sejaefi.com.br/cob/pagar/c0a68af7ece6468cbb8e120e29a27cb5"
}
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "location_nao_encontrada",
    "mensagem": "Nenhuma location encontrado para o identificador informado"
}
  ```
 </TabItem>
  </Tabs>

</details>
</div>


<br/>

<h3> Link responsivo para cobrança Pix</h3>

<!-- Link Responsivo -->
<div className="link link-responsivo">
  <div className="img-link-responsivo" alt="Imagem">
  </div>
  <div className="col-83">
    <p><b>Conheça o link responsivo para cobranças Pix</b></p>  
    <p>Este link visa facilitar o compartilhamento das cobranças Pix emitidas via API, mostrando os detalhes da cobrança, bem como a imagem do <i>QR Code</i> e <i>Pix Copia e Cola</i>. E mais! É possível customizá-la utilizando a logo e cor primária definidas nas <a href="https://sejaefi.com.br/blog/personalizar-cobranca-293" target="_blank">configurações da sua conta</a>. </p> 
    <details className="no_border">
      <summary>
        <b>Saiba mais</b>
      </summary>
      <p>Para obter este link da sua cobrança Pix emitida via API, basta acessar o retorno da API no endpoint de criação da cobrança e copiar o id do location gerado.</p>
      <p>Em seguida, você deve consumir o endpoint de QR Code, utilizando o id copiado: 
      <b> https://pix.api.efipay.com.br/v2/loc/:id/qrcode</b></p>
      <p>No endpoint, localize o campo <b>linkVisualizacao</b> e copie a URL gerada.</p>
      <p>Pronto! Com essa URL gerada, basta enviá-la para quem for pagar, conforme exemplo a seguir:</p>
      <div className="figure"> 
        <img src="/img/link_responsivo.gif" className="light_img"/>
        <img src="/img/link_responsivo_dark.gif" className="dark_img"/>
      </div>
      <p>
      <b>Links de exemplo:</b> <br/>
      Cobrança imediata:  <a href="https://pix.sejaefi.com.br/cob/pagar/c0a68af7ece6468cbb8e120e29a27cb5" target="_blank">https://pix.sejaefi.com.br/cob/pagar/c0a68af7ece6468cbb8e120e29a27cb5</a><br/>
      Cobrança com vencimento:  <a href="https://pix.sejaefi.com.br/cobv/pagar/3d89b1ae52604ed5b8accc78f3abd0aa" target="_blank">https://pix.sejaefi.com.br/cobv/pagar/3d89b1ae52604ed5b8accc78f3abd0aa</a>
      </p>
      <p>
      <b>Atenção:</b> Estes links só funcionam para cobranças Pix emitidas em ambiente de produção.</p>
    </details>
  </div>
</div>

<br/>

  ## Desvincular um txid de um location
Endpoint utilizado para desvincular uma cobrança de um location.

Se executado com sucesso, a entidade <code>loc</code> não apresentará mais um txid, como acontecia antes da chamada. Além disso, a entidade <code>cob</code> ou <code>cobv</code> associada ao txid desvinculado também não apresentará mais um location. Essa operação não altera o <code>status</code> da <code>cob</code> ou <code>cobv</code> em questão.
  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v2/loc/<HighlightVar>:id</HighlightVar>/txid</b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>payloadlocation.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/location/Desvincular_txid.md" />
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
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "id": 2316,
    "location": "qrcodes-pix.gerencianet.com.br/v2/a8534e273ecb47d3ac30613104544466",
    "tipoCob": "cob",
    "criacao": "2020-05-31T19:39:54.013Z"
  }
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "location_nao_encontrada",
    "mensagem": "Nenhuma location encontrado para o identificador informado"
}
  ```
 </TabItem>
  </Tabs>

</details>
</div>

</div>