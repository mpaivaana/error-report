---
id: credenciais
title: Credenciais e Autorização
hide_title: true
sidebar_label: Credenciais e Autorização
---
<h1 className="titulo">Credenciais e Autorização</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Nesta página, você encontra informações sobre credenciais e autorização da API Cobranças Efí.
</div>

<br/>
<br/>

A API Cobranças Efí oferece recursos avançados que permitem emitir diferentes tipos de cobranças, tais como Boleto, Cartão de crédito, Carnê, Links de pagamento, Assinaturas (Recorrência) e Marketplace (Split de pagamento).

Para integrar a API Cobranças Efí ao seu sistema ou sua plataforma, é necessário ter uma Conta Digital Efí. Após obter o acesso à conta, você poderá adquirir as credenciais necessárias para estabelecer a comunicação com a API Cobranças Efí.

A seguir, veja como obter as credenciais e detalhes sobre a autorização e segurança da sua integração com a Efí.

<div className="admonition admonition_danger">
<div>
<img src="/img/exclamation-triangle-red.svg"/> <b>
Segurança no gerenciamento de credenciais</b>
</div>
<p>Dentro dos sitemas integrados à nossa API, é importante que as operações de login e a alteração das chaves de integração sejam realizadas com segurança. Sugerimos a implementação de autenticação de dois fatores e outras práticas de segurança.

</p>

</div>
<br/>

## Obtendo as credenciais da aplicação

Para obter as credenciais da aplicação, a pessoa integradora pode criar quantas aplicações desejar. Cada aplicação é associada a 2 pares de chaves: <code>Client_Id</code> e <code>Client_Secret</code>, sendo um par destinado ao ambiente de Produção (<a href="/img/producao.jpg" target="_blank">?</a>) e outro para o ambiente de Homologação (<a href="/img/homologacao.jpg" target="_blank">?</a>).
 É fundamental ativar o escopo em sua aplicação para poder utilizar a API Cobranças da Efí.


### Criar uma aplicação ou configurar uma já existente

Veja como criar uma aplicação ou aproveitar uma aplicação já existente para integrar com a API Cobranças Efí.

<Tabs className="tab"
    defaultValue="Criar_uma_aplicacao"
    values={[
      { label: 'Criar uma aplicação', value: 'Criar_uma_aplicacao', },
      { label: 'Aproveitar uma aplicação existente', value: 'Aproveitar_uma_aplicacao_existente', },
    ]}>
  <TabItem value="Criar_uma_aplicacao">
<div className="tab_criar_aplicacao">

 Para **criar uma  aplicação e utilizar a API Cobranças** siga os passos abaixo:
<ol>
<li>Acesse sua conta Efí e clique "API", no menu à esquerda;</li>
<li>Clique em "Criar aplicação"</li>
<li>Habilite a API de Emissões e escolha o escopo para liberar os ambientes de Produção/Homologação;</li>
<li>Com o escopo selecionados, clique em "Continuar".</li>
</ol>

<div className="figure"><img src="/img/criacao_aplicacao_cobrancas.png" alt="banner" /><p>Ilustração dos passos para a criação de uma nova aplicação integrada à API Cobranças</p></div>
</div>
  </TabItem>
<TabItem value="Aproveitar_uma_aplicacao_existente">
<div className="tab_criar_aplicacao">

Para **aproveitar uma aplicação já cadastrada** em sua conta e usá-la para a integração com a API Cobranças, siga os passos abaixo:
<ol>
<li>Acesse sua conta e clique no item "API", no menu à esquerda;</li>
<li>Clique em "Aplicações" e escolha a aplicação que deseja editar. Em seguida, clique nos três pontinhos e selecione "configurações".</li>
<li>Habilite a API de Emissões e escolha o escopo para liberar os ambientes de Produção/Homologação;</li>
<li>Com o escopo selecionados, clique em "Continuar".</li>
</ol>
<div className="figure"><img src="/img/edicao_aplicacao_pix.png" alt="banner" /><p>Passos até a edição de uma aplicação</p></div>
<br/>
<div className="figure"><img src="/img/criacao_aplicacao_cobrancas.png" alt="banner"/><p>Edições necessárias para o acesso de uma aplicação à API de Cobranças</p></div>

</div>
 </TabItem>
  </Tabs>




## Rota base

Nesta documentação, você encontrará referências às Rotas base ou URL's base para ambientes de Produção ou Homologação. Essas rotas representam o endereço da API Cobranças Efí. Quando mencionarmos os endpoints, essas partes de URL também fazem parte do caminho para acessar o recurso desejado.

