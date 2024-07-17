---
id: python
title: Python
hide_title: true
sidebar_label: Python
---

<h1 className="titulo">Python</h1>


<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Learn how to install and configure our Python SDK to use Efí's APIs
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>Requests made to Efí's APIs using the Python SDK require the certificate generated in your Efí account in the <strong>.pem</strong> format.</p>
<p>Check <a href="/en/docs/api-pix/credenciais#conversion-of-p12-certificate-to-pem-format" target="_blank">here</a> the step-by-step guide to convert your P12 certificate to PEM format.</p>
</div>
<br/>

## Instalation via <a href="https://pypi.org/project/pip/">PIP</a>

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ pip install efipay
```

</TabItem>


</Tabs>

<br/>

## Installation via Git

Our SDK is also available in our <a href="https://github.com/efipay/sdk-python-apis-efi" target="_blank">Efí</a> Github repository.

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ git clone https://github.com/efipay/sdk-python-apis-efi.git
```

</TabItem>

</Tabs>

<br/>

## Tested with

*  Python  `2.7`, `3.3` ,`3.4` e `3.5` 

<br/>

## Basic Usage

<Tabs
  defaultValue="py"
  values={[
    { label: 'Efí Pay', value: 'py', }
  ]
}>
<TabItem value="py">

```py
# encoding: utf-8

from efipay import EfiPay

credentials = {
    'client_id': 'client_id',
    'client_secret': 'client_secret',
    'sandbox': True,
    'certificate': 'insira-o-caminho-completo-do-certificado'
}

efi = EfiPay(credentials)

body = {
    'calendario': {
        'expiracao': 3600
    },
    'devedor': {
        'cpf': '12345678909',
        'nome': 'Francisco da Silva'
    },
    'valor': {
        'original': '123.45'
    },
    'chave': '71cdf9ba-c695-4e3c-b010-abb521a3f1be',
    'solicitacaoPagador': 'Cobrança dos serviços prestados.'
}

response =  efi.pix_create_immediate_charge(body=body)
print(response)
```

</TabItem>



</Tabs>

<br/>

## Examples

You can run the examples inside `examples` with:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ python -m examples/pix/cob/pix_create_immediate_charge
```

</TabItem>


</Tabs>



<br/>


## Tests

Remember to set the correct credentials within `examples/credentials.py` before `run`.

```
$ py.test
```

</div>