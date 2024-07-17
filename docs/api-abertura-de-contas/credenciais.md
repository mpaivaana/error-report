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
Nesta página você encontra informações sobre credenciais, certificado e autorização da API Abertura de Contas Efí.
</div>

<br/>
<br/>

Com a API Abertura de Contas, você pode iniciar o processo de abertura de contas para seus clientes de forma prática e obter as credenciais e certificados necessários para usar a aplicação do cliente.

<div className="admonition admonition_danger">
<div>
<img src="/img/exclamation-triangle-red.svg"/> <b>
Aviso sobre a API em Versão Beta</b>
</div>
<p>Atualmente, nossa API está em versão beta. Estamos entusiasmados em compartilhar essa ferramenta com você, porém, é essencial lembrar que ela está em desenvolvimento ativo e pode passar por alterações durante este período.

</p>
<p>Valorizamos profundamente seu feedback durante esta fase beta. Queremos ouvir suas experiências e sugestões para aprimorar continuamente a API. Sinta-se à vontade para entrar em contato conosco por meio de nossos canais de suporte ou fórum da comunidade no Discord.
</p>
</div>
<br/>

Para integrar a API Abertura de Contas Efí ao seu sistema ou sua plataforma, é necessário ter uma Conta Digital Efí Empresas. Após obter o acesso à conta, você poderá adquirir as credenciais necessárias para estabelecer a comunicação com a API Abertura de Contas Efí.

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

Uma pessoa integradora pode criar quantas aplicações desejar. Para cada aplicação, são gerados 2 pares de chaves <code>Client_Id</code> e <code>Client_Secret</code>, sendo um par para utilização em ambiente de Produção (<a href="/img/producao.jpg" target="_blank">?</a>) e outro para Homologação (<a href="/img/homologacao.jpg" target="_blank">?</a>).
Além disso, é necessário ativar os escopos necessários para poder utilizar a API Abertura de Contas Efí.


### Entendendo os escopos de aplicação

Ao criar ou editar uma aplicação em sua Conta Efí, você precisará configurar quais escopos que a aplicação terá acesso. A escolha desses escopos define quais ações uma aplicação estará autorizada a realizar via API.

Os escopos disponíveis na API Abertura de Contas estão listados abaixo com suas respectivas descrições:

<ul>
<li><b><code>gn.registration.write</code></b> - realizar uma solicitação de abertura de conta simplificada;</li>
<li><b><code>gn.registration.read</code></b> - recuperar credenciais da conta simplificada;</li>
<li><b><code>gn.registration.webhook.write</code></b> - alteração do webhook;</li>
<li><b><code>gn.registration.webhook.read</code></b> - consulta do webhook;</li>
</ul>
<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>Para usar a API Abertura de Contas da Efí, é necessário ter a liberação dos escopos mencionados nesta página. Para obter essa liberação, é preciso preencher o formulário disponível <a href="https://sejaefi.com.br/formularios/api-de-cadastro" target="_blank">aqui</a>.</p>
</div>
<br/>

### Criar uma aplicação ou configurar uma já existente

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>Para utilizar a API Abertura de Contas da Efí, é necessário que exista uma aplicação ativa com escopos em produção e homologação da API Pix ou Open Finance.</p>
</div>
<br/>

Veja como criar uma aplicação ou aproveitar uma aplicação já existente para integrar com a API Abertura de Contas Efí.

<Tabs className="tab"
    defaultValue="Criar_uma_aplicacao"
    values={[
      { label: 'Criar uma aplicação', value: 'Criar_uma_aplicacao', },
      { label: 'Aproveitar uma aplicação existente', value: 'Aproveitar_uma_aplicacao_existente', },
    ]}>
  <TabItem value="Criar_uma_aplicacao">
<div className="tab_criar_aplicacao">

