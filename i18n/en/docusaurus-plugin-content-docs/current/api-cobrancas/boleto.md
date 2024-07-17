---
id: boleto
title: Billet
hide_title: true
sidebar_label: Billet
---
<h1 className="titulo">Billet</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Step by step to generate bank slip in the Efí API
</div>

<br/>
<br/>

Currently, we offer two procedures for creating a bank slip transaction. In the first one, the title is created in a single step, thus conventionally known as One Step. The second option for creating the transaction is in two steps, thus conventionally known as Two Steps.


## Creating of Billet (Bolix) in One step 

In this option, the request body must contain all the mandatory minimum attributes for issuing the title.

It allows creating a transaction already associating a payment method, which can be a bank slip or credit card, in just one step.

<div class="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>To ensure that the creation of transactions via One Step occurs without problems, it is necessary to update your SDK. All necessary files for this update are available through our <a href="https://github.com/efipay" target="_blank">repository</a> and in our documentation.</p>
</div>
<br/>

<div class="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>How to define automatic debiting of bank slips after due date</b>
</div>
<p>Now you can define the deadline for debiting overdue bank slips according to your needs. Previously, the deadline was fixed at 89 days and did not allow changes, now you can choose a deadline ranging from <strong>0 to 120 days</strong>.</p>
<p>To set the deadline, just define the number of days in the <code>days_to_write_off</code> attribute. For example, if you indicate 0 and the charge expires on 02/28/2024, payment will no longer be possible from 02/29/2024.</p>
</div>
<br/>

<div class="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Set monthly or daily interest</b>
</div>
<p>You can define whether interest will be calculated monthly or daily, according to your specific needs and preferences. Just inform the desired interest type at the time of the transaction as <strong>monthly</strong>.</p>
<p>If you choose not to specify the interest type, interest will be calculated daily by default.</p>

</div> 
<br/>

<div className="payment">
<details className="col-100">
  <summary>
