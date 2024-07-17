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
On this page, you will find information about credentials, certificates, and authorization for the Bill Payment Efí API.
</div>

<br/>
<br/>
The Bill Payment Efí API provides our services for paying bills. With it, you can:


  <ul>
    <li>detailing barcode;</li>
    <li>request payment of barcode;</li>
    <li>Get requested payment.</li>
  </ul> 


o integrate the Bill Payment Efí API into your system or platform, you need to have an Efí Business Digital Account. After opening your account, you will be able to obtain the credentials and certificates necessary for communication with the Bill Payment Efí API.

See below how to obtain credentials, certificates, and details about the authorization and security of your integration with Efí.

<div className="admonition admonition_danger">
<div>
<img src="/img/exclamation-triangle-red.svg"/> <b>
Security in credential management</b>
</div>
<p>Within systems integrated with our API, it is important that login operations and changing integration keys be done securely. We suggest implementing two-factor authentication and other security practices.
</p>
</div>
<br/>

## Getting application credentials

An integrator can create as many applications as he wants. For each application, 2 pairs of keys <code>Client_Id</code> and <code>Client_Secret</code> are generated, one pair for use in Production environment (<a href="/img/producao.jpg" target="_blank">?</a>) and another for Sandbox environment (<a href="/img/homologacao.jpg" target="_blank">?</a>).

To use the Bill Payment Efí API, it is also necessary to have the required scopes activated.


### Understanding application's scopes

When creating or editing an application in your Efí Account, you will need to configure the scopes that the application will have access to. The choice of these scopes defines which actions an application will be authorized to perform via API.

The scopes available in the Bill Payment Efí API are listed below with their respective permission descriptions:

<ul>
<li><b><code>gn.barcode.read</code></b> - Get barcode;</li>
<li><b><code>gn.barcode.pay.write</code></b> - request payment of barcode;</li>
<li><b><code>gn.barcode.pay.read</code></b> - Get of requested payment;</li>
</ul>

<br/>

### Create a new application or configure an existing one

Below you can see how to create an application or use an existing application to integrate with the Efí Bill Payment API.

<Tabs className="tab"
    defaultValue="Criar_uma_aplicacao"
    values={[
      { label: 'Create an application', value: 'Criar_uma_aplicacao', },
      { label: 'Use an existing application', value: 'Aproveitar_uma_aplicacao_existente', },
    ]}>
  <TabItem value="Criar_uma_aplicacao">
<div className="tab_criar_aplicacao">

To **create an application for use with the Bill Payment Efí API**, follow the steps below:
<ol>
<li>Access your account and click on the "API" item at the bottom of the left menu of the Efí account;</li>
<li>Click on "Criar aplicação"</li>
<li>Enable the Pix API and choose the scopes you want to release in Production and Sandbox environments (you can edit them in the future);</li>
<li>With the selected scopes, click "Continuar".</li>
</ol>

<div className="figure"><img src="/img/criacao_aplicacao_pagamentos.png" alt="banner" /><p>Illustration of the steps for create a new application integrated with the Bill Payment API</p></div>
</div>
  </TabItem>
<TabItem value="Aproveitar_uma_aplicacao_existente">
<div className="tab_criar_aplicacao">

To **use an application already registered** in your account and use it to integrate with the Payments API, follow the steps below:
<ol>
<li>Access your account and click on the "API" item at the bottom of the left menu of the Efí account;</li>
<li>Click on "Aplicações". Then, choose the application to be edited, click on the three dots and select "Configurações";</li>
<li>Enable the Pix API and choose the scopes you want to release in Production and Homologation environments (you can edit them whenever you want);</li>
<li>With the selected scopes, click "Continuar".</li>
</ol>
<div className="figure"><img src="/img/edicao_aplicacao_pix.png" alt="banner" /><p>Steps until editing an application</p></div>
<br/>
<div className="figure"><img src="/img/edicao_aplicacao_pagamentos.png" alt="banner"/><p>Edits required for an application's access to the Pix API</p></div>

</div>
 </TabItem>
  </Tabs>
<br/>

## Generating and converting a P12 certificate

To generate and convert a certificate, if necessary, you can access the <a href="/en/docs/api-pix/credenciais#generating-a-p12-certificate" target="_blank">link</a>.

