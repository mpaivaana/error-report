---
id: WordPress
title: WordPress (WooCommerce)
hide_title: true
sidebar_label: WordPress (WooCommerce)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">WordPress (WooCommerce)</h1>
<div className="conteudo">

<div className="subtitulo">
Official Efí Integration Module for WooCommerce - Version 0.7.2
</div>

<br/>
<br/>

The Efí module for WordPress (WooCommerce) allows you to receive payments through our API's transparent checkout. Compatible with WooCommerce versions 5.x.

This is the Official Integration Module provided by Efí for WooCommerce. With it, store owners can choose to receive payments via bank slip, credit card, and/or PIX. The entire process is carried out through the transparent checkout. This means that the buyer does not need to leave the store's website to make the payment.

Before installing the Efí plugin for WooCommerce, please check the requirements and compatibility. If your store is in production, we recommend making a backup before starting the plugin installation process.

<br/>

## 1. System Requirements

- PHP Version: ``7.x`` to ``8.x``
- Minimum WooCommerce Version: ``6.x`` to ``7.x``
- Minimum WordPress Version: ``6.x``

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
  </div>

<p>The system requirements have been defined based on our testing. If your system does not meet these requirements, it does not necessarily mean that the module will not work on your WordPress (WooCommerce) setup. However, it indicates that we have not tested it in that environment.</p>

<p><b>Therefore, we do not guarantee the functionality of this module in environments different from those mentioned above.</b></p>

</div>


<br/>

<br/>

## 2. Installing the Efí Plugin for WooCommerce

Before installing the plugin, make sure you have installed the WooCommerce plugin for your WordPress site. If you don't have it, <a href="https://br.wordpress.org/plugins/woocommerce/" title="External Link" target="_blank">download</a> and install it on your site.

The Efí plugin for WooCommerce can be installed in two different ways:

1. [Automatic Installation:](#automatic-installation) the plugin is installed directly from the official WordPress repository through the store's administrative interface;

2. [Manual Installation:](#manual-installation) the plugin files must be uploaded manually to the hosting server via FTP.

<br/>

### Automatic Installation:

To install the plugin automatically through the official WordPress repository, follow these steps:

Access your store's administrative interface (/wp-admin)

In the navigation menu, go to ``Plugins > Add New``

Search for ``Efí`` and access the ``Woo Efí Official`` plugin, authored by Efí

Click on ``Install Now`` and after the process, click on ``Activate Plugin``

<br/>

### Manual Installation:

To install the plugin manually, download the plugin files and upload them via FTP to your server.

1. The first step is to download the files of the latest version of the plugin from the <a href="https://wordpress.org/plugins/woo-gerencianet-official/" target="_blank" title="External Link">official WordPress repository</a> or from the <a href="https://github.com/gerencianet/gn-api-woocommerce/" target="_blank" title="External Link">Efí repository on GitHub</a>

2. After downloading the files, access the store's administrative interface (/wp-admin) and go to <code>Plugins > Add New > Upload Plugin</code>, then upload the **woo-gerencianet-official.zip** file

3. Alternatively, the files can be extracted and uploaded directly via FTP to the plugins folder of the WordPress installation (inside <code>/wp-content/plugins</code>)

4. After installation, click on <code>Activate Plugin</code>.

<br/>


## 3. Efí Plugin Configuration for WooCommerce

Before starting to receive payments with Efí, the merchant must configure the plugin with their credentials and preferences. To obtain Production and Testing credentials, follow the steps below:

- Access the Efí dashboard in the API menu.
- In the sidebar menu, click on **Applications** and then on **Create application**.
- Enter a name for the application, and select which API you want to activate: Issuance API (billets and credit card) and/or Pix API. Select the Production Scopes and Testing Scopes you want to enable.
- Click on **Create application**.
- Provide your Electronic Signature to confirm the changes and update the application.

To start configuring the plugin, in the store's administrative panel, go to: <code>WooCommerce > Settings > Payments</code>. We provide three payment methods through our plugin: Bank Slip (Bolix), Credit Card, and Pix. To configure each of them, simply click on **Manage**. Below, we will detail each one.

<div class="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>IMPORTANT</b>
  </div>
 <p> When in production environment, use the "Client_Id" and "Client_Secret" from the "Production" tab and disable the sandbox option. If in testing, use the "Client_Id" and "Client_Secret" from the "Testing" tab with the sandbox option enabled. Failure to do so may result in a possible "unauthorized" message.</p>
</div>

<br/>


### 3.1 Bank Slip (Bolix)
<div className="figure"><img src="/img/wordpress_boleto.png" alt="banner" /><p>Billet Settings</p></div>

- **Credentials:** Enter the Production and Testing `Client_Id` and `Client_Secret` credentials in the respective plugin configuration fields.
- **Sandbox:** Enable to use the Efí testing environment. No charges issued in this mode can be paid.
- **Enable Billet:** Enable this option to receive payments via Bank Slip.
- **Enable cancellation of unpaid Billet:** When activated, cancels all unpaid Billet. Preventing the customer from paying the Billet after the due date.
- **Billet Discount:** Discount percentage for Billet payment (Optional). Leave blank or as 0 to not apply a discount.
- **Apply Billet discount:** If you want to grant a discount for payments made via Bank Slip, choose the discount mode. The options are: Apply discount to the total value with Shipping or Apply discount only to the product prices.
- **Billet Due Date:** Days to expire the Billet after issuance.

Done! After that, just click on **Save changes**.

### 3.2 Credit Card
<div className="figure"><img src="/img/wordpress_cartao.png" alt="banner" /><p>Credit Card Settings</p></div>

- **Credentials:** Enter the Production and Testing `Client_Id` and `Client_Secret` credentials in the respective plugin configuration fields.
- **Sandbox:** Enable to use the Efí testing environment. No charges issued in this mode can be paid.
- **Enable Credit Card:** Enable this option to receive payments via Credit Card.
- **Account Identifier:** Enter the Efí Account Identifier. See where to find it [here](/img/identificador.png).

Done! After that, just click on **Save changes**.


### 3.3 Pix
<div className="figure"><img src="/img/wordpress_pix.png" alt="banner" /><p>Pix Settings</p></div>

- **Credentials:** Enter the Production and Testing `Client_Id` and `Client_Secret` credentials in the respective plugin configuration fields.
- **Sandbox:** Enable to use the Efí testing environment. No charges issued in this mode can be paid.
- **Enable Pix:** Enable this option to receive payments via Pix.
- **Pix Key:** Enter your Pix key registered with Efí. If you haven't registered yet, see our article on <a href="https://sejaefi.com.br/artigo/como-cadastrar-chaves-pix/#versao-7" target="_blank">How to register Pix keys in Efí</a>.
- **Pix Certificate:** Upload the certificate in .p12 format, generated from your Efí Account. If you haven't generated it yet, see our article on <a href="https://sejaefi.com.br/artigo/como-gerar-o-certificado-para-usar-a-api-pix/#versao-7" target="_blank">How to generate a certificate</a>.
- **Pix Discount:** Percentage discount to be applied for Pix payments (Optional). Leave blank or as 0 to not apply discount.
- **Discount Mode:** If you want to grant a discount for payments made via Pix, choose the discount mode. The options are: Apply discount to the total value with Shipping or Apply discount only to the product prices.
- **Pix Expiration:** In how many hours the Pix expires after issuance.
- **Validate mTLS:** Check the "Validate mTLS" field if you want to use mTLS validation on your server. You can view more details by clicking <a href="/en/docs/api-pix/webhooks#understanding-the-mtls-pattern" target="_blank">here</a>.

Done! After that, just click on **Save changes**.


<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Pix Key</b>
</div>

<p>If your Pix key is registered as a phone number, don't forget to follow the pattern defined by BACEN by providing +55 DDD and the number, for example: <b>+5531988887777</b></p>

</div>

<br/>

We recommend that before offering payments through Efí, the merchant performs billing tests with the sandbox (test environment) active to verify that the payment procedure is proceeding as expected.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>

<p>It is important to note that <b>invoices generated in the sandbox are not valid and cannot be paid</b>, they have a "zeroed" line and a watermark in the background indicating that it is a test invoice.</p>

<p><b>Payments for sandbox charges using a credit card are fictitious, even if you use a "real" card.</b> All card payments in this environment will be automatically confirmed, but it is only a status change to "Paid". This feature allows you to test the <code>paid</code> status notification.</p>

<p><b>This means that all payments made in the sandbox are not real and therefore there is no financial charge.</b> </p>

<p>It is important to know that the words <b>Playground, Sandbox, and Development Environment</b>, in the context of Efí, are synonymous in the sense of referring to the testing location where you can freely test your integration with the API.</p>
</div>


<!-- ### 3.4 Open Finance
<div className="figure"><img src="https://sejaefi.link/Hklv7tjM23" alt="banner" /><p>Configurações do Open Finance</p></div>

<ul>
<li><b>Credenciais:</b> Insira as credenciais <code>Chave Client_Id</code> e <code>Chave Client_Secret</code> de Produção e Homologação nos respectivos campos de configuração do plugin.</li>
<li><b>Certificado Open Finance:</b> Realize o upload do certificado em formato .p12, gerado a partir da sua Conta Efí. Se você ainda não gerou, veja nosso artigo sobre <a href="https://sejaefi.com.br/artigo/como-gerar-o-certificado-para-usar-a-api-pix/#versao-7" target="_blank">Como gerar um certificado</a>. </li>
<li><b>Sandbox:</b> Habilite para usar o ambiente de testes da Efí. Nenhuma cobrança emitida nesse modo poderá ser paga.</li>
<li><b>Habilitar Open Finance:</b>Habilite essa opção para receber via Open Finance.</li>
<li><b>CPF/CNPJ:</b> Insira seu CPF/CNPJ (Apenas números).</li>
<li><b>Nome:</b> Informe seu nome completo.</li>
<li><b>Número da Conta Efí:</b> Insira o número da sua conta com dígito e sem o hífen.</li>
</ul>

Pronto! Feito isso basta clicar em <b>Guardar alterações</b>.

Recomendamos que antes de disponibilizar pagamentos pela Efí, o lojista realize testes de cobrança com o sandbox (ambiente de testes) ativo para verificar se o procedimento de pagamento está acontecendo conforme esperado.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>

<p>Importante salientar que <b>os billets gerados em sandbox não são válidos e não podem ser pagos</b>, possuem a linha digitável "zerada" e uma marca d'água ao fundo informando ser um Billet de teste.</p>

<p><b>Os pagamentos de cobranças de sandbox utilizando cartão de crédito são fictícios, mesmo se utilizar um cartão "real".</b> Todos os pagamentos de cartão neste ambiente terão o pagamento confirmado automaticamente, mas é apenas uma alteração de status para "Pago". Este recurso permite que você teste a notificação do status <code>paid</code>.</p>

<p><b>Isso significa que todos os pagamentos realizados em sandbox não são reais e, portanto, não há cobrança de nenhuma importância financeira.</b> </p>

<p>É importante saber que as palavras <b>Playground, Sandbox e Ambiente de Desenvolvimento</b>, no contexto da Efí, são sinônimos no sentido de fazerem referência ao local de testes que oferecemos em que você pode testar à vontade sua integração com a API.</p>
</div> -->

<br/>

## 4. Frequently Asked Questions

### Do I need to have SSL on my store to accept payments with the plugin?

To use the Efí module for WooCommerce, it is not necessary for the store to have an SSL certificate. However, it is highly recommended by Efí that merchants use it. Regardless of its use, all payment data is encrypted and securely transmitted for payment validation. The presence of an SSL certificate installed on your store ensures greater security for both the merchant and customers making purchases. The absence of the SSL certificate on the payment screen may cause the merchant to lose sales, as customers may feel insecure entering payment details on a page without a certificate.

<br/>

### I want to use Transparent Checkout so that the customer does not leave my store to make the payment. Is it possible?

Yes. The Efí plugin for WooCommerce uses transparent checkout to process customer payments, meaning the customer will not leave your online store at any time to complete the payment. Thus, in the last step of the purchase, customers will be asked for the mandatory data to finalize the payment.

<br/>

### The installment options for payment are not loading. How to fix?

If after installing and configuring the module the installments for credit card do not load when clicking on the card logos, the merchant should check the credentials provided in the module configuration (Client_Id, Client_Secret, and also the "account identifier"). If they are correct, contact Efí to have the issue analyzed.

<br/>

### I am receiving the message *“Unauthorized”* when trying to complete a purchase. What should I do?

This error message may be related to incorrectly entered credentials. Check if your credentials are correctly entered in the respective PRODUCTION and DEVELOPMENT fields. Check our [FAQ](https://sejaefi.com.br/central-de-ajuda/api/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que#conteudo) for detailed information.

<br/>

### The message *Efí Disabled: The Sandbox mode (Test Environment) is active. Your charges will not be validated* is appearing. How to fix?

This message will be displayed when your module is configured in a test environment (sandbox). To remove this message and start receiving with Efí, access the plugin settings at <code>WooCommerce > Settings > Checkout > Efí</code> and uncheck the option <code>SandBox > Enable Efí Sandbox (Test Environment)</code>.

<br/>

### Where can I track the transactions generated by the plugin?

Transactions generated through the plugin can be tracked in your Efí account at the link <code>API > My Applications > Your Application</code>. In this environment, you can track all transactions and their respective statuses.

<br/>

### When I try to make a payment, I receive the message *“An error occurred while trying to make your request. Please contact the store owner.”*

This error message may be displayed at the time of checkout for various reasons. In this case, the first step is to check the credentials of your application and also check in your API the "request history" sub-tab, see how to use this feature.

<br/>

### I installed the plugin and my store is showing an error or not opening. What to do?

When a problem occurs after installing the Efí plugin for WooCommerce, the minimum requirements or compatibility were likely not respected. To fix this problem, it may be necessary to remove the plugin. The plugin can be removed from the store's administrative environment. If this is not possible, manual intervention directly in the server files via FTP will be necessary, removing the folder **woo-gerencianet-official** from the **“plugins”** directory of WordPress. For more information, contact our technical team.

<br/>


## 6. Support and Suggestions

Your suggestion of new ideas and implementations for the Efí plugin for WooCommerce is very important. Therefore, if you have any ideas, please contact our team. We will analyze your suggestion and evaluate the possibility of implementation.

If you have any questions, please contact us through the website <a href="https://sejaefi.com.br/" target="_blank" title="External Link">Efí</a>.



</div>