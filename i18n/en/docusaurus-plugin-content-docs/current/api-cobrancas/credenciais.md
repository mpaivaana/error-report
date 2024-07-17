---
id: credenciais
title: Credentials and Authorization
hide_title: true
sidebar_label: Credentials and Authorization
---
<h1 className="titulo">Credentials and Authorization</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
On this page, you will find information about credentials and authorization for the Efí Billing API.
</div>

<br/>
<br/>

The Efí Billing API offers advanced features that allow you to issue different types of charges, such as Boleto, Credit Card, Payment Booklet, Payment Links, Subscriptions (Recurring), and Marketplace (Payment Split).

To integrate the Efí Billing API into your system or platform, you need to have an Efí Digital Account. After accessing the account, you can obtain the necessary credentials to establish communication with the Efí Billing API.

Below, you will find how to obtain the credentials and details about the authorization and security of your integration with Efí.

<div className="admonition admonition_danger">
<div>
<img src="/img/exclamation-triangle-red.svg"/> <b> 
Credential Management Security</b>
</div>
<p>Within the systems integrated with our API, it is important that login operations and changes to integration keys are carried out securely. We recommend implementing two-factor authentication and other security practices.

</p>

</div>
<br/>

## Getting application credentials

To obtain application credentials, the integrator can create as many applications as desired. Each application is associated with 2 pairs of keys: <code>Client_Id</code> and <code>Client_Secret</code>, with one pair intended for the Production environment (<a href="/img/producao.jpg" target="_blank">?</a>) and the other for the Sandbox environment (<a href="/img/homologacao.jpg" target="_blank">?</a>).
It is essential to activate the scope in your application to use the Efí Billing API.


### Create an application or configure an existing one

See how to create an application or leverage an existing one to integrate with the Efí Billings API.

<Tabs className="tab"
    defaultValue="Criar_uma_aplicacao"
    values={[
      { label: 'Create an application', value: 'Criar_uma_aplicacao', },
      { label: 'Use an existing application', value: 'Aproveitar_uma_aplicacao_existente', },
    ]}>
  <TabItem value="Criar_uma_aplicacao">
<div className="tab_criar_aplicacao">

To **create an application and use the Billings API**, follow the steps below:
<ol>
<li>Access your Efí account and click on "API" in the left menu;</li>
<li>Click on "Criar aplicação";</li>
<li>Enable the Billings API and choose the scope to release the Production/Sandbox environments;</li>
<li>With the selected scope, click on "Continuar".</li>
</ol>

<div className="figure"><img src="/img/criacao_aplicacao_cobrancas.png" alt="banner" /><p>Illustration of steps to create a new application integrated with the Billings API</p></div>
</div>
  </TabItem>
<TabItem value="Aproveitar_uma_aplicacao_existente">
<div className="tab_criar_aplicacao">

To **use an application already registered** in your account and use it for integration with the Billings API, follow the steps below:
<ol>
<li>Access your account and click on the "API" item in the left menu;</li>
<li>Click on "Aplicações" and choose the application you want to edit. Then, click on the three dots and select "Configurações".</li>
<li>Enable the Billings API and choose the scope to release the Production/Sandbox environments;</li>
<li>With the selected scope, click on "Continuar".</li>
</ol>
<div className="figure"><img src="/img/edicao_aplicacao_pix.png" alt="banner" /><p>Steps to edit an application</p></div>
<br/>
<div className="figure"><img src="/img/criacao_aplicacao_cobrancas.png" alt="banner"/><p>Edits required for an application's access to the Billings API</p></div>

</div>
 </TabItem>
  </Tabs>


## Base Routes

In this documentation, you will find references to the Base Routes or Base URLs for Production or Sandbox environments. These routes represent the address of the Efí Billings API. When we mention endpoints, these URL parts are also part of the path to access the desired resource.

To communicate your application with the Efí production and Sandbox environments, use the following routes:
<div className="table">
<table>
  <tbody>
    <tr>
      <th>Environment</th>
      <th>Base Route</th>
    </tr>
    <tr>
      <td>Production</td>
      <td><code>https://cobrancas.api.efipay.com.br</code></td>
    </tr>
    <tr>
      <td>Sandbox</td>
      <td><code>https://cobrancas-h.api.efipay.com.br</code></td>
    </tr>
  </tbody>

