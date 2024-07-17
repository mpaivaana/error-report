---
id: cartao
title: Cartão
hide_title: true
sidebar_label: Cartão
---
<h1 className="titulo">Cartão</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 
import AccountIdentifier from "@site/src/scripts/account_identifier.js"

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Passo a passo para gerar uma cobrança de cartão de crédito na API Efí
</div>

<br/>
<br/>

## Introdução

As transações online via cartão de crédito exigem apenas a numeração de face e o código no verso do cartão, o que pode resultar em transações suspeitas. Por isso, é importante adotar procedimentos de segurança para evitar prejuízos financeiros, como o Chargeback.

Quando uma transação com cartão de crédito é realizada, ela passa por três etapas: autorização da operadora, análise de segurança e captura. Cada transação é analisada para identificar possíveis riscos. Se for aprovada, o valor é debitado na fatura do cliente. Caso contrário, o valor fica reservado até que a comunicação reversa seja concluída e o limite do cartão seja reestabelecido.


### Confira a lista de cartões de crédito aceitos pela Efí
<ul>
<li>Visa</li>
<li>Master</li>
<li>AmericanExpress</li>
<li>Elo</li>
<li>Hipercard</li>
</ul>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>Para fazer o pagamento com cartão de crédito,<b>é necessário obter o <i>payment_token</i></b> da transação. Portanto, é imprescindível seguir os procedimentos para <a href='#obtenção-do-payment_token'>obter o payment_token</a> conforme descrito no documento antes de criar a cobrança com cartão de crédito.</p>
<p>Outra informação importante é você precisa <b>cadastrar o ramo de atividade</b> em sua conta. Confira mais detalhes <a href='https://sejaefi.com.br/artigo/inserir-ramo-de-atividade/#versao-7' target='_blank'>aqui</a>.</p>
</div>

<br/>

## Obtenção do payment_token
Um payment_token é um conjunto de caracteres gerado pela API Efí, que representa os dados do cartão da pessoa pagadora. Ele pode ser configurado para uso único ou reutilização recorrente.

