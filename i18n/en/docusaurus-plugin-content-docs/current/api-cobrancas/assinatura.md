---
id: assinatura
title: Subscription
hide_title: true
sidebar_label: Subscription
---
<h1 className="titulo">Subscription</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Introduction to the Subscriptions (Recurrence) functionality in the Efí API
</div>

<br/>
<br/>

## Introduction

Bill your customers recurrently through subscription plans. With this option, your customers authorize debits, and you don't have to worry about sending invoices every month, avoiding the risk of missed payments.

A subscription is a set of transactions generated recurrently. To create a subscription, you must generate an invoice and include information about the number of installments and the frequency at which the system should generate transactions identical to the first one. This information is called **Subscription Plans**.

A subscription is characterized by **recurrent billing** and can be done via boleto or credit card:

- **Credit Card:** Your customer will provide payment details, and the charge will be debited according to the plan's configuration. The amount will be deducted until all installments are paid or until the subscription is canceled by you or the customer. To calculate card limits, we consider the monthly value, not the total of all installments.

- **Bank Slip:** Your customer will receive the invoice by email 10 days before the due date until the requested number of installments ends or until you or your customer cancel the subscription. If the automatic charge falls on a weekend or holiday, our system will automatically generate an invoice with the due date for the next business day.

To create a subscription, follow these three steps:


1. [Create the subscription plan](#create-subscription-plan), defining the frequency and how many charges will be generated;
   
2. Create subscriptions to link to the plan in [One Step](#create-subscriptions-to-link-to-the-plan-in-one-step) or [Two Steps](#create-subscriptions-to-link-to-the-plan-in-two-steps);
   
3. [Define the payment method for the subscription and enter the customer's data](#define-the-payment-method-for-the-subscription-and-enter-the-customer's-data).


## How it works

A subscription is created with the status <code>new</code>, indicating that it is ready to be activated. Once the payment method is defined, the status changes to <code>active</code>, indicating that the subscription is active and ready to generate recurring charges.

The subscription will remain active throughout the entire billing cycle but may become inactive for three reasons:

- The payer canceled the service by clicking on the cancellation link in the subscription confirmation email. Thus, the status is changed to <code>canceled</code>;

- The seller canceled the service by clicking on the cancellation link in their payment interface or through the cancellation web service via the <code>/subscription/cancel</code> endpoint or <code>cancelSubscription</code> function of the SDK. Thus, the status is changed to <code>canceled</code>;

- All charges have already been generated. Thus, the status is changed to <code>expired</code>, meaning the subscription is expired, and all charges configured for the subscription have been issued.

To track the subscription, it is important to observe the statuses of the generated transactions. If a transaction cannot be confirmed as paid, the status will be <code>unpaid</code>, indicating that the payment was not completed. In this case, the seller should take appropriate actions, such as suspending the service, attempting to charge in another way, or canceling the subscription.

The two available payment methods are: <a href="/en/docs/api-cobrancas/boleto" target="_blank">boleto</a> and <a href="/en/docs/api-cobrancas/cartao" target="_blank">credit card</a>. With the boleto, the customer receives the boleto based on the repetitions defined in the plan, and it can be sent by email. With the credit card, the charge is automatically debited from the customer's card, following the plan's repetitions.

Both the subscriber and the seller can cancel the subscription at any time. When this happens, both are notified via email, with all the details of the cancellation.


## Create Subscription Plan

Initially, the **subscription plan** will be created, with three pieces of information defined by the integrator:

- <b>name</b> - Name of the subscription plan;
- <b>interval (in months)</b> - Billing frequency (e.g., <code>1</code> for monthly);
- <b>repeats</b> - How many charges should be generated for this plan.

To create a subscription plan, you must send a <code>POST</code> request to the route <code>/plan</code>.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/plan</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/criar_plano.md" />
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
    "name": "Plano de Internet - Velocidade 10 Mb",
    "interval": 1,
    "repeats": 12
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
    "code": 200,
    "data": {
      "plan_id": subscription_plan_id, // ID number referring to the created subscription plan
      "name": "Internet Plan - 10 Mbps Speed", // name of the subscription plan
      "interval": 12, // interval at which charges should be generated, in months
      "repeats": null, // number of times the charge should be generated - in this case, indefinitely
      "created_at": "2016-06-28 15:48:32" // date and time of the transaction creation
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Subscription Payment Retry via Credit Card

Subscription payments made via credit card, which are declined due to operational reasons such as insufficient funds, incorrect data, and temporary issues with the card, can be retried using the API.

This allows for a new attempt at payment without having to repeat the entire billing process, making the flow faster and more efficient.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/retry</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/retentativa.md" />
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
      "credit_card": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "birth": "1990-08-29",
          "phone_number": "5144916523"
        },
        "billing_address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "neighborhood": "Bauxita",
          "zipcode": "35400000",
          "city": "Ouro Preto",
          "complement": "",
          "state": "MG"
        },
        "payment_token": "75bfce47d230b550f7eaac2a932e0878a934cb3",
        "update_card": true
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
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "installments": 1, // number of installments the payment should be divided into
      "installment_value": 8900, // value of the installment. For example: 8900 (equals to R$ 89.00)
      "charge_id": numero_charge_id, // ID number referring to the generated transaction
      "status": "waiting", // selected payment method, awaiting payment confirmation ("waiting" equals to "awaiting")
      "total": 8900, // value in cents. For example: 8900 (equals to R$ 89.00)
      "payment": "credit_card" // payment method associated with this transaction ("credit_card" equals to "credit card")
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
<p>This feature allows the integrator to attempt reprocessing a failed subscription charge. For this, the charge must meet the following criteria:</p>
<p>
<li>the charge must be of credit card type</li>
<li>the charge status must be <code>unpaid</code></li></p>
  </div>

  <br/>


<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Subscription Canceled or Deactivated</b>
</div>
<p>If a subscription is canceled or deactivated, and a new payment attempt is successfully made on the last pending charge, the subscription will be automatically reactivated.</p>

</div>


<br/>

## Return Plan Information

You can retrieve information about created plans. There are advanced filters that can be used to find plans, such as:

- <code>Name</code>: returns results based on the search for the previously registered plan name;
- <code>Limit</code>: maximum limit of response records;
- <code>Offset</code>: determines from which record the search will be performed.

   
<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/plans</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
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
 Input parameter: enter the "name", "limit" and "offset" of the desired plan
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
    "code": 200, // Código HTTP "200" indicando que a requisição foi bem-sucedida
    "data": [
      {
      "plan_id": plan_id_number,
      "name": "Internet Plan - Speed 1 Mbps", // name of the subscription plan
      "interval": 1, // interval at which charges should be generated, in months
      "repeats": null, // number of times the charge should be generated - in this case, indefinitely
      "created_at": "2016-05-02" // date and time of the transaction creation
      },
      {
        "plan_id": plan_id_number,
        "name": "Internet Plan - Speed 10 Mbps", // name of the subscription plan
        "interval": 12, // interval at which charges should be generated, in months
        "repeats": null, // number of times the charge should be generated - in this case, indefinitely
        "created_at": "2016-06-28" // date and time of the transaction creation
      },
      {
        "plan_id": plan_id_number,
        "name": "Internet Plan - Speed 20 Mbps", // name of the subscription plan
        "interval": 10, // interval at which charges should be generated, in months
        "repeats": null, // number of times the charge should be generated - in this case, indefinitely
        "created_at": "2016-06-29" // date and time of the transaction creation
      },
      {
        "plan_id": plan_id_number,
        "name": "Internet Plan - Speed 30 Mbps", // name of the subscription plan
        "interval": 12, // interval at which charges should be generated, in months
        "repeats": null, // number of times the charge should be generated - in this case, indefinitely
        "created_at": "2016-06-29" // date and time of the transaction creation
      }
    ]
}
  ```
 </TabItem>
  </Tabs>

</details>

</div>

<br/>

## Allowing Editing of Subscription Plan Name

You can edit the name of a subscription plan that has already been created. To do this, simply provide the identifier of the <code>plan_id</code> of the plan you wish to edit.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/plan/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
           <Modal filename="/markdown/i18n/charges/subscriptions/editar_nome.md" />
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
   "name": "Meu novo nome do plano"
}
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

## Cancel a Subscription Plan

You can cancel a subscription plan at any time. To do this, simply provide the <code>plan_id</code> of the plan you wish to cancel.


<!-- Método DELETE -->
<div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete>/v1/plan/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/plan_id.md"/>
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

## Create Subscriptions (One Step) to Link to the Plan

After creating the plan, it's time to create subscriptions and link them to the plan. Subscriptions are useful when you need to charge your customers recurrently. With the plan set up, future charges will be automatically generated, following the plan's configuration.

Remember to provide the <code>plan_id</code> of the plan you created earlier to make the association.

To create and link the subscriptions, simply send a <code>POST</code> request to the route <code>/plan/:id/subscription/one-step</code>.


<div className="admonition admonition_tip">
    <div>
        <img src="/img/info-circle-green.svg"/> <b>Attribute "trial_days" allowing to grant a trial period</b>
    </div>
    <p>The API offers the <code>trial_days</code> attribute, which allows defining a free trial period for credit card subscriptions. This attribute is available only when payment is made with <code>credit_card</code>.</p>
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
      { label: '/v1/plan/:id/subscription/one-step', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
  "items"  
      "name"  
      "value"  
      "amount"  
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
                  "percentage"  
                  "currency"  
              "value"  
          "conditional_discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
              "until_date"  
          "configurations"  
              "fine"  
              "interest"  
          "message"  
      "credit_card"  
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
          "billing_address"  
              "street"  
              "number"  
              "neighborhood"  
              "zipcode"  
              "city"  
              "complement"  
              "state"  
          "payment_token"  
          "discount"  
              "type"  
                  "percentage"  
                  "currency"  
              "value"  
          "message"  
          "trial_days"
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/plan/<HighlightVar>:id</HighlightVar>/subscription/one-step</b>
  </summary>

<div className="admonition admonition_tip">
    <div>
        <img src="/img/info-circle-green.svg"/> <b>Attributes</b>
    </div>
    <p>This section describes the attributes for Billet Subscription (<b>Object <code>banking_billet</code></b>) and Credit Card Subscription (<b>Object <code>credit_card</code></b>)</p>
</div>


<br/>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/assinatura_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p> 
      
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data (Bolix)', value: 'exemplo1', },
    { label: 'Input data (Card)', value: 'exemplo2', },
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
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1
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
      { label: '🟢 200 (Cartão)', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "subscription_id": 25329, // ID of the generated subscription
      "status": "active", // Subscription status - active, all charges are being generated
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
      "link": "subscription_billet_link", // Responsive link to the generated subscription billet
      "billet_link": "https://subscription_billet_link", // Direct link to the generated subscription billet
      "pdf": {
          "charge": "subscription_billet_pdf_link" // Link to the PDF of the generated subscription billet
      },
      "expire_at": "2018-12-30", // Due date of the billet in the format YYYY-MM-DD
      "plan": {
          "id": 2758, // ID of the created subscription plan
          "interval": 1, // Billing interval in months (provide 1 for monthly subscription)
          "repeats": null // Number of times the charge will be generated (default: null, charge generated indefinitely or until the plan is canceled)
      },
      "charge": {
          "id": 511843, // ID of the generated transaction
          "status": "waiting", // Payment form status - waiting for payment confirmation
          "parcel": 1, // Parcel number
          "total": 7900 // Total charge amount in cents
      },
      "first_execution": "31/10/2018", // Date of the first subscription execution in DD/MM/YYYY format
      "total": 7900, // Total charge amount in cents
      "payment": "banking_billet" // Payment method (banking_billet for billet)
    }
}
  ```
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "subscription_id": 25328, // ID of the generated subscription
      "status": "active", // Active subscription - all charges are being generated
      "plan": {
          "id": 2758, // ID of the created subscription plan
          "interval": 1, // Billing interval in months (provide 1 for monthly subscription)
          "repeats": null // Number of times the charge will be generated (default: null, charge generated indefinitely or until the plan is canceled)
      },
      "charge": {
          "id": 511842, // ID of the generated transaction
          "status": "waiting", // Payment form status - waiting for payment confirmation
          "parcel": 1, // Parcel number
          "total": 7900 // Total charge amount in cents
      },
      "first_execution": "31/10/2018", // Date of the first subscription execution
      "total": 7900, // Total charge amount in cents
      "payment": "credit_card" // Payment method (credit_card for credit card)
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Create subscriptions to link to the plan in _Two Steps_

