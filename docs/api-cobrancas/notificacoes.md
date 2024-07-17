---
id: notificacoes
title: Notificações
hide_title: true
sidebar_label: Notificações
---
<h1 className="titulo">Notificações</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Modal from "@site/src/scripts/modal.js" 
import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Saiba mais sobre como funciona o sistema de Notificações da Efí
</div>

<br/>
<br/>

## Recebendo as notificações

As notificações permitem que você receba informações quando o status de uma transação for alterado, como quando um boleto for pago, por exemplo.

Quando uma transação possui uma URL de notificação cadastrada (atributo <code>notification_url</code>), a Efí dispara um <code>POST</code> para esta URL a cada mudança no status da cobrança. Essa notificação possui um token específico, que será o mesmo durante todo o "ciclo de alterações" da transação. Por exemplo:

- Foi gerada uma cobrança. Seu sistema recebe um <code>POST</code> da Efí contendo o token de notificação <code>09027955-5e06-4ff0-a9c7-46b47b8f1b27</code> e informando o status da transação - neste caso, <code>new</code>;

- Essa mesma cobrança teve o método de pagamento definido, então seu status mudou para <code>waiting</code> e, em seguida, enviaremos uma nova notificação para seu sistema contendo o mesmo token <code>09027955-5e06-4ff0-a9c7-46b47b8f1b27</code>;

- Posteriormente, essa mesma cobrança teve o pagamento confirmado, então, o status muda para <code>paid</code> e novamente seu sistema recebe uma notificação, ainda com o mesmo token <code>09027955-5e06-4ff0-a9c7-46b47b8f1b27</code>.

<div className="figure"><img src="/img/notificacao.png" alt="banner"/><p>Exemplo de como simular a requisição de envio do token via Postman</p></div>

Um <code>POST</code> vai conter apenas uma informação: um token de notificação. Esse token é enviado quando ocorre uma alteração no status da cobrança. Para receber essas notificações, você precisa cadastrar uma URL de notificação na cobrança e prepará-la para ler o token na variável <code>$_POST['notification']</code>.

Por segurança, as informações da transação serão enviadas somente quando seu sistema consultá-las utilizando o token de notificação recebido.

A qualquer momento que o integrador consultar esse token de notificação, irá obter as informações mais atuais da cobrança, todas ordenadas de acordo com os acontecimentos. Toda alteração em status gera uma notificação.

Na aba <code>Histórico de Notificações</code> é possível acompanhar todos os <code>POST</code> de notificação enviados pelo nosso sistema. Quando a pessoa integradora consulta o token enviado, consideramos que a notificação foi recebida com sucesso. Caso não seja consultado, tentaremos enviar novamente a notificação.

Para obter detalhes sobre a implementação e os procedimentos necessários, você pode encontrar mais informações em nossa documentação e instalar uma de nossas bibliotecas em seu servidor para executar os códigos de exemplo.


<br/>

### Definindo a URL para recebimento de notificações

Você poderá definir uma URL que receberá as notificações durante a criação da cobrança (<code>createCharge</code>) ou posteriormente (<code>updateChargeMetadata</code>).

Uma transação gerada por meio da API pode passar por diversas alterações de status conforme interações do pagador, da pessoa integradora ou das operadoras e instituições bancárias envolvidas. Para acompanhar essas mudanças, é necessário preparar seu sistema para receber as notificações enviadas pela Efí.

Ao definir os parâmetros para a criação da transação, você pode informar uma <a target="_blank" href="https://gnetbr.com/ryeGKbdl_D">URL de notificação</a>. Essa URL receberá um *token* sempre que ocorrer uma alteração de status na transação. Com esse token, sua aplicação poderá consultar nosso webservice para obter o status atualizado da transação.

<Tabs
  defaultValue="code"
  values={[
    { label: 'Código: definir URL de notificação', value: 'code', },
  ]
}>

<TabItem value="code">

```php
$options = [
  'client_id' => $clientId,
  'client_secret' => $clientSecret,
  'sandbox' => true
],

$metadata = array('notification_url'=>'http://sua_url_aqui');

$body = [
  'items' => $items,
  'metadata' => $metadata
];

try {
  $api = new Efí($options);
  $charge = $api->createCharge([], $body);
}
```

</TabItem>
</Tabs>

<br/>


<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>DICA PARA TESTAR AS NOTIFICAÇÕES (CALLBACKS) FACILMENTE COM O WEBHOOKINBOX</b>
</div>
<p>Para testar as notificações, sugerimos a utilização do <a href="http://webhookinbox.com/" target="_blank" title="Link Externo">WebhookInbox</a>, um serviço gratuito para inspecionar requisições HTTP. Com ele, você pode criar uma URL temporária para utilizar no atributo <code>notification_url</code>, permitindo visualizar de forma fácil e amigável os POSTs enviados para sua aplicação. Para gerar a URL de recebimento da requisição, basta acessar o <a href="http://webhookinbox.com/" target="_blank" title="Link Externo">WebhookInbox</a> e clicar em <code>Create An Inbox</code>.</p>
<p>O WebhookInbox irá gravar as solicitações HTTP e permitir inspecioná-las para verificar <i>Headers</i> e <i>Body</i> das requisições. Dessa forma, você poderá começar a desenvolver sua integração com a Efí e testar os recursos de <a href="/docs/api-cobrancas/notificacoes" title="Link Interno">URL de notificação (callbacks)</a> mesmo se ainda não tiver uma URL pública disponível.</p>
</div>


<br/>

