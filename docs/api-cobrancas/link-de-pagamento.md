---
id: link-de-pagamento
title: Link de pagamento
hide_title: true
sidebar_label: Link de pagamento
---
<h1 className="titulo">Link de pagamento</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Passo a passo para gerar um Link de Pagamento na API Efí
</div>

<br/>
<br/>

## Introdução

Este recurso permite criar um link para uma tela de pagamento da Efí.

Anteriormente, a pessoa integradora precisava criar sua própria tela de pagamento e usar os endpoints de criação de cobrança e definição de forma de pagamento, o que chamamos de "Checkout Transparente". Isso significa que o pagador não precisava sair do sistema do integrador para efetuar o pagamento da cobrança, e toda a comunicação com a Efí era realizada de forma transparente.

Atendendo a pedidos, **criamos a possibilidade de gerar um link para a tela de pagamento da Efí.**
Para quem precisa de uma ferramenta de integração mais prática, este endpoint possibilita que **a pessoa integradora escolha as formas de pagamento que deseja permitir (boleto bancário e/ou cartão de crédito)** e gere um link para a tela de pagamento da Efí. Desta forma, ela redireciona o pagador para o link gerado e não precisa se preocupar com a implementação de uma tela própria.

Tendo em vista que o pagador precisa se sentir seguro ao efetuar uma compra, nossa tela de pagamento permite configurações específicas para que seu cliente se sinta confortável em realizar a transação, mesmo sendo redirecionado para um domínio diferente do que estava anteriormente.

<br/>

## Criando o link de pagamento em _One Step_

Para criar um link de pagamento em _One Step_, basta enviar uma requisição <code>POST</code> para a rota <code>/v1/charge/one-step/link</code>, Em resposta, você receberá o o <code>payment_url</code> da transação.

Ao consumir o endpoint <code>/charge/one-step/link</code>, a cobrança ganha o status <code>link</code>. 
A pessoa integradora só precisa redirecionar o pagador para o link retornado na tag <code>payment_url</code> e todo o resto será realizado na tela de pagamento da Efí.

<div className="payment">
<details className="col-100">
  <summary>
<b>Estrutura hierárquica dos atributos do Schema que podem ser utilizados:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/charge/one-step/link', value: 'entrada', },
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
    "customer"
        "email"
    "settings"  
        "billet_discount"  
        "card_discount"  
        "conditional_discount"  
            "type"  
                "percentage",  
                "currency"  
            "value"  
            "until_date"  
        "message"  
        "expire_at"  
        "request_delivery_address"  
        "payment_method"  
            "banking_billet"  
            "credit_card"  
            "all"  
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/one-step/link</b>
  </summary>
