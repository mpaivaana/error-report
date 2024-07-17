---
id: WHMCS
title: WHMCS
hide_title: true
sidebar_label: WHMCS
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">WHMCS</h1>
<div className="conteudo">

<div className="subtitulo">
WHMCS Efí Integration Module - Official Version 2.2.0
</div>

<br/>
<br/>

The Efí module for WHMCS allows you to **generate invoices to be paid via Pix, Billet, Credit Card, or Open Finance through our API**. Additionally, it enables you to receive payments through the <strong>transparent checkout</strong>.

This is the Official Integration Module provided by Efí for WHMCS. With it, the WHMCS account owner can receive payments via Pix, Billet, Credit Card, or Open Finance, and as soon as the payment is confirmed, Efí sends an automatic notification to WHMCS.

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>

  For proper functionality, we recommend that you carefully read this document and follow exactly what is described regarding the necessary configurations in our module, **paying attention to the PHP server and WHMCS version requirements.**
</div>

<br/>

## 1. System Requirements

* PHP Version: `8.1`
* WHMCS Version: `8.6.x`

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>

  <p>The system requirements have been defined based on our tests. If your system does not meet these requirements, it does not necessarily mean that the module will not work with your WHMCS installation. However, it indicates that we have not tested it in such an environment. <b>Therefore, we do not guarantee the functionality of this module in environments different from those mentioned above.</b></p>
</div>

<br/>


## 2. Installing the Efí Module for WHMCS

1. <a href="https://codeload.github.com/gerencianet/gn-api-whmcs/zip/master" target="_blank">Download</a> the latest version of the module.

2. Unzip the downloaded file.

3. Copy the **efi.php** file and the **efi** folder to the **/modules/gateways** directory of your WHMCS installation.

4. Change the permissions of the copied file using the following command:  
   `chmod 777 modules/gateways/efi.php`

5. Change the permissions of the copied folder using the following command:  
   `chmod 777 modules/gateways/efi/ -R`

6. Copy the **efi.php** file and the **efi** folder, available in the **callback** directory, to the **modules/gateways/callback** directory.

7. Change the permissions of the copied file using the following command:  
   `chmod 777 modules/gateways/callback/efi.php`

8. Change the permissions of the copied folder using the following command:  
   `chmod 777 modules/gateways/callback/efi/ -R`

9. Copy the **efi.php** file, available in the **hooks** directory, to the **includes/hooks** directory. It should be located at **includes/hooks/efi.php**.

10. Change the permissions of the copied file using the following command:  
    `chmod 777 includes/hooks/efi.php`

11. Create a folder in the root of your server and insert your certificate in the folder.

<div className="admonition admonition_info">
  <div>
  <img src="/img/info-circle-blue.svg"/> <b>Notice!</b>
  </div>

<p>Step 11 is only necessary if you are using Pix or Open Finance.</p>

</div>

At the end of the installation, the Efí module files should be in the following structure within WHMCS:


```
includes/hooks/
  |- efi.php
 modules/gateways/
  |- callback/efi/
  |- callback/efi.php
  |- efi/
  |- efi.php
```
<br/>

#### Certificado for PIX or Open Finance API Usage

All requests must contain a security certificate provided by Efí within your account, in PFX (.p12) format. This requirement is fully described in the [PIX security manual](https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados).

If you haven't obtained your certificate yet, just follow the step-by-step guide at the following link to generate a new one by clicking [here](https://sejaefi.com.br/central-de-ajuda/api/como-gerar-o-certificado-para-usar-a-api-pix#conteudo).

## 3. Efí Module Settings for WHMCS

<div className="figure"><img src="/img/whmcs.png" alt="banner" /><p>Efí Module Settings Screen for WHMCS</p></div>

Within the WHMCS administrative panel, access the menu <code>Options > Payment Gateways</code>. Click on <code>Efí</code>. The screen shown below will be displayed. Within the form, you should fill in the following fields:

1. **Client_id and Client_secret Production:** Must be filled with the production client_id and client_secret from your Efí account. This field is mandatory and can be found in the "API" -> "My Applications" menu. Then, select your created application, as shown in the <a href="/img/producao.jpg" target="_blank">image</a>.

2. **Client_id and Client_secret Development:** Must be filled with the development client_id and client_secret from your Efí account. This field is mandatory and can be found in the "API" -> "My Applications" menu. Then, select your created application, as shown in the <a href="/img/homologacao.jpg" target="_blank">image</a>.

3. **Account Identifier:** Must be filled with the identifier of your Efí account. This field is mandatory and can be found in the "API" -> "Account Identifier" menu, as shown in the <a href="/img/identificador.png" target="_blank">image</a>.

4. **WHMCS Admin User:** Must be filled with the WHMCS administrator user. It is necessary to use the same user that the WHMCS administrator uses to log in to the administrative area of your account. This field is mandatory.

5. **Billet Discount:** Enter the discount value that should be applied to billets generated exclusively by Efí. This information is optional.

6. **Discount Type:** Enter the discount type (percentage or fixed value) that should be applied to billets generated exclusively by Efí. This information is optional.

7. **Number of Days for Billet Expiry:** Enter the number of calendar days for the Billet to expire after the charge is generated. If the field is empty, the value will be 0.

8. **Email Billing - Efí:** If desired, enable sending Efí billing emails to the end customer.

9. **Fine Configuration:** If desired, inform the fine amount, in percentage, cha



<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>

<p>It's important to note that <b>billets generated in the sandbox are not valid and cannot be paid</b>; they have a "zeroed" line and a watermark in the background indicating it is a test Billet.</p>

<p><b>Payments for sandbox charges using credit cards are fictional, even if you use a "real" card.</b> All card payments in this environment will be automatically confirmed, but it's just a status change to "Paid". This feature allows you to test the <code>paid</code> status notification.</p>

<p><b>This means that all payments made in the sandbox are not real and therefore there is no financial charge of any kind.</b></p>

<p>It's important to know that the words <b>Playground, Sandbox, and Development Environment</b>, in the Efí context, are synonyms in the sense of referring to the testing environment we provide where you can freely test your API integration.</p>
</div>
<br/>



## 4. Common Integration Errors

Before the module attempts to generate a charge, some fields requested in the integration undergo validation. The errors that this validation can return are:

- **Invalid Name**: The name provided by the end customer is too short, so the full name must be provided.

- **Invalid Email**: The email provided by the end customer is invalid (does not follow the pattern xxxxx@xxxx.com) or does not exist.

- **Invalid Phone Number**: The phone number provided by the end customer does not exist or the area code is incorrect.

- **Invalid Document**: The CPF/CNPJ number of the end customer is invalid.

- **Null Document**: The field referring to the end customer's CPF and/or CNPJ does not exist in WHMCS or is not filled in.

- **Invalid Juridical person Name**: The Juridical person Name is invalid. The customer must enter the company name that appears in the Federal Revenue Service in the "Company" field of WHMCS.

- **Null Juridical person Name**: The "Company" field of WHMCS is not filled in.

- **Unexpected Error**: There was an error in the integration. You probably did not fill in all the fields of the module correctly, or the PHP version of WHMCS is not compatible with the Efí API. You should activate the module's Debug mode to know more details.

From version 0.2.7 of the Efí/WHMCS module, we provide automatic callback from WHMCS to Efí in cases of invoice cancellation. Therefore, whenever an invoice is canceled in WHMCS, it is automatically canceled in Efí.

Even if none of these validation errors are returned, the Efí API may return errors related to the generation of the charge. To interpret API returns and, of course, correct possible data validation errors or other similar ones, visit the page [Interpreting API Errors](/en/docs/api-cobrancas/erros).


<br/>


## 5. Support and Suggestions

Your suggestions for new ideas and implementations for the Efí module for WHMCS are very important to us. Therefore, if you have any ideas, please contact our team. We will analyze your suggestion and evaluate the possibility of implementation.

If you have any questions, please contact us through our website [Efí](https://sejaeficom.br/).



</div>