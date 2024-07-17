---
id: WordPress
title: WordPress (WooCommerce)
hide_title: true
sidebar_label: WordPress (WooCommerce)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">WordPress (WooCommerce)</h1>
<div className="conteudo">

<div className="subtitulo">
Módulo de Integração Efí para WooCommerce Oficial - Versão 0.7.2
</div>

<br/>
<br/>

O módulo Efí para WordPress (WooCommerce) permite receber pagamentos por meio do <strong>checkout transparente da nossa API</strong>. Compatível com as versões <code>5.x</code> do WooCommerce.

Este é o **Módulo Oficial de integração fornecido pela Efí para WooCommerce**. Com ele, o proprietário da loja pode optar por receber pagamentos por boleto bancário, cartão de crédito e/ou pix. Todo processo é realizado por meio do checkout transparente. Com isso, o comprador não precisa sair do site da loja para efetuar o pagamento.

Antes de instalar o plugin da Efí para WooCommerce, verifique os requisitos e compatibilidade. Caso sua loja esteja em produção, indicamos que realize um backup antes de iniciar o processo de instalação do plugin.

<br/>

## 1. Requisitos do sistema

- Versão do PHP: ``7.x`` à ``8.x``
- Versão mínima do WooCommerce: ``6.x`` à ``7.x``
- Versão mínima do WordPress: ``6.x``

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
  </div>

<p>Os requisitos do sistema foram definidos de acordo com os nossos testes. Se seu sistema não se encaixa nos requisitos, não significa que o módulo não vai funcionar em seu WordPress (WooCommerce), mas sim, que não testamos no mesmo ambiente.</p>

<p><b>Portanto, não garantimos o funcionamento deste módulo em ambientes diferentes dos citados acima.</b></p>

</div>

<br/>

<br/>

## 2. Instalação do plugin Efí para WooCommerce

Antes de instalar o plugin, certifique-se que tenha instalado em sua página WordPress o plugin da loja virtual WooCommerce. Caso não possua, <a href="https://br.wordpress.org/plugins/woocommerce/" title="Link Externo" target="_blank">faça o download</a> e instale em seu site.

O plugin da Efí para WooCommerce pode ser instalado de duas formas diferentes:

1. [Instalação Automática:](#instalação-automática) o plugin é instalado diretamente do repositório oficial do WordPress através da interface administrativa da loja;

2. [Instalação Manual:](#instalação-manual) os arquivos do plugin devem ser enviados manualmente para o servidor de hospedagem via FTP.

<br/>

### Instalação Automática:

Para instalar o plugin automaticamente através do repositório oficial do WordPress, é necessário seguir os passos:

Acesse a interface administrativa da sua loja (/wp-admin)

No menu de navegação, acesse ``Plugins > Adicionar Novo``

Procure por ``Efí`` e acesse o plugin ``Woo Efí Oficial``, cujo autor é Efí

Clique em ``Instalar Agora`` e depois do processo clique em ``Ativar Plugin``

<br/>

### Instalação Manual:

Para instalar o plugin manualmente, efetue o download dos arquivos do plugin e envie por FTP para seu servidor.

1. O primeiro passo é realizar o download dos arquivos da última versão do plugin através do <a href="https://wordpress.org/plugins/woo-gerencianet-official/" target="_blank" title="Link Externo">repositório oficial do WordPress</a> ou através do <a href="https://github.com/gerencianet/gn-api-woocommerce/" target="_blank" title="Link Externo">repositório da Efí no GitHub</a>

2. Depois de baixar os arquivos, acesse a interface administrativa da loja (/wp-admin) e vá em <code>Plugins > Adicionar novo > Fazer o upload do plugin</code>, enviando o arquivo **woo-gerencianet-oficial.zip**

3. Caso prefira, os arquivos podem ser descompactados e enviados diretamente via FTP para a pasta de plugins da instalação do WordPress (dentro de <code>/wp-content/plugins</code>)

4. Após a instalação, clique em <code>Ativar o Plugin</code>.

<br/>

## 3. Configurações do plugin Efí para WooCommerce

Antes de começar a receber pagamentos com a Efí, o lojista deverá realizar a configuração do plugin, com suas credenciais e preferências. Para obter as credenciais de Produção e Homologação, siga as etapas a seguir:

<ul>
<li>Acesse o painel da Efí no menu API.</li>
<li>No menu lateral, clique em <b>Aplicações</b> depois em <b>Criar aplicação</b>.</li>
<li>Insira um nome para a aplicação, e selecione qual API quer ativar: API de emissões (boletos e cartão de crédito) e/ou API Pix. Selecione os Escopos de Produção e Escopos de Homologação (Desenvolvimento) que deseja liberar;</li>
<li>Clique em <b>Criar aplicação</b>.</li>
<li>Informe a sua <b>Assinatura Eletrônica</b> para confirmar as alterações e atualizar a aplicação.</li>
</ul>

Para iniciar a configuração do plugin, no painel administrativo da loja, acesse: <code>WooCommerce > Configurações > Pagamentos</code>. Disponibilizamos três métodos de pagamento através do nosso plugin: Boleto Bancáro(Bolix), Cartão de Crédito e Pix. Para configurar cada um deles, basta clicar em <b>Gerir</b>. A seguir, detalharemos cada um deles.

<div className="admonition admonition_caution">
  <div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>IMPORTANTE</b>
  </div>
 <p> Quando estiver em ambiente de produção, use o "Client_Id" e "Client_Secret" da aba "Produção" e a opção sandbox desativada. Se estiver em homologação, use a "Client_Id" e "Client_Secret" da aba "Homologação" com a opção sandbox habilitada. Se não for realizado dessa forma, uma possível mensagem de "unauthorized" (sem autorização) poderá ser retornada.</p>

</div>

<br/>

### 3.1 Boleto Bancário (Bolix)
<div className="figure"><img src="/img/wordpress_boleto.png" alt="banner" /><p>Configurações do Boleto</p></div>

<ul>
<li><b>Credenciais:</b> Insira as credenciais <code>Chave Client_Id</code> e <code>Chave Client_Secret</code> de Produção e Homologação nos respectivos campos de configuração do plugin.</li>
<li><b>Sandbox:</b> Habilite para usar o ambiente de testes da Efí. Nenhuma cobrança emitida nesse modo poderá ser paga.</li>
<li><b>Habilitar Boleto:</b> Habilite essa opção para receber via Boleto Bancário.</li>
<li><b>Habilitar o cancelamento de Boletos não pagos:</b> Quando ativado, cancela todos os Boletos que não foram pagos. Evitando que o cliente pague o Boleto após o vencimento.</li>
<li><b>Desconto no Boleto:</b> Porcentagem de desconto para pagamento com Boleto(Opcional). Deixe em branco ou como 0 para não aplicar desconto.</li>
<li><b>Aplicar desconto do Boleto:</b> Caso você queira conceder um desconto para pagamentos realizados via Boleto Bancário, escolha a modalidade de desconto. As opções são: Aplicar desconto no valor total com Frete ou Aplicar desconto apenas no preço dos produtos.</li>
<li><b>Vencimento do Boleto:</b> Dias para expirar o Boleto depois de emitido.</li>
</ul>

Pronto! Feito isso basta clicar em <b>Guardar alterações</b>.

### 3.2 Cartão de Crédito
<div className="figure"><img src="/img/wordpress_cartao.png" alt="banner" /><p>Configurações do Cartão</p></div>

<ul>
<li><b>Credenciais:</b> Insira as credenciais <code>Chave Client_Id</code> e <code>Chave Client_Secret</code> de Produção e Homologação nos respectivos campos de configuração do plugin.</li>
<li><b>Sandbox:</b> Habilite para usar o ambiente de testes da Efí. Nenhuma cobrança emitida nesse modo poderá ser paga.</li>
<li><b>Habilitar Cartão de Crédito:</b> Habilite essa opção para receber via Cartão de Crédito.</li>
<li><b>Identificador de conta:</b> Insira o identificador de Conta da Efí. Veja onde encontrá-lo <a href="/img/identificador.png" target="_blank">aqui</a>.</li>
</ul>

Pronto! Feito isso basta clicar em <b>Guardar alterações</b>.

### 3.3 Pix
<div className="figure"><img src="/img/wordpress_pix.png" alt="banner" /><p>Configurações do Pix</p></div>

<ul>
<li><b>Credenciais:</b> Insira as credenciais <code>Chave Client_Id</code> e <code>Chave Client_Secret</code> de Produção e Homologação nos respectivos campos de configuração do plugin.</li>
<li><b>Sandbox:</b> Habilite para usar o ambiente de testes da Efí. Nenhuma cobrança emitida nesse modo poderá ser paga.</li>
<li><b>Habilitar Pix:</b> Habilite essa opção para receber via Pix.</li>
<li><b>Chave Pix:</b> Insira sua chave Pix cadastrada na Efí. Se ainda não cadastrou, veja nosso artigo sobre <a href="https://sejaefi.com.br/artigo/como-cadastrar-chaves-pix/#versao-7" target="_blank">Como cadastrar chaves Pix na Efí</a>.</li>
<li><b>Certificado Pix:</b> Realize o upload do certificado em formato .p12, gerado a partir da sua Conta Efí. Se você ainda não gerou, veja nosso artigo sobre <a href="https://sejaefi.com.br/artigo/como-gerar-o-certificado-para-usar-a-api-pix/#versao-7" target="_blank">Como gerar um certificado</a>. </li>
<li><b>Desconto no Pix:</b> Desconto percentual a ser aplicado para pagamentos com Pix (Opcional). Deixe em branco ou como 0 para não aplicar desconto.</li>
<li><b>Modo de desconto:</b> Caso você queira conceder um desconto para pagamentos realizados via Pix, escolha a modalidade de desconto. As opções são: Aplicar desconto no valor total com Frete ou Aplicar desconto apenas no preço dos produtos.</li>
<li><b>Expiração do pix:</b> Em quantas horas o Pix expira depois de emitido.</li>
<li><b>Validar mTLS:</b> Marque o campo "Validar mTLS" caso deseje utilizar a validação mTLS em seu servidor. Você pode visualizar mais detalhes clicando <a href="/docs/api-pix/webhooks#entendendo-o-padrão-mtls" target="_blank">aqui</a>.</li>
</ul>

Pronto! Feito isso basta clicar em <b>Guardar alterações</b>.


<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Chave Pix</b>
</div>

<p>Caso a sua chave Pix esteja cadastrada como número de telefone, não se esqueça de seguir o padrão definido pelo BACEN informando +55 DDD e o número, exemplo: <b>+5531988887777</b></p>

</div>

<br/>

Recomendamos que antes de disponibilizar pagamentos pela Efí, o lojista realize testes de cobrança com o sandbox (ambiente de testes) ativo para verificar se o procedimento de pagamento está acontecendo conforme esperado.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>

<p>Importante salientar que <b>os boletos gerados em sandbox não são válidos e não podem ser pagos</b>, possuem a linha digitável "zerada" e uma marca d'água ao fundo informando ser um boleto de teste.</p>

<p><b>Os pagamentos de cobranças de sandbox utilizando cartão de crédito são fictícios, mesmo se utilizar um cartão "real".</b> Todos os pagamentos de cartão neste ambiente terão o pagamento confirmado automaticamente, mas é apenas uma alteração de status para "Pago". Este recurso permite que você teste a notificação do status <code>paid</code>.</p>

<p><b>Isso significa que todos os pagamentos realizados em sandbox não são reais e, portanto, não há cobrança de nenhuma importância financeira.</b> </p>

<p>É importante saber que as palavras <b>Playground, Sandbox e Ambiente de Desenvolvimento</b>, no contexto da Efí, são sinônimos no sentido de fazerem referência ao local de testes que oferecemos em que você pode testar à vontade sua integração com a API.</p>
</div>

<!-- ### 3.4 Open Finance
<div className="figure"><img src="https://sejaefi.link/Hklv7tjM23" alt="banner" /><p>Configurações do Open Finance</p></div>

<ul>
<li><b>Credenciais:</b> Insira as credenciais <code>Chave Client_Id</code> e <code>Chave Client_Secret</code> de Produção e Homologação nos respectivos campos de configuração do plugin.</li>
<li><b>Certificado Open Finance:</b> Realize o upload do certificado em formato .p12, gerado a partir da sua Conta Efí. Se você ainda não gerou, veja nosso artigo sobre <a href="https://sejaefi.com.br/artigo/como-gerar-o-certificado-para-usar-a-api-pix/#versao-7" target="_blank">Como gerar um certificado</a>. </li>
<li><b>Sandbox:</b> Habilite para usar o ambiente de testes da Efí. Nenhuma cobrança emitida nesse modo poderá ser paga.</li>
<li><b>Habilitar Open Finance:</b>Habilite essa opção para receber via Open Finance.</li>
<li><b>CPF/CNPJ:</b> Insira seu CPF/CNPJ (Apenas números).</li>
<li><b>Nome:</b> Informe seu nome completo.</li>
<li><b>Número da Conta Efí:</b> Insira o número da sua conta com dígito e sem o hífen.</li>
</ul>

Pronto! Feito isso basta clicar em <b>Guardar alterações</b>.

Recomendamos que antes de disponibilizar pagamentos pela Efí, o lojista realize testes de cobrança com o sandbox (ambiente de testes) ativo para verificar se o procedimento de pagamento está acontecendo conforme esperado.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>

<p>Importante salientar que <b>os boletos gerados em sandbox não são válidos e não podem ser pagos</b>, possuem a linha digitável "zerada" e uma marca d'água ao fundo informando ser um boleto de teste.</p>

<p><b>Os pagamentos de cobranças de sandbox utilizando cartão de crédito são fictícios, mesmo se utilizar um cartão "real".</b> Todos os pagamentos de cartão neste ambiente terão o pagamento confirmado automaticamente, mas é apenas uma alteração de status para "Pago". Este recurso permite que você teste a notificação do status <code>paid</code>.</p>

<p><b>Isso significa que todos os pagamentos realizados em sandbox não são reais e, portanto, não há cobrança de nenhuma importância financeira.</b> </p>

<p>É importante saber que as palavras <b>Playground, Sandbox e Ambiente de Desenvolvimento</b>, no contexto da Efí, são sinônimos no sentido de fazerem referência ao local de testes que oferecemos em que você pode testar à vontade sua integração com a API.</p>
</div> -->

<br/>

## 4. Dúvidas Frequentes

###  É obrigatório possuir SSL em minha loja para aceitar pagamentos com o plugin?

Para que o módulo da Efí para WooCommerce funcione, não é necessário que a loja possua um certificado SSL. Contudo é extremamente recomendado pela Efí que os lojistas utilizem. Independente da sua utilização, todos os dados de pagamento são criptografados e transmitidos com segurança para validação do pagamento. A presença de um certificado SSL instalado em sua loja garante maior segurança para o lojista e para os clientes que realizam compras. A ausência do certificado SSL na tela de pagamento, pode fazer com que o lojista perca vendas, uma vez que o cliente pode se sentir inseguro para digitar dados de pagamento em uma página que não possui um certificado.

<br/>

### Quero usar o Checkout Transparente de forma que o cliente não saia da minha loja para realizar o pagamento. É possível?

Sim. O plugin da Efí para WooCommerce utiliza o checkout transparente para realizar o pagamento dos clientes, ou seja, em nenhum momento o cliente irá sair da sua loja virtual para finalizar o pagamento. Assim, no último passo da compra, será solicitado ao clientes dos dados obrigatórios para efetivar o pagamento.

<br/>

### As parcelas das opções de pagamento não estão sendo carregadas. Como corrigir?

Se após a instalação e configuração do módulo as parcelas do cartão de crédito não carregarem ao clicar sobre as bandeiras dos cartões, o lojista deverá verificar as credenciais informadas na configuração do módulo (chaves Client_Id, Client_Secret e também o "identificador de conta"). Se estiverem corretas, entre em contato com a Efí para que o problema seja analisado.

<br/>

### Estou recebendo a mensagem *“Unauthorized”* ao tentar finalizar uma compra. O que fazer?

Essa mensagem de erro pode estar relacionada com a as credenciais informadas de forma incorreta. Verifique se as suas credenciais estão corretamente inseridas nos respectivos campos de PRODUÇÃO e DESENVOLVIMENTO. Confira em [nossa FAQ](https://sejaefi.com.br/central-de-ajuda/api/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que#conteudo) informações detalhadas.

<br/>

### Está aparecendo a mensagem *Efí Desabilitada: O modo Sandbox (Ambiente de testes) está ativo. Suas cobranças não serão validadas”*. Como corrigir?

Esta mensagem irá ser exibida quando seu módulo estiver configurado em ambiente de testes (sandbox). Para remover esta mensagem e começar a receber com a Efí, acesse as configurações do plugin em <code>WooCommerce > Configurações > Finalizar Compra > Efí</code> e desmarque a opção <code>SandBox > Habilitar Sandbox Efí (Ambiente de testes)</code>.

<br/>

### Onde posso acompanhar as transações geradas pelo plugin?

As transações geradas através do plugin podem ser acompanhadas em sua conta Efí no link <code>API > Minhas Aplicações > Sua Aplicação</code>. Neste ambiente você poderá acompanhar todas as transações e suas respectivas situações.

<br/>

### Quando tento realizar um pagamento recebo a mensagem *“Ocorreu um erro ao tentar realizar a sua requisição. Entre em contato com o proprietário da loja.”*

Essa mensagem de erro pode ser exibida no momento da finalização da compra por diversos fatores. Neste caso, o primeiro passo é verificar as credenciais da sua aplicação e também conferir em sua API a sub-aba "histórico de requisições" veja como usar este recurso.

<br/>

### Instalei o plugin e minha loja está apresentando um erro ou não abre. O que fazer?

Quando ocorrer algum problema depois de instalar o plugin da Efí para WooCommerce, provavelmente os requisitos mínimos ou compatibilidade não foram respeitados. Para corrigir esse problema, pode ser necessário remover o plugin. O plugin pode ser removido pelo ambiente administrativo da loja. Se isso não for possível, será necessário realizar uma intervenção manual diretamente nos arquivos do servidor via FTP, removendo a pasta **woo-gerencianet-offical** do diretório **“plugins”** do WordPress. Para maiores informações, entre em contato com nossa equipe técnica.

<br/>


## 6. Suporte e Sugestões

Sua sugestão de novas ideias e implementações para o plugin da Efí para WooCommerce é muito importante. Portanto, caso você tenha alguma ideia, entre em contato com a nossa equipe. Iremos analisar sua sugestão e avaliar a possibilidade de implantação.

Caso você tenha alguma dúvida, entre em contato conosco pelo site <a href="https://sejaefi.com.br/" target="_blank" title="Link Externo">Efí</a>.


</div>