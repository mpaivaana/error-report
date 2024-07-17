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

<div className="subtitulo">
Saiba como instalar e configurar nossa SDK de GO para utilizar as APIs da Efí
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>As requisições feitas às APIs da Efí, utilizando a sdk de GO precisam do certificado gerado em sua conta Efí no formato <strong>.pem</strong>.</p>
<p>Confira <a href="/docs/api-pix/credenciais#conversão-de-certificado-p12-para-o-formato-pem" target="_blank">aqui</a> o passo a passo para converter seu certificado P12 para o formato PEM.</p>
</div>
<br/>

## Instalação via GO

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

## Instalação via Git

Nossa SDK também está disponível em nosso repositório no Github da <a href="https://github.com/efipay/sdk-go-apis-efi" target="_blank">Efí</a>.

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

## Testado com

<code>go 1.8, 1.11.4, 1.16.5 and 1.19.2</code>

<br/><br/>


## Uso Básico

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

## Exemplos


Você pode executar os exemplos dentro de `_examples` com `$ go run example.go`:


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

Basta lembrar de definir as credenciais corretas dentro de ``_examples/configs.go`` antes de serem executadas.

<br/>

## Testes

Para executar os testes, basta executar:

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