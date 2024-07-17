---
id: credenciais
title: Credenciais, Certificado e Autorização
hide_title: true
sidebar_label: Credenciais, Certificado e Autorização
---
<h1 className="titulo">Credenciais, Certificado e Autorização</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Nesta página você encontra informações sobre credenciais, certificados e autorização API Pagamento de contas Efí.
</div>

<br/>
<br/>
A API Pagamento de contas Efí disponibiliza os nossos serviços para a realização de pagamentos de contas. Com ela, você pode:


  <ul>
    <li>detalhar código de barras;</li>
    <li>solicitar pagamento de código de barras;</li>
    <li>consultar pagamento solicitado.</li>
  </ul> 


Para integrar a API Pagamento de contas Efí ao seu sistema ou sua plataforma, é necessário ter uma Conta Digital Efí Empresas. Após abrir sua conta, você poderá obter as credenciais e certificados necessários para a comunicação com a API Pagamento de contas Efí.

Veja a seguir como obter as credenciais, certificados e detalhes sobre a autorização e segurança da sua integração com a Efí.

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

Um integrador pode criar quantas aplicações desejar. Para cada aplicação são gerados 2 pares de chaves <code>Client_Id</code> e <code>Client_Secret</code>, sendo um par para utilização em ambiente de Produção (<a href="/img/producao.jpg" target="_blank">?</a>) e outro para Homologação (<a href="/img/homologacao.jpg" target="_blank">?</a>).

Para utilizar a API Pagamento de contas Efí também é necessário ter ativado os escopos necessários.


### Entendendo os escopos de aplicação

Ao criar ou editar uma aplicação em sua Conta Efí, você precisará configurar os escopos que a aplicação terá acesso. A escolha desses escopos define quais ações uma aplicação estará autorizada a realizar via API.

Os escopos disponíveis na API Pagamento de contas Efí estão listados abaixo com suas respectivas descrições de permissão:

<ul>
<li><b><code>gn.barcode.read</code></b> - consulta de código de barras;</li>
<li><b><code>gn.barcode.pay.write</code></b> - solicitar pagamento de código de barras;</li>
<li><b><code>gn.barcode.pay.read</code></b> - consulta de pagamento solicitado;</li>
</ul>

<br/>

### Criar uma aplicação ou configurar uma já existente


Abaixo, você confere como criar uma aplicação ou aproveitar uma aplicação já existente para integrar com a API Pagamento de contas Efí.

<Tabs className="tab"
    defaultValue="Criar_uma_aplicacao"
    values={[
      { label: 'Criar uma aplicação', value: 'Criar_uma_aplicacao', },
      { label: 'Aproveitar uma aplicação existente', value: 'Aproveitar_uma_aplicacao_existente', },
    ]}>
  <TabItem value="Criar_uma_aplicacao">
<div className="tab_criar_aplicacao">

 Para **criar uma aplicação para utilização da API Pagamento de contas Efí** siga os passos abaixo:
<ol>
<li>Acesse sua conta e clique no item "API" na parte inferior do menu à esquerda da conta Efí;</li>
<li>Clique em "Criar aplicação"</li>
<li>Habilite a API Pix e escolha os escopos que deseja liberar em ambiente de Produção e Homologação (você pode editá-los no futuro);</li>
<li>Com os escopos selecionados, clique em "Continuar".</li>
</ol>

<div className="figure"><img src="/img/criacao_aplicacao_pagamentos.png" alt="banner" /><p>Ilustração dos passos para a criação de uma nova aplicação integrada à API Pagamento de contas</p></div>
</div>
  </TabItem>
<TabItem value="Aproveitar_uma_aplicacao_existente">
<div className="tab_criar_aplicacao">

Para **aproveitar uma aplicação já cadastrada** em sua conta e usá-la para a integração com a API Pagamentos, siga os passos abaixo:
<ol>
<li>Acesse sua conta e clique no item "API" na parte inferior do menu à esquerda da conta Efí;</li>
<li>Clique em "Aplicações". Em seguida, escolha a aplicação que será editada, clique nos três pontinhos e depois em configurações;</li>
<li>Habilite a API Pix e escolha os escopos que deseja liberar em ambiente de Produção e Homologação (você pode editá-los sempre que quiser);</li>
<li>Com os escopos selecionados, clique em "Continuar".</li>
</ol>
<div className="figure"><img src="/img/edicao_aplicacao_pix.png" alt="banner" /><p>Passos até a edição de uma aplicação</p></div>
<br/>
<div className="figure"><img src="/img/edicao_aplicacao_pagamentos.png" alt="banner"/><p>Edições necessárias para o acesso de uma aplicação à API Pix</p></div>
</div>



 </TabItem>
  </Tabs>
 <br/>

