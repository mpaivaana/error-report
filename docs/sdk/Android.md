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

<div className="subtitulo">
Saiba como instalar e configurar nossa SDK de Android para utilizar as APIs da Efí
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>As requisições feitas às APIs da Efí, utilizando a sdk de Android precisam do certificado gerado em sua conta Efí no formato <strong>.pem</strong>.</p>
<p>Confira <a href="/docs/api-pix/credenciais#conversão-de-certificado-p12-para-o-formato-pem" target="_blank">aqui</a> o passo a passo para converter seu certificado P12 para o formato PEM.</p>
</div>
<br/>

## Pré-requisitos

Android <code>7.0+</code>

<br/>

## Instalação via gradle

```
implementation 'br.com.gerencianet.mobile:gn-api-sdk-android:1.0.0'
```

Nossa SDK também está disponível em nosso repositório no <a href="https://github.com/gerencianet/gn-api-sdk-android" target="_blank">Github</a>.

<br/>

## Testado com

Android <code>7.0</code> e <code>11.0</code>

<br/>

## Uso Básico

Requer o módulo e os pacotes:

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

### Para ambiente de homologação

Instanciar o módulo passando seu *Client_Id, Client_Secret* e sandbox sendo igual a `true`:


<Tabs
  defaultValue="JSONObject"
  values={[
    { label: 'Homologação', value: 'JSONObject', },
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

### Para ambiente de produção

Para alterar o ambiente para produção, basta definir o terceiro sandbox como ``false``, e seu *Client_Id e Client_Secret* de produção:

<Tabs
  defaultValue="JSONObject"
  values={[
    { label: 'Produção', value: 'JSONObject', },
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

### API PIX

Para utilizar a API PIX, é necessário informar o caminho do certificado, no formato .12 dentro da pasta _assets_ e passar como parâmetro o _assets_ do contexto.

<Tabs
  defaultValue="JSONObject"
  values={[
    { label: 'API Pix', value: 'JSONObject', },
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