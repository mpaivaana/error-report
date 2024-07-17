---
id: Bubble
title: Bubble
hide_title: true
sidebar_label: Bubble
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">Bubble</h1>
<div className="conteudo">

<div className="subtitulo">
Efí Integration Module for Bubble - Version 1.0.0
</div>

<br/>
<br/>
The Efí Bank module for Bubble allows you to receive payments via Boleto, Credit Card, and Installment.
<br/>
<br/>
Bubble is a versatile platform for website/platform development. By carefully following these steps, you will be able to obtain client_id and client_secret, encode them in base64, and configure the essential fields to start receiving your payments.

<br/><br/>

## 1. Installation

### 1.1. Obtain API Credentials

Before you start receiving payments with Efí, you'll need to obtain Production and Homologation credentials. Follow the steps below:

<ul>
<li>Access the Efí dashboard on the <a href="https://app.sejaefi.com.br/api/introducao">API menu</a>.</li>
<li>In the sidebar, click on <a href="https://app.sejaefi.com.br/api/aplicacoes">Applications</a>, then click on <b>Create application</b>.</li>
<li>Enter a name for the application (e.g., Bubble), and select the "Issuance API" option (boleto, installment, and credit card);</li>
<li>Click on <b>Create application</b>.</li>
<li>Enter your <b>Electronic Signature</b> to confirm the changes and update the application.</li>
</ul>

After obtaining `client_id` and `client_secret`, you'll be taken to a screen similar to the one below:

<div className="figure">
  <img src="/img/credenciais.png" />
</div>

<br/>


### 1.2. Encode Credentials

Then copy your `client_id` and `client_secret`, access the page: https://efipay.github.io/encode-credentials/ and paste the credentials into their respective fields.

Click on "<b>Encode and Display</b>"

<div className="fluxograma small">
  <img className="light-border" src="/img/encode-credentials.png" />
</div>

Then copy the returned code and save this information, as we will use it later in the plugin configuration.

<br/>

## 2. Installing the Plugin

- <b>Access Bubble Editor:</b>
  Log in to your Bubble account and access your application's editor.

- <b>Adding the Plugin:</b> In the sidebar, click on "Plugins" and then select "+ Add plugins".

- <b>Installation:</b> Search for "Efí Bank" and install the plugin for the desired payment method:

<div className="figure">
  <img className="light-border" src="/img/bubble.png" />
</div>

Click on "Done" to finish.

<br/>

## 3. Configuring the plugin

To configure, copy the encoded credentials obtained at the end of step 1.2 and paste them into the `Authorization (header)(token call)` field:

<div className="figure">
<img className="light-border" src="/img/bubble_config_1.png"/>
</div>

Done! Configuration completed!
Note: If you use the Credit Card billing plugin, perform step 3.1 below.

### 3.1. Credit Card

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>

<p>The steps below are necessary <b>ONLY</b> for the Credit Card plugin. They do not apply to other Efí Bank plugins for Bubble.</p>
</div>

<br/>

After filling in the `Authorization` field (Step 3), you need to fill in the following fields:

- <b>PayeeCode:</b> Enter the Efí Account identifier available in the <a href="https://app.sejaefi.com.br/api/introducao"><b>API</b></a> menu. See where to find it <a href="/img/identificador.png" target="_blank">here</a>.

The remaining fields need to be filled with the name of each input in your project.
They are:

- <b>id-input-cardnumber</b>: Card number
- <b>id-input-cvv</b>: Card CVV
- <b>id-input-totalValue</b>: Total order value
- <b>id-input-expirationMonth</b>: Card expiration month
- <b>id-input-expirationYear</b>: Card expiration year
- <b>id-select-parcels</b>: Installments selection field
- <b>id-payment-token</b>: Hidden field for Payment Token

Associate these fields with the names of the corresponding inputs in your application. Make sure the field names in Bubble match the IDs mentioned.

For example: You have an input for the customer to enter the card number. The name of this input should be entered in the `id-input-cardnumber` field.

