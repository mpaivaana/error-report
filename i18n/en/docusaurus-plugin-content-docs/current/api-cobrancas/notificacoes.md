---
id: notificacoes
title: Notifications
hide_title: true
sidebar_label: Notifications
---
<h1 className="titulo">Notifications</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Modal from "@site/src/scripts/modal.js" 
import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Learn more about how Efí's notification system works
</div>

<br/>
<br/>

## Receiving Notifications

Notifications allow you to receive information when the status of a transaction changes, such as when a boleto is paid, for example.

When a transaction has a registered notification URL (attribute <code>notification_url</code>), Efí sends a <code>POST</code> to this URL each time the status of the charge changes. This notification has a specific token, which will remain the same throughout the entire "cycle of changes" of the transaction. For example:

- A charge is generated. Your system receives a <code>POST</code> from Efí containing the notification token <code>09027955-5e06-4ff0-a9c7-46b47b8f1b27</code> and informing the transaction status - in this case, <code>new</code>;

- This same charge had the payment method defined, so its status changed to <code>waiting</code> and, subsequently, we will send a new notification to your system containing the same token <code>09027955-5e06-4ff0-a9c7-46b47b8f1b27</code>;

- Later, this same charge had the payment confirmed, so the status changes to <code>paid</code> and again your system receives a notification, still with the same token <code>09027955-5e06-4ff0-a9c7-46b47b8f1b27</code>.

<div className="figure"><img src="/img/notificacao.png" alt="banner"/><p>Example of how to simulate the token sending request via Postman</p></div>

A <code>POST</code> will contain only one piece of information: a notification token. This token is sent when there is a change in the charge status. To receive these notifications, you need to register a notification URL in the charge and prepare it to read the token in the <code>$_POST['notification']</code> variable.

For security reasons, the transaction information will only be sent when your system queries it using the received notification token.

At any time the integrator queries this notification token, they will obtain the most current charge information, all ordered according to the events. Every status change generates a notification.

In the <code>Histórico de Notificações</code> tab, it is possible to track all the notification <code>POST</code> requests sent by our system. When the integrator queries the sent token, we consider that the notification was successfully received. If it is not queried, we will try to send the notification again.

For details on implementation and the necessary procedures, you can find more information in our documentation and install one of our libraries on your server to run the example codes.


<br/>

### Setting up the URL to Receive Notifications

You can define a URL that will receive notifications during the creation of the charge (<code>createCharge</code>) or later (<code>updateChargeMetadata</code>).

A transaction generated through the API can undergo various status changes based on interactions from the payer, the integrating party, or the involved banks and financial institutions. To track these changes, you need to prepare your system to receive notifications sent by Efí.

When setting the parameters for creating the transaction, you can provide a <a target="_blank" href="https://gnetbr.com/ryeGKbdl_D">notification URL</a>. This URL will receive a *token* whenever there is a status change in the transaction. With this token, your application can query our web service to obtain the updated status of the transaction.


