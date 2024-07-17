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
Esta seção reúne endpoints para gerenciamento de notificações por parte do PSP recebedor ao usuário recebedor.

</div>

<br/>
<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Validação mTLS</b>
</div>
<p>Para utilizar a API Abertura de Contas, é necessário que o seu servidor tenha a versão mínima do TLS 1.2. e obedeça o padrão de comunicação mTLS.</p>
</div>
<br/>


  ## Entendendo o padrão mTLS
  Por norma do Banco Central, será necessário a inserção de uma chave pública da Efí em seu servidor para que a comunicação obedeça o padrão mTLS. Em seu domínio que representa o seu servidor, deverá ser feita uma configuração para exigir a chave pública (mTLS) que estamos disponibilizando para que ocorra a autenticação mútua.

  A Efí irá fazer 2 requisições para o seu domínio (servidor):

  <ol>
  <li>Primeira Requisição: Verificaremos se seu servidor está exigindo nossa chave pública. Enviaremos uma requisição sem certificado, e seu servidor não deve aceitar essa requisição. Após sua resposta negativa, passaremos para a segunda requisição.<br/></li>
  <li>Segunda Requisição: Enviaremos a notificação junto com nossa chave pública. Seu servidor, que deve possuir nossa chave pública disponibilizada, irá realizar o "Hand-Shake" para estabelecer a comunicação.<br/></li>
   </ol>
 <br/>

  Em seu servidor você deve configurar uma rota 'POST' com uma resposta padrão como uma string "200". Deve ser inserido o nosso certificado de produção ou homologação em seu servidor, abaixo temos alguns exemplos.<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Servidor de hospedagem</b>
</div>
<p>Recomenda-se que você tenha um <b>servidor dedicado</b> para conseguir realizar as configurações do webhook, pois é necessário ter acesso a alguns arquivos para realizar as configurações como nos próximos exemplos.</p>
</div>
<br/>


  ## Exemplos de configurações de servidor
  Para configurar seu servidor, você precisará das chaves públicas da Efí. A seguir estão os endereços das chaves para os ambientes de Produção e Homologação. Essas chaves devem ser baixadas e dispostas em seu servidor.<br/><br/>
  <div>
    <table className= "table">
    <tbody>
    <tr>
      <th>Atributo</th>
      <th align="center">URL da chave pública</th>
    </tr>
    <tr>
      <td><b>Produção</b></td>
      <td align="left"><code>https://certificados.efipay.com.br/webhooks/certificate-chain-prod.crt</code>
      </td>
    </tr>
    <tr>
      <td><b>Homologação</b></td>
      <td align="left"><code>https://certificados.efipay.com.br/webhooks/certificate-chain-homolog.crt</code>
      </td>
    </tr>
    </tbody>
</table>
  </div>
  <br/><br/>
  Os trechos de código abaixo buscam exemplificar as configurações necessárias em seu servidor para que seja possível realizar o <em>hand-shake</em> com nossos servidores.

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
#Desenvolvido pela Consultoria Técnica da Efí
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
#Desenvolvido pela Consultoria Técnica da Efí
  ```
  </TabItem>
  <TabItem value="Node">

  ```javascript
  const express = require("express");
const fs = require("fs");
const https = require("https");
var logger = require('morgan');

const httpsOptions = {
    cert: fs.readFileSync(""), // Certificado fullchain do dominio
    key: fs.readFileSync("/"), // Chave privada do domínio
    ca: fs.readFileSync(""),   // Certificado público da Efí
    minVersion: "TLSv1.2",
    requestCert: true,
    rejectUnauthorized: false, //Mantenha como false para que os demais endpoints da API não rejeitem requisições sem MTLS
};

const app = express();
const httpsServer = https.createServer(httpsOptions, app);
const PORT = 443;

app.use(logger('dev'));  // Comente essa linha caso não queira que seja exibido o log do servidor no seu console
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Endpoint para configuração do webhook, você precisa cadastrar https://SEUDOMINIO.com/webhook
app.post("/webhook", (request, response) => {
    // Verifica se a requisição que chegou nesse endpoint foi autorizada
    if (request.socket.authorized) { 
      response.status(200).end();
    } else {
      response.status(401).end();
    }
});