<b>Hierarchical structure of Schema attributes that can be used:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'v1/charge/one-step', value: 'entrada', },
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
  "payment"  
      "banking_billet"  
          "customer"  
              "name"  
              "cpf"  
              "email"  
              "phone_number"  
              "birth"  
              "address"  
                  "street"  
                  "number"  
                  "neighborhood"  
                  "zipcode"  
                  "city"  
                  "complement"  
                  "state"  
              "juridical_person"  
                  "corporate_name"  
                  "cnpj"  
          "expire_at"  
          "discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
          "conditional_discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
              "until_date"  
          "configurations"   
              "days_to_write_off" 
              "fine"
              "interest"  
                  "value"
                  "type"
          "message"
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/one-step</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Example 1 (CPF)', value: 'exemplo1', },
    { label: 'Example 2 (CNPJ)', value: 'exemplo2', },
    { label: 'Example 3 (days_to_write_off)', value: 'exemplo3', },
    { label: 'Example 4 (Juros mensais)', value: 'exemplo4', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1
      }
    ],
    "payment": {
      "banking_billet": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "phone_number": "5144916523",
          "address": {
            "street": "Avenida Juscelino Kubitschek",
            "number": "909",
            "neighborhood": "Bauxita",
            "zipcode": "35400000",
            "city": "Ouro Preto",
            "complement": "",
            "state": "MG"
          }
        },
        "expire_at": "2023-12-15",
        "configurations": {
          "fine": 200,
          "interest": 33
        },
        "message": "Usando o atributo message, este conteúdo é exibido no campo OBSERVAÇÃO da cobrança emitida via API 
         e também no campo OBSERVAÇÃO DO VENDEDOR nos e-mails de cobrança enviados ao cliente 
         É possível utilizar até 4 linhas de conteúdo, com no máximo 100 caracteres por linha 
         Essa mensagem poderá ser vista nos e-mails relacionados à cobrança, no boleto ou carnê"
      }
    }
}
  ``` 
  </TabItem>
  <TabItem value="exemplo2">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1
      }
    ],
    "payment": {
      "banking_billet": {
        "customer": {
          "email": "email_do_cliente@servidor.com.br",
          "phone_number": "5144916523",
          "juridical_person":{
            "corporate_name": "Nome da Empresa", 
            "cnpj": "99794567000144" 
          },
          "address": {
            "street": "Avenida Juscelino Kubitschek",
            "number": "909",
            "neighborhood": "Bauxita",
            "zipcode": "35400000",
            "city": "Ouro Preto",
            "complement": "",
            "state": "MG"
          }
        },
        "expire_at": "2023-12-15",
        "configurations": {
          "fine": 200,
          "interest": 33
        },
        "message": "Essa cobrança pode ser paga pelo código de barras e pelo QR Code"
      }
    }
}
  ```
  </TabItem>
  <TabItem value="exemplo3">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1
      }
    ],
    "payment": {
      "banking_billet": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "phone_number": "5144916523",
          "address": {
            "street": "Avenida Juscelino Kubitschek",
            "number": "909",
            "neighborhood": "Bauxita",
            "zipcode": "35400000",
            "city": "Ouro Preto",
            "complement": "",
            "state": "MG"
          }
        },
        "expire_at": "2023-12-15",
        "configurations": {
          "days_to_write_off": 40,
          "fine": 200,
          "interest": 33
        },
        "message": "Usando o atributo message, este conteúdo é exibido no campo OBSERVAÇÃO da cobrança emitida via API 
         e também no campo OBSERVAÇÃO DO VENDEDOR nos e-mails de cobrança enviados ao cliente 
         É possível utilizar até 4 linhas de conteúdo, com no máximo 100 caracteres por linha 
         Essa mensagem poderá ser vista nos e-mails relacionados à cobrança, no boleto ou carnê"
      }
    }
}
  ``` 
  </TabItem>
  <TabItem value="exemplo4">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1
      }
    ],
    "payment": {
      "banking_billet": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "phone_number": "5144916523",
          "address": {
            "street": "Avenida Juscelino Kubitschek",
            "number": "909",
            "neighborhood": "Bauxita",
            "zipcode": "35400000",
            "city": "Ouro Preto",
            "complement": "",
            "state": "MG"
          }
        },
        "expire_at": "2023-12-15",
        "configurations": {
          "fine": 200,
           "interest" : {
              "value": 330,
              "type": "monthly"
            }
        },
        "message": "Usando o atributo message, este conteúdo é exibido no campo OBSERVAÇÃO da cobrança emitida via API 
         e também no campo OBSERVAÇÃO DO VENDEDOR nos e-mails de cobrança enviados ao cliente 
         É possível utilizar até 4 linhas de conteúdo, com no máximo 100 caracteres por linha 
         Essa mensagem poderá ser vista nos e-mails relacionados à cobrança, no boleto ou carnê"
      }
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
      { label: '🟢 200 (Bolix)', value: 'saida', },
      { label: '🟢 200 (Billet)', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // HTTP return code "200" indicating the request was successful
    "data": {
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // bank slip's line code
      "pix":{
        "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
        "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code image
      },
      "link": "link_https_to_access_bolix", // responsive Bolix link generated
      "billet_link":"link_https_to_access_bolix", // generated Bolix link
      "pdf": {
        "charge": "link_https_to_bolix_pdf" // Bolix PDF link
      },
      "expire_at": "2023-12-15", // due date of the bank slip in the following format: 2022-12-15 (equivalent to 15/12/2022)
      "charge_id": charge_id_number, // ID number referring to the generated transaction
      "status": "waiting", // selected payment method, waiting for payment confirmation ("waiting" equals to "waiting")
      "total": 5990, // value in cents. For example: 5990 (equivalent to R$ 59.90)
      "payment": "banking_billet" // payment method associated with this transaction ("banking_billet" equals to "bank slip")
    }
}
  ```
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // HTTP return code "200" indicating the request was successful
    "data": {
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // bank slip's line code
      "link": "link_https_to_access_bank_slip", // responsive bank slip link
      "billet_link":"link_https_to_access_bank_slip", // bank slip link
      "pdf": {
        "charge": "link_https_to_charge_pdf" // PDF link 
      },
      "expire_at": "2023-12-15", // due date of the bank slip in the following format: 2022-12-15 (equivalent to 15/12/2022)
      "charge_id": charge_id_number, // ID number referring to the generated transaction
      "status": "waiting", // selected payment method, waiting for payment confirmation ("waiting" equals to "waiting")
      "total": 5990, // value in cents. For example: 5990 (equivalent to R$ 59.90)
      "payment": "banking_billet" // payment method associated with this transaction ("banking_billet" equals to "bank slip")
    }
}

  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