Caso você não cadastre uma URL no momento de criação da transação, poderá fazê-lo através do método de alteração de metadata, por meio de requisição <code>PUT</code> para a rota <code>/v1/charge/:id/metadata</code>.

O processo de notificação é realizado em duas etapas para garantir a segurança dos dados informados:

1. Na primeira etapa, seu sistema é avisado que houve uma alteração relacionada a uma transação (o webservice envia um <code>POST</code> com um *token* pra você);

2. Na segunda etapa, seu sistema consulta - passando o *token* que você recebeu como parâmetro para a Efí para saber detalhes sobre essa alteração.


### Consultando detalhes de uma notificação
A Efí considera que uma notificação foi realizada com sucesso apenas após essa consulta. Enquanto seu sistema não consultar os detalhes da notificação, ele continuará sendo notificado:

<Tabs
  defaultValue="php"
  values={[
    { label: 'PHP', value: 'php', },
    { label: 'Python', value: 'python', },
    { label: 'NodeJS', value: 'js', },
    { label: '.NET', value: 'c', },
    { label: 'Java', value: 'java', },
    { label: 'GO', value: 'go', },
    { label: 'Ruby', value: 'ruby', },
    { label: 'Delphi', value: 'delphi', },
  ]
}>

<TabItem value="php">

```php
<?php
 
require __DIR__.'/../../vendor/autoload.php'; // caminho relacionado a SDK
 
use Efí\Exception\EfíException;
use Efí\Efí;
 
$clientId = 'informe_seu_client_id'; // insira seu Client_Id, conforme o ambiente (Des ou Prod)
$clientSecret = 'informe_seu_client_secret'; // insira seu Client_Secret, conforme o ambiente (Des ou Prod)
 
$options = [
  'client_id' => $clientId,
  'client_secret' => $clientSecret,
  'sandbox' => true // altere conforme o ambiente (true = desenvolvimento e false = producao)
];
 
/*
* Este token será recebido em sua variável que representa os parâmetros do POST
* Ex.: $_POST['notification']
*/
$token = $_POST["notification"];
 
$params = [
  'token' => $token
];
 
try {
    $api = new Efí($options);
    $chargeNotification = $api->getNotification($params, []);
  // Para identificar o status atual da sua transação você deverá contar o número de situações contidas no array, pois a última posição guarda sempre o último status. Veja na um modelo de respostas na seção "Exemplos de respostas" abaixo.
  
  // Veja abaixo como acessar o ID e a String referente ao último status da transação.
    
    // Conta o tamanho do array data (que armazena o resultado)
    $i = count($chargeNotification["data"]);
    // Pega o último Object chargeStatus
    $ultimoStatus = $chargeNotification["data"][$i-1];
    // Acessando o array Status
    $status = $ultimoStatus["status"];
    // Obtendo o ID da transação    
    $charge_id = $ultimoStatus["identifiers"]["charge_id"];
    // Obtendo a String do status atual
    $statusAtual = $status["current"];
    
    // Com estas informações, você poderá consultar sua base de dados e atualizar o status da transação especifica, uma vez que você possui o "charge_id" e a String do STATUS
  
    echo "O id da transação é: ".$charge_id." seu novo status é: ".$statusAtual;
 
    //print_r($chargeNotification);
} catch (EfíException $e) {
    print_r($e->code);
    print_r($e->error);
    print_r($e->errorDescription);
} catch (Exception $e) {
    print_r($e->getMessage());
}
```

</TabItem>
<TabItem value="python">

```py
from gerencianet import Efí
 
options = {
    'client_id': 'client_id',
    'client_secret': 'client_secret',
    'sandbox': True
}
 
gn = Efí(options)
 
params = {
    'token': notification
}
 
response =  gn.get_notification(params=params)
```

</TabItem>
<TabItem value="js">

```js
'use strict';
 
var Efí = require('gn-api-sdk-node');
 
var clientId = 'your_client_id';
var clientSecret = 'your_client_secret';
 
var options = {
  client_id: clientId,
  client_secret: clientSecret,
  sandbox: true
}
 
/*
* Este token será recebido em sua variável que representa os parâmetros do POST
* Ex.: req.body['notification']
*/
var token = 'token_da_notificacao';
 
var params = {
  token: token
}
 
var gerencianet = new Efí(options);
 
gerencianet
  .getNotification(params)
  .then(console.log)
  .catch(console.log)
  .done();
```

</TabItem>
<TabItem value="c">

```js
// supposing that this is a post route
public void NotificationRoute(notification) {
  var param = new {
      token = notification
    };
 
    dynamic endpoints = new Endpoints("client_id", "client_secret", true);
    response = endpoints.GetNotification(param);
}
```

</TabItem>
<TabItem value="java">

```java
/* Para que a SDK Java funcione corretamente, é necessário que a instanciação do módulo seja feita através da criação de um objeto do tipo Efí.

Sempre que quisermos chamar uma função da API, basta invocar o método call do objeto Efí, passando como parâmetro o nome do método, os parâmetros da requisição (sempre será um HashMap<String, String>), e o "body", que consiste nas propriedades a serem passadas como argumento na chamada de um função da SDK. O "body" pode ser declarado de duas formas: um JSONObject ou um Map<String, Object>.

Esta estrutura é necessária para representar o corpo da requisição http que é enviada à um determinado endpoint. Se o "body" for um JSONObject, o retorno do método call será um JSONObject, se for um Map<String, Object>, o retorno do método call será um Map<String, Object>

A seguir, disponibilizamos links de nosso Github mostrando duas formas diferentes de retorno: JSONObject
e Map<String, Object>


JSONObject

https://github.com/efipay/sdk-java-examples-apis-efi/blob/main/src/main/java/br/com/efi/charges/notification/json/GetNotification.java


Map<String, Object>

https://github.com/efipay/sdk-java-examples-apis-efi/blob/main/src/main/java/br/com/efi/charges/notification/map/GetNotification.java

*/
```