<br/>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/link/link_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p> 
      
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Link de pagamento', value: 'exemplo1', },
    { label: 'Link de pagamento com Split', value: 'exemplo2', }
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "amount": 5,
        "name": "Game of Thrones",
        "value": 827
      },
      {
        "amount": 5,
        "name": "Dexter",
        "value": 620
      },
      {
        "amount": 2,
        "name": "Breaking Bad",
        "value": 750
      }
    ],
    "metadata": {
        "custom_id": "produto 1",
        "notification_url": "sua_url_notificação"
    },
    "customer": {
	      "email": "email_do_cliente@servidor.com.br"
	  },
    "shippings": [
      {
        "name": "Ouro Preto",
        "value": 500
      }
    ],
    "settings": {
      "billet_discount": 500,
      "card_discount": 300,
      "message": "Escreva aqui, se quiser, uma mensagem ao seu cliente, limite de 80 caracteres",
      "conditional_discount":{
        "type": "percentage", 
        "value": 100, 
        "until_date": "2021-12-30"
      },
      "payment_method": "all",
      "expire_at": "2025-02-08",
      "request_delivery_address": true
    }
}
  ```
  </TabItem>
    <TabItem value="exemplo2">

  ```json
{
    "items": [
      {
        "amount": 5,
        "name": "Game of Thrones",
        "value": 827,
        "marketplace": {
          "repasses": [
            {
              "payee_code": "payee_code1",
              "percentage": 2500
            }
          ]
        }
      }
    ],
    "metadata": {
        "custom_id": "produto 1",
        "notification_url": "sua_url_notificação"
    },
    "customer": {
	      "email": "email_do_cliente@servidor.com.br"
	  },
    "shippings": [
      {
        "name": "Ouro Preto",
        "value": 500
      }
    ], 
    "settings": {
      "billet_discount": 500,
      "card_discount": 300,
      "message": "Escreva aqui, se quiser, uma mensagem ao seu cliente, limite de 80 caracteres",
      "conditional_discount":{
        "type": "percentage", 
        "value": 100, 
        "until_date": "2021-12-30"
      },
      "payment_method": "all",
      "expire_at": "2025-02-08",
      "request_delivery_address": true
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
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200,
    "data": {
      "charge_id": 3714507,
      "status": "link",
      "total": 8863,
      "custom_id": "cross-media soft",
      "payment_url": "https://pagamento.gerencianet.com.br/:identificador",
      "payment_method": "all",
      "billet_discount": 500,
      "card_discount": 300,
      "conditional_discount_value": 100,
      "conditional_discount_type": "percentage",
      "conditional_discount_date": "2021-12-30",
      "request_delivery_address": true,
      "message": "teste",
      "expire_at": "2025-02-08",
      "created_at": "2021-11-09 11:14:36"
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Criando o link de pagamento em _Two Steps_

Primeiramente, você precisa criar a transação, informando os detalhes do item/produto/serviço, valor e quantidade. Em seguida, essa transação deve ser associada a um link de pagamento.

### 1. Crie a transação
Primeiramente, precisamos gerar a transação (também chamada de "cobrança"). É neste momento que será informado o nome do item/produto/serviço, valor da transação, quantidade, dentre outras informações possíveis.

Após criá-la, será retornado o <code>charge_id</code>, que é o identificador único da transação e que será utilizado para associar à forma de pagamento.

Assim que essa transação é criada, ela recebe o status <code>new</code>, que significa que a cobrança foi gerada e está aguardando definição da forma de pagamento. Essa cobrança somente terá seu status alterado quando o integrador definir sua forma de pagamento.

Para gerar uma transação, você deve enviar uma requisição <code>POST</code> para a rota <code>/v1/charge</code>.

<div className="payment">
<details className="col-100">
  <summary>
<b>Estrutura hierárquica dos atributos do Schema que podem ser utilizados:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/charge', value: 'entrada', },
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

### 2. Crie um link de pagamento

Agora que a transação já foi criada e você já possui o <code>charge_id</code>, é preciso associá-lo para obter o link de pagamento.

Basta enviar uma requisição <code>POST</code> para a rota <code>/v1/charge/:id/link</code> para gerar um link de pagamento.

<div className="payment">
<details className="col-100">
  <summary>
<b>Estrutura hierárquica dos atributos do Schema que podem ser utilizados:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/charge/:id/link', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 

    "billet_discount"  
    "card_discount"  
    "conditional_discount"  
        "type"  
            "percentage",  
            "currency"  
        "value"  
        "until_date"  
    "message"  
    "expire_at"  
    "request_delivery_address"  
    "payment_method"  
        "banking_billet"  
        "credit_card"  
        "all"  
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/link</b>
  </summary>

  <div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Para se criar um "link de pagamento" (<code>chargeLink</code>), uma "transação" (<code>createCharge</code>) previamente criada deverá ser informada.</p>
<p>Logo, se houver uma tentativa de pagamento e, por alguma razão, não houver sucesso na confirmação do pagamento (ex: cartão recusado, cliente deseja pagar por outra forma, etc), uma nova transação deverá ser gerada e associada a um novo link de pagamento, pois a transação anterior estará com status de <code>waiting</code> ou <code>unpaid</code>, o que significa que devido a tentativa de pagamento, ela já foi atrelada a um método de pagamento.</p>
</div>
<br/>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/link/link_two_steps_2.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', }
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "message": "Escreva aqui, se quiser, uma mensagem ao seu cliente, limite de 80 caracteres",
    "payment_method": "all",
    "expire_at": "2012-12-20",
    "request_delivery_address": false,
    "billet_discount": 5000,
    "card_discount": 3000
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
    "code": 200,
    "data": {
      "charge_id": 148003,
      "status": "link",
      "total": 5990,
      "custom_id": null,
      "payment_url": "https://pagamento.gerencianet.com.br/:identificador",
      "payment_method": "all",
      "created_at": "2016-12-14 11:31:37"
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>

  ## Retornar informações de um link de pagamento

Para retornar informações de um link, você deve enviar uma requisição <code>GET</code> para a rota <code>/v1/charge/:id</code>.
   
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
      { label: '🟢 200 (Bolix)', value: 'saida', },
      { label: '🟢 200 (Boleto tradicional)', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "charge_id": 1234567, // número da ID referente à transação gerada
      "total": 8900, // valor total da transação (em centavos, sendo 8900 = R$89,00)
      "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento (o termo "waiting" equivale a "aguardando")
      "custom_id": null, // identificador próprio opcional
      "created_at": "2022-10-31 10:18:21", // data e hora da criação da transação
      "notification_url": null,
      "items": [
        {
          "name": "Meu Produto", // nome de seu item, produto ou serviço
          "value": 8900, // valor, em centavos. Por exemplo: 8900 (equivale a R$ 89,00)
          "amount": 1 // quantidade do item ou produto
        }
      ],
      "history": [
        {
          "message": "Cobrança criada",
          "created_at": "2222-10-31 10:18:21"
        },
        {
          "message": "Pagamento via boleto aguardando confirmação",
          "created_at": "2022-10-31 10:19:05"
        }      
      ],
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "phone_number": "5144916523",
        "address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "complement": null,
          "neighborhood": "Bauxita",
          "city": "Ouro Preto",
          "state": "MG",
          "zipcode": "35400000"
        }
      },
      "payment": {
        "method": "banking_billet", // forma de pagamento da cobrança (banking_billet equivale a boleto bancário)
        "created_at": "2022-10-31 10:19:05",
        "message": "Usando o atributo message, este conteúdo é exibido no campo OBSERVAÇÃO da cobrança emitida via API 
         e também no campo OBSERVAÇÃO DO VENDEDOR nos e-mails de cobrança enviados ao cliente 
         É possível utilizar até 4 linhas de conteúdo, com no máximo 100 caracteres por linha 
         Essa mensagem poderá ser vista nos e-mails relacionados à cobrança, no boleto ou carnê",
        "banking_billet": {
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
          "pix":{
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode ou copia e cola
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code imagem
          },
        "link": "link_https_para_acesso_ao_boleto", // link do Bolix gerado
        "pdf": {
          "charge": "link_https_do_pdf_da_cobranca" // link do PDF do Bolix
        },
        "expire_at": "2023-12-30", // data de vencimento da cobrança no seguinte formato: 2022-12-30 (ou seja, equivale a 30/12/2022)
        "configurations": {
          "interest": 33, // valor cobrado de juros por dia após a data de vencimento (neste caso, 33 equivale a 0,033%)
          "fine": 200 // valor cobrado de multa após o vencimento (neste caso, 200 equivale a 2%)
        }
      }
    }
}
  ``` 
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "charge_id": 1234567, // número da ID referente à transação gerada
      "total": 8900, // valor total da transação (em centavos, sendo 8900 = R$89,00)
      "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento (o termo "waiting" equivale a "aguardando")
      "custom_id": null, // identificador próprio opcional
      "created_at": "2022-10-31 10:18:21", // data e hora da criação da transação
      "notification_url": null,
      "items": [
        {
          "name": "Meu Produto", // nome de seu item, produto ou serviço
          "value": 8900, // valor, em centavos. Por exemplo: 8900 (equivale a R$ 89,00)
          "amount": 1 // quantidade do item ou produto
        }
      ],
      "history": [
        {
          "message": "Cobrança criada",
          "created_at": "2222-10-31 10:18:21"
        },
        {
          "message": "Pagamento via boleto aguardando confirmação",
          "created_at": "2022-10-31 10:19:05"
        }      
      ],
      "customer": {
        "name": "Gorbadoc Oldbuck",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "phone_number": "5144916523",
        "address": {
          "street": "Avenida Juscelino Kubitschek",
          "number": "909",
          "complement": null,
          "neighborhood": "Bauxita",
          "city": "Ouro Preto",
          "state": "MG",
          "zipcode": "35400000"
        }
      },
      "payment": {
        "method": "banking_billet", // forma de pagamento da cobrança (banking_billet equivale a boleto bancário)
        "created_at": "2022-10-31 10:19:05",
        "message": "Usando o atributo message, este conteúdo é exibido no campo OBSERVAÇÃO da cobrança emitida via API 
         e também no campo OBSERVAÇÃO DO VENDEDOR nos e-mails de cobrança enviados ao cliente 
         É possível utilizar até 4 linhas de conteúdo, com no máximo 100 caracteres por linha 
         Essa mensagem poderá ser vista nos e-mails relacionados à cobrança, no boleto ou carnê",
        "banking_billet": {
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
          "link": "link_https_para_acesso_ao_boleto", // link da transação gerada
          "pdf": {
            "charge": "link_https_do_pdf_da_cobranca" // link do PDF da cobrança
          },
          "expire_at": "2023-12-30", // data de vencimento da cobrança no seguinte formato: 2022-12-30 (ou seja, equivale a 30/12/2022)
          "configurations": {
            "interest": 33, // valor cobrado de juros por dia após a data de vencimento (neste caso, 33 equivale a 0,033%)
            "fine": 200 // valor cobrado de multa após o vencimento (neste caso, 200 equivale a 2%)
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

Para alterar a <code>notification_url</code> e/ou <code>custom_id</code> de uma transação, você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/charge/:id/metadata</code>.

<b>Casos de uso deste endpoint:</b>

<ol>
<li>A pessoa integradora alterou o IP do servidor que estava associado à URL de notificação das transações;</li>
<li>A pessoa integradora atualizou a URL de notificação para as novas transações criadas (<code>createCharge</code>), mas precisa atualizar também as transações anteriores (<code>updateChargeMetadata</code>) e que estão associadas com a URL incorreta ou desatualizada;</li>
<li>Foi instalado SSL (https) no servidor do cliente e, mesmo que o cliente defina uma regra de redirecionamento 301 ou 302, será necessário definir a nova URL nas transações que estão usando a URL "antiga";</li>
<li>A pessoa integradora gerou cobranças sem informar a URL de notificação ao enviar a requisição de criação da transação;</li>
<li>Modificar ou acrescentar uma informação junto ao atributo <code>custom_id</code> associado às transações geradas previamente; e outros cenários possíveis. </li>
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

## Alterar determinados parâmetros/atributos de um link de pagamento existente

Permite atualizar (alterar) determinados parâmetros e atributos de um link de pagamento criado através do <code>PUT /v1/charge/:id/link</code>, desde que não tenha ocorrido a confirmação do pagamento.

Algumas informações que são passíveis de serem atualizadas/alteradas em um link de pagamento:

- Forma de pagamento permitida;
- Descontos de boleto e cartão;
- Inserção de descontos (inclusive condicionais);
- Mensagem informativa ao cliente;
- Data de vencimento do link de pagamento;
- Solicitação (ou não) do endereço de entrega do comprador.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/link</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
           <Modal filename="/markdown/charges/link/link_alterar_atributos.md" />
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
    "billet_discount": 500,
    "card_discount" : 200,
    "expire-at": "2024-12-15"
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
    "code": 200,
    "data": {
      "charge_id": 3714507,
      "status": "link",
      "total": 8863,
      "payment_url": "https://pagamento.gerencianet.com.br/:identificador",
      "payment_method": "all",
      "billet_discount": 500,
      "card_discount": 200,
      "conditional_discount_value": 100,
      "conditional_discount_type": "percentage",
      "conditional_discount_date": "2021-12-30",
      "request_delivery_address": true,
      "message": "teste",
      "expire_at": "2024-12-15",
      "created_at": "2021-11-09 11:14:36"
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>


  ## Cancelar um link de pagamento existente 

Quando uma transação é cancelada, há apenas uma condição para que o status seja alterado novamente: se o cliente imprimir o boleto antes do integrador cancelar a transação, ele poderá efetuar o pagamento normalmente em uma agência bancária. Nesse caso, tanto a pessoa integradora quanto a pessoa pagadora receberão a confirmação do pagamento como de costume, e o status da cobrança será alterado de <code>canceled</code> para <code>paid</code>.

Para cancelar uma transação (por exemplo, cancelar um boleto), você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/charge/:id/cancel</code>.

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
  
 O histórico de uma transação representa todas as ações que ocorreram com esta transação até o presente momento. As mensagens personalizadas não influenciam na transação em si, apenas em seu histórico.

Você pode visualizar o histórico tanto na página de detalhes da transação na interface quanto utilizando o <em>endpoint</em> específico para obter os detalhes da transação.

Para adicionar uma mensagem personalizada ao histórico da transação, você precisa enviar o <code>charge_id</code> (identificador único da transação) e a mensagem que deseja adicionar. A mensagem deve ter no mínimo um caractere e no máximo 255 caracteres.

Para fazer isso, basta enviar uma requisição <code>POST</code> para a rota <code>/v1/charge/:id/history</code>.

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

  ## Reenviar link de pagamento por e-mail
  
Uma transação que possui <code>link</code> e cujo status é <code>Link de pagamento</code> , pode ter o seu link reenviado por e-mail.

Para fazer isso, você só precisa fornecer o <code>charge_id</code> (identificador único da transação) e o endereço de e-mail válido para o qual deseja enviar o link da tela de pagamento.

Para reenviar um link de pagamento por e-mail, você deve enviar uma requisição <code>POST</code> para a rota <code>/v1/charge/:id/link/resend</code>.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/link/resend</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/billet/billet_resend_email.md" />
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
    "email": "email_do_cliente@servidor.com.br"
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


</div>