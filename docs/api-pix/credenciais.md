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


import {HighlightPost } from "@site/src/components/highlight.js"

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->
<div className="subtitulo">
Nesta página você encontra informações sobre credenciais, certificado e autorização da API Pix.
</div>

<br/>
<br/>
A API Pix Efí oferece recursos avançados para integração com sua aplicação, permitindo que você crie soluções personalizadas e ofereça opções de pagamento inovadoras aos seus clientes. Com nossa API é possível criar cobranças, verificar os Pix recebidos, devolver e enviar Pix.
<br/><br/>

Para integrar a API Pix Efí ao seu sistema ou sua plataforma, é necessário ter uma Conta Digital Efí. Uma vez com acesso, você poderá obter as credenciais e o certificado necessários para a comunicação com a API Pix Efí.

Veja a seguir como obter as credenciais, certificados e detalhes sobre a autorização e segurança da sua integração com a Efí.

<div className="admonition admonition_danger">
<div>
<img src="/img/exclamation-triangle-red.svg"/> <b>
Segurança no gerenciamento de credenciais</b>
</div>
<p>Dentro dos sistemas integrados à nossa API, é importante que as operações de login e a alteração das chaves de integração sejam realizadas com segurança. Sugerimos a implementação de autenticação de dois fatores e outras práticas de segurança.

</p>

</div>
<br/>

## Obtendo as credenciais da aplicação

Um integrador pode criar quantas aplicações desejar. Para cada aplicação são gerados 2 pares de chaves <code>Client_Id</code> e <code>Client_Secret</code>, sendo um par para utilização em ambiente de Produção (<a href="/img/producao.jpg" target="_blank">?</a>) e outro para Homologação (<a href="/img/homologacao.jpg" target="_blank">?</a>).


Utilizando a API Pix Efí, o integrador pode gerar transações Pix (pagamentos e recebimentos), configurar Webhooks para o recebimento de notificações via *callbacks* e acessar as funcionalidades exclusivas da Conta Digital Efí. Para isso, é necessário ativar os escopos necessários em sua aplicação.

### Entendendo os escopos de aplicação

Ao criar ou editar uma aplicação em sua Conta Efí, você precisará configurar os escopos que a aplicação terá acesso. A escolha desses escopos define quais ações uma aplicação estará **autorizada** a realizar via API.

Os escopos disponíveis na API Pix Efí estão listados abaixo com suas respectivas descrições de permissão:

<ul>
<li><b><code>cob.write</code></b> - alteração de cobranças;</li>
<li><b><code>cob.read</code></b> - consulta de cobranças;</li>
<li><b><code>pix.write</code></b> - alteração de Pix;</li>
<li><b><code>pix.read</code></b> - consulta de Pix;</li>
<li><b><code>pix.send</code></b> - requisitar envio de Pix;</li>
<li><b><code>webhook.write</code></b> - alteração do webhook;</li>
<li><b><code>webhook.read</code></b> - consulta do webhook;</li>
<li><b><code>payloadlocation.write</code></b> - criar location do payload;</li>
<li><b><code>payloadlocation.read</code></b> - Permissão para consulta de locations;</li>
<li><b><code>gn.pix.send.read</code></b> - consultar Pix enviados;</li>
<li><b><code>gn.pix.evp.write</code></b> - criar/remover chave evp;</li>
<li><b><code>gn.pix.evp.read</code></b> - listar chave evp;</li>
<li><b><code>gn.balance.read</code></b> - buscar saldo da conta;</li>
<li><b><code>gn.settings.write</code></b> - criar/modificar configurações da conta;</li>
<li><b><code>gn.settings.read</code></b> - listar configurações da conta;</li>
</ul>

<br/>

### Criar uma aplicação ou configurar uma já existente

Veja como criar uma aplicação ou aproveitar uma aplicação já existente para integrar com a API Pix Efí.

<Tabs className="tab"
    defaultValue="Criar_uma_aplicacao"
    values={[
      { label: 'Criar uma aplicação', value: 'Criar_uma_aplicacao', },
      { label: 'Aproveitar uma aplicação existente', value: 'Aproveitar_uma_aplicacao_existente', },
    ]}>
  <TabItem value="Criar_uma_aplicacao">
<div className="tab_criar_aplicacao">

Para **criar uma aplicação para utilização da API Pix** siga os passos abaixo:
<ol>
<li>Acesse sua conta e clique no item "API" na parte inferior do menu à esquerda da conta Efí;</li>
<li>Clique em "Criar aplicação"</li>
<li>Habilite a API Pix e escolha os escopos que deseja liberar em ambiente de Produção e Homologação (você pode editá-los no futuro);</li>
<li>Com os escopos selecionados, clique em "Continuar".</li>
</ol>

