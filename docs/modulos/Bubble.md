---
id: Bubble
title: Bubble
hide_title: true
sidebar_label: Bubble
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">Bubble</h1>
<div className="conteudo">

<div className="subtitulo">
Módulo de Integração Efí para Bubble - Versão 1.0.0
</div>

<br/>
<br/>
O módulo Efí Bank para Bubble permite receber pagamentos via Boleto, Cartão de Crédito e Carnê.
<br/>
<br/>
O Bubble é uma plataforma versátil para o desenvolvimento de sites/plataformas. Seguindo cuidadosamente esses passos, você será capaz de obter client_id e client_secret, codificá-los em base64 e configurar os campos essenciais para começar a receber seus pagamentos.

<br/><br/>

## 1. Instalação

### 1.1. Obter Credenciais da API

Antes de começar a receber pagamentos com a Efí, você precisará obter as credenciais de Produção e Homologação, para isso, siga as etapas a seguir:

<ul>
<li>Acesse o painel da Efí no <a href="https://app.sejaefi.com.br/api/introducao">menu <b>API</b></a>.</li>
<li>No menu lateral, clique em <a href="https://app.sejaefi.com.br/api/aplicacoes"><b>Aplicações</b></a> depois em <b>Criar aplicação</b>.</li>
<li>Insira um nome para a aplicação (por exemplo: Bubble), e selecione a opção "API de emissões" (boletos, carnê e cartão de crédito);</li>
<li>Clique em <b>Criar aplicação</b>.</li>
<li>Informe a sua <b>Assinatura Eletrônica</b> para confirmar as alterações e atualizar a aplicação.</li>
</ul>

Após obter `client_id` e `client_secret`, você será levado a uma tela semelhante a tela abaixo:

<div className="figure">
  <img src="/img/credenciais.png" />
</div>

<br/>

### 1.2. Codificar Credenciais

Copie então seu `client_id` e `client_secret`, acesse a página: https://efipay.github.io/encode-credentials/ e então cole as credenciais em seus respectivos campos.

Clique em "<b>Codificar e Exibir</b>"

<div className="fluxograma small">
  <img className="light-border" src="/img/encode-credentials.png" />
</div>

Copie então o código retornado e guarde essa informação, pois usaremos mais a frente na configuração do plugin.

<br/>

## 2. Instalando o plugin

- <b>Acesso ao Editor do Bubble: </b>
  Faça login na sua conta do Bubble e acesse o editor da sua aplicação.

- <b>Adição do Plugin:</b> No menu lateral, clique em "Plugins" e, em seguida, selecione "+ Add plugins".

- <b>Instalação:</b> Pesquise por "Efí Bank" e instale o plugin da forma de pagamento desejada:

<div className="figure">
  <img className="light-border" src="/img/bubble.png" />
</div>

Clique em "Done" para finalizar.

<br/>

## 3. Configurando o plugin

Para configurar, copie o as credenciais codificadas, obtida ao final da etapa 1.2 e cole no campo `Authorization (header)(token call)` :

<div className="figure">
<img className="light-border" src="/img/bubble_config_1.png"/>
</div>

Pronto! Configuração finalizada!
Obs: Caso utilize o plugin de cobranças de Cartão de crédito, executar a etapa 3.1 logo abaixo.

### 3.1. Cartão de Crédito

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
  </div>

<p>As etapas abaixo são necessárias <b>SOMENTE</b> para o plugin de Cartão de Crédito. Não se repetindo aos demais plugins da Efí Bank para Bubble.</p>
</div>

<br/>

Após preencher o campo de `Authorization` (Etapa 3), é preciso preencher os seguintes campos:

- <b>PayeeCode:</b> Insira o identificador de Conta da Efí disponível no menu <a href="https://app.sejaefi.com.br/api/introducao"><b>API</b></a>. Veja onde encontrá-lo <a href="/img/identificador.png" target="_blank">aqui</a>.

Os demais campos você precisa inserir o nome de cada input em seu projeto.
Sendo eles:

- <b>id-input-cardnumber</b>: Numero do cartão
- <b>id-input-cvv</b>: CVV do cartão
- <b>id-input-totalValue</b>: Valor total do pedido
- <b>id-input-expirationMonth</b>: Mês de Expiração do cartão
- <b>id-input-expirationYear</b>: Ano de Expiração do cartão
- <b>id-select-parcels</b>: Campo de seleção das parcelas
- <b>id-payment-token</b>: Campo oculto para o Payment Token

Associe esses campos com os nomes dos inputs correspondentes em seu aplicativo. Certifique-se de que os nomes dos campos no Bubble correspondam aos IDs mencionados.

Por exemplo: Você tem um input para o cliente inserir o número do cartão. O nome desse input deve ser inserido no campo `id-input-cardnumber`