## Base route

In this documentation, you will notice references to the Base route or Base URL for the Production environment. This route is, in fact, the URL at which the Efí Bill Payment API is located. Thus, when we refer to endpoints, it is implied that these URL segments also make up the final route of the desired resource.

Use the route below to communicate your application with the production environment offered by Efí.

<div className="table">
<table>
  <tbody>
    <tr>
      <th>Environment</th>
      <th>Base route</th>
    </tr>
    <tr>
      <td>Production</td>
      <td><code>https://pagarcontas.api.efipay.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

The following route is still available for communicating your application, but it will soon be discontinued. We suggest that you use the route mentioned above.

<div className="table">
<table>
  <tbody>
    <tr>
      <th>Environment</th>
      <th>Base route</th>
    </tr>
    <tr>
      <td>Production</td>
      <td><code>https://apis.gerencianet.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

<br/>

## OAuth2 Authentication

The authorization mechanism for requests made to the Efí Bill Payment API is compatible with the <a href="http://oauth.net/2/" target="_blank">OAuth2</a> protocol.

### Objective of OAuth2

Obtain an access token (<code>access_token</code>) that should be used to authorize all calls made to the API, verifying if a particular application has permissions to consume the requested endpoint.

### How request authentication is done

It is done with HTTP <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">Basic Auth</a> using the <code>Client_Id</code> and <code>Client_Secret</code> of the application created in your Efí account.

Through this authentication, OAuth can respond with the authorizations that the application has, and consequently authorize or deny requests based on this information.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>The P12/PEM Certificate generated in the previous steps is <strong>required in all requests</strong> made to the Payments API, including the authorization request.</p>
</div>
<br/>

## Postman Collection for Bill Payment API

<div className="responsive-link">
  <div className="request">
  <p>This is the <a href="https://documenter.getpostman.com/view/13574984/UyrDCurw" target="_blank">link</a> to our Collection, which we will keep updated with the endpoints of the Efí Bill Payment API.</p>
  <p>

  <a href="https://documenter.getpostman.com/view/13574984/UyrDCurw"  target="_blank" alt="Postman"><button className="buttonPostman">
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
<p>Using the Postman software is optional. The following paragraphs explain how to set it up. If you do not wish to use Postman for testing, you can skip to the topic: <a href="#obtain-authorization" target="_self"> Obtain Authorization</a>.</p>
</div>
<br/>

