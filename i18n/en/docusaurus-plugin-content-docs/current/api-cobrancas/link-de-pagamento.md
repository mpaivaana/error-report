---
id: link-de-pagamento
title: Payment Link
hide_title: true
sidebar_label: Payment Link
---
<h1 className="titulo">Payment Link</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Step by step to generate a payment link in the Efí API
</div>

<br/>
<br/>

## Introduction

This feature allows you to create a link to an Efí payment screen.

Previously, the integrator had to create their own payment screen and use the endpoints for creating a charge and setting the payment method, which we call "Transparent Checkout". This means that the payer did not need to leave the integrator's system to make the payment, and all communication with Efí was done transparently.

In response to requests, **we have created the possibility of generating a link to the Efí payment screen.**
For those who need a more practical integration tool, this endpoint allows **the integrator to choose the payment methods they wish to allow (bank slip and/or credit card)** and generate a link to the Efí payment screen. This way, they redirect the payer to the generated link and do not need to worry about implementing their own screen.

Considering that the payer needs to feel secure when making a purchase, our payment screen allows for specific configurations so that your customer feels comfortable completing the transaction, even when redirected to a different domain than before.


<br/>

## Creating a Payment Link in One Step

To create a payment link in One Step, simply send a <code>POST</code> request to the route <code>/v1/charge/one-step/link</code>. In response, you will receive the <code>payment_url</code> of the transaction.

When consuming the endpoint <code>/charge/one-step/link</code>, the charge will be assigned the status <code>link</code>.
The integrator only needs to redirect the payer to the link returned in the <code>payment_url</code> tag, and everything else will be handled on the Efí payment screen.


<div className="payment">
<details className="col-100">
  <summary>
<b>Hierarchical structure of Schema attributes that can be used:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/charge/one-step/link', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
   "items"  
        "name"  
        "value"  
        "amount"  
        "marketplace"  
            "payee_code"  
            "percentage"  
    "shippings"  
        "name"  
        "value"  
        "payee_code"  
    "metadata"  
        "custom_id"  
        "notification_url"  
    "customer"
        "email"
    "settings"  
        "billet_discount"  
        "card_discount"  
        "conditional_discount"  
            "type"  
                "percentage",  
                "currency"  
            "value"  
            "until_date"  
        "message"  
        "expire_at"  
        "request_delivery_address"  
        "payment_method"  
            "banking_billet"  
            "credit_card"  
            "all"  
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/one-step/link</b>
  </summary>
