---
id: node
title: NodeJS
hide_title: true
sidebar_label: NodeJS
---

<h1 className="titulo">NodeJS</h1>

<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Learn how to install and configure our Node.js SDK to use Efí APIs
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>Requests made to Efí APIs using the Node.js SDK require the certificate generated in your Efí account in <strong>.p12</strong> format.</p>
</div>
<br/>

## Installation via NPM

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
npm install sdk-node-apis-efi
```

</TabItem>

</Tabs>

<br/>

## Installation via Git

Our SDK is also available in our repository on the <a href="https://github.com/efipay/sdk-node-apis-efi" target="_blank">Efí</a> Github.

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ git clone https://github.com/efipay/sdk-node-apis-efi.git
```

</TabItem>


</Tabs>

<br/>

## Tested with

Node <code>0.12.7</code>, <code>4.4.0</code> e <code>4.4.4</code>
<br/>

## Basic Usage

Reference the module:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```javascript
const EfiPay = require('sdk-node-apis-efi')
```

</TabItem>

</Tabs>


<br/>
Define your credentials and whether you want to use sandbox or not:

<Tabs
  defaultValue="exemplo"
  values={[
    { label: 'NodeJS', value: 'exemplo', },
  ]}>

<TabItem value="exemplo">

```javascript
module.exports = {
    // PRODUCTION = false
    // SANDBOX = true
    sandbox: false,
    client_id: 'seuClientId',
    client_secret: 'seuClientSecret',
    certificate: 'caminho/Ate/O/Certificado/Pix',
}
```

</TabItem>
</Tabs>

<br/>
Instantiate the module passing your options:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```javascript
const efipay = new EfiPay(options)
```

</TabItem>


</Tabs>


<br/>
Create the <i>charge</i> (transaction):

<Tabs
  defaultValue="exemplo"
  values={[
    { label: 'Efí Pay', value: 'exemplo', }
  ]
}>

<TabItem value="exemplo">

```javascript
let chargeInput = {
	items: [
		{
			name: 'Product A',
			value: 1000,
			amount: 2,
		},
	],
}

efipay.createCharge({}, chargeInput)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
```

</TabItem>


</Tabs>

<br/>

## Examples
To run the examples, clone this repository and install the dependencies:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ git clone git@github.com:efipay/sdk-node-apis-efi.git
$ cd sdk-node-apis-efi/examples
$ npm install
```

</TabItem>

</Tabs>

<br/>

Define your OAuth keys in the <code>credentials.js</code> file:


```javascript
module.exports = {
	// PRODUCTION = false
	// SANDBOX = true
	sandbox: false,
	client_id: 'seuClientId',
	client_secret: 'seuClientSecret',
	pix_cert: 'caminhoAteOCertificadoPix',
};
```

<br/>

Then run the desired example:

```
$ node createCharge.js
```


</div>