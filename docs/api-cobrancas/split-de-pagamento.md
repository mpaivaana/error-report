---
id: split-de-pagamento
title: Split de pagamento
hide_title: true
sidebar_label: Split de pagamento
---
<h1 className="titulo">Split de pagamento</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Modal from "@site/src/scripts/modal.js" 
import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Passo a passo para gerar uma cobrança com a configuração de split de pagamento na API Efí
</div>

<br/>
<br/>

## Introdução

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>

<p>O <strong>Split de pagamento</strong> só pode ser realizado entre contas Efí, sem limite máximo de contas para o repasse.</p>
</div>
<br/>

O **Split de pagamento da Efí ** pode ser usado em situações em que o valor pago pelo comprador deve ser dividido entre dois ou mais vendedores, conforme porcentagem ou valor fixo definido no momento de criação da cobrança.

O conceito de **Split de pagamento** é simples. É um ambiente de varejo online onde diversos lojistas ofertam seus produtos em um único local. Imagine como um shopping virtual, onde várias lojas se reúnem para vender diferentes produtos e serviços, oferecendo uma variedade maior de opções aos clientes.

Com o Split de pagamento Efí, qualquer conta Efí pode criar sua própria plataforma de vendas com múltiplos vendedores. Com essa solução, você pode usar o seu site para realizar as vendas e, por meio da integração, definir como o valor recebido será dividido entre as diferentes contas Efí. Isso funciona tanto para a sua conta quanto para a de seus parceiros, permitindo uma experiência de compras mais completa e integrada.
<br/>

## Como funciona

- Se um item de uma transação for marcado como item de Split de pagamento, todos os itens serão considerados itens de Split de pagamento;

- O integrador tem a flexibilidade de configurar o split, optando entre divisão por porcentagem ou por um valor fixo. Em configurações de repasse por <code>porcentagem</code>, a taxa de intermediação da Efí pode ser configurada em duas modalidades: <code>mode = 1</code> para que a tarifa seja descontada apenas da conta principal que emitiu a cobrança, e <code>mode = 2</code> para que a tarifa seja descontada proporcionalmente ao percentual definido para cada conta que receberá o repasse. Caso o atributo <code>mode</code> não seja informado na requisição, o padrão será <code>mode = 2</code>.

- Em configurações de repasse com valor <code>fixo</code>, a tarifa deverá ser obrigatoriamente descontada apenas da conta principal que gerou a cobrança. Portanto, o integrador deve especificar <code>mode = 1</code>.

- Ao utilizar a divisão por porcentagem, se o total de repasses de um item for inferior a 100%, o restante será automaticamente repassado para a conta integradora e se o total de repasses de um item for superior a 100%, a transação não poderá ser gerada;

- Ao utilizar a divisão por valor fixo, se o total de repasses de um item for inferior ao valor total da cobrança, o valor restante será automaticamente repassado para a conta integradora e se o total de repasses de um item for superior ao valor total da cobrança, a transação não poderá ser gerada;

- Os repasses do Split de pagamento são realizados individualmente para cada produto da cobrança. Cada produto pode ter repasses para contas diferentes na mesma cobrança;

- Não é possível fazer um repasse parcial do valor do envio;

- Para que o Split de pagamento funcione, o único dado necessário é o identificador de conta ("<a href="/img/identificador.png" target="_blank">payee_code</a>") das contas que receberão os repasses;

- Os repasses não podem ter um valor igual a zero por cento;

- É possível gerar cobranças com vários itens, alguns com configuração Split de pagamento e outros sem;

- Não é possível fazer dois repasses para a mesma conta no mesmo item;

- É permitido ter repasses de valores diferentes ou iguais para a mesma conta em itens diferentes da mesma transação.

<div className="payment">
<details className="col-100">
  <summary>
<b>Configurações do Split de pagamento</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Descrição dos atributos para configurar o Split de pagamento
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/marketplace/marketplace.md" />
          </div>
          <br/>
      </div>
<br/>
</details>
</div>

<br/>


## Criação de transação Split de pagamento em One Step (Um passo)

