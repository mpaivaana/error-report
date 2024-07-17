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
The following set of endpoints is intended to handle configuration and removal of locations for payload usage.
</div>

<br/>
<br/>

## Create payload location
  Endpoint to create a payload location. Required to send the <code>tipoCob</code> attribute with the value COB or COBV in the request body.

<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v2/loc</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requires authorization for the scope: <code>payloadlocation.write</code>
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
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

  ## Get registered locations
  Endpoint to retrieve registered locations.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/loc</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>payloadlocation.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/location/Consultar_locations.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Request</b></p>
  To obtain the result of the location query, it is necessary to provide the parameters <code>inicio</code> and <code>fim</code>, as shown in the code snippet below. These parameters restrict the results to the locations within that date range.
<br/>
<br/>
  <code>
  /v2/loc/?inicio=2020-10-22T16:01:35Z&fim=2020-10-23T16:01:35Z
 </code>
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

  ## Retrieve payload location
Endpoint to retrieve payload location

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/loc/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>payloadlocation.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/location/Recuperar_location.md" />
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

## Generate QR Code from location
Endpoint to Generate QR Code from a location.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/loc/<HighlightVar>:id</HighlightVar>/qrcode</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>payloadlocation.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/location/Gerar_qrcode.md" />
          </div>
      </div>
      <br/>

  <br/>

  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <p><b>Attention:</b> The Preview link only works for Pix charges issued in a production environment.</p>

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

<h3> Responsive Link for Pix Charge</h3>

<!-- Responsive Link -->
<div className="link link-responsivo">
  <div className="img-link-responsivo" alt="Image">
  </div>
  <div className="col-83">
    <p><b>Discover the responsive link for Pix charges</b></p>  
    <p>This link aims to facilitate the sharing of Pix payments issued via API, displaying payment details, as well as the image of the <i>QR Code</i> and <i>Pix Copy and Paste</i>. More over! You can customize it using the logo and primary color defined in the <a href="https://sejaefi.com.br/blog/personalizar-cobranca-293" target="_blank">settings of your account</a>.</p> 
    <details className="no_border">
      <summary>
        <b>Learn more</b>
      </summary>
      <p>To obtain this link for your Pix payment issued via API, simply access the API response at the payment creation endpoint and copy the generated location ID.</p>
      <p>Then, you should consume the QR Code endpoint using the copied ID: 
      <b> https://pix.api.efipay.com.br/v2/loc/:id/qrcode</b></p>
      <p>In the endpoint, locate the <b>linkVisualizacao</b> field and copy the generated URL.</p>
      <p>That's it! With this generated URL, just send it to whoever is going to pay, as shown in the example below:</p>
      <div className="figure"> 
        <img src="/img/link_responsivo.gif" className="light_img"/>
        <img src="/img/link_responsivo_dark.gif" className="dark_img"/>
      </div>
      <p>
      <b>Example Links:</b> <br/>
      Immediate charge:  <a href="https://pix.sejaefi.com.br/cob/pagar/c0a68af7ece6468cbb8e120e29a27cb5" target="_blank">https://pix.sejaefi.com.br/cob/pagar/c0a68af7ece6468cbb8e120e29a27cb5</a><br/>
      Due charge:  <a href="https://pix.sejaefi.com.br/cobv/pagar/3d89b1ae52604ed5b8accc78f3abd0aa" target="_blank">https://pix.sejaefi.com.br/cobv/pagar/3d89b1ae52604ed5b8accc78f3abd0aa</a>
      </p>
      <p>
      <b>Attention:</b> These links only work for Pix payments issued in the production environment.</p>
    </details>
  </div>
</div>

<br/>

  ## Unlink a txid from location
Endpoint used to unlink a charge from a location.

If successfully executed, the <code>loc</code> entity will no longer have a txid, as it did before the call. Additionally, the <code>cob</code> or <code>cobv</code> entity associated with the unlinked txid will also no longer have a location. This operation does not change the <code>status</code> of the <code>cob</code> or <code>cobv</code> in question.
  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v2/loc/<HighlightVar>:id</HighlightVar>/txid</b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requires authorization for the scope: <code>payloadlocation.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/location/Desvincular_txid.md" />
          </div>
      </div>
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