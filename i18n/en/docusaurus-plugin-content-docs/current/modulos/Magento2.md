---
id: Magento2
title: Magento 2
hide_title: true
sidebar_label: Magento 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">Magento 2</h1>
<div className="conteudo">


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="subtitulo">
Efí Official Module for Magento 2 - Version 1.0.0
</div>

<br/> 
<br/>

The Efí module for Magento 2 allows you to receive payments through <strong>transparent checkout</strong> via our API. With it, the store owner can choose to receive payments via Bank Slip, Credit Card, Open Finance, and/or Pix.

<br/>

## 1. Requirements

* Compatible Magento 2 versions: <code>2.4.4</code>, <code>2.4.5</code>, and <code>2.4.6</code>
* Minimum PHP version: <code>8.1.x</code>

<br/>

## 2. Module Installation

Download the module and follow the steps below according to how your store was installed:

### Install using Composer

- _Install via packagist_
  - <code>composer require gerencianet/module-magento2</code>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>At this moment, your Magento authentication credentials may be requested. If you have any doubts, there is a description of how to proceed in this <a href="http://devdocs.magento.com/guides/v2.0/install-gde/prereq/connect-auth.html" target="_blank">official documentation link</a>.</p>
</div>
<br/>

2. Run the commands:

- <code>bin/magento setup:upgrade</code>
- <code>bin/magento setup:di:compile</code>
- <code>bin/magento cache:clean</code>
- <code>bin/magento setup:static-content:deploy -f</code>
- <code>bin/magento cache:flush</code>


### Install using Github