</TabItem>
<TabItem value="go">

```go
// No código de exemplo de uso da SDK de Go, definimos as credenciais de acesso à API (Client_Id e Client_Secret) e o ambiente a ser usado (sandbox como 'true' ou 'false') dentro de um arquivo específico (configs.go), que está localizado no diretório "_examples/configs". Essas credenciais são exportadas através da variável 'Credentials'.

package main

import (
  "fmt"
  "github.com/efipay/sdk-go-apis-efi/src/efipay"
	"github.com/efipay/sdk-go-apis-efi/examples/configs"
)

func main(){
  
  credentials := configs.Credentials
  gn := gerencianet.NewEfí(credentials)

  res, err := gn.GetNotification("token") // subsituir pelo token recebido

  if err != nil {
    fmt.Println(err)
  } else {
    fmt.Println(res)
  }
}
```

</TabItem>
<TabItem value="ruby">

```js
require "gerencianet"
 
options = {
  client_id: "client_id",
  client_secret: "client_secret",
  sandbox: true
}
 
# Este token será recebido em sua variável que representa os parâmetros do POST
# Ex.: req.body['notification']
 
params = {
  token: "token_da_notificacao"
}
 
gerencianet = Efí.new(options)
gerencianet.get_notification(params: params)
```

</TabItem>
<TabItem value="delphi">

```json
interface
function GetNotifications(Token: Integer): String;

implementation
uses
  uGerenciaNetClientUtilities, uGerenciaClient;

function GetNotifications(Token: Integer): String;
var
  Params: String;
begin
  EnableService( 'GerenciaNet.dll' ); 
    ConfigureService( ToPAnsiChar( 'client_id' ),ToPAnsiChar( 'client_secret' ),'sandbox','config.json',''); 
    GerenciaNetAuthorize();

    Params := CreateRequestParams( [ 'token='+Token ] ).Text;
    Result := ExecuteGerenciaNetRequest( 'getNotification',Params,'','' );
end;
```
</TabItem>
</Tabs>

<br/>

#### Exemplos de respostas:
A seguir, alguns exemplos de respostas de notificações para transações, assinaturas, carnês e link de pagamento:

<Tabs
  defaultValue="transacao"
  values={[
    { label: '🟢 200 (Transação)', value: 'transacao', },
    { label: '🟢 200 (Assinatura)', value: 'assinatura', },
    { label: '🟢 200 (Carnê)', value: 'carne', },
    { label: '🟢 200 (Link de Pagamento)', value: 'link', },
  ]
}>

<TabItem value="transacao">

```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": [
        {
            "created_at": "2022-02-20 09:12:23", // data da alteração do status do array "id 1"
            "custom_id": null,
            "id": 1, // indicador de ordem, iniciado em 1. É incrementado para cada mudança de um token de notificação. Isso é útil se você precisar manter o controle sobre qual alteração você já processou
            "identifiers": { // identificadores que representam a cobrança
                "charge_id": 24342333
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "charge" // tipo da cobrança que sofreu a alteração (neste caso, "charge" quer dizer que a alteração ocorreu em uma transação)
        },
        {
            "created_at": "2022-02-20 09:12:23", // data da alteração do status do array "id 2"
            "custom_id": null, // identificador da cobrança definido pelo integrador, se existir
            "id": 2,
            "identifiers": { // identificadores que representam a cobrança
                "charge_id": 24342333
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "charge" // tipo da cobrança que sofreu a alteração (neste caso, "charge" quer dizer que a alteração ocorreu em uma transação)
        },
        {
            "created_at": "2022-03-31 09:14:34", // data da alteração do status do array "id 3"
            "custom_id": null, // identificador da cobrança definido pelo integrador, se existir
            "id": 3,
            "identifiers": { // identificadores que representam a cobrança
                "charge_id": 24342333
            },
            "status": {
                "current": "unpaid",
                "previous": "waiting"
            },
            "type": "charge" // tipo da cobrança que sofreu a alteração (neste caso, "charge" quer dizer que a alteração ocorreu em uma transação)
        },
        {
            "created_at": "2022-04-03 07:33:30", // data da alteração do status do array "id 4"
            "custom_id": null, // identificador da cobrança definido pelo integrador, se existir
            "id": 4,
            "identifiers": { // identificadores que representam a cobrança
                "charge_id": 24342333
            },
            "received_by_bank_at": "2022-04-02", // data do pagamento da cobrança
            "status": {
                "current": "paid", // status ATUAL da transação: paid ("pago")
                "previous": "unpaid" // status ANTERIOR da transação: unpaid ("não pago")
            },
            "type": "charge", // tipo da cobrança que sofreu a alteração (neste caso, "charge" quer dizer que a alteração ocorreu em uma transação)
            "value": 6990 // valor que acompanha a alteração. Esta tag existirá quando a alteração for uma confirmação de pagamento, informando o valor pago que foi confirmado
        }
    ]
}


// Todas as transações possuem status, que representa a situação dessa transação. Confira a relação completa para tratativas em seu sistema
```

</TabItem>
<TabItem value="assinatura">

