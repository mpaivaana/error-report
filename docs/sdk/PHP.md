---
id: php
title: PHP
hide_title: true
sidebar_label: PHP
---
<h1 className="titulo">PHP</h1>

<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Saiba como instalar e configurar nossa SDK de PHP para utilizar as APIs da Efí
</div>

<br/>


SDK em PHP para integração com as APIs Efí para emissão de Pix, boletos, carnês, cartão de crédito, assinatura, link de pagamento, marketplance, Pix via Open Finance, pagamento de boletos, dentre outras funcionalidades.

<div className = "video" >
<iframe width="560" height="315" src="https://www.youtube.com/embed/armFxnX8gWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>As requisições feitas às APIs da Efí, utilizando a sdk de PHP precisam do certificado gerado em sua conta Efí no formato <strong>.pem</strong> ou <strong>.p12</strong>.</p>
</div>
<br/>

## Pré-requisitos

Os seguintes pré-requisitos devem ser considerados, de acordo com a _branch_ utilizada:

### SDK Efí Pay
<div className="table">
<table>
  <tbody>
    <tr>
      <th>Versão da branch</th>
      <th>Status</th>
      <th>Packagist</th>
      <th>Repositório  </th>
      <th>Versão do PHP </th>
    </tr>
    <tr>
      <td><a href="https://github.com/efipay/sdk-php-apis-efi" target="_blank">1.x</a></td>
      <td>Mantido</td>
      <td><code>efipay/sdk-php-apis-efi</code></td>
      <td><a href="https://github.com/efipay/sdk-php-apis-efi" target="_blank">master</a></td>
      <td> <code> >=</code>  7.2</td>
    </tr>
    
  </tbody>
</table>
</div>                                 

<br/>

## Instalação via <a href="https://packagist.org/packages/efipay/sdk-php-apis-efi" target="_blank" title="Link Externo">Packagist</a> com o <a href="https://getcomposer.org/" target="_blank" title="Link Externo">Composer</a>

<Tabs
  defaultValue="1x Efi"
  values={[
    { label: 'Efí Pay', value: '1x Efi', }
  ]
}>

<TabItem value="1x Efi">

```html
  composer require efipay/sdk-php-apis-efi
```

</TabItem>
</Tabs>

<br/>

## Instalando versão mais recente via GitHub com o <a href="https://git-scm.com/" target="_blank" title="Link Externo">Git</a>

Nossa SDK também está disponível em nosso repositório no Github da <a href="https://github.com/efipay/sdk-php-apis-efi" target="_blank">Efí</a>.

<Tabs
  defaultValue="1x"
  values={[
    { label: 'Efí Pay', value: '1x', },
  ]
}>

<TabItem value="1x">

```html
git clone https://github.com/efipay/sdk-php-apis-efi.git
cd sdk-php-apis-efi/
composer install
```

</TabItem>

</Tabs>

Após a instalação, o download das dependências irá acontecer automaticamente, estas serão armazenadas em suas respectivas pastas e o Composer continuará com o restante do trabalho ao gerar o arquivo <code>composer.lock</code>.

Cabe frisar que, caso você necessite, por exemplo, excluir um pacote, basta deletar sua referência do arquivo <code>composer.json</code> e atualizar o Composer através do seguinte comando:

```
$ composer update
```

Dessa forma, o Composer será atualizado e, como não há mais a presença do pacote na diretiva require, ele será imediatamente "desinstalado".

<br/>

### Resumo

<ul>
<li>Instalar o Composer;</li>
<li>Informar, no arquivo <code>composer.json</code>, a SDK da Efí que será instalada;</li>
<li>Executar o comando de instalação no diretório do projeto: <code>composer install</code>;</li>
<li>Pronto!</li>
</ul>

<br/>

## Executar exemplos

Você pode executar usando qualquer servidor web, como Apache ou nginx e abrir qualquer exemplo em seu navegador.
 
<div className="admonition admonition_info">
 <div>
    <img src="/img/info-circle-blue.svg"/> <b>Informação</b>
  </div>
<p>Alguns exemplos requerem que você altere alguns parâmetros para funcionar, como <code>/examples/pix/cob/pixCreateCharge.php</code> ou <code>/examples/charges/billet/createOneStepBillet.php</code>.</p>
</div>

<br/>

## Validador de Migração

Se você já possui integração com a SDK de PHP da Gerencianet e está buscando preparar a sua aplicação para as inovações futuras das APIs Efí, você pode usar o nosso validador para auxiliar na migração para esta SDK.

O Validador de Migração da SDK Efí torna o processo de migração mais suave e eficiente. <b>Essa ferramenta não modifica o seu código</b>, apenas analisa o código existente em busca de padrões específicos relacionados a classes e métodos que foram modificados na nova versão da SDK.

Antes de realizar qualquer modificação no código da sua aplicação, é altamente aconselhável fazer um backup completo de todo o seu projeto.

Para saber mais detalhes de como utilizar, consulte <a href="https://github.com/efipay/sdk-php-apis-efi#validador-de-migra%C3%A7%C3%A3o">nosso repositório do Github.</a>

<br/>

## Erros Comuns (cURL error 60 ou cURL error 77)

Os erros a seguir não são da API Efí, mas relacionados à componentes de seu servidor. Confira abaixo os erros mais comuns durante a instalação de nossa API e veja as soluções:
<ul>
<li><a href="https://sejaefi.com.br/central-de-ajuda/api/curl-error-60-ou-curl-error-77-como-resolver#conteudo">cURL error 60</a></li>
<li><a href="https://sejaefi.com.br/central-de-ajuda/api/curl-error-60-ou-curl-error-77-como-resolver#conteudo">cURL error 77</a></li>
</ul>

<br/>

## Extra: timeout option

Este atributo está presente na SDK de PHP e permite que você defina no request do Guzzle em quanto tempo você quer que a resposta seja retornada. Para detalhes de como utilizar, consulte <a href="https://github.com/efipay/sdk-php-apis-efi#come%C3%A7ando">nosso repositório do Github.</a>


</div>