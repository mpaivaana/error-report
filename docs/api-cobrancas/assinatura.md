---
id: assinatura
title: Assinatura
hide_title: true
sidebar_label: Assinatura
---
<h1 className="titulo">Assinatura</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Introdução sobre a funcionalidade de Assinaturas (Recorrência) na API Efí
</div>

<br/>
<br/>

## Introdução

Realize cobranças recorrentes aos seus clientes por meio de planos de assinaturas. Com essa opção, seus clientes autorizam os débitos e você não precisa se preocupar em enviar cobranças a cada mês, evitando o risco de esquecimentos de pagamento.  

Uma assinatura é um conjunto de transações geradas de forma recorrente. Para criar uma assinatura, você deve gerar uma cobrança e incluir informações sobre o número de parcelas e a periodicidade em que o sistema deve gerar transações iguais à primeira. Essas informações são chamadas de <strong>Planos de Assinaturas</strong>.

Uma assinatura é caracterizada pela **cobrança recorrente**, podendo ser realizada por boleto ou cartão:

- **Cartão de Crédito:** seu cliente irá informar os dados de pagamento e a cobrança será debitada de acordo com a configuração do plano. O valor será descontado até que todas as parcelas sejam pagas ou até que a assinatura seja cancelada por você ou pelo cliente. Para calcular os limites do cartão, consideramos o valor mensal, não o total da cobrança com todas as parcelas. 

- **Boleto Bancário:** seu cliente receberá a cobrança por e-mail 10 dias antes do vencimento até que termine a quantidade de parcelas solicitadas ou até que você ou seu cliente cancele a assinatura. Se a cobrança automática cair num fim de semana ou feriado, nosso sistema vai gerar, automaticamente, uma cobrança com data de vencimento para o próximo dia útil.

Para criar uma assinatura, siga esses três passos:

