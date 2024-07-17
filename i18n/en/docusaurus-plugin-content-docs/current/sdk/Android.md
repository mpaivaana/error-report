---
id: android
title: Android
hide_title: true
sidebar_label: Android
---
<h1 className="titulo">Android</h1>

<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div class="subtitulo">
    Learn how to install and configure our Android SDK to use Efí APIs
</div>

<br/>

<div class="admonition admonition_caution">
    <div>
        <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
    </div>
    <p>Requests made to Efí APIs using the Android SDK require the certificate generated in your Efí account in <strong>.pem</strong> format.</p>
    <p>Check <a href="/en/docs/api-pix/credenciais#conversion-of-p12-certificate-to-pem-format" target="_blank">here</a> the step-by-step process to convert your P12 certificate to PEM format.</p>
</div>
<br/>

## Prerequisites

Android <code>7.0+</code>

<br/>


## Installation via gradle

```
implementation 'br.com.gerencianet.mobile:gn-api-sdk-android:1.0.0'
```

Our SDK is also available on our repository on <a href="https://github.com/gerencianet/gn-api-sdk-android" target="_blank">Github</a>.

<br/>

## Tested with

Android <code>7.0</code> and <code>11.0</code>

<br/>

## Basic Usage

Require the module and packages:


```
import br.com.gerencianet.mobile.Gerencianet;
```

<Tabs
  defaultValue="android"
  values={[
    { label: 'Android', value: 'android', },
  ]
}>

<TabItem value="android">

```java
try {
  /* code */
  } catch(GerencianetException e) {
  /* Gerencianet's api errors will come here */
  } catch(Exception ex) {
  /* Other errors will come here */
}
```

</TabItem>
</Tabs>

<br/>

### For sandbox environment

Instantiate the module passing your *Client_Id, Client_Secret*, and setting sandbox to `true`:


<Tabs
  defaultValue="JSONObject"
  values={[
    { label: 'Sandbox', value: 'JSONObject', },
  ]
}>
<TabItem value="JSONObject">

```java
HashMap<String, Object> options = new HashMap<String Object>();
options.put("client_id", "client_id ");
options.put("client_secret", "client_secret");
options.put("sandbox", true);
Gerencianet gn = new Gerencianet(options);
```

</TabItem>
</Tabs>


<br/>

### For production environment

To change the environment to production, simply set the third sandbox to ``false``, and its *Client_Id* and *Client_Secret* to production:

<Tabs
  defaultValue="JSONObject"
  values={[
    { label: 'Production', value: 'JSONObject', },
  ]
}>
<TabItem value="JSONObject">

```java
HashMap<String, Object> options = new HashMap<String Object>();
options.put("client_id", "client_id ");
options.put("client_secret", "client_secret");
options.put("sandbox", false);
Gerencianet gn = new Gerencianet(options);
```

</TabItem>
</Tabs>

<br/>

### Pix API

To use the PIX API, it is necessary to enter the certificate path, in .12 format within the _assets_ folder and pass the _assets_ of the context as a parameter.

<Tabs
  defaultValue="JSONObject"
  values={[
    { label: 'Pix API', value: 'JSONObject', },
  ]
}>
<TabItem value="JSONObject">

```java
HashMap<String, Object> options = new HashMap<String Object>();
options.put("client_id", "client_id ");
options.put("client_secret", "client_secret");
options.put("pix_cert", "./cert.p12");
options.put("sandbox", false);
Gerencianet gn = new Gerencianet(options, context.getAssets());
```

</TabItem>
</Tabs>


</div>