<div className="figure"><img src="/img/criacao_aplicacao_pix.png" alt="banner" /><p>Ilustração dos passos para a criação de uma nova aplicação integrada à API Pix</p></div>
</div>
  </TabItem>
<TabItem value="Aproveitar_uma_aplicacao_existente">
<div className="tab_criar_aplicacao">

Para **aproveitar uma aplicação já cadastrada** em sua conta e usá-la para a integração com Pix, siga os passos abaixo:
<ol>
<li>Acesse sua conta e clique no item "API" na parte inferior do menu à esquerda da conta Efí;</li>
<li>Clique em "Aplicações". Em seguida, escolha a aplicação que será editada, clique nos três pontinhos e depois em configurações;</li>
<li>Habilite a API Pix e escolha os escopos que deseja liberar em ambiente de Produção e Homologação (você pode editá-los sempre que quiser);</li>
<li>Com os escopos selecionados, clique em "Continuar".</li>
</ol>
<div className="figure"><img src="/img/edicao_aplicacao_pix.png" alt="banner" /><p>Passos até a edição de uma aplicação</p></div>
<br/>
<div className="figure"><img src="/img/criacao_aplicacao_pix.png" alt="banner"/><p>Edições necessárias para o acesso de uma aplicação à API Pix</p></div>



</div>
 </TabItem>
  </Tabs>
<br/>


## Gerando um certificado P12

Todas as requisições devem conter um certificado de segurança que será fornecido pela Efí dentro da sua conta, no formato <code>PFX(.p12)</code>. Essa exigência está descrita na íntegra no <a href="https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados" target="_blank">manual de segurança do PIX</a>.

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
  </div>
  <p>O download do certificado é feito imediatamente após a sua criação. Não será possível realizar o download do mesmo certificado em outro momento, por isso, armazene-o em local seguro em seu computador.</p>
  </div>
<br/>

Para gerar o seu certificado, basta seguir os passos abaixo:
<ol>
<li>Acesse o item "API" no menu inferior a esquerda da conta Efí;</li>
<li>No menu à esquerda, clique em "Meus Certificados";</li>
<li>Na nova janela selecione o ambiente ao qual pertencerá o certificado (Produção ou Homologação)</li>
<li>Clique em "Novo Certificado" (botão azul);</li>
<li>Atribua uma descrição ao certificado para identificá-lo no futuro;</li>
<li>Confirme a criação do certificado;</li>
<li>Por fim, baixe o certificado e clique em prosseguir.</li>


</ol>


Os passos para a criação de um certificado estão ilustrados na imagem a seguir.

<div className="figure"><img src="/img/passos_para_criar_certificado.png" alt="banner"/><p>Passos para a criação do certificado</p></div>

<div className="figure"><img src="/img/janela_criacao_certificado.png" alt="banner" /><p>Janela para a criação do certificado</p></div>

<div className="figure"><img src="/img/download_certificado.png" alt="banner" /><p>Janela de download do certificado gerado</p></div>

Vale ressaltar que **um mesmo certificado pode ser usado por diversas aplicações** da sua conta digital. Ainda assim, você pode gerar até cinco certificados para cada ambiente (Produção ou Homologação).
<br/>

### Conversão de certificado P12 para o formato PEM
<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>Informação</b>
  </div>
  <p>Em algumas linguagens as chaves precisarão ser convertidas para o formato <code>.pem.</code> Utilize as informações desta seção apenas se esse for o seu caso.</p>
</div>

<br/>

Caso precise converter o certificado utilizando um sistema operacional <b>Windows</b>, você pode utilizar o nosso conversor <a href="https://github.com/efipay/conversor-p12-efi" target="_blank">disponível no GitHub</a>.

Para gerar o seu certificado com este conversor, basta seguir os passos abaixo:
<ol>
<li>Clone ou baixe o conversor pelo repositório no <a href="https://github.com/efipay/conversor-p12-efi" target="_blank">GitHub</a>.;</li>
<li>Certifique-se de que o arquivo .p12 esteja no mesmo diretório que o script;</li>
<li>Execute o arquivo <code>conversor_p12_para_pem.bat</code>;</li>
<li>Se o arquivo .p12 estiver protegido por senha, o script solicitará que você insira a senha do certificado. Se você não inserir uma senha, o script considerará uma senha vazia "".</li>
<li>O script irá converter o arquivo .p12 para .pem no mesmo diretório e o arquivo .pem gerado terá o mesmo nome do arquivo .p12, com a extensão <code>.pem</code>.</li><br/></ol>

