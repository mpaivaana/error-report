---
id: WHMCS
title: WHMCS
hide_title: true
sidebar_label: WHMCS
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">WHMCS</h1>
<div className="conteudo">

<div className="subtitulo">
Módulo de Integração Efí para WHMCS Oficial - Versão 2.2.0
</div>

<br/>
<br/>


O módulo Efí para WHMCS permite **gerar cobranças para serem pagas via Pix, Boleto, Cartão ou Open Finance** por meio da nossa API. Além disso, permite receber pagamentos  através do <strong>checkout transparente</strong>.

Este é o Módulo Oficial de integração fornecido pela Efí para o WHMCS. Com ele, o responsável pela conta WHMCS pode receber pagamentos via Pix, Boleto, Cartão ou Open Finance  e, assim que a cobrança tem uma confirmação de pagamento a Efí envia uma notificação automática para o WHMCS.


<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
  </div>

Para o correto funcionamento, recomendamos que leia com atenção este documento e faça exatamente o que está descrito com relação às configurações necessárias em nosso módulo, **inclusive atentando-se aos requisitos de versões do PHP do servidor e do WHMCS.**

</div>

<br/>

## 1. Requisitos do sistema

* Versão do PHP: ``8.1``
* Versão do WHMCS: ``8.6.x``

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
  </div>

<p>Os requisitos do sistema foram definidos de acordo com os nossos testes. Se seu sistema não se encaixa nos requisitos, não significa que o módulo não vai funcionar em seu WHMCS, mas sim, que não testamos no mesmo ambiente. <b>Portanto, não garantimos o funcionamento deste módulo em ambientes diferentes dos citados acima.</b></p>

</div>

<br/>


## 2. Instalação do Módulo Efí para WHMCS

1. <a href="https://codeload.github.com/gerencianet/gn-api-whmcs/zip/master" target="_blank">Faça o download</a> da última versão do módulo;

2. Descompacte o arquivo baixado;

3. Copie o arquivo **efi.php** e a pasta **efi**, para o diretório **/modules/gateways** da instalação do WHMCS;

4. Altere as permissões do arquivo copiado utilizando o comando abaixo  
   `chmod 777 modules/gateways/efi.php`

5. Altere as permissões da pasta copiada utilizando o comando abaixo  
   `chmod 777 modules/gateways/efi/ -R`

6. Copie o arquivo **efi.php** e a pasta **efi**, disponível no diretório **callback**, para o diretório **modules/gateways/callback**. 

7. Altere as permissões do arquivo copiado utilizando o comando abaixo  
   `chmod 777 modules/gateways/callback/efi.php`

8. Altere as permissões da pasta copiada utilizando o comando abaixo  
   `chmod 777 modules/gateways/callback/efi/ -R`

9. Copie o arquivo **efi.php**, disponível no diretório **hooks**, para o diretório **includes/hooks**. Ele deve estar no caminho **includes/hooks/efi.php**

10. Altere as permissões do arquivo copiado utilizando o comando: `chmod 777 includes/hooks/efi.php`

11. Crie uma pasta na raiz do seu servidor e insira seu certificado na pasta.

<div className="admonition admonition_info">
  <div>
  <img src="/img/info-circle-blue.svg"/> <b>Aviso!</b>
  </div>

<p>O passo 11 só é necessário no caso de utilização do Pix ou Open Finance.</p>

</div>

<br/>

Ao final da instalação, os arquivos do módulo Efí devem estar na seguinte estrutura no WHMCS:

```
includes/hooks/
  |- efi.php
 modules/gateways/
  |- callback/efi/
  |- callback/efi.php
  |- efi/
  |- efi.php
```
<br/>

#### Certificado para utilização da API PIX ou Open finance

