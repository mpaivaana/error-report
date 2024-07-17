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

<div class="subtitulo">
Learn how to install and configure our Java SDK to use Efí APIs
</div>

<br/>

<div class="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>Requests made to Efí APIs using the Java SDK require the certificate generated in your Efí account in <strong>.p12</strong> format.</p>
</div>
<br/>

## Prerequisites

* Java >=7.0

<br/>

## Tested with

* Java `7.0`, `8.0`, `13.0` e `20.0`

<br/>

## Installation via gradle

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

## Installation via maven

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

## Installing via Git the Example SDK

Our sample SDK is available in our <a href="https://github.com/efipay/sdk-java-examples-apis-efi" target="_blank">Efí</a> Github repository.


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

## Starting

Requires module and packages:

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


Although responses from web services are in json format, the SDK will convert any response from the server to a *JSONObject* or a *Map <String, Object>*. The code must be inside a *try-catch* and exceptions can be handled as follows:

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

### For sandbox environment

Instantiate the module passing its *Client_Id, Client_Secret* and saging being equal to `true`:


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

### For production environment

To change the environment to production, simply set the third sandbox to ``false``, and your production *Client_Id and Client_Secret*:

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

## Running Tests

To execute the test suite with *coverage*:

```
mvn clean test jacoco:report
```

<br/>

## Running examples

To run some existing examples, follow the steps described in our <a href="https://github.com/efipay/sdk-java-examples-apis-efi">Efí</a> Github.

</div>