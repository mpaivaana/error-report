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
Saiba como instalar e configurar nossa SDK de Python para utilizar as APIs da Efí
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>As requisições feitas às APIs da Efí, utilizando a sdk de Python precisam do certificado gerado em sua conta Efí no formato <strong>.pem</strong>.</p>
<p>Confira <a href="/docs/api-pix/credenciais#conversão-de-certificado-p12-para-o-formato-pem" target="_blank">aqui</a> o passo a passo para converter seu certificado P12 para o formato PEM.</p>
</div>
<br/>

## Instalação via <a href="https://pypi.org/project/pip/">PIP</a>

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

## Instalação via Git

Nossa SDK também está disponível em nosso repositório no Github da <a href="https://github.com/efipay/sdk-python-apis-efi" target="_blank">Efí</a>.

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

## Testado com 

*  Python  `2.7`, `3.3` ,`3.4` e `3.5` 

<br/>

## Uso Básico

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

## Exemplos


Você pode executar os exemplos dentro de `examples` com:

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

## Testes

Lembre-se de definir as credenciais corretas dentro de `examples/credentials.py` antes de `executar`.

```
$ py.test
```

</div>