<Tabs
  defaultValue="code"
  values={[
    { label: 'Code: set notification URL', value: 'code', },
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
    <img src="/img/lightbulb-on-green.svg"/> <b>TIP FOR TESTING NOTIFICATIONS (CALLBACKS) EASILY WITH WEBHOOKINBOX</b>
</div>
<p>To test notifications, we suggest using <a href="http://webhookinbox.com/" target="_blank" title="Link Externo">WebhookInbox</a>, a free service to inspect HTTP requests. With it, you can create a temporary URL to use in the <code>notification_url</code> attribute, allowing you to easily and visually see the POSTs sent to your application. To generate the request receiving URL, simply access <a href="http://webhookinbox.com/" target="_blank" title="Link Externo">WebhookInbox</a> and click on <code>Create An Inbox</code>.</p>
<p>WebbookInbox will record HTTP requests and allow you to inspect them to check <i>Headers</i> and <i>Body</i> of the requests. This way, you can start developing your integration with Efí and testing the <a href="/en/docs/api-cobrancas/notificacoes" title="Internal Link">Notification URL (callbacks)</a> features even if you don't already have a public URL available.</p>
</div>


<br/>

If you do not register a URL at the time of transaction creation, you can do so through the metadata alteration method, using a <code>PUT</code> request to the route <code>/v1/charge/:id/metadata</code>.

The notification process is carried out in two steps to ensure the security of the data provided:

1. In the first step, your system is notified that there has been a transaction-related change (the webservice sends a <code>POST</code> with a *token* to you);

2. In the second step, your system queries - passing the *token* you received as a parameter to Efí to know details about this change.


### Consulting details of a notification
Efí considers that a notification has been successfully carried out only after this query. As long as your system does not consult the notification details, it will continue to be notified:

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
 
require __DIR__.'/../../vendor/autoload.php'; // SDK related path
 
use Efí\Exception\EfíException;
use Efí\Efí;
 
$clientId = 'inform_your_client_id'; // enter your Client_Id, depending on the environment (Des or Prod)
$clientSecret = 'inform_your_client_secret'; // enter your Client_Secret, depending on the environment (Des or Prod)
 
$options = [
  'client_id' => $clientId,
  'client_secret' => $clientSecret,
  'sandbox' => true // change depending on the environment (true = development and false = production)
];
 
/*
* This token will be received in your variable representing the POST parameters.
* E.g.: $_POST['notification']
*/
$token = $_POST["notification"];
 
$params = [
  'token' => $token
];
 
try {
    $api = new Efí($options);
    $chargeNotification = $api->getNotification($params, []);
  // To identify the current status of your transaction you must count the number of situations contained in the array, because the last position always holds the last status. See a sample response in the "Sample responses" section below.
  
  // See below for how to access the ID and String referring to the last status of the transaction.
    
    // Count the size of the data array (which stores the result)
    $i = count($chargeNotification["data"]);
     // Get the last chargeStatus object
    $ultimoStatus = $chargeNotification["data"][$i-1];
     // Accessing the Status array
    $status = $ultimoStatus["status"];
    // Getting the transaction ID       
    $charge_id = $ultimoStatus["identifiers"]["charge_id"];
    // Getting the current status string
    $statusAtual = $status["current"];
    
     // With this information, you can query your database and update the status of the specific transaction, once you have the "charge_id" and the STATUS String.
  
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
* This token will be received in your variable representing the POST parameters
* E.g.: req.body['notification']
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
/* For the Java SDK to work correctly, the module must be instantiated by creating an object of type Efí.

Whenever we want to call an API function, we just have to invoke the Efí object's call method, passing as parameters the name of the method, the parameters of the request (it will always be a HashMap<String, String>), and the "body", which consists of the properties to be passed as an argument when calling an SDK function. The "body" can be declared in two ways: a JSONObject or a Map<String, Object>.

This structure is needed to represent the body of the http request that is sent to a particular endpoint. If the "body" is a JSONObject, the return from the call method will be a JSONObject, if it is a Map<String, Object>, the return from the call method will be a Map<String, Object>.

Below are links from our Github showing two different return methods: JSONObject
and Map<String, Object>

JSONObject

https://github.com/efipay/sdk-java-examples-apis-efi/blob/main/src/main/java/br/com/efi/charges/notification/json/GetNotification.java


Map<String, Object>

https://github.com/efipay/sdk-java-examples-apis-efi/blob/main/src/main/java/br/com/efi/charges/notification/map/GetNotification.java

*/
```

</TabItem>
<TabItem value="go">

```go
// In the example code for using the Go SDK, we define the API access credentials (Client_Id and Client_Secret) and the environment to be used (sandbox as 'true' or 'false') within a specific file (configs.go), which is located in the "_examples/configs" directory. These credentials are exported via the 'Credentials' variable.

package main

import (
  "fmt"
  "github.com/efipay/sdk-go-apis-efi/src/efipay"
	"github.com/efipay/sdk-go-apis-efi/examples/configs"
)

func main(){
  
  credentials := configs.Credentials
  gn := gerencianet.NewEfí(credentials)

  res, err := gn.GetNotification("token") // replace with the token received

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
 
# This token will be received in your variable representing the POST parameters
# Ex: req.body['notification']
 
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

#### Examples of responses:
Below are some examples of notification responses for transactions, subscriptions, carnets and payment link:

<Tabs
  defaultValue="transacao"
  values={[
    { label: '🟢 200 (Transaction)', value: 'transacao', },
    { label: '🟢 200 (Subscription)', value: 'assinatura', },
    { label: '🟢 200 (Carnet)', value: 'carne', },
    { label: '🟢 200 (Payment Link)', value: 'link', },
  ]
}>

<TabItem value="transacao">

```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": [
        {
            "created_at": "2022-02-20 09:12:23", // date of the status change of the "id 1" array
            "custom_id": null,
            "id": 1, // order indicator, starting at 1. It is incremented for each change of a notification token. This is useful if you need to keep track of which change you've already processed
            "identifiers": { // identifiers representing the charge
                "charge_id": 24342333
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "charge" // type of charge that was changed (in this case, "charge" means that the change occurred in a transaction)
        },
        {
            "created_at": "2022-02-20 09:12:23", // date of the status change of the "id 2" array
            "custom_id": null, // identifier of the charge defined by the integrator, if any
            "id": 2,
            "identifiers": { // identifiers representing the charge
                "charge_id": 24342333
            },
            "status": {
                "current": "waiting",
                "previous": "new"
            },
            "type": "charge" // type of charge that was changed (in this case, "charge" means that the change occurred in a transaction)
        },
        {
            "created_at": "2022-03-31 09:14:34", // date of the status change of the "id 3" array
            "custom_id": null, // identifier of the charge defined by the integrator, if any
            "id": 3,
            "identifiers": { // identifiers representing the charge
                "charge_id": 24342333
            },
            "status": {
                "current": "unpaid",
                "previous": "waiting"
            },
            "type": "charge" // type of charge that was changed (in this case, "charge" means that the change occurred in a transaction)
        },
        {
            "created_at": "2022-04-03 07:33:30", // date of status change for array "id 4"
            "custom_id": null, // identifier of the charge defined by the integrator, if any
            "id": 4,
            "identifiers": { // identifiers representing the charge
                "charge_id": 24342333
            },
            "received_by_bank_at": "2022-04-02", // date of payment of the charge
            "status": {
                "current": "paid", // CURRENT status of the transaction: paid ("paid")
                "previous": "unpaid" // PREVIOUS status of the transaction: unpaid ("unpaid")
            },
            "type": "charge", // type of charge that was changed (in this case, "charge" means that the change occurred in a transaction)
            "value": 6990 // value accompanying the change. This tag will exist when the change is a payment confirmation, informing the amount paid that was confirmed
        }
    ]
}


// All transactions have a status, which represents the situation of that transaction. Check out the full list for handling in your system
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
      "received_by_bank_at": "2022-03-28" // date of payment of the charge
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
   "code": 200, // HTTP return "200" stating that the request was successful
    "data": [
        {
            "created_at": "2022-03-22 09:38:36",
            "custom_id": null,
            "id": 1, // order indicator, starting at 1. It is incremented for each change of a notification token. This is useful if you need to keep track of which change you've already processed
            "identifiers": { // identifiers representing the charge
                "carnet_id": 2512240 // carnet identifier
            },
            "status": {
                "current": "up_to_date", // status of the carnet (i.e. the carnet is up to date, there are no outstanding installments. As soon as the carnet is created, it also receives this up_to_date status)
                "previous": null
            },
            "type": "carnet" // type of the charge that was changed (in this case, "carnet" means that the change was made to a carnet)
        },
        {
            "created_at": "2022-03-22 09:38:36", // date of status change for array "id 1"
            "custom_id": null,
            "id": 2,
            "identifiers": {
                "carnet_id": 2512240, // carnet identifier
                "charge_id": 27757742 // installment identifier
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "carnet_charge" // change occurred in a carnet installment
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
            "received_by_bank_at": "2022-04-02", // date of payment of the charge
            "status": {
                "current": "paid", // CURRENT status of the transaction: paid ("paid")
                "previous": "waiting" // PREVIOUS status of the transaction: waiting ("waiting")
            },
            "type": "carnet_charge",
            "value": 6250 // value accompanying the change. This tag will exist when the change is a payment confirmation, informing the amount paid that has been confirmed
        }
    ]
}


// in this example, a new payment slip status could be applied, in which case one more position would be added to the array. For example: the carnet can have its status changed to "unpaid" if we identify the default of at least one installment, so you will receive the notification with a new position in the array with "type": "carnet", indicating that this status refers to the carnet, and not to any installment of the carnet.
```

</TabItem>
<TabItem value="link">

```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": [
        {
            "created_at": "2022-02-20 09:12:23", // date of the status change of the "id 1" array
            "custom_id": null,
            "id": 1, // order indicator, starting at 1. It is incremented for each change of a notification token. This is useful if you need to keep track of which change you've already processed
            "identifiers": { // identifiers representing the charge
                "charge_id": 24342333
            },
            "status": {
                "current": "new",
                "previous": null
            },
            "type": "charge" // type of charge that was changed (in this case, "charge" means that the change occurred in a transaction)
        },
        {
            "created_at": "2022-02-20 09:12:23", // date of the status change of the "id 2" array
            "custom_id": null, // identifier of the charge defined by the integrator, if any
            "id": 2,
            "identifiers": { // identifiers representing the charge
                "charge_id": 24342333
            },
            "status": {
                "current": "link",
                "previous": "new"
            },
            "type": "charge" // type of charge that was changed (in this case, "charge" means that the change occurred in a transaction)
        },
        {
            "created_at": "2022-04-03 07:33:30", // date of the status change of the "id 3" array
            "custom_id": null, // identifier of the charge defined by the integrator, if any
            "id": 3,
            "identifiers": { // identifiers representing the charge
                "charge_id": 24342333
            },
            "received_by_bank_at": "2022-04-02", // date of payment of the charge
            "status": {
                "current": "paid", // CURRENT status of the transaction: paid ("paid")
                "previous": "link" // PREVIOUS status of the transaction: link ("payment link")
            },
            "type": "charge", // type of charge that was changed (in this case, "charge" means that the change occurred in a transaction)
            "value": 6990 // value accompanying the change. This tag will exist when the change is a payment confirmation, informing the amount paid that was confirmed
        }
    ]
}


```

</TabItem>
</Tabs>

<br/>

<div className="admonition admonition_tip">
  <div>
    <img src="/img/lightbulb-on-green.svg"/> <b>List of all possible statuses for transactions, installments, and subscriptions</b>
  </div>
  <p>All transactions, installments, and subscriptions have statuses that represent their "situations". Therefore, it is important to know the possible statuses in the API to provide the necessary handling in your system.</p>

</div>


<br/>

<div className="admonition admonition_tip">
  <div>
    <img src="/img/lightbulb-on-green.svg"/> <b>Order of notifications (callbacks)</b>
  </div>
<p>In summary, the order of notifications always follows the sequence of events.</p>
<p><b>For example:</b> in the case of installments, if installment 1 had its payment confirmed first, then installment 2, and finally installment 3. In this situation, we will have an <i>array</i> of 3 positions where the first presents the confirmation of installment 1, the second the confirmation of installment 2, and the last the confirmation of installment 3.</p>
<p>To know the most recent situation of the installment, you can traverse the <i>array</i> and check until which "event" was synchronized, as a notification can bring 2 or 3 updates, for example. Therefore, we cannot assume that the last position of the <i>array</i> is always the one that needs to be synchronized.</p>
</div>


<br/>

#### Explanation of response parameters:

The response to a notification will always be an *array* containing the changes that occurred in a regular transaction, subscription, installment, subscription transaction, or installment transaction in the last 6 months.

Note that notifications related to subscriptions and installments may also include changes in their transactions (or installments).



<div className="payment">
<details className="col-100">
  <summary>
<b>Response tags</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Here you will find a brief description of the attributes present in the notifications.
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/notification/notification.md" />
          </div>
          <br/>
      </div>
<br/>

</details>
</div>

<br/>

### Notification Queue Status

Efí notifies integrated systems of any changes in the status of a specific charge through its associated notification URL.

Notifications are processed and sent through a delivery queue. If the callback is rejected by the destination system, it automatically returns to the queue and is rescheduled for another delivery attempt. Callbacks are dynamic and can occur throughout the day.

To provide new ways to check the processing status of this queue, Efí offers a screen that allows you to check the consumption status of the processed notification queue. This way, if the client is unsure whether a callback has already been sent or not, they can monitor the daily processing of this queue.

To check the status and processing of the queue, please visit the [Efí Payment Confirmations Status](https://sejaefi.com.br/confirmacoes).



### Videos: Notifications

In an effort to provide new ways of conveying information, Efí offers the following video to explain, clearly and concisely, how to set up your notification URL to receive callbacks.

#### Setting up your notification URL (Efí API integration)

<div className = "video" >
<iframe width="560" height="315" src="https://www.youtube.com/embed/wKAgmXpWQQk" title="[Módulo 5.8]  Aula 1 - Configuração da URL de notificações | Curso API Gerencianet 2.0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br/>
<br/>


### Efí IP Addresses for Callback Delivery

Some applications and services may filter our communications based on our IP addresses. Therefore, we recommend checking our list of IP addresses used by Efí. [Check out our FAQ](https://sejaefi.com.br/central-de-ajuda/api/quais-enderecos-de-ip-gerencianet-utiliza#conteudo) for the full list.

### Next Steps

Now that you've implemented the notification URL feature, you can learn [more details](#entendendo-o-fluxo-das-notificações) on how to interpret relevant notification (callback) scenarios, such as situations where a charge in your system has not been downloaded, or when the callback was triggered for a URL you previously defined but is no longer valid, among other cases.


<br/>

## Understanding the Flow of Notifications

This section aims to present the Notification History. This feature is available in your Efí account's API and allows you to view the POSTs that Efí sends to the integration partner's notification URL. These POSTs contain only a notification token.

By completing this reading, you will better understand the different scenarios related to notifications (callbacks). This includes situations where a charge in your system was not processed correctly, or when the callback was sent to a URL that you had previously defined but that URL is no longer valid, among other cases.


### Understanding More About the Notification Flow

Receiving a successful POST (status code 200) to your notification URL does not guarantee that the process has been completed correctly. After receiving the POST, it is important for you to come here and check the information.

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>IMPORTANT</b>
  </div>
 <p>The POST that Efí sends to your URL <b>does not contain the billing information, only the notification token.</b> All information about the billing in question will be provided when you access the endpoint <code>GET /notification/:token</code>.</p>

</div>

<br/>

In fact, the process works as a "two-way street". This means that Efí sends a POST to your notification URL whenever there is a change in the billing status. Then, your system, with the received notification token, makes a request to consume information through the endpoint GET /notification/:token, where ":token" is the notification token contained in the sent POST.


This way, we can consider that:

- Sub-tab <code>Notification History</code>: indicates the POSTs that Efí sends to the registered notification URL.

- Sub-tab <code>Request History</code>: upon successfully receiving the POST from Efí at your URL, your system will query the endpoint <code>GET /notification/:token</code>.


<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/notification/<HighlightVar>:token</HighlightVar></b>  
  </summary>
      <div className="get-div"> 
          <div className="left">
            Returns the history of notifications sent for a given transaction.
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/notification/token.md" />
          </div>
      </div>
       <br/> <br/>

 Below is a simple JSON that can be used to return the history of notifications sent for a given transaction. You can also see the expected output. Remember that you also need to enter the "token" input parameter for the desired notification:


  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'Dados de Entrada', value: 'entrada', },
       ]}>
       
  <TabItem value="entrada">

  ```json
Input parameter: enter the token of the desired notification
  ``` 
 </TabItem>
  </Tabs>

  <br/>

  <b>Responses</b>

   The responses below represent consumption Success(200).
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

The flow is determined by the following order:

1. Efí sends the POST containing the notification token to the registered notification URL whenever there is a change in the payment status. Details can be observed in the sub-tab <code>Notification History</code>;

2. Your URL receives the POST, causing your system to send a <code>GET</code> request to the route <code>/notification/:token</code>, where <code>:token</code> is the notification token we sent to you. You can view this request in the sub-tab <code>Request History</code>.

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>IMPORTANT</b>
  </div>  
  <p>If the integrator checks the sent token, we consider the notification successful. If not checked, we try again for up to 3 days.</p>
  <p>In other words, if there is a request to the <code>GET /notification/:token</code> endpoint, we understand that you received the POST with the notification token and that you consulted it, receiving as a response all informative data about the change undergone by the payment, such as the previous and current status of the payment.</p>
  <p>This information can be viewed in the sub-tab <code>Request History</code>, searching for the specific notification token.</p>
</div>

<br/>

Let's go through some examples:

### Example 1: Notification with "Success (200)"

Imagine a scenario where the integrator successfully receives the POST sent by Efí to its notification URL. Then, they consult our webservice to get the content of that notification token.

To analyze this:

1. Access the sub-tab `Notification History` to see the received POSTs on your notification URL;
2. With the notification token of the payment you want to check, access the sub-tab `Request History`.
3. Search for the mentioned token, and upon finding it, click on the "eye" icon in the last column.
4. This way, you can view all the information related to the payment that your system has consulted (read).


<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>INFORMATION</b>
  </div>
  <p>In the sub-tab <code>Notification History</code>, the display of the response <code>Success (200)</code> only indicates that the POST was successfully sent to your notification URL, but it does not guarantee that your system was able to read and record the information on your side. To do this, you need to access the sub-tab <code>Request History</code> and locate the row containing the consumption of <code>GET /notification/:token</code>.</p>
</div>
<br/>

Summary of the steps followed:

* Efí successfully sent a notification (POST) to your notification URL (check in the sub-tab ``Notification History``);
   * This POST contains only the notification token, which is ``7dd52fed-3d0a-42c8-b3fb-fc24f1d75303``;

* As soon as the URL received the notification, your system sent a ``GET`` request to the route ``/notification/7dd52fed-3d0a-42c8-b3fb-fc24f1d75303`` (check in the sub-tab ``Request History``);
   * At this point, your system received as a response a JSON with all informative data about the change occurred in the payment;

* **For this example, the entire flow was successful**: we triggered the notification containing the notification token, and then your system queried our webservice to know (read) the information of the mentioned payment.   

<br/>

### Example 2: Notification with "Failure (404)"

Imagine a scenario where Efí sent the POST notification, but in the <code>Notification History</code>, the response displayed is <code>Failure (404)</code>.

This <code>Failure (404)</code> indicates that the requested resource was not found. You should ensure that your URL is correct because we attempted to deliver the notification to the URL you provided us, but the address was not located.

Therefore, since your system failed to receive our callback, you will **not see** the consumption of <code>GET /notification/:token</code> in the <code>Request History</code> sub-tab.



<strong>Suggested Solutions:</strong>

* You can adjust the URL path on your server side;

* Update the notification URL to the new (and correct) address. To do this, you can send ``PUT`` requests to the appropriate API route, paying attention to the limit of up to 7,500 requests every 24 hours for this endpoint.
   
* After updating the notification URL, we will continue to send the notification for the charge, but now to the new provided URL, as long as our first delivery was not more than 3 days ago. In this case, you can resend the API callbacks <a href="https://sejaefi.com.br/central-de-ajuda/api/fazer-o-reenvio-de-callback-na-api#conteudo" target="_blank" title="External Link">following the instructions in our FAQ</a>.



<br/>

### Example 3: Notification with "Failure (301)" or "Failure (302)"

Now, a scenario where Efí sent the POST (notification), but in ``Notification History`` the response is displayed as "Failure (301)" or "Failure (302)".

These situations occur when there is a permanent (301) or temporary (302) redirection on your server, specifically affecting the delivery of the notification to the notification URL you previously defined. Some common examples of when this occurs:

* You set your notification URL as ``http://www.mywebsite.com``, but later installed HTTPS/SSL on your server and your address became ``https://www.mywebsite.com``;

* Your notification URL was ``https://www.mywebsite.com``, but later you created rules on your server (via htaccess, web.config, etc) and the address started responding only as ``https://mywebsite.com``.


<strong>Suggested Solutions:</strong>

* Adjust the 301 and/or 302 redirection rule on your server more accurately;

* Update the notification URL to the new (and correct) address. To do this, you can send ``PUT`` requests to the appropriate API route, paying attention to the limit of up to 7,500 requests every 24 hours for this endpoint.

* After updating the notification URL, we will continue to trigger the notification for the charge, but now to the new provided URL, as long as our first sending was not more than 3 days ago. In this case, you can resend the API callbacks <a href="https://sejaefi.com.br/central-de-ajuda/api/fazer-o-reenvio-de-callback-na-api#conteudo" target="_blank" title="Link Externo">following our FAQ guidelines</a>.


<br/>

### Example 4: Notification with "Failure (500)"

Finally, a scenario in which Efí sent the POST notification, but in the <code>Notification History</code>, the response is showing <code>Failure (500)</code>.

Responses containing <code>Failure (500)</code> or <code>500 Internal Server Error</code> are an HTTP error status indicating that the server encountered an unexpected condition that prevented it from fulfilling the request.

However, the error is a generic and broad message indicating a difficulty in processing on your server and can occur for various reasons.

Therefore, sometimes, your server's log files may respond with a 500 status code accompanied by more details about the request to prevent such errors from occurring in the future. Therefore, it is always extremely important that you check the error message from your server log to help you resolve it.

Below, we list the possible causes you can explore to solve the error:

- Configuration file on your server, such as <code>.htaccess</code>, <code>php.ini</code>, or <code>web.config</code>, may contain invalid parameters;

- Blocking on your server (network, firewall, policies, etc.): some applications and services may have certain filters, so make sure that <a href="https://sejaefi.com.br/central-de-ajuda/api/quais-enderecos-de-ip-gerencianet-utiliza#conteudo" target="_blank">our IP addresses</a> are allowed.

- High resource consumption on your server or process limit: shared hosts are more susceptible to this type of situation.

- Timeout on your server.

- Incorrect permissions on the server in files and/or folders.

- Memory limit and PHP directives set in the <code>php.ini</code> file.

- Conflict between PHP versions on your host.

- Possibility of plugins, modules, extensions, or themes causing the error due to incompatibility or automatic updates.

<div class="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Tip</b>
</div>
<p>As this is a generic error, it's important that you consult and interpret your server's error logs:
<ol>
<li><b>Apache:</b> <code>/var/log/apache2/error.log</code></li>
<li><b>NGINX:</b> <code>/var/log/nginx/error.log</code></li>
</ol></p>
<p>If you don't have access to such information, please contact your hosting provider or your technical team responsible for the network infrastructure.</p>
</div>



<br/>

### HTTP Status Codes (2xx, 3xx, 4xx, and 5xx)

Efí uses HTTP responses to indicate success or failure in requests. Typically, you can view them through the <code>Notifications History</code> sub-tab.

Commonly, when we return responses with a <code>2xx</code> status, it means the request was successful; <code>3xx</code> statuses indicate redirection; <code>4xx</code> statuses indicate client-side data transmission failures; <code>5xx</code> statuses indicate internal server errors.

<div className="payment">
<details className="col-100">
  <summary>
<b>HTTP status codes</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Description of the most common HTTP codes and their explanations and solutions:
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/notification/codigos.md" />
          </div>
          <br/>
      </div>
<br/>

</details>
</div>


<div class="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>NOTE</b>
  </div>
  <p>If you encounter any response code different from those mentioned above, we recommend accessing the <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes" target="_blank">list of HTTP status codes</a> on Wikipedia and checking it out.</p>
</div>

<br/>

## Confirmation Files

With the aim of further diversifying its solutions, Efí has adopted Electronic File Exchange to provide information regarding charges for customers who cannot (or do not wish to) use automatic notifications between systems (callbacks via notification URL).

The <strong>Confirmation File</strong> contains all confirmed payments from your Efí account, meaning all transactions with the status <code>paid</code>. The file includes transactions made through integration (API) and/or the Efí platform.

<div class="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>IMPORTANT:</b>
  </div>
  <p>Manually confirmed transactions (status <code>settled</code>) will not be included in this file.</p>
</div>

<br/>
Before proceeding, it is important to be aware that this page is of a technical nature. This documentation provides technical guidance on how to use the Confirmation Files of Charges and establishes the basic conditions for their use.
<br/><br/>


### Download the Confirmation File

You can download the file and import it into your system to reconcile the paid boletos. To generate the file, follow the instructions below:

- <a href="https://usuario.gerencianet.com.br/login" target="_blank" title="Log in to your Efí account">Log in</a> to your Efí account and go to <code>Receive (Charges) > Automations > Confirmation Files</code>;

- Select a specific date to generate a file containing the confirmations that occurred on that day;

- The file will be generated. Download and import it into your system.

<div class="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>NOTE</b>
  </div>
  <p>Make sure your system is ready to import and interpret the Confirmation File layout.</p>
</div>

<br/>
Below is the layout with the presentation of fields, description, start and end positions, type, size, and other information:
<div class="figure"><img src="/img/layout.png" alt="banner"/><p>Layout Efí Return File</p></div>

<br/>


### Example of Confirmation File Return:

<div class="figure"><img src="/img/exemplos-arquivo-confirmacao.png" alt="banner"/><p>Example Confirmation File</p></div>

 <br/>

### Requests

Callback requests expect a response with HTTP status 2XX. If the client's server returns a different status, Efí will make up to 10 new notification attempts. The first new attempt will be made 5 minutes after the callback delivery failure. If the error persists, subsequent attempts will be sent at increasingly longer intervals, as shown in the table below.

<div class="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>In cases where the client's server returns HTTP status 429 (too many requests), Efí's servers will also attempt to send the notification up to 10 times according to the table below.</p>
</div>


 <br/>
  <table className="table"> 
  <tbody>
    <tr>
      <th>N° of attempts</th>
      <th align="center">Time (in minutes)</th>
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