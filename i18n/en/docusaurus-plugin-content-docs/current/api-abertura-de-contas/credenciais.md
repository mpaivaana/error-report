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


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
On this page, you'll find information about credentials, certificates, and authorization for the Efí Account Opening API.
</div>

<br/>
<br/>

With the Account Opening API, you can initiate the account opening process for your clients conveniently and obtain the necessary credentials and certificates to use the client's application.

<div className="admonition admonition_danger">
<div>
<img src="/img/exclamation-triangle-red.svg"/> <b>
Warning about Beta API</b>
</div>
<p>Currently, our API is in beta version. We're excited to share this tool with you; however, it's essential to remember that it's under active development and may undergo changes during this period.

</p>
<p>We deeply value your feedback during this beta phase. We want to hear about your experiences and suggestions to continuously improve the API. Feel free to contact us through our support channels or community forum on Discord.
</p>
</div>
<br/>

To integrate the Efí Account Opening API into your system or platform, you need to have an Efí Business Digital Account. After gaining access to the account, you can acquire the necessary credentials to establish communication with the Efí Account Opening API.

See below how to obtain credentials, certificates, and details about authorization and security for your integration with Efí.

<div className="admonition admonition_danger">
<div>
<img src="/img/exclamation-triangle-red.svg"/> <b>
Security in Credentials Management</b>
</div>
<p>Within systems integrated with our API, it's important that login operations and integration key changes are performed securely. We suggest implementing two-factor authentication and other security practices.

</p>

</div>
<br/>


## Getting application credentials

An integrating person can create as many applications as desired. For each application, 2 pairs of keys `Client_Id` and `Client_Secret` are generated, one pair for use in the Production environment (<a href="/img/producao.jpg" target="_blank">?</a>) and another for the Sandbox environment (<a href="/img/homologacao.jpg" target="_blank">?</a>).
In addition, it is necessary to activate the necessary scopes to be able to use the Efí Account Opening API.

### Understanding application's scopes

When creating or editing an application in your Efí Account, you will need to configure which scopes the application will have access to. The choice of these scopes defines what actions an application will be authorized to perform via the API.

The scopes available in the Account Opening API are listed below with their respective descriptions:

<ul>
<li><b><code>gn.registration.write</code></b> - perform a simplified account opening request;</li>
<li><b><code>gn.registration.read</code></b> - retrieve credentials for the simplified account;</li>
<li><b><code>gn.registration.webhook.write</code></b> - change webhook;</li>
<li><b><code>gn.registration.webhook.read</code></b> - get webhook</li>
</ul>
<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>To use the Efí Account Opening API, it is necessary to have the release of the scopes mentioned on this page. To obtain this release, it is necessary to fill out the form available <a href="https://sejaefi.com.br/formularios/api-de-cadastro" target="_blank">here</a>.</p>
</div>
<br/>

### Create an application or configure an existing one

<div class="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>To use the Efí Account Opening API, it is necessary to have an active application with scopes in both Production and Sandbox environments of the Pix or Open Finance API.</p>
</div>
<br/>

See how to create an application or use an existing application to integrate with the Efí Account Opening API.

<Tabs className="tab"
    defaultValue="Criar_uma_aplicacao"
    values={[
      { label: 'Create an application', value: 'Criar_uma_aplicacao', },
      { label: 'Use an existing application', value: 'Aproveitar_uma_aplicacao_existente', },
    ]}>
  <TabItem value="Criar_uma_aplicacao">
<div className="tab_criar_aplicacao">

To **create an application and use the Account Opening API**, follow these steps:
<ol>
<li>Access your Efí account and click on "API" in the left menu;</li>
<li>Click on "Criar aplicação";</li>
<li>Enable the Pix API and choose the scopes you want to grant access to in both Production and Sandbox environments (you can edit them at any time);</li>
<li>Once the scopes are selected, click on "Continuar".</li>
</ol>

<div className="figure"><img src="/img/criacao_aplicacao_pix.png" alt="banner" /><p>Illustration of the steps to create a new application integrated with the Pix API</p></div>
</div>
  </TabItem>
<TabItem value="Aproveitar_uma_aplicacao_existente">
<div className="tab_criar_aplicacao">

