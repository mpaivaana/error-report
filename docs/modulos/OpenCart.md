---
id: OpenCart
title: OpenCart
hide_title: true
sidebar_label: OpenCart
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">OpenCart</h1>
<div className="conteudo">

<div className="subtitulo">
Módulo de Integração Efí  para OpenCart Brasil
</div>

<br/>
<br/>


O módulo Efí para OpenCart permite receber pagamentos por meio do checkout transparente da nossa API. Este módulo é o Módulo Oficial da Efí para o OpenCart, **compatível apenas com as versões do OpenCart superior a versão 3.0.3.3 (Brasil 1.5.0)**.

Você pode baixar o OpenCart [aqui](https://www.opencartbrasil.com.br/download).

## 1. Requisitos do sistema

### Utilizando PHP 7.2 ou 7.3
- Versão do MySQL: ``5.6``

### Utilizando PHP 7.4
- Versão do MySQL: ``8.x``

Instalação de dependências que podem estar faltando (substitua o x pelo número da versão do seu PHP):  

<Tabs
  defaultValue="modgit"
  values={[
    {label: 'Comandos', value: 'modgit'},
  ]}>

<TabItem value="modgit">

```  
sudo apt-get install php7.x-dom  
sudo apt-get install php7.x-curl  
sudo apt-get install php7.x-gd  
sudo apt-get install php7.x-xml  
sudo apt-get install php7.x-zip
```
</TabItem>
</Tabs>
    
<ul>
<li>OpenCart necessita do <code>curl</code> ativado</li>
<li>É necessário que o <code>Real Brasileiro</code> esteja configurado como moeda padrão no Opencart.</li>
<li>Você deve utilizar o OpenCart Brasil. Caso ainda não tenha, baixe-o <a href="https://www.opencartbrasil.com.br/download" target="_blank">aqui</a>.</li>
</ul>


<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
  </div>

<p>Os requisitos do sistema foram definidos de acordo com os nossos testes. Se seu sistema não se encaixa nos requisitos, não significa que algum dos três módulos disponibilizados não funcionarão em seu OpenCart, mas sim, que não testamos no mesmo ambiente.</p>

**Portanto, não garantimos o funcionamento deste módulo em ambientes diferentes dos citados acima.**

</div>

<br/>


## 2. Instalação

O módulo da Efí para OpenCart pode ser instalado de duas formas:

- *[Instalação Automática](#instalação-automática):* utilizando o arquivo de instalação do módulo compactado através da ferramenta de adicionar nova extensão do OpenCart;

- *[Instalação Manual](#instalação-manual):* os arquivos do módulo devem ser enviados manualmente para o servidor de hospedagem via FTP.


### Instalação Automática

1. Faça o download do arquivo [efi.ocmod.zip](https://github.com/efipay/opencart-efi-module/blob/main/auto/efi.ocmod.zip).

2. Acesse o menu `Extensions > Extension Installer` (`Extensões > Instalador`), clique no botão **Upload**, selecione o arquivo 'gerencianet.ocmod.zip' (citado na primeira instrução) e aguarde a conclusão da instalação automática.

<div className="admonition admonition_info">
<div>
    <img src="/img/info-circle-blue.svg"/> <b>Nota</b>
</div>

<p>Caso você já tenha instalado o módulo da Efí anteriormente, o OpenCart poderá informar que alguns arquivos serão sobrescritos. Não se preocupe, pois a instalação não afetará qualquer arquivo que não seja do módulo da Efí já existente em sua loja.</p>

</div>

<br/>

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>

<p>Devido ao tamanho do arquivo de instalação do módulo, talvez seja necessário alterar o parâmetro <code>php_max_upload</code> do <code>php.ini</code> para, no mínimo, 3 mb.</p>

</div>
<br/>


### Instalação Manual

1. Faça o download dos [arquivos da última versão do módulo](https://github.com/efipay/opencart-efi-module/tree/main/manual).

2. Descompacte os arquivos baixados e realize o upload das pastas <code>admin</code>, <code>catalog</code> e <code>lib</code> para dentro do diretório principal do OpenCart.

<div className="admonition admonition_info">
<div>
    <img src="/img/info-circle-blue.svg"/> <b>Nota</b>
</div>

<p>Caso você já tenha instalado o módulo da Efí anteriormente, o OpenCart poderá informar que alguns arquivos serão sobrescritos. Não se preocupe, pois a instalação não afetará qualquer arquivo que não seja do módulo da Efí já existente em sua loja.</p>

</div>

<br/>   


## 3. Configurações

Acesse <code>Extensions >  Modifications</code> (<code>Extensões > Modificações</code>), selecione o módulo <code>Efí </code> e clique no botão <code>Refresh</code> (<code>Atualizar</code>) no canto superior direito da página.

Ao acessar <code>Extensions >  Extensions</code> (<code>Extensões > Extensões</code>), você deverá selecionar o tipo de extensão que deseja. Escolha <code>Payments</code> (<code>Pagamentos</code>). Você já visualizará o módulo da Efí disponível na lista. Clique em <code>install</code> (<code>instalar</code>) para instalar o módulo e depois em <code>edit</code> (<code>editar</code>) para iniciar a configuração.

Três abas estarão disponíveis para realizar a configuração do módulo:

- Geral
- PIX
- Boleto
- Open Finance
- Cartão de Crédito
- Status do Pedido

<br/>

### Configurações Gerais

<div className="figure"><img src="/img/opencart.png" alt="banner" /><p>Configurações Gerais</p></div>

Nesta aba é necessário informar:

- As **credenciais de Produção e Desenvolvimento** da sua aplicação (obtidas na sua conta Efí)
- O **identificador de conta** (obtido na sua conta Efí)
-  O **certificado** ( no caso de utilização do PIX ou Open Finance)
- **Habilitar modo sandbox**: Determina se o módulo está em modo de testes. No modo de teste você pode gerar cobranças fictícias para testar o fluxo.
- **Ativo**: Determina se o módulo de pagamentos da Efí está Ativo ou Inativo.

### Pix
<div className="figure"><img src="/img/opencart1.png" alt="banner" /><p>Configurações do Pix</p></div>

Nesta aba, as seguintes propriedades podem ser configuradas:

- **Chave PIX**: Determina a qual chave PIX o pagamento será enviado
- **Caminho do certificado**: Deve ser informado o caminho onde se encontra o seu certificado de segurança `.pem`
- **Desconto no Pagamento**: Você pode fornecer desconto para clientes que pagam por meio do PIX.
- **Tempo de Vencimento (horas)**: Determina o tempo de validade do QR Code Gerado
- **Validar mTLS**: Habilita ou desabilita a verificação de segurança utilizando mTLS. Mais informações você encontra <a href="/docs/api-pix/webhooks#entendendo-o-padrão-mtls" target="_blank">aqui</a>.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Chave Pix</b>
</div>

<p>Caso a sua chave Pix esteja cadastrada como número de telefone, não se esqueça de seguir o padrão definido pelo BACEN informando +55 DDD e o número, exemplo: <b>+5531988887777</b></p>

</div>

<br/>

### Boleto
<div className="figure"><img src="/img/opencart2.png" alt="banner" /><p>Configurações do Boleto</p></div>

Nesta aba, as seguintes propriedades podem ser configuradas:

- **Dias Para Vencimento**: Determina a quantidade de dias  para o vencimento do boleto, a contar da data de sua geração.
- **Desconto no pagamento**: Determina a quantidade de desconto que será aplicado no boleto,  em porcentagem.
- **Defina o percentual de multa**: Configuração de multa para ser aplicada automaticamente  no caso de pagamento após o vencimento do boleto.
- **Defina o percentual de juros**: Configuração de jutos para ser aplicado automaticamente  no caso de pagamento após o vencimento do boleto.
- **Observação**: Permite incluir uma mensagem no boleto para o cliente final.
- **E-mail de cobrança**: Caso selecionado, serão enviados e-mails sobre as transações para o cliente final.
- **Ativar boleto**: Caso selecionado,   ativará a opção boleto como forma de pagamento.

<br/>

### Open Finance
<div className="figure"><img src="/img/opencart3.png" alt="banner" /><p>Configurações do Open Finance</p></div>

Nesta aba, as seguintes propriedades podem ser configuradas:

- **Nome**: Nome do titular da conta.
- **Documento**: Deve ser informado o documento (CPF ou CNPJ) do titular da conta.
- **Agência**:  Deve ser informado a agência do titular.
- **Conta**:  Deve ser informado o número referente a conta.
- **Tipo de conta**: Deve ser informado o tipo de conta referente ao titular.
- **Desconto no pagamento**: Determina a quantidade de desconto que será aplicado no open finance, em porcentagem.
- **Ativar Open Finance**: Caso selecionado, ativará a opção Open Finance como forma de pagamento.

<br/>

### Cartão de crédito
<div className="figure"><img src="/img/opencart5.png" alt="banner" /><p>Configurações do Cartão</p></div>

Nesta aba, a seguinte propriedade pode ser configurada:

- **Ativar Cartão de Crédito**: Caso selecionado,   ativará a opção cartão de crédito  como forma de pagamento.

<br/>

## 4. Status do Pedido
<div className="figure"><img src="/img/opencart6.png" alt="banner" /><p>Status do Pedido</p></div>

Nesta aba é realizada a configuração dos Status de pagamento da Efí com os Status de pagamento de sua loja. Assim, quando houver a alteração do status do pagamento na Efí,  o status do pedido em sua loja será atualizado automaticamente de acordo com as configurações definidas.


## 5. Dúvidas Frequentes

### É obrigatório possuir SSL em minha loja para aceitar pagamentos com o módulo?

Para que o módulo da Efí para OpenCart funcione, não é necessário que a loja possua um certificado SSL. Contudo, é extremamente recomendado pela Efí que os lojistas utilizem. Independente da sua utilização, todos os dados de pagamento são criptografados e transmitidos com segurança para validação do pagamento. A presença de um certificado SSL instalado em sua loja garante maior segurança para o lojista e para os clientes que realizam compras. A ausência do certificado SSL na tela de pagamento, pode fazer com que o lojista perca vendas, uma vez que o cliente pode se sentir inseguro para digitar dados de pagamento em uma página que não possui um certificado.

<br/>

### Quero usar o Checkout Transparente de forma que o cliente não saia da minha loja para realizar o pagamento. É possível?

Sim. O módulo da Efí para OpenCart utiliza o checkout transparente para realizar o pagamento dos clientes, ou seja, em nenhum momento o cliente irá sair da sua loja virtual para finalizar o pagamento. Assim, no último passo da compra, será solicitado ao clientes dos dados obrigatórios para efetivar o pagamento.

<br/>


### As parcelas das opções de pagamento não estão sendo carregadas. Como corrigir?

Se após a instalação e configuração do módulo as parcelas do cartão de crédito não carregarem ao clicar sobre as bandeiras dos cartões, o lojista deverá verificar as credenciais informadas na configuração do módulo (chaves Client_Id, Client_Secret e também o "identificador de conta"). Se estiverem corretas, entre em contato com a Efí para que o problema seja analisado.

<br/>

### Estou recebendo a mensagem *“Unauthorized”* ao tentar finalizar uma compra. O que fazer?

Essa mensagem de erro pode estar relacionada com a as credenciais informadas de forma incorreta. Verifique se as suas credenciais estão corretamente inseridas nos respectivos campos de PRODUÇÃO e DESENVOLVIMENTO. Confira em [nossa FAQ](https://sejaefi.com.br/central-de-ajuda/api/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que#conteudo) informações detalhadas.

<br/>

### Está aparecendo a mensagem *“Efí Desabilitada: O modo Sandbox (Ambiente de testes) está ativo. Suas cobranças não serão validadas”*. Como corrigir?

Esta mensagem irá ser exibida quando seu módulo estiver configurado em ambiente de testes (sandbox). Para remover esta mensagem e começar a receber com a Efí, acesse as configurações do módulo em <code>Extensions > Payments > Efí > Editar</code> (ou em <code>Extensões > Pagamentos > Efí > Editar</code>) e desmarque a opção <code>SandBox > Habilitar Sandbox Efí (Ambiente de testes).</code>

<br/>

### Onde posso acompanhar as transações geradas pelo módulo?

As transações geradas através do módulo podem ser acompanhadas em sua conta Efí no link <code>API > Minhas Aplicações > Sua Aplicação</code>. Neste ambiente você poderá acompanhar todas as transações e suas respectivas situações.

<br/>

### Quando tento realizar um pagamento recebo a mensagem “Ocorreu um erro ao tentar realizar a sua requisição. Entre em contato com o proprietário da loja.”

Essa mensagem de erro pode ser exibida no momento da finalização da compra por diversos fatores. Neste caso, o primeiro passo é verificar as credenciais da sua aplicação e também conferir em sua API a sub-aba "histórico de requisições" veja como usar este recurso.

<br/>

## 8. Suporte e Sugestões

Sua sugestão de novas ideias e implementações para o módulo da Efí para OpenCart é muito importante. Portanto, caso você tenha alguma ideia, entre em contato com a nossa equipe. Iremos analisar sua sugestão e avaliar a possibilidade de implantação.

Caso você tenha alguma dúvida, entre em contato conosco pelo site <a href="https://sejaefi.com.br" target="_blank">Efí</a>. 



</div>