---
id: boleto
title: Boleto
hide_title: true
sidebar_label: Boleto
---
<h1 className="titulo">Boleto</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Passo a passo para gerar boleto bancário na API Efí
</div>

<br/>
<br/>

Atualmente disponibilizamos dois procedimentos para a criação de uma transação do tipo Boleto bancário. Na primeira delas o titulo é criado em um passo único, assim fora convencionado como One Step. A segunda opção de criação da transação se da em dois passos, sendo assim convencionada como Two Steps. 


## Criação de Boleto (Bolix) em One Step (Um passo)

Nesta opção é necessário que o body da requisição contenha todos os atributos mínimos obrigatórios para a emissão do titulo.

Permite criar uma transação já associando um método de pagamento, podendo ser boleto bancário ou cartão de crédito, em apenas uma etapa.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Para garantir que a criação de transações via One Step ocorra sem problemas, é necessário atualizar a sua SDK. Todos os arquivos necessários para essa atualização estão disponíveis através de nosso <a href="https://github.com/efipay" target="_blank">repositório</a> e na nossa documentação.</p>
</div>
<br/>

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Como definir a baixa automática de boletos após vencimento</b>
</div>
<p>Agora você pode definir o prazo para baixa de boletos vencidos de acordo com suas necessidades. Ateriormente, o prazo era fixo em 89 dias e não permitia alterações, agora você pode escolher um prazo que varia de <strong>0 a 120 dias</strong>.</p>
<p>Para configurar o prazo, basta definir o número de dias no atributo <code>days_to_write_off</code>. Por exemplo, se você indicar 0 e a cobrança vencer em 28/02/2024, o pagamento não será mais possível a partir de 29/02/2024.</p>
</div>
<br/>

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Defina juros mensais ou diários</b>
</div>
<p>Você pode definir se os juros serão calculados mensalmente ou diariamente, de acordo com suas necessidades e preferências específicas. Basta informar o tipo de juros desejado no momento da transação como <strong>monthly</strong>.</p>
<p>Caso opte por não especificar o tipo de juros, por padrão os juros serão calculados diariamente. </p>

