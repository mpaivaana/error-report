---
id: split-de-pagamento
title: Split payment
hide_title: true
sidebar_label: Split payment
---
<h1 className="titulo">Split payment</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Modal from "@site/src/scripts/modal.js" 
import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Step by step to generate a charge with the split payment configuration in the Efí API
</div>

<br/>
<br/>

## Introduction

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>

<p><strong>Payment Split</strong> can only be performed between Efí accounts, with no maximum limit on the number of accounts for the transfer.</p>
</div>
<br/>

The **Efí Payment Split** can be used in situations where the amount paid by the buyer needs to be divided among two or more sellers, according to a percentage or fixed value defined at the time the charge is created.

The concept of **Payment Split** is simple. It is an online retail environment where multiple sellers offer their products in one place. Imagine it as a virtual mall, where various stores come together to sell different products and services, offering a wider variety of options to customers.

With Efí Payment Split, any Efí account can create its own sales platform with multiple sellers. With this solution, you can use your website to make sales and, through integration, define how the received amount will be divided among the different Efí accounts. This works for both your account and those of your partners, enabling a more complete and integrated shopping experience.
<br/>


## How it works

- If an item in a transaction is marked as a payment Split item, all items will be considered payment Split items;

- The integrator has the flexibility to configure the split, choosing between percentage division or a fixed amount. In percentage transfer configurations, the Efí intermediation fee can be configured in two ways: <code>mode = 1</code> for the fee to be deducted only from the main account that issued the charge, and <code>mode = 2</code> for the fee to be deducted proportionally to the percentage defined for each account receiving the transfer. If the <code>mode</code> attribute is not provided in the request, the default will be <code>mode = 2</code>.

- In fixed amount transfer configurations, the fee must be deducted only from the main account that generated the charge. Therefore, the integrator must specify <code>mode = 1</code>.

- When using percentage division, if the total transfers of an item are less than 100%, the remaining amount will be automatically transferred to the integrator's account. If the total transfers of an item exceed 100%, the transaction cannot be generated;

- When using fixed amount division, if the total transfers of an item are less than the total charge amount, the remaining amount will be automatically transferred to the integrator's account. If the total transfers of an item exceed the total charge amount, the transaction cannot be generated;

- Payment Split transfers are made individually for each product in the charge. Each product can have transfers to different accounts in the same charge;

- It is not possible to make a partial transfer of the shipping amount;

- For the Payment Split to work, the only necessary data is the account identifier ("<a href="/img/identificador.png" target="_blank">payee_code</a>") of the accounts that will receive the transfers;

- Transfers cannot have a value equal to zero percent;

- It is possible to generate charges with multiple items, some with Payment Split configuration and others without;

- It is not possible to make two transfers to the same account on the same item;

- It is allowed to have different or equal transfer amounts to the same account on different items of the same transaction.


<div className="payment">
<details className="col-100">
  <summary>
<b>Payment Split Configurations</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Description of the attributes for configuring Payment Split
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/marketplace/marketplace.md" />
          </div>
          <br/>
      </div>
<br/>
</details>
</div>

<br/>


## Creating a Payment Split Transaction in One Step

In this option, the request body must contain all the minimum required attributes for issuing the title.