<li>Caso precise de separar a chave Privada do seu certificado, após a conversão, o script perguntará se você deseja separar a chave privada em um arquivo separado. Responda <b>"S"</b> ou <b>"s"</b> para sim.</li>
Assim a chave privada será exportada para um arquivo separado com o mesmo nome do arquivo .p12, mas com a extensão <code>_key.pem</code>.<br/><br/>



<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>É importante destacar que você pode usar <strong>um único certificado para várias aplicações na sua conta digital.</strong> No entanto, você tem a opção de gerar até cinco certificados para cada ambiente, seja ele de Produção ou Homologação.</p>
</div>

<br/>

### Conversão de certificado com OpenSSL

É possível também converter o certificado utilizando o comando o OpenSSL para realizar essa conversão de formato entre as chaves:


<Tabs
    defaultValue="Shell"
    values={[
      { label: 'Shell', value: 'Shell', },
    ]}>
  <TabItem value="Shell">

```shell
 # Gerar certificado e chave em único arquivo
openssl pkcs12 -in certificado.p12 -out certificado.pem -nodes -password pass:""
```

  </TabItem>
  </Tabs>
<br/>

Se for necessário separar a chave privada do certificado durante a conversão, use o comando abaixo, também com o OpenSSL:

<Tabs
    defaultValue="Shell"
    values={[
      { label: 'Shell', value: 'Shell', },
    ]}>
  <TabItem value="Shell">

```shell
# Gerar certificado e chave separadas
openssl pkcs12 -in path.p12 -out newfile.crt.pem -clcerts -nokeys -password pass:"" #certificado
openssl pkcs12 -in path.p12 -out newfile.key.pem -nocerts -nodes -password pass:"" #chave privada
```

  </TabItem>
  </Tabs>
<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Informação</b>
</div>
<p>O processo de conversão do certificado pode pedir a <b>senha do certificado</b>. Se isso ocorrer, informe vazio.</p>
</div>

<br/>

## Rotas base

Nesta documentação você perceberá referências à Rotas base ou URL's base para ambientes de Produção ou Homologação. Essas rotas são, na verdade, a URL na qual a API Pix Efí se encontra. Assim, quando nos referirmos aos endpoints, fica implícito que esses trechos de URL também compõem a rota final do recurso desejado.

Utilize as rotas abaixo para realizar a comunicação da sua aplicação com os ambientes de produção
e homologação oferecidos pela Efí.
<div className="table">
<table>
  <tbody>
    <tr>
      <th>Ambiente</th>
      <th>Rota base</th>
    </tr>
    <tr>
      <td>Produção</td>
      <td><code>https://pix.api.efipay.com.br</code></td>
    </tr>
    <tr>
      <td>Homologação</td>
      <td><code>https://pix-h.api.efipay.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

As seguintes rotas ainda estão disponíveis para realizar a comunicação da sua aplicação, mas serão descontinuadas em breve. Sugerimos que você utilize as rotas mencionadas anteriormente.

<div className="table">
<table>
  <tbody>
    <tr>
      <th>Ambiente</th>
      <th>Rota base</th>
    </tr>
    <tr>
      <td>Produção</td>
      <td><code>https://api-pix.gerencianet.com.br</code></td>
    </tr>
    <tr>
      <td>Homologação</td>
      <td><code>https://api-pix-h.gerencianet.com.br</code></td>
    </tr>
  </tbody>
</table>
</div>

<br/>

## Autorização com OAuth2

O mecanismo de permissão das solicitações feitas à API Pix Efí é compatível com o protocolo <a href="http://oauth.net/2/" target="_blank">OAuth2</a>. Isso significa que ele segue um conjunto de regras e padrões para autorizar as requisições feitas à API.

### O objetivo do OAuth2

Para autorizar todas as chamadas feitas à API, é necessário obter um token de acesso (`access_token`). Esse token é usado para verificar se uma determinada aplicação tem permissão para utilizar o endpoint solicitado na API.

### Como é feita a autenticação das requisições

A autenticação é realizada usando HTTP <a href="https://en.wikipedia.org/wiki/Basic_access_authentication" target="_blank">Basic Auth</a>, que requer o `Client_Id` e `Client_Secret` da aplicação que você criou na sua conta Efí. Com essa autenticação, o OAuth pode fornecer as informações sobre as permissões concedidas à aplicação, permitindo autorizar ou negar as solicitações com base nessa informação.


<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>O Certificado P12/PEM gerado nos passos anteriores é <strong>obrigatório em todas as requisições</strong> feitas à API Pix, inclusive na requisição de autorização.</p>
</div>

