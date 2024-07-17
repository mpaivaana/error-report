---
id: credenciais
title: Credentials, Certificate and Authorization
hide_title: true
sidebar_label: Credentials, Certificate and Authorization
---
<h1 className="titulo">Credentials, Certificate and Authorization</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import {HighlightPost } from "@site/src/components/highlight.js"

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->
<div className="subtitulo">
On this page, you'll find information about credentials, certificates and authorization for the Pix API.
</div>

<br/>
<br/>
The Efí's Pix API offers advanced resources for integrating with your application, allowing you to create custom solutions and offer innovative payment options to your customers. With our API, you can create charges, check received Pix payments, refund, and send Pix payments.
<br/><br/>

To integrate the Efí's Pix API with your system or platform, you need to have an Efí Digital Account. Once you have access, you can obtain the credentials and certificate necessary for communication with the Efí's Pix API.

See below how to obtain credentials, certificates, and details about the authorization and security of your integration with Efí.

<div className="admonition admonition_danger">
<div>
<img src="/img/exclamation-triangle-red.svg"/> <b>
Security in credentials management</b>
</div>
<p>Within systems integrated with our API, it's important that login operations and integration key changes are done securely. We suggest implementing two-factor authentication and other security practices.

</p>

</div>
<br/>

## Getting application credentials

An integrator can create as many applications as he wants. For each application, 2 pairs of keys <code>Client_Id</code> and <code>Client_Secret</code> are generated, one pair for use in Production environment (<a href="/img/producao.jpg" target="_blank">?</a>) and another for Sandbox environment (<a href="/img/homologacao.jpg" target="_blank">?</a>).


Using the Efí's Pix API, the integrator can generate Pix transactions (payments and receipts), configure Webhooks for receiving notifications via *callbacks*, and access the exclusive features of the Efí Digital Account. To do this, it's necessary to activate the necessary scopes in your application.

### Understanding application's scopes

When creating or editing an application in your Efí Account, you'll need to configure the scopes that the application will have access to. The choice of these scopes defines which actions an application is **authorized** to perform via API.

The available scopes in the Efí's Pix API are listed below with their respective permission descriptions:

<ul>
<li><b><code>cob.write</code></b> - charge modification;</li>
<li><b><code>cob.read</code></b> - Get charge;</li>
<li><b><code>pix.write</code></b> - Pix modification;</li>
<li><b><code>pix.read</code></b> - Get Pix;</li>
<li><b><code>pix.send</code></b> - Request for Pix sending;</li>
<li><b><code>webhook.write</code></b> - webhook modification;</li>
<li><b><code>webhook.read</code></b> - Get webhook;</li>
<li><b><code>payloadlocation.write</code></b> - create payload location;</li>
<li><b><code>payloadlocation.read</code></b> - Permission to query locations;</li>
<li><b><code>gn.pix.send.read</code></b> - Get sent Pix;</li>
<li><b><code>gn.pix.evp.write</code></b> - create/remove evp key;</li>
<li><b><code>gn.pix.evp.read</code></b> - list evp key;</li>
<li><b><code>gn.balance.read</code></b> - check account balance;</li>
<li><b><code>gn.settings.write</code></b> - create/modify account settings;</li>
<li><b><code>gn.settings.read</code></b> - list account settings;</li>
</ul>

<br/>

### Create an application or configure an existing one

See how to create an application or use an existing application to integrate with the Efí Pix API.

<Tabs className="tab"
    defaultValue="Criar_uma_aplicacao"
    values={[
      { label: 'Create an application', value: 'Criar_uma_aplicacao', },
      { label: 'Use an existing application', value: 'Aproveitar_uma_aplicacao_existente', },
    ]}>
  <TabItem value="Criar_uma_aplicacao">
<div className="tab_criar_aplicacao">

To **create an application for using the Pix API**, follow the steps below:
<ol>
<li>Access your account and click on the "API" item at the bottom of the left menu of the Efí account;</li>
<li>Click on "Criar aplicação";</li>
<li>Enable the Pix API and choose the scopes you want to release in Production and Sandbox environments (you can edit them in the future);</li>
<li>With the selected scopes, click "Continuar".</li>
</ol>

