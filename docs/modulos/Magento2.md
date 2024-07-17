---
id: Magento2
title: Magento 2
hide_title: true
sidebar_label: Magento 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">Magento 2</h1>
<div className="conteudo">


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="subtitulo">
Módulo Oficial da Efí para o Magento 2 - Versão 1.0.0
</div>

<br/> 
<br/>


O módulo Efí para Magento 2 permite receber pagamentos por meio do <strong>checkout transparente</strong> através da nossa API. Com ele, o proprietário da loja pode optar por receber pagamentos via boleto Bancário, Cartão de crédito, Open Finance e/ou Pix .

<br/>

## 1. Requisitos

* Versões do Magento 2 compatíveis: <code>2.4.4</code>, <code>2.4.5</code> e <code>2.4.6</code>
* Versão mínima do PHP: <code>8.1.x</code>

<br/>

## 2. Instalação do Módulo

Realize o download do módulo e siga os seguintes passos de acordo com a forma que sua loja foi instalada:

### Instalar usando o Composer

- _Instale via packagist _
  - <code>composer require gerencianet/module-magento2</code>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>Neste momento, podem ser solicitadas suas credenciais de autenticação do Magento. Caso tenha alguma dúvida, há uma descrição de como proceder neste <a href="http://devdocs.magento.com/guides/v2.0/install-gde/prereq/connect-auth.html" target="_blank">link da documentação oficial</a>.</p>
</div>
<br/>

2. Execute os comandos:

- <code>bin/magento setup:upgrade</code>
- <code>bin/magento setup:di:compile</code>
- <code>bin/magento cache:clean</code>
- <code>bin/magento setup:static-content:deploy -f</code>
- <code>bin/magento cache:flush</code>

### Instalar usando o Github

