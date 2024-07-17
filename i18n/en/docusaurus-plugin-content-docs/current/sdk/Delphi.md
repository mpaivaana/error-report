---
id: delphi
title: Delphi
hide_title: true
sidebar_label: Delphi
---
<h1 className="titulo">Delphi</h1>


<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Know how to install and configure our Delphi SDK to use Efí APIs
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Attention!</b>
</div>
<p>Requests made to Efí APIs using the Delphi SDK require the certificate generated in your Efí account in <strong>.p12</strong> format.</p>
</div>
<br/>

## Prerequisites

* Applications using the SDK must be compiled on the Windows 32-bit platform.
* Only desktop applications are supported.

<div className="admonition admonition_info">
<div>
<img src="/img/lightbulb-on-blue.svg"/> <b>Notes</b>
</div>
<p>Originally, the Delphi SDKs were executed and developed in Delphi Rio Community Edition 10.3.</p>
<p>Remember that this SDK was designed to be retrocompatible, meaning it is compatible with both the latest versions of Delphi and older versions. However, Efí will only provide support for win-32 desktop applications developed in Delphi Rio Community Edition 10.3.</p>
</div>
<br/>

## Delphi SDK Download

All demonstration code is available in our GitHub repository at <a href="https://github.com/efipay/sdk-delphi-apis-efi" target="_blank">Efí</a>. After downloading, unzip the file to a folder of your choice, and the SDK will be ready for use.

<br/>

## Demo Execution

After downloading and extracting the files, open the Compiled API folder, and there you will find the executable file:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Efí Pay', value: '1', }
  ]
}>

<TabItem value="1">

```
ApisEFI.exe
```

</TabItem>

</Tabs>


<br/>

## Using the Efí SDK

To use the SDK, simply add the classes to your project and call them as needed.

<div className="admonition admonition_info">
<div>
<img src="/img/lightbulb-on-blue.svg"/> <b>DLL's</b>
</div>
<p>Depending on the Endpoint to be used, you may need to add the DLL's (Available at: \Compiled Api) and external classes (Available at: \Code\External) to your project as well.</p>
</div>
<br/>

The API will always return a JSON string, so any arguments passed to the SDK functions must be of type _String_.

Before consuming any API endpoint, it is necessary to authenticate with the API using the SDK. For this, you will provide your data:

- <code>Client_Id</code>;
- <code>Client_Secret</code>;
- Environment (sandbox or production);
- Certificate in .p12 format (Only for the Pix API).

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>Observation</b>
  </div>
  <p>The "sandbox" environment (or "testing") is the location where Efí provides the integrator to test their integration.</p>
  <p>On the other hand, the "production" environment is the "real" environment that your application should be in to generate "real" charges (or "transactions").</p>
  <p><b>REMEMBER:</b> if you activate the "sandbox", use _Client_Id_ and _Client_Secret_ from <a href="/img/homologacao.jpg" target="_blank">testing</a>, just as if you are using the <a href="/img/producao.jpg" target="_blank">production</a> environment, use _Client_Id_ and _Client_Secret_ from that environment.</p>
</div>

<br/>


## External Dependencies of the Project

For the development of the SDK, some external classes were used, available at:

- Super Object Class: [https://github.com/onryldz/x-superobject](https://github.com/onryldz/x-superobject)
- ZXingQRCode Class: [https://github.com/foxitsoftware/DelphiZXingQRCode/tree/master/Source](https://github.com/foxitsoftware/DelphiZXingQRCode/tree/master/Source)
- Chilkat Class: [https://www.chilkatsoft.com/delphiDll.asp](https://www.chilkatsoft.com/delphiDll.asp)

<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Note</b>
</div>
<p>These external classes are already included in our project in the "Utils/External" folder.</p>
</div>



</div>