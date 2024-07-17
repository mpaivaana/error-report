---
id: go
title: GO
hide_title: true
sidebar_label: GO
---
<h1 className="titulo">GO</h1>

<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div class="subtitle">
Learn how to install and configure our GO SDK to use Efí APIs
</div>

<br/>

<div class="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>Requests made to Efí APIs using the GO SDK require the certificate generated in your Efí account in <strong>.pem</strong> format.</p>
<p>Check <a href="/en/docs/api-pix/credenciais#conversion-of-p12-certificate-to-pem-format" target="_blank">here</a> for a step-by-step guide on converting your P12 certificate to PEM format.</p>
</div>
<br/>

## Installation via GO

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ go mod init github.com/efipay/sdk-go-apis-efi
```

</TabItem>

</Tabs>

<br/>

## Installation via Git

Our SDK is also available in our <a href="https://github.com/efipay/sdk-go-apis-efi" target="_blank">Efí</a> Github repository.

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ git clone https://github.com/efipay/sdk-go-apis-efi.git
```

</TabItem>

</Tabs>

## Tested with

<code>go 1.8, 1.11.4, 1.16.5 and 1.19.2</code>

<br/><br/>


## Basic Usage

<Tabs
  defaultValue="go"
  values={[
    { label: 'Efí Pay', value: 'go', }
  ]
}>
<TabItem value="go">

```go

import (
	"fmt"
	"github.com/efipay/sdk-go-apis-efi/src/efipay"
	"github.com/efipay/sdk-go-apis-efi/examples/configs"
)

func main(){
	
	credentials := configs.Credentials
	efi := efipay.NewEfiPay(credentials)
	
	body := map[string]interface{} {
		"items": []map[string]interface{}{
			{
				"name": "Product 1",
				"value": 1000,
				"amount": 2,
			},
		},
		"shippings": []map[string]interface{} {
			{
				"name": "Default Shipping Cost",
				"value": 100,
			},
		},
	}

	res, err := efi.CreateCharge(body)

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(res)
	}
}
```

</TabItem>


</Tabs>

<br/>

## Examples

You can run the examples inside `_examples` with `$ go run example.go`:


<Tabs
  defaultValue="go"
  values={[
    { label: 'GO', value: 'go', },
  ]
}>
<TabItem value="go">

```go
$ go run charge/create_charge.go
```

</TabItem>

</Tabs>

Just remember to set the correct credentials within ``_examples/configs.go`` before running.

<br/>

## Tests

To run the tests, simply run:

<Tabs
  defaultValue="go"
  values={[
    { label: 'GO', value: 'go', },
  ]
}>
<TabItem value="go">

```go
$ go test
```

</TabItem>
</Tabs>

</div>