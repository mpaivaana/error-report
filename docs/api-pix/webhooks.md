---
id: webhooks
title: Webhooks
hide_title: true
sidebar_label: Webhooks
---

<h1 className="titulo">Webhooks</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js"

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Esta seção reúne endpoints para gerenciamento de notificações por parte do PSP recebedor a pessoa usuária recebedora.

</div>

<br/>
<br/>

## Entendendo o padrão mTLS

Por norma do Banco Central, será necessário a inserção de uma chave pública da Efí em seu servidor para que a comunicação obedeça o padrão mTLS. No domínio que representa o seu servidor, você deverá configurar a exigência da chave pública (mTLS) que estamos disponibilizando, para que ocorra a autenticação mútua.

A Efí irá fazer 2 requisições para o seu domínio (servidor):

  <ol>
  <li>Primeira Requisição: Vamos certificar que seu servidor esteja exigindo uma chave pública da Efí. Para isso, enviaremos uma requisição sem certificado e seu servidor não deverá aceitar a requisição. Caso seu servidor responda com recusa, enviaremos a 2ª requisição.<br/></li>
  <li>Segunda Requisição: Seu servidor, que deve conter a chave pública disponibilizada, deverá realizar o "Hand-Shake" para que a comunicação seja estabelecida.<br/></li>
   </ol>

É necessário que o seu servidor tenha a versão mínima do TLS 1.2.

Em seu servidor, configure uma rota 'POST' com uma resposta padrão como uma string "200". Inclua o nosso certificado de produção ou homologação em seu servidor, a seguir temos alguns exemplos.<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Servidores dedicados</b>
</div>
<p>Recomenda-se que você tenha um servidor dedicado para conseguir realizar as configurações do webhook, pois é necessário ter acesso a alguns arquivos para realizar as configurações, como nos exemplos abaixo.</p>
</div>
<br/>

## Exemplos de configurações de servidor

Para configurar seu servidor, você precisará das chaves públicas da Efí. Abaixo estão os endereços das chaves para os ambientes de Produção e Homologação. Essas chaves devem ser baixadas e dispostas em seu servidor.<br/><br/>

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
  <br/>
  Os trechos de código abaixo buscam exemplificar as configurações necessárias em seu servidor para que seja possível realizar o <em>hand-shake</em> com nossos servidores.
<br/><br/>

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
var logger = require("morgan");

const httpsOptions = {
  cert: fs.readFileSync(""), // Certificado fullchain do dominio
  key: fs.readFileSync("/"), // Chave privada do domínio
  ca: fs.readFileSync(""), // Certificado público da Efí
  minVersion: "TLSv1.2",
  requestCert: true,
  rejectUnauthorized: true, //Caso precise que os demais endpoints não rejeitem requisições sem mTLS, você pode alterar para false
};

const app = express();
const httpsServer = https.createServer(httpsOptions, app);
const PORT = 443;

