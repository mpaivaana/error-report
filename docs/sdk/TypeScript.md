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
Saiba como instalar e configurar nossa SDK de TypeScript para utilizar as APIs da Efí
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>As requisições feitas às APIs da Efí, utilizando a sdk de TypeScript precisam do certificado gerado em sua conta Efí no formato <strong>.p12</strong>.</p>
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
npm install sdk-typescript-apis-efi
```

</TabItem>


</Tabs>

<br/>

## Instalação via Git

Nossa SDK também está disponível em nosso repositório no Github da <a href="https://github.com/efipay/sdk-typescript-apis-efi" target="_blank">Efí</a>.

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

## Testado com

Version <code>4.2.4</code>
<br/>

## Uso Básico

Importe o módulo:

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
Insira suas credenciais e defina se deseja usar o sandbox ou não.

<Tabs
  defaultValue="exemplo"
  values={[
    { label: 'TypeScript', value: 'exemplo', },
  ]}>

<TabItem value="exemplo">

```javascript
export = {
    // PRODUÇÃO = false
    // HOMOLOGAÇÃO = true
    sandbox: false,
    client_id: 'seuClientId',
    client_secret: 'seuClientSecret',
    pix_cert: 'caminhoAteOCertificadoPix',
};
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
const efipay = EfiPay(options);
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
$ git clone git@github.com:efipay/sdk-typescript-apis-efi.git
$ cd sdk-typescript-apis-efi/examples
$ npm install
```

</TabItem>

</Tabs>



<br/>

Defina suas chaves oauth no arquivo <code>config.ts</code>:

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
$ ts-node createCharge.ts
```



</div>