1. [Crie o plano de assinatura](#crie-o-plano-de-assinatura), definindo a periodicidade e quantas cobranças serão geradas;

2. Crie inscrições (assinaturas) para vincular ao plano em [One Step](#crie-inscrições-assinaturas-para-vincular-ao-plano-em-one-step) ou [Two Steps](#crie-inscrições-assinaturas-para-vincular-ao-plano-em-two-steps);

3. [Defina a forma de pagamento da assinatura e insira os dados do cliente](#defina-a-forma-de-pagamento-da-assinatura-e-os-dados-do-cliente).
<br/>

## Como funciona

Uma assinatura é criada com status <code>new</code> indicando que está pronta para ser ativada. Assim que a forma de pagamento é definida, o status muda para <code>active</code>, mostrando que a assinatura está ativa e pronta para gerar cobranças recorrentes.

A assinatura permanecerá ativa durante todo o ciclo de geração de cobranças, mas pode deixar de ser ativa por três motivos:

- A pessoa pagadora cancelou o serviço, clicando no link de cancelamento presente no e-mail de confirmação de assinatura. Assim, o status é alterado para <code>canceled</code>;

- O vendedor cancelou o serviço, clicando no link de cancelamento presente em sua interface de recebimentos, ou por meio do _webservice_ de cancelamento através do endpoint <code>/subscription/cancel</code> ou função <code>cancelSubscription</code> da SDK. Assim, o status é alterado para <code>canceled</code>;

- Todas as cobranças já foram geradas. Assim, o status é alterado para <code>expired</code>, ou seja, a assinatura está expirada e todas as cobranças configuradas para a assinatura já foram emitidas.

Para acompanhar a assinatura, é importante observar os status das transações geradas. Se uma transação não puder ser confirmada como paga, o status será <code>unpaid</code>, , indicando que o pagamento não foi concluído. Nesse caso, o vendedor deve tomar ações apropriadas, como interromper o serviço, tentar cobrar de outra forma ou cancelar a assinatura.

As duas formas de pagamento disponíveis são: <a href="/docs/api-cobrancas/boleto" target="_blank">boleto</a> e <a href="/docs/api-cobrancas/cartao" target="_blank">cartão</a>. Com o boleto, o cliente recebe o boleto com base nas repetições definidas no plano, e ele pode ser enviado por e-mail. Com o cartão, a cobrança é debitada automaticamente do cartão do cliente, seguindo as repetições do plano.

Tanto a pessoa que fez a assinatura quanto o vendedor podem cancelar a assinatura a qualquer momento. Quando isso ocorre, ambos são avisados via e-mail, com todos os detalhes do cancelamento.

<br/>

## Crie o plano de assinatura
Inicialmente, será criado o **plano de assinatura**, sendo definido três informações pelo integrador:

- <b>name</b> - Nome do plano de assinatura;
- <b>interval (em meses)</b> - Periodicidade da cobrança (por exemplo, <code>1</code> para mensal);
- <b>repeats</b> - Quantas cobranças devem ser  geradas para esse plano.

Para criar um plano de assinatura, você deve enviar uma requisição <code>POST</code> para a rota <code>/plan</code>.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/plan</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/criar_plano.md" />
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
    "name": "Plano de Internet - Velocidade 10 Mb",
    "interval": 1,
    "repeats": 12
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
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "plan_id": numero_plan_id, // número da ID referente ao plano de assinatura criado
      "name": "Plano de Internet - Velocidade 10 Mb", // nome do plano de assinatura
      "interval": 12, // intervalo que as cobranças devem ser geradas, em meses
      "repeats": null, // número de vezes que a cobrança deve ser gerada - neste caso, indefinidamente
      "created_at": "2016-06-28 15:48:32" // data e hora da criação da transação
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Retentativa de pagamento de assinatura via cartão de crédito

Os pagamentos das assinaturas realizados via cartão de crédito, que forem recusados por algum motivo operacional, como falta de limite, dados incorretos e problemas temporários com o cartão, poderão ter uma nova tentativa de pagamento via API.

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
          <Modal filename="/markdown/charges/subscriptions/retentativa.md" />
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
        "payment_token": "75bfce47d230b550f7eaac2a932e0878a934cb3",
        "update_card": true
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
<p>Esta funcionalidade permite que o integrador tente reprocessar uma cobrança de assinatura que falhou. Para isso, a cobrança deve atender aos seguintes critérios:</p>
<p>
<li>a cobrança deve ser do tipo cartão de crédito</li>
<li>a cobrança deve ter o status <code>unpaid</code></li></p>
  </div>

  <br/>

<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Assinatura Cancelada ou Desativada</b>
</div>
<p>Caso uma assinatura esteja cancelada ou desativada, e uma nova tentativa de pagamento for realizada com sucesso na última cobrança pendente, a assinatura será automaticamente reativada.</p>

</div>


<br/>

  ## Retornar informações de um plano

Você pode buscar informações sobre os planos criados. Existem filtros avançados que podem ser usados para encontrar planos, como:

- <code>Name</code>: retorna resultados a partir da procura pelo nome do plano cadastrado previamente;
- <code>Limit</code>: limite máximo de registros de resposta;
- <code>Offset</code>: determina a partir de qual registro a busca será realizada.
   
<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/plans</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
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
  Parâmetro de entrada: informe a "name", "limit" e "offset" do plano desejado
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
    "data": [
      {
        "plan_id": numero_plan_id, // número da ID referente ao plano de assinatura criado
        "name": "Plano de Internet - Velocidade 1 Mb", // nome do plano de assinatura
        "interval": 1, // intervalo que as cobranças devem ser geradas, em meses
        "repeats": null, // número de vezes que a cobrança deve ser gerada - neste caso, indefinidamente
        "created_at": "2016-05-02" // data e hora da criação da transação
      },
      {
        "plan_id": numero_plan_id, // número da ID referente ao plano de assinatura criado
        "name": "Plano de Internet - Velocidade 10 Mb", // nome do plano de assinatura
        "interval": 12, // intervalo que as cobranças devem ser geradas, em meses
        "repeats": null, // número de vezes que a cobrança deve ser gerada - neste caso, indefinidamente
        "created_at": "2016-06-28" // data e hora da criação da transação
      },
      {
        "plan_id": numero_plan_id, // número da ID referente ao plano de assinatura criado
        "name": "Plano de Internet - Velocidade 20 Mb", // nome do plano de assinatura
        "interval": 10, // intervalo que as cobranças devem ser geradas, em meses
        "repeats": null, // número de vezes que a cobrança deve ser gerada - neste caso, indefinidamente
        "created_at": "2016-06-29" // data e hora da criação da transação
      },
      {
        "plan_id": numero_plan_id, // número da ID referente ao plano de assinatura criado
        "name": "Plano de Internet - Velocidade 30 Mb", // nome do plano de assinatura
        "interval": 12, // intervalo que as cobranças devem ser geradas, em meses
        "repeats": null, // número de vezes que a cobrança deve ser gerada - neste caso, indefinidamente
        "created_at": "2016-06-29" // data e hora da criação da transação
      }
    ]
}
  ```
 </TabItem>
  </Tabs>

</details>

</div>

<br/>

## Permitir a edição do nome do plano de assinatura

Você pode editar o nome de um plano de assinatura que já foi criado. Para fazer isso, basta fornecer o identificador do <code>plan_id</code> do plano que deseja editar.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/plan/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
           <Modal filename="/markdown/charges/subscriptions/editar_nome.md" />
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
   "name": "Meu novo nome do plano"
}
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

## Cancelar um plano de assinatura

Você pode cancelar um plano de assinatura a qualquer momento. Para isso, basta informar o <code>plan_id</code> do plano que deseja cancelar.

<!-- Método DELETE -->
<div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete>/v1/plan/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="delete-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/plan_id.md"/>
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

## Crie inscrições (assinaturas) para vincular ao plano em _One Step_

Após criar o plano, é hora de criar as assinaturas e vinculá-las ao plano. As assinaturas são úteis quando você precisa cobrar seus clientes de forma recorrente. Com o plano configurado, os custos futuros serão criados automaticamente, seguindo a configuração do plano.

Lembre-se de informar o <code>plan_id</code> do plano que você criou anteriormente para fazer a associação.

Para criar e vincular as assinaturas, basta enviar uma requisição <code>POST</code> para a rota <code>/plan/:id/subscription/one-step</code>.

<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Atributo "trial_days" que permite conceder um período de teste</b>
</div>
<p>A API oferece o atributo <code>trial_days</code>, que permite definir um período de teste gratuito para assinaturas do tipo cartão de crédito. Esse atributo está disponível somente quando o pagamento é realizado com <code>credit_card</code>.</p>

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
      { label: '/v1/plan/:id/subscription/one-step', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
  "items"  
      "name"  
      "value"  
      "amount"  
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
                  "percentage"  
                  "currency"  
              "value"  
          "conditional_discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
              "until_date"  
          "configurations"  
              "fine"  
              "interest"  
          "message"  
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
          "billing_address"  
              "street"  
              "number"  
              "neighborhood"  
              "zipcode"  
              "city"  
              "complement"  
              "state"  
          "payment_token"  
          "discount"  
              "type"  
                  "percentage"  
                  "currency"  
              "value"  
          "message"  
          "trial_days"
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/plan/<HighlightVar>:id</HighlightVar>/subscription/one-step</b>
  </summary>

<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Atributos</b>
</div>
<p>Nesta seção estão descritos os atributos para Assinatura do tipo Boleto (<b>Objeto <code>banking_billet</code></b>) e Cartão de crédito (<b>Objeto <code>credit_card</code></b>)</p>

</div>
<br/>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/assinatura_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p> 
      
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada (Bolix)', value: 'exemplo1', },
    { label: 'Dados de entrada (Cartão)', value: 'exemplo2', },
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
      { label: '🟢 200 (Cartão)', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "subscription_id": 25329, // número ID referente à inscrição gerada
      "status": "active", // assinatura ativa - todas as cobranças estão sendo geradas
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
      "link": "link_do_boleto_da_assinatura", // link responsivo do boleto gerado
      "billet_link":"link_https_para_acesso_o_bolix", // link do boleto gerado
      "pdf": {
        "charge": "link_pdf_boleto_assinatura" // link do PDF boleto gerado da assinatura
      },
      "expire_at": "2018-12-30", // data de vencimento do boleto no seguinte formato: 2018-12-30 (ou seja, equivale a 30/12/2018)
      "plan": {
        "id": 2758, // número da ID referente ao plano de assinatura criado
        "interval": 1, // periodicidade da cobrança (em meses) - informe 1 para assinatura mensal
        "repeats": null // número de vezes que a cobrança deve ser gerada 
        //(padrão: null, que significa que a cobrança é gerada por tempo indeterminado ou até que o plano seja cancelado)
      },
      "charge": {
        "id": 511843, // número da ID referente à transação gerada
        "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
        "parcel": 1,
        "total": 7900
      },
      "first_execution": "31/10/2018", // data da primeira execução da assinatura
      "total": 7900,
      "payment": "banking_billet" // forma de pagamento (banking_billet equivale a boleto)
    }
}
  ```
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "subscription_id": 25328, // número ID referente à inscrição gerada
      "status": "active", // assinatura ativa - todas as cobranças estão sendo geradas
      "plan": {
        "id": 2758, // número da ID referente ao plano de assinatura criado
        "interval": 1, // periodicidade da cobrança (em meses) - informe 1 para assinatura mensal
        "repeats": null // número de vezes que a cobrança deve ser gerada 
        //(padrão: null, que significa que a cobrança é gerada por tempo indeterminado ou até que o plano seja cancelado)
      },
      "charge": {
        "id": 511842, // número da ID referente à transação gerada
        "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
        "parcel": 1,
        "total": 7900
      },
      "first_execution": "31/10/2018", // data da primeira execução da assinatura
      "total": 7900,
      "payment": "credit_card" // forma de pagamento (credit_card equivale a cartão de crédito)
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Crie inscrições (assinaturas) para vincular ao plano em _Two Steps_

Primeiramente, é necessário criar a assinatura e vinculá-la ao plano. Você deve informar o item/produto/serviço, valor e quantidade para criar a assinatura. Em seguida, defina a forma de pagamento da assinatura e os dados do cliente, informando o <code>charge_id</code> da transação e os dados do cliente.

### 1. Crie inscrições (assinaturas) para vincular ao plano

Com o plano criado, é hora de criar as assinaturas e associá-las aos planos. As assinaturas são úteis quando você precisa cobrar seus clientes de forma recorrente. Dessa forma, os custos subsequentes serão criados automaticamente, seguindo a configuração do plano.

Lembre-se de informar o <code>plan_id</code>do plano que você criou anteriormente para fazer a associação.

Para associar assinaturas aos planos, basta enviar uma requisição <code>POST</code> para a rota <code>/plan/:id/subscription</code>.

<div className="payment">
<details className="col-100">
  <summary>
<b>Estrutura hierárquica dos atributos do Schema que podem ser utilizados:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/plan/:id/subscription', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
  "items"  
      "name"  
      "value"  
      "amount"  
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
    <b><HighlightPost>POST</HighlightPost> /v1/plan/<HighlightVar>:id</HighlightVar>/subscription</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/assinatura_two_steps_1.md" />
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
        "name": "Internet - Mensalidade",
        "value": 6990,
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
      "subscription_id": numero_subscription_id, // número ID referente à inscrição gerada
      "status": "new", // cobrança gerada, aguardando definição da forma de pagamento
      "custom_id": null, // identificador próprio opcional
      "charges": [
        {
          "charge_id": numero_charge_id, // número da ID referente à transação gerada
          "status": "new", // cobrança gerada, aguardando definição da forma de pagamento
          "total": 6990, // valor total da transação (em centavos, sendo 6990 = R$69,90)
          "parcel": 1 // número de parcelas
        }
      ],
      "created_at": "2016-06-29 10:42:59" // data e hora da criação da transação
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>


### 2. Defina a forma de pagamento da assinatura e os dados do cliente

Após criar o plano de assinatura e vincular as assinaturas aos planos, é hora de definir a forma de pagamento recorrente das assinaturas. Isso pode ser feito através de boleto bancário ou cartão de crédito.

- **Cartão de Crédito**: seu cliente realiza o pagamento, de acordo com a periodicidade que você definiu (mensal, trimestral, etc) no plano, sendo o mesmo valor cobrado automaticamente em seu cartão de crédito de seu cliente. Na recorrência por cartão, seu cliente digita os dados do cartão apenas no primeiro pagamento, depois a cobrança é realizada automaticamente sem que ele precise informar os dados novamente;

<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Assinatura do tipo Cartão de crédito</b>
</div>
<p>Para gerar uma assinatura do tipo Cartão de crédito, é necessário antes de consumir o endpoint <code>POST /v1/subscription/:id/pay</code>, obter o payment_token. Você pode ver mais detalhes em <a href="/docs/api-cobrancas/cartao#obtenção-do-payment_token" target="_blank">Obtenção do payment_token</a>.</p>

</div>
<br/>

- **Boleto Bancário**: será gerado conforme o número de repetições definido pelo plano, podendo ser enviado por e-mail.Tanto a pessoa que fez a assinatura quanto o vendedor podem cancelar a assinatura a qualquer momento. Quando isso ocorre, ambos são avisados via e-mail, com todos os detalhes do cancelamento.
  
<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Atributo "trial_days" que permite conceder um período de teste</b>
</div>
<p>A API oferece o atributo <code>trial_days</code>, que permite definir um período de teste gratuito para assinaturas do tipo cartão de crédito. Esse atributo está disponível somente quando o pagamento é realizado com <code>credit_card</code>.</p>

</div>
<br/>

Para associar assinaturas à forma de pagamento, você deve enviar uma requisição <code>POST</code> para a rota <code>/subscription/:id/pay</code>.

<div className="payment">
<details className="col-100">
  <summary>
<b>Estrutura hierárquica dos atributos do Schema que podem ser utilizados:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/subscription/:id/pay', value: 'entrada', },
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
                  "percentage"  
                  "currency"  
              "value"  
          "conditional_discount"  
              "type"  
                  "percentage",  
                  "currency"  
              "value"  
              "until_date"  
          "configurations"  
              "fine"  
              "interest"  
          "message"  
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
          "billing_address"  
              "street"  
              "number"  
              "neighborhood"  
              "zipcode"  
              "city"  
              "complement"  
              "state"  
          "payment_token"  
          "discount"  
              "type"  
                  "percentage"  
                  "currency"  
              "value"  
          "message"  
          "trial_days"
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/subscription/<HighlightVar>:id</HighlightVar>/pay</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/assinatura_two_steps_2.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada (Bolix)', value: 'exemplo1', },
    { label: 'Dados de entrada (Cartão)', value: 'exemplo2', },
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
      { label: '🟢 200 (Cartão)', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "subscription_id": 25329, // número ID referente à inscrição gerada
      "status": "active", // assinatura ativa - todas as cobranças estão sendo geradas
      "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000",
      "link": "link_do_boleto_da_assinatura", // link responsivo do boleto gerado
      "billet_link":"link_https_para_acesso_o_bolix", // link do boleto gerado
      "pdf": {
        "charge": "link_pdf_boleto_assinatura" // link do PDF boleto gerado da assinatura
      },
      "expire_at": "2018-12-30", // data de vencimento do boleto no seguinte formato: 2018-12-30 (ou seja, equivale a 30/12/2018)
      "plan": {
        "id": 2758, // número da ID referente ao plano de assinatura criado
        "interval": 1, // periodicidade da cobrança (em meses) - informe 1 para assinatura mensal
        "repeats": null // número de vezes que a cobrança deve ser gerada 
        //(padrão: null, que significa que a cobrança é gerada por tempo indeterminado ou até que o plano seja cancelado)
      },
      "charge": {
        "id": 511843, // número da ID referente à transação gerada
        "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
        "parcel": 1,
        "total": 7900
      },
      "first_execution": "31/10/2018", // data da primeira execução da assinatura
      "total": 7900,
      "payment": "banking_billet" // forma de pagamento (banking_billet equivale a boleto)
    }
}
  ```
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "subscription_id": 25328, // número ID referente à inscrição gerada
      "status": "active", // assinatura ativa - todas as cobranças estão sendo geradas
      "plan": {
        "id": 2758, // número da ID referente ao plano de assinatura criado
        "interval": 1, // periodicidade da cobrança (em meses) - informe 1 para assinatura mensal
        "repeats": null // número de vezes que a cobrança deve ser gerada 
        //(padrão: null, que significa que a cobrança é gerada por tempo indeterminado ou até que o plano seja cancelado)
      },
      "charge": {
        "id": 511842, // número da ID referente à transação gerada
        "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
        "parcel": 1,
        "total": 7900
      },
      "first_execution": "31/10/2018", // data da primeira execução da assinatura
      "total": 7900,
      "payment": "credit_card" // forma de pagamento (credit_card equivale a cartão de crédito)
    }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>
<br/>

  ## Retornar informações de uma assinatura vinculada a um plano

Essa funcionalidade permite obter informações de uma assinatura vinculada a um plano específico.
   
<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/subscription/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/subscription_id.md" />
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
  Parâmetro de entrada: informe a "subscription_id" da transação desejada
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
      "subscription_id": numero_subscription_id, // número ID referente à inscrição gerada
      "value": 6990, // valor da inscrição (6990 equivale a R$69,90)
      "status": "new", // cobrança gerada, aguardando definição da forma de pagamento
      "custom_id": null, // identificador próprio opcional
      "notification_url": null, // endereço da sua URL que receberá as notificações de mudanças de status das transações
      "payment_method": null, // método de pagamento (null = ainda não foi definido), (banking_billet = boleto bancário) ou (credit_card = cartão de crédito)
      "next_execution": null, // data da próxima execução
      "next_expire_at": null, // data do próximo vencimento no formato 2016-12-30
      "plan": {
        "plan_id": numero_plan_id, // número ID referente ao plano de assinatura criado
        "name": "Plano de Internet - Velocidade 10 Mb", // nome do plano de assinatura
        "interval": 12, // intervalo que as cobranças devem ser geradas, em meses
        "repeats": null // número de vezes que a cobrança deve ser gerada - neste caso, indefinidamente
      },
      "occurrences": 0,
      "created_at": "2016-06-29 10:42:59", // data e hora da criação da transação
      "history": [
        {
          "charge_id": numero_charge_id, // número da ID referente à transação gerada
          "status": "new", // cobrança gerada, aguardando definição da forma de pagamento
          "created_at": "2016-06-29 10:42:59" // data e hora da criação da transação
        }
      ]
    }
}
  ```
 </TabItem>
  </Tabs>

</details>

</div>

<br/>

## Associar plano ao link de pagamento

Após criar o seu plano de Assinatura, você pode gerar um link de pagamento para associar assinaturas a esse plano. Para fazer isso, envie uma requisição <code>POST</code> para a rota <code>/v1/plan/:id/subscription/one-step/link</code>.

<div className="payment">
<details className="col-100">
  <summary>
<b>Estrutura hierárquica dos atributos do Schema que podem ser utilizados:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/plan/:id/subscription/one-step/link', value: 'entrada', },
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
    <b><HighlightPost>POST</HighlightPost> /v1/plan/<HighlightVar>:id</HighlightVar>/subscription/one-step/link</b>
  </summary>

<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Atributos</b>
</div>
<p>Nesta seção estão descritos os atributos para Assinatura do tipo Boleto (<b>Objeto <code>banking_billet</code></b>) e Cartão de crédito (<b>Objeto <code>credit_card</code></b>)</p>

</div>
<br/>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/assinatura_link_one_step.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p> 
      
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Dados de entrada', value: 'exemplo1', }
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "amount": 2,
        "name": "Silicon Valley",
        "value": 564
      }
    ],
    "metadata": {
        "custom_id": "Assinatura",
        "notification_url": "sua_url_notificação"
    },
  
    "settings": {
      "payment_method": "all" , 
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

  As respostas abaixo representam Sucesso do consumo.
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
        "subscription_id": 8021,
        "status": "new",
        "custom_id": "Assinatura",
        "charge": {
          "id": 371496106,
          "status": "link",
          "total": 1128,
          "parcel": 1
        },
        "payment_url": "https://pagamento.gerencianet.com.br/:identificador",
        "payment_method": "all",
        "conditional_discount_date": null,
        "request_delivery_address": true,
        "expire_at": "2025-02-08",
        "created_at": "2021-11-09 12:06:54"
      }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>