## Gerando e convertendo um certificado P12

Para gerar um certificado e convertê-lo, caso seja necessário, você pode acessar o <a href="/docs/api-pix/credenciais#gerando-um-certificado-p12" target="_blank">link</a>.

## Rota base

Nesta documentação você perceberá referências à Rota base ou URL base para ambiente de Produção. Essa rota é, na verdade, a URL na qual a API Pagamento de contas Efí se encontra. Assim, quando nos referirmos aos endpoints, fica implícito que esses trechos de URL também compõem a rota final do recurso desejado.

Utilize a rota abaixo para realizar a comunicação da sua aplicação com o ambiente de produção oferecido pela Efí.

<div className="table">
<table>
  <tbody>
    <tr>
      <th>Ambiente</th>
      <th>Rota base</th>
    </tr>
    <tr>
      <td>Produção</td>
      <td><code>https://pagarcontas.api.efipay.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

A seguinte rota ainda está disponível para realizar a comunicação da sua aplicação, mas em breve será discontinuada. Sugerimos que você utilize a rota mencionada anteriormente.

<div className="table">
<table>
  <tbody>
    <tr>
      <th>Ambiente</th>
      <th>Rota base</th>
    </tr>
    <tr>
      <td>Produção</td>
      <td><code>https://apis.gerencianet.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

<br/>

## Autenticação com OAuth2

O mecanismo de autorização das requisições feitas a API Pagamento de contas Efí é compatível com o protocolo <a href="http://oauth.net/2/" target="_blank">OAuth2</a>. 

### Objetivo do OAuth2 

Obter um token de acesso (<code>access_token</code>) que deve ser usado para autorizar todas as chamadas feitas à API, verificando se uma determinada aplicação tem permissões para consumir o endpoint requisitado.

### Como é feita a autenticação das requisições 

É feita com HTTP <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">Basic Auth</a> a partir do <code>Client_Id</code> e <code>Client_Secret</code> da aplicação criada em sua conta da Efí.

Através dessa autenticação o OAuth poderá responder quais as autorizações que a aplicação tem e, consequentemente, autorizar ou negar as requisições de acordo com essa informação.


<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>O Certificado P12/PEM gerado nos passos anteriores é <strong>obrigatório em todas as requisições</strong> feitas à API de Pagamentos, inclusive na requisição de autorização.</p>
</div>
<br/>

## Collection Postman API Pagamento de Contas 

<div className="link-responsivo">
  <div className="requisicao">
  <p>Este é o  <a href="https://documenter.getpostman.com/view/13574984/UyrDCurw" target="_blank">link</a> da nossa Collection que manteremos atualizada com os endpoints da API Pagamento de contas Efí.</p>
  <p>

  <a href="https://documenter.getpostman.com/view/13574984/UyrDCurw"  target="_blank" alt="Postman"><button className="buttonPostman">
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
<p>O uso do software Postman é opcional. Os próximos parágrafos explicam como configurá-lo. Caso não deseje usar o Postman para testes, você pode avançar para o tópico: <a href="#obter-autorização" target="_self"> Obter Autorização</a>.</p>
</div>
<br/>

Para seguir com a etapa de configuração do Postman, você deve ter:
<ol>
<li>Um par de credenciais <code>Client_Id</code> e <code>Client_Secret</code> de uma aplicação cadastrada em sua Conta Efí;</li>
<li>Um certificado P12/PEM gerado como ilustrado nas etapas anteriores;</li>
<li>O software Postman instalado em seu computador (<a href="https://www.postman.com/downloads/" target="_blank">Caso não tenha, clique aqui para baixar</a>);</li>

</ol>


### 1. Criando um Environment

A criação de um Environment no Postman é necessária para que algumas automações embutidas na collection funcionem. Essas automações foram projetadas para dar mais facilidade aos desenvolvedores durante os testes.

Com elas você precisa solicitar a autorização apenas uma vez e, então, o <code>access_token</code> fica gravado como uma variável de ambiente (*environment*) do Postman, disponível para utilização nas requisições subsequentes.

Para criar um Environment siga os passos abaixo.