Download the module: [Click here!](https://github.com/efipay/magento-efi-module/archive/refs/heads/main.zip)

1. Extract the contents of the ZIP download and move the <code>\\Magento2</code> directory inside the <code>Gerencianet</code> folder;

2. Check if your directories in your store are like this <code>app/code/Gerencianet/Magento2</code>;

3. Enable the module with the following command, <code>bin/magento module:enable Gerencianet_Magento2</code>;

4. Install the Efí PHP SDK using the following command <code>composer require gerencianet/gerencianet-sdk-php:5</code>;

5. Run the command: <code>bin/magento setup:upgrade</code>;

6. Run the command: <code>bin/magento setup:di:compile</code>;

7. Run the command: <code>bin/magento cache:clean</code>;

<br/>

## 3. Settings

Access the Magento Admin Panel, in the side menu click on **Stores > Configuration > Customers > Customer Configuration > Name and Address Options**. In _Number of Lines in Address_, you must inform the number **4**, as shown in the image below:

<div className="figure"><img src="/img/magento.png" alt="banner" /><p>Address Settings</p></div>

**NOTE:** In the user registration, fill in the address fields with street, number, neighborhood, and complement, respectively.

**Also, make sure that the phone field is mandatory.**

After configuring the Customer, access the Magento Admin Panel, in the side menu click on `Stores`, then click on `Configuration`, in the `Sales` sub-menu click on `Payment Methods`. The screen for configuring the site's payment methods will be loaded.

<div className="figure"><img src="/img/magento1.png" alt="banner" /><p>Module Settings</p></div>

<br/>


## 4. How to Enable the Efí Module

In the first information block, there is the configuration to enable or disable the module completely, check `Yes` to continue the configuration.

<div className="figure"><img src="/img/magento2.png" alt="banner" /><p>Module Settings</p></div>

Fields:

- **Environment**: Used to describe whether transactions will be carried out in production or testing environment.
- **mTLS Validation**: if enabled, we will validate the mTLS
- **Account Identifier**: Efí account identifier
- **New Order Status**: Used to set the Order Status after completing the purchase.
- **Development or Production Credentials**: Here you provide your credentials (Client Id and Client Secret of the selected environment).

Next, we have credit card settings, billet settings, PIX settings, and Open Finance settings.

_NOTE: For all the following settings to work, the entire previous step-by-step must have been followed._

### Billet
In this section, you have the billet settings.

<div className="figure"><img src="/img/magento5.png" alt="banner" /><p>Billet Settings</p></div>

Fields:

- **Enabled**: Used to enable or disable the billet functionality.
- **Title**: Changes the payment method name at checkout.
- **Billet Validity Days**: Billet validity.
- **Fine After Due Date**: Value of the fine to be charged after the due date.
- **Interest After Due Date**: Value of interest to be charged.
- **Instructions on the billet**: Here you have four fields that can be filled with messages on the billet, as long as the interest and fine options are zeroed out.

### Credit Card

In this section, you have the credit card settings.

<div className="figure"><img src="/img/magento3.png" alt="banner" /><p>Credit Card Settings</p></div>

Fields:

Enabled: Used to enable or disable the credit card functionality.
Title: Changes the payment method name at checkout.
Sort Order: Payment method sorting.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>
All installment configuration is done through the Efí dashboard.</p>
</div>


### Pix
In this section, you have the Pix settings.

<div className="figure"><img src="/img/magento4.png" alt="banner" /><p>Pix Settings</p></div>

Fields:

- **Enabled**: Used to enable or disable the PIX functionality.
- **Title**: Changes the payment method name at checkout.
- **Pix validity days**: PIX validity period (in seconds).
- **Pix Certificate**: Certificate generated in the Efí dashboard.
- **Pix Key**: Your registered Pix key in Efí.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Pix Key</b>
</div>

<p>If your Pix key is registered as a phone number, don't forget to follow the pattern defined by BACEN, informing +55 DDD and the number, for example: <b>+5531988887777</b></p>

</div>

<br/>


### Open Finance
In this section, you have the Open Finance settings.

<div className="figure"><img src="/img/magento6.png" alt="banner" /><p>Open Finance Settings</p></div>

Fields:

- **Enabled**: Used to enable or disable the Open Finance functionality.
- **Title**: Changes the payment method name at checkout.
- **Open Finance Certificate**: Certificate generated in the Efí dashboard.
- **Name**: Name of the account holder.
- **CPF/CNPJ**: Document of the account holder.
- **Account Number**: Efí account number.

<br/>

## 5. Frequently Asked Questions

### Is it mandatory to have SSL on my store to accept payments with the module?

To make the Efí module for Magento work, it is not necessary for the store to have an SSL certificate. However, it is highly recommended by Efí that merchants use it. Regardless of its use, all payment data is encrypted and securely transmitted for payment validation. The presence of an SSL certificate installed on your store ensures greater security for both the merchant and customers making purchases. The absence of the SSL certificate on the payment screen may cause the merchant to lose sales, as customers may feel insecure entering payment details on a page without a certificate.

<br/>

### I want to use Transparent Checkout so that the customer does not leave my store to make the payment. Is it possible?

Yes. The Efí module for Magento uses transparent checkout to process customer payments, meaning that customers will never leave your online store to complete the payment. Thus, in the final step of the purchase, customers will be asked for the mandatory data to finalize the payment.

<br/>


### The installment options for payment are not loading. How to fix?

If after installing and configuring the module the credit card installments do not load when clicking on the card logos, the merchant should verify the credentials entered in the module configuration (Client_Id, Client_Secret keys, and also the "account identifier"). If they are correct, contact Efí so that the problem can be analyzed.

<br/>

### I am receiving the message *“Unauthorized”* when trying to finalize a purchase. What should I do?

This error message may be related to incorrectly entered credentials. Check if your credentials are correctly entered in the respective PRODUCTION and DEVELOPMENT fields. Check out our [FAQ](https://sejaefi.com.br/central-de-ajuda/api/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que#conteudo) for detailed information.

<br/>

### I am seeing the message *“ATTENTION! This store is in Development Mode. A test ticket will be generated in Efí's Sandbox environment”*. How to fix it?

This message will be displayed when your module is configured in test mode (sandbox). To remove this message and start receiving payments with Efí, access the module settings at <code>System > Configuration > Payment Methods > Efí Transparent</code> and change the <code>Environment</code> option from <code>Development</code> to <code>Production</code>.

<br/>

### Where can I track the transactions generated by the module?

The transactions generated through the module can be tracked in your Efí account at the link <code>API > My Applications > Your Application</code>. Through the "Production" and "Development" tabs, you can track all transactions and their respective statuses, according to the environment you are using.

<br/>


### When I try to make a payment, I receive the message *“An error occurred while trying to make your request. Contact the store owner.”*

This error message may be displayed at the time of checkout for various reasons. In this case, the first step is to check the credentials of your application and also check in your API the "request history" sub-tab. Learn how to use this feature.

<br/>

## 6. Support and Suggestions

Your suggestion of new ideas and implementations for the Efí module for Magento is very important. Therefore, if you have any ideas, please contact our team. We will analyze your suggestion and evaluate the possibility of implementation.

If you have any questions, please contact us through the [Efí website](https://sejaefi.com.br/).


</div>