<div className="admonition admonition_info">
 <div>
    <img src="/img/info-circle-blue.svg"/> <b>Information</b>
  </div>
<p>When using the <code>message</code> attribute, you should use the <code>\n</code> operator to perform line breaks. We have already included this operator in the provided code.</p>
</div>

<br/>


## Creating of Billet in Two Steps
In this option, you need to follow two steps, sending the request body with all the mandatory minimum attributes for issuing the charge.

<ol>
<li>Create the transaction, providing the item/product/service, value, quantity, etc;</li>
<li>Associate it with the payment method via bank slip, providing the transaction's <code>charge_id</code> and the customer's data.</li>
</ol>

The remainder of this page presents detailed procedures, but you need to install one of our libraries on your server to execute the example codes. <a href="/docs/sdk/introducao" target="_blank">Make sure the Efí SDK is installed.</a>

### 1. Create Transaction

To start, the first step is to generate the transaction, also known as "charge". At this moment, you will provide the name of the item, product, or service, the transaction amount, quantity, and other relevant information.

After creating the charge, you will receive a <code>charge_id</code> which is a unique identifier for this transaction. This will be used to associate the payment method.

Initially, the transaction will have the <code>new</code> status, which means that the charge has been generated and is awaiting the definition of the payment method. The status will be updated only when the payment method is chosen by the integrating party.

To generate a transaction, you should send a <code>POST</code> request to the <code>/v1/charge</code> route.


<div className="payment">
<details className="col-100">
  <summary>
<b>Hierarchical structure of Schema attributes that can be used:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'v1/charge', value: 'entrada', },
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
    "code": 200, // HTTP response "200" indicating the request was successful
    "data": {
      "charge_id": charge_id_number, // ID number corresponding to the generated transaction
      "status": "new", // charge generated, awaiting payment method definition
      "total": 8900, // total amount of the transaction (in cents, where 8900 = $89.00)
      "custom_id": null, // optional custom identifier
      "created_at": "2021-06-01 14:58:46" // date and time of transaction creation
    }
}

  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>


### 2. Associate to payment method via bank slip

After successfully generating the transaction, the next step is to associate it with the desired payment method - in this case, it will be the <code>banking_billet</code> (bank slip). To do this, you will need to provide the <code>charge_id</code> obtained when creating the transaction.

When selecting the bank slip as the payment method, the transaction status will change from <code>new</code> to <code>waiting</code>. This change indicates that the payment method has been chosen and is awaiting payment confirmation.

To associate with the payment method, you should send a <code>POST</code> request to the <code>/v1/charge/:id/pay</code> route.


<div className="payment">
<details className="col-100">
  <summary>