Para comunicar sua aplicação com os ambientes de produção e homologação da Efí, utilize as seguintes rotas:
<div className="table">
<table>
  <tbody>
    <tr>
      <th>Ambiente</th>
      <th>Rota base</th>
    </tr>
    <tr>
      <td>Produção</td>
      <td><code>https://cobrancas.api.efipay.com.br</code></td>
    </tr>
    <tr>
      <td>Homologação</td>
      <td><code>https://cobrancas-h.api.efipay.com.br</code></td>
    </tr>
  </tbody>

</table>
</div>

As seguintes rotas ainda estão disponíveis para realizar a comunicação da sua aplicação, mas serão descontinuadas em breve. Recomendamos que você utilize as rotas mencionadas anteriormente.

<div className="table">
<table>
  <tbody>
    <tr>
      <th>Ambiente</th>
      <th>Rota base</th>
    </tr>
    <tr>
      <td>Produção</td>
      <td><code>https://api.gerencianet.com.br</code></td>
    </tr>
    <tr>
      <td>Homologação</td>
      <td><code>https://sandbox.gerencianet.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

<br/>

## Autenticação com OAuth2

O processo de autenticação na API Cobranças segue o protocolo <a href="http://oauth.net/2/" target="_blank">OAuth2</a>. As requisições são autenticadas usando <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">HTTP Basic Auth</a>.

## Collection Postman API Cobranças

<div className="link-responsivo">
  <div className="requisicao">
  <p>Este é o <a href="https://documenter.getpostman.com/view/13574984/Uz5ArJQc" target="_blank">link</a> da nossa Collection que manteremos atualizada com os endpoints da API Cobranças Efí.</p>
  <p>

  

  <a href="https://documenter.getpostman.com/view/13574984/Uz5ArJQc"  target="_blank" alt="Postman"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Executar no Postman
</button></a>

  </p>
  </div>
  </div>

<br/>

## Configurando o Postman para testes


<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Dica</b>
</div>
<p>O uso do software Postman é opcional. A seguir, explicaremos como configurá-lo. Caso não deseje usar o Postman para testes, você pode avançar para o tópico:
<a href="#obter-autorização" target="_self"> Obter Autorização</a>.</p>
</div>
<br/>

Antes de prosseguir com a configuração do Postman, certifique-se de ter:
<ol>
<li>Um par de credenciais <code>Client_Id</code> e <code>Client_Secret</code> de uma aplicação cadastrada em sua Conta Efí;</li>
<li>O software Postman instalado em seu computador (Caso não tenha, <a href="https://www.postman.com/downloads/" target="_blank"> baixe aqui</a>);</li>

</ol>
<br/>

### 1. Criando um Environment

A criação de um Environment no Postman é necessária para que algumas automações embutidas na collection funcionem. Essas automações foram projetadas para dar mais facilidade aos desenvolvedores durante os testes.

Isso permitirá que você solicite a autorização apenas uma vez, gravando o <code>access_token</code> como uma variável de ambiente (environment) do Postman, disponível para uso em outras requisições subsequentes.

Para criar um Environment siga os passos a seguir:

<ol>
<li>Presione <code>Ctrl+N</code> e selecione "Environment";</li>
<li>Atribua um nome preferencialmente especificando se esse Environment será apontado para o ambiente de Produção ou Homologação;</li>
<li>Crie a variável <code>efi-cob-api</code> e como valor inicial (<em>Initial value</em>) insira a URL da API Cobranças de Produção ou Homologação;</li>
<li>Salve o seu Environment;</li>
<li>Selecione o Environment desejado para que o Postman entenda a variável criada.</li>
</ol>


As imagens a seguir mostram os passos ilustrados acima. Neste exemplo, foi criado um Environment para o ambiente de Produção da API Cobranças da Efí.


<div className="figure"><img src="/img/environment_cob.png" alt="banner"/><p>Criando um novo environment</p></div>
<br/>
<div className="figure"><img src="/img/configuracao_environment_cob.png" alt="banner" /><p>Configurações do environment</p></div>
<br/>

### 2. Atribuindo o Client_Id e Client_Secret no Postman

Para finalizar a configuração do seu Postman é necessário configurar as credenciais de uma aplicação da sua conta Efí. Essas credenciais são usadas para o Basic Auth  e para obter o <code>access_token</code> junto ao OAuth.

Siga os passos a seguir para incluir as credenciais e realizar o seu primeiro teste na API Cobranças.

<ol>
<li>Na collection importada, vá até a rota <code>/v1/authorize</code> e clique duas vezes para abrir;</li>
<li>Acesse o menu "Authorization" e verifique se o "Type" (tipo de autorização) está selecionado como "Basic Auth";</li>
<li>Preencha os campos "username" e "password" com as credenciais da sua aplicação, ou seja, o Client_Id e o Client_Secret, respectivamente;</li>
<li>Para testar, clique no botão "Send" para enviar a requisição.</li>
</ol>