```json
{
  "code": 200,
  "data": [
    {
      "id": 1,
      "type": "subscription",
      "custom_id": null,
      "status": {
        "current": "new",
        "previous": null
      },
      "identifiers": {
        "subscription_id": 11976
      },
      "created_at": "2021-07-20 00:20:16"
    },
    {
      "id": 2,
      "type": "subscription_charge",
      "custom_id": null,
      "status": {
        "current": "new",
        "previous": null
      },
      "identifiers": {
        "subscription_id": 11976,
        "charge_id": 2396478
      },
      "created_at": "2021-07-20 00:20:16"
    },
    {
      "id": 3,
      "type": "subscription_charge",
      "custom_id": null,
      "status": {
        "current": "waiting",
        "previous": "new"
      },
      "identifiers": {
        "subscription_id": 11976,
        "charge_id": 2396478
      },
      "created_at": "2021-07-20 00:20:27"
    },
    {
      "id": 4,
      "type": "subscription",
      "custom_id": null,
      "status": {
        "current": "active",
        "previous": "new"
      },
      "identifiers": {
        "subscription_id": 11976
      },
      "created_at": "2021-07-20 00:20:28"
    },
    {
      "id": 5,
      "type": "subscription_charge",
      "custom_id": null,
      "status": {
        "current": "paid",
        "previous": "waiting"
      },
      "identifiers": {
        "subscription_id": 11976,
        "charge_id": 2396478
      },
      "created_at": "2021-07-22 03:19:17",
      "value": 12390,
      "received_by_bank_at": "2022-03-28" // data do pagamento da cobrança
    },
    {
      "id": 6,
      "type": "subscription_charge",
      "custom_id": null,
      "status": {
        "current": "new",
        "previous": null
      },
      "identifiers": {
        "subscription_id": 11976,
        "charge_id": 2688053
      },
      "created_at": "2021-08-20 00:30:09"
    },
    {
      "id": 7,
      "type": "subscription_charge",
      "custom_id": null,
      "status": {
        "current": "waiting",
        "previous": "new"
      },
      "identifiers": {
        "subscription_id": 11976,
        "charge_id": 2688053
      },
      "created_at": "2021-08-20 00:30:09"
    },
    {
      "id": 8,
      "type": "subscription_charge",
      "custom_id": null,
      "status": {
        "current": "unpaid",
        "previous": "waiting"
      },
      "identifiers": {
        "subscription_id": 11976,
        "charge_id": 2688053
      },
      "created_at": "2021-08-25 01:32:38"
    },
    {
      "id": 9,
      "type": "subscription",
      "custom_id": null,
      "status": {
        "current": "canceled",
        "previous": "active"
      },
      "identifiers": {
        "subscription_id": 11976
      },
      "created_at": "2021-08-28 23:26:58"
    }
  ]
}
```

</TabItem>
<TabItem value="carne">

```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": [
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 1, // indicador de ordem, iniciado em 1. É incrementado para cada mudança de um token de notificação. Isso é útil se você precisar manter o controle sobre qual alteração você já processou
            "identifiers": { // identificadores que representam a cobrança
                "carnet_id": 2512240 // identificador do carnê
            },
            "status": {
                "current": "up_to_date", // status do carnê (ou seja, carnê encontra-se em dia, não há nenhuma parcela inadimplente. Assim que o carnê é criado, ele também recebe este status up_to_date)
                "previous": null
            },
            "type": "carnet" // tipo da cobrança que sofreu a alteração (neste caso, "carnet" quer dizer que a alteração ocorreu em um carnê)
        },
        {
            "created_at": "2022-03-22 09:38:36", // data da alteração do status do array "id 1"
            "custom_id": null,
            "id": 2,
            "identifiers": {
                "carnet_id": 2512240, // identificador do carnê
                "charge_id": 27757742 // identificador da parcela
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge" // alteração ocorreu em uma parcela de carnê
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 3,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757742
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 4,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757743
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 5,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757744
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 6,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757745
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 7,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757746
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 8,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757747
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 9,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757748
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 10,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757749
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 11,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757750
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 12,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757751
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 13,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757752
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 14,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757753
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 15,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757743
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 16,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757744
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 17,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757745
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 18,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757746
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 19,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757747
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 20,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757748
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 21,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757749
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 22,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757750
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 23,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757751
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 24,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757752
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 25,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757753
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "carnet_charge"
        },
        {
            "created_at": "2022-04-03 07:34:22",
            "custom_id": null,
            "id": 26,
            "identifiers": {
                "carnet_id": 2512240,
                "charge_id": 27757742
            },
            "received_by_bank_at": "2022-04-02", // data do pagamento da cobrança
            "status": {
                "current": "paid", // status ATUAL da transação: paid ("pago")
                "previous": "waiting" // status ANTERIOR da transação: waiting ("aguardando")
            },
            "type": "carnet_charge",
            "value": 6250 // valor que acompanha a alteração. Esta tag existirá quando a alteração for uma confirmação de pagamento, informando o valor pago que foi confirmado
        }
    ]
}


// neste exemplo, um novo status do carnê poderia ser aplicado e, neste caso, seria incrementada mais uma posição no array. Por exemplo: o carnê pode ter o status alterado para "unpaid" se identificarmos a inadimplência de pelo menos uma parcela, assim, você receberá a notificação com uma nova posição do array com "type": "carnet", indicando que tal status refere-se ao carnê, e não a alguma parcela do carnê.

```

</TabItem>
<TabItem value="link">

