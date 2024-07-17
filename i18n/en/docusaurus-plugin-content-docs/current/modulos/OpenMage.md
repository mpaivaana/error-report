---
id: OpenMage
title: OpenMage (Magento1)
hide_title: true
sidebar_label: OpenMage (Magento1)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">OpenMage (Magento1)</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="subtitulo"> 
Official Efí Module for OpenMage
</div>

<br/>
<br/>


The Efí module for OpenMage allows you to receive payments through the <strong>transparent checkout of our API</strong> and is compatible with OpenMage <code>LTS 19.4.x</code>.

<br/>

## 1. Requirements

* PHP Version: `7.0`
* Minimum OpenMage Version: ``19.4.x``

<br/>

## 2. Module Installation

The Efí module for OpenMage can be installed using modgit or by manually uploading the files to the server.

### Install using <a href="https://github.com/jreinke/modgit" target="_blank" title="External Link">modgit</a>:

<Tabs
  defaultValue="modgit"
  values={[
    {label: 'via modgit', value: 'modgit'},
  ]}>

<TabItem value="modgit">

```  
$ cd /path/to/openmage 
$ modgit init
$ modgit add gerencianet https://github.com/gerencianet/gn-api-magento.git
```
</TabItem>
</Tabs>

### Install manually:

1. Download the <a href="https://github.com/gerencianet/gn-api-magento/archive/master.zip" target="_blank" title="External Link">latest version</a> of the Efí Magento module;

2. Unzip the downloaded file and copy the app, lib, and skin folders into the main directory of OpenMage*.

3. Run the following commands:

   * **755** for all directories; **644** for all files; **777** for <code>app/etc/</code>, <code>var/</code>, and <code>media/</code>
   * The procedure above would be equivalent to executing the commands:

<Tabs
  defaultValue="modgit"
  values={[
    {label: 'Comandos', value: 'modgit'},
  ]}>

<TabItem value="modgit">

```  
sudo find . -type d -exec chmod 755 {} \;
sudo find . -type f -exec chmod 644 {} \;
sudo chmod 777 -R app/etc/;
sudo chmod 777 -R var/;
sudo chmod 777 -R media/;
```
</TabItem>
</Tabs>


4. Update your store's cache by accessing `System > Cache Management > Flush Cache Storage`.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Nota!</b>
</div>
<p>When replacing folders in your project, the system may inform you that some files will be overwritten. Don't worry, you can confirm the procedure because the installation will not affect any existing files in your project.</p>
</div>
<br/>


## 3. Settings

Accessing ``System > Configuration > Payment Methods`` (or ``System > Configuration > Payment Methods``), you will see 4 new menus:

- Efí Payments - General Settings
- Efí - Billet
- Efí - Credit Card
- Efí - Pix


In the first menu - Transparent Checkout Efí, enter your Efí "Account Identifier". Check where to <a href="/img/identificador.png" target="_blank">find it</a>.

Also, enter the credentials of your application (Client_Id and Client_Secret) obtained from your application created in Efí, according to the desired environment (Development or Production).

### Efí Payments - General Settings
<div class="figure"><img src="/img/OpenMage.png" alt="banner" /><p>General Settings</p></div>

- **Enabled:** Used to enable or disable the module.
- **Environment:** Describes whether transactions will occur in the Production or Development environment.
- **Debug Mode:** Enables the module's debug mode.
- **Account Identifier:** Efí account identifier.
- **Development or Production Credentials:** Here you inform your credentials, Client Id and Client Secret of the selected environment.

<br/>

### Efí Billet

By default, the module always uses 4 address lines (access <code>System > Configuration > Customer Configuration > Name and Address Options</code>. Check 4 in the <code>Number of lines</code> field), respectively, *street, number, complement, and neighborhood*.

<div class="figure"><img src="/img/OpenMage1.png" alt="banner" /><p>Boleto Settings</p></div>

- **Enabled:** Used to enable or disable the Boleto functionality.
- **Title:** Changes the name of the payment method at checkout.
- **Days to expiration:** Validity of the Boleto.
- **Fine after expiration:** Amount of the fine to be charged after expiration.
- **Interest after expiration:** Amount of interest to be charged.
- **Instructions on the Boleto:** Here you have four fields that can be filled with messages on the Boleto, as long as the interest and fine options are zero.

<br/>


## 4. Frequently Asked Questions

### Is it mandatory to have SSL on my store to accept payments with the module?

For the Efí module for Magento to work, it is not necessary for the store to have an SSL certificate. However, it is highly recommended by Efí that merchants use it. Regardless of its use, all payment data is encrypted and securely transmitted for payment validation. The presence of an SSL certificate installed on your store ensures greater security for both the merchant and the customers making purchases. The absence of an SSL certificate on the payment screen may cause the merchant to lose sales, as customers may feel insecure entering payment data on a page without a certificate.

<br/>

### I want to use Transparent Checkout so that the customer does not leave my store to make the payment. Is it possible?

Yes. The Efí module for Magento uses transparent checkout to process customer payments, meaning the customer will not leave your online store at any point to complete the payment. Thus, in the final step of the purchase, customers will be prompted for the mandatory data to finalize the payment.

<br/>


### The installments of the payment options are not loading. How to fix it?

If after installing and configuring the module the credit card installments are not loading when clicking on the card logos, the merchant should check the credentials entered in the module configuration (Client_Id, Client_Secret keys, and also the "account identifier"). If they are correct, contact Efí to analyze the issue.

<br/>

### I'm getting the message *“Unauthorized”* when trying to complete a purchase. What to do?

This error message may be related to incorrectly entered credentials. Verify that your credentials are correctly entered in the respective PRODUCTION and DEVELOPMENT fields. Check our [FAQ](https://sejaefi.com.br/central-de-ajuda/api/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que#conteudo) for detailed information.

<br/>

### I'm seeing the message *“ATTENTION! This store is in Development Mode. A test slip will be generated in the Efí Sandbox environment”*. How to fix it?

This message will be displayed when your module is configured in test environment (sandbox). To remove this message and start receiving payments with Efí, access the module settings in <code>System > Configuration > Payment Methods > Efí Transparent</code> and change the <code>Environment</code> option from <code>Development</code> to <code>Production</code>.

<br/>

### Where can I track transactions generated by the module?

Transactions generated through the module can be tracked in your Efí account under <code>API > My Applications > Your Application</code>. Through the "Production" and "Development" tabs, you can track all transactions and their respective statuses, according to the environment you are using.

<br/>

### When I try to make a payment, I receive the message *“An error occurred while trying to make your request. Contact the store owner.”*

This error message may be displayed at the time of checkout for various reasons. In this case, the first step is to verify the credentials of your application and also check in your API the sub-tab "request history" see how to use this feature.

<br/>

## 5. Support and Suggestions

Your suggestion of new ideas and implementations for the Efí module for Magento is very important. Therefore, if you have any ideas, please contact our team. We will analyze your suggestion and evaluate the possibility of implementation.

If you have any questions, please contact us through the website <a href="https://sejaefi.com.br/" target="_blank" title="External Link">Efí</a>.



</div>