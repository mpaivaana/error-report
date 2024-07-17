---
id: flutter
title: Flutter
hide_title: true
sidebar_label: Flutter
---
<h1 className="titulo">Flutter</h1>

<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Saiba como instalar e configurar nossa SDK de Flutter para utilizar as APIs da Efí
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>As requisições feitas às APIs da Efí, utilizando a sdk de Flutter precisam do certificado gerado em sua conta Efí no formato <strong>.p12</strong>.</p>
</div>
<br/>

## Instalando

Para usar este plugin, adicione efipay como dependência em seu arquivo <a href="https://pub.dev/packages/efipay" target="_blank" rel="packages flutter">pubspec.yaml</a> para utilizar a SDK da Efí Pay.

<br/>

## Testado com

Dart <code>2.12.3</code>

<br/>

## Uso Básico

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```dart
import 'package:efipay/efipay.dart';

class _PaymentPageState extends State<PaymentPage> {
  var config = {
    'client_id': 'YOUR_CLIENT_ID',
    'client_secret': 'YOU_CLIENT_SECRET',
    'account_id': ''
    'sandbox': false,
    'certificate': '',
  };
  EfiPay efipay;

  @override
  void initState() {
    this.efipay = Efipay(config);
  }

}
```

</TabItem>


</Tabs>


<br/>

## Exemplos


Exemplo de como criar uma charge:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```dart
void createCharge(){
  EfiPay efi = EfiPay(config);
  dynamic body = {
      'items': [
        {'name': "Product 1", 'value': 1100, 'amount': 2}
      ],
    };
  return await efi.call('createCharge', body: body);
}
```

</TabItem>

</Tabs>


Todos os exemplos disponíveis em nossa SDK você encontra em nosso repositório no Github da <a href="https://github.com/efipay/sdk-dart-apis-efi/tree/main/example" target="_blank" rel="Exemplos Dart">Efí</a>.

Depois, execute o comando:

```
flutter pub get
```

<br/>



</div>