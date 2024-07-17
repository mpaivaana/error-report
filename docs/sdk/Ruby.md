---
id: ruby
title: Ruby
hide_title: true
sidebar_label: Ruby
---
<h1 className="titulo">Ruby</h1>

<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Saiba como instalar e configurar nossa SDK de Ruby para utilizar as APIs da Efí
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>As requisições feitas às APIs da Efí, utilizando a sdk de Ruby precisam do certificado gerado em sua conta Efí no formato <strong>.pem</strong>.</p>
<p>Confira <a href="/docs/api-pix/credenciais#conversão-de-certificado-p12-para-o-formato-pem" target="_blank">aqui</a> o passo a passo para converter seu certificado P12 para o formato PEM.</p>
</div>
<br/>


## Instalação via RubyGems

Adicione esta linha ao Gemfile da sua aplicação:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
gem 'sdk_ruby_apis_efi'
```

</TabItem>


</Tabs>


E então execute:

```
$ bundle
```

Ou instale-o como:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ gem install sdk_ruby_apis_efi
```

</TabItem>


</Tabs>

<br/>

## Instalação via Git

Nossa SDK também está disponível em nosso repositório no Github da <a href="https://github.com/efipay/sdk-ruby-apis-efi" target="_blank">Efí</a>.

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ git clone https://github.com/efipay/sdk-ruby-apis-efi.git
```

</TabItem>

</Tabs>

## Testado com 

* Ruby `2.1.0`
* Ruby `2.7.0`
* Ruby `3.0.4`

<br/>

## Uso básico

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```ruby
require 'sdk_ruby_apis_efi'
require_relative "../../credentials"

options = {
  client_id: CREDENTIALS::CLIENT_ID,
  client_secret: CREDENTIALS::CLIENT_SECRET,
  sandbox: CREDENTIALS::SANDBOX
}

body = {
  items: [{
    name: "Product 1",
    value: 1000,
    amount: 2
  }],
  shippings: [{
    name: "Default Shipping Cost",
    value: 100
  }]
}

efipay = SdkRubyApisEfi.new(options)
puts efipay.create_charge(body: body)
```

</TabItem>


</Tabs>



<br/>

## Exemplos

Você pode executar os exemplos dentro do diretório `examples` com:

```
$ ruby examples/create_charge.rb
```

Lembre-se de definir as credenciais corretas dentro de `examples/credentials.rb` antes de executar.

<br/>

## Testes

Para executar os testes, basta executar rspec:


```
$ rspec
```

Ou usar `guard` para monitorar arquivos e executar automaticamente rspec:

```
$ guard -n false -c
```

</div>