Todas as requisições devem conter um certificado de segurança que será fornecido pela Efí dentro da sua conta, no formato PFX(.p12). Essa exigência está descrita na integra no [manual de segurança do PIX](https://www.bcb.gov.br/estabilidadefinanceira/comunicacaodados).

Caso ainda não tenha seu certificado, basta seguir o passo a passo do link a seguir para gerar um novo clicando <a href="https://sejaefi.com.br/central-de-ajuda/api/como-gerar-o-certificado-para-usar-a-api-pix#conteudo" target="_blank">aqui</a>.

## 3. Configurações do Módulo Efí para WHMCS

<div className="figure"><img src="/img/whmcs.png" alt="banner" /><p>Tela de Configurações do Módulo Efí para WHMCS</p></div>

Dentro do painel administrativo do WHMCS, acesse o menu <code>Opções> Portais Para Pagamentos> Payment Gateways</code>. Clique na opção  <code>Efí</code>. A tela mostrada abaixo será exibida. Dentro do formulário, você deverá preencher os seguintes campos:

1. **Client_id e Client_secret Produção:**  Deve ser preenchido com o client_id e o client_secret de produção de sua conta Efí. Este campo é obrigatório e pode ser encontrado no menu "API" -> "Minhas Aplicações". Em seguida, selecione sua aplicação criada, conforme é mostrado na <a href="/img/producao.jpg" target="_blank">imagem</a>; 

2. **Client_id e Client_secret  Desenvolvimento:** Deve ser preenchido com o client_id e o client_secret de desenvolvimento de sua conta Efí. Este campo é obrigatório e pode ser encontrado no menu "API" -> "Minhas Aplicações". Em seguida, selecione sua aplicação criada, conforme é mostrado <a href="/img/homologacao.jpg" target="_blank">imagem</a>; 

3. **Identificador de conta:** Deve ser preenchido com o identificador da  sua conta Efí. Este campo é obrigatório e pode ser encontrado no menu "API" -> "Identificador de conta", conforme é mostrado na <a href="/img/identificador.png" target="_blank">imagem</a>

4. **Usuário administrador do WHMCS:** Deve ser preenchido com o usuário administrador do WHMCS. É necessário utilizar o mesmo usuário que o administrador do WHMCS utiliza para fazer login na área administrativa de sua conta. Este campo é de preenchimento obrigatório;

5. **Desconto do Boleto:** Informe o valor desconto que deverá ser aplicado aos boletos gerados exclusivamente pela Efí. Esta informação é opcional;

6. **Tipo de desconto:** Informe o tipo de desconto (porcentagem ou valor fixo) que deverá ser aplicado aos boletos gerados exclusivamente pela Efí. Esta informação é opcional;

7. **Número de dias para o vencimento do Boleto:** Informe o número de dias corridos para o vencimento do boleto Efí após a cobrança ser gerada. Se o campo estiver vazio, o valor será 0;

8.  **E-mail de cobrança - Efí:** Caso seja de seu interesse, habilite o envio de emails de cobrança da Efí para o cliente final;

9.  **Configuração de Multa:**Caso seja de seu interesse, informe o valor, em porcentagem, cobrado de multa após o vencimento. Por exemplo: se você quiser 2%, você deve informar 2. Mínimo de 0.01 e máximo de 10. Integer;

10. **Configuração de Juros:** valor cobrado de juros por dia após a data de vencimento. Por exemplo: se você quiser 0,033%, você deve informar 0.033. Mínimo de 0.001 e máximo de 0.33;

11. **Observação:** Permite incluir no boleto uma mensagem para o cliente;

12. **Sandbox:** Caso seja de seu interesse, habilite o ambiente de testes da API Efí;

13. **Debug:** Neste campo é possível habilitar os logs de transação e de erros da Efí no painel WHMCS;

14. **Chave PIX:** Se utilizado CNPJ, informar sem pontos e espaços, ex. 11111111111121;

15. **Certificado Pix:** Deve ser preenchido com o caminho do certificado salvo em seu servidor;

16. **Desconto:** Informe o valor de desconto que deverá ser aplicado ao pix gerado exclusivamente pela Efí;

17. **Validade da Cobrança PIX:** Deve ser informado o período de validade em dias da cobrança PIX;

18. **Nome:** Deve ser informado o nome do titular da conta;

19. **Documento:** Deve ser informado o documento (CPF ou CNPJ) do titular da conta;

20. **Agência:** Deve ser informado a agência do titular;

21. **Conta :** Deve ser informado o número referente a conta;

22. **Tipo de conta:** Deve ser informado o tipo de conta referente ao titular;

23. **Validar mTLS:** Marque o campo "Validar mTLS" caso deseje utilizar a validação mTLS em seu servidor. Você pode visualizar mais detalhes clicando <a href="/docs/api-pix/webhooks#entendendo-o-padrão-mtls" target="_blank">aqui</a>.

24. **PIX:** Selecione essa opção caso deseje deixar a opção PIX como forma de pagamento;

25. **Boleto:** Selecione essa opção caso deseje deixar a opção boleto como forma de pagamento;

26. **Cartão de Crédito:** Selecione essa opção caso deseje deixar a opção de cartão de crédito como forma de pagamento;

27. **Open Finance:** Selecione essa opção caso deseje deixar a opção de open finance como forma de pagamento.
    
<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Chave Pix</b>
</div>

<p>Caso a sua chave Pix esteja cadastrada como número de telefone, não se esqueça de seguir o padrão definido pelo BACEN informando +55 DDD e o número, exemplo: <b>+5531988887777</b></p>

</div>


<br/>

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


## 4. Erros Comuns de Integração

Antes mesmo do módulo tentar gerar uma cobrança alguns campos requisitados na integração passam por uma validação. Os erros que esta validação podem retornar são:

- **Nome Inválido**: O nome informado pelo cliente final é muito curto, assim, deve ser informado o nome completo;

- **E-mail Inválido**: O email informado pelo cliente final é inválido (não segue o padrão xxxxx@xxxx.com) ou não existe;

- **Telefone Inválido**: O telefone informado pelo cliente final não existe ou o DDD está incorreto;

- **Documento Inválido**: O número do CPF/CNPJ do cliente final é invalido;

- **Documento Nulo**: O campo referente ao CPF e/ou CNPJ do cliente não existe no WHMCS ou não está preenchido;

- **Razão Social Inválida**: A Razão Social é inválida. O cliente deve digitar no campo "Empresa" do WHMCS o nome empresarial que consta na Receita Federal;

- **Razão Social Nula**: O campo "Empresa" do WHMCS não está preenchido;

- **Erro Inesperado**: Houve algum erro na integração. Provavelmente você não preencheu todos os campos do módulo corretamente, ou a versão do PHP do WHMCS não é compatível com a API Efí. Você deverá ativar o modo Debug do módulo para saber mais detalhes.

A partir da versão 0.2.7 do módulo Efí/WHMCS, disponibilizamos o callback automático do WHMCS para a Efí nos casos de cancelamento da fatura. Portanto, sempre que uma fatura for cancelada no WHMCS, ela é automaticamente cancelada na Efí.

Ainda que nenhum destes erros de validação sejam retornados, a API Efí poderá retornar erros referentes à geração da cobrança. Para interpretar os retornos da API e, claro, corrigir possíveis erros de validação de dados ou outros similares, acesse a página <a href="/docs/api-cobrancas/erros">Interpretando Erros da API</a>.

<br/>


## 5. Suporte e Sugestões

Sua sugestão de novas ideias e implementações para o módulo da Efí para WHMCS é muito importante. Portanto, caso você tenha alguma ideia, entre em contato com a nossa equipe. Iremos analisar sua sugestão e avaliar a possibilidade de implantação.

Caso você tenha alguma dúvida, entre em contato conosco pelo site [Efí](https://sejaeficom.br/).


</div>