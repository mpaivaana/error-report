---
id: dotnet-core
title: .NET Core
hide_title: true
sidebar_label: .NET Core
---

<h1 className="titulo">.NET Core</h1>


<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Learn how to install and configure our .NET Core SDK to use Efí's APIs
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>Requests made to Efí's APIs using the .NET Core SDK require the certificate generated in your Efí account in the <strong>.p12</strong> format.</p>
</div> <br/>

## Installation via Visual Studio package manager

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
PM> Install-Package EfiPay -Version 1.0.2
```

</TabItem>


</Tabs>



## Installation via NET Cli

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
> dotnet add package EfiPay --version 1.0.2
```

</TabItem>

</Tabs>


## Installation via Git

Our SDK is also available in our <a href="https://github.com/efipay/sdk-dotnet-apis-efi" target="_blank">Efí</a> Github repository.

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ git clone https://github.com/efipay/sdk-dotnet-apis-efi.git
```

</TabItem>


</Tabs>

<br/>

## Tested with

.NET <code>5.0</code>

<br/>

## Basic Usage

<Tabs
  defaultValue="efi"
  values={[
    { label: 'Efí', value: 'efi', }
  ]}
>
<TabItem value="efi">

```csharp
using Efipay;
...
dynamic efi = new Efipay("client_id", "client_secret", true, "production.p12");
            
var body = new 
{
    calendario = new {
        expiracao = 3600
    },
    devedor = new {
        cpf = "12345678909",
        nome = "Francisco da Silva"
    },
    valor = new {
        original = "1.45"
    },
    chave = "71cdf9ba-c695-4e3c-b010-abb521a3f1be",
    solicitacaoPagador = "Informe o número ou identificador do pedido."
};

var response = efi.PixCreateImmediateCharge(null, body);
Console.WriteLine(response);
```

</TabItem>


</Tabs>

<br/>

## Examples

You can run the examples contained in the <code>Examples</code> project by uncommenting the lines in the <code>Program.cs</code> file.  
Remember to set the correct credentials <code>Examples/credentials.json</code> before running the examples.

</div>