Para **criar uma aplicação e utilizar a API Abertura de Contas** siga os passos abaixo:
<ol>
<li>Acesse sua conta Efí e clique "API", no menu à esquerda;</li>
<li>Clique em "Criar aplicação"</li>
<li>Habilite a API Pix e escolha os escopos que deseja liberar em ambiente de Produção e Homologação (você poderá editá-los a qualquer momento);</li>
<li>Com os escopos selecionados, clique em "Continuar".</li>
</ol>

<div className="figure"><img src="/img/criacao_aplicacao_pix.png" alt="banner" /><p>Ilustração dos passos para a criação de uma nova aplicação integrada à API Pix</p></div>
</div>
  </TabItem>
<TabItem value="Aproveitar_uma_aplicacao_existente">
<div className="tab_criar_aplicacao">

Para **aproveitar uma aplicação já cadastrada** em sua conta e usá-la para a integração com a API Abertura de Contas, siga os passos a seguir:
<ol>
<li>Acesse sua conta Efí e clique "API", no menu à esquerda;</li>
<li>Clique em "Aplicações" e escolha a aplicação que deseja editar. Em seguida, clique nos três pontinhos e selecione "configurações".</li>
<li>Habilite a API Pix e escolha os escopos que deseja liberar em ambiente de Produção e Homologação (você poderá editá-los a qualquer momento);</li>
<li>Com os escopos selecionados, clique em "Continuar".</li>
</ol>
<div className="figure"><img src="/img/edicao_aplicacao_pix.png" alt="banner" /><p>Passos até a edição de uma aplicação</p></div>
<br/>
<div className="figure"><img src="/img/criacao_aplicacao_pix.png" alt="banner"/><p>Edições necessárias para o acesso de uma aplicação à API Pix</p></div>
</div>



 </TabItem>
  </Tabs>



## Gerando e convertendo um certificado P12

Para gerar um certificado e convertê-lo, caso seja necessário, você pode acessar este <a href="/docs/api-pix/credenciais#gerando-um-certificado-p12" target="_blank">link</a>.

<br/>

## Rota base

Nesta documentação, você encontrará referências à Rota base ou URL base para o ambiente de Produção. Essa rota é a URL onde a API Abertura de Contas Efí está localizada. Quando mencionarmos os endpoints, essas partes de URL também fazem parte do caminho para acessar o recurso desejado.

Para comunicar sua aplicação com os ambientes de produção e homologação da Efí, utilize a seguinte rota:

<div className="table">
<table>
  <tbody>
    <tr>
      <th>Ambiente</th>
      <th>Rota base</th>
    </tr>
    <tr>
      <td>Produção</td>
      <td><code>https://abrircontas.api.efipay.com.br</code></td>
    </tr>
     <tr>
      <td>Homologação</td>
      <td><code>https://abrircontas-h.api.efipay.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

A seguinte rota ainda está disponível para realizar a comunicação da sua aplicação, mas será descontinuada em breve. Sugerimos que você utilize a rota mencionada anteriormente.

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

A API Abertura de Contas Efí utiliza o protocolo <a href="http://oauth.net/2/" target="_blank">OAuth2</a> para autorizar as requisições feitas a ela. O objetivo do OAuth2 é obter um token de acesso chamado(<code>access_token</code>). Esse token é usado para autorizar todas as chamadas à API, verificando se uma determinada aplicação tem permissões para acessar o recurso solicitado.

A autenticação das requisições é feita usando o HTTP <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">Basic Auth</a> com base no <code>Client_Id</code> e <code>Client_Secret</code> da aplicação que você criou na sua conta da Efí.

Por meio dessa autenticação, o OAuth2 pode verificar quais autorizações a aplicação possui e, assim, decidir se autoriza ou nega as requisições de acordo com essas permissões.


<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>O Certificado P12/PEM gerado nos passos anteriores é <strong>obrigatório em todas as requisições</strong> feitas à API Abertura de Contas, inclusive na requisição de autorização.</p>
</div>
<br/> 

## Collection Postman API Abertura de Contas