First, you need to create the subscription and link it to the plan. You must enter the item/product/service, value and quantity to create the subscription. Then, define the subscription payment method and customer data, entering the <code>charge_id</code> of the transaction and customer data.

### 1. Create subscriptions to link to the plan

With the plan created, it's time to create the subscriptions and associate them with the plans. Subscriptions are useful when you need to bill your customers on a recurring basis. This way, subsequent costs will be created automatically, following the plan configuration.

Remember to enter the <code>plan_id</code> of the plan you created previously to make the association.

To associate subscriptions with plans, simply send a <code>POST</code> request to the route <code>/plan/:id/subscription</code>.

<div className="payment">
<details className="col-100">
  <summary>
<b>Hierarchical structure of Schema attributes that can be used:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/plan/:id/subscription', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
  "items"  
      "name"  
      "value"  
      "amount"  
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
    <b><HighlightPost>POST</HighlightPost> /v1/plan/<HighlightVar>:id</HighlightVar>/subscription</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/assinatura_two_steps_1.md" />
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
        "name": "Internet - Mensalidade",
        "value": 6990,
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
       "subscription_id": subscription_id_number, // Subscription ID generated
      "status": "new", // Charge generated, awaiting payment method definition
      "custom_id": null, // Optional custom identifier
      "charges": [
        {
          "charge_id": charge_id_number, // ID number referring to the generated transaction
          "status": "new", // Charge generated, awaiting payment method definition
          "total": 6990, // Total transaction amount (in cents, where 6990 = R$69.90)
          "parcel": 1 // Number of installments
        }
      ],
      "created_at": "2016-06-29 10:42:59" // Date and time of transaction creation
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>


