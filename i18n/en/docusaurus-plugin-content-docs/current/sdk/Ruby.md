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
Learn how to install and configure our Ruby SDK to use Efí's APIs
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>Requests made to Efí's APIs using the Ruby SDK require the certificate generated in your Efí account in the <strong>.pem</strong> format.</p>
<p>Check <a href="/en/docs/api-pix/credenciais#conversion-of-p12-certificate-to-pem-format" target="_blank">here</a> the step-by-step guide to convert your P12 certificate to PEM format.</p>
</div>
<br/>


## Installation via RubyGems

Add this line to your application's Gemfile:

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


And then run:

```
$ bundle
```

Or install it as:

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

## Installation via Git

Our SDK is also available in our <a href="https://github.com/efipay/sdk-ruby-apis-efi" target="_blank">Efí</a> Github repository.

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

## Tested with

* Ruby `2.1.0`
* Ruby `2.7.0`
* Ruby `3.0.4`

<br/>

## Basic Usage

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

## Examples

You can run the examples inside the `examples` directory with:

```
$ ruby ​​examples/create_charge.rb
```

Remember to set the correct credentials within `examples/credentials.rb` before running.

<br/>

## Tests

To run the tests, simply run rspec:


```
$rspec
```

Or use `guard` to monitor files and automatically run rspec:
```
$ guard -n false -c
```

</div>