<div className="figure"><img src="/img/criacao_aplicacao_pix.png" alt="banner" /><p>Illustration of steps for create a new application integrated with the Pix API</p></div>
</div>
  </TabItem>
<TabItem value="Aproveitar_uma_aplicacao_existente">
<div className="tab_criar_aplicacao">

To **use an application already registered** in your account and use it for Pix integration, follow the steps below:
<ol>
<li>Access your account and click on the "API" item at the bottom of the left menu of the Efí account;</li>
<li>Click on "Aplicações". Then, choose the application to be edited, click on the three dots and select "Configurações";</li>
<li>Enable the Pix API and choose the scopes you want to release in Production and Sandbox environments (you can edit them whenever you want);</li>
<li>With the selected scopes, click "Continuar".</li>
</ol>
<div className="figure"><img src="/img/edicao_aplicacao_pix.png" alt="banner" /><p>Steps until editing an application</p></div>
<br/>
<div className="figure"><img src="/img/criacao_aplicacao_pix.png" alt="banner"/><p>Edits necessary for an application's access to the Pix API</p></div>



</div>
 </TabItem>
  </Tabs>
<br/>

## Generating a P12 Certificate

All requests must contain a security certificate provided by Efí within your account, in the format <code>PFX (.p12)</code>. This requirement is fully described in the <a href="https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados" target="_blank">PIX Security Manual</a>.

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
  </div>
  <p>The certificate download is done immediately after its creation. It will not be possible to download the same certificate at another time, so store it securely on your computer.</p>
  </div>
<br/>

To generate your certificate, simply follow the steps below:
<ol>
<li>Access the "API" item in the bottom left menu of the Efí account;</li>
<li>In the left menu, click on "My Certificates";</li>
<li>In the new window, select the environment to which the certificate will belong (Production or Sandbox);</li>
<li>Click on "New Certificate" (blue button);</li>
<li>Assign a description to the certificate to identify it in the future;</li>
<li>Confirm the certificate creation;</li>
<li>Finally, download the certificate and click continue.</li>
</ol>


The steps for creating a certificate are illustrated in the image below.

<div className="figure"><img src="/img/passos_para_criar_certificado.png" alt="banner"/><p>Steps to create the certificate</p></div>

<div className="figure"><img src="/img/janela_criacao_certificado.png" alt="banner" /><p>Window for creating the certificate</p></div>

<div className="figure"><img src="/img/download_certificado.png" alt="banner" /><p>Download window for the generated certificate</p></div>

It is worth noting that **the same certificate can be used by several applications** in your digital account. Still, you can generate up to five certificates for each environment (Production or Sandbox).
<br/>

### Conversion of P12 certificate to PEM format
<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>Information</b>
  </div>
  <p>In some languages, keys need to be converted to the <code>.pem</code> format. Use the information in this section only if this is the case.</p>
</div>

<br/>

If you need to convert the certificate using a <b>Windows</b> operating system, you can use our converter <a href="https://github.com/efipay/conversor-p12-efi" target="_blank">available on GitHub</a>.

To generate your certificate with this converter, simply follow the steps below:
<ol>
<li>Clone or download the converter from the <a href="https://github.com/efipay/conversor-p12-efi" target="_blank">GitHub</a> repository;</li>
<li>Make sure the .p12 file is in the same directory as the script;</li>
<li>Run the <code>conversor_p12_para_pem.bat</code> file;</li>
<li>If the .p12 file is password protected, the script will prompt you to enter the certificate password. If you do not enter a password, the script will consider it an empty password "";</li>
<li>The script will convert the .p12 file to .pem in the same directory, and the generated .pem file will have the same name as the .p12 file, with the <code>.pem</code> extension.</li><br/></ol>

<li>If you need to separate the Private Key from your certificate, after conversion, the script will ask if you want to separate the private key into a separate file. Answer <b>"Y"</b> or <b>"y"</b> for yes.</li>
Thus, the private key will be exported to a separate file with the same name as the .p12 file, but with the <code>_key.pem</code> extension.<br/><br/>