</table>
</div>

The following routes are still available for your application's communication, but they will be discontinued soon. We recommend using the previously mentioned routes.

<div className="table">
<table>
  <tbody>
    <tr>
      <th>Environment</th>
      <th>Base Route</th>
    </tr>
    <tr>
      <td>Production</td>
      <td><code>https://api.gerencianet.com.br</code></td>
    </tr>
    <tr>
      <td>Sandbox</td>
      <td><code>https://sandbox.gerencianet.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

<br/>

## Authentication with OAuth2

The authentication process for the Billings API follows the <a href="http://oauth.net/2/" target="_blank">OAuth2</a> protocol. Requests are authenticated using <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">HTTP Basic Auth</a>.

## Postman Collection for Billings API

<div className="link-responsivo">
  <div className="requisicao">
  <p>This is the <a href="https://documenter.getpostman.com/view/13574984/Uz5ArJQc" target="_blank">link</a> to our Collection, which we will keep updated with the endpoints of the Efí Billings API.</p>
  <p>

  <a href="https://documenter.getpostman.com/view/13574984/Uz5ArJQc"  target="_blank" alt="Postman"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Run in Postman
</button></a>

  </p>
  </div>
  </div>

<br/>


## Configuring Postman for Tests

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Tip</b>
</div>
<p>The use of Postman software is optional. Below, we will explain how to configure it. If you do not wish to use Postman for tests, you can skip to the topic:
<a href="#obtaining-authorization" target="_self"> Obtaining Authorization</a>.</p>
</div>
<br/>

Before proceeding with the Postman configuration, make sure you have:
<ol>
<li>A pair of <code>Client_Id</code> and <code>Client_Secret</code> credentials from an application registered in your Efí Account;</li>
<li>The Postman software installed on your computer (If you do not have it, <a href="https://www.postman.com/downloads/" target="_blank"> download it here</a>);</li>

</ol>
<br/>


### 1. Creating an Environment

Creating an Environment in Postman is necessary for some embedded automations in the collection to work. These automations are designed to make testing easier for developers.

This will allow you to request authorization only once, saving the <code>access_token</code> as a Postman environment variable, available for use in other subsequent requests.

To create an Environment, follow these steps:

<ol>
<li>Press <code>Ctrl+N</code> and select "Environment";</li>
<li>Assign a name, preferably specifying whether this Environment will point to the Production or Testing environment;</li>
<li>Create the variable <code>efi-cob-api</code> and as the initial value (<em>Initial value</em>), enter the URL of the Production or Testing Invoices API;</li>
<li>Save your Environment;</li>
<li>Select the desired Environment so Postman recognizes the created variable.</li>
</ol>

The images below show the steps illustrated above. In this example, an Environment was created for the Production environment of the Efí Invoices API.

<div className="figure"><img src="/img/environment_cob.png" alt="banner"/><p>Creating a new environment</p></div>
<br/>
<div className="figure"><img src="/img/configuracao_environment_cob.png" alt="banner" /><p>Environment settings</p></div>
<br/>


### 2. Assigning the Client_Id and Client_Secret in Postman

To complete the configuration of your Postman, you need to set up the credentials of an application from your Efí account. These credentials are used for Basic Auth and to obtain the <code>access_token</code> through OAuth.

Follow the steps below to include the credentials and perform your first test on the Invoices API.

<ol>
<li>In the imported collection, go to the <code>/v1/authorize</code> route and double-click to open it;</li>
<li>Access the "Authorization" menu and make sure the "Type" is selected as "Basic Auth";</li>
<li>Fill in the "username" and "password" fields with the credentials of your application, i.e., the Client_Id and the Client_Secret, respectively;</li>
<li>To test, click the "Send" button to submit the request.</li>
</ol>

The image below illustrates the steps above. If everything was followed correctly, you should receive a JSON response containing the <code>access_token</code>, <code>token_type</code>, <code>expires_in</code>, and <code>scope</code> (as shown in the image below).

<div className="figure"><img src="/img/auth-cob.png" alt="banner"/><p>Using application credentials for request authorization</p></div>
<br/>

## Obtaining Authorization

<div className="auth">
  <b><HighlightPost>POST</HighlightPost> /v1/authorize</b>
