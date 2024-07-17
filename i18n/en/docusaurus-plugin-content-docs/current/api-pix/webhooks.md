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
This section gathers endpoints for managing notifications by the receiving PSP to the receiving end user.

</div>

<br/>
<br/>

## Understanding the mTLS pattern
  By Central Bank regulation, it will be necessary to insert an Efí public key into your server so that communication follows the mTLS standard. In the domain representing your server, you should configure the requirement of the public key (mTLS) that we are providing, so that mutual authentication occurs.

  Efí will make 2 requests to your domain (server):

  <ol>
  <li>First Request: We will ensure that your server is requiring an Efí public key. To do this, we will send a request without a certificate and your server should not accept the request. If your server responds with refusal, we will send the 2nd request.<br/></li>
  <li>Second Request: Your server, which must contain the provided public key, should perform the "Hand-Shake" so that communication is established.<br/></li>
   </ol>

  Your server must have a minimum TLS version of 1.2.

  On your server, configure a 'POST' route with a default response as a string "200". Include our production or Sandbox certificate on your server, below are some examples.<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Dedicated Servers</b>
</div>
<p>It is recommended that you have a dedicated server to be able to perform webhook configurations, as you need access to some files to make the configurations, as in the examples below.</p>
</div>
<br/>

## Examples of server settings
To configure your server, you will need the Efí public keys. Below are the addresses of the keys for the Production and Sandbox environments. These keys must be downloaded and placed on your server.<br/><br/>
<div>
  <table className= "table">
  <tbody>
  <tr>
    <th>Attribute</th>
    <th align="center">Public Key URL</th>
  </tr>
  <tr>
    <td><b>Production</b></td>
    <td align="left"><code>https://certificados.efipay.com.br/webhooks/certificate-chain-prod.crt</code>
    </td>
  </tr>
  <tr>
    <td><b>Sandbox</b></td>
    <td align="left"><code>https://certificados.efipay.com.br/webhooks/certificate-chain-homolog.crt</code>
    </td>
  </tr>
  </tbody>