<div className="link-responsivo">
  <div className="requisicao">
 <p>Este é o <a href="https://documenter.getpostman.com/view/13574984/UyrDCazL" target="_blank">link</a> da nossa Collection que manteremos atualizada com os endpoints da API Abertura de Contas Efí.</p>

  <p><a href="https://documenter.getpostman.com/view/13574984/UyrDCazL"  target="_blank" alt="Postman"><button className="buttonPostman">
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
<p>O uso do software Postman é opcional. A seguir, explicaremos como configurá-lo. Caso não deseje usar o Postman para testes, você pode avançar para o tópico: <a href="#obter-autorização" target="_self"> Obter Autorização</a>.</p>
</div>
<br/>

Para seguir com a etapa de configuração do Postman, você deve ter:
<ol>
<li>Um par de credenciais <code>Client_Id</code> e <code>Client_Secret</code> de uma aplicação cadastrada em sua Conta Efí;</li>
<li>Um certificado P12/PEM gerado como ilustrado nas etapas anteriores;</li>
<li>O software Postman instalado em seu computador (<a href="https://www.postman.com/downloads/" target="_blank">Caso não tenha, clique aqui para baixar</a>);</li>

</ol>
<br/>

### 1. Criando um Environment

A criação de um Environment no Postman é necessária para que algumas automações embutidas na collection funcionem. Essas automações foram projetadas para dar mais facilidade aos desenvolvedores durante os testes.

Isso permitirá que você solicite a autorização apenas uma vez, gravando o <code>access_token</code> como uma variável de ambiente (environment) do Postman, disponível para uso em outras requisições subsequentes.

Para criar um Environment siga os passos a seguir:

<ol>
<li>Pressione <code>Ctrl+N</code> para acionar o atalho e selecione "Environment";</li>
<li>Atribua um nome preferencialmente especificando se esse Environment será apontado para o ambiente de Produção ou Homologação;</li>
<li>Crie a variável <code>efi-cadastro-api</code> como valor inicial (<em>Initial value</em>) e insira a URL da API Abertura de Contas Efí de Produção;</li>
<li>Salve o seu Environment;</li>
<li>Selecione o Environment desejado para que o Postman entenda a variável criada.</li>
</ol>

As imagens a seguir mostram os passos ilustrados acima. Neste exemplo, foi criado um Environment para o ambiente de Produção API Abertura de Contas Efí.

<div className="figure"><img src="/img/environment_cadastro.png" alt="banner"/><p>Criando um novo environment</p></div>
<br/>
<div className="figure"><img src="/img/configuracao_environment_cadastro.png" alt="banner" /><p>Configurações do environment</p></div>
<br/>

### 2. Configurando o certificado no Postman

Todas as requisições feitas à API Abertura de Contas Efí  precisam do certificado gerado em sua conta Efí. Portanto, para facilitar seus testes utilizando o Postman, siga os passos a seguir para configurar o uso do certificado durante as requisições de maneira automática:

<ol>
<li>Clique no ícone de engrenagem no canto superior direito do Postman;</li>
<li>Depois, clique em "Settings" para abrir as configurações;</li>
<li>Na aba superior, clique em "Certificates";</li>
<li>Em seguida, clique em "Add Certificate";</li>
<li>Na janela de configuração do novo certificado, preencha o campo "Host" com a Rota base do ambiente ao qual o certificado pertence (Produção ou Homologação);</li>
<li>Utilize o campo "PFX File" para indicar ao Postman onde está localizado o arquivo do seu certificado P12/PEM;</li>
<li>Finalize clicando em "Add" para salvar as configurações.</li>

</ol>

Seguindo esses passos, o Postman usará o certificado para quaisquer requisições feitas ao Host do ambiente configurado.

<div className="figure"><img src="/img/acessando_configuracoes_cadastro.png" alt="banner"/><p>Acessando as configurações do Postman</p></div>
<br/>
<div className="figure"><img src="/img/adicionando_certificado_cadastro.png" alt="banner" /><p>Adicionando um novo certificado no Postman</p></div>
<br/>
<div className="figure"><img src="/img/configuracao_certificado_cadastro.png" alt="banner" /><p>Configurações do certificado</p></div>
<br/>

