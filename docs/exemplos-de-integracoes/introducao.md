---
id: introducao
title: Introdução
hide_title: true
sidebar_label: Introdução
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">Introdução</h1>
<div className="conteudo">

<div className="subtitulo">
Exemplos funcionais de todos os serviços de cobranças oferecidos na API Efí
</div>

<br/>
<br/>

## API

Buscando oferecer uma forma de clientes e integradores visualizar na prática como são emitidas nossas cobranças, oferecemos vários **exemplos prontos de integração com as APIs da Efí** que demonstram a modalidade de **boleto/Bolix**, **carnê**, **cartão de crédito**, **Pix**, **assinaturas (cobrança recorrente)**, **link de pagamento** e **Split de pagamento**, podendo assim ter uma experiência com os nossos serviços antes de ir para o desenvolvimento.

<a href="https://exemplos-integracao.efipay.com.br/"  target="_blank" alt="Exemplos"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Acessar Exemplos de demonstração
</button></a>

<br/>
<br/>
<br/>

<div className="gif">
<a href="https://exemplos-integracao.efipay.com.br/" target="_blank"><img align="center" src="/img/exemplo-integracao.gif"/>  
</a>
</div>

<br/>

Além da possibilidade de executar estes testes, deixamos todos os códigos utilizados nestes exemplos disponíveis para download. Vale ressaltar que, nestes exemplos foi utilizado a <a href="/docs/sdk/php" target="_blank">SDK de PHP</a> para integração com as APIs.


<br/>

### Executar exemplos


Para executar estes exemplos em seu ambiente você precisa <a href="https://sejaefi.com.br/#abrirconta" target="_blank">criar uma conta Efí</a> e também uma <a href="https://sejaefi.com.br/central-de-ajuda/api/como-criar-uma-nova-aplicacao-para-usar-a-api-pix#conteudo" target="_blank">aplicação</a> para obter as credenciais.

<a href="https://exemplos-integracao.efipay.com.br/download/exemplos-integracao.zip" alt="Codigo"><button className="buttonPostman">
<svg className="icon-download">
 
</svg>
  Baixar códigos de exemplos de Integração
</button></a>

<br/><br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Após baixar estes exemplos, não esqueça de inserir suas credenciais no arquivo <b>credentials.json</b>, sendo elas, o <code>Client_Id</code> e <code>Client_Secret</code> de acordo com o ambiente utilizado (Homologação ou produção), além de lembrar que o parâmetro <code>sandbox</code> é booleano e possui 2 valores possíveis, de acordo com o ambiente, sendo: <code>sandbox => true</code> equivale ao ambiente de Homologação e <code>sandbox => false</code> equivale ao ambiente de Produção.</p>

<p>Para utilizar o exemplo do <i>Pix</i>, deve-se informar também no arquivo <b>credentials.json</b>, no atributo <code>certificate</code> o diretório <b>./certs/</b>, acrescentando o nome do seu certificado no formato <b>.pem</b>. Aqui você encontra dicas para <a href="/docs/api-pix/credenciais#gerando-um-certificado-p12" target="_blank">gerar seu certificado e convertê-lo <b>.p12</b> para <b>.pem</b></a>. É necessário também, no arquivo <b>./pix/emitir_pix.php</b>, na variável <code>$body</code> inserir sua <a href="https://sejaefi.com.br/central-de-ajuda/pix/como-cadastrar-chaves-pix#conteudo"  target="_blank">chave pix registrada na Efí</a> no parâmetro <code>"chave" => ""</code>.</p>

<p>Para funcionamento dos exemplos que envolvem a emissão de _cartão de crédito_, é necessário que você informe seu <a href="/img/identificador.png" target="_blank">identificador de conta</a> na <b>linha 1</b> do script contido no arquivo <b>./assets/js/payment-token.js</b>. Script este que é utilizado para obtenção do <i>payment_token</i>. Importante frisar que este código é específico de acordo com o ambiente utilizado (produção ou Homologação). <a href="/docs/api-cobrancas/cartao#obtenção-do-payment_token" target="_blank">Veja neste link</a> como obter corretamente seu payment_token.</p>
</div>
<br/>

Por se tratar de um exemplo meramente ilustrativo e de cunho educativo, é necessário que você adapte à sua necessidade. **Não nos responsabilizamos pela utilização deste exemplo sem os ajustes necessários para seu ambiente de produção.**

## Lightbox

A integração com o Lightbox da Efí lhe permite exibir o formulário de coleta das informações de pagamento sobreposta à sua página de checkout. Por exemplo, quando o cliente adiciona os produtos no carrinho e fecha o pedido, apenas esmaecemos o fundo do seu site e o comprador visualiza uma nova janela modal para preenchimento dos dados de pagamento.

### Como funciona o Lightbox

O Lightbox se comunica com a API da Efí Pay através de um back-end que deve ser desenvolvido utilizando uma de nossas SDKs disponíveis, de acordo com a necessidade e regra de negocio do sistema integrador. Sendo necessário o integrador desenvolver também a solução de retorno das notificações, utilizando da funcionalidade de callback para boleto e cartão, e o webhook para Pix.

<br/>

<a href="https://lightbox.efipay.com.br/"  target="_blank" alt="Exemplos"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Acessar Loja de demonstração
</button></a>

<br/>
<br/>
<br/>

<div className="gif">
<a href="https://lightbox.efipay.com.br/" target="_blank"><img align="center" src="/img/exemplo-lightbox.gif"/>  
</a>
</div>

<br/>

### Instalação

Para instalar a loja de demonstração do Lightbox, basta clonar o repositório do Github e seguir as intruções de instalação disponível no arquivo README.md.

No código de exemplo que disponibilizamos é possível optar por utilizar o back-end em PHP ou Node.js, as alterações necessárias para a utilização de cada um deles estão descritas no arquivo README.md.

<a href="https://github.com/efipay/lightbox-efi/tree/main"  target="_blank" alt="Exemplos"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Acessar Repositório
</button></a>

</div>