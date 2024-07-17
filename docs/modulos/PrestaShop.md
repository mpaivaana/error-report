---
id: PrestaShop
title: PrestaShop
hide_title: true
sidebar_label: PrestaShop
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">PrestaShop</h1>
<div className="conteudo">

<div className="subtitulo">
Módulo de Integração Efí para PrestaShop - Versão 1.0.2
</div>

<br/>
<br/>

O módulo Efí para Prestashop permite receber pagamentos por meio do <strong>checkout transparente da nossa API</strong>. Compatível com a versão <code>8.1.x</code> do PrestaShop.

Este é o Módulo de integração fornecido pela <a target="blank" href="https://sejaefi.com.br">Efí </a>para PrestaShop. Com ele, o proprietário da loja pode optar por receber pagamentos por boleto bancário e/ou cartão de crédito. Todo processo é realizado por meio do checkout transparente. Com isso, o comprador não precisa sair do site da loja para efetuar o pagamento.


<br/>

## 1. Requisitos

* Versão do PHP: ``8.1.x``
* Versão do PrestaShop: ``8.1.x``

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
  </div>

<p>Os requisitos do sistema foram definidos de acordo com os nossos testes. Se seu sistema não se encaixa nos requisitos, não significa que o módulo não vai funcionar em seu PrestaShop, mas sim, que não testamos no mesmo ambiente. <b>Portanto, não garantimos o funcionamento deste módulo em ambientes diferentes dos citados acima.</b></p>

</div>

<br/>


<br/>

## 2. Instalação do Módulo

O módulo da Efí para PrestaShop pode ser instalado de duas formas diferentes:

1. *[Instalação Automática:](#instalação-automática)* utilizando o arquivo de instalação do módulo compactado através da ferramenta de adicionar novos Módulos do PrestaShop;

<br/>

### Instalação Automática

1. Faça o [download da última versão do módulo](https://raw.githubusercontent.com/efipay/prestashop-efi-module/main/EfiPayPrestashop.zip) (arquivo "**EfiPayPrestashop.zip**");

2. Acesse a administração da sua loja, em <code>Módulos > Gerenciador de Módulos > Enviar um módulo</code> e envie o arquivo "**EfiPayPrestashop.zip**" que você acabou de baixar;
<div className="figure"><img src="/img/prestashop.png" alt="banner" /><p>Enviar o módulo</p></div>

3. Depois de enviar o módulo para sua loja, clique em <code>Configurar</code> e aguarde a finalização do processo.
<div className="figure"><img src="/img/prestashop1.png" alt="banner" /><p>Módulo instalado</p></div>


<br/>


## 3. Configurações do Plugin Efí para PrestaShop

Para configurar o Módulo da Efí para Prestashop, ao clicar em <code>Configurar</code>,  no passo anterior, automaticamente já redireciona para a tela de configuração. Ou então, o lojista deverá acessar a interface administrativa da loja virtual e, no menu principal, acessar a opção <code>Módulos > Gerenciador de Módulos</code>. Procure pelo módulo da Efí na lista que será exibida e depois clique em <code>Configurar</code>, conforme imagem abaixo:
<div className="figure"><img src="/img/prestashop2.png" alt="banner" /><p>Configuração do Plugin</p></div>

<!-- <br/>; -->

Ao entrar na configuração do módulo, a seguinte interface será exibida:
<div className="figure"><img src="/img/prestashop3.png" alt="banner" /><p>Interface do Plugin Efí</p></div>

<br/>


### Credenciais
<div className="figure"><img src="/img/prestashop4.png" alt="banner" /><p>Configurações das Credenciais e Ambiente</p></div>

Nesta seção, é necessário informar as credenciais de sua aplicação, isto é, o "Client_Id" e "Client_Secret" (veja onde localizar, de acordo com o ambiente: <a href="/img/homologacao.jpg" target="_blank">desenvolvimento</a> e <a href="/img/producao.jpg" target="_blank">produção</a>) da sua aplicação e o <a href="/img/identificador.png" target="_blank">identificador de conta</a> obtidos na aplicação criada na Efí.

1. O lojista deverá inserir as credenciais de aplicação Efí nos respectivos campos. Para ter acesso a essas credenciais, você deverá criar uma nova aplicação Efí ou utilizar uma já existente. Para criar uma aplicação, entre em sua conta Efí, acesse <code>API > Minhas Aplicações > Nova aplicação</code>. Escolha um nome e crie a nova aplicação. Agora já já terá acesso às credenciais da aplicação. Copie-as e insira nos respectivos campos da aba "Credenciais" em sua loja (Client_Id e Client_Secret de <a href="/img/producao.jpg" target="_blank">produção</a> e <a href="/img/homologacao.jpg" target="_blank">desenvolvimento</a>).

2. Insira o <a href="/img/identificador.png" target="_blank">identificador de conta</a> Efí.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>

<p>Importante salientar que <b>os boletos gerados em sandbox não são válidos e não podem ser pagos</b>, possuem a linha digitável "zerada" e uma marca d'água ao fundo informando ser um boleto de teste.</p>

<p><b>Os pagamentos de cobranças de sandbox utilizando cartão de crédito são fictícios, mesmo se utilizar um cartão "real".</b> Todos os pagamentos de cartão neste ambiente terão o pagamento confirmado automaticamente, mas é apenas uma alteração de status para "Pago". Este recurso permite que você teste a notificação do status <code>paid</code>.</p>

<p><b>Isso significa que todos os pagamentos realizados em sandbox não são reais e, portanto, não há cobrança de nenhuma importância financeira.</b> </p>

<p>É importante saber que as palavras <b>Playground, Sandbox e Ambiente de Desenvolvimento</b>, no contexto da Efí, são sinônimos no sentido de fazerem referência ao local de testes que oferecemos em que você pode testar à vontade sua integração com a API.</p>
</div>
<br/>

Nesta seção também, você deverá configurar as seguintes propriedades:

3. **Ambiente de emissão:** Configure se deseja ativar o módulo em Homologação (ambiente de testes) ou Produção (cobrança real);

4. **Formas de Pagamento:** Selecione as opções de pagamento que deseja receber: Boleto, Cartão de Crédito e/ou Pix.

Ao clicar em <code>Salvar</code>, será possível configurar as formas de pagamento selecionadas. Então, surgirão as seguintes seções:

<br/>



### Configurações do Boleto
<div className="figure"><img src="/img/prestashop5.png" alt="banner" /><p>Configurações do Boleto</p></div>

Nesta seção, as seguintes propriedades podem ser configuradas:

1. **Número de dias:** Configure o número de dias corridos para vencimento do Boleto.

2. **Cancelar Boletos não pagos?:** Quando habilitado, cancela todos os Boletos que não foram pagos. Impedindo que o cliente pague o Boleto após a data de vencimento.

3. **Ativar desconto?:** Quando habilitado, será aplicado desconto para pagamentos com Boleto.

4. **Percentual de desconto do boleto:** Defina o percentual de desconto para pagamentos com Boleto.

5. **Percentual de multa:** Defina se deseja aplicar multa em caso de atraso no pagamento do boleto

6. **Percentual de juros:** Defina se deseja aplicar juros em caso de atraso no pagamento do boleto.

7. **Enviar boleto por e-mail?:** Quando habilitado, o boleto será enviado por e-mail ao cliente.

<br/>

### Configurações do Pix
<div className="figure"><img src="/img/prestashop6.png" alt="banner" /><p>Configurações do Pix</p></div>

1. **Chave Pix:** Insira sua chave Pix cadastrada na Efí. Se ainda não cadastrou, veja nosso artigo sobre <a href="https://sejaefi.com.br/artigo/como-cadastrar-chaves-pix/#versao-7" target="_blank">Como cadastrar chaves Pix na Efí</a>.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Chave Pix</b>
</div>

<p>Caso a sua chave Pix esteja cadastrada como número de telefone, não se esqueça de seguir o padrão definido pelo BACEN informando +55 DDD e o número, exemplo: <b>+5531988887777</b></p>

</div>
<br/>

2. **Certificado Pix:** Realize o upload do certificado em formato .p12, gerado a partir da sua Conta Efí. Se você ainda não gerou, veja nosso artigo sobre <a href="https://sejaefi.com.br/artigo/como-gerar-o-certificado-para-usar-a-api-pix/#versao-7" target="_blank">Como gerar um certificado</a>.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Certificado Pix</b>
</div>

<p>Após fazer o upload do seu certificado Pix, ele ficará salvo, porém o nome do certificado não ficará visível. Caso houver alguma falha, você receberá uma notificação ao salvar as configurações.</p>
</div>

3. **Ativar desconto?:** Quando habilitado, será aplicado desconto para pagamentos com Pix.

4. **Percentual de desconto do Pix:** Defina o percentual de desconto para pagamentos com Pix.

5. **Tempo de vencimento em horas:** Defina o tempo, em horas, para o vencimento do pix após a emissão.

6. **Validar mTLS:** Marque o campo "Validar mTLS" caso deseje utilizar a validação mTLS em seu servidor.


<br/>

### Configurações do Open Finance
<div className="figure"><img src="/img/prestashop10.png" alt="banner" /><p>Configurações do Open Finance</p></div>

1. **Nome**: Insira o nome do titular da conta Efí.

2. **Documento**: Insira o CPF/CPNJ do titular da conta Efí.

3. **Agência**: Insira a agência da conta Efí.

4. **Conta**: Insira o N° da conta Efí.

5. **Tipo de conta**: Escolha entre as opções disponíveis de acordo com sua conta.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Observações</b>
</div>

<p>É preciso configurar o certificado no menu Pix e caso queira utilizar fornecer algum desconto no Open Finance basta que configure no menu Pix.</p>
</div>


<br/>


## 4. Funcionamento do Módulo

Após ser habilitado, o módulo já estará disponível como uma opção de pagamento e seu cliente terá as seguintes telas para preencher os dados de pagamento:

**Boleto:**
<div className="figure"><img src="/img/prestashop7.png" alt="banner" /><p>Tela de Pagamento Boleto</p></div>

**Cartão de Crédito**
<div className="figure"><img src="/img/prestashop8.png" alt="banner" /><p>Tela de Pagamento Cartão de Crédito</p></div>

**Pix**
<div className="figure"><img src="/img/prestashop9.png" alt="banner" /><p>Tela de Pagamento Pix</p></div>

**Open Finance**
<div className="figure"><img src="/img/prestashop11.png" alt="banner" /><p>Tela de Pagamento Open Finance</p></div>

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Observação</b>
</div>

<p>Se algum dos campos obrigatórios para o realizar o pagamento não for preenchido corretamente ou ficar em branco, o cliente receberá um alerta com um aviso. Para <b>Boleto Bancário</b>, os campos obrigatórios são: <strong>Nome e CPF</strong>. Para <b>Cartão de Crédito</b>, os campos obrigatórios são: <strong>Nome, CPF, Data de nascimento, Telefone, Endereço, Número, Bairro, CEP, Cidade e Estado.</strong>.  Para <b>Pix</b>, os campos obrigatórios são: <strong>Nome e CPF</strong>.  Para <b>Open Finance</b>, os campos obrigatórios são: <strong>CPF e Instituição Financeira</strong>.</p>
</div>
<br/>

## 5. Dúvidas Frequentes


### É obrigatório possuir SSL em minha loja para aceitar pagamentos com o módulo?

Para que o módulo da Efí para PrestaShop funcione, não é necessário que a loja possua um certificado SSL. Contudo é extremamente recomendado pela Efí que os lojistas utilizem. Independente da sua utilização, todos os dados de pagamento são criptografados e transmitidos com segurança para validação do pagamento. A presença de um certificado SSL
instalado em sua loja garante maior segurança para o lojista e para os clientes que realizam compras. A ausência do certificado SSL na tela de pagamento, pode fazer com que o lojista perca vendas, uma vez que o cliente pode se sentir inseguro para digitar dados de pagamento em uma página que não possui um certificado.


<br/>

### Quero usar o Checkout Transparente de forma que o cliente não saia da minha loja para realizar o pagamento. É possível?

Sim. O módulo da Efí para PrestaShop utiliza o checkout transparente para realizar o pagamento dos clientes, ou seja, em nenhum momento o cliente irá sair da sua loja virtual para finalizar o pagamento. Assim, no último passo da compra, será solicitado ao clientes dos dados obrigatórios para efetivar o pagamento.

<br/>

### As parcelas das opções de pagamento não estão sendo carregadas. Como corrigir?

Se após a instalação e configuração do módulo as parcelas do cartão de crédito não carregarem ao clicar sobre as bandeiras dos cartões, o lojista deverá verificar as credenciais informadas na configuração do módulo (chaves Client_Id, Client_Secret e também o "identificador de conta"). Se estiverem corretas, entre em contato com a Efí para que o problema seja analisado.

<br/>

### Estou recebendo a mensagem “Unauthorized” ao tentar finalizar uma compra. O que fazer?

Essa mensagem de erro pode estar relacionada com a as credenciais informadas de forma incorreta. Verifique se as suas credenciais estão corretamente inseridas nos respectivos campos de PRODUÇÃO e DESENVOLVIMENTO. Confira em [nossa FAQ](https://sejaefi.com.br/central-de-ajuda/api/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que#conteudo) informações detalhadas.

<br/>

### Está aparecendo a mensagem “*Efí Desabilitada: O modo Sandbox (Ambiente de testes) está ativo. Suas cobranças não serão validadas*”. Como corrigir?

Esta mensagem irá ser exibida quando seu módulo estiver configurado em ambiente de testes (sandbox). Para remover esta mensagem e começar a receber com a Efí, acesse as configurações do módulo em "Módulos" > "Efí" > "Configurar" e desmarque a opção “SandBox” > “Habilitar Sandbox Efí (Ambiente de testes)”.

<br/>

### Onde posso acompanhar as transações geradas pelo módulo?

As transações geradas através do módulo podem ser acompanhadas em sua conta Efí no link “API” > “Minhas Aplicações” > “Sua Aplicação”. Neste ambiente você poderá acompanhar todas as transações e suas respectivas situações.

### Quando tento realizar um pagamento recebo a mensagem “Ocorreu um erro ao tentar realizar a sua requisição. Entre em contato com o proprietário da loja.”

Essa mensagem de erro pode ser exibida no momento da finalização da compra por diversos fatores. Neste caso, o primeiro passo é verificar as credenciais da sua aplicação e também conferir em sua API a sub-aba "histórico de requisições" veja como usar este recurso.

<br/>

## 6. Suporte e Sugestões

Sua sugestão de novas ideias e implementações para o módulo da Efí para PrestaShop é muito importante. Portanto, caso você tenha alguma ideia, entre em contato com a nossa equipe. Iremos analisar sua sugestão e avaliar a possibilidade de implantação.

Caso você tenha alguma dúvida, entre em contato conosco pelo site <a href="https://sejaefi.com.br" target="_blank">Efí</a>.


</div>