Nesta opção, é necessário que o body da requisição contenha todos os atributos mínimos obrigatórios para a emissão do titulo.

Essa opção permite criar uma transação e associar um método de pagamento (boleto bancário ou cartão de crédito) em apenas uma etapa

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Para que a criação de transações via One Step ocorra sem problemas, é necessário atualizar sua SDK. Todos os arquivos necessários para isso estão disponíveis em nosso <a href="https://github.com/efipay" target="_blank">repositório</a> e na documentação.</p>
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
          "mode"
          "repasses" 
              "payee_code"  
              "percentage"  
              "fixed"
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
          <Modal filename="/markdown/charges/marketplace/marketplace_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Split de pagamento - porcentagem (Boleto)', value: 'exemplo1', },
    { label: 'Split de pagamento - fixo (Boleto)', value: 'exemplo2', },
    { label: 'Split de pagamento (Cartão)', value: 'exemplo3', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1,
        "marketplace": {
          "repasses": [
            {
              "payee_code": "payee_code1",
              "percentage": 2500
            },
            {
              "payee_code": "payee_code2",
              "percentage": 1500
            }
          ]
        }
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
        "amount": 1,
        "marketplace": {
          "repasses": [
            {
              "payee_code": "payee_code1",
              "fixed": 2500
            },
            {
              "payee_code": "payee_code2",
              "fixed": 1500
            }
          ]
        }
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

   <TabItem value="exemplo3">

```json
{
  "items": [
    {
      "name": "Meu Produto",
      "value": 5990,
      "amount": 1,
      "marketplace": {
        "repasses": [
          {
            "payee_code": "payee_code1",
            "percentage": 2500
          },
          {
            "payee_code": "payee_code2",
            "percentage": 1500
          }
        ]
      }
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


## Criação de transação Split de pagamento em Two Steps (Dois passos)

<ol>
<li>Crie a transação, informando conta(s) de repasse, o item/produto/serviço, valor, quantidade, etc;</li>
<li>Associe a forma de pagamento desejado, informando o <code>charge_id</code> da transação e os dados do cliente pagador.</li>
</ol>

O restante desta página apresenta os procedimentos detalhados, mas lembre-se de instalar uma de nossas bibliotecas em seu servidor para executar os códigos de exemplo. <a href="/docs/sdk/introducao" target="_blank">Certifique-se de que a SDK da Efí foi instalada.</a>

### 1. Criar transação

Transações com pelo menos um item definido como 'item de Split de pagamento' ou valores de fretes destinados a contas diferentes da conta integradora são chamadas de 'Transações de Split de pagamento'. Com o Split de pagamento da Efí, é possível dividir automaticamente o valor pago pelo cliente final entre o vendedor e o fornecedor, sem precisar fazer isso manualmente.

Para começar, precisamos gerar a transação, informando as contas da Efí para repasse, o nome do item/produto/serviço, o valor da transação, a quantidade e outras informações relevantes.

É importante notar que a taxa de intermediação da Efí pode ser configurada de duas formas: <code>mode = 1</code>, para que a tarifa seja descontada apenas da conta que emitiu a cobrança, ou <code>mode = 2</code> para que a tarifa seja descontada proporcionalmente ao percentual definido para todas as contas que receberão os repasses. Caso o atributo <code>mode</code> não seja informado na requisição, será definido como padrão <code>mode = 2</code>.

No exemplo abaixo, mostramos como usar os repasses em uma transação de <strong>R$ 50,00</strong>. De acordo com o código, o valor será dividido entre 3 contas Efí. A primeira conta receberá <strong>25%</strong> do valor, a segunda conta receberá <strong>15%</strong> e a terceira receberá o restante, que neste caso é <strong>60%</strong> do valor.

O atributo <code>payee_code</code> é o 'identificador de conta' Efí e será usado para identificar as contas que receberão os repasses. Você pode encontrar esse identificador em sua plataforma a (<a href="/img/identificador.png" target="_blank">veja onde localizar</a>).

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
          <Modal filename="/markdown/charges/marketplace/marketplace_two_steps_1.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada - porcentagem', value: 'exemplo1', },
    { label: 'Dados de entrada - fixo', value: 'exemplo2', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 5990,
        "amount": 1,
        "marketplace": {
          "repasses": [
            {
              "payee_code": "payee_code1",
              "percentage": 2500
            },
            {
              "payee_code": "payee_code2",
              "percentage": 1500
            }
          ]
        }
      }
    ]
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
        "amount": 1,
        "marketplace": {
          "repasses": [
            {
              "payee_code": "payee_code1",
              "fixed": 2500
            },
            {
              "payee_code": "payee_code2",
              "fixed": 1500
            }
          ]
        }
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

Após criar a transação de Split de pagamento, você receberá o <code>charge_id</code>. Esse identificador será utilizado para que você escolha qual forma de pagamento deseja utilizar para essa transação.


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
          <Modal filename="/markdown/charges/marketplace/marketplace_two_steps_2.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Exemplo Boleto', value: 'exemplo1', },
    { label: 'Exemplo Cartão', value: 'exemplo2', },
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
          "fine": 200,
          "interest": 33
        },
        "message": "Pague pelo código de barras ou pelo QR Code"
      }
    }
}
  ``` 
  </TabItem>

   <TabItem value="exemplo2">

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
        "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code imagemm
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



## Retornar informações de transação existente 

Para retornar informações de uma transação (boleto ou cartão de crédito), você deve enviar uma requisição <code>GET</code> para a rota <code>/v1/charge/:id</code>.
   
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
      { label: '🟢 200 (Bolix)', value: 'saida', }
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200,
    "data": {
        "charge_id": 661176817,
        "total": 1100,
        "status": "waiting",
        "custom_id": null,
        "created_at": "2024-01-08 11:25:28",
        "notification_url": null,
        "items": [{
            "name": "Product 1",
            "value": 1000,
            "amount": 1,
            "marketplace": {
                "repasses": [{
                        "percentage": 1000,
                        "payee_code": "84569721306548792010354876123456"
                    },
                    {
                        "percentage": 9000,
                        "payee_code": "36987410213546789104587410235689"
                    }
                ]
            }
        }],
        "history": [{
                "message": "Cobrança criada",
                "created_at": "2024-01-08 11:25:28"
            },
            {
                "message": "Pagamento via boleto aguardando confirmação",
                "created_at": "2024-01-08 11:25:29"
            },
            {
                "message": "Cobrança enviada para oldbuck@efipay.com.br",
                "created_at": "2024-01-08 11:25:29"
            }
        ],
        "shippings": [{
            "name": "Default Shipping Cost",
            "value": 100,
            "payee_code": "3804b62b6241d2ae9dd0896297d4ea74"
        }],
        "customer": {
            "name": "Gorbadoc Oldbuck",
            "cpf": "94271564656",
            "birth": "1977-01-15",
            "email": "oldbuck@efipay.com.br",
            "phone_number": "5144916523"
        },
        "payment": {
            "method": "banking_billet",
            "created_at": "2024-01-08 11:25:28",
            "message": null,
            "banking_billet": {
                "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
                "pix": {
                    "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1",
                    "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..."
                },
                "link": "link_https_para_acesso_o_bolix",
                "billet_link": "link_https_para_acesso_o_bolix",
                "pdf": {
                    "charge": "link_https_do_pdf_da_cobranca"
                },
                "expire_at": "2023-12-15"
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
<p>Todas as transações possuem um status que representa a "situação" dessa transação. É importante conhecer os possíveis status de uma transação na API para aplicar as devidas tratativas em seu sistema.</p>

</div>
<br/>

<div className="admonition admonition_tip">
  <div>
  <img src="/img/lightbulb-on-green.svg"/> <b>Callbacks (notificações) das transações da API para seu sistema</b>
  </div>
<p>As notificações permitem que você receba informações quando o status de uma transação for alterado, como quando um boleto for pago, por exemplo.</p>
<p>Confira <a href="/docs/api-cobrancas/notificacoes" target="_blank">aqui</a> todos os detalhes sobre como implementar a sua URL de notificação.</p>
  </div>


</div>