<br/>

## Collection Postman API PIX 

<div className="link-responsivo">
  <div className="requisicao">
  <p>Este é o  <a href="https://documenter.getpostman.com/view/13574984/Uz5ArJQX" target="_blank">link</a> da nossa Collection que manteremos atualizada com os endpoints da API Pix Efí.</p>
  <p>

<a href="https://documenter.getpostman.com/view/13574984/Uz5ArJQX"  target="_blank" alt="Postman"><button className="buttonPostman">
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
<p>O uso do software Postman é opcional. Os próximos parágrafos explicam como configurá-lo. Caso não deseje usar o Postman para testes, você pode avançar para o tópico <a href="#obter-autorização" target="_self"> Obter Autorização</a>.</p>
</div>
<br/>

Antes de prosseguir com a configuração do Postman, você deverá ter:
<ol>
<li>Um par de credenciais chamado <code>Client_Id</code> e <code>Client_Secret</code> de uma aplicação que você cadastrou na sua Conta Efí;</li>
<li>Um certificado P12/PEM que você gerou conforme mostrado nos passos anteriores;</li>
<li>O software Postman instalado no seu computador. Caso não o tenha, você pode baixá-lo <a href="https://www.postman.com/downloads/" target="_blank">aqui.</a></li>


</ol>

<br/>

### 1. Criando um Environment

A criação de um *Environment* no Postman é necessária para que algumas automações embutidas na collection funcionem. Essas automações foram desenvolvidas fecilitar os testes para os desenvolvedores. 

Com essas automações, você só precisa solicitar autorização uma vez e o <code>access_token</code> será armazenado como uma variável de ambiente (environment) no Postman, pronto para ser utilizado nas próximas requisições.

Para criar um Environment, siga os seguinte passos:

<ol>
<li>Pressione <code>Ctrl+N</code> e, ao abrir o atalho, escolha "Environment";</li>
<li>Atribua um nome preferencialmente especificando se esse Environment será apontado para o ambiente de Produção ou Homologação;</li>
<li>Crie a variável <code>efi-pix-api</code> e como valor inicial (<em>Initial value</em>) insira a URL da API Pix de Produção ou Homologação;</li>
<li>Salve o seu Environment;</li>
<li>Selecione o Environment desejado para que o Postman reconheça a variável criada.</li>
</ol>

No exemplo a seguir, foi criado um Environment apontado para o ambiente de Homologação da API Pix.


<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Dica</b>
</div>
<p>Repita os passos acima para dessa vez ter um Environment apontado para o ambiente de Produção. Assim você poderá simplesmente alternar entre os Environments e suas requisições já estarão apontadas corretamente.</p>
</div>

<br/>

<div className="figure"><img src="/img/environment_pix.png" alt="banner"/><p>Criando um novo environment</p></div>

<div className="figure"><img src="/img/configuracao_environment_pix.png" alt="banner" /><p>Configurações do environment</p></div>


<br/>

### 2. Configurando o certificado no Postman

Todas as requisições feitas à API Pix Efí precisam do certificado gerado em sua conta Efí. Portanto, para facilitar seus testes utilizando o Postman, siga os passos a seguir para configurar o uso do certificado durante as requisições de maneira automática:

<ol>
<li>Clique no ícone de engrenagem no canto superior direito do Postman;</li>
<li>Depois, clique em "Settings" para abrir as configurações;</li>
<li>Na aba superior, clique em "Certificates";</li>
<li>Em seguida, clique em "Add Certificate";</li>
<li>Na janela de configuração do novo certificado, preencha o campo "Host" com a Rota base do ambiente ao qual o certificado pertence (Produção ou Homologação);</li>
<li>Utilize o campo "PFX File" para indicar ao Postman onde está localizado o arquivo do seu certificado .p12. Fique atento ao formato do arquivo, aqui deve ser usado o certificado em .p12;</li>
<li>Finalize clicando em "Add" para salvar suas configurações.</li>
</ol>


Seguindo esses passos, o Postman usará o certificado para quaisquer requisições feitas ao Host do ambiente configurado.

<div className="admonition admonition_tip">
  <div>
  <img src="/img/lightbulb-on-green.svg"/> <b>Dica</b>
  </div>
<p>É ideal que você configure o certificado do ambiente de homologação, mas você também pode repetir os passos acima para configurar o Postman com um certificado para o ambiente de Produção.</p>
</div>
<br/>

As imagens abaixo ilustram o passo a passo da configuração do certificado.