app.use(logger("dev")); // Comente essa linha caso não queira que seja exibido o log do servidor no seu console
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
  if (request.socket.authorized) {
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
  } else {
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

Para ter um ter um SSL válido, você deve entrar em contato com uma Autoridade Certificadora e gerar a chave privada <code>server_ssl.key.pem</code> e uma pública <code>server_ssl.crt.pem</code>, assim você valida a integridade da conexão. Você consegue realizar isso de forma gratuita utilizando um utilitário como o <a href="https://certbot.eff.org/" target="_blank">Certbot</a> por exemplo.

<h3> Skip-mTLS </h3>

Para hospedagem em servidores compartilhados, pode haver restrições em relação à inserção de certificados gerados por outra entidade, como o nosso CA, por exemplo. Por isso, disponibilizamos a opção skip mTLS, que permite o cadastro do webhook sem a necessidade de validação mTLS. <br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>É importante destacar que sempre enviaremos o certificado nos webhooks, seja no cadastro ou na notificação de Pix. No entanto, quando o skip-mTLS é utilizado, você, pessoa integradora, fica responsável por validar o nosso certificado.<br/>

Caso opte por utilizar o atributo skip mTLS, ou seja, sem a validação mTLS no seu servidor, você deverá implementar medidas para garantir que quem está enviando os webhooks ao seu servidor é, de fato, a Efí.</p>

</div>

<br/>

Sugerimos as duas formas de validação a seguir, mas recomendamos fortemente que as utilize em conjunto:<br/>

<ul>
<li>Verifique o IP de comunicação: Você pode restringir a comunicação ao domínio do webhhook cadastrado para aceitar apenas mensagens do IP utilizado pela Efí.<br/></li>
<code>IP utilizado atualmente em nossas comunicações: '34.193.116.226'.</code>
<li>Adicione uma hash à URL cadastrada no webhook: Crie um hmac (uma identificação própria) que será acrescentado ao final da URL no momento do cadastro do webhook. Essa hash será utilizada para validar a origem da notificação. Assim, todos os webhooks enviados ao seu servidor terão essa identificação final e sua aplicação deve validar a presença da mesma.<br/>
<b>Exemplo:</b>
<br/>URL de notificação original: <code>https://seu_dominio.com.br/webhook</code>
<br/>Como deverá ser cadastrada com a hash: <code>https://seu_dominio.com.br/webhook?hmac=xyz&ignorar=</code>. O termo <code>ignorar=</code> servirá para tratar a adição do <code>/pix</code> no final da URL.</li>
</ul>

  <h3> Como cadastrar o skip-mTLS: </h3>

Para configurar o webhook Pix, você deve utilizar o endpoint específico e passar no cabeçalho da requisição o parâmetro <code>x-skip-mtls-checking</code> com o valor <code>true</code> ou <code>false</code> dependendo se deseja habilitar ou desabilitar essa funcionalidade.<br/>

A imagem abaixo mostra como este parâmetro deve ser informado:

  <div className="img-container">
      <img src="/img/put_webhook.png"/>
  </div>

<br/>

## Configurar o webhook Pix

Endpoint para configuração do serviço de notificações acerca de Pix recebidos. Pix oriundos de cobranças estáticas só serão notificados se estiverem associados a um <code>txid</code>.

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Lembrete</b>
</div>
<p>Uma URL de webhook pode estar associada a várias chaves Pix.</p> 
<p><strong>Por outro lado, uma chave Pix só pode estar vinculada a uma única URL de webhook.</strong></p>
</div>
<br/>

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>Informação</b>
  </div>
  <p>Ao cadastrar seu webhook, enviaremos uma notificação de teste para a URL cadastrada, porém quando de fato uma notificação for enviada, o caminho <code>/pix</code> será acrescentado ao final da URL cadastrada. Para não precisar de duas rotas distintas, você poder adicionar um parâmetro <code>?ignorar=</code> ao final da URL cadastrada, para que o <code>/pix</code> não seja acrescentado na rota da sua URL.</p>
</div>
<br/>

<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/webhook/<HighlightVar>:chave</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>webhook.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/webhooks/Configurar_webhook.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Exemplo 1', value: 'exemplo', },
    { label: 'Exemplo 2', value: 'exemplo2', },
    ]}>
    
  <TabItem value="exemplo">

```json
{
  "webhookUrl": "https://exemplo-pix/webhook"
}
```

  </TabItem>

  <TabItem value="exemplo2">

```json
{
  "webhookUrl": "https://exemplo-pix/webhook?ignorar="
}
```

  </TabItem>
  </Tabs>

  <br/>   
        
  <b>Respostas</b>

  <br/>

As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo.
<Tabs
defaultValue="saida"
values={[
{ label: '🟢 201', value: 'saida', },
{ label: '🔴 400', value: '400', },
]}>
<TabItem value="saida">

```json
Webhook para notificações acerca de Pix recebidos associados a um txid.
```

  </TabItem>
  <TabItem value="400">

```json
InvalidValueError
{
  "nome": "valor_invalido",
  "mensagem": "URL inválida"
}

OU

{
  "nome": "valor_invalido",
  "mensagem": "A URL do webhook deve usar o protocolo HTTPS"
}

OU

{
  "nome": "webhook_invalido",
  "mensagem": "A autenticação de TLS mútuo não está configurada na URL informada"
}

OU

{
  "nome": "webhook_invalido",
  "mensagem": "A URL informada está inacessível"
}

OU

{
  "nome": "webhook_invalido",
  "mensagem": "A URL informada atingiu o tempo limite de resposta"
}

OU

{
  "nome": "webhook_invalido",
  "mensagem": "A requisição na URL informada falhou com o erro: {{errno}}" //{{errno}} representa um código de erro do linux: https://man7.org/linux/man-pages/man3/errno.3.html Ex: ECONNRESET, EPIPE
}

OU

{
  "nome": "webhook_invalido",
  "mensagem": "A URL informada respondeu com o código HTTP {{httpStatus}}" // {{httpStatus}} representa o status HTTP que a url respondeu. Ex: 400, 403, 500.
}

OU

{
  "nome": "webhook_invalido",
  "mensagem": "Não foi possível receber uma resposta da URL informada"
}
```

  </TabItem>
  </Tabs>

</details>

</div>

<br/>

## Exibir informações do webhook Pix

