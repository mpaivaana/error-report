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
Nesta página, você encontra informações sobre credenciais, certificado e autorização da API Open Finance Efí.
</div>

<br/>
<br/>

Através da API Open Finance, oferecemos serviços que possibilitam a comunicação com a iniciadora Efí (participante autorizado) e recebedor (e-commerce que pode ou não fazer parte dos participantes Open Finance). Com nossa API é possível iniciar o processo open finance de forma prática e facilitar o pagamento do cliente final.

 <div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
  </div>
<p>Antes de ativar os escopos da API Open Finance, é essencial ler os Termos e Condições de Uso para entender como utilizar a API da melhor forma, sem problemas. Faça o download do PDF disponível a seguir ou <a href="https://gerencianet-pub-prod-1.s3.amazonaws.com/public/Termos_e_condi%C3%A7%C3%B5es_de_uso_API_Open_Finance.pdf" target="_blank">aqui</a>.</p>
</div>
<br/>

 <embed src="/pdfelement/Termos_e_condicoes_de_uso_API_Open_Finance.pdf" type="application/pdf" width="100%" height="972px"></embed>  

<br/>
<br/>

Para integrar a API Open Finance ao seu sistema ou sua plataforma, é necessário ter uma Conta Digital Efí. Uma vez com acesso, você poderá obter as credenciais e o certificado necessários para a comunicação com a API Open Finance.

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

Uma pessoa integradora pode criar várias aplicações conforme necessário. Para cada aplicação, serão gerados dois pares de chaves,<code>Client_Id</code> e <code>Client_Secret</code>, um para o ambiente de Produção (<a href="/img/producao.jpg" target="_blank">?</a>) e outro para Homologação (<a href="/img/homologacao.jpg" target="_blank">?</a>).


Para usar a API Open Finance da Efí, é preciso ativar os escopos necessários na sua aplicação.

### Entendendo os escopos de aplicação

Ao criar ou editar uma aplicação em sua Conta Efí, você precisará configurar os escopos que a aplicação terá acesso. Esses escopos definem as ações que uma aplicação poderá realizar através da API.

Confira, a seguir, os escopos disponíveis na API Open Finance, juntamente com suas descrições de permissões:

<ul>
<li><b><code>gn.opb.participants.read</code></b> - consulta de participantes do Open Finance;</li>
<li><b><code>gn.opb.payment.pix.send</code></b> - iniciar Pix via Open Finance;</li>
<li><b><code>gn.opb.payment.pix.read</code></b> - listar as informações dos pagamentos efetuados;</li>
<li><b><code>gn.opb.payment.pix.refund</code></b> - realizar a devolução de um pagamento;</li>
<li><b><code>gn.opb.payment.pix.cancel</code></b> - realizar o cancelamento de um pagamento agendado;</li>
<li><b><code>gn.opb.config.write</code></b> - escrever na configuração de URLs da conta;</li>
<li><b><code>gn.opb.config.read</code></b> - ler a configuração de URLs da conta;</li>
</ul>
<br/>

### Criar uma aplicação ou configurar uma já existente

Veja como criar uma nova aplicação ou usar uma aplicação já existente para fazer integração com a API Open Finance Efí.

<Tabs className="tab"
    defaultValue="Criar_uma_aplicacao"
    values={[
      { label: 'Criar uma aplicação', value: 'Criar_uma_aplicacao', },
      { label: 'Aproveitar uma aplicação existente', value: 'Aproveitar_uma_aplicacao_existente', },
    ]}>
  <TabItem value="Criar_uma_aplicacao">
<div className="tab_criar_aplicacao">

 Para **criar uma aplicação e usar a API Open Finance**, siga os passos a seguir:
<ol>
<li>Acesse sua conta e clique no item "API" na parte inferior do menu à esquerda da conta Efí;</li>
<li>Clique em "Criar aplicação"</li>
<li>Habilite a API Open Finance e escolha os escopos que deseja liberar em ambiente de Produção e Homologação (você pode editá-los no futuro);</li>
<li>Com os escopos selecionados, clique em "Continuar".</li>
</ol>

<div className="figure"><img src="/img/criacao_aplicacao_of.png" alt="banner" /><p>Ilustração dos passos para a criação de uma nova aplicação integrada à API Open Finance</p></div>
</div>
  </TabItem>
<TabItem value="Aproveitar_uma_aplicacao_existente">
<div className="tab_criar_aplicacao">

Para utilizar **uma aplicação já cadastrada** em sua conta e integrá-la com a API Open Finance, siga os passos a seguir:
<ol>
<li>Acesse sua conta Efí e clique em "API" no menu inferior esquerdo;</li>
<li>Selecione "Aplicações". Escolha a aplicação que deseja editar, clique nos três pontinhos e, em seguida, em configurações;</li>
<li>Habilite a API Open Finance e escolha os escopos que deseja liberar em ambiente de Produção e Homologação (você pode editá-los quando quiser);</li>
<li>Após selecionar os escopos desejados, clique em "Continuar"."</li>
</ol>
<div className="figure"><img src="/img/edicao_aplicacao_pix.png" alt="banner" /><p>Passos até a edição de uma aplicação</p></div>
<br/>
<div className="figure"><img src="/img/criacao_aplicacao_of.png" alt="banner"/><p>Edições necessárias para o acesso de uma aplicação à API Open Finance</p></div>
</div>



 </TabItem>
  </Tabs>