<ol>
<li>Acione o atalho <code>Ctrl+N</code> e selecione "Environment";</li>
<li>Atribua um nome preferencialmente especificando se esse Environment será apontado para o ambiente de Produção ou Homologação;</li>
<li>Crie a variável <code>efi-pag-api</code> e, como valor inicial (<em>Initial value</em>), insira a URL da API Pagamento de contas Efí de Produção;</li>
<li>Salve o seu Environment;</li>
<li>Selecione o Environment desejado. Assim, o Postman entenderá a variável criada.</li>
</ol>
<br/>

As imagens abaixo ilustram os passos acima. Como exemplo, foi criado um Environment apontado para o ambiente de Produção da API Pagamento de contas Efí.

<div className="figure"><img src="/img/environment_pag.png" alt="banner"/><p>Criando um novo environment</p></div>
<br/>
<div className="figure"><img src="/img/configuracao_environment_pag.png" alt="banner" /><p>Configurações do environment</p></div>
<br/>

### 2. Configurando o certificado no Postman

Todas as requisições feitas à API Pagamento de contas Efí precisam do certificado gerado em sua conta Efí. Portanto, para facilitar seus testes utilizando o Postman, siga os passos abaixo para configurar o uso do certificado durante as requisições de maneira automática:

<ol>
<li>Clique no ícone de engrenagem no canto superior direito do Postman;</li>
<li>Depois, clique em "Settings" para abrir as configurações;</li>
<li>Na aba superior, clique em "Certificates";</li>
<li>Em seguida, clique em "Add Certificate";</li>
<li>Na janela de configuração do novo certificado, preencha o campo "Host" com a Rota base do ambiente ao qual o certificado pertence (Produção ou Homologação);</li>
<li>Utilize o campo "PFX File" para informar ao Postman onde o arquivo do seu certificado P12/PEM se encontra;</li>
<li>Finalize clicando em "Add" para salvar suas configurações.</li>

</ol>
<br/>

Seguindo esses passos, o Postman usará o certificado para quaisquer requisições feitas ao Host do ambiente configurado.

<div className="figure"><img src="/img/acessando_configuracoes_pag.png" alt="banner"/><p>Acessando as configurações do Postman</p></div>
<br/>
<div className="figure"><img src="/img/adicionando_certificado_pag.png" alt="banner" /><p>Adicionando um novo certificado no Postman</p></div>
<br/>
<div className="figure"><img src="/img/configuracao_certificado_pag.png" alt="banner" /><p>Configurações do certificado</p></div>
<br/>

### 3. Atribuindo o Client_Id e Client_Secret no Postman

Para finalizar a configuração do seu Postman é necessário configurar as credenciais de uma aplicação da sua conta Efí. Essas credenciais são usadas para o Basic Auth e obtenção do <code>access_token</code> junto ao OAuth.

Siga os passos abaixo para incluir as credenciais e realizar o seu primeiro teste na API de Pagamentos.

<ol>
<li>Na collection importada, navegue até a rota <code>/v1/oauth/token</code> e clique duas vezes para abrir;</li>
<li>Acesse o menu "Authorization" e certifique-se de que o "Type" (tipo de autorização) esteja selecionado como "Basic Auth";</li>
<li>Nos campos "username" e "password" preencha com as credenciais da sua aplicação, Client_Id e Client_Secret, respectivamente;</li>
<li>Para testar, clique no botão "Send" para submeter a requisição
</li>
</ol>
<br/>

A imagem abaixo ilustra os passos acima. Se tudo foi seguido corretamente, você deve obter uma resposta em formato JSON, contendo o <code>access_token</code>, <code>token_type</code>, <code>expires_in</code> e <code>scope</code> (como na imagem abaixo).

<div className="figure"><img src="/img/auth-pag.png" alt="banner"/><p>Uso das credenciais de uma aplicação para autorização de requisições</p></div>
<br/>

## Obter autorização

<div className="auth">
  <b><HighlightPost>POST</HighlightPost> /v1/oauth/token</b>
</div>
  <br/>

  Este endpoint é utilizado para: 
  <ul>
  <li>autorizar as credenciais de uma aplicação</li>
  <li>obter os escopos que a aplicação possui para acessar os outros endpoints da API. </li>
  </ul>

  <div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>É necessário que o certificado P12/PEM esteja presente na requisição de autorização a fim de que o handshake com o servidor da API seja permitido.</p>
</div>
<br/>

  <br/> 

### Exemplos de autorização utilizando o certificado .P12

