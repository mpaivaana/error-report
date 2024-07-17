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
Learn how to install and configure our Flutter SDK to use Efí's APIs
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>Requests made to Efí's APIs using the Flutter SDK require the certificate generated in your Efí account in <strong>.p12</strong> format.</p>
</div>
<br/>

## Installing

To use this plugin, add efipay as a dependency in your <a href="https://pub.dev/packages/efipay" target="_blank" rel="packages flutter">pubspec.yaml</a> file to use Efí Pay's SDK.

<br/>

## Tested with

Dart <code>2.12.3</code>

<br/>

## Basic Usage

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

## Examples

Example of how to create a charge:

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


All examples available in our SDK can be found in our Github repository at <a href="https://github.com/efipay/sdk-dart-apis-efi/tree/main/example" target="_blank" rel="Exemplos Dart">Efí</a>.

Then, execute the command:

```
flutter pub get
```

<br/>



</div>