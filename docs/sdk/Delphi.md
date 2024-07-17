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
Saiba como instalar e configurar nossa SDK de Delphi para utilizar as APIs da Efí
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>As requisições feitas às APIs da Efí, utilizando a sdk de Delphi precisam do certificado gerado em sua conta Efí no formato <strong>.p12</strong>.</p>
</div>
<br/>

## Pré Requisitos

* Aplicações que usarão a SDK devem ser compiladas na plataforma Windows 32-bit.
* Apenas aplicações Desktop.

<div className="admonition admonition_info">
<div>
<img src="/img/lightbulb-on-blue.svg"/> <b>Observações</b>
</div>
<p>Originalmente, as SDK´s de Delphi foram executados e desenvolvidas no Delphi Rio Community Edition 10.3.</p>
<p>Lembrando que esta SDK, foi desenvolvida para ser retrocompatível, ou seja, compatível tanto com as versões mais recentes do Delphi quanto as versões mais antigas, no entanto, a Efí somente irá dar suporte à aplicações desktop win-32 desenvolvidas no Delphi Rio Community Edition 10.3.</p>
</div>
<br/>

## Download da SDK Delphi 

Todo o código de demonstração está disponível em nosso repositório no GitHub da <a href="https://github.com/efipay/sdk-delphi-apis-efi" target="_blank">Efí</a>. Após concluir o download descompacte o arquivo em alguma pasta de sua preferência e a SDK estará pronta para uso.

<br/>


## Execução Demo

Após realizar o download e extrair os arquivos, abra a pasta Api Compilada e lá terá o arquivo a ser executado:

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

## Usando a SDK da Efí

Para utilização da SDK, basta adicionar as classes ao seu projeto e chama-las conforme suas necessidades.

<div className="admonition admonition_info">
<div>
<img src="/img/lightbulb-on-blue.svg"/> <b>DLL's</b>
</div>
<p>Dependendo do Endpoint a ser utilizado, será necessário adicionar as DLL´s (Disponíveis em: \Api Compilada) e classes externas (Disponíveis em: \Code\External) ao seu projeto também.</p>
</div>
<br/>

A API sempre irá retornar uma string JSON, portanto, qualquer tipo de argumento passado para as funções da SDK devem ser do tipo _String_. 

Antes de consumir qualquer endpoint da API, é necessário autenticar na API usando a SDK. Para isso, você irá fornecer os seus dados:

- <code>Client_Id</code>;
- <code>Client_Secret</code>;
- Ambiente (sandbox ou produção);
- Certificado em modo .p12 (Apenas a API Pix).

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>Observação</b>
  </div>
  <p>O ambiente "sandbox" (ou "homologação") é o local que a Efí disponibiliza ao integrador para testar sua integração.</p>
  <p>Já o ambiente de "produção" é o ambiente "real" que sua aplicação deverá estar para gerar cobranças (ou "transações") "reais".</p>
  <p><b>LEMBRE-SE:</b> caso você ativar o "sandbox", utilize _Client_Id_ e _Client_Secret_ de <a href="/img/homologacao.jpg" target="_blank"> homologação</a>, assim como, se estiver usando ambiente de <a href="/img/producao.jpg" target="_blank"> produção</a>, use _Client_Id_ e _Client_Secret_ do referido ambiente.</p>
  <p>O ambiente "sandbox" (ou "homologação") é o local que a Efí disponibiliza ao integrador para testar sua integração.</p>
</div>

<br/>

## Dependências externas do Projeto

Para desenvolvimento da SDK, foi utilizada algumas classes externas disponíveis em:

- Classe Super Object: <https://github.com/onryldz/x-superobject>
- Classe ZXingQRCode: <https://github.com/foxitsoftware/DelphiZXingQRCode/tree/master/Source>
- Classe Chilkat: <https://www.chilkatsoft.com/delphiDll.asp>

<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Observação</b>
</div>
<p>Essas classes externas já se encontram dentro de nosso projeto na pasta "Utils/External".</p>
</div>


</div>