<div className="figure"><img src="/img/acessando_configuracoes_pix.png" alt="banner"/><p>Acessando as configurações do Postman</p></div>
<div className="figure"><img src="/img/adicionando_certificado_pix.png" alt="banner" /><p>Adicionando um novo certificado no Postman</p></div>
<div className="figure"><img src="/img/configuracao_certificado_pix.png" alt="banner" /><p>Configurações do certificado</p></div>
 
<br/>

### 3. Atribuindo o Client_Id e Client_Secret no Postman

Para configurar o Postman corretamente, você precisa adicionar as credenciais da sua aplicação da conta Efí. Essas credenciais são usadas para o Basic Auth e para obter o <code>access_token</code> usando o OAuth.

Siga os passos a seguir para incluir as credenciais e realizar o seu primeiro teste na API Pix:

<ol>
<li>Na collection importada, localize a rota <code>/oauth/token</code> e clique duas vezes para abri-la;</li>
<li>Acesse o menu "Authorization" e verifique se o "Type" (tipo de autorização) está selecionado como "Basic Auth";</li>
<li>Nos campos "username" e "password" preencha com as credenciais da sua aplicação, Client_Id e Client_Secret, respectivamente;</li>
<li>Para testar, clique no botão "Send" para enviar a requisição</li>
</ol>

Após esses passos, uma resposta em formato JSON será exibida, contendo o <code>access_token</code>, <code>token_type</code>, <code>expires_in</code> e <code>scope</code> (como na imagem abaixo).

<div className="figure"><img src="/img/auth-pix.png" alt="banner" /><p>Uso das credenciais de uma aplicação para autorização de requisições</p></div>
<br/>

## Obter Autorização

<div className="auth">
  <b><HighlightPost>POST</HighlightPost> /oauth/token</b>
</div>
  <br/>
  O endpoint POST /oauth/token é usado para autorizar as credenciais de uma aplicação e obter os acessos necessários para utilizar os outros recursos da API.
<br/>
<br/>

  <div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>É necessário incluir o certificado P12/PEM na requisição de autorização para que o servidor da API crie uma conexão segura. </p>
</div>

<br/> <br/> 


### Exemplos de autorização utilizando o certificado .P12

Para a utilização do Pix, é necessário que o cliente e o servidor se comuniquem através de uma conexão verificada. Essa verificação é feita pelo certificado bidirecional (.PEM ou .P12), onde tanto o servidor quanto o cliente possuem uma chave privada e uma chave pública para garantir a identidade um do outro.

Portanto, para fazer qualquer requisição HTTP à API Pix, incluindo a solicitação de autorização pelo OAuth2, é necessário que o certificado .P12 ou .PEM esteja presente nos cabeçalhos da requisição.

A seguir, apresentamos exemplos de como realizar a autorização na API Pix Efí, incorporando esse certificado na requisição: 

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
      CURLOPT_URL => "https://pix-h.api.efipay.com.br/oauth/token", // Rota base, homologação ou produção
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

url = "https://pix.api.efipay.com.br/oauth/token"  #Para ambiente de Desenvolvimento

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
#Desenvolvido pela Consultoria Técnica da Efí

require "uri"
require "net/http"
require "openssl"

client_id = "YOUR-CLIENT-ID";
client_secret = "YOUR-CLIENT-SECRET";

certfile = File.read("certificado.pem") # A variável certfile é o diretório em que seu certificado em formato .pem deve ser inserido

url = URI("https://pix.api.efipay.com.br/oauth/token") #Para ambiente de Desenvolvimento

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
      
      URL url = new URL ("https://pix.api.efipay.com.br/oauth/token"); //Para ambiente de Desenvolvimento              
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

    url := "https://pix.api.efipay.com.br/oauth/token"// Rota base, homologação ou produção
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

A seguir, o trecho de código representa um exemplo de resposta do OAuth à sua requisição de autorização:

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
    "scope": "cob.read cob.write pix.read pix.write"
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
      <td><b>token_type</b></td>
      <td align="left">Tipo de autorização na qual o <code>access_token</code> deve ser usado<br/><strong>Padrão</strong>: "Bearer"
      </td>
      <td>string</td>
    </tr>
     <tr>
      <td><b>expires_in</b></td>
      <td align="left">Tempo de expiração do <code>access_token</code> em segundos.<br/><strong>Padrão</strong> 3600
      </td>
      <td>Integer (int32)</td>
    </tr>
    <tr>
      <td><b>scope</b></td>
      <td align="left">Lista de escopos aos quais a aplicação autorizada possui acesso. Os escopos estão separados por espaço.
      </td>
      <td>string</td>
    </tr>
    </tbody>
</table>
<br/>

</div>