<br/>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/link/link_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p> 
      
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Payment Link', value: 'exemplo1', },
    { label: 'Payment Link with Split', value: 'exemplo2', }
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "amount": 5,
        "name": "Game of Thrones",
        "value": 827
      },
      {
        "amount": 5,
        "name": "Dexter",
        "value": 620
      },
      {
        "amount": 2,
        "name": "Breaking Bad",
        "value": 750
      }
    ],
    "metadata": {
        "custom_id": "produto 1",
        "notification_url": "sua_url_notificação"
    },
    "customer": {
	      "email": "email_do_cliente@servidor.com.br"
	  },
    "shippings": [
      {
        "name": "Ouro Preto",
        "value": 500
      }
    ],
    "settings": {
      "billet_discount": 500,
      "card_discount": 300,
      "message": "Escreva aqui, se quiser, uma mensagem ao seu cliente, limite de 80 caracteres",
      "conditional_discount":{
        "type": "percentage", 
        "value": 100, 
        "until_date": "2021-12-30"
      },
      "payment_method": "all",
      "expire_at": "2025-02-08",
      "request_delivery_address": true
    }
}
  ```
  </TabItem>
    <TabItem value="exemplo2">

  ```json
{
    "items": [
      {
        "amount": 5,
        "name": "Game of Thrones",
        "value": 827,
        "marketplace": {
          "repasses": [
            {
              "payee_code": "payee_code1",
              "percentage": 2500
            }
          ]
        }
      }
    ],
    "metadata": {
        "custom_id": "produto 1",
        "notification_url": "sua_url_notificação"
    },
    "customer": {
	      "email": "email_do_cliente@servidor.com.br"
	  },
    "shippings": [
      {
        "name": "Ouro Preto",
        "value": 500
      }
    ], 
    "settings": {
      "billet_discount": 500,
      "card_discount": 300,
      "message": "Escreva aqui, se quiser, uma mensagem ao seu cliente, limite de 80 caracteres",
      "conditional_discount":{
        "type": "percentage", 
        "value": 100, 
        "until_date": "2021-12-30"
      },
      "payment_method": "all",
      "expire_at": "2025-02-08",
      "request_delivery_address": true
    }
}
```

  </TabItem>
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

   The responses below represent consumption Success.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200,
    "data": {
      "charge_id": 3714507,
      "status": "link",
      "total": 8863,
      "custom_id": "cross-media soft",
      "payment_url": "https://pagamento.gerencianet.com.br/:identificador",
      "payment_method": "all",
      "billet_discount": 500,
      "card_discount": 300,
      "conditional_discount_value": 100,
      "conditional_discount_type": "percentage",
      "conditional_discount_date": "2021-12-30",
      "request_delivery_address": true,
      "message": "teste",
      "expire_at": "2025-02-08",
      "created_at": "2021-11-09 11:14:36"
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Creating a Payment Link in Two Steps

Firstly, you need to create the transaction, providing details of the item/produto/serviço, value, and quantity. Then, this transaction must be associated with a payment link.

### 1. Create the transaction
Firstly, we need to generate the transaction (also called "charge"). This is when you provide the item/produto/serviço name, transaction value, quantity, among other possible information.

After creating it, the <code>charge_id</code> will be returned, which is the unique identifier of the transaction and will be used to associate it with the payment method.

As soon as this transaction is created, it receives the status <code>new</code>, which means that the charge has been generated and is awaiting payment method selection. This charge will only have its status changed when the integrator defines its payment method.

To generate a transaction, you should send a <code>POST</code> request to the route <code>/v1/charge</code>.

<div className="payment">
<details className="col-100">
  <summary>
<b>Hierarchical structure of Schema attributes that can be used:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/charge', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
   "items"  
        "name"  
        "value"  
        "amount"  
        "marketplace"  
            "payee_code"  
            "percentage"  
    "shippings"  
        "name"  
        "value"  
        "payee_code"  
    "metadata"  
        "custom_id"  
        "notification_url"  
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_two_steps_1.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 8900,
        "amount": 1
      }
    ]
}
  ``` 
  </TabItem>
 
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "charge_id": numero_charge_id, // Identification number of the generated transaction
      "status": "new", // Charge generated, awaiting payment method definition
      "total": 8900, // Total value of the transaction (in cents, where 8900 = $89.00)
      "custom_id": null, // Optional custom identifier
      "created_at": "2021-06-01 14:58:46" // Date and time of transaction creation
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>

### 2. Create a payment link

Now that the transaction has been created and you already have the <code>charge_id</code>, you need to associate it to obtain the payment link.

Simply send a <code>POST</code> request to the route <code>/v1/charge/:id/link</code> to generate a payment link.

<div className="payment">
<details className="col-100">
  <summary>
<b>Hierarchical structure of Schema attributes that can be used:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/charge/:id/link', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 

    "billet_discount"  
    "card_discount"  
    "conditional_discount"  
        "type"  
            "percentage",  
            "currency"  
        "value"  
        "until_date"  
    "message"  
    "expire_at"  
    "request_delivery_address"  
    "payment_method"  
        "banking_billet"  
        "credit_card"  
        "all"  
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/link</b>
  </summary>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>To create a "payment link" (<code>chargeLink</code>), a previously created "transaction" (<code>createCharge</code>) must be provided.</p>
<p>Therefore, if there is an attempt to make a payment and, for some reason, the payment confirmation is not successful (e.g., declined card, customer wants to pay by another method, etc.), a new transaction must be generated and associated with a new payment link, as the previous transaction will have a status of <code>waiting</code> or <code>unpaid</code>, which means that due to the payment attempt, it has already been associated with a payment method.</p>
</div>

