---
id: PrestaShop
title: PrestaShop
hide_title: true
sidebar_label: PrestaShop
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">PrestaShop</h1>
<div className="conteudo">

<div className="subtitulo">
Efí Integration Module for PrestaShop - Version 1.0.2
</div>

<br/>
<br/>

The Efí module for Prestashop allows receiving payments through the <strong>transparent checkout of our API</strong>. Compatible with PrestaShop version <code>8.1.x</code>.

This is the integration module provided by <a target="_blank" href="https://sejaefi.com.br">Efí</a> for PrestaShop. With it, the store owner can choose to receive payments by bank slip and/or credit card. The entire process is carried out through transparent checkout, so the buyer does not need to leave the store site to make the payment.

<br/>

## 1. Requirements

* PHP Version: ``8.1.x``
* PrestaShop Version: ``8.1.x``

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>

<p>The system requirements were defined according to our tests. If your system does not meet the requirements, it does not mean that the module will not work on your PrestaShop, but rather that we have not tested it in that environment. <b>Therefore, we do not guarantee the functionality of this module in environments other than those mentioned above.</b></p>

</div>

<br/>
<br/>


## 2. Module Installation

The Efí module for PrestaShop can be installed in two different ways:

1. *[Automatic Installation:](#automatic-installation)* using the compressed module installation file through the PrestaShop Add New Modules tool;

<br/>

### Automatic Installation

1. [Download the latest version of the module](https://raw.githubusercontent.com/efipay/prestashop-efi-module/main/EfiPayPrestashop.zip) (file "**EfiPayPrestashop.zip**");

2. Access your store administration, go to <code>Modules > Module Manager > Upload a Module</code> and upload the file "**EfiPayPrestashop.zip**" that you just downloaded;
<div className="figure"><img src="/img/prestashop.png" alt="banner" /><p>Upload the module</p></div>

3. After uploading the module to your store, click on <code>Configure</code> and wait for the process to complete.
<div className="figure"><img src="/img/prestashop1.png" alt="banner" /><p>Module installed</p></div>

<br/>



## 3. Efí Plugin Configuration for PrestaShop

To configure the Efí Module for PrestaShop, clicking on <code>Configure</code> in the previous step will automatically redirect you to the configuration screen. Alternatively, the store owner should access the store's administrative interface and, from the main menu, go to <code>Modules > Module Manager</code>. Look for the Efí module in the list that appears and then click on <code>Configure</code>, as shown in the image below:
<div className="figure"><img src="/img/prestashop2.png" alt="banner" /><p>Plugin Configuration</p></div>

<!-- <br/>; -->

Upon entering the module configuration, the following interface will be displayed:
<div className="figure"><img src="/img/prestashop3.png" alt="banner" /><p>Efí Plugin Interface</p></div>

<br/>


### Credentials
<div className="figure"><img src="/img/prestashop4.png" alt="banner" /><p>Credentials and Environment Settings</p></div>

In this section, you need to provide your application credentials, namely the "Client_Id" and "Client_Secret" (see where to locate them according to the environment: <a href="/img/homologacao.jpg" target="_blank">sandbox</a> and <a href="/img/producao.jpg" target="_blank">production</a>) and the <a href="/img/identificador.png" target="_blank">account identifier</a> obtained from the application created on Efí.

1. The store owner must enter the Efí application credentials in the respective fields. To access these credentials, you need to create a new Efí application or use an existing one. To create an application, log in to your Efí account and go to <code>API > My Applications > New Application</code>. Choose a name and create the new application. You will now have access to the application credentials. Copy them and enter them in the respective fields under the "Credentials" tab in your store (Client_Id and Client_Secret for <a href="/img/producao.jpg" target="_blank">production</a> and <a href="/img/homologacao.jpg" target="_blank">sandbox</a>).

2. Enter the Efí <a href="/img/identificador.png" target="_blank">account identifier</a>.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>

<p>It is important to note that <b>boletos generated in sandbox are not valid and cannot be paid</b>, they have a "zeroed" digitable line and a watermark in the background indicating that it is a test boleto.</p>

<p><b>Payments for sandbox charges using credit cards are fictitious, even if using a "real" card.</b> All card payments in this environment will have the payment confirmed automatically, but this is just a status change to "Paid". This feature allows you to test the <code>paid</code> status notification.</p>

<p><b>This means that all payments made in sandbox are not real, and therefore, no financial amount is charged.</b> </p>

<p>It is important to know that the words <b>Playground, Sandbox, and sandbox Environment</b>, in the context of Efí, are synonyms referring to the testing environment we offer where you can freely test your integration with the API.</p>
</div>
<br/>

In this section, you should also configure the following properties:

3. **Issuance Environment:** Configure whether you want to activate the module in Homologation (testing environment) or Production (real charges);

4. **Payment Methods:** Select the payment options you want to receive: Boleto, Credit Card, and/or Pix.

By clicking on <code>Save</code>, you will be able to configure the selected payment methods. The following sections will then appear:




### Billet Settings
<div className="figure"><img src="/img/prestashop5.png" alt="banner" /><p>Boleto Settings</p></div>

In this section, you can configure the following properties:

1. **Number of days:** Set the number of calendar days until the Boleto due date.

2. **Cancel unpaid Boletos?:** When enabled, it cancels all unpaid Boletos, preventing the customer from paying the Boleto after the due date.

3. **Enable discount?:** When enabled, a discount will be applied for payments made with Boleto.

4. **Boleto discount percentage:** Set the discount percentage for payments made with Boleto.

5. **Penalty percentage:** Define if you want to apply a penalty for late payment of the Boleto.

6. **Interest percentage:** Define if you want to apply interest for late payment of the Boleto.

7. **Send Boleto by email?:** When enabled, the Boleto will be sent to the customer by email.

<br/>


### Pix Settings
<div className="figure"><img src="/img/prestashop6.png" alt="banner" /><p>Pix Settings</p></div>

1. **Pix Key:** Enter your Pix key registered with Efí. If you haven't registered it yet, see our article on <a href="https://sejaefi.com.br/artigo/como-cadastrar-chaves-pix/#versao-7" target="_blank">How to register Pix keys on Efí</a>.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Pix Key</b>
</div>

<p>If your Pix key is registered as a phone number, remember to follow the standard defined by BACEN by including +55 DDD and the number, for example: <b>+5531988887777</b></p>

</div>
<br/>

2. **Pix Certificate:** Upload the certificate in .p12 format, generated from your Efí Account. If you haven't generated it yet, see our article on <a href="https://sejaefi.com.br/artigo/como-gerar-o-certificado-para-usar-a-api-pix/#versao-7" target="_blank">How to generate a certificate</a>.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Pix Certificate</b>
</div>

<p>After uploading your Pix certificate, it will be saved, but the certificate name will not be visible. If there is an error, you will receive a notification when saving the settings.</p>
</div>

3. **Enable discount?:** When enabled, a discount will be applied for payments made with Pix.

4. **Pix discount percentage:** Set the discount percentage for payments made with Pix.

5. **Expiration time in hours:** Set the expiration time in hours for the Pix after issuance.

6. **Validate mTLS:** Check the "Validate mTLS" field if you want to use mTLS validation on your server.

<br/>


### Open Finance Settings
<div className="figure"><img src="/img/prestashop10.png" alt="banner" /><p>Open Finance Settings</p></div>

1. **Name**: Enter the name of the Efí account holder.

2. **Document**: Enter the CPF/CNPJ of the Efí account holder.

3. **Agency**: Enter the agency number of the Efí account.

4. **Account**: Enter the Efí account number.

5. **Account type**: Choose from the available options according to your account type.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Notes</b>
</div>

<p>You need to configure the certificate in the Pix menu, and if you want to offer any discount in Open Finance, you can configure it in the Pix menu.</p>
</div>

<br/>



## 4. Module Operation

After being enabled, the module will be available as a payment option, and your customer will have the following screens to fill in the payment details:

**Billet:**
<div className="figure"><img src="/img/prestashop7.png" alt="banner" /><p>Billet Payment Screen</p></div>

**Credit Card:**
<div className="figure"><img src="/img/prestashop8.png" alt="banner" /><p>Credit Card Payment Screen</p></div>

**Pix:**
<div className="figure"><img src="/img/prestashop9.png" alt="banner" /><p>Pix Payment Screen</p></div>

**Open Finance:**
<div className="figure"><img src="/img/prestashop11.png" alt="banner" /><p>Open Finance Payment Screen</p></div>

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Note</b>
</div>

<p>If any of the required fields for payment are not correctly filled or left blank, the customer will receive an alert. For <b>Boleto Bancário</b>, the required fields are: <strong>Name and CPF</strong>. For <b>Credit Card</b>, the required fields are: <strong>Name, CPF, Date of Birth, Phone, Address, Number, Neighborhood, Postal Code, City, and State.</strong> For <b>Pix</b>, the required fields are: <strong>Name and CPF</strong>. For <b>Open Finance</b>, the required fields are: <strong>CPF and Financial Institution</strong>.</p>
</div>
<br/>


## 5. Frequently Asked Questions

### Is it mandatory to have SSL in my store to accept payments with the module?

For the Efí module for PrestaShop to work, it is not necessary for the store to have an SSL certificate. However, it is highly recommended by Efí for merchants to use it. Regardless of its use, all payment data is encrypted and securely transmitted for payment validation. The presence of an SSL certificate installed in your store ensures greater security for the merchant and for customers who make purchases. The absence of an SSL certificate on the payment screen may cause the merchant to lose sales, as the customer may feel insecure about entering payment data on a page without a certificate.

<br/>

### I want to use Transparent Checkout so that the customer does not leave my store to make the payment. Is it possible?

Yes. The Efí module for PrestaShop uses transparent checkout to process customer payments, meaning the customer will never leave your online store to complete the payment. Thus, in the final step of the purchase, the required payment details will be requested from the customer.

<br/>

### The installment options for payments are not loading. How to fix this?

If after installing and configuring the module the credit card installments do not load when clicking on the card brands, the merchant should check the credentials entered in the module configuration (Client_Id, Client_Secret keys, and also the "account identifier"). If they are correct, contact Efí for further analysis.

<br/>

### I am receiving the message “Unauthorized” when trying to complete a purchase. What to do?

This error message may be related to incorrectly entered credentials. Check if your credentials are correctly entered in the respective PRODUCTION and DEVELOPMENT fields. Check our [FAQ](https://sejaefi.com.br/central-de-ajuda/api/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que#conteudo) for detailed information.

<br/>

### I am seeing the message “*Efí Disabled: Sandbox mode (test environment) is active. Your charges will not be validated*”. How to fix this?

This message will be displayed when your module is configured in the test environment (sandbox). To remove this message and start receiving payments with Efí, access the module settings in "Modules" > "Efí" > "Configure" and uncheck the option "SandBox" > "Enable Efí Sandbox (test environment)".

<br/>

### Where can I track the transactions generated by the module?

The transactions generated through the module can be tracked in your Efí account under "API" > "My Applications" > "Your Application". In this environment, you can monitor all transactions and their respective statuses.

### When I try to make a payment, I receive the message “An error occurred while trying to process your request. Contact the store owner.”

This error message may be displayed during the checkout process for various reasons. In this case, the first step is to verify your application's credentials and also check the "request history" sub-tab in your API to see how to use this feature.

<br/>

## 6. Support and Suggestions

Your suggestions for new ideas and implementations for the Efí module for PrestaShop are very important. Therefore, if you have any ideas, please contact our team. We will analyze your suggestion and evaluate the possibility of implementation.

If you have any questions, please contact us via the <a href="https://sejaefi.com.br" target="_blank">Efí</a> website.


</div>