<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Caution!</b>
</div>
<p>It is important to note that you can use <strong>a single certificate for multiple applications in your digital account.</strong> However, you have the option to generate up to five certificates for each environment, whether it is Production or Sandbox.</p>
</div>

<br/>

### Certificate Conversion with OpenSSL

It is also possible to convert the certificate using the OpenSSL command to perform this format conversion between keys:

<Tabs
    defaultValue="Shell"
    values={[
      { label: 'Shell', value: 'Shell', },
    ]}>
  <TabItem value="Shell">

```shell
 # Generate certificate and key in a single file
openssl pkcs12 -in certificado.p12 -out certificado.pem -nodes -password pass:""
```

  </TabItem>
  </Tabs>
<br/>

If it is necessary to separate the private key from the certificate during the conversion, use the command below, also with OpenSSL:

<Tabs
    defaultValue="Shell"
    values={[
      { label: 'Shell', value: 'Shell', },
    ]}>
  <TabItem value="Shell">

```shell
# Generate separate certificate and key
openssl pkcs12 -in path.p12 -out newfile.crt.pem -clcerts -nokeys -password pass:"" #certificate
openssl pkcs12 -in path.p12 -out newfile.key.pem -nocerts -nodes -password pass:"" #private key
```

  </TabItem>
  </Tabs>
<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Information</b>
</div>
<p>The certificate conversion process may request the <b>certificate password</b>. If this occurs, provide empty.</p>
</div>

<br/>

## Base Routes

In this documentation, you will notice references to Base Routes or URLs for Production or Sandbox environments. These routes are actually the URL where the Efí Pix API is located. Thus, when referring to endpoints, it is implicit that these URL segments also compose the final route of the desired resource.

Use the routes below to communicate your application with the production and Sandbox environments offered by Efí.
<div className="table">
<table>
  <tbody>
    <tr>
      <th>Environment</th>
      <th>Base Route</th>
    </tr>
    <tr>
      <td>Production</td>
      <td><code>https://pix.api.efipay.com.br</code></td>
    </tr>
    <tr>
      <td>Sandbox
    </td>
      <td><code>https://pix-h.api.efipay.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

The following routes are still available to communicate your application, but will be discontinued soon. We suggest that you use the routes mentioned earlier.

<div className="table">
<table>
  <tbody>
    <tr>
      <th>Environment</th>
      <th>Base Route</th>
    </tr>
    <tr>
      <td>Production</td>
      <td><code>https://api-pix.gerencianet.com.br</code></td>
    </tr>
    <tr>
      <td>Sandbox
    </td>
      <td><code>https://api-pix-h.gerencianet.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

<br/>

## Authorization with OAuth2

The permission mechanism for requests made to the Efí Pix API is compatible with the <a href="http://oauth.net/2/" target="_blank">OAuth2</a> protocol. This means that it follows a set of rules and standards to authorize requests made to the API.

### The Purpose of OAuth2

To authorize all calls made to the API, it is necessary to obtain an access token (`access_token`). This token is used to verify if a particular application has permission to use the requested endpoint in the API.

### How Request Authentication Is Done

Authentication is performed using HTTP <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">Basic Auth</a>, which requires the `Client_Id` and `Client_Secret` of the application you created in your Efí account. With this authentication, OAuth can provide information about the permissions granted to the application, allowing authorization or denial of requests based on this information.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>The P12/PEM Certificate generated in the previous steps is <strong>required in all requests</strong> made to the Pix API, including the authorization request.</p>
</div>

<br/>

## Postman Collection for Pix API

<div className="link-responsivo">
  <div className="requisicao">
  <p>This is the <a href="https://documenter.getpostman.com/view/13574984/Uz5ArJQX" target="_blank">link</a> to our Collection that we will keep updated with the endpoints of the Efí Pix API.</p>
  <p>

<a href="https://documenter.getpostman.com/view/13574984/Uz5ArJQX"  target="_blank" alt="Postman"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Run in Postman
</button></a>

  </p>
  </div>
  </div>