Endpoint para recuperação de informações sobre o webhook pix.

   <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/webhook/<HighlightVar>:chave</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>webhook.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/webhooks/Consultar_webhook.md" />
          </div>
      </div>
      <br/> <br/>

<b>Respostas</b>

  <br/>

As respostas abaixo representam Sucesso(200) do consumo.
<Tabs
defaultValue="saida"
values={[
{ label: '🟢 200', value: 'saida', },
]}>
<TabItem value="saida">

```json
{
  "webhookUrl": "https://gn-pix-webhook.gerencianet.com.br/webhook/",
  "chave": "40a0932d-1918-4eee-845d-35a2da1690dc",
  "criacao": "2020-11-11T10:15:00.358Z"
}
```

  </TabItem>
  
  </Tabs>

</details>
</div>

<br/>

## Consultar lista de webhooks

Endpoint para consultar webhooks associados a chaves através de parâmetros como <code>início</code> e <code>fim</code>. Os atributos são inseridos como <em>query params</em>.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/webhook</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>webhook.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/webhooks/Listar_webhook.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Requisição</b></p>
  O trecho abaixo mostra como os parâmetros <code>inicio</code> e <code>fim</code> (obrigatórios) devem ser repassados na requisição.<br/><br/>
  <code>/v2/webhook/?inicio=2020-10-22T16:01:35Z&fim=2020-10-23T16:01:35Z</code>
    
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
]}>
<TabItem value="saida">

```json
{
  "parametros": {
    "inicio": "2021-01-22T16:01:35.000Z",
    "fim": "2022-12-30T16:01:35.000Z",
    "paginacao": {
      "paginaAtual": 0,
      "itensPorPagina": 100,
      "quantidadeDePaginas": 1,
      "quantidadeTotalDeItens": 5
    }
  },
  "webhooks": [
    {
      "webhookUrl": "https://seudominio.com.br/gn/webhook/",
      "chave": "40a0932d-1618-4eee-845d-35a2da1590dc",
      "criacao": "2021-05-05T19:52:13.000Z"
    },
    {
      "webhookUrl": "https://.projetosseudominio.seudominio.com.br/gn/webhook/",
      "chave": "40a0932d-1918-0eee-845d-35a2da1690dc",
      "criacao": "2021-10-18T14:42:41.000Z"
    },
    {
      "webhookUrl": "https://seudominio.com.br/webhook/?ignorar=",
      "chave": "40a0032d-1918-45ee-845d-3562da1690dc",
      "criacao": "2021-11-03T12:25:15.000Z"
    }
  ]
}
```

  </TabItem>
  
  <TabItem value="400">

```json
{
  "nome": "valor_invalido",
  "mensagem": "Campo de data fim deve ser maior ou igual ao campo de data inicio"
}
```

  </TabItem>
  </Tabs>

</details>
</div>

<br/>

## Cancelar o webhook Pix

Endpoint para cancelamento do webhook pix.

  <div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v2/webhook/<HighlightVar>:chave</HighlightVar></b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>webhook.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/webhooks/Cancelar_webhook.md" />
          </div>
      </div>
      <br/>

  <br/>

<b>Respostas</b>

  <br/>

A resposta abaixo representa Sucesso(204) do consumo.
<Tabs
defaultValue="saida"
values={[
{label: '🟢 204', value: 'saida', },
]}>
<TabItem value="saida">

```json
Webhook para notificações Pix foi cancelado.
```

  </TabItem>
  
  </Tabs>

</details>
</div>

<br/>

## Recebendo Callbacks

Esse serviço está protegido por uma camada de autenticação mTLS. Os callbacks são enviados pela Efí via <code>POST url-webhook-cadastrada​/pix</code> quando há uma alteração no status do Pix.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Informação</b>
</div>
<p>Para testar os endpoints de cobrança Pix Cob e Pix Cobv em ambiente de homologação, é possível simular todos os status retornados pela nossa API e webhook.</p>
<p>Cobranças com valor entre <b>R$ 0.01</b> à <b>R$ 10.00</b> são confirmadas, e você receberá a informação via Webhook.<br/>
Cobranças com valor acima de <b>R$ 10.00</b> permanecem ativas, sem confirmação, e não há webhook nesses casos.<br/></p>
</div>
<br/>

### Requisição

<div className="link-responsivo">
<div className="requisicao">
<p>Quando ocorre uma alteração no status de uma transação Pix associada à chave cadastrada, a Efí envia uma requisição <code>POST</code> para a URL de webhook que você definiu. Um objeto JSON (como os exemplos abaixo) será enviado ao seu servidor. Cada requisição de callback possui um timeout de 60 segundos, ou seja, é interrompida se não houver resposta em 60 segundos.</p>