This option allows you to create a transaction and associate a payment method (bank slip or credit card) in just one step.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>For One Step transaction creation to occur smoothly, it is necessary to update your SDK. All necessary files for this are available in our <a href="https://github.com/efipay" target="_blank">repository</a> and in the documentation.</p>
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
          "mode"
          "repasses" 
              "payee_code"  
              "percentage"  
              "fixed"
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
          <Modal filename="/markdown/i18n/charges/marketplace/marketplace_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Payment Split - Percentage (Billet)', value: 'exemplo1', },
    { label: 'Payment Split - Fixed (Billet)', value: 'exemplo2', },
    { label: 'Payment Split (Credit Card)', value: 'exemplo3', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1,
        "marketplace": {
          "repasses": [
            {
              "payee_code": "payee_code1",
              "percentage": 2500
            },
            {
              "payee_code": "payee_code2",
              "percentage": 1500
            }
          ]
        }
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
        "amount": 1,
        "marketplace": {
          "repasses": [
            {
              "payee_code": "payee_code1",
              "fixed": 2500
            },
            {
              "payee_code": "payee_code2",
              "fixed": 1500
            }
          ]
        }
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

   <TabItem value="exemplo3">

```json
{
  "items": [
    {
      "name": "Meu Produto",
      "value": 5990,
      "amount": 1,
      "marketplace": {
        "repasses": [
          {
            "payee_code": "payee_code1",
            "percentage": 2500
          },
          {
            "payee_code": "payee_code2",
            "percentage": 1500
          }
        ]
      }
    }
  ],
  "payment": {
    "credit_card": {
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "birth": "1990-08-29",
        "phone_number": "5144916523"
      },
      "installments": 1,
      "payment_token": "",
      "billing_address": {
        "street": "Avenida Juscelino Kubitschek",
        "number": "909",
        "neighborhood": "Bauxita",
        "zipcode": "35400000",
        "city": "Ouro Preto",
        "complement": "",
        "state": "MG"
      }
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
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // digitable line of the boleto
      "pix": {
        "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
        "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code image
      },
      "link": "link_https_para_acesso_o_bolix", // responsive link to the generated Bolix
      "billet_link": "link_https_para_acesso_o_bolix", // link to the generated Bolix
      "pdf": {
        "charge": "link_https_do_pdf_da_cobranca" // link to the PDF of the Bolix
      },
      "expire_at": "2023-12-15", // due date of the boleto in the following format: 2022-12-15 (i.e., equivalent to 15/12/2022)
      "charge_id": numero_charge_id, // ID number of the generated transaction
      "status": "waiting", // selected payment method, awaiting payment confirmation ("waiting" equals "aguardando")
      "total": 5990, // value, in cents. For example: 5990 (equals R$ 59.90)
      "payment": "banking_billet" // payment method associated with this transaction ("banking_billet" equals "boleto bancário")
    }
}
  ```
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // digitable line of the boleto
      "link": "link_https_para_acesso_o_boleto", // responsive link to the Boleto
      "billet_link": "link_https_para_acesso_o_boleto", // link to the Boleto
      "pdf": {
        "charge": "link_https_do_pdf_da_cobranca" // link to the PDF
      },
      "expire_at": "2023-12-15", // due date of the boleto in the following format: 2022-12-15 (i.e., equivalent to 15/12/2022)
      "charge_id": numero_charge_id, // ID number of the generated transaction
      "status": "waiting", // selected payment method, awaiting payment confirmation ("waiting" equals "aguardando")
      "total": 5990, // value, in cents. For example: 5990 (equals R$ 59.90)
      "payment": "banking_billet" // payment method associated with this transaction ("banking_billet" equals "boleto bancário")
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>



<br/>


## Creating a Payment Split Transaction in Two Steps

<ol>
<li>Create the transaction, providing account(s) for payout, item/product/service, value, quantity, etc;</li>
<li>Associate the desired payment method, providing the <code>charge_id</code> of the transaction and payer customer data.</li>
</ol>

The rest of this page presents detailed procedures, but remember to install one of our libraries on your server to execute the example codes. <a href="/en/docs/sdk/introducao" target="_blank">Make sure the Efí SDK has been installed.</a>

### 1. Create transaction

Transactions with at least one item defined as 'Split Payment item' or freight values destined to different accounts from the integrator account are called 'Split Payment Transactions'. With Efí Split Payment, it's possible to automatically divide the amount paid by the end customer between the seller and the supplier, without the need to do this manually.

To start, we need to generate the transaction, providing the Efí accounts for payout, the name of the item/product/service, the transaction value, quantity, and other relevant information.

It's important to note that the Efí intermediary fee can be configured in two ways: <code>mode = 1</code>, so that the fee is deducted only from the account that issued the charge, or <code>mode = 2</code> so that the fee is deducted proportionally to the percentage defined for all accounts that will receive the payouts. If the <code>mode</code> attribute is not informed in the request, it will be set as default <code>mode = 2</code>.

In the example below, we show how to use payouts in a transaction of <strong>R$ 50.00</strong>. According to the code, the amount will be divided among 3 Efí accounts. The first account will receive <strong>25%</strong> of the value, the second account will receive <strong>15%</strong>, and the third will receive the remainder, which in this case is <strong>60%</strong> of the value.

The <code>payee_code</code> attribute is the Efí 'account identifier' and will be used to identify the accounts that will receive the payouts. You can find this identifier on your platform at (<a href="/img/identificador.png" target="_blank">see where to find it</a>).


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
          <Modal filename="/markdown/i18n/charges/marketplace/marketplace_two_steps_1.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data - percentage', value: 'exemplo1', },
    { label: 'Input data - fixed', value: 'exemplo2', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1,
        "marketplace": {
          "repasses": [
            {
              "payee_code": "payee_code1",
              "percentage": 2500
            },
            {
              "payee_code": "payee_code2",
              "percentage": 1500
            }
          ]
        }
      }
    ]
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
        "amount": 1,
        "marketplace": {
          "repasses": [
            {
              "payee_code": "payee_code1",
              "fixed": 2500
            },
            {
              "payee_code": "payee_code2",
              "fixed": 1500
            }
          ]
        }
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
      "charge_id": numero_charge_id, // ID number of the generated transaction
      "status": "new", // charge generated, waiting for payment method to be defined
      "total": 8900, // total amount of the transaction (in cents, where 8900 = R$89.00)
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


### 2. Associate with payment method via boleto