<br/>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/link/link_two_steps_2.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', }
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "message": "Escreva aqui, se quiser, uma mensagem ao seu cliente, limite de 80 caracteres",
    "payment_method": "all",
    "expire_at": "2012-12-20",
    "request_delivery_address": false,
    "billet_discount": 5000,
    "card_discount": 3000
}
  ```
  </TabItem>
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

   The responses below represent consumption Success.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200,
    "data": {
      "charge_id": 148003,
      "status": "link",
      "total": 5990,
      "custom_id": null,
      "payment_url": "https://pagamento.gerencianet.com.br/:identificador",
      "payment_method": "all",
      "created_at": "2016-12-14 11:31:37"
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>

## Returning information from a payment link

To retrieve information from a link, you should send a <code>GET</code> request to the route <code>/v1/charge/:id</code>.

   
<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/charge/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_id.md"/>
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  Input parameter: enter the "charge_id" of the desired transaction
  ``` 
  </TabItem>
 
  </Tabs>
  <br/>

  <b>Responses</b>

  The responses below represent consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200 (Bolix)', value: 'saida', },
      { label: '🟢 200 (Billet)', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "charge_id": 1234567, // transaction ID number
      "total": 8900, // total transaction amount (in cents, where 8900 = R$89.00)
      "status": "waiting", // selected payment method, awaiting payment confirmation (the term "waiting" is equivalent to "aguardando")
      "custom_id": null, // optional custom identifier
      "created_at": "2022-10-31 10:18:21", // date and time of transaction creation
      "notification_url": null,
      "items": [
        {
          "name": "My Product", // name of your item, product, or service
          "value": 8900, // value, in cents. For example: 8900 (equals R$ 89.00)
          "amount": 1 // quantity of the item or product
        }
      ],
      "history": [
        {
          "message": "Cobrança criada",
          "created_at": "2222-10-31 10:18:21"
        },
        {
          "message": "Pagamento via boleto aguardando confirmação",
          "created_at": "2022-10-31 10:19:05"
        }      
      ],
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "phone_number": "5144916523",
        "address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "complement": null,
          "neighborhood": "Bauxita",
          "city": "Ouro Preto",
          "state": "MG",
          "zipcode": "35400000"
        }
      },
      "payment": {
        "method": "banking_billet", // payment method for the charge (banking_billet equals banking billet)
        "created_at": "2022-10-31 10:19:05",
        "message": "Using the message attribute, this content is displayed in the OBSERVATION field of the charge issued via API and also in the SELLER'S OBSERVATION field in the billing emails sent to the customer. Up to 4 lines of content can be used, with a maximum of 100 characters per line. This message can be seen in emails related to the charge, on the billet or booklet",
        "banking_billet": {
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
          "pix": {
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code image
          },
          "link": "https_link_to_access_the_billet", // Bolix generated link
          "pdf": {
            "charge": "https_pdf_link_of_the_invoice" // Bolix PDF link
          },
          "expire_at": "2023-12-30", // due date of the charge in the following format: 2022-12-30 (i.e., equals 30/12/2022)
          "configurations": {
            "interest": 33, // interest charged per day after the due date (in this case, 33 equals 0.033%)
            "fine": 200 // fine charged after the due date (in this case, 200 equals 2%)
          }
        }
      }
    }
}
  ``` 
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "charge_id": 1234567, // transaction ID number
      "total": 8900, // total transaction amount (in cents, where 8900 = R$89.00)
      "status": "waiting", // selected payment method, awaiting payment confirmation (the term "waiting" is equivalent to "aguardando")
      "custom_id": null, // optional custom identifier
      "created_at": "2022-10-31 10:18:21", // date and time of transaction creation
      "notification_url": null,
      "items": [
        {
          "name": "My Product", // name of your item, product, or service
          "value": 8900, // value, in cents. For example: 8900 (equals R$ 89.00)
          "amount": 1 // quantity of the item or product
        }
      ],
      "history": [
        {
          "message": "Cobrança criada",
          "created_at": "2222-10-31 10:18:21"
        },
        {
          "message": "Pagamento via boleto aguardando confirmação",
          "created_at": "2022-10-31 10:19:05"
        }      
      ],
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "phone_number": "5144916523",
        "address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "complement": null,
          "neighborhood": "Bauxita",
          "city": "Ouro Preto",
          "state": "MG",
          "zipcode": "35400000"
        }
      },
      "payment": {
        "method": "banking_billet", // payment method for the charge (banking_billet equals banking billet)
        "created_at": "2022-10-31 10:19:05",
        "message": "Using the message attribute, this content is displayed in the OBSERVATION field of the charge issued via API and also in the SELLER'S OBSERVATION field in the billing emails sent to the customer. Up to 4 lines of content can be used, with a maximum of 100 characters per line. This message can be seen in emails related to the charge, on the billet or booklet",
        "banking_billet": {
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
          "link": "https_link_to_access_the_billet", // generated transaction link
          "pdf": {
            "charge": "https_pdf_link_of_the_invoice" // charge PDF link
          },
          "expire_at": "2023-12-30", // due date of the charge in the following format: 2022-12-30 (i.e., equals 30/12/2022)
          "configurations": {
            "interest": 33, // interest charged per day after the due date (in this case, 33 equals 0.033%)
            "fine": 200 // fine charged after the due date (in this case, 200 equals 2%)
          }
        }
      }
    }
}
  ```
 </TabItem>
  </Tabs>

</details>

</div>

<br/>

## Include "notification_url" and "custom_id" in an existing transaction

You can define or modify the information sent in the <code>metadata</code> property of the transaction at any time. This endpoint is of <b>extreme importance</b> for updating the notification URL linked to transactions or modifying the previously associated custom_id.

