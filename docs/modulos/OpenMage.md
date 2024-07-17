---
id: OpenMage
title: OpenMage (Magento1)
hide_title: true
sidebar_label: OpenMage (Magento1)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">OpenMage (Magento1)</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="subtitulo"> 
Módulo Oficial da Efí para o OpenMage
</div>

<br/>
<br/>


O módulo Efí para OpenMage permite receber pagamentos por meio do <strong>checkout transparente da nossa API</strong> e é compatível com o OpenMage <code>LTS 19.4.x</code>.

<br/>

## 1. Requisitos

* Versão do PHP: `7.0`
* Versão mínima do OpenMage: ``19.4.x``

<br/>

## 2. Instalação do Módulo

O módulo da Efí para OpenMage pode ser instalado utilizando o modgit ou enviando os arquivos manualmente para o servidor.

### Instalar usando o <a href="https://github.com/jreinke/modgit" target="_blank" title="Link Externo">modgit</a>:

<Tabs
  defaultValue="modgit"
  values={[
    {label: 'via modgit', value: 'modgit'},
  ]}>

<TabItem value="modgit">

```  
$ cd /path/to/openmage 
$ modgit init
$ modgit add gerencianet https://github.com/gerencianet/gn-api-magento.git
```
</TabItem>
</Tabs>

### Instalar manualmente:

1. Baixe a <a href="https://github.com/gerencianet/gn-api-magento/archive/master.zip" target="_blank" title="Link Externo">última versão</a> do módulo Magento da Efí;

2. Descompacte o arquivo baixado e copie as pastas app, lib e skin para dentro do diretório principal do OpenMage*.

3. Execute os comandos:

   * **755** para todos os diretórios; **644** para todos os arquivos; **777** para <code>app/etc/</code>, <code>var/</code> e <code>media/</code>
   * O procedimento acima seria equivalente a executar os comandos:

<Tabs
  defaultValue="modgit"
  values={[
    {label: 'Comandos', value: 'modgit'},
  ]}>

<TabItem value="modgit">

```  
sudo find . -type d -exec chmod 755 {} \;
sudo find . -type f -exec chmod 644 {} \;
sudo chmod 777 -R app/etc/;
sudo chmod 777 -R var/;
sudo chmod 777 -R media/;
```
</TabItem>
</Tabs>


4. Atualize o cache da sua loja acessando `Sistema > Gerenciador de Cache > Atualizar Cache`.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Nota!</b>
</div>
<p>Ao substituir as pastas no seu projeto, o sistema pode informar que alguns arquivos serão sobrescritos. Não se preocupe, pode confirmar o procedimento pois a instalação não afetará nenhum arquivo já existente em seu projeto.</p>
</div>
<br/>


## 3. Configurações

Acessando ``Sistema > Configuração > Métodos de Pagamento`` (ou ``System > Configuration > Payment Methods``), serão exibidos 4 novos menus:

- Efí Pagamentos - Configurações Gerais
- Efí - Boleto
- Efí - Cartão de Cŕedito
- Efí - Pix

No primeiro menu - Checkout Transparente Efí, informe seu "Identificador de conta" Efí. Confira onde <a href="/img/identificador.png" target="_blank">localizá-lo</a>.

Informe também as credenciais da sua aplicação (Client_Id e Client_Secret) obtidos a partir da sua aplicação criada na Efí, de acordo com o ambiente desejado (Desenvolvimento ou Produção).

### Efí Pagamentos - Configurações Gerais
<div className="figure"><img src="/img/OpenMage.png" alt="banner" /><p>Configurações Gerais</p></div>

- **Habilitado:** Serve para habilitar ou desabilitar o módulo.
- **Ambiente:** Serve para descrever se as transações acontecerão em ambiente de Produção ou Desenvolvimento.
- **Modo debug:** Habilita o modo debug do módulo.
- **Identificador de conta:** Identificador de conta da Efí.
- **Credenciais de Desenvolvimento ou Produção:** Aqui você informa as suas credenciais, Client Id e Client Secret do ambiente selecionado.

<br/>

### Efí Boleto

Por padrão, o modulo utiliza sempre 4 linhas de endereço (acesse <code>Sistema > Configuração > Configuração do cliente > Opções de Nome e Endereço</code>. Marque 4 no campo <code>Número de linhas</code>), respectivamente, *street, number, complement e neighborhood*.

<div className="figure"><img src="/img/OpenMage1.png" alt="banner" /><p>Configurações do Boleto</p></div>

- **Habilitado:** Serve para habilitar ou desabilitar a funcionalidade de Boletos.
- **Título:** Altera o nome do método de pagamento no checkout.
- **Dias para vencimento:** Validade do Boleto.
- **Multa após vencimento:** Valor da multa a ser cobrada após o vencimento.
- **Juros após vencimento:** Valor de juros a ser cobrado.
- **Instruções no boleto:** Aqui você tem quatro campos que podem ser preenchido com mensagens no boleto, desde que as opções de juros e multa estejam zeradas.

<br/>


## 4. Dúvidas Frequentes

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

## 5. Suporte e Sugestões

Sua sugestão de novas ideias e implementações para o módulo da Efí para Magento é muito importante. Portanto, caso você tenha alguma ideia, entre em contato com a nossa equipe. Iremos analisar sua sugestão e avaliar a possibilidade de implantação.

Caso você tenha alguma dúvida, entre em contato conosco pelo site <a href="https://sejaefi.com.br/" target="_blank" title="Link Externo">Efí</a>.


</div>