To **use an application already registered** and integrate it with the Account Opening API, follow these steps:
<ol>
<li>Access your Efí account and click on "API" in the left menu;</li>
<li>Click on "Aplicações" and choose the application you want to edit. Then, click on the three dots and select "Configurações".</li>
<li>Enable the Pix API and choose the scopes you want to grant access to in both Production and Sandbox environments (you can edit them at any time);</li>
<li>Once the scopes are selected, click on "Continuar".</li>
</ol>
<div className="figure"><img src="/img/edicao_aplicacao_pix.png" alt="banner" /><p>Steps until editing an application</p></div>
<br/>
<div className="figure"><img src="/img/criacao_aplicacao_pix.png" alt="banner"/><p>Edits necessary for an application's access to the Pix API</p></div>
</div>



 </TabItem>
  </Tabs>




## Generating and converting a P12 certificate

To generate and convert a certificate, if necessary, you can access the <a href="/en/docs/api-pix/credenciais#generating-a-p12-certificate" target="_blank">link</a>.

## Base Routes

To communicate with Efí's production or Sandbox environments, use the following base routes or URLs.


<div className="table">
<table>
  <tbody>
    <tr>
      <th>Environment</th>
      <th>Base Route</th>
    </tr>
    <tr>
      <td>Production</td>
      <td><code>https://abrircontas.api.efipay.com.br</code></td>
    </tr>
     <tr>
      <td>Sandbox</td>
      <td><code>https://abrircontas-h.api.efipay.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

The following routes are still available for communication with your application but will be discontinued soon. We recommend that you use the routes mentioned above.

<div className="table">
<table>
  <tbody>
    <tr>
      <th>Environment</th>
      <th>Base Route</th>
    </tr>
    <tr>
      <td>Sandbox</td>
      <td><code>https://apis.gerencianet.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

<br/>

## OAuth2 Authentication

The Efí Open Finance API uses the <a href="http://oauth.net/2/" target="_blank">OAuth 2.0 protocol</a> to authorize requests made. The goal is to obtain an access token (<code>access_token</code>), which allows the authorized application to consume the API endpoints.

Request authentication is done using HTTP <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">Basic Auth</a> with the application's <code>Client_Id</code> and <code>Client_Secret</code> credentials created in the Efí account.

In this way, OAuth responds with the authorizations granted to the application, allowing or denying requests based on this information.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>The P12/PEM Certificate generated in the previous steps is <strong>required in all requests</strong> made to the Open Finance API, including the authorization request.</p>
</div>

<br/>

## Postman Collection for Account Opening API

<div className="link-responsivo">
  <div className="requisicao">
 <p>This is the <a href="https://documenter.getpostman.com/view/13574984/UyrDCazL" target="_blank">link</a>  to our Collection that we will keep updated with the endpoints of the Efí Account Opening API.</p>

  <p><a href="https://documenter.getpostman.com/view/13574984/UyrDCazL"  target="_blank" alt="Postman"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Run in Postman
</button></a>

  </p>
  </div>
  </div>

<br/>

## Setting Postman for tests

<div class="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Tip</b>
</div>
<p>The use of the Postman software is optional. Below, we'll explain how to set it up. If you don't want to use Postman for testing, you can skip to the topic: <a href="#obtain-authorization" target="_self"> Get Authorization</a>.</p>
</div>
<br/>