Realize o download do módulo: [Clicando aqui!](https://github.com/efipay/magento-efi-module/archive/refs/heads/main.zip)

  1. Extraia o conteúdo do download ZIP e mova o diretório <code>\\Magento2</code> para dentro da pasta <code>Gerencianet</code>;

  2. Verifique se está dessa maneira seus diretórios na sua loja <code>app/code/Gerencianet/Magento2</code>

  3. Habilite o módulo com o seguinte comando, <code>bin/magento module:enable Gerencianet_Magento2</code>

  4. Instale a SDK PHP da Efí utilizando o seguinte comando <code>composer require gerencianet/gerencianet-sdk-php:5</code>

  5. Execute o comando: <code>bin/magento setup:upgrade</code>

  6. Execute o comando: <code>bin/magento setup:di:compile</code>

  7. Execute o comando: <code>bin/magento cache:clean</code>

<br/>


## 3. Configurações

Acesse no Painel Administrativo do Magento no menu lateral clique em **Lojas > Configuração > Clientes > Configurações de Cliente > Opções de Nome e Endereço**. Em _Número de Linhas em Endereço_ você deve informar o número **4** , conforme imagem abaixo:

<div className="figure"><img src="/img/magento.png" alt="banner" /><p>Configurações do endereço</p></div>


**OBS:** No cadastro do usuário, preencher os campos do endereço com rua, número, bairro e complemento, respectivamente.


**Certifique-se também que o campo de telefone esteja obrigatório.**

Após realizar a configuração do Cliente, acesse no Painel Administrativo do Magento no menu lateral clique em `Lojas`, na sequencia clique em `Configuração`, no sub-menu `Vendas` clique em `Formas de Pagamento`. Será carregada a tela para configurar os meios de pagamentos do site.

<div className="figure"><img src="/img/magento1.png" alt="banner" /><p>Configurações do Módulo</p></div>

<br/>

## 4. Como habilitar o Módulo da Efí

No primeiro bloco de informação, está a configuração para habilitar ou desabilitar o módulo por completo, marque `Sim` para continuar a configuração.

<div className="figure"><img src="/img/magento2.png" alt="banner" /><p>Configurações do Módulo</p></div>

Campos: 

- **Ambiente**: Serve para descrever se as transações serão realizadas em ambiente de produção e homologação.
- **Validação de mTLS**: se habilitado, validaremos o mTLS
- **Identificador de conta**: Identificador de conta da Efí
- **Novo Order Status**: Serve para após a finalização da compra definir o Status do pedido.
- **Credenciais de Desenvolvimento ou Produção**: Aqui você informa as suas credenciais (Client Id e Client Secret do ambiente selecionado).

Em seguida temos as configurações de cartão de crédito, configurações de boleto, configurações de pix e configurações de Open Finance.

_OBS: Para que todas as configurações a seguir funcionem, todo o passo a passo anterior deve ter sido seguido._

### Boleto
Nesta sessão você tem as configurações de boleto.

<div className="figure"><img src="/img/magento5.png" alt="banner" /><p>Configurações do Boleto</p></div>

Campos: 

- **Habilitado**: Serve para habilitar ou desabilitar a funcionalidade do boleto.
- **Título**: Altera o nome do método de pagamento no checkout.
- **Dias de validade do Boleto**: Validade do Boleto.
- **Multa após o vencimento**: Valor da multa a ser cobrada após o vencimento.
- **Juros após o vencimento**: Valor de juros a ser cobrado.
- **Instruções no boleto**: Aqui você tem quatro campos que podem ser preenchido com mensagens no boleto, desde que as opções de juros e multa estejam zeradas.


### Cartão de Crédito

Nesta sessão você tem as configurações de cartão de crédito.

<div className="figure"><img src="/img/magento3.png" alt="banner" /><p>Configurações do Cartão</p></div>

Campos:

Habilitado: Serve para habilitar ou desabilitar a funcionalidade de cartão de crédito.
Título: Altera o nome do método de pagamento no checkout.
Sort Order: Ordenação do método de pagamento.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>
Toda configuração de parcelamento, é realizada através do painel da Efí.</p>
</div>
<br/>

### Pix
Nesta sessão você tem as configurações de Pix.

<div className="figure"><img src="/img/magento4.png" alt="banner" /><p>Configurações do Pix</p></div>

Campos: 

- **Habilitado**: Serve para habilitar ou desabilitar a funcionalidade do PIX.
- **Título**: Altera o nome do método de pagamento no checkout.
- **Dias de validade do Pix**: Tempo de validade do PIX (em segundos).
- **Certificado Pix**: Certificado gerado no painel da Efí
- **Chave Pix**: Sua chave pix cadastrada na Efí

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Chave Pix</b>
</div>

<p>Caso a sua chave Pix esteja cadastrada como número de telefone, não se esqueça de seguir o padrão definido pelo BACEN informando +55 DDD e o número, exemplo: <b>+5531988887777</b></p>

</div>

<br/>


### Open Finance
Nesta sessão você tem as configurações do Open Finance.

<div className="figure"><img src="/img/magento6.png" alt="banner" /><p>Configurações do Open Finance</p></div>

Campos: 

- **Habilitado**: Serve para habilitar ou desabilitar a funcionalidade do Open Finance
- **Título**: Altera o nome do método de pagamento no checkout
- **Certificado Open Finance**: Certificado gerado no painel da Efí
- **Nome**: Nome do titular da conta
- **CPF/CNPJ**: Documento do titular da conta
- **Número da Conta**: Número da conta Efí



<br/>

## 5. Dúvidas Frequentes

### É obrigatório possuir SSL em minha loja para aceitar pagamentos com o módulo?

Para que o módulo da Efí para Magento funcione, não é necessário que a loja possua um certificado SSL. Contudo é extremamente recomendado pela Efí que os lojistas utilizem. Independente da sua utilização, todos os dados de pagamento são criptografados e transmitidos com segurança para validação do pagamento. A presença de um certificado SSL instalado em sua loja garante maior segurança para o lojista e para os clientes que realizam compras. A ausência do certificado SSL na tela de pagamento, pode fazer com que o lojista perca vendas, uma vez que o cliente pode se sentir inseguro para digitar dados de pagamento em uma página que não possui um certificado.

<br/>

### Quero usar o Checkout Transparente de forma que o cliente não saia da minha loja para realizar o pagamento. É possível?

Sim. O módulo da Efí para Magento utiliza o checkout transparente para realizar o pagamento dos clientes, ou seja, em nenhum momento o cliente irá sair da sua loja virtual para finalizar o pagamento. Assim, no último passo da compra, será solicitado ao clientes dos dados obrigatórios para efetivar o pagamento.

<br/>


### As parcelas das opções de pagamento não estão sendo carregadas. Como corrigir?

Se após a instalação e configuração do módulo as parcelas do cartão de crédito não carregarem ao clicar sobre as bandeiras dos cartões, o lojista deverá verificar as credenciais informadas na configuração do módulo (chaves Client_Id, Client_Secret e também o "identificador de conta"). Se estiverem corretas, entre em contato com a Efí para que o problema seja analisado.

<br/>

### Estou recebendo a mensagem *“Unauthorized”* ao tentar finalizar uma compra. O que fazer?

Essa mensagem de erro pode estar relacionada com a as credenciais informadas de forma incorreta. Verifique se as suas credenciais estão corretamente inseridas nos respectivos campos de PRODUÇÃO e DESENVOLVIMENTO. Confira em [nossa FAQ](https://sejaefi.com.br/central-de-ajuda/api/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que#conteudo) informações detalhadas.

<br/>

### Está aparecendo a mensagem *“ATENÇÃO! Essa loja está em Modo Desenvolvimento. Um boleto de teste será gerado no ambiente de Sandbox da Efí”*. Como corrigir?

Esta mensagem irá ser exibida quando seu módulo estiver configurado em ambiente de testes (sandbox). Para remover esta mensagem e começar a receber com a Efí, acesse as configurações do módulo em <code>Sistema > Configuração > Formas de Pagamento > Efí Transparente</code> e altere a opção <code>Ambiente</code> de <code>Desenvolvimento</code> para <code>Produção</code>.

<br/>

### Onde posso acompanhar as transações geradas pelo módulo?

As transações geradas através do módulo podem ser acompanhadas em sua conta Efí no link <code>API > Minhas Aplicações > Sua Aplicação</code>. Através das abas "Produção" e "Desenvolvimento" você poderá acompanhar todas as transações e suas respectivas situações, de acordo com o ambiente que estiver utilizando.

<br/>


### Quando tempo realizar um pagamento recebo a mensagem *“Ocorreu um erro ao tentar realizar a sua requisição. Entre em contato com o proprietário da loja.”*

Essa mensagem de erro pode ser exibida no momento da finalização da compra por diversos fatores. Neste caso, o primeiro passo é verificar as credenciais da sua aplicação e também conferir em sua API a sub-aba "histórico de requisições" veja como usar este recurso.

<br/>

## 6. Suporte e Sugestões

Sua sugestão de novas ideias e implementações para o módulo da Efí para Magento é muito importante. Portanto, caso você tenha alguma ideia, entre em contato com a nossa equipe. Iremos analisar sua sugestão e avaliar a possibilidade de implantação.

Caso você tenha alguma dúvida, entre em contato conosco pelo site <a href="https://sejaefi.com.br/" target="_blank" title="Link Externo">Efí</a>.


</div>