<br/>


  ## Incluir "notification_url" e "custom_id" em uma assinatura existente

É possível definir ou alterar as informações enviadas na propriedade <code>metadata</code> da transação a qualquer momento. Isso é útil para atualizar a URL de notificação vinculada às transações ou modificar o <code>custom_id</code> previamente associado às suas transações.

Para fazer essas alterações, você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/charge/:id/metadata</code>, onde <code>:id</code> é o <code>charge_id</code> da transação que deseja atualizar.

<b>Casos de uso deste endpoint:</b>

<ol>
<li>A pessoa integradora alterou o IP do servidor que estava associado na URL de notificação das transações;</li>
<li>A pessoa integradora atualizou a URL de notificação para as novas transações criadas (<code>createCharge</code>), mas precisa atualizar também as transações anteriores (<code>updateChargeMetadata</code>) que foram geradas e que estão associadas com a URL incorreta/desatualizada;</li>
<li>Foi instalado SSL (https) no servidor do cliente e mesmo que o cliente defina uma regra de redirecionamento 301 ou 302, será necessário definir a nova URL nas transações que estão usando a URL "antiga";</li>
<li>Integrador gerou cobranças sem informar a URL de notificação ao enviar a requisição de criação da transação;</li>
<li>Modificar ou acrescentar uma informação junto ao atributo <code>custom_id</code> associado às transações geradas previamente; e outros cenários possíveis. </li>
</ol>