</table>
</div>
<br/>
The code snippets below aim to exemplify the necessary configurations on your server to perform the hand-shake with our servers.
<br/><br/>

  <Tabs
    defaultValue="Python"
    values={[
    { label: 'Python', value: 'Python', },
    { label: 'Nginx', value: 'Nginx', },
    { label: 'Node', value: 'Node', },
    { label: 'Apache', value: 'Apache', },
    { label: 'PHP', value: 'PHP', },
    ]}>
    
  <TabItem value="Python">

  ```python
  from flask import Flask, jsonify, request
import ssl
import json
app = Flask(__name__)

@app.route("/", methods=["POST"])
def imprimir():
    response = {"status": 200}
    return jsonify(response)


@app.route("/pix", methods=["POST"])
def imprimirPix():
    imprime = print(request.json)
    data = request.json
    with open('data.txt', 'a') as outfile:
        outfile.write("\n")
        json.dump(data, outfile)
    return jsonify(imprime)

if __name__ == "__main__":
    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    context.verify_mode = ssl.CERT_REQUIRED
    context.load_verify_locations('caminho-certificados/certificado-público.crt')
    context.load_cert_chain(
        'caminho-certificados/server_ssl.crt.pem',
        'caminho-certificados/server_ssl.key.pem')
    app.run(ssl_context=context, host='0.0.0.0')
#Developed by the Technical Consulting Team at Efí
  ``` 
  </TabItem>
  <TabItem value="Nginx">

  ```json
  server {
    #
    # ...
    #
    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate server_ssl.crt.pem;
    ssl_certificate_key server_ssl.key.pem;
    ssl_client_certificate /root/chain-pix-webhooks-prod.crt;
    ssl_verify_client optional;
    ssl_verify_depth 3;
    #
    # ...
    #
    location /webhook {
      if ($ssl_client_verify != SUCCESS) {
        return 403;
      }
      proxy_pass /webhook;
    }
}
#Developed by the Technical Consulting Team at Efí
  ```
  </TabItem>
  <TabItem value="Node">

  ```javascript
  const express = require("express");
const fs = require("fs");
const https = require("https");
var logger = require('morgan');

const httpsOptions = {
    cert: fs.readFileSync(""), // Domain fullchain certificate
    key: fs.readFileSync("/"), // Domain private key
    ca: fs.readFileSync(""),   // Efí's public certificate
    minVersion: "TLSv1.2",
    requestCert: true,
    rejectUnauthorized: true, // If you need other endpoints not to reject requests without mTLS, you can change it to false
};

const app = express();
const httpsServer = https.createServer(httpsOptions, app);
const PORT = 443;

app.use(logger('dev'));  // Comment this line if you don't want the server log to be displayed in your console
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Endpoint for webhook configuration, you need to register https://SEUDOMINIO.com/webhook
app.post("/webhook", (request, response) => {
    // Checks whether the request that arrived at this endpoint was authorized
    if (request.socket.authorized) { 
      response.status(200).end();
    } else {
      response.status(401).end();
    }
});

// Endpoint for receiving the webhook handling /pix
app.post("/webhook/pix", (request, response) => {
    if (request.socket.authorized){
      //Your code handling the callback
      /* EXEMPLO:
      var body = request.body;
      filePath = __dirname + "/data.json";
      fs.appendFile(filePath, JSON.stringify(body) + "\n", function (err) {
          if (err) {
              console.log(err);
          } else {
              response.status(200).end();
          }
      })*/
      response.status(200).end();
    }else{
      response.status(401).end();
    }
});

httpsServer.listen(PORT, () =>
    console.log(`Express server currently running on port ${PORT}`)
);
//Developed by the Technical Consulting Team at Efí
  ```
  </TabItem>
    <TabItem value="Apache">

  ```json
# ********************************************************************************* #
# Use the first example if you want to require the certificate for authentication #
# mutual on any route in the domain indicated in VirtualHost. #
# Works well for sub-domains. Example: https://www.webhook.your_domain.com.br   # 
# ********************************************************************************* #

<IfModule mod_ssl.c>
<VirtualHost *:443> # Porta HTTPS
    #
    # ...
    #

    SSLCertificateFile /certificate_path/fullchain_ssl.pem #fullchain associated with your domain SSL certificate
    SSLCertificateKeyFile /path_certificate/privkey_ssl.pem #privkey associated with your domain SSL certificate

    #Efí public key
    SSLCACertificateFile /path_certificate/chain-pix-prod.crt
    
    # mTLS Efí
    SSLVerifyClient require
    SSLVerifyDepth 3
      
    # Treating /pix, always redirecting requests to /webhook
    Alias ​​"/pix/" "/var/www/webhook/index.php"
    Alias ​​"/pix" "/var/www/webhook/index.php"

    #
    # ...
    #
</VirtualHost>
</IfModule>


# ******************************************************************************** #
# Use the second example, if you want to require the certificate for authentication #
# mutual in only one route from the domain indicated in VirtualHost. #
# Example: https://www.your_domain.com.br/webhook/                                 #     
# ******************************************************************************** #

<IfModule mod_ssl.c>
<VirtualHost *:443> # Porta HTTPS
    #
    # ...
    #

    SSLCertificateFile /certificate_path/fullchain_ssl.pem #fullchain associated with your domain SSL certificate
    SSLCertificateKeyFile /path_certificate/privkey_ssl.pem #privkey associated with your domain SSL certificate

    #Efí public key
    SSLCACertificateFile /path_certificate/chain-pix-prod.crt
    
    # mTLS Efí
    SSLVerifyClient none
    SSLProtocol TLSv1.2
      
    <Location "/webhook">
        SSLVerifyClient require
        SSLVerifyDepth 3
    </Location>
    
    # Treating /pix, always redirecting requests to /webhook
    Alias ​​"/webhook/pix/" "/var/www/webhook/index.php"
    Alias ​​"/webhook/pix" "/var/www/webhook/index.php"

    #
    #...
    #
</VirtualHost>
</IfModule>
  ```
  </TabItem>

  <TabItem value="PHP">

  ```php
# ********************************************************************************** #
# For this example to work, your server must have configured                         #
# the mTLS certificate, with the direction to this file, and also with the           #
# dealing with /pix. Just as it is done in our example of Apache servers.            #
# ********************************************************************************** #

<?php

function resposta($status, $mensagem, $dados)
{
    $resposta['status'] = $status;
    $resposta['mensagem'] = $mensagem;
    $resposta['dados'] = $dados;
    $json_resposta = '<pre>' . json_encode($resposta, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . '</pre>';

    header("HTTP/1.1 " . $status);
    echo $json_resposta;
}

function salvar($dados)
{
    // Create a .json file to save the information
    $nomeArquivo = './dados.json';
    $dadosGravados = json_decode(file_get_contents($nomeArquivo), true);
    $arquivo = fopen($nomeArquivo, 'w');

    // Enhances the information sent with what was already recorded
    array_push($dadosGravados, $dados);

    if (fwrite($arquivo, json_encode($dadosGravados))) {
      resposta(200, "Request completed successfully!", $dados);
    } else {
      resposta(300, "Failed to save request data.", $dados);
    }

    fclose($arquivo);
}

function requisicao($metodo, $body, $parametros)
{
    switch ($metodo) {
      case 'POST':
        salvar($body);
        break;
      case 'GET':
        resposta(200, "Request completed successfully!", $body);
        break;
    }
}

// Gets the HTTP method, body and parameters of the request
$metodo = $_SERVER['REQUEST_METHOD'];
$parametros = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
$body = json_decode(file_get_contents('php://input'), true);

try {
    requisicao($metodo, $body, $parametros);
} catch (Exception $e) {
    resposta(400, $e->getMessage(), $e);
}
  ```
  </TabItem>
  
  </Tabs>