Para transações com cartão de crédito, é realizada uma etapa prévia à criação da cobrança, onde ocorre a geração do payment_token. Isso pode ser feito transmitindo os dados do cartão, podendo utilizar a **[biblioteca JavaScript](#obtenção-do-payment_token---biblioteca-javascript)**, ou o **[módulo jQuery](#obtenção-do-payment_token---módulo-jquery)**.


<div className="admonition admonition_info">
<div>
<img src="/img/lightbulb-on-blue.svg"/> <b>Tokenização de cartão</b>
</div>
<p>Se você precisa reutilizar o payment_token para fins de recorrência, utilize o atributo <code>reuse</code> com o valor booleano <code>true</code>. Dessa forma, o payment_token pode ser usado em mais de uma transação de forma segura, sem a necessidade de salvar os dados do cartão</p>
</div>

<br/>
<div className="admonition admonition_info">
<div>
<img src="/img/lightbulb-on-blue.svg"/> <b>Simulação em Ambiente de Homologação</b>
</div>
<p>A simulação de cobranças de cartão em ambiente de Homologação funciona com base na análise imediata de acordo com o último dígito do número do cartão de crédito utilizado:
</p>
<p>
<li>Cartão com final 1 retorna: <code>"reason":"Dados do cartão inválidos."</code></li>
<li>Cartão com final 2 retorna: <code>"reason":"Transação não autorizada por motivos de segurança."</code></li>
<li>Cartão com final 3 retorna: <code>"reason":"Transação não autorizada, tente novamente mais tarde."</code></li>
<li>Demais finais têm transação aprovada.</li></p>
</div>

<br/>

### Biblioteca JavaScript
Esta biblioteca JavaScript permite a criptografia dos dados do cartão diretamente no navegador do cliente, gerando o payment_token, identificando a bandeira do cartão e obtendo informações de parcelamento.

#### Demonstração
Para visualizar como essa biblioteca é utilizada em um exemplo prático, você pode conferir uma demonstração <a target='_blank' href='https://efipay.github.io/js-payment-token-efi/'>aqui</a>.

Veja mais detalhes no <a target="_blank" href="https://github.com/efipay/js-payment-token-efi" >repositório da biblioteca no GitHub</a>.

#### Instalação
Aqui estão algumas opções para instalar a biblioteca em projetos web que usam JavaScript puro ou tecnologias como o Node.js. Veja os detalhes a seguir:

##### a) **Aplicação Web**

Disponibilizamos duas formas de instalação da biblioteca em aplicações Web.

- **Importação por CDN**

Importação através do link do <a target="_blank" href="https://cdn.jsdelivr.net/gh/efipay/js-payment-token-efi/dist/payment-token-efi.min.js" >CDN da biblioteca</a>.

<Tabs
    defaultValue="saida"
    values={[
      { label: 'script', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```javascript
    <script src="https://cdn.jsdelivr.net/gh/efipay/js-payment-token-efi/dist/payment-token-efi.min.js"></script>
  ```
  </TabItem>
 
  </Tabs>

- **Importação local**

Realizando o <a target="_blank" href="https://raw.githubusercontent.com/efipay/js-payment-token-efi/main/dist/payment-token-efi.min.js" >download da biblioteca</a> localizada em `/dist/payment-token-efi.min.js`, adicione-a localmente em seu projeto.

<Tabs
    defaultValue="saida"
    values={[
      { label: 'script', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```javascript
    <script src="./dist/payment-token-efi.min"></script>
  ```
  </TabItem>
 
  </Tabs>

##### b) **Aplicação Node**

Para usar a biblioteca em um cenário Node.js, você tem duas opções de instalação.

- **Importação por NPM**

Utilize o <a target="_blank" href="https://www.npmjs.com/package/payment-token-efi" >gerenciador de pacotes NPM</a> para instalar a biblioteca com o seguinte comando:

<Tabs
    defaultValue="saida"
    values={[
      { label: 'Linha de comando', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```
    npm i payment-token-efi	
    // ou
    yarn add payment-token-efi	
  ```
  </TabItem>
 
  </Tabs>

Após a instalação da biblioteca, basta importá-la em seu projeto.

  <Tabs
    defaultValue="saida"
    values={[
      { label: 'Código', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```javascript
    const EfiJs = require('payment-token-efi');
  ```
  </TabItem>
 
  </Tabs>

  - **Importação local**

A segunda opção é <a target="_blank" href="https://raw.githubusercontent.com/efipay/js-payment-token-efi/main/distNode/payment-token-efi.js" >baixar o arquivo</a>`/distNode/payment-token-efi.js` e importá-la localmente.

<Tabs
    defaultValue="saida"
    values={[
      { label: 'Código', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```javascript
    const EfiJs = require('./distNode/payment-token-efi');
  ```
  </TabItem>
 
  </Tabs>

Depois, basta instalar a seguinte biblioteca como dependência para a virtualização do DOM.

  <Tabs
    defaultValue="saida"
    values={[
      { label: 'Linha de comando', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```
    npm install jsdom --save
    // ou
    yarn add jsdom
  ```
  </TabItem>
 
  </Tabs>


  #### Utilização

Este script oferece três funções para manipulação de dados de cartão de crédito. A primeira função permite **[identificar a bandeira](#a-identificar-a-bandeira)** do cartão a partir do seu número. A segunda função **[busca informações de parcelamento](#b-buscar-as-informações-de-parcelamento)** de acordo com as <a target="_blank" href="https://sejaefi.com.br/artigo/alterar-recebimento-via-cartao/#versao-7" >configurações de recebimento via cartão em sua conta</a>. Por fim, a terceira função **[gera o token de pagamento (payment_token) e a máscara do cartão (card_mask)](#c-gerar-o-payment_token-e-card_mask)** com base nos dados do cartão.

Para utilizar esse script, é necessário fornecer o código Identificador de conta (payee_code) como parâmetro para gerar o payment_token dos dados do cartão de crédito. Você pode obter essa informação em sua conta digital, no menu `API > Introdução > Identificador de conta`. <a target='_blank' href='https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2023/03/08/matheus.rodrigues/24fa15-dda30019-a643-409e-8813-c7cc68adcc40.png'>Veja onde encontrá-lo</a>. Certifique-se de ter essa informação disponível ao utilizar as funções do script.

##### a) Identificar a bandeira

<div className="payment">
<details className="col-100">
  <summary>
<b>Identificar a bandeira</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Função para identificar a bandeira
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/card/identificar_bandeira.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'Código', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```javascript
try {
      EfiJs.CreditCard
        .setCardNumber('4485785674290087')
        .verifyCardBrand()
        .then(brand => {
            console.log('Bandeira: ', brand);

            if (brand !== 'undefined') {
                // Exemplo: executar a função para gerar o payment_token com a bandeira identificada
            }
        }).catch(err => {
            console.log('Código: ', err.code);
            console.log('Nome: ', err.error);
            console.log('Mensagem: ', err.error_description);
        });
  } catch (error) {
    console.log('Código: ', error.code);
    console.log('Nome: ', error.error);
    console.log('Mensagem: ', error.error_description);
}
  ```
 </TabItem>
  </Tabs>

<br/>   
        
  <b>Respostas</b>

  <br/> 

  A resposta abaixo representa Sucesso do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```json
  mastercard
  ```
  </TabItem>

  
  </Tabs>

</details>
</div>

##### b) Buscar as informações de parcelamento

<div className="payment">
<details className="col-100">
  <summary>
<b>Buscar as informações de parcelamento</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Função para buscar as informações de parcelamento
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/card/buscar_informacoes.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'Código', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```javascript
try {
    EfiJs.CreditCard
        .setAccount('Identificador_de_conta_aqui')
        .setEnvironment('production') // 'production' or 'sandbox'
        .setBrand('visa')
        .setTotal(28990)
        .getInstallments()
        .then(installments => {
            console.log('Parcelas', installments);
        }).catch(err => {
            console.log('Código: ', err.code);
            console.log('Nome: ', err.error);
            console.log('Mensagem: ', err.error_description);
        });
} catch (error) {
    console.log('Código: ', error.code);
    console.log('Nome: ', error.error);
    console.log('Mensagem: ', error.error_description);
}
  ```
 </TabItem>
  </Tabs>

<br/>   
        
  <b>Respostas</b>

  <br/> 

  A resposta abaixo representa Sucesso do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```json
    {
      "rate": 0,
      "name": "brand",
      "installments": [{
          "installment": 1,
          "has_interest": false,
          "value": 500,
          "currency": "5,00",
          "interest_percentage": 0
      }]
    }
  ```
  </TabItem>

  
  </Tabs>

</details>
</div>

##### c) Gerar o payment_token e card_mask

<div className="payment">
<details className="col-100">
  <summary>
<b>Gerar o payment_token e card_mask</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Função para gerar o payment_token e card_mask
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/card/gerar_token.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'Código', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```javascript
try {
    EfiJs.CreditCard
        .setAccount('Identificador_de_conta_aqui')
        .setEnvironment('production') // 'production' or 'sandbox'
        .setCreditCardData({
            brand: 'visa',
            number: '4485785674290087',
            cvv: '123',
            expirationMonth: '05',
            expirationYear: '2029',
            reuse: false
        })
        .getPaymentToken()
        .then(data => {
            const payment_token = data.payment_token;
            const card_mask = data.card_mask;

            console.log('payment_token', payment_token);
            console.log('card_mask', card_mask);
        }).catch(err => {
            console.log('Código: ', err.code);
            console.log('Nome: ', err.error);
            console.log('Mensagem: ', err.error_description);
        });
} catch (error) {
    console.log('Código: ', error.code);
    console.log('Nome: ', error.error);
    console.log('Mensagem: ', error.error_description);
}
  ```
 </TabItem>
  </Tabs>

<br/>   
        
  <b>Respostas</b>

  <br/> 

  A resposta abaixo representa Sucesso do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```json
    {
      "payment_token": "47f13d72c883c1547ae4a0df11eb46194f333f85",
      "card_mask": "XXXXXXXXXXXX3991"
    }
  ```
  </TabItem>

  
  </Tabs>

</details>
</div>

##### e) Ativar debbuger

<div className="payment">
<details className="col-100">
  <summary>
<b>Ativar debbuger</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            O debugger pode ser ativado para depurar e encontrar possível falhas.
          </div>
          <div className="right">
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'Código', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```javascript
 EfiJs.CreditCard.debugger(true);
  ```
 </TabItem>
  </Tabs>

<br/>   
        
  <b>Respostas</b>

  <br/> 

 Em caso de erro, será retornado no try/catch o objeto como apresentado abaixo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```json
   {
    "code": 3500056,
    "error": "invalid_brand",
    "error_description": "O parâmetro [brand] informado é inválido. As opções válidas são: 'visa', 'mastercard', 'amex', 'diners', 'elo' ou 'hipercard'."
} 
  ```
  </TabItem>

  
  </Tabs>

</details>
</div>

<br/>

### Módulo jQuery
Uma opção para gerar o <code>payment_token</code> a partir dos dados do cartão é usar o front-end. Para isso, você precisa de um código JavaScript específico da sua conta Efí. Para gerá-lo, siga estes passos:

* <a href="https://usuario.gerencianet.com.br/login" target="_blank">Efetue login</a> em sua conta Efí e acesse <code>API</code>.
* Copie seu <code>Identificador de conta</code> (<a href="/img/identificador.png" target="_blank">veja onde</a>)
* Cole no campo abaixo e clique no botão ``Gerar``

<AccountIdentifier />

<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
<p>Após informar seu identificador de conta, <b>serão gerados 2 (dois)</b> códigos JavaScript distintos. <br/>
Copie e utilize o código referente ao ambiente desejado, atentando-se às diferenças do ambiente de <i>"Homologação"</i> e <i>"Produção"</i>.</p>
</div>

<br/>

Este script permitirá executar duas funções:
<ul>
 <li><code>getPaymentToken</code>: Gera o payment_token de acordo com os dados do cartão; </li>
<li><code>getInstallments</code>: Retorna as informações sobre parcelamento de acordo com as <a href='https://sejaefi.com.br/artigo/alterar-recebimento-via-cartao/#versao-7' target='_blank'>configurações de recebimento em sua conta</a>.</li>
</ul>
<br/>

#### Obtendo um "payment_token" (getPaymentToken) e informações sobre parcelamentos (getInstallments) 

 <Tabs
    defaultValue="saida"
    values={[
      { label: 'Código', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```javascript
 $gn.ready(function (checkout) {

	checkout.getPaymentToken(
		{
			brand: 'visa', // bandeira do cartão
			number: '4012001038443335', // número do cartão
			cvv: '123', // código de segurança
			expiration_month: '05', // mês de vencimento
			expiration_year: '2021', // ano de vencimento
			reuse: false // tokenização/reutilização do payment_token
		},
		function (error, response) {
			if (error) {
				// Trata o erro ocorrido
				console.error(error);
			} else {
				// Trata a resposta
				console.log(response);
			}
		}
	);

  checkout.getInstallments(
		50000, // valor total da cobrança
		'visa', // bandeira do cartão
		function (error, response) {
			if (error) {
				// Trata o erro ocorrido
				console.log(error);
			} else {
				// Trata a respostae
				console.log(response);
			}
		}
	);

});
  ```
  </TabItem>
 
  </Tabs>

#### Atributos relacionados ao envio de dados do cartão e retorno das funcões

<b>$gn.ready (checkout)</b>

Essa função de inicialização permite a chamada das funções <i>getPaymentToken</i> e <i>getInstallments</i>. Você passa um objeto (checkout) que recebe as instâncias dessas funções.

<br/>

<div className="payment">
<details className="col-100">
  <summary>
<b>getPaymentToken</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Função para gerar o payment_token
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/card/payment_token.md" />
          </div>
      </div>
<br/> <br/>


  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso e falha do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 Falha', value: 'falha', },
    ]}>
  <TabItem value="saida">

  ```json
 {
    "code": 200,
    "data": {
        "payment_token": "47f13d72c883c1547ae4a0df11eb46194f333f85",
        "card_mask": "XXXXXXXXXXXX3991"
    }
}
  ``` 
  </TabItem>
  <TabItem value="falha">

  ```json
{
    "code": 3500056,
    "error": "invalid_brand",
    "error_description": "O parâmetro [brand] informado é inválido. As opções válidas são: 'visa', 'mastercard', 'amex', 'diners', 'elo' ou 'hipercard'."
}
Ou
{
    "code": 3500058,
    "error": "invalid_card_number",
    "error_description": "O parâmetro [number] informado é inválido."
}
Ou
{
    "code": 3500011,
    "error": "invalid_data",
    "error_description": {
        "property": "cvv",
        "message": "Cvv deve conter entre 3 e 4 caracteres"
    }
}
Ou
{
    "code": 3500062,
    "error": "invalid_expiration_month",
    "error_description": "O parâmetro [expiration_month] informado é inválido."
}
Ou
{
    "code": 3500011,
    "error": "invalid_data",
    "error_description": {
        "property": "expiration_year",
        "message": "Expiration year inválido"
    }
}
  ```
 </TabItem>
  </Tabs>
</details>
</div>

<div className="payment">
<details className="col-100">
  <summary>
<b>getInstallments</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Função que retorna as informações sobre parcelamento
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/card/installments.md" />
          </div>
      </div>
<br/><br/>


  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso e Falha do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 Falha', value: 'falha', },
    ]}>
  <TabItem value="saida">

  ```json
 {
    "code": 200,
    "data": {
        "rate": 0,
        "name": "visa",
        "installments": [
            {
                "installment": 1,
                "has_interest": false,
                "value": 47988,
                "currency": "479,88",
                "interest_percentage": 0
            },
            {
                "installment": 2,
                "has_interest": false,
                "value": 23994,
                "currency": "239,94",
                "interest_percentage": 0
            },
            {
                "installment": 3,
                "has_interest": true,
                "value": 16637,
                "currency": "166,37",
                "interest_percentage": 199
            }
        ]
    }
}
  ``` 
  </TabItem>
  <TabItem value="falha">

  ```json
{
    "code": 3500056,
    "error": "invalid_brand",
    "error_description": "O parâmetro [brand] informado é inválido. As opções válidas são: 'visa', 'mastercard', 'amex', 'diners', 'elo' ou 'hipercard'."
}
Ou
{
    "code": 3500053,
    "error": "missing_total",
    "error_description": "O parâmetro [total] é obrigatório e deve ser um inteiro."
}
Ou
{
    "code": 3500006,
    "error": "greater_than_limit",
    "error_description": "O total fornecido é superior ao limite máximo por transação."
}
  ```
 </TabItem>
  </Tabs>
</details>
</div>
  
 <br/> 

### Back-end  

<div className="admonition admonition_danger">
<div>
<img src="/img/exclamation-triangle-red.svg"/> <b>Atenção</b>
</div>
<p>O procedimento de geração do payment_token no back-end foi descontinuado com base em medidas de segurança. A fim de garantir a proteção dos dados, informações sensíveis e  evitar recusa nas transações de cartão de crédito, recomendamos que você descontinue o uso deste serviço . Com base em nossa avaliação, gostaríamos de sugerir a geração <a href="#biblioteca-javascript">através do front-end da aplicação</a></p>
</div>

<br/>

## Criação de cobrança por cartão de crédito em One Step (Um passo)

Após obter o <code>payment_token</code> através do código Javascript ou do back-end, seu servidor enviará as informações dos itens, da transação e do cliente, juntamente com o <code>payment_token</code>, para a API Efí.

<div className="payment">
<details className="col-100">
  <summary>
<b>Estrutura hierárquica dos atributos do Schema que podem ser utilizados:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'v1/charge/one-step', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
"items"
    "name"
    "value"
    "amount"
    "marketplace"
        "payee_code"
        "percentage"
"shippings"
    "name"
    "value"
    "payee_code"
"metadata"
    "custom_id"
    "notification_url"
"payment"
    "credit_card"
        "customer"
            "name"
            "cpf"
            "email"
            "phone_number"
            "birth"
            "address"
                "street"
                "number"
                "neighborhood"
                "zipcode"
                "city"
                "complement"
                "state"
            "juridical_person"
                "corporate_name"
                "cnpj"
        "installments"
        "discount"
            "type"
                "percentage",
                "currency"
            "value"
        "billing_address"
            "street"
            "number"
            "neighborhood"
            "zipcode"
            "city"
            "complement"
            "state"
        "payment_token"
        "message"
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/one-step</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação.
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/card/card_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Dados de entrada', value: 'exemplo', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1
      }
    ],
    "payment": {
      "credit_card": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "birth": "1990-08-29",
          "phone_number": "5144916523"
        },
        "installments": 1,
        "payment_token": "",
        "billing_address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "neighborhood": "Bauxita",
          "zipcode": "35400000",
          "city": "Ouro Preto",
          "complement": "",
          "state": "MG"
        }
      }
    }
}
  ``` 
  </TabItem>

  </Tabs>


  <br/>   
        
  <b>Respostas</b>

  <br/> 

  A resposta abaixo representa Sucesso do consumo.
  <Tabs
    defaultValue="saida1"
    values={[
      { label: '🟢 200 (aprovado)', value: 'saida1', },
      { label: '🟢 200 (recusado)', value: 'saida2', },
    ]}>
  <TabItem value="saida1">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "installments": 1, // número de parcelas em que o pagamento deve ser dividido
      "installment_value": 5990, // valor da parcela. Por exemplo: 8900 (equivale a R$ 89,00)
      "charge_id": numero_charge_id, // número da ID referente à transação gerada
      "status": "approved", // Indica que o pagamento foi aprovado pela operadora do cartão mas ainda não foi creditado.
      "total": 5990, // valor, em centavos. Por exemplo: 8900 (equivale a R$ 89,00)
      "payment": "credit_card" // forma de pagamento associada à esta transação ("credit_card" equivale a "cartão de crédito")
    }
}
  ```
  </TabItem>
  <TabItem value="saida2">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "installments": 1, // número de parcelas em que o pagamento deve ser dividido
      "installment_value": 5990, // valor da parcela. Por exemplo: 8900 (equivale a R$ 89,00)
      "charge_id": numero_charge_id, // número da ID referente à transação gerada
      "status": "unpaid", // Indica que o pagamento foi reprovado.
      "refusal": {
            "reason": "Sistema de segurança: Os dados e comportamentos de utilização do cartão se assemelham a práticas e cenários de alto risco para pagamentos online. Utilize outro cartão ou outro meio de pagamento.", // Mensagem que contém o motivo da recusa da transação.
            "retry": true // Indica se é possível tentar novamente a transação.
        },
      "total": 5990, // valor, em centavos. Por exemplo: 8900 (equivale a R$ 89,00)
      "payment": "credit_card" // forma de pagamento associada à esta transação ("credit_card" equivale a "cartão de crédito")
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Criação de cobrança por cartão de crédito em Two Steps (Dois passos)
Nesta opção é necessário seguir dois passos, enviando o _body_ da requisição com todos os atributos mínimos obrigatórios para a emissão da cobrança.

<ol>
<li>Crie a transação, informando o item/produto/serviço, valor, quantidade, etc;</li>
<li>Associe à forma de pagamento via boleto, informando o <code>charge_id</code> da transação e os dados do cliente.</li>
</ol>

A documentação continua com os procedimentos detalhados, mas lembre-se de instalar uma de nossas bibliotecas em seu servidor para executar os códigos de exemplo. <a href="/docs/sdk/introducao" target="_blank">Certifique-se de que a SDK da Efí foi instalada.</a>

### 1. Criar transação

Primeiramente, precisamos gerar a transação (também chamada de "cobrança").  Nesse momento, você informará o nome do item/produto/serviço, o valor da transação, a quantidade e outras informações relevantes.

Após criá-la, será retornado o <code>charge_id</code>, que é o identificador único da transação e que será utilizado para associar à forma de pagamento.

No momento da criação, a transação recebe o status <code>new</code>, que significa que a cobrança foi gerada e está aguardando definição da forma de pagamento. Essa cobrança somente terá seu status alterado quando o integrador definir sua forma de pagamento.

Para gerar uma transação, você deve enviar uma requisição <code>POST</code> para a rota <code>/v1/charge</code>.

<div className="payment">
<details className="col-100">
  <summary>
<b>Estrutura hierárquica dos atributos do Schema que podem ser utilizados:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'v1/charge', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
"items"  
        "name"  
        "value"  
        "amount"  
        "marketplace"  
            "payee_code"  
            "percentage"  
    "shippings"  
        "name"  
        "value"  
        "payee_code"  
    "metadata"  
        "custom_id"  
        "notification_url"
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/billet/billet_two_steps_1.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 8900,
        "amount": 1
      }
    ]
}
  ``` 
  </TabItem>
 
  </Tabs>


  <br/>   
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "charge_id": numero_charge_id, // número da ID referente à transação gerada
      "status": "new", // cobrança gerada, aguardando definição da forma de pagamento
      "total": 8900, // valor total da transação (em centavos, sendo 8900 = R$89,00)
      "custom_id": null, // identificador próprio opcional
      "created_at": "2021-06-01 14:58:46" // data e hora da criação da transação
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>


### 2. Associar à forma de pagamento via cartão

Com a transação gerada com sucesso, agora vamos associar com a forma de pagamento desejada - neste caso, será <code>banking_billet</code> (boleto bancário). Para tal, deverá ser informado o <code>charge_id</code> obtido ao criar a transação.

Nesta etapa, seu _backend_ enviará o restante das informações da transação, junto com o <code>payment_token</code> para a API Efí.

Para associar à forma de pagamento, você deve enviar uma requisição <code>POST</code> para a rota <code>/v1/charge/:id/pay</code>, onde <code>:id</code> é o <code>charge_id</code> da transação desejada.

<div className="payment">
<details className="col-100">
  <summary>
<b>Estrutura hierárquica dos atributos do Schema que podem ser utilizados:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: 'v1/charge/:id/pay', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
"payment"  
      "credit_card"  
          "customer"  
              "name"  
              "cpf"  
              "email"  
              "phone_number"  
              "birth"  
              "address"  
                  "street"  
                  "number"  
                  "neighborhood"  
                  "zipcode"  
                  "city"  
                  "complement"  
                  "state"  
              "juridical_person"  
                  "corporate_name"  
                  "cnpj"  
          "installments"  
          "discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
          "billing_address"  
              "street"  
              "number"  
              "neighborhood"  
              "zipcode"  
              "city"  
              "complement"  
              "state"  
          "payment_token"  
          "message"
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/pay</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/card/card_two_steps_2.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "payment": {
      "credit_card": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "birth": "1990-08-29",
          "phone_number": "5144916523"
        },
        "installments": 1,
        "payment_token": "",
        "billing_address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "neighborhood": "Bauxita",
          "zipcode": "35400000",
          "city": "Ouro Preto",
          "complement": "",
          "state": "MG"
        }
      }
    }
}
  ``` 
  </TabItem>
 
  </Tabs>


  <br/>   
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "installments": 1, // número de parcelas em que o pagamento deve ser dividido
      "installment_value": 8900, // valor da parcela. Por exemplo: 8900 (equivale a R$ 89,00)
      "charge_id": numero_charge_id, // número da ID referente à transação gerada
      "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento ("waiting" equivale a "aguardando")
      "total": 8900, // valor, em centavos. Por exemplo: 8900 (equivale a R$ 89,00)
      "payment": "credit_card" // forma de pagamento associada à esta transação ("credit_card" equivale a "cartão de crédito")
    }
}
  ```
  </TabItem>

  
  </Tabs>

</details>

</div>
<br/>

<div className="admonition admonition_tip">
<div>
    <img src="/img/info-circle-green.svg"/> <b>Pagamento realizado como Pessoa Jurídica (PJ)</b>
</div>
<p>O cliente associado à transação pode ser uma Pessoa Jurídica. Nesse caso é necessário informar a Razão Social e o CNPJ da empresa pagadora no atributo <code>juridical_person</code>.</p>
</div>
<br/>

<div className="admonition admonition admonition_tip">
<div>
    <img src="/img/lightbulb-on-green.svg"/> <b>Relação de todos os possíveis status de uma transação</b>
</div>
<p>Todas as transações possuem status, que representa a "situação" dessa transação. Portanto, é importante conhecer os possíveis status de uma transação na API para fornecer as devidas tratativas em seu sistema.</p>
<p><a href="/docs/api-cobrancas/status" target="_blank">Confira neste link</a> todos os detalhes dos possíveis status das transações.</p>
</div>
<br/>

<div className="admonition admonition_tip">
  <div>
  <img src="/img/lightbulb-on-green.svg"/> <b>Callbacks (notificações) das transações da API para seu sistema</b>
  </div>
<p>As notificações permitem que você seja informado quando uma transação tiver seu status alterado. Dessa forma, você poderá identificar quando um boleto for pago, por exemplo.</p>
<p>Confira <a href="/docs/api-cobrancas/notificacoes" target="_blank">neste link</a> todos os detalhes sobre como implementar a sua URL de notificação.</p>
  </div>

<br/>
<div className="admonition admonition_tip">
  <div>
  <img src="/img/info-circle-green.svg"/> <b>Arredondamento de tarifa do cartão e-commerce</b>
  </div>
<p>A formatação da tarifa é feita com <i>number_format</i>, ou seja, um arredondamento simples. Valores menores que 5 é arredondado para baixo, valores maiores ou igual a 5 o arredondamento é para cima.</p>
<p><b>Exemplo:</b><br/>
Tarifa de 3,342 é arredondado para baixo 3,34
Tarifa de 3,335 vai ser arredondado para cima 3,34</p>
  </div>

<br/>

## Retentativa de pagamento via cartão de crédito

Os pagamentos realizados via cartão de crédito, que forem recusados por algum motivo operacional, como falta de limite, dados incorretos e problemas temporários com o cartão, poderão ter uma nova tentativa de pagamento via API.

Dessa forma, não será necessário realizar todo o processo de emissão da cobrança novamente, tornando o fluxo mais rápido e eficiente.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/retry</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/card/retentativa.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "payment": {
      "credit_card": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "birth": "1990-08-29",
          "phone_number": "5144916523"
        },
        "billing_address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "neighborhood": "Bauxita",
          "zipcode": "35400000",
          "city": "Ouro Preto",
          "complement": "",
          "state": "MG"
        },
        "payment_token": "75bfce47d230b550f7eaac2a932e0878a934cb3"
      }
    }
}
  ``` 
  </TabItem>
 
  </Tabs>


  <br/>   
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "installments": 1, // número de parcelas em que o pagamento deve ser dividido
      "installment_value": 8900, // valor da parcela. Por exemplo: 8900 (equivale a R$ 89,00)
      "charge_id": numero_charge_id, // número da ID referente à transação gerada
      "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento ("waiting" equivale a "aguardando")
      "total": 8900, // valor, em centavos. Por exemplo: 8900 (equivale a R$ 89,00)
      "payment": "credit_card" // forma de pagamento associada à esta transação ("credit_card" equivale a "cartão de crédito")
    }
}
  ```
  </TabItem>

  
  </Tabs>

</details>

</div>

<br/>
<div className="admonition admonition_info">
  <div>
  <img src="/img/info-circle-blue.svg"/> <b>Informação</b>
  </div>
<p>Esta funcionalidade permite que o integrador tente reprocessar uma cobrança que falhou. Para isso, a cobrança deve atender aos seguintes critérios:</p>
<p>
<li>a cobrança deve ser de cartão de crédito</li>
<li>a cobrança deve ter o status <code>unpaid</code></li>
<li>a cobrança não pode ser recorrente</li></p>
  </div>

<br/>

## Estorno de pagamento via cartão de crédito

Este endpoint permite realizar o estorno de um pagamento efetuado por meio de cartão de crédito. 

O estorno pode ser <code>total</code> ou <code>parcial</code>, dependendo do valor especificado. Se o valor não for informado, o estorno será <strong>total</strong>.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/card/<HighlightVar>:id</HighlightVar>/refund</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/card/refund.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "amount": 1000
}
  ``` 
  </TabItem>
 
  </Tabs>


  <br/>   
        
  <b>Respostas</b>

  <br/> 

  A resposta abaixo representa Sucesso do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "status": 200,
    "message": "Reembolso em processamento"
}
  ```
  </TabItem>

  
  </Tabs>

</details>

</div>

<br/>
<div className="admonition admonition_info">
  <div>
  <img src="/img/info-circle-blue.svg"/> <b>Informação</b>
  </div>
<p>Esta funcionalidade permite que o integrador faça o estorno de um pagamento. Para isso, a cobrança deve atender aos seguintes critérios:</p>
<p>
<li>a cobrança deve ter o status <code>paid</code></li>
<li>não pode ter outro estorno para a mesma cobrança ainda em processamento</li>
<li>só pode ter um estorno por dia para a mesma cobrança (parcial)</li>
<li>a cobrança tem que ser do tipo cartão de crédito</li>
<li>o estorno parcial pode ser solicitado em até 90 dias após a confirmação do pagamento</li>
<li>o estorno total pode ser solicitado em até 360 dias após a confirmação do pagamento</li>
<li>o estorno não está disponível para vendas de marketplace</li></p>
  </div>

<br/>

## Retornar informações de transação existente 

Para retornar informações de uma transação, você deve enviar uma requisição <code>GET</code> para a rota <code>/v1/charge/:id</code>, onde <code>:id</code> é o <code>charge_id</code> da transação desejada.
   
<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/charge/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/billet/billet_id.md"/>
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  Parâmetro de entrada: informe a "charge_id" da transação desejada
  ``` 
  </TabItem>
 
  </Tabs>
  <br/>

  <b>Respostas</b>

  As respostas abaixo representam Sucesso(200) do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "charge_id": 391, // número da ID referente à transação gerada
      "total": 2500, // valor total da transação (em centavos, sendo 2500 = R$25,00)
      "status": "unpaid", //não foi possível confirmar o pagamento da cobrança. O termo "unpaid" equivale a "não pago".
      "reason": "Número do cartão inválido.", //motivo da recusa do cartão
      "custom_id": null, // identificador próprio opcional
      "created_at": "2022-08-16 11:33:52", // data e hora da criação da transação
      "notification_url": null,
      "items": [
        {
          "name": "Product 1", // nome de seu item, produto ou serviço
          "value": 150, // valor, em centavos. Por exemplo: 150 (equivale a R$ 1,50)
          "amount": 10 // quantidade do item ou produto
        }
      ],
      "history": [
        {
          "message": "Cobrança criada",
          "created_at": "2022-08-16 11:33:52"
        },
        {
          "message": "Pagamento via cartão de crédito aguardando confirmação",
          "created_at": "2022-08-16 11:33:52"
        },
        {
          "message": "Falha no pagamento - Número do cartão inválido.",
          "created_at": "2022-08-16 11:35:47"
        }
      ],
      "shippings": [
        {
          "name": "Sedex",
          "value": 1000,
          "payee_code": "473f6abd05d8a850a046395ed5544138"
        }
      ],
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "65366950031",
        "birth": "1977-01-15",
        "email": "gustavo@uol.com.br",
        "phone_number": "5144916523"
      },
      "payment": {
        "method": "credit_card",
        "created_at": "2022-08-16 11:33:52",
        "message": null,
        "credit_card": {
          "mask": "544969XXXXXX8502",
          "installments": 1,
          "installment_value": 2500,
          "address": {
            "street": "Street 3",
            "number": "10",
            "complement": null,
            "neighborhood": "Bauxita",
            "city": "Ouro Preto",
            "state": "MG",
            "zipcode": "35400000"
          }
        }
      }
    }
}
  ``` 
  </TabItem>

  </Tabs>

</details>

</div>

<br/>


## Incluir "notification_url" e "custom_id" em uma transação existente

Você pode definir ou modificar as informações enviadas na propriedade <code>metadata</code> da transação a qualquer momento. Este endpoint é de <b>extrema importância</b> para atualizar a URL de notificação vinculada às transações ou modificar o custom_id associado anteriormente.

Para alterar a <code>notification_url</code> e/ou <code>custom_id</code> de uma transação, você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/charge/:id/metadata</code>, onde <code>:id</code> é o <code>charge_id</code> da transação desejada.

<b>Casos de uso deste endpoint:</b>

<ol>
<li>A pessoa integradora alterou o IP do servidor que estava associado à URL de notificação das transações;</li>
<li>A pessoa integradora atualizou a URL de notificação para as novas transações que forem criadas (<code>createCharge</code>), mas precisa atualizar também as transações anteriores (<code>updateChargeMetadata</code>) que foram geradas e que estão associadas com a URL incorreta/desatualizada;</li>
<li>Foi instalado SSL (https) no servidor do cliente e mesmo que o cliente defina uma regra de redirecionamento 301 ou 302, será necessário definir a nova URL nas transações que estão usando a URL "antiga";</li>
<li>A pessoa integradora gerou cobranças sem informar a URL de notificação ao enviar a requisição de criação da transação;</li>
<li>Modificar ou acrescentar uma informação junto ao atributo <code>custom_id</code> associado às transações geradas previamente;</li>
<li>Dentre outros possíveis cenários.</li>
</ol>

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/metadata</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/billet/billet_url_de_retorno.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "notification_url": 'http://seu_dominio.com/notification',
    "custom_id": 'REF0001'
  }
  ``` 
  </TabItem>
  
  </Tabs>

  <br/>  
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // retorno HTTP "200" informando que o pedido foi bem sucedido
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

  ## Cancelar uma transação existente 

Uma transação pode ser cancelada apenas se ela possuir o status <code>new</code>, <code>waiting</code>, <code>unpaid</code> ou <code>link</code>.

Quando uma transação é cancelada, existe apenas uma condição para que o status seja alterado novamente: se o cliente imprimir o boleto antes que a pessoa integradora cancele a transação, ele poderá realizar o pagamento normalmente em uma agência bancária. Nesse caso, tanto a pessoa integradora quanto a pagadora recebem a confirmação do pagamento, e o status da cobrança é alterado de <code>canceled</code> para <code>paid</code>.

Para cancelar uma transação, como um boleto, você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/charge/:id/cancel</code>, onde <code>:id</code> é o <code>charge_id</code> da transação que você deseja cancelar.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge<HighlightVar>:id</HighlightVar>/cancel</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/billet/billet_id.md"/>
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
Parâmetro de entrada: informe a "charge_id" da transação desejada
  ``` 
  </TabItem>

  </Tabs>

  <br/>  
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // retorno HTTP "200" informando que o pedido foi bem sucedido
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

  ## Acrescentar descrição ao histórico de uma transação 
  
O histórico de uma transação mostra todas as ações que ocorreram até o momento, mas as mensagens personalizadas não afetam a transação em si, apenas aparecem no histórico.

Este pode ser visualizado tanto no detalhamento da transação pela interface quanto usando o <em>endpoint</em> de detalhes da transação.

Você pode visualizar o histórico tanto na interface de detalhes da transação quanto usando o endpoint de detalhes da transação.

Você pode visualizar o histórico da transação na interface ou usando o <em>endpoint</em> de detalhes da transação. Para isso, basta enviar o identificador `charge_id` e a mensagem que deseja adicionar ao histórico da transação. A descrição deve ter entre 1 e 255 caracteres.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/history</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/billet/billet_acrecentar_info_historico.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "description": "Camisa Polo tamanho G cor azul, cobrança Bolix, pix com boleto."
  }
  ``` 
  </TabItem>
 
  </Tabs>


  <br/>   
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // retorno HTTP "200" informando que o pedido foi bem sucedido
  }
  ```
  </TabItem>
  
  
  </Tabs>

</details>

</div>

<br/>

## Listar parcelas de acordo com a bandeira do cartão

O endpoint <code>installments</code> é utilizado para listar as parcelas de cada bandeira de cartão de crédito, já com os valores de juros e número de parcelas calculados de acordo com a conta integradora. Ou seja, se a sua conta possui uma configuração de juros para cartão de crédito (opção disponível para clientes que optaram por receber pagamentos de forma parcelada), você não precisa fazer nenhum cálculo adicional, pois esse endpoint já fornece os valores calculados automaticamente.

Bandeiras disponíveis: <code>visa</code>, <code>mastercard</code>, <code>amex</code>, <code>elo</code> e <code>hipercard</code>.
   
<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/installments</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/card/installments.md"/>
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
 Parâmetro de entrada: informe o "brand" (bandeira) e o "total" (valor total da compra) desejado
  ``` 
  </TabItem>
 
  </Tabs>
  <br/>

  <b>Respostas</b>

  A resposta abaixo representa Sucesso(200) do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "rate": 0,
      "name": "visa", // bandeira do cartão informada
      "installments": [
        {
          "installment": 1,
          "has_interest": false,
          "value": 1000, // valor da primeira parcela
          "currency": "10,00",
          "interest_percentage": 0
        },
        {
          "installment": 2,
          "has_interest": true,
          "value": 515, // valor da segunda parcela
          "currency": "5,15",
          "interest_percentage": 199
        }
      ]
    }
}
  ``` 
  </TabItem>
  </Tabs>

</details>

</div>

</div>