<br/>

## Setting Postman for tests

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Tip</b>
</div>
<p>The use of Postman software is optional. The next few paragraphs explain how to configure it. If you don't want to use Postman for testing, you can move on to the next topic <a href="#obtaining-authorization" target="_self">Obtaining Authorization</a>.</p>
</div>
<br/>

Before proceeding with the Postman setup, you should have:
<ol>
<li>A pair of credentials called <code>Client_Id</code> and <code>Client_Secret</code> from an application that you registered in your Efí Account;</li>
<li>A P12/PEM certificate that you generated as shown in the previous steps;</li>
<li>The Postman software installed on your computer. If you don't have it, you can download it <a href="https://www.postman.com/downloads/" target="_blank">here.</a></li>
</ol>

<br/>

### 1. Creating an Environment

Creating an *Environment* in Postman is necessary for some built-in automations in the collection to work. These automations were developed to facilitate testing for developers.

With these automations, you only need to request authorization once, and the `access_token` will be stored as an environment variable in Postman, ready to be used in subsequent requests.

To create an Environment, follow these steps:

<ol>
<li>Press <code>Ctrl+N</code> and, when the shortcut opens, choose "Environment";</li>
<li>Assign a name preferably specifying whether this Environment will be pointed to the Production or Sandbox environment;</li>
<li>Create the variable <code>efi-pix-api</code> and as the initial value, enter the URL of the Production or Sandbox Pix API;</li>
<li>Save your Environment;</li>
<li>Select the desired Environment so that Postman recognizes the created variable.</li>
</ol>

In the example below, an Environment pointed to the Sandbox environment of the Pix API was created.

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Tip</b>
</div>
<p>Repeat the above steps to create an Environment pointed to the Production environment. This way, you can simply switch between Environments, and your requests will already be correctly pointed.</p>
</div>

<br/>

<div className="figure"><img src="/img/environment_pix.png" alt="banner"/><p>Creating a new environment</p></div>

<div className="figure"><img src="/img/configuracao_environment_pix.png" alt="banner" /><p>Environment settings</p></div>

<br/>

### 2. Setting the certificate in Postman

All requests made to the Efí Pix API require the certificate generated in your Efí account. Therefore, to facilitate your testing using Postman, follow the steps below to configure the use of the certificate during requests automatically:

<ol>
<li>Click on the gear icon in the top right corner of Postman;</li>
<li>Then, click on "Settings" to open the settings;</li>
<li>In the top tab, click on "Certificates";</li>
<li>Next, click on "Add Certificate";</li>
<li>In the new certificate configuration window, fill in the "Host" field with the base URL of the environment to which the certificate belongs (Production or Sandbox);</li>
<li>Use the "PFX File" field to indicate to Postman where your .p12 certificate file is located. Pay attention to the file format; here, the .p12 certificate should be used;</li>
<li>Finally, click "Add" to save your settings.</li>
</ol>

By following these steps, Postman will use the certificate for any requests made to the configured environment host.

<div className="admonition admonition_tip">
  <div>
  <img src="/img/lightbulb-on-green.svg"/> <b>Tip</b>
  </div>
<p>It is ideal that you configure the certificate for the Sandbox environment, but you can also repeat the above steps to configure Postman with a certificate for the Production environment.</p>
</div>
<br/>

The images below illustrate the step-by-step configuration of the certificate.

<div className="figure"><img src="/img/acessando_configuracoes_pix.png" alt="banner"/><p>Accessing Postman settings</p></div>
<div className="figure"><img src="/img/adicionando_certificado_pix.png" alt="banner" /><p>Adding a new certificate in Postman</p></div>
<div className="figure"><img src="/img/configuracao_certificado_pix.png" alt="banner" /><p>Certificate settings</p></div>

<br/>

### 3. Assigning the Client_Id and Client_Secret in Postman

To configure Postman correctly, you need to add the credentials of your application from the Efí account. These credentials are used for Basic Auth and to obtain the `access_token` using OAuth.