<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/subscription/<HighlightVar>:id</HighlightVar>/metadata</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/subscription_url_de_retorno.md" />
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

 ## Alterar dados de uma assinatura

Você pode editar assinaturas ativas em um plano de assinaturas. Para isso, basta informar os campos que deseja editar e o <code>subscription_id</code> da assinatura.

Para realizar a alteração da assinatura, envie uma requisição <code>PUT</code> para a rota <code>/v1/subscription/:id</code> com as informações atualizadas no <code>body</code>.

<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Somente assinaturas do tipo Cartão de Crédito podem ser alteradas.</b>
</div>
<p>Para alterar os dados de uma assinatura existente, é necessário que o método de pagamento definido seja cartão de crédito.</p>

</div>
<br/>

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/subscription/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/alterar_dados_assinatura.md"/>
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
  "plan_id": 3,       
  "customer": {
    "email": "gorbadoc.oldbuck@gmail.com",
    "phone_number": "31123456789"
  },
  "items": [{
    "name": "Product 1",
    "value": 1000,
    "amount": 1
  }],
  "shippings": [{
    "name": "frete",
    "value": 1800
  }]
}
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
  "code": 200,
  "data": {
    "subscription_id": 1,
    "status": "active",
    "value": 2800,
    "custom_id": null,
    "notification_url": null,
    "payment_method": "credit_card",
    "next_execution": "2024-01-05",
    "next_expire_at": "2024-01-05",
    "plan": {
      "plan_id": 3,
      "name": "Novo plano",
      "interval": 1,
      "repeats": 12
    },
    "customer": {
      "email": "gorbadoc.oldbuck@gmail.com",
      "phone_number": "31123456789"
    },
    "occurrences": 1,
    "created_at": "2023-12-05T13:47:03.000Z"
  }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>


  ## Cancelar uma assinatura