</div> 
<br/>

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
      "banking_billet"  
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
          "expire_at"  
          "discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
          "conditional_discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
              "until_date"  
          "configurations"   
              "days_to_write_off" 
              "fine"
              "interest"  
                  "value"
                  "type"
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
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/billet/billet_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Exemplo 1 (CPF)', value: 'exemplo1', },
    { label: 'Exemplo 2 (CNPJ)', value: 'exemplo2', },
    { label: 'Exemplo 3 (days_to_write_off)', value: 'exemplo3', },
    { label: 'Exemplo 4 (Juros mensais)', value: 'exemplo4', },
    ]}>
    
  <TabItem value="exemplo1">

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
      "banking_billet": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "phone_number": "5144916523",
          "address": {
            "street": "Avenida Juscelino Kubitschek",
            "number": "909",
            "neighborhood": "Bauxita",
            "zipcode": "35400000",
            "city": "Ouro Preto",
            "complement": "",
            "state": "MG"
          }
        },
        "expire_at": "2023-12-15",
        "configurations": {
          "fine": 200,
          "interest": 33
        },
        "message": "Usando o atributo message, este conteúdo é exibido no campo OBSERVAÇÃO da cobrança emitida via API 
         e também no campo OBSERVAÇÃO DO VENDEDOR nos e-mails de cobrança enviados ao cliente 
         É possível utilizar até 4 linhas de conteúdo, com no máximo 100 caracteres por linha 
         Essa mensagem poderá ser vista nos e-mails relacionados à cobrança, no boleto ou carnê"
      }
    }
}
  ``` 
  </TabItem>
  <TabItem value="exemplo2">

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
      "banking_billet": {
        "customer": {
          "email": "email_do_cliente@servidor.com.br",
          "phone_number": "5144916523",
          "juridical_person":{
            "corporate_name": "Nome da Empresa", 
            "cnpj": "99794567000144" 
          },
          "address": {
            "street": "Avenida Juscelino Kubitschek",
            "number": "909",
            "neighborhood": "Bauxita",
            "zipcode": "35400000",
            "city": "Ouro Preto",
            "complement": "",
            "state": "MG"
          }
        },
        "expire_at": "2023-12-15",
        "configurations": {
          "fine": 200,
          "interest": 33
        },
        "message": "Essa cobrança pode ser paga pelo código de barras e pelo QR Code"
      }
    }
}
  ```
  </TabItem>
  <TabItem value="exemplo3">

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
      "banking_billet": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "phone_number": "5144916523",
          "address": {
            "street": "Avenida Juscelino Kubitschek",
            "number": "909",
            "neighborhood": "Bauxita",
            "zipcode": "35400000",
            "city": "Ouro Preto",
            "complement": "",
            "state": "MG"
          }
        },
        "expire_at": "2023-12-15",
        "configurations": {
          "days_to_write_off": 40,
          "fine": 200,
          "interest": 33
        },
        "message": "Usando o atributo message, este conteúdo é exibido no campo OBSERVAÇÃO da cobrança emitida via API 
         e também no campo OBSERVAÇÃO DO VENDEDOR nos e-mails de cobrança enviados ao cliente 
         É possível utilizar até 4 linhas de conteúdo, com no máximo 100 caracteres por linha 
         Essa mensagem poderá ser vista nos e-mails relacionados à cobrança, no boleto ou carnê"
      }
    }
}
  ``` 
  </TabItem>
  <TabItem value="exemplo4">

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
      "banking_billet": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "phone_number": "5144916523",
          "address": {
            "street": "Avenida Juscelino Kubitschek",
            "number": "909",
            "neighborhood": "Bauxita",
            "zipcode": "35400000",
            "city": "Ouro Preto",
            "complement": "",
            "state": "MG"
          }
        },
        "expire_at": "2023-12-15",
        "configurations": {
          "fine": 200,
           "interest" : {
              "value": 330,
              "type": "monthly"
            }
        },
        "message": "Usando o atributo message, este conteúdo é exibido no campo OBSERVAÇÃO da cobrança emitida via API 
         e também no campo OBSERVAÇÃO DO VENDEDOR nos e-mails de cobrança enviados ao cliente 
         É possível utilizar até 4 linhas de conteúdo, com no máximo 100 caracteres por linha 
         Essa mensagem poderá ser vista nos e-mails relacionados à cobrança, no boleto ou carnê"
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
      { label: '🟢 200 (Bolix)', value: 'saida', },
      { label: '🟢 200 (Boleto tradicional)', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // linha digitável do boleto
      "pix":{
        "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode ou copia e cola
        "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code imagem
      },
      "link": "link_https_para_acesso_o_bolix", // link responsivo do Bolix gerado
      "billet_link":"link_https_para_acesso_o_bolix", // link do Bolix gerado
      "pdf": {
        "charge": "link_https_do_pdf_da_cobranca" // link do PDF do Bolix
      },
      "expire_at": "2023-12-15", // data de vencimento do boleto no seguinte formato: 2022-12-15 (ou seja, equivale a 15/12/2022)
      "charge_id": numero_charge_id, // número da ID referente à transação gerada
      "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento ("waiting" equivale a "aguardando")
      "total": 5990, // valor, em centavos. Por exemplo: 5990 (equivale a R$ 59,90)
      "payment": "banking_billet" // forma de pagamento associada à esta transação ("banking_billet" equivale a "boleto bancário")
    }
}
  ```
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // linha digitável do boleto
      "link": "link_https_para_acesso_o_boleto", // link responsivo do Boleto
      "billet_link":"link_https_para_acesso_o_boleto", // link do Boleto
      "pdf": {
        "charge": "link_https_do_pdf_da_cobranca" // link do PDF 
      },
      "expire_at": "2023-12-15", // data de vencimento do boleto no seguinte formato: 2022-12-15 (ou seja, equivale a 15/12/2022)
      "charge_id": numero_charge_id, // número da ID referente à transação gerada
      "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento ("waiting" equivale a "aguardando")
      "total": 5990, // valor, em centavos. Por exemplo: 5990 (equivale a R$ 59,90)
      "payment": "banking_billet" // forma de pagamento associada à esta transação ("banking_billet" equivale a "boleto bancário")
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
<p>Ao usar o atributo <code>message</code>, deve-se utilizar o operador <code>\n</code> para efetuar a "quebra" da linha. No código que disponibilizamos já incluímos este operador.</p>
</div>

<br/>


