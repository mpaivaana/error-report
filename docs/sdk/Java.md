---
id: java
title: Java
hide_title: true
sidebar_label: Java
---


<h1 className="titulo">Java</h1>

<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Saiba como instalar e configurar nossa SDK de Java para utilizar as APIs da Efí
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>As requisições feitas às APIs da Efí, utilizando a sdk de Java precisam do certificado gerado em sua conta Efí no formato <strong>.p12</strong>.</p>
</div>
<br/>

## Pré Requisitos

* Java >=7.0

<br/>

## Testado com

* Java `7.0`, `8.0`, `13.0` e `20.0`

<br/>

## Instalação via gradle

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
implementation 'br.com.efipay.efisdk:sdk-java-apis-efi:1.0.3'
```

</TabItem>

</Tabs>



<br/>

## Instalação via maven

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```java
<dependency>
    <groupId>br.com.efipay.efisdk</groupId>
	  <artifactId>sdk-java-apis-efi</artifactId>
	  <version>1.0.3</version>
</dependency>
```

</TabItem>


</Tabs>

<br/>

## Instalando via Git a Sdk de exemplos

Nossa SDK de examplos está disponível em nosso repositório no Github da <a href="https://github.com/efipay/sdk-java-examples-apis-efi" target="_blank">Efí</a>.

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
$ git clone https://github.com/efipay/sdk-java-examples-apis-efi.git
```

</TabItem>

</Tabs>

<br/>

## Começando

Requer o módulo e os pacotes:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```java
import br.com.efi.efisdk.EfiPay;
import br.com.efi.efisdk.exceptions.EfiPayException;
```

</TabItem>


</Tabs>



Embora as respostas dos serviços da Web estejam no formato json, a SDK converterá qualquer resposta do servidor para um *JSONObject* ou um *Map <String, Object>*. O código deve estar dentro de um *try-catch* e as exceções podem ser tratadas da seguinte forma:


<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>
<TabItem value="1">

```java
try {
  /* code */
} catch(EfiPayException e) {
  /* EfiPay's api errors will come here */
} catch(Exception ex) {
  /* Other errors will come here */
}
```

</TabItem>


</Tabs>

<br/>

### Para ambiente de homologação

Instanciar o módulo passando seu *Client_Id, Client_Secret* e sandbox sendo igual a `true`:


<Tabs
  defaultValue="1"
  values={[
    { label: 'JSONObject', value: '1', },
    { label: 'Map', value: '3', },
  ]
}>
<TabItem value="1">

```java
JSONObject options = new JSONObject();
options.put("client_id", "client_id");
options.put("client_secret", "client_secret");
options.put("certificate", "./certs/developmentCertificate.p12");
options.put("sandbox", true);

EfiPay efi = new EfiPay(options);
```

</TabItem>

<TabItem value="3">

```java
Map<String, Object> options = new HashMap<String, Object>();
options.put("client_id", "client_id");
options.put("client_secret", "client_secret");
options.put("certificate", "./certs/developmentCertificate.p12");
options.put("sandbox", true);

EfiPay efi = new EfiPay(options);
```

</TabItem>

</Tabs>

<br/>

### Para ambiente de produção

Para alterar o ambiente para produção, basta definir o terceiro sandbox como ``false``, e seu *Client_Id e Client_Secret* de produção:

<Tabs
  defaultValue="1"
  values={[
    { label: 'JSONObject', value: '1', },
    { label: 'Map', value: '3', },
  ]
}>
<TabItem value="1">

```java
JSONObject options = new JSONObject();
options.put("client_id", "client_id");
options.put("client_secret", "client_secret");
options.put("certificate", "./certs/productionCertificate.p12");
options.put("sandbox", false);

EfiPay efi = new EfiPay(options);
```

</TabItem>


<TabItem value="3">

```java
Map<String, Object> options = new HashMap<String, Object>();
options.put("client_id", "client_id");
options.put("client_secret", "client_secret");
options.put("certificate", "./certs/productionCertificate.p12");
options.put("sandbox", false);

EfiPay efi = new EfiPay(options);
```

</TabItem>

</Tabs>


<br/>

## Executando testes

Para executar o conjunto de testes com *coverage*:

```
mvn clean test jacoco:report
```

<br/>

## Executando exemplos

Para executar alguns exemplos existentes siga as etapas descritas em nosso Github da  <a href="https://github.com/efipay/sdk-java-examples-apis-efi">Efí</a>.

</div>