To have a valid SSL, you must contact a Certificate Authority and generate the private key <code>server_ssl.key.pem</code> and a public one <code>server_ssl.crt.pem</code>, thus validating the integrity of the connection. You can do this for free using a utility like <a href="https://certbot.eff.org/" target="_blank">Certbot</a>, for example.

<h3> Skip-mTLS </h3>

For hosting on shared servers, there may be restrictions regarding the insertion of certificates generated by another entity, such as our CA, for example. Therefore, we provide the option to skip mTLS, which allows registering the webhook without the need for mTLS validation. <br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>It is important to note that we will always send the certificate in webhooks, whether in registration or in Pix notification. However, when skip-mTLS is used, you, the integrating party, are responsible for validating our certificate.<br/>

If you choose to use the skip mTLS attribute, that is, without mTLS validation on your server, you must implement measures to ensure that the sender of the webhooks to your server is indeed Efí.</p>
</div>

<br/>

We suggest the following two validation methods, but strongly recommend that you use them together:<br/>

<ul>
<li>Check the communication IP: You can restrict communication to the webhook domain to only accept messages from the IP used by Efí.<br/></li>
<code>IP currently used in our communications: '34.193.116.226'.</code>
<li>Add a hash to the registered webhook URL: Create an hmac (a proprietary identifier) that will be appended to the end of the URL when registering the webhook. This hash will be used to validate the origin of the notification. Thus, all webhooks sent to your server will have this final identification and your application must validate its presence.<br/>
<b>Example:</b>
<br/>Original notification URL: <code>https://your_domain.com.br/webhook</code>
<br/>How it should be registered with the hash: <code>https://your_domain.com.br/webhook?hmac=xyz&ignorar=</code>. The term <code>ignorar=</code> will serve to handle the addition of <code>/pix</code> at the end of the URL.</li>
</ul>


<h3> How to register skip-mTLS: </h3>

To configure the Pix webhook, you must use the specific endpoint and pass the parameter <code>x-skip-mtls-checking</code> in the request header with the value <code>true</code> or <code>false</code> depending on whether you want to enable or disable this feature.<br/>

The image below shows how this parameter should be provided:
<div className="img-container">
    <img src="/img/put_webhook.png"/>
</div>

<br/>