<div className="figure">
<img className="light-border" src="/img/bubble_config_1.png"/>
</div>

Pronto! Feito isso pode seguir com seu desenvolvimento!

### 3.2. Pix

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
  </div>

<p>As etapas abaixo são necessárias <b>SOMENTE</b> para o plugin de PIX. Não se repetindo aos demais plugins da Efí Bank para Bubble.</p>
</div>

<br/>

Após preencher o campo de `Authorization` (Etapa 3), é preciso seguir as seguintes etapas:

- Gere um certificado em sua conta Efí, [veja como clicando aqui](https://sejaefi.com.br/central-de-ajuda/api/como-gerar-o-certificado-para-usar-a-api-pix#conteudo)
- Faça upload do certificado na página de conversão e clique em "Codificar e Exibir", [clicando aqui](https://efipay.github.io/encode-credentials/certificado.html)
- Copie o conteúdo do Certificado e cole no campo "Certificate file content"
- Copie o conteúdo da Key e cole no campo "Key file content"

<div className="fluxograma small">
<img className="light-border" src="/img/bubble_pix.png"/>
</div>

Pronto! Feito isso pode seguir com seu desenvolvimento!

## 4. Notificações de Pagamento

### 4.1. Definindo sua URL de Notificações

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
  </div>

<p>Para receber notificações de pagamento em seu projeto de maneira automática, certifique-se de estar no plano "Starter" da plataforma Bubble.
Vale ressaltar que é uma limitação/exigência da plataforma Bubble.</p>
</div>

<br/>

Em seu projeto:

- Acesse a opção "<b>Settings</b>"
- Clique na aba "<b>API</b>"
- Dentro de "<b>Public API Endpoints</b>", clique em "<b>Enable Workflow API and backend workflows</b>".

<div className="figure">
<img className="light-border" src="/img/bubble_settings.png"/>
</div>

- Feito isso, vá até "<b>Backend workflows</b>"

<div className="figure">
<img className="light-border" src="/img/bubble_backend.png"/>
</div>

- Clique em "<b>New API workflow</b>"

<div className="figure">
<img className="light-border" src="/img/bubble_backend_workflow.png"/>
</div>

- Defina um nome para a API workflow (por exemplo, efi_cartao)
- Selecione os demais campos da seguinte forma:

<div className="figure">
<img className="light-border" src="/img/bubble_api_workflow.png"/>
</div>

- Clique em "<b>Detect data</b>" e copie a URL informada. Ela será a sua URL de notificação;
- Clique no menu "<b>Workflow</b>";
- Selecione seu evento de finalização de compra;
- Clique na action de criação de boleto/cartão/carnê;
- Ao final da janela de configuração, cole a URL copiada ao campo "<b>notification_url</b>";

<div className="fluxograma small">
<img className="light-border" src="/img/bubble_notification.png"/>
</div>

Feito isso, execute a etapa abaixo:
<br/>

### 4.2. Consultando um token de notificação

Em seu projeto, acesse o menu "Backend Workflows";

<div className="figure">
<img className="light-border" src="/img/bubble_backend_workflow.png"/>
</div>

Selecione o Workflow criado anteriormente (Ex: efi_cartao) e adicione a action "EfíBank - Consultar Notificação.

Clique na action de consulta de notificações e no campo "token" selecione a opção "Request Data", após isso clique na opção "notification".

<div className="figure">
<img className="light-border" src="/img/bubble_action_notification.png"/>
</div>

Pronto! Agora basta adicionar sua action com suas rotinas internas.

## 5. Dúvidas Frequentes

### Onde posso acompanhar as transações geradas pelo plugin?

As transações geradas através do plugin podem ser acompanhadas em sua conta Efí no menu <code>API > Minhas Aplicações > Sua Aplicação</code>. Neste ambiente você poderá acompanhar todas as transações e suas respectivas situações.

### Quando tento realizar um pagamento recebo a mensagem _“Ocorreu um erro ao tentar realizar a sua requisição. Entre em contato com o proprietário da loja.”_

Essa mensagem de erro pode ser exibida no momento da finalização da compra por diversos fatores. Neste caso, o primeiro passo é verificar as credenciais da sua aplicação e também conferir em sua API a sub-aba "histórico de requisições" veja como usar este recurso.

## 6. Suporte e Sugestões

Suas sugestões de novas ideias e implementações para o plugin da Efí são muito importantes. Portanto, caso você tenha alguma ideia, entre em contato com a nossa equipe. Iremos analisar sua sugestão e avaliar a possibilidade de implantação.

Caso você tenha alguma dúvida, entre em contato conosco pelo site <a href="https://sejaefi.com.br/" target="_blank" title="Link Externo">Efí</a>.

</div>