A imagem abaixo ilustra os passos acima. Se tudo foi seguido corretamente, você deve obter uma resposta em formato JSON, contendo o <code>access_token</code>, <code>token_type</code>, <code>expires_in</code> e <code>scope</code> (como na imagem abaixo).

<div className="figure"><img src="/img/auth-cob.png" alt="banner"/><p>Uso das credenciais de uma aplicação para autorização de requisições</p></div>
<br/>

## Obter Autorização

<div className="auth">
  <b><HighlightPost>POST</HighlightPost> /v1/authorize</b>
</div>
  <br/>
  O endpoint POST /v1/authorize é usado para autorizar as credenciais de uma aplicação e obter os acessos necessários para utilizar os outros recursos da API.
<br/>
<br/>


### Exemplos de autorização

A seguir, apresentamos exemplos de como realizar a autorização na API Cobranças: 

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
//Desenvolvido pela Consultoria Técnica da Efí
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
 //Desenvolvido pela Consultoria Técnica da Efí

"use strict";
const https = require("https");
var axios = require("axios");
var fs = require("fs");

//Insira os valores de suas credenciais em desenvolvimento do pix
var credenciais = {
    client_id: "YOUR-CLIENT-ID",
    client_secret: "YOUR-CLIENT-SECRET",
};

var data = JSON.stringify({ grant_type: "client_credentials" });
var data_credentials = credenciais.client_id + ":" + credenciais.client_secret;

// Codificando as credenciais em base64
var auth = Buffer.from(data_credentials).toString("base64");

//Consumo em desenvolvimento da rota post oauth/token
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
  #Desenvolvido pela Consultoria Técnica da Efí

import requests
import base64

credentials = {
    "client_id": "YOUR-CLIENT-ID",
    "client_secret": "YOUR-CLIENT-SECRET",
}

auth = base64.b64encode(
    (f"{credentials['client_id']}:{credentials['client_secret']}"
     ).encode()).decode()

url = "https://cobrancas-h.api.efipay.com.br/v1/authorize"  #Para ambiente de Desenvolvimento

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
//Desenvolvido pela Consultoria Técnica da Efí

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
#Desenvolvido pela Consultoria Técnica da Efí

require "uri"
require "net/http"
require "openssl"

client_id = "YOUR-CLIENT-ID";
client_secret = "YOUR-CLIENT-SECRET";

url = URI("https://cobrancas-h.api.efipay.com.br/v1/authorize") #Para ambiente de Desenvolvimento

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
//Desenvolvido pela Consultoria Técnica da Efí

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
        
      URL url = new URL ("https://cobrancas-h.api.efipay.com.br/v1/authorize"); //Para ambiente de Desenvolvimento              
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
//Desenvolvido pela Consultoria Técnica da Efí
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

    url := "https://cobrancas-h.api.efipay.com.br/v1/authorize"// Rota base, homologação ou produção
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

### Exemplo de resposta da autorização

A seguir, o trecho de código representa um exemplo de resposta do OAuth à sua requisição de autorização:

<Tabs className="tab"
    defaultValue="Resposta"
    values={[
    { label: 'Resposta', value: 'Resposta', },
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

A tabela abaixo descreve os atributos presentes no JSON retornado.

<table className="table">
<tbody>
    <tr>
      <th>Atributo</th>
      <th align="center">Descrição</th>
      <th align="center">Tipo</th>
    </tr>
    <tr>
      <td><b>access_token</b></td>
      <td align="left">Token de autorização a ser usado nas outras requisições feitas à API.	
      </td>
      <td>string</td>
    </tr>
    <tr>
      <td><b>refresh_token</b></td>
      <td align="left">Token de autorização que será utilizado para atualizar um access token expirado.
      </td>
      <td>string</td>
    </tr>
     <tr>
      <td><b>expires_in</b></td>
      <td align="left">Tempo de expiração do <code>access_token</code> em segundos.<br/><strong>Padrão</strong> 600
      </td>
      <td>Integer (int32)</td>
    </tr>
     <tr>
      <td><b>expire_at</b></td>
      <td align="left">Tempo de expiração do <code>access_token</code> em Timestamp ISO 8601
      </td>
      <td>string</td>
    </tr>
     <tr>
      <td><b>token_type</b></td>
      <td align="left">Tipo de autorização na qual o <code>access_token</code> deve ser usado<br/><strong>Padrão</strong>: "Bearer"
      </td>
      <td>string</td>
    </tr>
    </tbody>
</table>
<br/>


</div>