// Endpoind para recepção do webhook tratando o /pix
app.post("/webhook/pix", (request, response) => {
    if (request.socket.authorized){
      //Seu código tratando a callback
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
//Desenvolvido pela Consultoria Técnica da Efí
  ```
  </TabItem>
    <TabItem value="Apache">

  ```json
# ********************************************************************************* #
# Utilize o primeiro exemplo, caso queira requerir o certificado para autenticação  #
# mútua em qualquer rota do domínio indicado no VirtualHost.                        #
# Funciona bem para sub-domínios. Exemplo: https://www.webhook.seu_dominio.com.br   # 
# ********************************************************************************* #

<IfModule mod_ssl.c>
<VirtualHost *:443> # Porta HTTPS
    #
    # ...
    #

    SSLCertificateFile /caminho_certificado/fullchain_ssl.pem #fullchain associado ao seu certificado SSL do domínio
    SSLCertificateKeyFile /caminho_certificado/privkey_ssl.pem #privkey associada ao seu certificado SSL do domínio

    #Chave pública da Efí
    SSLCACertificateFile /caminho_certificado/chain-pix-prod.crt
    
    # mTLS Efí
    SSLVerifyClient require
    SSLVerifyDepth 3
      
    # Tratando o /pix, redirecionando as requisições sempre para /webhook
    Alias "/pix/" "/var/www/webhook/index.php"
    Alias "/pix" "/var/www/webhook/index.php"

    #
    # ...
    #
</VirtualHost>
</IfModule>


# ******************************************************************************** #
# Utilize o segundo exemplo, caso queira requerir o certificado para autenticação  #
# mútua em apenas uma rota do domínio indicado no VirtualHost.                     #
# Exemplo: https://www.seu_dominio.com.br/webhook/                                 #     
# ******************************************************************************** #

<IfModule mod_ssl.c>
<VirtualHost *:443> # Porta HTTPS
    #
    # ...
    #

    SSLCertificateFile /caminho_certificado/fullchain_ssl.pem #fullchain associado ao seu certificado SSL do domínio
    SSLCertificateKeyFile /caminho_certificado/privkey_ssl.pem #privkey associada ao seu certificado SSL do domínio

    #Chave pública da Efí
    SSLCACertificateFile /caminho_certificado/chain-pix-prod.crt
    
    # mTLS Efí
    SSLVerifyClient none
    SSLProtocol TLSv1.2
      
    <Location "/webhook">
        SSLVerifyClient require
        SSLVerifyDepth 3
    </Location>
    
    # Tratando o /pix, redirecionando as requisições sempre para /webhook
    Alias "/webhook/pix/" "/var/www/webhook/index.php"
    Alias "/webhook/pix" "/var/www/webhook/index.php"

    #
    # ...
    #
</VirtualHost>
</IfModule>
  ```
  </TabItem>

  <TabItem value="PHP">

  ```php
# ********************************************************************************** #
# Para o funcionamento deste exemplo é necessário que seu servidor tenha configurado #
# o certificado do mTLS, com o direcionamento para este arquivo, e também com a      #
# tratativa do /pix. Assim como é feito em nosso exemplo de servidores Apache.       #
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
    // Crie um arquivo .;json para salvar as informações
    $nomeArquivo = './dados.json';
    $dadosGravados = json_decode(file_get_contents($nomeArquivo), true);
    $arquivo = fopen($nomeArquivo, 'w');

    // Incrementa as informações enviadas com o que já havia gravado
    array_push($dadosGravados, $dados);

    if (fwrite($arquivo, json_encode($dadosGravados))) {
      resposta(200, "Requisição realizada com sucesso!", $dados);
    } else {
      resposta(300, "Falha ao salvar os dados da requisição.", $dados);
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
        resposta(200, "Requisição realizada com sucesso!", $body);
        break;
    }
}

// Obtém o método HTTP, body e parâmetros da requisição
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

  Para obter um SSL válido, você precisa entrar em contato com uma Autoridade Certificadora e gerar uma chave privada <code>server_ssl.key.pem</code> e uma chave pública <code>server_ssl.crt.pem</code>. Isso garante a integridade da conexão. Você pode fazer isso gratuitamente usando um utilitário como o <a href="https://certbot.eff.org/" target="_blank">Certbot</a>, por exemplo.

<br/>

  ## Configurar o webhook

Configura webhook para a API Abertura de Contas.


  <div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/webhook</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.registration.webhook.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/abertura_conta/webhooks/Configurar_webhook.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Adicionar Webhook', value: 'exemplo', },
    { label: 'Editar Webhook', value: 'exemplo2', },
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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

Ou

Protocolo inválido
{
    "nome": "protocolo_da_url",
    "mensagem": "A URL do webhook deve usar o protocolo HTTPS."
}

Ou

mTLS não configurado
{
    "nome": "mtls_nao_configurado",
    "mensagem": "A autenticação TLS mútua não está configurada no URL fornecido."
}

Ou

URL inacessível
{
    "nome": "url_inacessivel",
    "mensagem": "A URL informada está inacessível."
}

Ou

URL timeout
{
    "nome": "limite_de_tempo_atingido_para_url",
    "mensagem": "A URL informada atingiu o tempo limite de resposta."
}

Ou

URL falhou com erro
{
    "nome": "url_falhou_com_erro",
    "mensagem": "A requisição na URL informada falhou com o erro."
}

Ou

Protocolo não HTTPS
{
    "nome": "protocolo_da_url",
    "mensagem": "A URL do webhook deve usar o protocolo HTTPS."
}

Ou

URL responde HTTP
{
    "nome": "erro_de_codigo",
    "mensagem": "A URL informada respondeu com o código HTTP."
}

Ou

URL não responde
{
    "nome": "url_informada_nao_existe",
    "mensagem": "Não foi possível receber uma resposta da URL informada."
}

Ou

Webhook não encontrado
{
    "nome": "chave_invalida",
    "mensagem": "Não foi possível encontrar um webhook com a chave informada."
}

Ou

URL cadastrada
{
    "nome": "url_cadastrada",
    "mensagem": "A URL já foi cadastrada."
}
  ```
  </TabItem>
    <TabItem value="401">

  ```json
 Este erro ocorre na seguinte situação:

* Integrador não tem permissão para o escopo de serviço necessário para consumir este endpoint.
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

  ## Detalhar webhook
  Detalha webhook configurado para a API Abertura de Contas.
   <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/webhook/<HighlightVar>:identificadorWebhook</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.registration.webhook.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/abertura_conta/webhooks/Consultar_webhook.md" />
          </div>
      </div>
      <br/><br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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
 Unauthorized. Este erro ocorre na seguinte situação:

* Integrador não tem permissão para o escopo de serviço necessário para consumir este endpoint.
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

  ## Listar webhooks
Lista webhooks configurados para a API Abertura de Contas.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/webhooks</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.registration.webhook.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/abertura_conta/webhooks/Listar_webhook.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Requisição</b></p>
  A requisição enviada para esse endpoint não precisa de um body, apenas os cabeçalhos de autorização OAuth, parâmetros e o certificado da conta.
    
  <br/>
    <br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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
Unauthorized. Este erro ocorre na seguinte situação:

* Integrador não tem permissão para o escopo de serviço necessário para consumir este endpoint.
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

## Cancelar webhook
Cancela webhook configurado para a API Abertura de Contas.

  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v1/webhook/<HighlightVar>:identificadorWebhook</HighlightVar></b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.registration.webhook.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/abertura_conta/webhooks/Cancelar_webhook.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Requisição</b></p>
 A requisição enviada para esse endpoint não precisa de um body, apenas os cabeçalhos de autorização, OAuth, parâmetro e o certificado da conta.
  <br/>
 <br/>
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(204) e Falhas/erros do consumo.
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

* Webhook configurado para cadastro foi cancelado.
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
Unauthorized. Este erro ocorre na seguinte situação:

* Integrador não tem permissão para o escopo de serviço necessário para consumir este endpoint.
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

  ## Recebendo Callbacks 
Esse serviço está protegido por uma camada de autenticação mTLS. Os callbacks são enviados pela Efí via <code>POST url-webhook-cadastrada</code>.  

<br/>

### Requisição

<div className="link-responsivo">
<div className="requisicao">
<p>Ao abrir uma conta ou o cliente final recusar a abertura da conta, a Efí enviará uma requisição <code>POST</code> para a URL de webhook que você definiu. Um objeto JSON (como os exemplos abaixo) será enviado ao seu servidor. Cada requisição de callback possui um timeout de 60 segundos, ou seja, é interrompida se não houver resposta em 60 segundos.</p>

<details  className="no_border">

  <summary>
    <b> Exemplos:</b>
</summary>
<div className="left">
  A seguir, veja alguns exemplos do objeto JSON enviado.
</div>
<div className="right">
 
</div>
<br/> <br/>
      <p></p>
<Tabs
    defaultValue="Exemplo1"
    values={[
    { label: 'Abrir conta', value: 'Exemplo1', },
    { label: 'Cliente final recusou a abertura de conta', value: 'Exemplo2', },
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

  <b>Respostas</b>

  <br/> 

 As requisições de callback aguardam uma resposta com status HTTP 2XX. Caso o servidor do cliente retorne um status diferente, a Efí fará até 10 novas tentativas de notificação. A primeira nova tentativa será feita 5 minutos após a falha do envio do callback. Persistindo o erro, as tentativas subsequentes serão enviadas em intervalos de tempo cada vez maiores, conforme mostra a tabela abaixo.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Em casos onde o servidor do cliente retorna o status HTTP 429 (<i>too many requests</i>), os servidores da Efí tentarão enviar a notificação até 10 vezes também de acordo com a tabela abaixo.</p>
</div>

 <br/>
  <table className="table"> 
  <tbody>
    <tr>
      <th>N° da tentativa</th>
      <th align="center">Tempo (em minutos)</th>
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