Para a utilização da API Pagamento de contas Efí é necessário que o cliente e o servidor se comuniquem em uma conexão verificada um com o outro. A verificação é feita pelo certificado bidirecional (.PEM ou .P12), isto é, o servidor e o cliente implementaram um certificado de chave privada e um certificado de chave pública que permite que um possa assegurar-se da identidade do outro.

Por isso para fazer qualquer requisição HTTP à API Pagamento de Contas, incluindo a requisição de autorização junto ao OAuth2, é necessário que o certificado .P12, ou .PEM, esteja presente nos cabeçalhos da requisição.

Abaixo, trazemos exemplos de como consumir a autorização da API Pagamento de Contas Efí, incorporando esse certificado na requisição.

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
    "certificado" => "./certificado.pem",
    "client_id" => "YOUR-CLIENT-ID",
    "client_secret" => "YOUR-CLIENT-SECRET"
  ];
  $autorizacao =  base64_encode($config["client_id"] . ":" . $config["client_secret"]);

  $curl = curl_init();

  curl_setopt_array($curl, array(
      CURLOPT_URL => "https://pagarcontas.api.efipay.com.br/v1/oauth/token", // Rota base, homologação ou produção
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "POST",
      CURLOPT_POSTFIELDS => '{"grant_type": "client_credentials"}',
      CURLOPT_SSLCERT => $config["certificado"], // Caminho do certificado
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
 //Desenvolvido pela Consultoria Técnica da Efí

"use strict";
const https = require("https");
var axios = require("axios");
var fs = require("fs");

//Insira o caminho de seu certificado .p12 dentro de seu projeto
var certificado = fs.readFileSync("./certificado.p12");

//Insira os valores de suas credenciais em desenvolvimento do pix
var credenciais = {
    client_id: "YOUR-CLIENT-ID",
    client_secret: "YOUR-CLIENT-SECRET",
};

var data = JSON.stringify({ grant_type: "client_credentials" });
var data_credentials = credenciais.client_id + ":" + credenciais.client_secret;

// Codificando as credenciais em base64
var auth = Buffer.from(data_credentials).toString("base64");

const agent = new https.Agent({
    pfx: certificado,
    passphrase: "",
});
//Consumo em desenvolvimento da rota post oauth/token
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
  #Desenvolvido pela Consultoria Técnica da Efí

import requests
import base64

credentials = {
    "client_id": "YOUR-CLIENT-ID",
    "client_secret": "YOUR-CLIENT-SECRET",
}

certificado = './certificado.pem'  # A variável certificado é o diretório em que seu certificado em formato .pem deve ser inserido

auth = base64.b64encode(
    (f"{credentials['client_id']}:{credentials['client_secret']}"
     ).encode()).decode()

url = "https://pagarcontas.api.efipay.com.br/v1/oauth/token"  #Para ambiente de Produção

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
//Desenvolvido pela Consultoria Técnica da Efí

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
#Desenvolvido pela Consultoria Técnica da Efí

require "uri"
require "net/http"
require "openssl"

client_id = "YOUR-CLIENT-ID";
client_secret = "YOUR-CLIENT-SECRET";

certfile = File.read("certificado.pem") # A variável certfile é o diretório em que seu certificado em formato .pem deve ser inserido

url = URI("https://pagarcontas.api.efipay.com.br/v1/oauth/token") #Para ambiente de Produção

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
    
      //Diretório em que seu certificado em formato .p12 deve ser inserido
      System.setProperty("javax.net.ssl.keyStore", "certificado.p12"); 
      SSLSocketFactory sslsocketfactory = (SSLSocketFactory) SSLSocketFactory.getDefault();
      
      URL url = new URL ("https://pagarcontas.api.efipay.com.br/v1/oauth/token"); //Para ambiente de Produção             
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

    url := "https://pagarcontas.api.efipay.com.br/v1/oauth/token"// Rota base, homologação ou produção
    method := "POST"

    payload := strings.NewReader(`{"grant_type": "client_credentials"}`)

    cert, _ := tls.LoadX509KeyPair("CA.crt.pem", "KEY.crt.pem")// Seu certificado e chave privada gerada a partir dos comandos de conversão OpenSSL

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


O trecho de código abaixo representa um exemplo de resposta do OAuth à sua requisição de autorização.

<Tabs className="tab"
    defaultValue="Resposta"
    values={[
    { label: 'Resposta', value: 'Resposta', },
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