</div>
  <br/>
  The endpoint POST /oauth/token is used to authorize the credentials of an application and obtain the necessary accesses to use other resources of the API.
<br/>
<br/>


### Examples of Authorization

Below are examples of how to perform authorization in the Billings API:

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
    "client_id" => "YOUR-CLIENT-ID",
    "client_secret" => "YOUR-CLIENT-SECRET"
  ];
  $autorizacao =  base64_encode($config["client_id"] . ":" . $config["client_secret"]);

  $curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://cobrancas-h.api.efipay.com.br/v1/authorize',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{ "grant_type": "client_credentials"}',
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

// Insert the values of your Pix development credentials
var credenciais = {
    client_id: "YOUR-CLIENT-ID",
    client_secret: "YOUR-CLIENT-SECRET",
};

var data = JSON.stringify({ grant_type: "client_credentials" });
var data_credentials = credenciais.client_id + ":" + credenciais.client_secret;

// Encoding the credentials in base64
var auth = Buffer.from(data_credentials).toString("base64");

// Consumption in development of the POST oauth/token route
var config = {
    method: "POST",
    url: "https://cobrancas-h.api.efipay.com.br/v1/authorize",
    headers: {
      Authorization: "Basic " + auth,
      "Content-Type": "application/json",
    },
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

auth = base64.b64encode(
    (f"{credentials['client_id']}:{credentials['client_secret']}"
     ).encode()).decode()

url = "https://cobrancas-h.api.efipay.com.br/v1/authorize"  #For the Sandbox environment 

payload="{\r\n    \"grant_type\": \"client_credentials\"\r\n}"
headers = {
    'Authorization': f"Basic {auth}",
    'Content-Type': 'application/json'
}

response = requests.request("POST",
                            url,
                            headers=headers,
                            data=payload)

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

namespace Exemplos
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
        var client = new RestSharp.RestClient("https://cobrancas-h.api.efipay.com.br/v1/authorize");
        var request = new RestRequest(Method.POST);

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

url = URI("https://cobrancas-h.api.efipay.com.br/v1/authorize") #For the Sandbox environment 

https = Net::HTTP.new(url.host, url.port);
https.use_ssl = true

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
        
      URL url = new URL ("https://cobrancas-h.api.efipay.com.br/v1/authorize"); //For the Sandbox environment             
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

    url := "https://cobrancas-h.api.efipay.com.br/v1/authorize"// Base route, Sandbox or production
    method := "POST"

    payload := strings.NewReader(`{"grant_type": "client_credentials"}`)

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
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTYyOTY2NTYsImV4cCI6MTcxNjI5NzI1NiwiZGF0YSI6eyJrZXlfaWQiOjUyOTU2MSwidHlwZSI6ImFjY2Vzc1Rva2VuIn19._d22EAjlsmuCKxTCtYDMd2ZVK04fS7xWNWSjE-JWEpc",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTYyOTY2NTYsImV4cCI6MTcxNjI5Nzg1NiwiZGF0YSI6eyJrZXlfaWQiOjUyOTU2MSwidHlwZSI6InJlZnJlc2hUb2tlbiJ9fQ.4txXqR4g5FMQvCU3jL8LnrQ002xfEAK1EwKaJjlyCOU",
    "expires_in": 600,
    "expire_at": "1690986856033",
    "token_type": "Bearer"
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
      <td align="left">Authorization token to be used in other requests made to the API.	
      </td>
      <td>string</td>
    </tr>
    <tr>
      <td><b>refresh_token</b></td>
      <td align="left">Authorization token that will be used to update an expired access token.
      </td>
      <td>string</td>
    </tr>
     <tr>
      <td><b>expires_in</b></td>
      <td align="left">Type of authorization the <code>access_token</code> in seconds.<br/><strong>Default</strong> 600
      </td>
      <td>Integer (int32)</td>
    </tr>
     <tr>
      <td><b>expire_at</b></td>
      <td align="left">Expiration time of <code>access_token</code> in Timestamp ISO 8601
      </td>
      <td>string</td>
    </tr>
     <tr>
      <td><b>token_type</b></td>
      <td align="left">Type of authorization the <code>access_token</code> should be used with.<br/><strong>Default</strong>: "Bearer"
      </td>
      <td>string</td>
    </tr>
    </tbody>
</table>
<br/>


</div>