Follow the steps below to include the credentials and perform your first test on the Pix API:

<ol>
<li>In the imported collection, locate the route <code>/oauth/token</code> and double-click to open it;</li>
<li>Access the "Authorization" menu and verify that the "Type" is selected as "Basic Auth";</li>
<li>In the "username" and "password" fields, fill in with the credentials of your application, Client_Id, and Client_Secret, respectively;</li>
<li>To test, click the "Send" button to send the request.</li>
</ol>

After these steps, a JSON response will be displayed, containing the `access_token`, `token_type`, `expires_in`, and `scope` (as in the image below).

<div className="figure"><img src="/img/auth-pix.png" alt="banner" /><p>Using application credentials for request authorization</p></div>
<br/>

## Obtaining Authorization

<div className="auth">
  <b><HighlightPost>POST</HighlightPost> /oauth/token</b>
</div>
  <br/>
  The endpoint POST /oauth/token is used to authorize the credentials of an application and obtain the necessary accesses to use other resources of the API.
<br/>
<br/>

  <div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>It is necessary to include the P12/PEM certificate in the authorization request so that the API server can establish a secure connection.</p>
</div>

<br/> <br/> 

### Examples of Authorization using the .P12 certificate

To use Pix, it's necessary for the client and the server to communicate through a verified connection. This verification is done by the bidirectional certificate (.PEM or .P12), where both the server and the client have a private key and a public key to ensure each other's identity.

Therefore, to make any HTTP request to the Pix API, including the OAuth2 authorization request, it's necessary for the .P12 or .PEM certificate to be present in the request headers.

Below are examples of how to perform authorization in the Pix API Efí, incorporating this certificate into the request:

<Tabs
    defaultValue="PHP"
    values={[
    { label: 'PHP', value: 'PHP', },
    { label: 'Node', value: 'Node', },
    { label: 'Python', value: 'Python', },
    { label: '.Net', value: '.Net', },
    { label: 'Ruby', value: 'Ruby', },
    { label: 'Java', value: 'Java', },
    { label: 'Go', value: 'Go', },
    ]}>
    
  <TabItem value="PHP">