Você pode cancelar assinaturas ativas em um plano de assinaturas. Para isso, basta informar o <code>subscription_id</code> da assinatura que deseja cancelar.

Para realizar o cancelamento da assinatura, envie uma requisição <code>PUT</code> para a rota <code>/v1/subscription/:id/cancel</code> da assinatura que você quer cancelar.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/subscription/<HighlightVar>:id</HighlightVar>/cancel</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/subscription_id.md"/>
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
Parâmetro de entrada: informe a "subscription_id" da transação desejada
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

## Acrescentar descrição ao histórico de uma assinatura
  
O histórico de uma assinatura registra todas as ações que ocorreram com ela até o momento atual. Você pode adicionar mensagens personalizadas a esse histórico usando o endpoint <code>/v1/subscription/:id/history</code>.

As mensagens personalizadas não têm impacto na assinatura em si, apenas são adicionadas ao histórico dela. Para isso, você deve informar o <code>subscription_id</code>da assinatura desejada. Essa descrição deve ter pelo menos um caractere e no máximo 255 caracteres.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost>/v1/subscription/<HighlightVar>:id</HighlightVar>/history</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/subscriptions/assinatura_acrecentar_info_historico.md" />
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
    "description": "Minha mensagem do histórico aqui"
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

  ## Reenvio do link associado ao plano para o email desejado 
  
Um link de pagamento associado a um plano pode ser reenviado por e-mail. Para fazer isso, você só precisa enviar o identificador <code>charge_id</code> do link e o endereço de e-mail válido para o qual deseja enviar o boleto.

Para reenviar o link por e-mail, basta fazer uma requisição <code>POST</code> para a rota <code>/v1/charge/:id/subscription/resend</code>.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/subscription/resend</b>
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