To change the <code>notification_url</code> and/or <code>custom_id</code> of a transaction, you should send a <code>PUT</code> request to the route <code>/v1/charge/:id/metadata</code>.

<b>Use cases for this endpoint:</b>

<ol>
<li>The integrator changed the server IP associated with the notification URL of transactions;</li>
<li>The integrator updated the notification URL for new transactions created (<code>createCharge</code>), but also needs to update previous transactions (<code>updateChargeMetadata</code>) that are associated with the incorrect or outdated URL;</li>
<li>SSL (https) was installed on the client's server, and even if the client sets up a 301 or 302 redirection rule, it will be necessary to set the new URL in transactions that are using the "old" URL;</li>
<li>The integrator generated charges without informing the notification URL when sending the transaction creation request;</li>
<li>Modify or add information to the <code>custom_id</code> attribute associated with previously generated transactions; and other possible scenarios.</li>
</ol>


<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/metadata</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_url_de_retorno.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "notification_url": 'http://your_domain.com/notification',
    "custom_id": 'REF0001'
  }
  ``` 
  </TabItem>
  
  </Tabs>

  <br/>  
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Modifying certain parameters/attributes of an existing payment link

Allows updating (changing) certain parameters and attributes of a payment link created through <code>PUT /v1/charge/:id/link</code>, as long as the payment confirmation has not occurred.

Some information that can be updated/changed in a payment link:

- Allowed payment method;
- Discounts for boleto and credit card;
- Inclusion of discounts (including conditional ones);
- Informative message to the customer;
- Payment link expiration date;
- Request (or not) for the buyer's shipping address.


<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/link</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
           <Modal filename="/markdown/i18n/charges/link/link_alterar_atributos.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "billet_discount": 500,
    "card_discount" : 200,
    "expire-at": "2024-12-15"
}
  ``` 
  </TabItem>

  </Tabs>

  <br/>  
        
  <b>Responses</b>

  <br/> 

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
    "data": {
      "charge_id": 3714507,
      "status": "link",
      "total": 8863,
      "payment_url": "https://pagamento.gerencianet.com.br/:identificador",
      "payment_method": "all",
      "billet_discount": 500,
      "card_discount": 200,
      "conditional_discount_value": 100,
      "conditional_discount_type": "percentage",
      "conditional_discount_date": "2021-12-30",
      "request_delivery_address": true,
      "message": "teste",
      "expire_at": "2024-12-15",
      "created_at": "2021-11-09 11:14:36"
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>


 ## Cancelling an existing payment link

When a transaction is cancelled, there is only one condition for the status to be changed again: if the customer prints the boleto before the integrator cancels the transaction, they can make the payment normally at a bank branch. In this case, both the integrator and the payer will receive the payment confirmation as usual, and the status of the charge will change from <code>canceled</code> to <code>paid</code>.

To cancel a transaction (e.g., cancel a boleto), you should send a <code>PUT</code> request to the route <code>/v1/charge/:id/cancel</code>.


<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge<HighlightVar>:id</HighlightVar>/cancel</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_id.md"/>
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
Input parameter: enter the "charge_id" of the desired transaction
  ``` 
  </TabItem>

  </Tabs>

  <br/>  
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
     "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Adding a description to the transaction history

The transaction history represents all actions that have occurred with this transaction up to the present moment. Custom messages do not influence the transaction itself, only its history.

You can view the history both on the transaction details page in the interface and by using the specific endpoint to get the transaction details.

To add a custom message to the transaction history, you need to send the <code>charge_id</code> (unique identifier of the transaction) and the message you want to add. The message must have at least one character and a maximum of 255 characters.

To do this, simply send a <code>POST</code> request to the route <code>/v1/charge/:id/history</code>.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/history</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_acrecentar_info_historico.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
     "description": "Camisa Polo tamanho G cor azul, cobrança Bolix, pix com boleto."
  }
  ``` 
  </TabItem>
 
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  
  </Tabs>

</details>

</div>
<br/>

## Resending payment link via email

A transaction that has a <code>link</code> and whose status is <code>Payment Link</code>, can have its link resent via email.

To do this, you just need to provide the <code>charge_id</code> (unique identifier of the transaction) and the valid email address to which you want to send the payment screen link.

To resend a payment link via email, you should send a <code>POST</code> request to the route <code>/v1/charge/:id/link/resend</code>.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/link/resend</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_resend_email.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "email": "email_do_cliente@servidor.com.br"
  }
  ``` 
  </TabItem>
 
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  
  </Tabs>

</details>

</div>


</div>