To proceed with the Postman setup, you'll need:
<ol>
<li>A pair of <code>Client_Id</code> and <code>Client_Secret</code> credentials from an application registered in your Efí Account;</li>
<li>A P12/PEM certificate generated as illustrated in the previous steps;</li>
<li>The Postman software installed on your computer (<a href="https://www.postman.com/downloads/" target="_blank">If you don't have it, click here to download</a>);</li>

</ol>
<br/>

### 1. Creating an Environment

Creating an Environment in Postman is necessary for some built-in automations in the collection to work. These automations are designed to make testing easier for developers.

This will allow you to request authorization only once, storing the <code>access_token</code> as an environment variable in Postman, available for use in subsequent requests.

To create an Environment, follow these steps:

<ol>
<li>Press <code>Ctrl+N</code> to trigger the shortcut and select "Environment";</li>
<li>Assign a name, preferably specifying whether this Environment will point to the Production or Sandbox environment;</li>
<li>Create the variable <code>efi-cadastro-api</code> with the initial value and insert the URL of the Efí Account Opening API for Production;</li>
<li>Save your Environment;</li>
<li>Select the desired Environment for Postman to understand the created variable.</li>
</ol>

The following images show the illustrated steps above. In this example, an Environment was created for the Production environment of the Efí Account Opening API.

<div class="figure"><img src="/img/environment_cadastro.png" alt="banner"/><p>Creating a new environment</p></div>
<br/>
<div class="figure"><img src="/img/configuracao_environment_cadastro.png" alt="banner" /><p>Environment settings</p></div>
<br/>

### 2. Setting the certificate in Postman

All requests made to the Efí Account Opening API require the certificate generated in your Efí account. Therefore, to facilitate your tests using Postman, follow the steps below to configure the use of the certificate during requests automatically:

<ol>
<li>Click on the gear icon in the top right corner of Postman;</li>
<li>Then click on "Settings" to open the settings;</li>
<li>In the top tab, click on "Certificates";</li>
<li>Then click on "Add Certificate";</li>
<li>In the configuration window of the new certificate, fill in the "Host" field with the Base Route of the environment to which the certificate belongs (Production or Sandbox);</li>
<li>Use the "PFX File" field to inform Postman where your P12/PEM certificate file is located;</li>
<li>Finish by clicking "Add" to save your settings.</li>
</ol>

By following these steps, Postman will automatically use the certificate in all requests made to the configured environment.

<div className="figure"><img src="/img/acessando_configuracoes_cadastro.png" alt="banner"/><p>Accessing Postman settings</p></div>
<br/>
<div className="figure"><img src="/img/adicionando_certificado_cadastro.png" alt="banner" /><p>Adding a new certificate in Postman</p></div>
<br/>
<div className="figure"><img src="/img/configuracao_certificado_cadastro.png" alt="banner" /><p>Certificate settings</p></div>
<br/>

### 3. Assigning the Client_Id and Client_Secret in Postman

To complete the configuration of your Postman, you need to configure the credentials of an application from your Efí account. These credentials are used for Basic Auth and to obtain the <code>access_token</code> through OAuth.

Follow the steps below to include the credentials and perform your first test on the Efí Open Finance API.

<ol>
<li>In the imported collection, navigate to the route <code>/v1/oauth/token</code> and double-click to open;</li>
<li>Access the "Authorization" menu and verify that the "Type" is selected as "Basic Auth";</li>
<li>Fill in the "username" and "password" fields with the credentials of your application, i.e., the Client_Id and the Client_Secret, respectively;</li>
<li>To test, click the "Send" button to send the request.</li>
</ol>

The image below illustrates the above steps. If everything was followed correctly, you should receive a JSON response, containing the <code>access_token</code>, <code>token_type</code>, <code>expires_in</code>, and <code>scope</code> (as in the image below).

<div className="figure"><img src="/img/auth-pag.png" alt="banner"/><p>Using application credentials for request authorization</p></div>
<br/>

## Obtain Authorization

<div className="auth">
  <b><HighlightPost>POST</HighlightPost> /v1/oauth/token</b>
</div>
  <br/>
This endpoint is used to authorize the credentials of an application and obtain access scopes to the Efí Open Finance API. To ensure security in the communication between client and server, it is essential that the P12/PEM certificate is present in the authorization request.
  
 <br/> <br/>

### Examples of Authorization Using the .P12 Certificate

To use the Efí Open Finance API, the client and the server must communicate over a verified connection. This is done through the bidirectional certificate (.PEM or .P12), where both server and client have a private key certificate and a public key certificate to ensure their identities.

Therefore, when making any HTTP request to the Open Finance API, including the OAuth2 authorization request, it is essential that the .P12 or .PEM certificate is present in the request headers.

Below are examples of how to obtain authorization in the Efí Open Finance API, incorporating this certificate into the request.


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
      CURLOPT_URL => "https://pix-h.api.efipay.com.br/oauth/token", // Base route, Sandbox  or production
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
      
      URL url = new URL ("https://pix.api.efipay.com.br/oauth/token"); //For the Sandbox environment                
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

    url := "https://pix.api.efipay.com.br/oauth/token"// Base route, Sandbox or production
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

The code snippet below represents an example of the OAuth response to your authorization request.

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
    "scope":  "gn.registration.write gn.registration.read gn.registration.webhook.write gn.registration.webhook.read"
}
 ```
  </TabItem>

</Tabs>
<br/>

## Tutorial Efí Account Opening API

In this video we will demonstrate the opening and authentication process in practice, as well as presenting the webhooks, endpoints and other important details of the account opening API.

<div className = "video" >
<iframe src="https://www.youtube.com/embed/uW78tu1xnSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>