### 2. Define the payment method for the subscription and customer's data

After creating the subscription plan and linking the subscriptions to the plans, it's time to define the recurring payment method for the subscriptions. This can be done through a bank slip or credit card.

- **Credit Card**: Your customer makes the payment according to the frequency you defined (monthly, quarterly, etc.) in the plan, with the same amount automatically charged to your customer's credit card. With credit card recurrence, your customer enters the card details only on the first payment, after which the charge is automatically made without them needing to enter the details again.


<div class="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Credit Card Subscription</b>
</div>
<p>To generate a credit card subscription, before consuming the <code>POST /v1/subscription/:id/pay</code> endpoint, you need to obtain the payment_token. You can see more details in <a href="/en/docs/api-cobrancas/cartao#obtaining-the-payment_token" target="_blank">Obtaining the payment_token</a>.</p>
</div>
<br/>

- **Bank Slip**: It will be generated according to the number of repetitions defined by the plan and can be sent by email. Both the subscriber and the seller can cancel the subscription at any time. When this happens, both parties are notified via email, with all the details of the cancellation.
  
<div class="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>"trial_days" attribute allowing a trial period</b>
</div>
<p>The API offers the <code>trial_days</code> attribute, which allows defining a free trial period for credit card subscriptions. This attribute is available only when payment is made with <code>credit_card</code>.</p>
</div>
<br/>

To associate subscriptions with the payment method, you should send a <code>POST</code> request to the <code>/subscription/:id/pay</code> route.


<div className="payment">
<details className="col-100">
  <summary>
