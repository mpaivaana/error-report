---
id: Joomla
title: Joomla (VirtueMart)
hide_title: true
sidebar_label: Joomla (VirtueMart)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">Joomla (VirtueMart)</h1>
<div className="conteudo">

<div className="subtitulo">
Módulo de Integração Efí para VirtueMart Oficial - Versão 0.2.1
</div>

<br/>
<br/>

O módulo Efí para Joomla (VirtueMart) permite receber pagamentos por meio do <strong>checkout transparente da nossa API</strong>. Compatível com o Virtuemart 3 e Joomla! 2.5.

Este é o Módulo Oficial de integração fornecido pela Efí para VirtueMart. Com ele, o proprietário da loja pode optar por receber pagamentos por boleto bancário e/ou cartão de crédito. Todo processo é realizado por meio do checkout transparente. Com isso, o comprador não precisa sair do site da loja para efetuar o pagamento.

Algumas informações como "CPF", "número do endereço", "bairro" e "data de nascimento" poderão ser solicitados no momento do pagamento, caso os campos não sejam configurados conforme indicado.


<br/>

## 1. Requisitos

* Versão do PHP: ``5.4.0`` à ``7.0.3``
* Versão mínima do VirtueMart: ``3.0``
* Versão mínima do Joomla!: ``2.5``

<br/>

## 2. Instalação

1. Faça o download da <a href="https://github.com/gerencianet/gn-api-virtuemart/archive/master.zip" target="_blank">última versão do plugin</a>;

2. Acesse o link em sua loja <code>Extensions > Manage > Install</code> e envie o arquivo <code>gn-api-virtuemart.zip</code> ou extraia o conteúdo do arquivo dentro do diretório de plugins da loja;

3. Configure o plugin conforme instruções abaixo e comece a receber pagamentos com a Efí.

<br/>

## 3. Configuração

1. Primeiramente, <a href="https://sejaefi.com.br/#abrirconta" target="_blank" title="Cadastro ao nosso sistema, seja nosso cliente">crie gratuitamente sua conta Efí</a>;

2. Crie 3 campos extras no Virtuemart: <code>numero</code>, <code>bairro</code> e <code>data_nascimento</code>. O número da residência, bairro e data de nascimento são dados obrigatórios para pagamento com cartão de crédito. Se não for informado no formulário de cadastro ou no carrinho, será solicitado no ato do pagamento;

3. Habilite o plugin em <code>Administrar Plugins</code>;

4. Instale nosso plugin através da tela <code>Métodos de pagamento</code>;

5. Clique em <code>Novo Método de Pagamento</code> e preencha as seguintes informações:
  - <code>Nome do Pagamento:</code> Cartões de crédito ou Boleto Bancário ( Efí );
  - <code>Publicado:</code> Sim;
  - <code>Descrição do pagamento:</code> Pague com Cartão de Crédito ou Boleto Bancário;
  - <code>Método de pagamento:</code> Efí;
  - <code>Grupo de Compradores:</code> -default-

6. Clique em ``Salvar``;

7. Na aba ``Configurações``, preencha os seguintes dados:

<br/>

### Configurações do Plugin de Pagamento

- <code>Modo de teste:</code> Sim ou Não;


- <code>Client ID Desenvolvimento</code>: em sua conta Efí, acesse <code>API > Minhas Aplicações</code>, selecione sua aplicação e clique na aba <code>Desenvolvimento</code>;


- <code>Client Secret Desenvolvimento</code> Conta Efí > API > Aplicações > Sua Aplicação > Client Secret Desenvolvimento


- <code>Client ID Produção</code> Conta Efí > API > Aplicações > Sua Aplicação > Client ID Produção


- <code>Client Secret Produção</code> Conta Efí > API > Aplicações > Sua Aplicação > Client Secret Produção As credenciais devem ser da sua Aplicação na Efí. Para criar uma nova Aplicação, entre em sua conta Efí, acesse o menu "API" e clique em "Minhas Aplicações" -> "Nova aplicação".

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Observação</b>
</div>
<p>Para criar sua aplicação, logue em sua conta Efí, acesse o menu superior "API", depois clique em "*Minhas Aplicações > Nova Aplicação*" e defina um nome para a sua aplicação.</p>
</div>
<br/>


<br/>

### Campos Extras Obrigatórios

- Campo Logradouro (do endereço)
- Campo Bairro
- Campo Número (do endereço)
- Campo Complemento (do endereço)
- Campo Telefone (do cliente)
- Campo CPF (do cliente)
- Campo Data de Nascimento (do cliente)

<br/>

### Configurações do Boleto Bancário

- Dias para vencimento
- Desconto para pagamento no Boleto

Recomendamos que antes de disponibilizar pagamentos pela Efí, o lojista realize testes de cobrança com o sandbox (ambiente de testes) ativado para verificar se o procedimento de pagamento está acontecendo conforme esperado.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>

Importante salientar que **os boletos gerados em sandbox não são válidos e não podem ser pagos**, possuem a linha digitável "zerada" e uma marca d'água ao fundo informando ser um boleto de teste.

**Os pagamentos de cobranças de sandbox utilizando cartão de crédito são fictícios, mesmo se utilizar um cartão "real".** Todos os pagamentos de cartão neste ambiente terão o pagamento confirmado automaticamente, mas é apenas uma alteração de status para "Pago". Este recurso permite que você teste a notificação do status <code>paid</code>.

**Isso significa que todos os pagamentos realizados em sandbox não são reais e, portanto, não há cobrança de nenhuma importância financeira.** 

É importante saber que as palavras **Playground, Sandbox e Ambiente de Desenvolvimento**, no contexto da Efí, são sinônimos no sentido de fazerem referência ao local de testes que oferecemos em que você pode testar à vontade sua integração com a API.
</div>
<br/>

## 4. Erros Comuns de Integração:

Ainda que nenhum destes erros de validação sejam retornados, a API Efí poderá retornar erros referentes à geração da cobrança. Para interpretar os retornos da API e, claro, corrigir possíveis erros de validação de dados ou outros similares, acesse a página Interpretando erros da API.

</div>