---
id: type-script
title: TypeScript
hide_title: true
sidebar_label: TypeScript
---

<h1 className="titulo">TypeScript</h1>

<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Learn how to install and configure our TypeScript SDK to use Efí's APIs
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>Requests made to Efí's APIs using the TypeScript SDK require the certificate generated in your Efí account in the <strong>.p12</strong> format.</p>
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
npm install sdk-typescript-apis-efi
```

</TabItem>


</Tabs>

<br/>

## Installation via Git

Our SDK is also available in our <a href="https://github.com/efipay/sdk-typescript-apis-efi" target="_blank">Efí</a> Github repository.

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ git clone https://github.com/efipay/sdk-typescript-apis-efi.git
```

</TabItem>


</Tabs>

<br/>

## Tested with

Version <code>4.2.4</code>
<br/>

## Basic Usage

Import the module:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
import EfiPay from 'sdk-typescript-apis-efi';
```

</TabItem>


</Tabs>



<br/>
Enter your credentials and define whether you want to use the sandbox or not.

<Tabs
  defaultValue="exemplo"
  values={[
    { label: 'TypeScript', value: 'exemplo', },
  ]}>

<TabItem value="exemplo">

```javascript
export = {
    // PRODUCTION = false
    // SANDBOX = true
    sandbox: false,
    client_id: 'seuClientId',
    client_secret: 'seuClientSecret',
    pix_cert: 'caminhoAteOCertificadoPix',
};
```

</TabItem>
</Tabs>

<br/>
Instantiate the module by passing its options:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```javascript
const efipay = EfiPay(options);
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
var body = {
	items: [
		{
			name: 'Product A',
			value: 1000,
			amount: 2,
		},
	],
};

efipay
	.createCharge({}, body)
	.then((resposta: any) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	})
	.done();
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
$ git clone git@github.com:efipay/sdk-typescript-apis-efi.git
$ cd sdk-typescript-apis-efi/examples
$ npm install
```

</TabItem>

</Tabs>



<br/>

Define your oauth keys in the <code>config.ts</code> file:

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
$ ts-node createCharge.ts
```


</div>