## Criação de Boleto em Two Steps (Dois passos)
Nesta opção é necessário seguir dois passos, enviando o _body_ da requisição com todos os atributos mínimos obrigatórios para a emissão da cobrança.

<ol>
<li>Crie a transação, informando o item/produto/serviço, valor, quantidade, etc;</li>
<li>Associe à forma de pagamento via boleto, informando o <code>charge_id</code> da transação e os dados do cliente.</li>
</ol>

O restante desta página apresenta os procedimentos detalhados, mas você precisa instalar uma de nossas bibliotecas em seu servidor para executar os códigos de exemplo. <a href="/docs/sdk/introducao" target="_blank">Certifique-se de que a SDK da Efí foi instalada.</a>

### 1. Criar transação

Para começar, o primeiro passo é gerar a transação, também conhecida como “cobrança”. Nesse momento, você informará o nome do item, produto ou serviço, o valor da transação, a quantidade e outras informações relevantes.

Após a criação da cobrança, você receberá um <code>charge_id</code>que é um identificador único para essa transação. Esse será usado para associar a forma de pagamento.

Inicialmente, a transação terá o status <code>new</code>, o que significa que a cobrança foi gerada e está aguardando a definição da forma de pagamento. O status será atualizado somente quando o método de pagamento for escolhido pela pessoa integradora.

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


### 2. Associar à forma de pagamento via boleto

Após gerar a transação com sucesso, o próximo passo é associá-la à forma de pagamento desejada - neste caso, será o <code>banking_billet</code>(boleto bancário). Para isso, você precisará informar o <code>charge_id</code> que foi obtido ao criar a transação.

Ao selecionar o boleto bancário como forma de pagamento, o status da transação será alterado de <code>new</code> para <code>waiting</code>Essa mudança indica que a forma de pagamento foi escolhida e está aguardando a confirmação do pagamento.