<details  className="no_border">

  <summary>
    <b> Exemplos:</b>
</summary>
<div className="left">
  A seguir, veja alguns exemplos do objeto JSON enviado.
</div>
<div className="right">
  <Modal filename="/markdown/pix/webhooks/Recebendo_callbacks.md" />
</div>
<br/> <br/>
      <p></p>
<Tabs
    defaultValue="Exemplo-Pix-recebido"
    values={[
    { label: 'Recebido', value: 'Exemplo-Pix-recebido', },
    { label: 'Devolução', value: 'Exemplo-Devolução', },
    { label: 'Envio', value: 'Exemplo-Pix-enviado', },
  ]}>
    
  <TabItem value="Exemplo-Pix-recebido">

```json
// Pix recebido
{
  "pix": [
    {
      "endToEndId": "E1803615022211340s08793XPJ",
      "txid": "fc9a43k6ff384ryP5f41719",
      "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",
      "valor": "0.01",
      "horario": "2020-12-21T13:40:34.000Z",
      "infoPagador": "pagando o pix"
    }
  ]
}

// Pix recebido com dados do pagador
{
  "pix": [
    {
      "endToEndId": "E1803615022211340s08793XPJ",
      "txid": "fc9a43k6ff384ryP5f41719",
      "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",
      "valor": "0.01",
      "horario": "2020-12-21T13:40:34.000Z",
      "infoPagador": "pagando o pix",
      "gnExtras": {
        "pagador": {
          "nome": "Consultoria Efi",
          "cnpj": "09089356000118",
          "codigoBanco":"00416968"
        },
    }
  ]
}
// Pix recebido com Split
{
  "pix": [
    {
      "endToEndId": "E1803615022211340s08793XPJ",
      "txid": "fc9a43k6ff384ryP5f41719",
      "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",
      "valor": "0.01",
      "horario": "2020-12-21T13:40:34.000Z",
      "infoPagador": "Teste",
      "gnExtras": {
        "split": {
          "id": "f659e882b00440ef9f07538fb697a6b2",
          "revisao": 0
        }
      }
    }
  ]
}
// Pix recebido com tarifa informada
{
  "pix": [
    {
      "endToEndId": "E1803615022211340s08793XPJ",
      "txid": "fc9a43k6ff384ryP5f41719",
      "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",
      "valor": "0.10",
      "horario": "2020-12-21T13:40:34.000Z",
      "infoPagador": "pagando o pix",
      "gnExtras": {
        "tarifa": "0.01"
      }
    }
  ]
}
```

  </TabItem>
  <TabItem value="Exemplo-Devolução">

```json
// Devolução enviada
{
  "pix": [
    {
      "endToEndId": "E12345678202009091221syhgfgufg",
      "txid": "c3e0e7a4e7f1469a9f782d3d4999343c",
      "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",
      "valor": "110.00",
      "horario": "2020-09-09T20:15:00.358Z",
      "infoPagador": "0123456789",
      "devolucoes": [
        {
          "id": "123ABC",
          "rtrId": "D12345678202009091221abcdf098765",
          "valor": "110.00",
          "horario": {
            "solicitacao": "2020-09-09T20:15:00.358Z"
          },
          "status": "DEVOLVIDO"
        }
      ]
    }
  ]
}

// Devolução rejeitada
{
  ...
      "devolucoes": [
        {
          ...,
          "status": "NAO_REALIZADO",
          "motivo": "Saldo insuficiente para realizar a devolução."
        }
      ]
  ...
}
```

  </TabItem>

  <TabItem value="Exemplo-Pix-enviado">

```json
// Pix enviado
{
  "pix": [
    {
      "endToEndId": "E090893562021030PIf25a7868",
      "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",
      "tipo": "SOLICITACAO",
      "status": "REALIZADO",
      "valor": "0.01",
      "horario": "2021-03-04T20:39:47.000Z",
      "gnExtras": {
        "idEnvio": "123ABC"
      }
    }
  ]
}

// Pix rejeitado
{
  "pix": [
      {
          "endToEndId": "E090893562021030PIf25a7868",
          "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",
          "tipo": "SOLICITACAO",
          "status": "NAO_REALIZADO",
          "valor": "0.01",
          "horario": null,
          "infoPagador": "0123456789",
          "gnExtras": {
              "idEnvio": "123ABC",
              "erro": {
                  "codigo": "AC03",
                  "origem": "PSP do usuário recebedor",
                  "motivo": "Número da agência e/ou conta transacional do usuário recebedor inexistente ou inválido"
              }
          }
      }
  ]
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
