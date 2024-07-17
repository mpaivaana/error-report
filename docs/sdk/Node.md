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
Saiba como instalar e configurar nossa SDK de NodeJS para utilizar as APIs da Efí
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>As requisições feitas às APIs da Efí, utilizando a sdk de NodeJS precisam do certificado gerado em sua conta Efí no formato <strong>.p12</strong>.</p>
</div>
<br/>

## Instalação via NPM

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

## Instalação via Git

Nossa SDK também está disponível em nosso repositório no Github da <a href="https://github.com/efipay/sdk-node-apis-efi" target="_blank">Efí</a>.

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

## Testado com

Node <code>0.12.7</code>, <code>4.4.0</code> e <code>4.4.4</code>
<br/>

## Uso Básico

Referencie o módulo:

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
Defina suas credenciais e se você deseja usar sandbox ou não:

<Tabs
  defaultValue="exemplo"
  values={[
    { label: 'NodeJS', value: 'exemplo', },
  ]}>

<TabItem value="exemplo">

```javascript
module.exports = {
    // PRODUÇÃO = false
    // HOMOLOGAÇÃO = true
    sandbox: false,
    client_id: 'seuClientId',
    client_secret: 'seuClientSecret',
    certificate: 'caminho/Ate/O/Certificado/Pix',
}
```

</TabItem>
</Tabs>

<br/>
Instancie o módulo passando suas opções:

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
Crie a <i>charge</i> (transação):

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

## Exemplos
Para executar os exemplos, clone este repositório e instale as dependências:

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

Defina suas chaves oauth no arquivo <code>credentials.js</code>:

```javascript
module.exports = {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true
	sandbox: false,
	client_id: 'seuClientId',
	client_secret: 'seuClientSecret',
	pix_cert: 'caminhoAteOCertificadoPix',
};
```

<br/>

Em seguida, execute o exemplo desejado:

```
$ node createCharge.js
```


</div>