<b>Hierarchical structure of Schema attributes that can be used:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/subscription/:id/pay', value: 'entrada', },
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
                  "percentage"  
                  "currency"  
              "value"  
          "conditional_discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
              "until_date"  
          "configurations"  
              "fine"  
              "interest"  
          "message"  
      "credit_card"  
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
          "billing_address"  
              "street"  
              "number"  
              "neighborhood"  
              "zipcode"  
              "city"  
              "complement"  
              "state"  
          "payment_token"  
          "discount"  
              "type"  
                  "percentage"  
                  "currency"  
              "value"  
          "message"  
          "trial_days"
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/subscription/<HighlightVar>:id</HighlightVar>/pay</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/assinatura_two_steps_2.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data (Bolix)', value: 'exemplo1', },
    { label: 'Input data (Card)', value: 'exemplo2', },
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
      { label: '🟢 200 (Cartão)', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "subscription_id": 25329, // ID number referring to the generated subscription
      "status": "active", // active subscription - all charges are being generated
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
      "link": "subscription_billet_link", // Responsive link to the generated subscription billet
      "billet_link": "https://subscription_billet_link", // Link to access the generated subscription billet
      "pdf": {
        "charge": "subscription_billet_pdf_link" // Link to the PDF of the generated subscription billet
      },
      "expire_at": "2018-12-30", // Due date of the billet in the format YYYY-MM-DD (e.g., 2018-12-30 corresponds to December 30, 2018)
      "plan": {
        "id": 2758, // ID number referring to the created subscription plan
        "interval": 1, // Billing interval (in months) - provide 1 for monthly subscription
        "repeats": null // Number of times the charge will be generated (default: null, charge generated indefinitely or until the plan is canceled)
      },
      "charge": {
        "id": 511843, // ID number referring to the generated transaction
        "status": "waiting", // Selected payment method, awaiting payment confirmation
        "parcel": 1, // Number of installments
        "total": 7900 // Total charge amount
      },
      "first_execution": "31/10/2018", // Date of the first subscription execution
      "total": 7900, // Total charge amount
      "payment": "banking_billet" // Payment method (banking_billet corresponds to billet)
    }
}
  ```
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "subscription_id": 25328, // ID number referring to the generated subscription
      "status": "active", // active subscription - all charges are being generated
      "plan": {
        "id": 2758, // ID number referring to the created subscription plan
        "interval": 1, // Billing interval (in months) - provide 1 for monthly subscription
        "repeats": null // Number of times the charge will be generated (default: null, charge generated indefinitely or until the plan is canceled)
      },
      "charge": {
        "id": 511842, // ID number referring to the generated transaction
        "status": "waiting", // Selected payment method, awaiting payment confirmation
        "parcel": 1, // Number of installments
        "total": 7900 // Total charge amount
      },
      "first_execution": "31/10/2018", // Date of the first subscription execution
      "total": 7900, // Total charge amount
      "payment": "credit_card" // Payment method (credit_card corresponds to credit card)
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>

 ## Retrieve Information of a Subscription Linked to a Plan

This feature allows you to obtain information about a subscription linked to a specific plan.

   
<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/subscription/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/subscription_id.md" />
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
  Input parameter: enter the "subscription_id" of the desired transaction
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
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "subscription_id": subscription_id_number, // ID number referring to the generated subscription
      "value": 6990, // subscription value (6990 corresponds to R$69.90)
      "status": "new", // generated charge, awaiting payment method definition
      "custom_id": null, // optional custom identifier
      "notification_url": null, // address of your URL to receive transaction status change notifications
      "payment_method": null, // payment method (null = not yet defined), (banking_billet = banking billet) or (credit_card = credit card)
      "next_execution": null, // date of the next execution
      "next_expire_at": null, // date of the next due date in the format 2016-12-30
      "plan": {
        "plan_id": plan_id_number, // ID number referring to the created subscription plan
        "name": "Internet Plan - Speed 10 Mb", // name of the subscription plan
        "interval": 12, // interval at which charges should be generated, in months
        "repeats": null // number of times the charge will be generated - in this case, indefinitely
      },
      "occurrences": 0,
      "created_at": "2016-06-29 10:42:59", // date and time of transaction creation
      "history": [
        {
          "charge_id": charge_id_number, // ID number referring to the generated transaction
          "status": "new", // generated charge, awaiting payment method definition
          "created_at": "2016-06-29 10:42:59" // date and time of transaction creation
        }
      ]
    }
}
  ```
 </TabItem>
  </Tabs>

</details>

</div>

<br/>

## Associate Plan with Payment Link

After creating your Subscription plan, you can generate a payment link to associate subscriptions with this plan. To do this, send a POST request to the route /v1/plan/:id/subscription/one-step/link.


<div className="payment">
<details className="col-100">
  <summary>
<b>Hierarchical structure of Schema attributes that can be used:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/plan/:id/subscription/one-step/link', value: 'entrada', },
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
    <b><HighlightPost>POST</HighlightPost> /v1/plan/<HighlightVar>:id</HighlightVar>/subscription/one-step/link</b>
  </summary>

<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Attributes</b>
</div>
<p>This section describes the attributes for Billet Subscription (<b>Object <code>banking_billet</code></b>) and Credit Card Subscription (<b>Object <code>credit_card</code></b>)</p>


</div>
<br/>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/assinatura_link_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p> 
      
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', }
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "amount": 2,
        "name": "Silicon Valley",
        "value": 564
      }
    ],
    "metadata": {
        "custom_id": "Assinatura",
        "notification_url": "sua_url_notificação"
    },
  
    "settings": {
      "payment_method": "all" , 
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
        "subscription_id": 8021,
        "status": "new",
        "custom_id": "Assinatura",
        "charge": {
          "id": 371496106,
          "status": "link",
          "total": 1128,
          "parcel": 1
        },
        "payment_url": "https://pagamento.gerencianet.com.br/:identificador",
        "payment_method": "all",
        "conditional_discount_date": null,
        "request_delivery_address": true,
        "expire_at": "2025-02-08",
        "created_at": "2021-11-09 12:06:54"
      }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>