<b>Hierarchical structure of Schema attributes that can be used:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'v1/charge/:id/pay', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
  "payment"  
      "banking_billet"  
          "customer"  
              "name"  
              "cpf"  
              "email"  
              "phone_number"  
              "birth"  
              "address"  
                  "street"  
                  "number"  
                  "neighborhood"  
                  "zipcode"  
                  "city"  
                  "complement"  
                  "state"  
              "juridical_person"  
                  "corporate_name"  
                  "cnpj"  
          "expire_at"  
          "discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
          "conditional_discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
              "until_date"  
          "configurations"  
              "days_to_write_off" 
              "fine"
              "interest"  
                  "value"
                  "type"  
          "message"
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/pay</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_two_steps_2.md" />
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
    "payment": {
      "banking_billet": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "phone_number": "5144916523",
          "address": {
            "street": "Avenida Juscelino Kubitschek",
            "number": "909",
            "neighborhood": "Bauxita",
            "zipcode": "35400000",
            "city": "Ouro Preto",
            "complement": "",
            "state": "MG"
          }
        },
        "expire_at": "2023-12-30",
        "configurations": {
          "days_to_write_off": 40,
          "fine": 105,
          "interest" : {
            "value": 330,
            "type": "monthly"
          }
        },
        "message": "Pague pelo código de barras ou pelo QR Code"
      }
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
      { label: '🟢 200 (Bolix)', value: 'saida', },
      { label: '🟢 200 (Billet)', value: '200', }
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // HTTP response code "200" indicating the request was successful
    "data": {
        "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // boleto's barcode
        "pix": {
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code image
        },
        "link": "link_https_para_acesso_o_bolix", // responsive link to Bolix generated
        "billet_link": "link_https_para_acesso_o_bolix", // link to Bolix generated
        "pdf": {
            "charge": "link_https_do_pdf_da_cobranca" // link to Bolix's PDF
        },
        "expire_at": "2023-12-30", // boleto's expiration date in the following format: 2022-12-15 (meaning 15/12/2022)
        "charge_id": charge_id_number, // transaction's ID number
        "status": "waiting", // selected payment method, awaiting payment confirmation ("waiting" equals to "awaiting")
        "total": 8900, // value in cents. For example: 8900 (equals to R$ 89.00)
        "payment": "banking_billet" // payment method associated with this transaction ("banking_billet" equals to "banking billet")
    }
}

  ```
  </TabItem>

  <TabItem value="200">

  ```json
{
    "code": 200, // HTTP response code "200" indicating the request was successful
    "data": {
        "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // boleto's barcode
        "link": "link_https_para_acesso_o_bolix", // responsive link to the generated Boleto
        "billet_link": "link_https_para_acesso_o_bolix", // link to the generated Boleto
        "pdf": {
            "charge": "link_https_do_pdf_da_cobranca" // link to the PDF
        },
        "expire_at": "2023-12-30", // boleto's expiration date in the following format: 2022-12-15 (meaning 15/12/2022)
        "charge_id": charge_id_number, // transaction's ID number
        "status": "waiting", // selected payment method, awaiting payment confirmation ("waiting" equals to "awaiting")
        "total": 8900, // value in cents. For example: 8900 (equals to R$ 89.00)
        "payment": "banking_billet" // payment method associated with this transaction ("banking_billet" equals to "banking billet")
    }
}

  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>

<div className="admonition admonition_tip">
    <div>
        <img src="/img/info-circle-green.svg"/> <b>Payment made as a Juridical person (PJ)</b>
    </div>
    <p>The customer associated with the transaction can be a Juridical person. In this case, it is necessary to provide the Corporate Name and CNPJ of the paying company in the <code>juridical_person</code> attribute.</p>
</div>

<br/>

<div className="admonition admonition admonition_tip">
    <div>
        <img src="/img/lightbulb-on-green.svg"/> <b>List of all possible transaction statuses</b>
    </div>
    <p>All transactions have a status that represents their "situation". It is important to know the possible statuses of transactions in the API to handle them properly in your system.</p>
    <p>Check <a href="/en/docs/api-cobrancas/status" target="_blank">here</a> for all the details of the possible transaction statuses.</p>
</div>
<br/>
<div className="admonition admonition_tip">
    <div>
        <img src="/img/lightbulb-on-green.svg"/> <b>Callbacks (notifications) from API transactions to your system</b>
    </div>
    <p>Notifications allow you to be informed when a transaction has its status changed. This way, you can identify when a billet is paid, for example.</p>
    <p>Check <a href="/en/docs/api-cobrancas/notificacoes" target="_blank">here</a> for all the details on how to implement your notification URL.</p>
</div>
<br/>


## Return Existing Transaction Information