## Setting Pix Webhook

Endpoint for configuring the notification service for received Pix. Pix originating from static collections will only be notified if they are associated with a <code>txid</code>.

<div class="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Reminder</b>
</div>
<p>A webhook URL can be associated with multiple Pix keys.</p> 
<p><strong>On the other hand, a Pix key can only be linked to a single webhook URL.</strong></p>
</div>
<br/>

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>Information</b>
  </div>
<p>When registering your webhook, we will send a test notification to the registered URL, however when a notification is actually sent, the path <code>/pix</code> will be added to the end of the registered URL. To avoid needing two distinct routes, you can add a <code>?ignorar=</code> parameter to the end of the registered URL, so that <code>/pix</code> is not added to your URL route. </p>
</div>
<br/>

  <div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/webhook/<HighlightVar>:chave</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>webhook.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/webhooks/Configurar_webhook.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Example 1', value: 'exemplo', },
    { label: 'Example 2', value: 'exemplo2', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
  {
    "webhookUrl": "https://exemplo-pix/webhook"
  }
  ``` 
  </TabItem>

  <TabItem value="exemplo2">

```json
{
  "webhookUrl": "https://exemplo-pix/webhook?ignorar="
}
```

  </TabItem>
  </Tabs>


  <br/>   
        
  <b>Response</b>

  <br/> 

  The Responses below represent Success(201) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 201', value: 'saida', },
      { label: '🔴 400', value: '400', },
    ]}>
  <TabItem value="saida">

  ```json
  Webhook for notifications about Pix received associated with a txid.
  ```
  </TabItem>
  <TabItem value="400">

  ```json
InvalidValueError
{
    "nome": "valor_invalido",
    "mensagem": "URL inválida"
}

Or

{
    "nome": "valor_invalido",
    "mensagem": "A URL do webhook deve usar o protocolo HTTPS"
}

Or

{
    "nome": "webhook_invalido",
    "mensagem": "A autenticação de TLS mútuo não está configurada na URL informada"
}

Or

{
    "nome": "webhook_invalido",
    "mensagem": "A URL informada está inacessível"
  }

Or

{
    "nome": "webhook_invalido",
    "mensagem": "A URL informada atingiu o tempo limite de resposta"
}

Or

{
    "nome": "webhook_invalido",
    "mensagem": "A requisição na URL informada falhou com o erro: {{errno}}" //{{errno}} represents a Linux error code: https://man7.org/linux/man-pages/man3/errno.3.html Ex: ECONNRESET, EPIPE 
}

Or

{
    "nome": "webhook_invalido",
    "mensagem": "A URL informada respondeu com o código HTTP {{httpStatus}}" // {{httpStatus}} representa o status HTTP que a url respondeu. Ex: 400, 403, 500.
}

Or

{
    "nome": "webhook_invalido",
    "mensagem": "Não foi possível receber uma resposta da URL informada"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

  ## Get webhook information 
  Endpoint for retrieving information about the pix webhook .
   <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/webhook/<HighlightVar>:chave</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>webhook.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/webhooks/Consultar_webhook.md" />
          </div>
      </div>
      <br/> <br/>

  <b>Response</b>

  <br/> 

  The responses below represent Consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "webhookUrl": "https://gn-pix-webhook.gerencianet.com.br/webhook/",
    "chave": "40a0932d-1918-4eee-845d-35a2da1690dc",
    "criacao": "2020-11-11T10:15:00.358Z"
  }
  ``` 
  </TabItem>
  
  </Tabs>

</details>
</div>

<br/>

## Get list of webhooks
Endpoint to retrieve webhooks associated with keys through parameters such as <code>inicio</code> and <code>fim</code>. Attributes are entered as <em>query params</em>.
  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/webhook</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
           Requires authorization for the scope: <code>webhook.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/webhooks/Listar_webhook.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Request</b></p>
 The snippet below shows how the <code>inicio</code> and <code>fim</code> parameters(mandatory) should be passed in the request.<br/><br/>
  <code>/v2/webhook/?inicio=2020-10-22T16:01:35Z&fim=2020-10-23T16:01:35Z</code>
    
  <br/>
 <br/>

  <b>Response</b>

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
      "inicio": "2021-01-22T16:01:35.000Z",
      "fim": "2022-12-30T16:01:35.000Z",
      "paginacao": {
        "paginaAtual": 0,
        "itensPorPagina": 100,
        "quantidadeDePaginas": 1,
        "quantidadeTotalDeItens": 5
      }
    },
    "webhooks": [
      {
        "webhookUrl": "https://seudominio.com.br/gn/webhook/",
        "chave": "40a0932d-1618-4eee-845d-35a2da1590dc",
        "criacao": "2021-05-05T19:52:13.000Z"
      },
      {
        "webhookUrl": "https://.projetosseudominio.seudominio.com.br/gn/webhook/",
        "chave": "40a0932d-1918-0eee-845d-35a2da1690dc",
        "criacao": "2021-10-18T14:42:41.000Z"
      },
      {
        "webhookUrl": "https://seudominio.com.br/webhook/?ignorar=",
        "chave": "40a0032d-1918-45ee-845d-3562da1690dc",
        "criacao": "2021-11-03T12:25:15.000Z"
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

## Cancel Pix webhook
  Endpoint for canceling the pix webhook.

  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v2/webhook/<HighlightVar>:chave</HighlightVar></b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requires authorization for the scope: <code>webhook.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/pix/webhooks/Cancelar_webhook.md" />
          </div>
      </div>
      <br/>

  <br/>    

  <b>Response</b>

  <br/> 

  The response below represents Success (204) of consumption.
  <Tabs
    defaultValue="saida"
    values={[
      {label: '🟢 204', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  Webhook for Pix notifications has been canceled.
  ``` 
  </TabItem>
  
  </Tabs>

</details>
</div>

<br/>

## Receiving Callbacks
This service is protected by a layer of mTLS authentication. Callbacks are sent by Efí via <code>POST url-registered-webhook​/pix</code> when there is a change in the Pix status.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Information</b>
</div>
<p>To test Pix Cob and Pix CobV charge endpoints in the sandbox environment, you can simulate all status changes returned by our API and webhook.</p>
<p>Charges with values between <b>R$ 0.01</b> and <b>R$ 10.00</b> are confirmed, and you will receive the information via webhook.<br/>
Charges with values above <b>R$ 10.00</b> remain active, without confirmation, and there are no webhooks for these cases.<br/></p>
</div>
<br/>

### Request

<div className="link-responsivo">
<div className="requisicao">
<p>When there is a change in the status of a Pix transaction associated with the registered key, Efí sends a <code>POST</code> request to the webhook URL you defined. A JSON object (like the examples below) will be sent to your server. Each callback request has a timeout of 60 seconds, meaning it is interrupted if there is no response within 60 seconds.</p>

<details  className="no_border">

  <summary>
    <b> Examples:</b>
</summary>
<div className="left">
  Below, see some examples of the JSON object sent.
</div>
<div className="right">
  <Modal filename="/markdown/i18n/pix/webhooks/Recebendo_callbacks.md" />
</div>
<br/> <br/>
      <p></p>
<Tabs
    defaultValue="Exemplo-Pix-recebido"
    values={[
    { label: 'Received', value: 'Exemplo-Pix-recebido', },
    { label: 'Refund', value: 'Exemplo-Devolução', },
    { label: 'Send', value: 'Exemplo-Pix-enviado', },
  ]}>
    
  <TabItem value="Exemplo-Pix-recebido">

  ```json
 // Pix received
{
    "pix": [
      {
        "endToEndId": "E1803615022211340s08793XPJ",
        "txid": "fc9a43k6ff384ryP5f41719",
        "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",     
        "valor": "0.01",
        "horario": "2020-12-21T13:40:34.000Z",
        "infoPagador": "pagando o pix"
      }
    ]
}

 // Pix received with payer data
{
    "pix": [
      {
        "endToEndId": "E1803615022211340s08793XPJ",
        "txid": "fc9a43k6ff384ryP5f41719",
        "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",     
        "valor": "0.01",
        "horario": "2020-12-21T13:40:34.000Z",
        "infoPagador": "pagando o pix",
        "gnExtras": {
          "pagador": {
            "nome": "Consultoria Efi",
            "cnpj": "09089356000118",
            "codigoBanco":"00416968"
          },
      }
    ]
}
  // Pix received with Split
{
    "pix": [
      {
        "endToEndId": "E1803615022211340s08793XPJ",
        "txid": "fc9a43k6ff384ryP5f41719",
        "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",     
        "valor": "0.01",
        "horario": "2020-12-21T13:40:34.000Z",
        "infoPagador": "Teste",
        "gnExtras": {
          "split": {
            "id": "f659e882b00440ef9f07538fb697a6b2", 
            "revisao": 0
          }
        }
      }
    ]
}
  
// Pix received with informed rate
{
    "pix": [
      {
        "endToEndId": "E1803615022211340s08793XPJ",
        "txid": "fc9a43k6ff384ryP5f41719",
        "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",     
        "valor": "0.10",
        "horario": "2020-12-21T13:40:34.000Z",
        "infoPagador": "pagando o pix",
        "gnExtras": {
          "tarifa": "0.01"
        }
      }
    ]
}
  ```
  </TabItem>
  <TabItem value="Exemplo-Devolução">

  ```json
  // Refund sent
{
    "pix": [
      {
        "endToEndId": "E12345678202009091221syhgfgufg",
        "txid": "c3e0e7a4e7f1469a9f782d3d4999343c",
        "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",
        "valor": "110.00",
        "horario": "2020-09-09T20:15:00.358Z",
        "infoPagador": "0123456789",
        "devolucoes":[
          {
            "id": "123ABC",
            "rtrId": "D12345678202009091221abcdf098765",
            "valor": "110.00",
            "horario": {
              "solicitacao": "2020-09-09T20:15:00.358Z"
            },
            "status": "DEVOLVIDO"
          }
        ]
      }
    ]
}

// Refund rejected
{
    ...
        "devolucoes": [
          {
            ...,
            "status": "NAO_REALIZADO",
            "motivo": "Saldo insuficiente para realizar a devolução."
          }
        ]
    ...
}

  ```
  </TabItem>

  <TabItem value="Exemplo-Pix-enviado">

  ```json
  // Sent Pix 
{
    "pix": [
      {
        "endToEndId": "E090893562021030PIf25a7868",
        "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",
        "tipo": "SOLICITACAO",
        "status": "REALIZADO",
        "valor": "0.01",
        "horario": "2021-03-04T20:39:47.000Z",
        "gnExtras": {
          "idEnvio": "123ABC"
        }
      }
    ]
}

  // Rejected Pix
{
    "pix": [
        {
            "endToEndId": "E090893562021030PIf25a7868",
            "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",
            "tipo": "SOLICITACAO",
            "status": "NAO_REALIZADO",
            "valor": "0.01",
            "horario": null,
            "infoPagador": "0123456789",
            "gnExtras": {
                "idEnvio": "123ABC",
                "erro": {
                    "codigo": "AC03",
                    "origem": "PSP do usuário recebedor",
                    "motivo": "Número da agência e/ou conta transacional do usuário recebedor inexistente ou inválido"
                }
            }
        }
    ]
}
  ```
  </TabItem>

  </Tabs>

  <b>Response</b>

  <br/> 

Callback requests wait for a response with HTTP status 2XX. If the client's server returns a different status, Efí will make up to 10 new notification attempts. The first new attempt will be made 5 minutes after the failure to send the callback. If the error persists, subsequent attempts will be sent at increasingly longer intervals, as shown in the table below.

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>
  <p>In cases where the client's server returns HTTP status 429 (<i>too many requests</i>), Efí's servers will also attempt to send the notification up to 10 times according to the table below.</p>
</div>

 <br/>
  <table className="table"> 
  <tbody>
    <tr>
      <th>N° of attempts</th>
      <th align="center">Time (in minutes)</th>
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