<div className="figure">
<img className="light-border" src="/img/bubble_config_1.png"/>
</div>

Done! Now you can continue with your development!


### 3.2. Pix

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>

<p>The steps below are necessary <b>ONLY</b> for the PIX plugin. They do not apply to other Efí Bank plugins for Bubble.</p>
</div>

<br/>

After filling in the `Authorization` field (Step 3), follow these steps:

- Generate a certificate in your Efí account, [see how by clicking here](https://sejaefi.com.br/central-de-ajuda/api/como-gerar-o-certificado-para-usar-a-api-pix#conteudo)
- Upload the certificate on the conversion page and click on "Encode and Display", [clicking here](https://efipay.github.io/encode-credentials/certificado.html)
- Copy the content of the Certificate and paste it into the "Certificate file content" field
- Copy the content of the Key and paste it into the "Key file content" field

<div className="fluxograma small">
<img className="light-border" src="/img/bubble_pix.png"/>
</div>

Done! Now you can continue with your development!

## 4. Payment Notifications

### 4.1. Setting up your Notification URL

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>

<p>To receive payment notifications in your project automatically, make sure you are on the "Starter" plan of the Bubble platform.
It is worth noting that this is a limitation/requirement of the Bubble platform.</p>
</div>

<br/>

In your project:

- Access the "<b>Settings</b>" option
- Click on the "<b>API</b>" tab
- Inside "<b>Public API Endpoints</b>", click on "<b>Enable Workflow API and backend workflows</b>".

<div className="figure">
<img className="light-border" src="/img/bubble_settings.png"/>
</div>

- After that, go to "<b>Backend workflows</b>"

<div className="figure">
<img className="light-border" src="/img/bubble_backend.png"/>
</div>

- Click on "<b>New API workflow</b>"

<div className="figure">
<img className="light-border" src="/img/bubble_backend_workflow.png"/>
</div>

- Set a name for the API workflow (for example, efi_cartao)
- Select the other fields as follows:

<div className="figure">
<img className="light-border" src="/img/bubble_api_workflow.png"/>
</div>

- Click on "<b>Detect data</b>" and copy the URL provided. It will be your notification URL;
- Click on the "<b>Workflow</b>" menu;
- Select your purchase completion event;
- Click on the action to create a billet/card/carnet;
- At the end of the configuration window, paste the copied URL into the "<b>notification_url</b>" field;

<div className="fluxograma small">
<img className="light-border" src="/img/bubble_notification.png"/>
</div>

After that, proceed with the step below:


### 4.2. Querying a Notification Token

In your project, access the "Backend Workflows" menu;

<div className="figure">
<img className="light-border" src="/img/bubble_backend_workflow.png"/>
</div>

Select the Workflow created earlier (Ex: efi_cartao) and add the action "EfíBank - Query Notification.

Click on the notification query action and in the "token" field select the "Request Data" option, then click on the "notification" option.

<div className="figure">
<img className="light-border" src="/img/bubble_action_notification.png"/>
</div>

Done! Now just add your action with its internal routines.

## 5. Frequently Asked Questions

### Where can I track transactions generated by the plugin?

Transactions generated through the plugin can be tracked in your Efí account under the menu <code>API > My Applications > Your Application</code>. In this environment, you can track all transactions and their respective statuses.

### When I try to make a payment, I receive the message _"An error occurred while trying to make your request. Please contact the store owner."_.

This error message may be displayed at the time of checkout for various reasons. In this case, the first step is to verify the credentials of your application and also check in your API the sub-tab "request history" see how to use this feature.

## 6. Support and Suggestions

Your suggestions for new ideas and implementations for the Efí plugin are very important. Therefore, if you have any ideas, please contact our team. We will review your suggestion and consider the possibility of implementation.

If you have any questions, please contact us through the <a href="https://sejaefi.com.br/" target="_blank" title="External Link">Efí</a> website.

</div>