```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": [
        {
            "created_at": "2022-02-20 09:12:23", // data da alteração do status do array "id 1"
            "custom_id": null,
            "id": 1, // indicador de ordem, iniciado em 1. É incrementado para cada mudança de um token de notificação. Isso é útil se você precisar manter o controle sobre qual alteração você já processou
            "identifiers": { // identificadores que representam a cobrança
                "charge_id": 24342333
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "charge" // tipo da cobrança que sofreu a alteração (neste caso, "charge" quer dizer que a alteração ocorreu em uma transação)
        },
        {
            "created_at": "2022-02-20 09:12:23", // data da alteração do status do array "id 2"
            "custom_id": null, // identificador da cobrança definido pelo integrador, se existir
            "id": 2,
            "identifiers": { // identificadores que representam a cobrança
                "charge_id": 24342333
            },
            "status": {
                "current": "link",
                "previous": "new"
            },
            "type": "charge" // tipo da cobrança que sofreu a alteração (neste caso, "charge" quer dizer que a alteração ocorreu em uma transação)
        },
        {
            "created_at": "2022-04-03 07:33:30", // data da alteração do status do array "id 3"
            "custom_id": null, // identificador da cobrança definido pelo integrador, se existir
            "id": 3,
            "identifiers": { // identificadores que representam a cobrança
                "charge_id": 24342333
            },
            "received_by_bank_at": "2022-04-02", // data do pagamento da cobrança
            "status": {
                "current": "paid", // status ATUAL da transação: paid ("pago")
                "previous": "link" // status ANTERIOR da transação: link ("link de pagamento")
            },
            "type": "charge", // tipo da cobrança que sofreu a alteração (neste caso, "charge" quer dizer que a alteração ocorreu em uma transação)
            "value": 6990 // valor que acompanha a alteração. Esta tag existirá quando a alteração for uma confirmação de pagamento, informando o valor pago que foi confirmado
        }
    ]
}


```

</TabItem>
</Tabs>

<br/>

<div className="admonition admonition_tip">
  <div>
    <img src="/img/lightbulb-on-green.svg"/> <b>Relação de todos os possíveis status de transações, carnês e assinaturas</b>
  </div>
  <p>Todas as transações, carnês e assinaturas possuem status que representam suas "situações". Portanto, é importante conhecer os possíveis status na API para fornecer as devidas tratativas em seu sistema.</p>

</div>


<br/>

<div className="admonition admonition_tip">
  <div>
    <img src="/img/lightbulb-on-green.svg"/> <b>Ordem das notificações (callbacks)</b>
  </div>
<p>Em resumo, a ordem das notificações sempre segue a sequência dos acontecimentos.</p>
<p><b>Por exemplo:</b> no caso de carnês, se a parcela 1 teve seu pagamento confirmado primeiro, depois a parcela 2 e, por fim, a parcela 3. Nessa situação, teremos um  <i>array</i> de 3 posições onde a primeira apresenta a confirmação da parcela 1, a segunda a confirmação da parcela 2 e a última a confirmação da parcela 3.</p>
<p>Para saber a situação mais recente da parcela, você pode percorrer o <i>array</i> e verificar até qual "acontecimento" foi sincronizado, pois uma notificação pode trazer 2 ou 3 atualizações, por exemplo. Portanto, não podemos presumir que a última posição do <i>array</i> é sempre a que precisa ser sincronizada.</p>
</div>

<br/>

#### Explicação dos parâmetros de resposta:

A resposta de uma notificação será sempre um *array* contendo as mudanças que ocorreram em uma transação comum, assinatura, carnê, transação de assinatura ou transação de carnê nos últimos 6 meses.

Note que notificações relacionadas a assinatura e carnê podem ser acompanhadas também de alterações em suas transações (ou parcelas).


<div className="payment">
<details className="col-100">
  <summary>
<b>Tags de resposta</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Aqui você encontra uma breve descrição sobre os atributos presentes nas notificações.
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/notification/notification.md" />
          </div>
          <br/>
      </div>
<br/>

</details>
</div>

<br/>

### Status da fila de notificações (callback)

A Efí notifica os sistemas integrados a cada mudança no status de uma determinada cobrança por meio de sua URL de notificação associada.

As notificações são processadas e enviadas sempre através de uma fila de envios. Caso o callback seja rejeitado pelo sistema de destino, ele automaticamente retorna para a fila e é reagendado para uma nova tentativa de entrega. Os callbacks são dinâmicos e podem ocorrer ao longo de todo o dia.

Pensando em oferecer novos meios de consultar o processamento desta fila, a Efí disponibiliza uma tela que permite consultar o status de consumo da fila de notificações (callbacks) já processados. Desta forma, caso o cliente esteja em dúvidas se um callback já foi enviado ou não, poderá acompanhar o processamento diário desta fila.

Para consultar o status e o processamento da fila, confira o <a href="https://sejaefi.com.br/confirmacoes" target="_blank" title="Link Externo">status das confirmações de pagamentos - Efí</a>.


### Vídeos: Notificações

Pensando em oferecer novos meios de transmitir informações, a Efí disponibiliza o vídeo a seguir com o objetivo de explicar, de maneira clara e objetiva, como Configurar sua URL de notificação para recebimento de *callbacks*.

#### Configurando sua URL de notificações (integração API Efí)

<div className = "video" >
<iframe width="560" height="315" src="https://www.youtube.com/embed/wKAgmXpWQQk" title="[Módulo 5.8]  Aula 1 - Configuração da URL de notificações | Curso API Gerencianet 2.0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br/>
<br/>


### Endereços IPs da Efí para entrega dos callbacks

Algumas aplicações e serviços podem filtrar nossas comunicações por meio dos nossos endereços de IP. Por isso, recomendamos conferir através da lista dos endereços utilizados pela Efí. <a href="https://sejaefi.com.br/central-de-ajuda/api/quais-enderecos-de-ip-gerencianet-utiliza#conteudo" target="_blank" title="Link Externo">Confira na íntegra em nossa FAQ</a>.