## Gerando e convertendo um certificado P12

Para gerar e converter um certificado, se necessário, você pode acessar <a href="/docs/api-pix/credenciais#gerando-um-certificado-p12" target="_blank">aqui</a>.

## Rotas base

Para se comunicar com os ambientes de produção ou homologação da Efí, utilize as rotas base ou URLs base a seguir.


<div className="table">
<table>
  <tbody>
    <tr>
      <th>Ambiente</th>
      <th>Rota base</th>
    </tr>
    <tr>
      <td>Produção</td>
      <td><code>https://openfinance.api.efipay.com.br</code></td>
    </tr>
    <tr>
      <td>Homologação</td>
      <td><code>https://openfinance-h.api.efipay.com.br</code></td>
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
      <td><code>https://apis.gerencianet.com.br</code></td>
    </tr>
    <tr>
      <td>Homologação</td>
      <td><code>https://apis-h.gerencianet.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

<br/>

## Autenticação com OAuth2

A API Open Finance Efí utiliza o <a href="http://oauth.net/2/" target="_blank">o protocolo OAuth 2.0</a>para autorizar as requisições feitas. O objetivo é obter um token de acesso (<code>access_token</code>), que permite à aplicação autorizada consumir os endpoints da API.

A autenticação das requisições é feita usando HTTP <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">Basic Auth</a>  com as credenciais <code>Client_Id</code> e <code>Client_Secret</code> da aplicação criada na conta Efí.

Dessa forma, o OAuth responde com as autorizações concedidas à aplicação, permitindo ou negando as requisições com base nessas informações.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>O Certificado P12/PEM gerado nos passos anteriores é <strong>obrigatório em todas as requisições</strong> feitas à API Open Finance, incluindo a solicitação de autorização.</p>
</div>

<br/>

## Collection Postman API Open Finance 

<div className="link-responsivo">
  <div className="requisicao">
  <p>Este é o  <a href="https://documenter.getpostman.com/view/13574984/Uz5Dobw1" target="_blank">link</a> da nossa Collection que manteremos atualizada com os endpoints da API Open Finance Efí.</p>
  <p>

  <a href="https://documenter.getpostman.com/view/13574984/Uz5Dobw1"  target="_blank" alt="Postman"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Executar no Postman
</button></a>

  </p>
  </div>
  </div>

<br/>


## Configurando o Postman para testes

Antes de prosseguir com a configuração do Postman, certifique-se de ter:
<ol>
<li>Um par de credenciais <code>Client_Id</code> e <code>Client_Secret</code> de uma aplicação cadastrada em sua Conta Efí;</li>
<li>Um certificado P12/PEM gerado em sua conta Efí;</li>
<li>O software Postman instalado em seu computador (Caso não tenha, <a href="https://www.postman.com/downloads/" target="_blank">baixe aqui</a>);</li>
</ol>

### 1. Criando um Environment

A criação de um *Environment* no Postman é necessária para que algumas automações embutidas na collection funcionem. Essas automações foram projetadas para dar mais facilidade aos desenvolvedores durante os testes.

Isso permitirá que você solicite a autorização apenas uma vez, gravando o <code>access_token</code> como uma variável de ambiente (environment) do Postman, disponível para uso em outras requisições subsequentes.

Para criar um Environment siga os passos a seguir:

<ol>
<li>Pressione <code>Ctrl+N</code> para acionar o atalho e selecione "Environment";</li>
<li>Atribua um nome preferencialmente especificando se esse Environment será apontado para o ambiente de Produção ou Homologação;</li>
<li>Crie a variável <code>efi-of-api</code> e como valor inicial (Initial value) insira a URL da API Open Finance de Produção ou Homologação;</li>
<li>Salve o seu Environment;</li>
<li>Selecione o Environment desejadopara que o Postman entenda a variável criada.</li>
</ol>

As imagens a seguir mostram os passos ilustrados acima. Neste exemplo, foi criado um Environment para o ambiente de Produção da API Open Finance da Efí.

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Dica</b>
</div>
<p>Repita os passos acima criar Environment apontado para o ambiente de Produção. Assim, você pode alternar facilmente entre os Environments, garantindo que suas requisições estejam sempre direcionadas corretamente.</p> 
</div>

<br/>

<div className="figure"><img src="/img/environment_of.png" alt="banner"/><p>Criando um novo environment</p></div>

<div className="figure"><img src="/img/configuracao_environment_of.png" alt="banner" /><p>Configurações do environment</p></div>


<br/>

### 2. Configurando o certificado no Postman

Todas as requisições feitas à API Open Finance Efí precisam do certificado gerado em sua conta Efí. Portanto, para facilitar seus testes utilizando o Postman, siga os passos abaixo para configurar o uso do certificado durante as requisições de maneira automática:

<ol>
<li>Clique no ícone de engrenagem no canto superior direito do Postman;</li>
<li>Em seguida, clique em "Settings" para abrir as configurações;</li>
<li>Na aba superior, clique em "Certificates";</li>
<li>Em seguida, clique em "Add Certificate";</li>
<li>Na janela de configuração do novo certificado, preencha o campo "Host" com a Rota base do ambiente ao qual o certificado pertence (Produção ou Homologação);</li>
<li>Utilize o campo "PFX File" para informar ao Postman onde o arquivo do seu certificado P12/PEM está localizado;</li>
<li>Finalize clicando em "Add" para salvar suas configurações.</li>
</ol>

Ao seguir esses passos, o Postman utilizará automaticamente o certificado em todas as requisições feitas ao ambiente configurado.

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Dica</b>
</div>
<p>É ideal que você configure o certificado do ambiente de homologação, mas você também pode repetir os passos acima para configurar o Postman com um certificado para o ambiente de Produção.</p>
</div>
<br/>

As imagens abaixo ilustram o passo a passo da configuração do certificado.


<div className="figure"><img src="/img/acessando_configuracoes_of.png" alt="banner"/><p>Acessando as configurações do Postman</p></div>
<div className="figure"><img src="/img/adicionando_certificado_of.png" alt="banner" /><p>Adicionando um novo certificado no Postman</p></div>
<div className="figure"><img src="/img/configuracao_certificado_of.png" alt="banner" /><p>Configurações do certificado</p></div>

<br/>

### 3. Atribuindo o Client_Id e Client_Secret no Postman

Para finalizar a configuração do seu Postman é necessário configurar as credenciais de uma aplicação da sua conta Efí. Essas credenciais são usadas para o Basic Auth  e para obter o <code>access_token</code> junto ao OAuth.

Siga os passos a seguir para incluir as credenciais e realizar o seu primeiro teste na API Open Finance Efí.

<ol>
<li>Na collection importada, navegue até a rota <code>/v1/oauth/token</code> e clique duas vezes para abrir;</li>
<li>Acesse o menu "Authorization" e verifique o "Type" (tipo de autorização) está selecionado como "Basic Auth";</li>
<li>Preencha os campos "username" e "password" com as credenciais da sua aplicação, ou seja, o Client_Id e o Client_Secret, respectivamente;</li>
<li>Para testar, clique no botão "Send" para enviar a requisição.</li>
</ol>

A imagem abaixo ilustra os passos acima. Se tudo foi seguido corretamente, você deve obter uma resposta em formato JSON, contendo o <code>access_token</code>, <code>token_type</code>, <code>expires_in</code> e <code>scope</code> (como na imagem abaixo).

<div className="figure"><img src="/img/auth-of.png" alt="banner" /><p>Uso das credenciais de uma aplicação para autorização de requisições</p></div>
<br/>


## Obter autorização

<div className="auth">
  <b><HighlightPost>POST</HighlightPost> /v1/oauth/token</b>
</div>
  <br/>

  Este endpoint é utilizado para autorizar as credenciais de uma aplicação e obter os escopos de acesso à API Open Finance Efí. Para garantir a segurança na comunicação entre cliente e servidor, é essencial que o certificado P12/PEM esteja presente na requisição de autorização.

  <br/> 

### Exemplos de autorização utilizando o certificado .P12

Para usar a API Open Finance Efí, o cliente e o servidor devem se comunicar por uma conexão verificada. Isso é feito através do certificado bidirecional (.PEM ou .P12), onde servidor e cliente possuem um certificado de chave privada e um de chave pública para garantir suas identidades.

Portanto, ao fazer qualquer requisição HTTP à API Open Finance, incluindo a solicitação de autorização pelo OAuth2, é fundamental que o certificado .P12 ou .PEM esteja presente nos cabeçalhos da requisição.

A seguir, apresentamos exemplos de como obter a autorização na API Open Finance Efí, incorporando esse certificado na requisição.

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
      CURLOPT_URL => "https://openfinance-h.api.efipay.com.br/v1/oauth/token", // Rota base, homologação ou produção
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
    url: "https://openfinance-h.api.efipay.com.br/v1/oauth/token",
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

url = "https://openfinance-h.api.efipay.com.br/v1/oauth/token"  #Para ambiente de Desenvolvimento

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
        var client = new RestSharp.RestClient("https://openfinance-h.api.efipay.com.br/v1/oauth/token");
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

url = URI("https://openfinance-h.api.efipay.com.br/v1/oauth/token") #Para ambiente de Desenvolvimento

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
      
      URL url = new URL ("https://openfinance-h.api.efipay.com.br/v1/oauth/token"); //Para ambiente de Desenvolvimento              
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

    url := "https://openfinance-h.api.efipay.com.br/v1/oauth/token"// Rota base, homologação ou produção
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
    "scope": "gn.opb.participants.read gn.opb.payment.pix.send gn.opb.payment.pix.read..."
}
 ```
  </TabItem>

</Tabs>
<br/>



</div>