To proceed with the Postman setup step, you should have:
<ol>
<li>A pair of credentials <code>Client_Id</code> and <code>Client_Secret</code> from an application registered in your Efí Account;</li>
<li>A P12/PEM certificate generated as illustrated in the previous steps;</li>
<li>The Postman software installed on your computer (<a href="https://www.postman.com/downloads/" target="_blank">If you don't have it, click here to download</a>);</li>

</ol>


### 1. Creating an Environment

Creating an Environment in Postman is necessary for some built-in automations in the collection to work. These automations are designed to make testing easier for developers.

With them, you only need to request authorization once, and then the `access_token` is stored as an environment variable in Postman, available for use in subsequent requests.

To create an Environment, follow the steps below.

<ol>
<li>Press the shortcut <code>Ctrl+N</code> and select "Environment";</li>
<li>Assign a name, preferably specifying whether this Environment will be pointed to the Production or Sandbox environment;</li>
<li>Create the variable <code>efi-pag-api</code> and, as the Initial value, enter the URL of the Efí Bill Payment API for Production;</li>
<li>Save your Environment;</li>
<li>Select the desired Environment. This way, Postman will understand the created variable.</li>
</ol>
<br/>

The images below illustrate the steps above. As an example, an Environment was created pointing to the Production environment of the Efí Bill Payment API.

<div className="figure"><img src="/img/environment_pag.png" alt="banner"/><p>Creating a new environment</p></div>
<br/>
<div className="figure"><img src="/img/configuracao_environment_pag.png" alt="banner" /><p>Environment settings</p></div>
<br/>

### 2. Setting the certificate in Postman

All requests made to the Efí Bill Payment API require the certificate generated in your Efí account. Therefore, to facilitate your testing using Postman, follow the steps below to configure the use of the certificate during requests automatically:

<ol>
<li>Click on the gear icon in the top right corner of Postman;</li>
<li>Then, click on "Settings" to open the settings;</li>
<li>In the top tab, click on "Certificates";</li>
<li>Next, click on "Add Certificate";</li>
<li>In the new certificate configuration window, fill in the "Host" field with the Base route of the environment to which the certificate belongs (Production or Sandbox);</li>
<li>Use the "PFX File" field to inform Postman where your P12/PEM certificate file is located;</li>
<li>Finish by clicking "Add" to save your settings.</li>
</ol>
<br/>

By following these steps, Postman will use the certificate for any requests made to the Host of the configured environment.

<div className="figure"><img src="/img/acessando_configuracoes_pag.png" alt="banner"/><p>Accessing Postman settings</p></div>
<br/>
<div className="figure"><img src="/img/adicionando_certificado_pag.png" alt="banner" /><p>Adding a new certificate in Postman</p></div>
<br/>
<div className="figure"><img src="/img/configuracao_certificado_pag.png" alt="banner" /><p>Certificate settings</p></div>
<br/>


### 3. Assigning the Client_Id and Client_Secret in Postman

To complete the configuration of your Postman, you need to set up the credentials of an application from your Efí account. These credentials are used for Basic Auth and obtaining the `access_token` with OAuth.

Follow the steps below to include the credentials and perform your first test on the Payments API.

<ol>
<li>In the imported collection, navigate to the route <code>/v1/oauth/token</code> and double-click to open;</li>
<li>Access the "Authorization" menu and make sure the "Type" is selected as "Basic Auth";</li>
<li>In the "username" and "password" fields, fill in with the credentials of your application, Client_Id and Client_Secret, respectively;</li>
<li>To test, click the "Send" button to submit the request
</li>
</ol>
<br/>

The image below illustrates the steps above. If everything was followed correctly, you should receive a response in JSON format, containing the `access_token`, `token_type`, `expires_in`, and `scope` (as shown in the image below).

<div className="figure"><img src="/img/auth-pag.png" alt="banner"/><p>Using the credentials of an application for request authorization</p></div>
<br/>

## Obtain authorization

<div className="auth">
  <b><HighlightPost>POST</HighlightPost> /v1/oauth/token</b>
</div>
  <br/>

  This endpoint is used to: 
  <ul>
  <li>authorize the credentials of an application</li>
  <li>obtain the scopes that the application has to access the other endpoints of the API. </li>
  </ul>

  <div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>The P12/PEM certificate must be present in the authorization request so that the handshake with the API server is allowed.</p>
</div>
<br/>


### Examples of authorization using the .P12 certificate

For using the Efí Bill Payment API, it is necessary for the client and the server to communicate over a mutually verified connection. Verification is done through a bidirectional certificate (.PEM or .P12), meaning the server and client have implemented a private key certificate and a public key certificate that allows each to ensure the other's identity.

Therefore, to make any HTTP request to the Bill Payment API, including the authorization request with OAuth2, the .P12 or .PEM certificate must be present in the request headers.

Below, we provide examples of how to consume authorization from the Efí Bill Payment API, incorporating this certificate into the request.

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
      CURLOPT_URL => "https://pagarcontas.api.efipay.com.br/v1/oauth/token", // Base route, Sandbox  or production
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
    url: "https://pagarcontas.api.efipay.com.br/v1/oauth/token",
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

url = "https://pagarcontas.api.efipay.com.br/v1/oauth/token"  #For the Production environment  

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
        var client = new RestSharp.RestClient("https://pagarcontas.api.efipay.com.br/v1/oauth/token");
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

certfile = File.read("certificado.pem") # The certfile variable is the directory where your certificate in .pem format should be inserted
url = URI("https://pagarcontas.api.efipay.com.br/v1/oauth/token") #For the Production environment

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
      
      URL url = new URL ("https://pagarcontas.api.efipay.com.br/v1/oauth/token"); //For the Production environment              
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

    url := "https://pagarcontas.api.efipay.com.br/v1/oauth/token"// Base route, Sandbox or production
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
    "scope": "gn.barcode.read gn.barcode.pay.write gn.barcode.pay.read"
}
 ```
  </TabItem>

</Tabs>
<br/>



</div>