```php
// Developed by the Technical Consulting Team at Efí
<?php 
  $config = [
    "certificado" => "./certificado.pem",
    "client_id" => "YOUR-CLIENT-ID",
    "client_secret" => "YOUR-CLIENT-SECRET"
  ];
  $autorizacao =  base64_encode($config["client_id"] . ":" . $config["client_secret"]);

  $curl = curl_init();

  curl_setopt_array($curl, array(
      CURLOPT_URL => "https://pix-h.api.efipay.com.br/oauth/token", // Base route, Sandbox
      or production
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "POST",
      CURLOPT_POSTFIELDS => '{"grant_type": "client_credentials"}',
      CURLOPT_SSLCERT => $config["certificado"], // Certificate path 
      CURLOPT_SSLCERTPASSWD => "",
      CURLOPT_HTTPHEADER => array(
          "Authorization: Basic $autorizacao",
          "Content-Type: application/json"
      ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);

  echo "<pre>";
  echo $response;
  echo "</pre>";
?>
```
  </TabItem>
  <TabItem value="Node">

  ```javascript
 // Developed by the Technical Consulting Team at Efí

"use strict";
const https = require("https");
var axios = require("axios");
var fs = require("fs");

// Insert the path to your .p12 certificate within your project
var certificado = fs.readFileSync("./certificado.p12");

// Insert the values of your Pix development credentials
var credenciais = {
    client_id: "YOUR-CLIENT-ID",
    client_secret: "YOUR-CLIENT-SECRET",
};

var data = JSON.stringify({ grant_type: "client_credentials" });
var data_credentials = credenciais.client_id + ":" + credenciais.client_secret;

// Encoding the credentials in base64
var auth = Buffer.from(data_credentials).toString("base64");

const agent = new https.Agent({
    pfx: certificado,
    passphrase: "",
});
// Consumption in development of the POST oauth/token route
var config = {
    method: "POST",
    url: "https://pix.api.efipay.com.br/oauth/token",
    headers: {
      Authorization: "Basic " + auth,
      "Content-Type": "application/json",
    },
    httpsAgent: agent,
    data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  ```
  </TabItem>
  <TabItem value="Python">

  ```python
  #Developed by the Technical Consulting Team at Efí

import requests
import base64

credentials = {
    "client_id": "YOUR-CLIENT-ID",
    "client_secret": "YOUR-CLIENT-SECRET",
}

certificado = './certificado.pem'  # The certificate variable is the directory where your certificate in .pem format should be inserted

auth = base64.b64encode(
    (f"{credentials['client_id']}:{credentials['client_secret']}"
     ).encode()).decode()

url = "https://pix.api.efipay.com.br/oauth/token"  #For the Sandbox environment  

payload="{\r\n    \"grant_type\": \"client_credentials\"\r\n}"
headers = {
    'Authorization': f"Basic {auth}",
    'Content-Type': 'application/json'
}

response = requests.request("POST",
                            url,
                            headers=headers,
                            data=payload,
                            cert=certificado)

print(response.text)
  ```
  </TabItem>
    <TabItem value=".Net">

  ```csharp
// Developed by the Technical Consulting Team at Efí

using System;
using System.Security.Cryptography.X509Certificates;
using System.Collections.Generic;
using RestSharp;

namespace Exemplo
{
    class Authorize
    {
      public static string Base64Encode(string plainText)
      {
        var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
        return System.Convert.ToBase64String(plainTextBytes);
      }

      static void Main(string[] args)
      {
        var credencials = new Dictionary<string, string>{
            {"client_id", "YOUR-CLIENT-ID"},
            {"client_secret", "YOUR-CLIENT-SECRET"}
        };
        var authorization = Base64Encode(credencials["client_id"] + ":" + credencials["client_secret"]);
        var client = new RestSharp.RestClient("https://pix.api.efipay.com.br/oauth/token");
        var request = new RestRequest(Method.POST);

        X509Certificate2 uidCert = new X509Certificate2("./certificado.p12", "");
        client.ClientCertificates = new X509CertificateCollection() { uidCert };

        request.AddHeader("Authorization", "Basic " + authorization);
        request.AddHeader("Content-Type", "application/json");
        request.AddParameter("application/json", "{\r\n    \"grant_type\": \"client_credentials\"\r\n}", ParameterType.RequestBody);
        
        IRestResponse restResponse = client.Execute(request);
        string response = restResponse.Content;

        Console.WriteLine(response);
      }
    }
}
  ```
  </TabItem>

  <TabItem value="Ruby">

  ```ruby
#Developed by the Technical Consulting Team at Efí

require "uri"
require "net/http"
require "openssl"

client_id = "YOUR-CLIENT-ID";
client_secret = "YOUR-CLIENT-SECRET";

certfile = File.read("certificado.pem") #  The certfile variable is the directory where your certificate in .pem format should be inserted

url = URI("https://pix.api.efipay.com.br/oauth/token") #For the Sandbox environment

https = Net::HTTP.new(url.host, url.port);
https.use_ssl = true
https.cert = OpenSSL::X509::Certificate.new(certfile)
https.key = OpenSSL::PKey::RSA.new(certfile)

request = Net::HTTP::Post.new(url)
request.basic_auth(client_id, client_secret)
request["Content-Type"] = "application/json"
request.body = "{\r\n    \"grant_type\": \"client_credentials\"\r\n}"

response = https.request(request)
puts response.read_body
  ```
  </TabItem>
    <TabItem value="Java">

  ```java
// Developed by the Technical Consulting Team at Efí

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.URL;
import java.util.Base64;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSocketFactory;

public class Auth {
    public static void main(String[] args) throws Exception {
      String client_id = "YOUR-CLIENT-ID";
      String client_secret = "YOUR-CLIENT-SECRET";;
      String basicAuth = Base64.getEncoder().encodeToString(((client_id+':'+client_secret).getBytes()));
    
      //Directory where your certificate in .p12 format should be inserted
      System.setProperty("javax.net.ssl.keyStore", "certificado.p12"); 
      SSLSocketFactory sslsocketfactory = (SSLSocketFactory) SSLSocketFactory.getDefault();
      
      URL url = new URL ("https://pix.api.efipay.com.br/oauth/token"); //For the Sandbox
     environment                
      HttpsURLConnection conn = (HttpsURLConnection)url.openConnection();
      conn.setDoOutput(true);
      conn.setRequestMethod("POST");
      conn.setRequestProperty("Content-Type", "application/json");
      conn.setRequestProperty("Authorization", "Basic "+ basicAuth);
      conn.setSSLSocketFactory(sslsocketfactory);
      String input = "{\"grant_type\": \"client_credentials\"}";
      
      OutputStream os = conn.getOutputStream();
      os.write(input.getBytes());
      os.flush();     

      InputStreamReader reader = new InputStreamReader(conn.getInputStream());
      BufferedReader br = new BufferedReader(reader);

      String response;
      while ((response = br.readLine()) != null) {
        System.out.println(response);
      }
      conn.disconnect();
    }
}
  ```
  </TabItem>
    <TabItem value="Go">

  ```go
// Developed by the Technical Consulting Team at Efí
package main

import (
    "fmt"
    "strings"
    "net/http"
    "io/ioutil"
    "crypto/tls"
)

const(
    client_id = "YOUR-CLIENT-ID"
    client_secret = "YOUR-CLIENT-SECRET"
)

func main() {

    url := "https://pix.api.efipay.com.br/oauth/token"// Base route, Sandbox
   or production
    method := "POST"

    payload := strings.NewReader(`{"grant_type": "client_credentials"}`)

    cert, _ := tls.LoadX509KeyPair("CA.crt.pem", "KEY.crt.pem")// Your certificate and private key generated from the OpenSSL conversion commands

    client := &http.Client{
      Transport: &http.Transport{
        TLSClientConfig: &tls.Config{
          Certificates: []tls.Certificate{cert},
        },
      },
    }

    req, err := http.NewRequest(method, url, payload)

    if err != nil {
      fmt.Println(err)
      return
    }
    req.SetBasicAuth(client_id, client_secret)
    req.Header.Add("Content-Type", "application/json")

    res, err := client.Do(req)
    if err != nil {
      fmt.Println(err)
      return
    }
    defer res.Body.Close()

    body, err := ioutil.ReadAll(res.Body)
    if err != nil {
      fmt.Println(err)
      return
    }
    fmt.Println(string(body))
}
  ```
  </TabItem>
  
  </Tabs>