Para associar à forma de pagamento, você deve enviar uma requisição <code>POST</code> para a rota <code>/v1/charge/:id/pay</code>.

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
      "banking_billet"  
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
          "expire_at"  
          "discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
          "conditional_discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
              "until_date"  
          "configurations"  
              "days_to_write_off" 
              "fine"
              "interest"  
                  "value"
                  "type"  
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
          <Modal filename="/markdown/charges/billet/billet_two_steps_2.md" />
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
      "banking_billet": {
        "customer": {
          "name": "Gorbadoc Oldbuck",
          "cpf": "94271564656",
          "email": "email_do_cliente@servidor.com.br",
          "phone_number": "5144916523",
          "address": {
            "street": "Avenida Juscelino Kubitschek",
            "number": "909",
            "neighborhood": "Bauxita",
            "zipcode": "35400000",
            "city": "Ouro Preto",
            "complement": "",
            "state": "MG"
          }
        },
        "expire_at": "2023-12-30",
        "configurations": {
          "days_to_write_off": 40,
          "fine": 105,
          "interest" : {
            "value": 330,
            "type": "monthly"
          }
        },
        "message": "Pague pelo código de barras ou pelo QR Code"
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
      { label: '🟢 200 (Bolix)', value: 'saida', },
      { label: '🟢 200 (Boleto tradicional)', value: '200', }
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // linha digitável do boleto
      "pix":{
        "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode ou copia e cola
        "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code imagem
      },
      "link": "link_https_para_acesso_o_bolix", // link responsivo do Bolix gerado
      "billet_link":"link_https_para_acesso_o_bolix", // link do Bolix gerado
      "pdf": {
        "charge": "link_https_do_pdf_da_cobranca" // link do PDF do Bolix
      },
      "expire_at": "2023-12-30", // data de vencimento do boleto no seguinte formato: 2022-12-15 (ou seja, equivale a 15/12/2022)
      "charge_id": numero_charge_id, // número da ID referente à transação gerada
      "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento ("waiting" equivale a "aguardando")
      "total": 8900, // valor, em centavos. Por exemplo: 5990 (equivale a R$ 59,90)
      "payment": "banking_billet" // forma de pagamento associada à esta transação ("banking_billet" equivale a "boleto bancário")
    }
}
  ```
  </TabItem>

  <TabItem value="200">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // linha digitável do boleto
      "link": "link_https_para_acesso_o_bolix", // link responsivo do Boleto gerado
      "billet_link":"link_https_para_acesso_o_bolix", // link do Boleto gerado
      "pdf": {
        "charge": "link_https_do_pdf_da_cobranca" // link do PDF
      },
      "expire_at": "2023-12-30", // data de vencimento do boleto no seguinte formato: 2022-12-15 (ou seja, equivale a 15/12/2022)
      "charge_id": numero_charge_id, // número da ID referente à transação gerada
      "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento ("waiting" equivale a "aguardando")
      "total": 8900, // valor, em centavos. Por exemplo: 5990 (equivale a R$ 59,90)
      "payment": "banking_billet" // forma de pagamento associada à esta transação ("banking_billet" equivale a "boleto bancário")
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
<p>O cliente associado à transação pode ser uma Pessoa Jurídica. Nesse caso, é necessário informar a Razão Social e o CNPJ da empresa pagadora no atributo <code>juridical_person</code>.</p>

</div>
<br/>

<div className="admonition admonition admonition_tip">
<div>
    <img src="/img/lightbulb-on-green.svg"/> <b>Relação de todos os possíveis status de uma transação</b>
</div>
<p>Todas as transações possuem um status que representa sua “situação”. É importante conhecer os possíveis status das transações na API para lidar adequadamente com elas em seu sistema.</p>
<p>Confira <a href="/docs/api-cobrancas/status" target="_blank">aqui</a> todos os detalhes dos possíveis status das transações.</p>
</div>
<br/>

<div className="admonition admonition_tip">
  <div>
  <img src="/img/lightbulb-on-green.svg"/> <b>Callbacks (notificações) das transações da API para seu sistema</b>
  </div>
<p>As notificações permitem que você seja informado quando uma transação tiver seu status alterado. Dessa forma, você poderá identificar quando um boleto for pago, por exemplo.</p>
<p>Confira <a href="/docs/api-cobrancas/notificacoes" target="_blank">aqui</a> todos os detalhes sobre como implementar a sua URL de notificação.</p>
  </div>

<br/>

  ## Retornar informações de transação existente 

Para retornar informações de uma transação (como um boleto, por exemplo), você deve enviar uma requisição <code>GET</code> para a rota <code>/v1/charge/:id</code>.
   
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
            <Modal filename="/markdown/charges/billet/billet_id.md" />
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
            "days_to_write_off": 40, //dias para baixa automática do boleto após o vencimento
            "interest_type": "daily", //tipo de juros - daily se for diário ou monthly se for mensal
            "interest": 33, // valor cobrado de juros por dia após a data de vencimento (neste caso, 33 equivale a 0,033%)
            "fine": 200 // valor cobrado de multa após o vencimento (neste caso, 200 equivale a 2%)
          }
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

Você pode definir ou modificar as informações enviadas na propriedade <code>metadata</code> da transação a qualquer momento. Este endpoint é de <b>extrema importância</b>para atualizar a URL de notificação vinculada às transações ou modificar o custom_id associado anteriormente.

Para alterar a <code>notification_url</code> e/ou <code>custom_id</code> de uma transação, você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/charge/:id/metadata</code>.

<b>Casos de uso deste endpoint:</b>

<ol>
<li>A pessoa integradora alterou o IP do servidor que estava associado à URL de notificação das transações;</li>
<li>A pessoa integradora atualizou a URL de notificação para as novas transações criadas (<code>createCharge</code>), mas precisa atualizar as transações anteriores (<code>updateChargeMetadata</code>) que foram geradas e que estão associadas com a URL incorreta/desatualizada;</li>
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
 

  ## Alterar data de vencimento de uma transação existente

   Possibilita alterar a data de vencimento de uma transação cuja forma de pagamento seja <code>banking_billet</code> (boleto bancário) e que ainda não foi paga.

  Para tal, é necessário que você informe o <code>charge_id</code> da transação desejada e a nova data de vencimento em formato <code>YYYY-MM-DD</code> dentro do atributo <code>expire_at</code>. Deve-se enviar uma requisição <code>PUT</code> para a rota <code>/v1/charge/:id/billet</code>.

  <div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>A nova data de vencimento deve ser pelo menos <em>maior</em>  que a data atual.</p>
</div>
<br/>

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/billet</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/billet/billet_alterar_data_de_vencimento.md" />
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
    "expire_at": "2023-12-30"
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

Quando uma transação é cancelada, há apenas uma condição para que o status seja alterado novamente: se o cliente imprimir o boleto antes do integrador cancelar a transação, ele poderá efetuar o pagamento normalmente em uma agência bancária. Nesse caso, tanto a pessoa integradora quanto a pessoa pagadora receberão a confirmação do pagamento como de costume, e o status da cobrança será alterado de <code>canceled</code> para <code>paid</code>.

Para cancelar uma transação (por exemplo, cancelar um boleto), você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/charge/:id/cancel</code>.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/cancel</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/billet/billet_id.md" />
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

  ## Reenvio do boleto bancário para o email desejado 
  
Se a transação for um boleto bancário <code>banking_billet</code>  e estiver com o status <code>waiting</code> ou <code>unpaid</code>, é possível reenviar o boleto por e-mail.

Basta enviar o <code>charge_id</code> da transação e o endereço de e-mail válido para o qual deseja enviar o boleto.

Para reenviar um boleto por e-mail, você deve enviar uma requisição <code>POST</code> para a rota <code>/v1/charge/:id/billet/resend</code>.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/billet/resend</b>
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



<br/>

  ## Acrescentar descrição ao histórico de uma transação 
  
O histórico de uma transação mostra todas as ações que ocorreram até o momento, mas as mensagens personalizadas não afetam a transação em si, apenas aparecem no histórico. Você pode visualizar o histórico da transação na interface ou usando o <em>endpoint</em> de detalhes da transação.

Para isso, basta enviar o identificador <code>charge_id</code> e a mensagem que deseja adicionar ao histórico da transação. A descrição deve ter entre 1 e 255 caracteres.

Para adicionar mensagens personalizadas no histórico de uma transação, você deve enviar uma requisição <code>POST</code> para a rota <code>/v1/charge/:id/history</code>.

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

  ## Definir que a transação será do tipo boleto balancete 
  
Após a criação da transação, será o momento de definirmos que o boleto a ser gerado será do tipo balancete.

Para isso, você deve enviar uma requisição <code>POST</code> para a rota <code>/v1/charge/:id/balance-sheet</code>.

<div className="admonition admonition_info">
  <div>
    <img src="/img/info-circle-blue.svg"/> <b>NOTA</b>
  </div>
É importante destacar que não há um padrão fixo para os itens exibidos no boleto balancete. A própria pessoa integradora poderá definir, através dos atributos adequados, a quantidade de colunas (até 4), linhas, textos e valores que serão mostrados no boleto. De forma resumida, a pessoa integradora trabalha com uma tabela construída em HTML, mas em formato JSON.
</div>
<br/>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/balance-sheet</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/billet/billet_balancete.md" />
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
    "title": "Balancete Demonstrativo - Periodo 25/06/2018 a 25/07/2018",
    "body": [{
      "header": "Demonstrativo de Consumo",
      "tables": [{
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Despesa de condomínio:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Total lançado",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "Rateio",
          "colspan": 1
        }],
        [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Vigilância Contratado:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 300,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 75,00",
          "colspan": 1
        }], 
        [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Zeladoria Contratado:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 130,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 32,00",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Jardinagem:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 80,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 20,00",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Tarifa Bancária:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 10,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 2,50",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Despesa condomínio:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 800,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 320,00",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Reforma de prédio:",
          "colspan": 2
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 350,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 140,00",
          "colspan": 1
        }],  [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Investimentos:",
          "colspan": 1
        },
        {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "Total:",
          "colspan": 1
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 1320,00",
          "colspan": 1
        },
        {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 450,00",
          "colspan": 1
        }], [{
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": " ",
          "colspan": 1
        },{
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "Total:",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 350,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 140,00",
          "colspan": 1
        }]]
      },
      {
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Despesas de Consumo",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de gás:",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Data: 25/11/2017",
          "colspan": 3
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Anterior",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Atual Consumo",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "g/l",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "Total",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "49,000000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "63,000000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "14,000000",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 53,50",
          "colspan": 1
        }]]
      }, 
      {
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de água:",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Data: 25/11/2017",
          "colspan": 3
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Anterior",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Atual Consumo",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "m³",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "Total",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "112,500000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "114,900000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "2,400000",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 43,00",
          "colspan": 1
        }]]
      }, 
      {
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de esgoto:",
          "colspan": 1
        },
        {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Data: 25/11/2017",
          "colspan": 3
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Anterior",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Atual Consumo",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "m³",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "Total",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "0,000000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "0,000000",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "0,00",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 34,40",
          "colspan": 1
        }]] 
      }, { 
          "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "Resumo do rateio",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Despesas de condomínio",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 450,00",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Investimento",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 140,00",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Fundo de reserva 10%",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 79,59",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de gás",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 53,50",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de água",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 43,00",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Leitura de esgoto",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 34,40",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Garagens",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 5,00",
          "colspan": 2
        }],  [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Taxa de administradora",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 25,00",
          "colspan": 2
        }], [{
          "align": "right",
          "color": "#DC143C",
          "style": "bold",
          "text": "Total geral:",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "R$ 823,49",
          "colspan": 2
        }]]
      }]
    },
    {
      "header": "Balancete Geral",
      "tables": [{
        "rows": [[{
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "RECEITAS",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "RECEITAS DE CONDOMÍNIO",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 2.090,12",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "100,00%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Taxa de Condominio",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 1.030,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "49,28%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Investimentos",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 280,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "13,40%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Gás",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 50,73",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "2,43%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Garagens",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 23,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "1,10%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Reserva Técnica",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 183,19",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "8,67%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Água",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 249,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "11,91%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Esgoto",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 199,20",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "9,53%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Taxa Administradora",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 75,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "3,59%",
          "colspan": 1
        }]] }, {
        "rows": [[{
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "DESPESAS",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "DESPESAS DE CONDOMÍNIO",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 1.670,12",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "100,00%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "DESPESAS DE AQUISIÇÕES",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Despesas de condomínio",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 800,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "47,90%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Reformas do prédio",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 350,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "20,96%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": " ",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 1.150,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "68,86%",
          "colspan": 1
        }]] } , {
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "DESPESAS COM SERVIÇOS",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Vigilância Contratado",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 300,00",
          "colspan": 1
        },  {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "17,96%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Zeladoria Contratado",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 130,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "7,78%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Serviço de Jardinagem",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 80,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "4,79%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": " ",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 510,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "30,54%",
          "colspan": 1
        }]]} , {
        "rows": [[{
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "DESPESAS BANCÁRIAS",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Tarifa Bancária",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 10,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "0,60%",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": " ",
          "colspan": 2
        }, {
          "align": "center",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 10,00",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "bold",
          "text": "0,60%",
          "colspan": 1
        }]] } , {
        "rows": [[{
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "Resumo de Prestação de Contas",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "RECEITAS",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 2.090,12",
          "colspan": 2
        }],  [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "DESPESAS",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "R$ 1.670,00",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": " ",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "(Receitas - Despesas)R$ 420,12",
          "colspan": 2
        }]]} , {
        "rows": [[{
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "Resumo de Saldos",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Conta",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Saldo Anterior",
          "colspan": 1
        },{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Entradas Saídas",
          "colspan": 1
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "Saldo Atual",
          "colspan": 1
        }],  [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "BANCOS",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "21.816,28",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "2.090,12 1670,00",
          "colspan": 2
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "22.236,40",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Banco do Brasil",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "21.816,28",
          "colspan": 1
        }, {
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "2.090,12 1670,00",
          "colspan": 2
        }, {
          "align": "right",
          "color": "#000000",
          "style": "normal",
          "text": "22.236,40",
          "colspan": 2
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": " ",
          "colspan": 2
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "(Bancos + Caixa)R$ 22.236,40",
          "colspan": 2
        }]] } , {
        "rows": [[{
          "align": "left",
          "color": "#DC143C",
          "style": "bold",
          "text": "Contas a Receber",
          "colspan": 4
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Contas a Receber até 30/09/2017",
          "colspan": 3
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 2.271,27",
          "colspan": 1
        }],  [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Contas a Receber no Período de 01/10/17 até 30/10/2017",
          "colspan": 3
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 549,31",
          "colspan": 1
        }], [{
          "align": "left",
          "color": "#000000",
          "style": "normal",
          "text": "Total de Contas a Receber",
          "colspan": 3
        }, {
          "align": "left",
          "color": "#000000",
          "style": "bold",
          "text": "R$ 2.820,58",
          "colspan": 1
        }]]
      }]
    }]
}
  ``` 
  </TabItem>
  </Tabs>

  <br/>   
        
  <b>Respostas</b>

 Como resultado do consumo do código do boleto balancete, é possível visualizar um exemplo de layout do boleto do tipo balancete, conforme demonstrado na imagem:

 <div className="figure"><img src="/img/boletobalancete.jpg" alt="banner" /></div>

  <br/>


