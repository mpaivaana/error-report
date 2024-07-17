---
id: OpenCart
title: OpenCart
hide_title: true
sidebar_label: OpenCart
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">OpenCart</h1>
<div className="conteudo">

<div className="subtitulo">
Efí Integration Module for OpenCart Brazil
</div>

<br/>
<br/>

The Efí module for OpenCart allows you to receive payments through our API's transparent checkout. This module is the Official Efí Module for OpenCart, **compatible only with OpenCart versions higher than version 3.0.3.3 (Brazil 1.5.0)**.

You can download OpenCart [here](https://www.opencartbrasil.com.br/download).

## 1. System Requirements

### Using PHP 7.2 or 7.3
- MySQL Version: ``5.6``

### Using PHP 7.4
- MySQL Version: ``8.x``

Installation of dependencies that may be missing (replace x with your PHP version number): 

<Tabs
  defaultValue="modgit"
  values={[
    {label: 'Commands', value: 'modgit'},
  ]}>

<TabItem value="modgit">

```  
sudo apt-get install php7.x-dom  
sudo apt-get install php7.x-curl  
sudo apt-get install php7.x-gd  
sudo apt-get install php7.x-xml  
sudo apt-get install php7.x-zip
```
</TabItem>
</Tabs>
    
<ul>
<li>OpenCart requires <code>curl</code> to be enabled</li>
<li>The <code>Brazilian Real</code> must be configured as the default currency in Opencart.</li>
<li>You must use OpenCart Brazil. If you don't have it yet, download it <a href="https://www.opencartbrasil.com.br/download" target="_blank">here</a>.</li>
</ul>


<div class="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>

<p>The system requirements were defined according to our tests. If your system does not meet the requirements, it does not mean that any of the three modules provided will not work on your OpenCart, but rather that we have not tested it in the same environment.</p>

**Therefore, we do not guarantee the functioning of this module in environments other than those mentioned above.**

</div>

<br/>


## 2. Installation

The Efí module for OpenCart can be installed in two ways:

- *[Automatic Installation](#automatic-installation):* using the installation file of the module compressed through the OpenCart's add new extension tool;

- *[Manual Installation](#manual-installation):* the module files must be manually uploaded to the hosting server via FTP.


### Automatic Installation

1. Download the file [efi.ocmod.zip](https://github.com/efipay/opencart-efi-module/blob/main/auto/efi.ocmod.zip).

2. Access the menu `Extensions > Extension Installer`, click on the **Upload** button, select the file 'gerencianet.ocmod.zip' (mentioned in the first instruction), and wait for the automatic installation to complete.

<div class="admonition admonition_info">
<div>
    <img src="/img/info-circle-blue.svg"/> <b>Note</b>
</div>

<p>If you have already installed the Efí module before, OpenCart may inform you that some files will be overwritten. Don't worry, as the installation will not affect any file other than the existing Efí module files in your store.</p>

</div>

<br/>

<div class="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>

<p>Due to the size of the module installation file, it may be necessary to change the <code>php_max_upload</code> parameter in the <code>php.ini</code> to at least 3 MB.</p>

</div>
<br/>


### Manual Installation

1. Download the [files from the latest module version](https://github.com/efipay/opencart-efi-module/tree/main/manual).

2. Unzip the downloaded files and upload the <code>admin</code>, <code>catalog</code>, and <code>lib</code> folders into the main directory of OpenCart.

<div class="admonition admonition_info">
<div>
    <img src="/img/info-circle-blue.svg"/> <b>Note</b>
</div>

<p>If you have already installed the Efí module before, OpenCart may inform you that some files will be overwritten. Don't worry, as the installation will not affect any file other than the existing Efí module files in your store.</p>

</div>

<br/>   



## 3. Settings

Access <code>Extensions > Modifications</code>, select the <code>Efí</code> module, and click the <code>Refresh</code> button in the upper right corner of the page.

When accessing <code>Extensions > Extensions</code>, you should select the type of extension you want. Choose <code>Payments</code>. You will already see the Efí module available in the list. Click on <code>install</code> to install the module and then on <code>edit</code> to start the configuration.

Three tabs will be available to configure the module:

- General
- PIX
- Billet
- Open Finance
- Credit Card
- Order Status

### General Settings

<div className="figure"><img src="/img/opencart.png" alt="banner" /><p>General Settings</p></div>

On this tab, you need to provide:

- The **Production and Development credentials** of your application (obtained from your Efí account)
- The **account identifier** (obtained from your Efí account)
- The **certificate** (in case of using PIX or Open Finance)
- **Enable sandbox mode**: Determines if the module is in test mode. In test mode, you can generate fictitious charges to test the flow.
- **Active**: Determines if the Efí payment module is Active or Inactive.

### Pix
<div className="figure"><img src="/img/opencart1.png" alt="banner" /><p>Pix Settings</p></div>

On this tab, the following properties can be configured:

- **PIX Key**: Determines which PIX key the payment will be sent to
- **Certificate Path**: You must inform the path where your security certificate `.pem` is located
- **Payment Discount**: You can provide a discount for customers paying via PIX.
- **Expiration Time (hours)**: Determines the validity period of the generated QR Code
- **Validate mTLS**: Enables or disables security verification using mTLS. More information can be found <a href="/en/docs/api-pix/webhooks#understanding-the-mtls-pattern" target="_blank">here</a>.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Pix Key</b>
</div>

<p>If your Pix key is registered as a phone number, don't forget to follow the pattern defined by BACEN by informing +55 DDD and the number, example: <b>+5531988887777</b></p>

</div>

<br/>


### Billet
<div className="figure"><img src="/img/opencart2.png" alt="banner" /><p>Boleto Settings</p></div>

On this tab, the following properties can be configured:

- **Days to Due Date**: Determines the number of days until the due date of the ticket, starting from its generation date.
- **Payment Discount**: Determines the discount percentage that will be applied to the ticket.
- **Define the penalty percentage**: Penalty configuration to be automatically applied in case of payment after the due date of the ticket.
- **Define the interest percentage**: Interest configuration to be automatically applied in case of payment after the due date of the ticket.
- **Note**: Allows you to include a message on the ticket for the end customer.
- **Billing Email**: If selected, emails about transactions will be sent to the end customer.
- **Enable Ticket**: If selected, it will activate the ticket option as a payment method.

<br/>

### Open Finance
<div className="figure"><img src="/img/opencart3.png" alt="banner" /><p>Open Finance Settings</p></div>

On this tab, the following properties can be configured:

- **Name**: Name of the account holder.
- **Document**: The document (CPF or CNPJ) of the account holder must be informed.
- **Agency**: The agency of the account holder must be informed.
- **Account**: The number referring to the account must be informed.
- **Account Type**: The account type of the account holder must be informed.
- **Payment Discount**: Determines the discount percentage that will be applied to open finance.
- **Enable Open Finance**: If selected, it will activate the Open Finance option as a payment method.

<br/>


### Credit Card
<div className="figure"><img src="/img/opencart5.png" alt="banner" /><p>Credit Card Settings</p></div>

On this tab, the following property can be configured:

- **Enable Credit Card**: If selected, it will activate the credit card option as a payment method.

<br/>

## 4. Order Status
<div className="figure"><img src="/img/opencart6.png" alt="banner" /><p>Order Status</p></div>

On this tab, the configuration of Efí payment statuses with your store's payment statuses is performed. Thus, when there is a change in the payment status at Efí, the order status in your store will be automatically updated according to the defined settings.



## 5. Frequently Asked Questions

### Is it mandatory to have SSL on my store to accept payments with the module?

For the Efí module to work with OpenCart, it is not necessary for the store to have an SSL certificate. However, Efí highly recommends it for store owners. Regardless of its use, all payment data is encrypted and securely transmitted for payment validation. The presence of an SSL certificate installed on your store ensures greater security for both the merchant and the customers making purchases. The absence of an SSL certificate on the payment page may cause the merchant to lose sales, as customers may feel insecure entering payment data on a page without a certificate.

<br/>

### I want to use Transparent Checkout so that the customer does not leave my store to make the payment. Is it possible?

Yes. The Efí module for OpenCart uses transparent checkout to process customer payments, meaning the customer will not leave your online store at any point to complete the payment. Thus, at the final step of the purchase, customers will be prompted for the required data to finalize the payment.

<br/>

### The installment options for payments are not loading. How to fix?

If after installing and configuring the module, the installment options for credit cards are not loading when clicking on the card banners, the merchant should check the credentials entered in the module configuration (Client_Id, Client_Secret keys, and also the "account identifier"). If they are correct, contact Efí for further analysis of the issue.

<br/>

### I am receiving the message "Unauthorized" when trying to finalize a purchase. What to do?

This error message may be related to incorrectly entered credentials. Verify that your credentials are correctly entered in the respective PRODUCTION and DEVELOPMENT fields. Check [our FAQ](https://sejaefi.com.br/central-de-ajuda/api/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que#conteudo) for detailed information.

<br/>

### I am seeing the message "Efí Disabled: Sandbox Mode (Test Environment) is active. Your charges will not be validated". How to fix?

This message will be displayed when your module is configured in the test environment (sandbox). To remove this message and start receiving payments with Efí, access the module settings in <code>Extensions > Payments > Efí > Edit</code> (or <code>Extensions > Payments > Efí > Edit</code>) and uncheck the option <code>SandBox > Enable Efí Sandbox (Test Environment).</code>

<br/>

### Where can I track transactions generated by the module?

Transactions generated through the module can be tracked in your Efí account under the link <code>API > My Applications > Your Application</code>. Here you can track all transactions and their respective statuses.

<br/>

### When I try to make a payment, I receive the message "An error occurred while trying to make your request. Contact the store owner."

This error message may be displayed at the checkout for various reasons. In this case, the first step is to check the credentials of your application and also check your API's "request history" sub-tab to see how to use this feature.

<br/>

## 8. Support and Suggestions

Your suggestion for new ideas and implementations for the Efí module for OpenCart is very important. So, if you have any ideas, please contact our team. We will analyze your suggestion and assess the possibility of implementation.

If you have any questions, please contact us through our website <a href="https://sejaefi.com.br" target="_blank">Efí</a>.


</div>