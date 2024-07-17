---
id: introducao
title: Introduction
hide_title: true
sidebar_label: Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">Introduction</h1>
<div className="conteudo">

<div className="subtitulo">
Functional examples of all billing services offered in the Efí API
</div>

<br/>
<br/>

## API

In order to offer a way for clients and integrators to see in practice how our bills are issued, we provide several **ready-made integration examples with Efí's APIs** demonstrating the **boleto/Bolix**, **carnê**, **credit card**, **Pix**, **subscriptions (recurring billing)**, **payment link**, and **payment split** modes, thus being able to experience our services before diving into development.

<a href="https://exemplos-integracao.efipay.com.br/"  target="_blank" alt="Exemplos"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Access Demonstration Examples
</button></a>

<br/>
<br/>
<br/>

<div className="gif">
<a href="https://exemplos-integracao.efipay.com.br/" target="_blank"><img align="center" src="/img/exemplo-integracao.gif"/>  
</a>
</div>

<br/>

In addition to the possibility of running these tests, we provide all the codes used in these examples available for download. It is worth noting that, in these examples, the <a href="/en/docs/sdk/php" target="_blank">PHP SDK</a> was used for integration with the APIs.


<br/>

### Running Examples

To run these examples in your environment, you need to <a href="https://sejaefi.com.br/#abrirconta" target="_blank">create an Efí account</a> and also an <a href="https://sejaefi.com.br/central-de-ajuda/api/como-criar-uma-nova-aplicacao-para-usar-a-api-pix#conteudo" target="_blank">application</a> to obtain the credentials.

<a href="https://exemplos-integracao.efipay.com.br/download/exemplos-integracao.zip" alt="Code"><button className="buttonPostman">
<svg className="icon-download">
 
</svg>
  Download Integration Example Codes
</button></a>

<br/><br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>After downloading these examples, don't forget to insert your credentials in the <b>credentials.json</b> file, which are the <code>Client_Id</code> and <code>Client_Secret</code> according to the environment used (Homologation or production), and remember that the <code>sandbox</code> parameter is boolean and has 2 possible values, according to the environment, being: <code>sandbox => true</code> equals to the Homologation environment and <code>sandbox => false</code> equals to the Production environment.</p>

<p>To use the <i>Pix</i> example, you must also inform in the <b>credentials.json</b> file, in the <code>certificate</code> attribute, the directory <b>./certs/</b>, adding the name of your certificate in <b>.pem</b> format. Here you find tips for <a href="/en/docs/api-pix/credenciais#generating-a-p12-certificate" target="_blank">generating your certificate and converting it from <b>.p12</b> to <b>.pem</b></a>. It is also necessary, in the <b>./pix/emitir_pix.php</b> file, in the <code>$body</code> variable, to insert your <a href="https://sejaefi.com.br/central-de-ajuda/pix/como-cadastrar-chaves-pix#conteudo"  target="_blank">Pix key registered in Efí</a> in the <code>"chave" => ""</code> parameter.</p>

<p>For the examples involving the issuance of _credit card_, it is necessary that you inform your <a href="/img/identificador.png" target="_blank">account identifier</a> in <b>line 1</b> of the script contained in the <b>./assets/js/payment-token.js</b> file. This script is used to obtain the <i>payment_token</i>. It is important to emphasize that this code is specific according to the environment used (production or Homologation). <a href="/en/docs/api-cobrancas/cartao#obtaining-the-payment_token" target="_blank">See in this link</a> how to correctly obtain your payment_token.</p>
</div>
<br/>

As this is a purely illustrative example for educational purposes, it is necessary for you to adapt it to your needs. **We are not responsible for the use of this example without the necessary adjustments for your production environment.**

## Lightbox

Integration with Efí's Lightbox allows you to display the payment information collection form overlaid on your checkout page. For example, when the customer adds products to the cart and closes the order, we simply dim the background of your site and the buyer sees a new modal window for filling in the payment details.

### How Lightbox Works

The Lightbox communicates with the Efí Pay API through a backend that must be developed using one of our available SDKs, according to the integrator's need and business rule. It is also necessary for the integrator to develop the notification return solution, using the callback feature for boleto and credit card, and the webhook for Pix.

<br/>

<a href="https://lightbox.efipay.com.br/"  target="_blank" alt="Examples"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Access Demonstration Store
</button></a>

<br/>
<br/>
<br/>

<div className="gif">
<a href="https://lightbox.efipay.com.br/" target="_blank"><img align="center" src="/img/exemplo-lightbox.gif"/>  
</a>
</div>

<br/>

### Installation

To install the Lightbox demo store, simply clone the Github repository and follow the installation instructions available in the README.md file.

In the example code we provide, you can choose to use the backend in PHP or Node.js, and the necessary changes to use each of them are described in the README.md file.

<a href="https://github.com/efipay/lightbox-efi/tree/main"  target="_blank" alt="Examples"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Access Repository
</button></a>

</div>