</details>

</div>
<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>

As informações contidas no balancete não são utilizadas pela Efí. Recebemos o conteúdo da requisição do seu sistema/aplicação e apenas montamos a cobrança da forma que a pessoa integradora espera, seguindo o layout de exemplo acima. Ou seja, a Efí não valida as informações nem faz cálculos no balancete; apenas processa e organiza os dados dentro do layout especificado pela sua requisição à rota <code>POST /charge/:id/balance-sheet</code>.
</div>
<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
As requisições para o endpoint de balancete não devem exceder 300 KB (body da requisição).
</div>

<br/>


  ## Marcar como pago (baixa manual) uma determinada transação 
  
Às vezes, os clientes pagam as cobranças de outras maneiras, como em dinheiro ou por depósito bancário. Na conta Efí, somente é possível confirmar manualmente as cobranças feitas por boletos ou carnês. As cobranças realizadas através de links de pagamento, mesmo que o pagamento seja feito por boleto, não podem ser confirmadas manualmente.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
Quando uma transação é marcada como paga, nenhum valor de pagamento é retornado via API. Descontos, multas e moras não serão aplicados automaticamente.
</div>
<br/>

Conheça as duas maneiras de confirmar manualmente o pagamento de uma cobrança na Efí:

### 1. Por meio do painel Efí:

<ul>
<li>Faça <a href="https://usuario.gerencianet.com.br/login" target="_blank">login</a> em sua conta Efí;</li>
<li>Acesse o menu “Receber” e, logo em seguida, “Gestão de cobranças”;</li>
<li>Selecione a opção “Boletos”;</li>
<li>Escolha a cobrança que deseja confirmar;</li>
<li>Em seguida, clique no botão azul "Marcar como pago".</li>
</ul>

Esta operação não possui cobrança de tarifas.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Observação</b>
</div>
Não é possível confirmar manualmente o pagamento de cobranças que foram canceladas.
</div>
<br/>

### 2. Por meio de requisição via API:

Apenas transações com status waiting ou unpaid podem ser confirmadas manualmente. Existem dois endpoints responsáveis pelas confirmações manuais de pagamento:
<ul>
<li><code>settleCharge</code> : permite marcar como pago (baixa manual) uma determinada transação;</li>

<li><code>settleCarnetParcel</code> : permite marcar como pago (baixa manual) uma determinada parcela de um carnê.</li>
</ul>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>NOTA</b>
</div>
<p>
As confirmações de pagamento podem ser:
</p>
<p>
<li><b>Confirmações Automáticas</b>: é o mecanismo padrão oferecido pela API por meio da <a href="/docs/api-cobrancas/notificacoes#recebendo-as-notificações" target="_blank">URL de notificação.</a> Ou seja, disparamos um POST para sua URL de notificação assim que houver uma mudança no status da transação, seu sistema recepciona essa informação e realiza as tratativas para as quais foi designado. Em outras palavras, o status <code>paid</code> estará contido na notificação que enviamos. Logo, o status da transação será <code>paid</code>.</li>

<li><b>Confirmações Manuais</b>: representada pelos endpoints <code>settleCharge</code> e <code>settleCarnetParcel</code>. É quando o pagamento foi realizado por formas de pagamento alternativas (ex: pagamento em mãos) e o integrador efetuou a confirmação manual pelo painel Efí, via requisição à API ou pelo seu próprio sistema de gestão. Neste caso, o status da transação será <code>settled</code>.</li>
</p>
</div>
<br/>

#### Marcar como pago determinada transação

Permite marcar como pago (baixa manual) uma determinada transação.

Para marcar uma transação como paga (baixa manual), você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/charge/:id/settle</code>.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/settle</b>
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

  As respostas abaixo representam Sucesso(201) do consumo.
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

<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
  </div>
Transações marcadas como pagas não geram movimentações financeiras em uma conta Efí, uma vez que o fluxo financeiro não ocorre sob controle da Efí.
</div>

<br/>


</div>