To retrieve information about a transaction (such as a billet, for example), you need to send a `GET` request to the route `/v1/charge/:id`.

   
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
            <Modal filename="/markdown/i18n/charges/billet/billet_id.md" />
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
    "code": 200, // HTTP response "200" indicating the request was successful
    "data": {
        "charge_id": 1234567, // ID number corresponding to the generated transaction
        "total": 8900, // total amount of the transaction (in cents, where 8900 = $89.00)
        "status": "waiting", // selected payment method, awaiting payment confirmation ("waiting" is equivalent to "awaiting")
        "custom_id": null, // optional custom identifier
        "created_at": "2022-10-31 10:18:21", // date and time of transaction creation
        "notification_url": null,
        "items": [
            {
                "name": "My Product", // name of your item, product, or service
                "value": 8900, // value, in cents. For example: 8900 (equivalent to $89.00)
                "amount": 1 // quantity of the item or product
            }
        ],
        "history": [
            {
                "message": "Charge created",
                "created_at": "2222-10-31 10:18:21"
            },
            {
                "message": "Payment via bank slip awaiting confirmation",
                "created_at": "2022-10-31 10:19:05"
            }
        ],
        "customer": {
            "name": "Gorbadoc Oldbuck",
            "cpf": "94271564656",
            "email": "customer_email@server.com",
            "phone_number": "5144916523",
            "address": {
                "street": "Juscelino Kubitschek Avenue",
                "number": "909",
                "complement": null,
                "neighborhood": "Bauxita",
                "city": "Ouro Preto",
                "state": "MG",
                "zipcode": "35400000"
            }
        },
        "payment": {
            "method": "banking_billet", // payment method of the charge (banking_billet corresponds to bank slip)
            "created_at": "2022-10-31 10:19:05",
            "message": "Using the message attribute, this content is displayed in the OBSERVATION field of the charge issued via API and also in the SELLER'S OBSERVATION field in the billing emails sent to the customer You can use up to 4 lines of content, with a maximum of 100 characters per line This message will be seen in emails related to the charge, in the slip or booklet",
            "banking_billet": {
                "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
                "pix": {
                    "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1",
                    "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..."
                },
                "link": "link_https_to_access_the_bank_slip",
                "pdf": {
                    "charge": "link_https_to_the_pdf_of_the_charge"
                },
                "expire_at": "2023-12-30", // due date of the charge in the following format: 2022-12-30 (which corresponds to 30/12/2022)
                "configurations": {
                    "days_to_write_off": 40, // days for automatic write-off of the bank slip after the due date
                    "interest_type": "daily", // interest type - daily if daily or monthly if monthly
                    "interest": 33, // amount charged in interest per day after the due date (in this case, 33 corresponds to 0.033%)
                    "fine": 200 // amount charged in fine after the due date (in this case, 200 corresponds to 2%)
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
    "code": 200, // HTTP response "200" indicating the request was successful
    "data": {
        "charge_id": 1234567, // ID number corresponding to the generated transaction
        "total": 8900, // total amount of the transaction (in cents, where 8900 = $89.00)
        "status": "waiting", // selected payment method, awaiting payment confirmation ("waiting" equivalent to "awaiting")
        "custom_id": null, // optional custom identifier
        "created_at": "2022-10-31 10:18:21", // date and time of transaction creation
        "notification_url": null,
        "items": [
            {
                "name": "Meu Produto", // name of your item, product, or service
                "value": 8900, // value, in cents. For example: 8900 (equivalent to $89.00)
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
            "method": "banking_billet", // payment method of the charge (banking_billet is equivalent to banking bill)
            "created_at": "2022-10-31 10:19:05",
            "message": "Using the message attribute, this content is displayed in the OBSERVATION field of the invoice issued via API
                and also in the SELLER'S OBSERVATION field in the billing emails sent to the customer
                It is possible to use up to 4 lines of content, with a maximum of 100 characters per line
                This message will be seen in emails related to billing, in the billet or booklet",
            "banking_billet": {
                "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
                "link": "link_https_para_acesso_ao_boleto", // link of the generated transaction
                "pdf": {
                    "charge": "link_https_do_pdf_da_cobranca" // link of the invoice PDF
                },
                "expire_at": "2023-12-30", // due date of the invoice in the following format: 2022-12-30 (meaning 30/12/2022)
                "configurations": {
                    "interest": 33, // amount charged in interest per day after the due date (in this case, 33 is equivalent to 0.033%)
                    "fine": 200 // amount charged in fine after the due date (in this case, 200 is equivalent to 2%)
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

You can define or modify the information sent in the `metadata` property of the transaction at any time. This endpoint is of **extreme importance** for updating the notification URL associated with transactions or modifying the previously associated `custom_id`.

To change the `notification_url` and/or `custom_id` of a transaction, you must send a `PUT` request to the route `/v1/charge/:id/metadata`.

<b>Use cases of this endpoint:</b>

<ol>
<li>The integrating party changed the IP of the server associated with the notification URL of the transactions;</li>
<li>The integrating party updated the notification URL for new transactions created (<code>createCharge</code>), but needs to update the previous transactions (<code>updateChargeMetadata</code>) that were generated and are associated with the incorrect/outdated URL;</li>
<li>SSL (https) was installed on the client's server and even if the client sets up a 301 or 302 redirection rule, it will be necessary to define the new URL in transactions that are using the "old" URL;</li>
<li>The integrating party generated charges without informing the notification URL when sending the transaction creation request;</li>
<li>Modify or add information to the <code>custom_id</code> attribute associated with previously generated transactions;</li>
<li>Among other possible scenarios.</li>
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
 

  ## Change expiration date of an existing transaction

   Allows changing the due date of a transaction whose payment method is <code>banking_billet</code> (banking billet) and has not been paid yet.

  To do so, you need to provide the <code>charge_id</code> of the desired transaction and the new due date in the format <code>YYYY-MM-DD</code> within the <code>expire_at</code> attribute. You must send a <code>PUT</code> request to the route <code>/v1/charge/:id/billet</code>.

  <div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>The new due date must be at least <em>greater</em> than the current date.</p>
</div>
<br/>

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/billet</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_alterar_data_de_vencimento.md" />
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
    "expire_at": "2023-12-30"
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

  ## Cancel an existing transaction 
 
A transaction can be canceled only if it has the status <code>new</code>, <code>waiting</code>, <code>unpaid</code>, or <code>link</code>.

When a transaction is canceled, there is only one condition for the status to be changed again: if the customer prints the billet before the integrator cancels the transaction, they can make the payment normally at a bank branch. In this case, both the integrator and the payer will receive the payment confirmation as usual, and the status of the charge will be changed from <code>canceled</code> to <code>paid</code>.

To cancel a transaction (for example, cancel a billet), you must send a <code>PUT</code> request to the route <code>/v1/charge/:id/cancel</code>.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/cancel</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_id.md" />
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

  ## Resend the bank slip to the desired email address 
  
If the transaction is a bank slip <code>banking_billet</code> and it has the status <code>waiting</code> or <code>unpaid</code>, it's possible to resend the billet via email.

Just send the <code>charge_id</code> of the transaction and the valid email address to which you want to send the billet.

To resend a billet via email, you must send a <code>POST</code> request to the route <code>/v1/charge/:id/billet/resend</code>.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/billet/resend</b>
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



<br/>

  ## Add a description to a transaction history
  
The history of a transaction shows all the actions that have occurred so far, but custom messages do not affect the transaction itself; they only appear in the history. You can view the transaction history in the interface or by using the transaction details endpoint.

To do this, simply send the <code>charge_id</code> identifier and the message you want to add to the transaction history. The description should be between 1 and 255 characters.

To add custom messages to the history of a transaction, you must send a <code>POST</code> request to the route <code>/v1/charge/:id/history</code>.

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

## Define that the transaction will be of the balance sheet type 
  
After creating the transaction, it will be time to define that the generated boleto will be of the balance-sheet type.

To do this, you must send a <code>POST</code> request to the route <code>/v1/charge/:id/balance-sheet</code>.

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>NOTE</b>
  </div>
It is important to note that there is no fixed standard for the items displayed on the balance-sheet boleto. The integrator can define, through the appropriate attributes, the number of columns (up to 4), lines, texts, and values that will be shown on the boleto. In summary, the integrator works with a table built in HTML but in JSON format.
</div>
<br/>


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/balance-sheet</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/billet/billet_balancete.md" />
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
    "title": "Balancete Demonstrativo - Periodo 25/06/2018 a 25/07/2018",
    "body": [{
      "header": "Demonstrativo de Consumo",
      "tables": [{
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Despesa de condomínio:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Total lançado",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "Rateio",
          "colspan": 1
        }],
        [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Vigilância Contratado:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 300,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 75,00",
          "colspan": 1
        }], 
        [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Zeladoria Contratado:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 130,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 32,00",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Jardinagem:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 80,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 20,00",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Tarifa Bancária:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 10,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 2,50",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Despesa condomínio:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 800,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 320,00",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Reforma de prédio:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 350,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 140,00",
          "colspan": 1
        }],  [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Investimentos:",
          "colspan": 1
        },
        {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "Total:",
          "colspan": 1
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 1320,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 450,00",
          "colspan": 1
        }], [{
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": " ",
          "colspan": 1
        },{
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "Total:",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 350,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 140,00",
          "colspan": 1
        }]]
      },
      {
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Despesas de Consumo",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de gás:",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Data: 25/11/2017",
          "colspan": 3
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Anterior",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Atual Consumo",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "g/l",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "Total",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "49,000000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "63,000000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "14,000000",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 53,50",
          "colspan": 1
        }]]
      }, 
      {
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de água:",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Data: 25/11/2017",
          "colspan": 3
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Anterior",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Atual Consumo",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "m³",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "Total",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "112,500000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "114,900000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "2,400000",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 43,00",
          "colspan": 1
        }]]
      }, 
      {
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de esgoto:",
          "colspan": 1
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Data: 25/11/2017",
          "colspan": 3
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Anterior",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Atual Consumo",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "m³",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "Total",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "0,000000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "0,000000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "0,00",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 34,40",
          "colspan": 1
        }]] 
      }, { 
          "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Resumo do rateio",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Despesas de condomínio",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 450,00",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Investimento",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 140,00",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Fundo de reserva 10%",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 79,59",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de gás",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 53,50",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de água",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 43,00",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de esgoto",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 34,40",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Garagens",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 5,00",
          "colspan": 2
        }],  [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Taxa de administradora",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 25,00",
          "colspan": 2
        }], [{
          "align": "right",
          "color": "#DC143C",
          "style": "bold",
          "text": "Total geral:",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "R$ 823,49",
          "colspan": 2
        }]]
      }]
    },
    {
      "header": "Balancete Geral",
      "tables": [{
        "rows": [[{
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "RECEITAS",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "RECEITAS DE CONDOMÍNIO",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 2.090,12",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "100,00%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Taxa de Condominio",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 1.030,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "49,28%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Investimentos",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 280,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "13,40%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Gás",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 50,73",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "2,43%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Garagens",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 23,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "1,10%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Reserva Técnica",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 183,19",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "8,67%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Água",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 249,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "11,91%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Esgoto",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 199,20",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "9,53%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Taxa Administradora",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 75,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "3,59%",
          "colspan": 1
        }]] }, {
        "rows": [[{
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "DESPESAS",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "DESPESAS DE CONDOMÍNIO",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 1.670,12",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "100,00%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "DESPESAS DE AQUISIÇÕES",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Despesas de condomínio",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 800,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "47,90%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Reformas do prédio",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 350,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "20,96%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": " ",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 1.150,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "68,86%",
          "colspan": 1
        }]] } , {
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "DESPESAS COM SERVIÇOS",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Vigilância Contratado",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 300,00",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "17,96%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Zeladoria Contratado",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 130,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "7,78%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Jardinagem",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 80,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "4,79%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": " ",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 510,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "30,54%",
          "colspan": 1
        }]]} , {
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "DESPESAS BANCÁRIAS",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Tarifa Bancária",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 10,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "0,60%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": " ",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 10,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "0,60%",
          "colspan": 1
        }]] } , {
        "rows": [[{
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "Resumo de Prestação de Contas",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "RECEITAS",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 2.090,12",
          "colspan": 2
        }],  [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "DESPESAS",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 1.670,00",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": " ",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "(Receitas - Despesas)R$ 420,12",
          "colspan": 2
        }]]} , {
        "rows": [[{
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "Resumo de Saldos",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Conta",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Saldo Anterior",
          "colspan": 1
        },{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Entradas Saídas",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "Saldo Atual",
          "colspan": 1
        }],  [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "BANCOS",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "21.816,28",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "2.090,12 1670,00",
          "colspan": 2
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "22.236,40",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Banco do Brasil",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "21.816,28",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "2.090,12 1670,00",
          "colspan": 2
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "22.236,40",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": " ",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "(Bancos + Caixa)R$ 22.236,40",
          "colspan": 2
        }]] } , {
        "rows": [[{
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "Contas a Receber",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Contas a Receber até 30/09/2017",
          "colspan": 3
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 2.271,27",
          "colspan": 1
        }],  [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Contas a Receber no Período de 01/10/17 até 30/10/2017",
          "colspan": 3
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 549,31",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Total de Contas a Receber",
          "colspan": 3
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 2.820,58",
          "colspan": 1
        }]]
      }]
    }]
}
  ``` 
  </TabItem>
  </Tabs>

  <br/>   
        
  <b>Responses</b>

 As a result of consuming the boleto balancete code, you can see an example of a balance sheet layout, as shown in the image:

 <div className="figure"><img src="/img/boletobalancete.jpg" alt="banner" /></div>

  <br/>


</details>

</div>
<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>

The information contained in the balance sheet is not used by Efí. We receive the content of the request from your system/application and only assemble the cobrança the way the integrator expects, following the example layout above. In other words, Efí does not validate the information or perform calculations on the balance sheet; it only processes and organizes the data within the layout specified by your request to the route <code>POST /charge/:id/balance-sheet</code>.
</div>
<br/>


<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
The requests to the balance sheet endpoint must not exceed 300 KB (request body).
</div>

<br/>


## Marking a specific transaction as paid (manual settlement)

Sometimes, customers pay invoices in other ways, such as with cash or bank transfer. In the Efí account, it is only possible to manually confirm payments made by boleto or installment payment. Payments made through payment links, even if paid by boleto, cannot be manually confirmed.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
When a transaction is marked as paid, no payment value is returned via API. Discounts, fines, and interest will not be applied automatically.
</div>
<br/>

Here are two ways to manually confirm payment for an invoice in Efí:

### 1. Through the Efí dashboard:

<ul>
<li>Log in to your Efí account;</li>
<li>Access the "Receber" menu, then "Gestão de cobranças";</li>
<li>Select the "Boletos" option;</li>
<li>Choose the invoice you want to confirm;</li>
<li>Then, click on the blue "Marcar como pago" button.</li>
</ul>

This operation does not incur any fees.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Note</b>
</div>
It is not possible to manually confirm payment for invoices that have been canceled.
</div>
<br/>


### 2. Via API request:

Only transactions with the status waiting or unpaid can be manually confirmed. There are two endpoints responsible for manual payment confirmations:
<ul>
<li><code>settleCharge</code>: allows marking a specific transaction as paid (manual settlement);</li>
<li><code>settleCarnetParcel</code>: allows marking a specific installment of a carnê as paid (manual settlement).</li>
</ul>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Note</b>
</div>
<p>
Payment confirmations can be:
</p>
<p>
<li><b>Automatic Confirmations</b>: this is the default mechanism offered by the API through the <a href="/en/docs/api-cobrancas/notificacoes#receiving-notifications" target="_blank">notification URL.</a> In other words, we send a POST to your notification URL as soon as there is a change in the transaction status, your system receives this information and performs the necessary actions for which it was designed. In this case, the status <code>paid</code> will be contained in the notification we send. Therefore, the transaction status will be <code>paid</code>.</li>

<li><b>Manual Confirmations</b>: represented by the <code>settleCharge</code> and <code>settleCarnetParcel</code> endpoints. This is when the payment was made through alternative payment methods (e.g., cash payment), and the integrator manually confirmed it through the Efí dashboard, via API request, or through their own management system. In this case, the transaction status will be <code>settled</code>.</li>
</p>
</div>
<br/>


#### Marking a specific transaction as paid

Allows marking a specific transaction as paid (manual settlement).

To mark a transaction as paid (manual settlement), you should send a <code>PUT</code> request to the route <code>/v1/charge/:id/settle</code>.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/settle</b>
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

  The responses below represent consumption Success(201).
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

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
  </div>
Transactions marked as paid do not generate financial movements in an Efí account, as the financial flow does not occur under Efí's control.
</div>


<br/>


</div>