<br/>


 ## Include "notification_url" and "custom_id" in an existing subscription

It is possible to define or alter the information sent in the <code>metadata</code> property of the transaction at any time. This is useful for updating the notification URL linked to transactions or modifying the <code>custom_id</code> previously associated with your transactions.

To make these changes, you must send a <code>PUT</code> request to the route <code>/v1/charge/:id/metadata</code>, where <code>:id</code> is the <code>charge_id</code> of the transaction you want to update.

<b>Use cases of this endpoint:</b>

<ol>
<li>The integrating party changed the server IP associated with the notification URL of the transactions;</li>
<li>The integrating party updated the notification URL for new transactions created (<code>createCharge</code>), but also needs to update previous transactions (<code>updateChargeMetadata</code>) that were generated and are associated with the incorrect/outdated URL;</li>
<li>SSL (https) was installed on the client's server and even if the client sets a 301 or 302 redirection rule, it will be necessary to set the new URL in transactions that are using the "old" URL;</li>
<li>The integrator generated charges without informing the notification URL when sending the transaction creation request;</li>
<li>Modify or append information along with the <code>custom_id</code> attribute associated with previously generated transactions; and other possible scenarios.</li>
</ol>



<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/subscription/<HighlightVar>:id</HighlightVar>/metadata</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/subscription_url_de_retorno.md" />
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

## Modify subscription data

You can edit active subscriptions in a subscription plan. To do this, simply provide the fields you want to edit and the <code>subscription_id</code> of the subscription.

To make changes to the subscription, send a <code>PUT</code> request to the route <code>/v1/subscription/:id</code> with the updated information in the <code>body</code>.

<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Only Credit Card subscriptions can be modified.</b>
</div>
<p>To change the data of an existing subscription, it is necessary that the defined payment method is credit card.</p>

</div>
<br/>


<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/subscription/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/alterar_dados_assinatura.md"/>
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
  "plan_id": 3,       
  "customer": {
    "email": "gorbadoc.oldbuck@gmail.com",
    "phone_number": "31123456789"
  },
  "items": [{
    "name": "Product 1",
    "value": 1000,
    "amount": 1
  }],
  "shippings": [{
    "name": "frete",
    "value": 1800
  }]
}
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
  "code": 200,
  "data": {
    "subscription_id": 1,
    "status": "active",
    "value": 2800,
    "custom_id": null,
    "notification_url": null,
    "payment_method": "credit_card",
    "next_execution": "2024-01-05",
    "next_expire_at": "2024-01-05",
    "plan": {
      "plan_id": 3,
      "name": "Novo plano",
      "interval": 1,
      "repeats": 12
    },
    "customer": {
      "email": "gorbadoc.oldbuck@gmail.com",
      "phone_number": "31123456789"
    },
    "occurrences": 1,
    "created_at": "2023-12-05T13:47:03.000Z"
  }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>


 ## Cancel a subscription

You can cancel active subscriptions in a subscription plan. To do this, simply provide the <code>subscription_id</code> of the subscription you want to cancel.

To cancel the subscription, send a <code>PUT</code> request to the route <code>/v1/subscription/:id/cancel</code> of the subscription you want to cancel.


<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/subscription/<HighlightVar>:id</HighlightVar>/cancel</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/subscription_id.md"/>
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
Input parameter: enter the "subscription_id" of the desired transaction
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

## Add a description to the subscription history

The history of a subscription records all actions that have occurred with it up to the current moment. You can add custom messages to this history using the endpoint <code>/v1/subscription/:id/history</code>.

Custom messages do not impact the subscription itself, they are only added to its history. To do this, you must provide the <code>subscription_id</code> of the desired subscription. This description must have at least one character and at most 255 characters.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost>/v1/subscription/<HighlightVar>:id</HighlightVar>/history</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/subscriptions/assinatura_acrecentar_info_historico.md" />
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
    "description": "Plan F1 - 180MB"
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

 ## Resend the link associated with the plan to the desired email

A payment link associated with a plan can be resent via email. To do this, you only need to send the <code>charge_id</code> identifier of the link and the valid email address to which you want to send the billet.

To resend the link via email, simply make a <code>POST</code> request to the route <code>/v1/charge/:id/subscription/resend</code>.



<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/subscription/resend</b>
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