<br/>

### Example of authorization response

Below is a code snippet representing an example of the OAuth response to your authorization request:

<Tabs className="tab"
    defaultValue="Resposta"
    values={[
    { label: 'Response', value: 'Resposta', },
    ]}>
    
  <TabItem value="Resposta">

 ```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "token_type": "Bearer",
    "expires_in": 3600,
    "scope": "cob.read cob.write pix.read pix.write"
}
 ```
  </TabItem>

</Tabs>
<br/>

The table below describes the attributes present in the returned JSON.

<table className="table">
<tbody>
    <tr>
      <th>Attribute</th>
      <th align="center">Description</th>
      <th align="center">Type</th>
    </tr>
    <tr>
      <td><b>access_token</b></td>
      <td align="left">Authorization token to be used in other requests made to the API.</td>
      <td>string</td>
    </tr>
     <tr>
      <td><b>token_type</b></td>
      <td align="left">Type of authorization the <code>access_token</code> should be used with.<br/><strong>Default</strong>: "Bearer"</td>
      <td>string</td>
    </tr>
     <tr>
      <td><b>expires_in</b></td>
      <td align="left">Expiration time of the <code>access_token</code> in seconds.<br/><strong>Default</strong>: 3600</td>
      <td>Integer (int32)</td>
    </tr>
    <tr>
      <td><b>scope</b></td>
      <td align="left">List of scopes that the authorized application has access to. Scopes are separated by space.</td>
      <td>string</td>
    </tr>
    </tbody>
</table>
<br/>


</div>