### Próximos Passos

Agora que você implementou o recurso de URL de notificação, pode conferir [mais detalhes](#entendendo-o-fluxo-das-notificações) sobre como interpretar os cenários pertinentes a notificações (callbacks), como em situações em que uma cobrança em seu sistema não foi baixada, ou quando o callback foi disparado para uma URL que você definiu previamente mas que não é mais válida, entre outros casos.


<br/>

## Entendendo o fluxo das notificações

Esta seção tem como objetivo apresentar o <code>Histórico de Notificações</code>. Este recurso está disponível na API de sua conta Efí e permite visualizar os POSTs que a Efí dispara para a URL de notificação definida pela pessoa integradora. Essas informações são enviadas em formato de POST e contêm apenas um token de notificação.

Ao concluir essa leitura, você poderá entender melhor os diferentes cenários relacionados às notificações (callbacks). Isso inclui situações em que uma cobrança em seu sistema não foi processada corretamente, ou quando o callback foi enviado para uma URL que você havia definido anteriormente, mas essa URL não é mais válida, entre outros casos.


### Conhecendo mais sobre o fluxo de notificações

O fato de receber um POST bem-sucedido *(código 200)* na sua URL de notificação não garante que o processo tenha sido concluído corretamente. Após receber o POST, é importante que você venha aqui e consulte as informações.


<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>IMPORTANTE</b>
  </div>
 <p> O POST que a Efí envia para sua URL <b>não contém as informações da cobrança, apenas o token de notificação.</b> Todas as informações sobre a cobrança em questão serão fornecidas quando você acessar o endpoint <code>GET /notification/:token</code>.</p>

</div>

<br/>

Na verdade, o processo funciona como uma "via de mão dupla". Isso significa que a Efí envia um POST para a sua URL de notificação sempre que há uma mudança no status da cobrança. Em seguida, o seu sistema, com o token de notificação recebido, faz uma requisição para consumir informações através do endpoint GET /notification/:token, onde ":token" é o token de notificação contido no POST enviado.

Dessa forma, podemos considerar que:

- Sub-aba <code>Histórico de Notificações</code> : indica os POSTs que a Efí dispara para a URL de notificação cadastrada.

- Sub-aba <code>Histórico de Requisições</code> : ao receber com sucesso em sua URL o POST da Efí, seu sistema consultará o endpoint <code>GET /notification/:token</code>.


<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/notification/<HighlightVar>:token</HighlightVar></b>  
  </summary>
      <div className="get-div"> 
          <div className="left">
            Retorna o histórico de notificações enviados a uma determinada transação.
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/notification/token.md" />
          </div>
      </div>
       <br/> <br/>

 A seguir, um JSON simples que pode ser utilizado para retornar o histórico de notificações enviadas a uma determinada transação. Além disso, é possível observar a saída prevista. Lembrando que também é preciso informar o parâmetro de entrada "token" da notificação desejada:


  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'Dados de Entrada', value: 'entrada', },
       ]}>
       
  <TabItem value="entrada">

  ```json
Parâmetro de entrada: informe o "token" da notificação desejada
  ``` 
 </TabItem>
  </Tabs>

  <br/>

  <b>Respostas</b>

  A resposta abaixo representa Sucesso(200) do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200,
    "data": [
      {
        "id": 1,
        "type": "carnet",
        "custom_id": "25452545",
        "status": {
          "current": "active",
          "previous": null
        },
        "identifiers": {
          "carnet_id": 8647
        },
        "created_at": "2016-06-28 13:28:21"
      },
      {
        "id": 2,
        "type": "carnet_charge",
        "custom_id": "25452545",
        "status": {
          "current": "canceled",
          "previous": "waiting"
        },
        "identifiers": {
          "carnet_id": 8647,
          "charge_id": 70712
        },
        "created_at": "2016-06-28 14:21:37"
      }
    ]
}
  ``` 
  </TabItem>
 
  </Tabs>


</details>
</div> 

O fluxo é determinado pela seguinte ordem:

1. A Efí dispara o POST contendo o token de notificação para a URL de notificação cadastrada sempre que houver uma mudança no status da cobrança. Detalhes podem ser observados na sub-aba <code>Histórico de Notificações</code>;

2. Sua URL recebeu o POST, fazendo com que seu sistema envie uma requisição <code>GET</code> para a rota <code>/notification/:token</code>, em que <code>:token</code> será o token de notificação que enviamos para você. Você pode visualizar esta requisição na sub-aba <code>Histórico de Requisições</code>.

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>IMPORTANTE</b>
  </div>  
  <p>Se a pessoa integradora consulta o token enviado, consideramos que a notificação foi realizada com sucesso. Caso não consulte, tentamos novamente por até 3 dias.</p>
  <p>Ou seja, se houver uma requisição ao endpoint <code>GET /notification/:token</code>, entendemos que você recebeu o POST com o token de notificação e que o consultou, recebendo como resposta todos os dados informativos sobre a alteração sofrida pela cobrança, como o status anterior e atual da cobrança.</p>
  <p>Esta informação pode ser visualizada na sub-aba <code>Histórico de Requisições</code>, buscando pelo token de notificação em questão.</p>
</div>

<br/>

Vamos a alguns exemplos:

### Exemplo 1: Notificação com "Sucesso (200)"

Pense em um cenário em que a pessoa integradora recebeu com sucesso o POST enviado pela Efí em sua URL de notificação. Em seguida, ela consulta nosso webservice para obter o conteúdo desse token de notificação.

Para que você possa analisar, siga estes passos:

1. Acesse a sub-aba `Histórico de Notificações` para ver os POSTs recebidos na sua URL de notificação;
2. Com o token de notificação da cobrança que você deseja verificar, acesse a sub-aba `Histórico de Requisições`.
3. Pesquise pelo token mencionado e, ao encontrá-lo, clique no ícone de um "olho" na última coluna.
4. Dessa forma, você poderá visualizar todas as informações relacionadas à cobrança que o seu sistema consultou (leu)


<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>INFORMAÇÃO</b>
  </div>
  <p>Na sub-aba <code>Histórico de Notificações</code>, a exibição da resposta <code>Sucesso (200)</code> indica apenas que o POST foi enviado com sucesso para sua URL de notificação, mas não garante que o seu sistema foi capaz de ler e gravar as informações do seu lado. Para isso, é necessário acessar a sub-aba <code>Histórico de Requisições</code> e localizar a linha contendo o consumo do <code>GET /notification/:token</code>.</p>
</div>
<br/>

Resumo das etapas seguidas:

* Efí enviou com sucesso uma notificação (POST) para sua URL de notificação (verifique na sub-aba ``Histórico de Notificações``);
   * Este POST contém apenas o token de notificação, que é ``7dd52fed-3d0a-42c8-b3fb-fc24f1d75303``;

* Assim que a URL recebeu a notificação, seu sistema enviou uma requisição ``GET`` para a rota ``/notification/7dd52fed-3d0a-42c8-b3fb-fc24f1d75303`` (verifique na sub-aba ``Histórico de Requisições``);
   * Neste momento, seu sistema recebeu como resposta um JSON com todos os dados informativos sobre a alteração ocorrida na cobrança;

* **Para este exemplo, todo o fluxo foi realizado com sucesso**: disparamos a notificação contendo o token de notificação e, em seguida, seu sistema consultou nosso webservice para saber (ler) as informações da referida cobrança.   

<br/>

### Exemplo 2: Notificação com "Falha (404)"

Pense em cenário no qual a Efí efetuou o envio do POST (notificação), mas em <code>Histórico de Notificações</code> está sendo exibida a resposta <code>Falha (404)</code>.

Esta <code>Falha (404)</code> indica que o recurso requisitado não foi encontrado. Você deve certificar que sua URL está correta, pois tentamos entregar a notificação na URL que você nos forneceu, mas o endereço não foi localizado.

Portanto, como o seu sistema não conseguiu receber o nosso callback, você **não verá** o consumo do <code>GET /notification/:token</code> na sub-aba <code>Histórico de Requisições</code>.



**Soluções Sugeridas:**

* Você poderá ajustar o caminho da URL no lado de seu servidor;

* Atualizar a URL de notificação para o novo (e correto) endereço. Para isso, você poderá enviar requisições ``PUT`` para a rota adequada da API, atentando-se ao limite de até 7.500 requisições a cada 24 hs para este endpoint.

   * Após alterar a URL de notificação, vamos continuar disparando a notificação da cobrança, mas agora para a nova URL fornecida, desde que nosso primeiro envio não tenha sido há mais de 3 dias. Neste caso, você poderá reenviar os callbacks da API <a href="https://sejaefi.com.br/central-de-ajuda/api/fazer-o-reenvio-de-callback-na-api#conteudo" target="_blank" title="Link Externo">seguindo orientações de nossa FAQ</a>.


<br/>

### Exemplo 3: Notificação com "Falha (301)" ou "Falha (302)"

Agora, um cenário no qual a Efí efetuou o envio do POST (notificação), mas em ``Histórico de Notificações`` está sendo exibida a resposta ``Falha (301)`` ou ``Falha (302)``.

Estas situações ocorrem quando existe um redirecionamento permanente (301) ou temporário (302) em seu servidor, afetando especificamente a entrega da notificação para a URL de notificação que você definiu previamente. Alguns exemplos comuns de quando isto ocorre:

* Você definiu sua URL de notificação como ``http://www.meusite.com.br``, mas posteriormente instalou HTTPS/SSL em seu servidor e seu endereço ficou como ``https://www.meusite.com.br``;

* Sua URL de notificação era ``https://www.meusite.com.br``, mas posteriormente você criou regras em seu servidor (via htaccess, web.config, etc) e o endereço passou a responder apenas como ``https://meusite.com.br``.


**Soluções Sugeridas:**

* Ajustar melhor a regra do redirecionamento 301 e/ou 302 em seu servidor;

* Atualizar a URL de notificação para o novo (e correto) endereço. Para isso, você poderá enviar requisições ``PUT`` para a ``rota adequada da API``, atentando-se ao limite de até 7.500 requisições a cada 24 hs para este endpoint.

   * Após alterar a URL de notificação, vamos continuar disparando a notificação da cobrança, mas agora para a nova URL fornecida, desde que nosso primeiro envio não tenha sido há mais de 3 dias. Neste caso, você poderá reenviar os callbacks da API <a href="https://sejaefi.com.br/central-de-ajuda/api/fazer-o-reenvio-de-callback-na-api#conteudo" target="_blank" title="Link Externo">seguindo orientações de nossa FAQ</a>.

<br/>

### Exemplo 4: Notificação com "Falha (500)"

Por fim, um cenário no qual a Efí efetuou o envio do POST (notificação), mas em <code>Histórico de Notificações</code> está sendo exibida a resposta <code>Falha (500)</code>.

Respostas contendo <code>Falha (500)</code> ou <code>500 Internal Server Error</code> são um status de erro HTTP que indica que o servidor encontrou uma condição inesperada e que o impediu de atender à solicitação.

**O erro, no entanto, é uma mensagem genérica e abrangente** que indica uma dificuldade no processamento em seu servidor e pode ocorrer por diversos fatores.

Por isso, às vezes, **os arquivos de log de seu servidor** podem responder com um status *code 500* acompanhado de mais detalhes sobre o *request* para evitar que no futuro erros desse tipo possam voltar a acontecer. **Por isso, é sempre de extrema importância que você veja a mensagem de erro do log de seu servidor para ajudá-lo a resolver.**

A seguir, listamos as possíveis causas que você pode explorar para solucionar o erro:

- Arquivo de configuração em seu servidor, como <code>.htaccess</code>, <code>php.ini</code> ou <code>web.config</code> pode conter parâmetros inválidos;

- Bloqueio em seu servidor (rede, firewall, políticas, etc): algumas aplicações e serviços podem ter determinados filtros, por isso, assegure-se que <a href="https://sejaefi.com.br/central-de-ajuda/api/quais-enderecos-de-ip-gerencianet-utiliza#conteudo" target="_blank">nossos endereços IP's</a> estejam liberados.

- Alto consumo de recursos em seu servidor ou limite de processos: hosts compartilhados são mais suscetíveis a este tipo de situação.

- *Timeout* em seu servidor.

- Permissões incorretas no servidor em arquivos e/ou pastas.

- Limite de memória e diretivas do PHP setadas no arquivo <code>php.ini</code>.

- Conflito entre versões de PHP em seu host.

- Possibilidade de plugins, módulos, extensões ou temas terem causado o erro por incompatibilidade ou atualizações automáticas.

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Dica</b>
</div>
<p>Por se tratar de um erro genérico, é importante que você consulte e interprete os logs de erros do seu servidor:
<ol>
<li><b>Apache:</b> <code>/var/log/apache2/error.log</code></li>
<li><b>NGINX:</b> <code>/var/log/nginx/error.log</code></li>
</ol></p>
<p>Caso não tenha acesso a tais informações, entre em contato com o seu provedor de hospedagem ou sua equipe técnica responsável pela infraestrutura de rede.</p>
</div>


<br/>

### Códigos de status HTTP (2xx, 3xx, 4xx e 5xx)

A Efí utiliza respostas HTTP para indicar sucesso ou falha nas requisições. Geralmente, você consegue visualizá-los através da sub-aba <code>Histórico de Notificações</code>.

Comumente, quando retornamos respostas com status <code>2xx</code> significa que houve sucesso na requisição; status <code>3xx</code> indicam redirecionamento; status <code>4xx</code> indicam falhas no envio de dados por parte do cliente; status <code>5xx</code> indicam erros internos de servidor.

<div className="payment">
<details className="col-100">
  <summary>
<b>Códigos de status HTTP</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Descrição dos códigos HTTP das respostas mais comuns, bem como suas explicações e soluções:
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/notification/codigos.md" />
          </div>
          <br/>
      </div>
<br/>

</details>
</div>


<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>NOTA</b>
  </div>
<p>Caso se depare com algum código de resposta diferente dos citados acima, recomendamos que acesse a <a href="https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP" target="_blank">relação de códigos de estado HTTP</a> da Wikipedia e confira.</p>
</div>

<br/>

## Arquivos de confirmações

A Efí, com o intuito de diversificar ainda mais suas soluções, adotou o Intercâmbio Eletrônico de Arquivos para fornecer informações referente a cobranças para clientes que não podem (ou não desejam) realizar o uso das notificações automáticas entre sistemas (callbacks através de URL de notificação).

O **Arquivo de Confirmações** possui todos os pagamentos confirmados da sua conta Efí, ou seja, todas as transações com o status <code>paid</code> (pago). O arquivo inclui transações realizadas através da integração (API) e/ou pela plataforma Efí.

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>IMPORTANTE:</b>
  </div>
<p>Transações confirmadas manualmente (status <code>settled</code>) não serão incluídas neste arquivo.</p>
</div>

<br/>
Antes de continuar, é importante estar ciente de que esta página é de natureza técnica. Esta documentação fornece orientações técnicas sobre como utilizar os recursos dos Arquivos de Confirmações de Cobranças e estabelece as condições básicas para sua utilização.
<br/><br/>

### Download do Arquivo de Confirmações

Você pode baixar o arquivo e importá-lo em seu sistema para conciliar os boletos pagos. Para gerar o arquivo, siga as instruções a seguir:

- <a href="https://usuario.gerencianet.com.br/login" target="_blank" title="Efetue login em sua conta Efí">Faça login</a> em sua conta Efí e acesse <code>Receber(Cobranças) > Automatizações > Arquivos de confirmação</code>;

- Selecione uma data específica para gerar um arquivo contendo as confirmações ocorridas neste dia;

- O arquivo será gerado. Faça o download e importe-o em seu sistema.

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>NOTA</b>
  </div>
<p>Certifique-se de que seu sistema esteja preparado para importar e interpretar o layout do Arquivo de Confirmações.</p>
</div>

<br/>
A seguir, o layout com a apresentação dos campos, descrição, posições iniciais e finais, tipo, tamanho e outras informações:
<div className="figure"><img src="/img/layout.png" alt="banner"/><p>Layout Arquivo Retorno da Efí</p></div>

<br/>

### Exemplo de retorno do Arquivo de Confirmações:

<div className="figure"><img src="/img/exemplos-arquivo-confirmacao.png" alt="banner"/><p>Exemplo Arquivo de Confirmação</p></div>

 <br/>

### Requisições


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

</div>