After creating the Split Payment transaction, you will receive the <code>charge_id</code>. This identifier will be used for you to choose which payment method you want to use for this transaction.


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
          <Modal filename="/markdown/i18n/charges/marketplace/marketplace_two_steps_2.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Example Billet', value: 'exemplo1', },
    { label: 'Example Credit Card', value: 'exemplo2', },
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
          "fine": 200,
          "interest": 33
        },
        "message": "Pague pelo código de barras ou pelo QR Code"
      }
    }
}
  ``` 
  </TabItem>

   <TabItem value="exemplo2">

  ```json
{
    "payment": {
      "credit_card": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "birth": "1990-08-29",
          "phone_number": "5144916523"
        },
        "installments": 1,
        "payment_token": "",
        "billing_address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "neighborhood": "Bauxita",
          "zipcode": "35400000",
          "city": "Ouro Preto",
          "complement": "",
          "state": "MG"
        }
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
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // typable line of the boleto
      "pix":{
        "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
        "qrcode_image": "data: image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDQ1djQ1SD. .." // QR Code imagem
      },
      "link": "link_https_to_access_the_bolix", // responsive Bolix link generated
      "billet_link":"link_https_to_access_the_bolix", // Bolix link generated
      "pdf": {
        "charge":"link_https_do_pdf_da_cobranca" // Bolix PDF link
      },
      "expire_at": "2023-12-30", // expiration date of the boleto in the following format: 2022-12-15 (i.e. equivalent to 15/12/2022)
      "charge_id": numero_charge_id, // ID number of the transaction generated
      "status": "waiting", // payment method selected, waiting for payment confirmation 
      "total": 8900, // amount, in cents. For example: 5990 (equals R$59.90)
      "payment": "banking_billet" // payment method associated with this transaction 
}
  ```
  </TabItem>

  <TabItem value="200">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // typable line of the boleto
      "link": "link_https_to_access_the_bolix", // responsive link to the generated Boleto
      "billet_link":"link_https_para_acesso_o_bolix", // link to the generated Boleto
      "pdf": {
        "charge":"link_https_do_pdf_da_cobranca" // PDF link
      },
      "expire_at": "2023-12-30", // expiration date of the boleto in the following format: 2022-12-15 (i.e. equivalent to 15/12/2022)
      "charge_id": numero_charge_id, // ID number of the transaction generated
      "status": "waiting", // payment method selected, waiting for payment confirmation 
      "total": 8900, // amount, in cents. For example: 5990 (equals R$59.90)
      "payment": "banking_billet" // payment method associated with this transaction 
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>



## Return information of existing transaction

To retrieve information about a transaction (billet or credit card), you must send a <code>GET</code> request to the route <code>/v1/charge/:id</code>.

   
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
      { label: '🟢 200 (Bolix)', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200,
    "data": {
        "charge_id": 661176817,
        "total": 1100,
        "status": "waiting",
        "custom_id": null,
        "created_at": "2024-01-08 11:25:28",
        "notification_url": null,
        "items": [{
            "name": "Product 1",
            "value": 1000,
            "amount": 1,
            "marketplace": {
                "repasses": [{
                        "percentage": 1000,
                        "payee_code": "84569721306548792010354876123456"
                    },
                    {
                        "percentage": 9000,
                        "payee_code": "36987410213546789104587410235689"
                    }
                ]
            }
        }],
        "history": [{
                "message": "Cobrança criada",
                "created_at": "2024-01-08 11:25:28"
            },
            {
                "message": "Pagamento via boleto aguardando confirmação",
                "created_at": "2024-01-08 11:25:29"
            },
            {
                "message": "Cobrança enviada para oldbuck@efipay.com.br",
                "created_at": "2024-01-08 11:25:29"
            }
        ],
        "shippings": [{
            "name": "Default Shipping Cost",
            "value": 100,
            "payee_code": "3804b62b6241d2ae9dd0896297d4ea74"
        }],
        "customer": {
            "name": "Gorbadoc Oldbuck",
            "cpf": "94271564656",
            "birth": "1977-01-15",
            "email": "oldbuck@efipay.com.br",
            "phone_number": "5144916523"
        },
        "payment": {
            "method": "banking_billet",
            "created_at": "2024-01-08 11:25:28",
            "message": null,
            "banking_billet": {
                "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
                "pix": {
                    "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1",
                    "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..."
                },
                "link": "link_https_para_acesso_o_bolix",
                "billet_link": "link_https_para_acesso_o_bolix",
                "pdf": {
                    "charge": "link_https_do_pdf_da_cobranca"
                },
                "expire_at": "2023-12-15"
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


<div className="admonition admonition_tip">
<div>
    <img src="/img/info-circle-green.svg"/> <b>Payment made as a Juridical person (PJ)</b>
</div>
<p>The customer associated with the transaction can be a Juridical person. In this case, it is necessary to inform the Company Name and CNPJ of the paying company in the attribute <code>juridical_person</code>.</p>

</div>
<br/>

<div className="admonition admonition admonition_tip">
<div>
    <img src="/img/lightbulb-on-green.svg"/> <b>List of all possible transaction statuses</b>
</div>
<p>All transactions have a status that represents the "situation" of that transaction. It is important to know the possible statuses of a transaction in the API to apply the appropriate treatments in your system.</p>

</div>
<br/>

<div className="admonition admonition_tip">
  <div>
  <img src="/img/lightbulb-on-green.svg"/> <b>Callbacks (notifications) from API transactions to your system</b>
  </div>
<p>Notifications allow you to receive information when the status of a transaction changes, such as when a boleto is paid, for example.</p>
<p>Check <a href="/en/docs/api-cobrancas/notificacoes" target="_blank">here</a> all the details on how to implement your notification URL.</p>
  </div>



</div>