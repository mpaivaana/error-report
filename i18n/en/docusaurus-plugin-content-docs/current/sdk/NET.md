---
id: dotnet
title: .NET
hide_title: true
sidebar_label: .NET
---

<h1 className="titulo">.NET</h1>


<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div class="subtitulo">
Learn how to install and configure our .NET SDK to use Efí APIs
</div>

<br/>

<div class="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>Requests made to Efí APIs using the .NET SDK require the certificate generated in your Efí account in <strong>.p12</strong> format.</p>
</div>
<br/>

## Installation via <a href="https://www.nuget.org/packages/Gerencianet.SDK/" target="_blank">NuGet</a>

<b>Package Manager</b>

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', },
    { label: 'Gerencianet', value: '2', },
  ]
}>

<TabItem value="1">

```
PM> Install-Package EfiPay -Version 1.0.1
```

</TabItem>

<TabItem value="2">

```
PM> Install-Package Gerencianet.SDK -Version 1.0.9
```

</TabItem>

</Tabs>



<b>NET Cli</b>

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', },
    { label: 'Gerencianet', value: '2', },
  ]
}>

<TabItem value="1">

```
> dotnet add package EfiPay --version 1.0.1
```

</TabItem>

<TabItem value="2">

```
> dotnet add package Gerencianet.SDK --version 1.0.9
```

</TabItem>

</Tabs>

<br/>

## Instalação via Git

Nossa SDK também está disponível em nossos respositorios no Github da <a href="https://github.com/efipay/sdk-dotnet-apis-efi" target="_blank">Efí Pay</a> e da <a href="https://github.com/gerencianet/gn-api-sdk-dotnet" target="_blank">Gerencianet</a>.

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', },
    { label: 'Gerencianet', value: '2', },
  ]
}>

<TabItem value="1">

```
$ git clone <https://github.com/efipay/sdk-dotnet-apis-efi.git>
```

</TabItem>

<TabItem value="2">

```
$ git clone <https://github.com/gerencianet/gn-api-sdk-dotnet.git>
```

</TabItem>

</Tabs>



## Testado com 

dotnet <code>4.0.0</code>

<br/>

## Uso Básico

<Tabs
  defaultValue="csharp"
  values={[
    { label: 'Efí Pay', value: 'csharp', },
     { label: 'Gerencianet', value: '2', },
  ]
}>
<TabItem value="csharp">

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

<TabItem value="2">

```csharp
using Gerencianet.SDK;
...
dynamic endpoints = new Endpoints("client_id", "client_secret", true);

var body = new
{
    items = new[] {
        new {
            name = "Product 1",
            value = 1000,
            amount = 2
        }
    },
    shippings = new[] {
        new {
            name = "Default Shipping Cost",
            value = 100
        }
    }
};

var response = endpoints.CreateCharge(null, body);
Console.WriteLine(response);
```

</TabItem>

</Tabs>

<br/>

## Exemplos

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', },
    { label: 'Gerencianet', value: '2', },
  ]
}>

<TabItem value="1">

```

You can run the examples contained in the Examples project by uncommenting the lines in the Program.cs file.

Just remember to set the correct credentials in Examples/credentials.json before running.
```

</TabItem>

<TabItem value="2">

```
You can run the examples contained in the Gerencianet.SDK.Examples project by uncommenting the lines in the Program.cs file.

Remember to set the correct credentials inside Gerencianet.SDK.Examples/Credentials.Settings before running.
```

</TabItem>

</Tabs>


</div>