### 3. Atribuindo o Client_Id e Client_Secret no Postman

Para finalizar a configuração do seu Postman, é necessário configurar as credenciais de uma aplicação da sua conta Efí. Essas credenciais são usadas para o Basic Auth e para obter o <code>access_token</code> junto ao OAuth.

Siga os passos a seguir para incluir as credenciais e realizar o seu primeiro teste na API Abertura de Contas Efí .

<ol>
<li>Na collection importada, vá até a rota <code>/v1/oauth/token</code> e clique duas vezes para abrir;</li>
<li>Acesse o menu "Authorization" e verifique se o "Type" (tipo de autorização) está selecionado como "Basic Auth";</li>
<li>Preencha os campos "username" e "password" com as credenciais da sua aplicação, ou seja, o Client_Id e o Client_Secret, respectivamente;</li>
<li>Para testar, clique no botão "Send" para enviar a requisição.
</li>
</ol>
<br/>

A imagem abaixo ilustra os passos acima. Se tudo foi seguido corretamente, você deve obter uma resposta em formato JSON, contendo o <code>access_token</code>, <code>token_type</code>, <code>expires_in</code> e <code>scope</code> (como mostrado na imagem abaixo):

<div className="figure"><img src="/img/auth-pag.png" alt="banner"/><p>Uso das credenciais de uma aplicação para autorização de requisições</p></div>
<br/>

## Obter autorização

<div className="auth">
  <b><HighlightPost>POST</HighlightPost> /v1/oauth/token</b>
</div>
  <br/>
Este endpoint é utilizado para autorizar as credenciais de uma aplicação e obter os escopos de acesso à API Abertura de Contas Efí. Para garantir a segurança na comunicação entre cliente e servidor, é essencial que o certificado P12/PEM esteja presente na requisição de autorização.
  
 <br/> <br/>

### Exemplos de autorização utilizando o certificado .P12

Para usar a API Abertura de Contas Efí, o cliente e o servidor devem se comunicar por uma conexão verificada. Isso é feito através do certificado bidirecional (.PEM ou .P12), onde servidor e cliente possuem um certificado de chave privada e um de chave pública para garantir suas identidades.

Portanto, ao fazer qualquer requisição HTTP à API Abertura de Contas, incluindo a solicitação de autorização pelo OAuth2, é fundamental que o certificado .P12 ou .PEM esteja presente nos cabeçalhos da requisição.

A seguir, apresentamos exemplos de como obter a autorização na API Abertura de Contas Efí, incorporando esse certificado na requisição.

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
      CURLOPT_URL => "https://abrircontas.api.efipay.com.br/v1/oauth/token", // Rota base, homologação ou produção
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
    url: "https://abrircontas.api.efipay.com.br/v1/oauth/token",
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

url = "https:/abrircontas.api.efipay.com.br/v1/oauth/token"  #Para ambiente de Produção

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
        var client = new RestSharp.RestClient("https://abrircontas.api.efipay.com.br/v1/oauth/token");
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

url = URI("https://abrircontas.api.efipay.com.br/v1/oauth/token") #Para ambiente de Produção

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
      
      URL url = new URL ("https://abrircontas.api.efipay.com.br/v1/oauth/token"); //Para ambiente de Produção             
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

    url := "https://abrircontas.api.efipay.com.br/v1/oauth/token"// Rota base, homologação ou produção
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
    "scope":  "gn.registration.write gn.registration.read gn.registration.webhook.write gn.registration.webhook.read"
}
 ```
  </TabItem>

</Tabs>
<br/>

## Tutorial API Abertura de Contas Efí

Neste vídeo vamos demonstrar, na prática, o processo de abertura e autenticação, além de apresentar os webhooks, endpoints e outros detalhes importantes da API de abertura de contas.

<div className = "video" >
<iframe src="https://www.youtube.com/embed/uW78tu1xnSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>