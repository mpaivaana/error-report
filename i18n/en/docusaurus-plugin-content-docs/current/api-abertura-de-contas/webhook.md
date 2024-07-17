---
id: webhook
title: Webhook
hide_title: true
sidebar_label: Webhook
---
<h1 className="titulo">Webhook</h1>
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

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>mTLS Validation</b>
</div>
<p>To use the Account Opening API, your server must have a minimum version of TLS 1.2 and comply with the mTLS communication standard.</p>
</div>
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
  <br/><br/>
The code snippets below are intended to exemplify the settings required on your server so that it is possible to perform the <em>hand-shake</em> with our servers.

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

<br/>

  ## Configure webhook

Configures webhook for the Account Opening API.

  <div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/webhook</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.registration.webhook.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/abertura_conta/webhooks/Configurar_webhook.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Add Webhook', value: 'exemplo', },
    { label: 'Edit Webhook', value: 'exemplo2', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
{
    "webhookUrl": "https://sejaefi.com.br/meu-webhook"
}
  ``` 
  </TabItem>
   <TabItem value="exemplo2">

  ```json
{
    "url": "https://sejaefi.com.br/meu-webhook",
    "chave": "92ecc0a8-9631-4601-a188-feacf8288c13"
}
  ``` 
  </TabItem>
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: '400', },
      {label: '🔴 401', value: '401', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "identificadorWebhook": "92ecc0a8-9631-4601-a188-feacf8288c13"
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
URL inválido
{
    "nome": "url_webhook",
    "mensagem": "A URL informada para webhook é inválida."
}

Or

Invalid protocol
{
    "nome": "protocolo_da_url",
    "mensagem": "A URL do webhook deve usar o protocolo HTTPS."
}

Or

mTLS not configured
{
    "nome": "mtls_nao_configurado",
    "mensagem": "A autenticação TLS mútua não está configurada no URL fornecido."
}

Or

Inaccessible URL
{
    "nome": "url_inacessivel",
    "mensagem": "A URL informada está inacessível."
}

Or

URL timeout
{
    "nome": "limite_de_tempo_atingido_para_url",
    "mensagem": "A URL informada atingiu o tempo limite de resposta."
}

Or

URL failed with error
{
    "nome": "url_falhou_com_erro",
    "mensagem": "A requisição na URL informada falhou com o erro."
}

Or

Non-HTTPS protocol
{
    "nome": "protocolo_da_url",
    "mensagem": "A URL do webhook deve usar o protocolo HTTPS."
}

Or

URL responds to HTTP
{
    "nome": "erro_de_codigo",
    "mensagem": "A URL informada respondeu com o código HTTP."
}

Or

URL not responding
{
    "nome": "url_informada_nao_existe",
    "mensagem": "Não foi possível receber uma resposta da URL informada."
}

Or

Webhook not found
{
    "nome": "chave_invalida",
    "mensagem": "Não foi possível encontrar um webhook com a chave informada."
}

Or

Registered URL
{
    "nome": "url_cadastrada",
    "mensagem": "A URL já foi cadastrada."
}
  ```
  </TabItem>
    <TabItem value="401">

  ```json
 This error occurs in the following situation:

* Integrator does not have permission for the service scope required to consume this endpoint.
  ```
  </TabItem>
    <TabItem value="500">

  ```json
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro na aplicação."
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

  ## Detail webhook
  Details the webhook configured for the Account Opening API.
   <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/webhook/<HighlightVar>:identificadorWebhook</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.registration.webhook.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/abertura_conta/webhooks/Consultar_webhook.md" />
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
      { label: '🔴 400', value: '400', },
      {label: '🔴 401', value: '401', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "webhookUrl": "https://sejaefi.com.br/meu-webhook",
    "identificadorWebhook": "92ecc0a8-9631-4601-a188-feacf8288c13",
    "criacao": "2021-10-26T11:23:35.000Z"
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "identificador_webhook",
    "mensagem": "Não foi possível encontrar um webhook com o identificador webhook informado."
}
  ```
  </TabItem>
    <TabItem value="401">

  ```json
 Unauthorized. This error occurs in the following situation:

* Integrator does not have permission for the service scope required to consume this endpoint.
  ```
  </TabItem>
    <TabItem value="500">

  ```json
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro na aplicação."
}
  ```
  </TabItem>
  </Tabs>
</details>
</div>

<br/>

  ## List webhooks
Lists webhooks configured for the Account Opening API.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/webhooks</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.registration.webhook.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/abertura_conta/webhooks/Listar_webhook.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Request</b></p>
 
  The request sent to this endpoint doesn't need a body, just the OAuth authorization headers, parameters and the account certificate.
    
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
      {label: '🔴 401', value: '401', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
Success
{
    "parametros": {
      "inicio": "2020-04-01T00:00:00.000Z",
      "fim": "2020-04-01T23:59:59.000Z",
      "paginacao": {
        "paginaAtual": 0,
        "itensPorPagina": 100,
        "quantidadeDePaginas": 1,
        "quantidadeTotalDeItens": 1
      }
    },
    "webhooks": [
      {
        "webhookUrl": "https://sejaefi.com.br/meu-webhook",
        "identificadorWebhook": "92ecc0a8-9631-4601-a188-feacf8288c13",
        "criacao": "2021-10-26T11:23:35.000Z"
      }
    ]
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "data_invalida",
    "mensagem": "Campo de data fim deve ser maior ou igual ao campo de data inicio."
}
  ```
  </TabItem>
    <TabItem value="401">

  ```json
Unauthorized. This error occurs in the following situation:

* Integrator does not have permission for the service scope required to consume this endpoint.
  ```
  </TabItem>
    <TabItem value="500">

  ```json
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro na aplicação."
}
  ```
  </TabItem>
  </Tabs>

</details>
</div> 

<br/>

## Cancel webhook
Cancels the webhook configured for the Account Opening API.

  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v1/webhook/<HighlightVar>:identificadorWebhook</HighlightVar></b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.registration.webhook.write</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/abertura_conta/webhooks/Cancelar_webhook.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Request</b></p>
 The request sent to this endpoint doesn't need a body, just the authorization headers, OAuth, parameter and the account certificate.
  <br/>
 <br/>
  <b>Responses</b>

  <br/> 

  The responses below represent Success(204) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      {label: '🟢 204', value: 'saida', },
      { label: '🔴 400', value: '400', },
      {label: '🔴 401', value: '401', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
No content 

* Webhook configured for registration has been canceled.
  ```
  </TabItem>



  <TabItem value="400">

  ```json
{
    "nome": "identificador_webhook",
    "mensagem": "Não foi possível encontrar um webhook com o identificador webhook informado."
}
  ```
  </TabItem>
    <TabItem value="401">

  ```json
Unauthorized. This error occurs in the following situation:

* Integrator does not have permission for the service scope required to consume this endpoint.
  ```
  </TabItem>
    <TabItem value="500">

  ```json
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro na aplicação."
}
  ```
  </TabItem>
  </Tabs>

</details>
</div>

<br/>

  ## Receiving Callbacks
This service is protected by an mTLS authentication layer. Callbacks are sent by Efí via <code>POST url-webhook-registered</code>.  

<br/>

### Request

<div className="link-responsivo">
<div className="requisicao">
<p>When opening an account or if the end customer declines the account opening, Efí will send a <code>POST</code> request to the webhook URL you defined. A JSON object (like the examples below) will be sent to your server. Each callback request has a timeout of 60 seconds, meaning it is terminated if there is no response within 60 seconds.</p>

<details  className="no_border">

  <summary>
    <b> Examples:</b>
</summary>
<div className="left">
  Below are some examples of the JSON object sent.

</div>
<div className="right">
 
</div>
<br/> <br/>
      <p></p>
<Tabs
    defaultValue="Exemplo1"
    values={[
    { label: 'Open account', value: 'Exemplo1', },
    { label: 'The final customer refused to open an account', value: 'Exemplo2', },
  ]}>
    
  <TabItem value="Exemplo1">

  ```json
{
    "contaSimplificada": {
      "identificador": string,
    },
    "evento": "conta_aberta"
}
  ``` 
  </TabItem>
    <TabItem value="Exemplo2">

  ```json
{
    "contaSimplificada": {
      "identificador": string,
    },
    "evento": "conta_recusada_pelo_cliente_final"
}
  ``` 
  </TabItem>

  </Tabs>

  <b>Responses</b>

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