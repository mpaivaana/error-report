---
id: php
title: PHP
hide_title: true
sidebar_label: PHP
---
<h1 className="titulo">PHP</h1>

<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
  Learn how to install and configure our PHP SDK to use Efí APIs
</div>

<br/>

PHP SDK for integrating with Efí APIs for Pix issuance, bank slips, installment payments, credit card payments, subscriptions, payment links, marketplace, Pix via Open Finance, payment of bank slips, among other functionalities.

<div className="video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/armFxnX8gWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br/>

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
  </div>
  <p>Requests made to Efí APIs using the PHP SDK require the certificate generated in your Efí account in <strong>.pem</strong> or <strong>.p12</strong> format.</p>
</div>
<br/>


## Prerequisites

The following prerequisites should be considered, according to the branch used:

### Efí Pay SDK
<div className="table">
<table>
  <tbody>
    <tr>
      <th>Branch Version</th>
      <th>Status</th>
      <th>Packagist</th>
      <th>Repository</th>
      <th>PHP Version</th>
    </tr>
    <tr>
      <td><a href="https://github.com/efipay/sdk-php-apis-efi" target="_blank">1.x</a></td>
      <td>Maintained</td>
      <td><code>efipay/sdk-php-apis-efi</code></td>
      <td><a href="https://github.com/efipay/sdk-php-apis-efi" target="_blank">master</a></td>
      <td> <code> >=</code>  7.2</td>
    </tr>
    
  </tbody>
</table>
</div>
                             

<br/>

## Installation via <a href="https://packagist.org/packages/efipay/sdk-php-apis-efi" target="_blank" title="External Link">Packagist</a> with <a href="https://getcomposer.org/" target="_blank" title="External Link">Composer</a>

<Tabs
  defaultValue="1x Efi"
  values={[
    { label: 'Efí Pay', value: '1x Efi', }
  ]
}>

<TabItem value="1x Efi">

```html
  composer require efipay/sdk-php-apis-efi
```

</TabItem>
</Tabs>

<br/>

## Installing the Latest Version via GitHub with <a href="https://git-scm.com/" target="_blank" title="External Link">Git</a>

Our SDK is also available in our Github repository at <a href="https://github.com/efipay/sdk-php-apis-efi" target="_blank">Efí</a>.

<Tabs
  defaultValue="1x"
  values={[
    { label: 'Efí Pay', value: '1x', },
  ]
}>

<TabItem value="1x">

```html
git clone https://github.com/efipay/sdk-php-apis-efi.git
cd sdk-php-apis-efi/
composer install
```

</TabItem>

</Tabs>

After installation, dependency download will happen automatically. These dependencies will be stored in their respective folders, and Composer will continue its work by generating the <code>composer.lock</code> file.

It's worth noting that if you need to, for example, exclude a package, simply delete its reference from the <code>composer.json</code> file and update Composer using the following command:


```
$ composer update
```

This way, Composer will be updated, and since the package is no longer present in the require directive, it will be immediately "uninstalled."


<br/>

### Summary

<ul>
<li>Install Composer;</li>
<li>Specify the Efí SDK to be installed in the <code>composer.json</code> file;</li>
<li>Run the installation command in the project directory: <code>composer install</code>;</li>
<li>That's it!</li>
</ul>

<br/>

## Running Examples

You can run them using any web server, such as Apache or nginx, and open any example in your browser.

<div className="admonition admonition_info">
 <div>
    <img src="/img/info-circle-blue.svg"/> <b>Information</b>
  </div>
<p>Some examples require you to change certain parameters to work, such as <code>/examples/pix/cob/pixCreateCharge.php</code> or <code>/examples/charges/billet/createOneStepBillet.php</code>.</p>
</div>

<br/>

## Migration Validator

If you already have integration with Gerencianet's PHP SDK and are looking to prepare your application for future Efí API innovations, you can use our validator to assist in migrating to this SDK.

The Efí SDK Migration Validator makes the migration process smoother and more efficient. <b>This tool does not modify your code</b>; it only analyzes existing code for specific patterns related to classes and methods that have been changed in the new version of the SDK.

Before making any changes to your application code, it is highly advisable to make a complete backup of your entire project.

For more details on how to use it, refer to <a href="https://github.com/efipay/sdk-php-apis-efi#validador-de-migra%C3%A7%C3%A3o">our Github repository.</a>

<br/>

## Common Errors (cURL error 60 or cURL error 77)

The following errors are not from the Efí API but related to components of your server. Check below for the most common errors during the installation of our API and see the solutions:

<ul>
<li><a href="https://sejaefi.com.br/central-de-ajuda/api/curl-error-60-ou-curl-error-77-como-resolver#conteudo">cURL error 60</a></li>
<li><a href="https://sejaefi.com.br/central-de-ajuda/api/curl-error-60-ou-curl-error-77-como-resolver#conteudo">cURL error 77</a></li>
</ul>

<br/>

## Extra: timeout option

This attribute is present in the PHP SDK and allows you to set how long you want the Guzzle request to wait for a response. For details on how to use it, refer to <a href="https://github.com/efipay/sdk-php-apis-efi#come%C3%A7ando">our Github repository.</a>



</div>