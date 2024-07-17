---
id: carne
title: Carnet
hide_title: true
sidebar_label: Carnet
---
<h1 className="titulo">Carnet</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Step by step to generate a carnet in the Efí API
</div>

<br/>
<br/>

## Creating Carnets

A carnet is a set of transactions (installments) generated in bulk with a predefined payment method. The installments of a carnet are due monthly, according to the date defined by the integrator. To generate a carnet, you need to provide the following data:
<ul>
<li><code>Item</code>: item being sold;</li>
<li><code>Customer</code>: personal data of the payer;</li>
<li><code>Expire_at</code>: Due date of the 1st installment of the carnet;</li>
<li><code>Repeats</code>: Number of installments (repetitions) of the carnet.</li>
</ul>

To generate a carnet, you must send a <code>POST</code> request to the <code>/v1/carnet</code> route with the number of installments and the mode of generation, along with the transaction and customer data.

Each generated carnet has a unique identifier called <code>carnet_id</code>, and each installment of this carnet also has a unique identifier called <code>charge_id</code>.


<div className="payment">
<details className="col-100">
  <summary>
<b>Hierarchical structure of Schema attributes that can be used:</b>
  </summary>
  <Tabs
    defaultValue="entrada"
    values={[
      { label: '/v1/carnet', value: 'entrada', },
    ]}>
  <TabItem value="entrada">

  ```json 
  "items"  
      "name"  
      "value"  
      "amount"  
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
  "repeats"  
  "split_items"  
  "metadata"  
      "custom_id"  
      "notification_url"  
  "configurations"  
      "fine"  
      "interest"  
  "message"  
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
  ```
 </TabItem>
  </Tabs>


</details>
</div>

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/carnet</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/create_carnet.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "items": [
      {
        "name": "Meu Produto",
        "value": 7500,
        "amount": 1
      }
    ],
    "customer": {
      "name": "Gorbadoc Oldbuck",
      "cpf": "94271564656",
      "phone_number": "5144916523"
    },
    "expire_at": "2023-12-20",
    "configurations": {
          "fine": 200,
          "interest": 33
        },
    "message": "Este é um espaço de até 80 caracteres para informar algo a seu cliente",
    "repeats": 3,
    "split_items": false
}
  ```
  </TabItem>
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200 (Carnet with Bolix)', value: 'saida', },
      { label: '🟢 200 (Traditional carnet)', value: '200', },
    ]}>

  <TabItem value="saida">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "carnet_id": 12345, // unique identifier of the carnet
      "status": "up_to_date", // carnet is up to date, no installment is overdue
      "cover": "https_link_cover_of_carnet", // link to the cover of the carnet
      "link": "https_link_of_carnet", // responsive link of the carnet according to the installments
      "carnet_link": "https_link_of_carnet", // link to the carnet according to the installments
      "pdf": {
        "carnet": "https_link_pdf_of_carnet", // link to the PDF of the carnet according to the installments
        "cover": "https_link_pdf_cover_of_carnet" // link to the PDF of the cover of the carnet
      },
      "charges": [
        {
          "charge_id": 511813, // unique identifier of the first installment of the carnet
          "parcel": "1", // installment number of the carnet
          "status": "waiting", // selected payment method, waiting for payment confirmation
          "value": 7500, // value in cents of the first installment of the carnet (7500 equals $75.00)
          "expire_at": "2023-12-20", // due date of the carnet installment in the format: 2023-12-20 (equals 20/12/2023)
          "url": "https_link_first_page", // link to the first installment page of the carnet
          "parcel_link": "https_link_first_page", // responsive link to the first installment page of the carnet
          "pdf": {
            "charge": "https_link_first_page" // link to the PDF of the first installment page of the carnet
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // barcode of the first installment
          "pix": {
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code image
          }
        },
        {
          "charge_id": 511814, // unique identifier of the second installment of the carnet
          "parcel": "2", // installment number of the carnet
          "status": "waiting", // selected payment method, waiting for payment confirmation
          "value": 7500, // value in cents of the second installment of the carnet (7500 equals $75.00)
          "expire_at": "2023-01-20", // due date of the carnet installment in the format: 2023-01-20 (equals 20/01/2023)
          "url": "https_link_second_page", // link to the second installment page of the carnet
          "parcel_link": "https_link_second_page", // responsive link to the second installment page of the carnet
          "pdf": {
            "charge": "https_link_second_page" // link to the PDF of the second installment page of the carnet
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // barcode of the second installment
          "pix": {
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code image
          }
        },
        {
          "charge_id": 511815, // unique identifier of the third installment of the carnet
          "parcel": "3", // installment number of the carnet
          "status": "waiting", // selected payment method, waiting for payment confirmation
          "value": 7500, // value in cents of the third installment of the carnet (7500 equals $75.00)
          "expire_at": "2023-02-20", // due date of the carnet installment in the format: 2023-02-20 (equals 20/02/2023)
          "url": "https_link_third_page", // link to the third installment page of the carnet
          "parcel_link": "https_link_third_page", // responsive link to the third installment page of the carnet
          "pdf": {
              "charge": "https_link_third_page" // link to the PDF of the third installment page of the carnet
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // barcode of the third installment
          "pix": {
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code image
          }
        }
      ]
    }
}

  ```
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "carnet_id": 12345, // unique identifier of the carnet
      "status": "up_to_date", // carnet is up to date, no installment is overdue. When the carnet is created, it also receives this up_to_date status.
      "cover": "link_https_cover_of_carnet", // link to the cover of the carnet
      "link": "link_https_carnet", // link to the carnet according to the installments
      "pdf": {
        "carnet": "link_https_pdf_carnet", // link to the PDF of the carnet according to the installments
        "cover": "link_https_pdf_cover_of_carnet" // link to the PDF of the cover of the carnet
      },
      "charges": [
        {
          "charge_id": 511813, // unique identifier of the first installment of the carnet
          "parcel": "1", // installment number of the carnet
          "status": "waiting", // selected payment method, waiting for payment confirmation
          "value": 7500, // value in cents of the first installment of the carnet (7500 equals $75.00)
          "expire_at": "2023-12-20", // due date of the carnet installment in the format: 2023-12-20 (equals 20/12/2023)
          "url": "link_https_first_page", // link to the first installment page of the carnet
          "pdf": {
              "charge": "link_https_first_page" // link to the PDF of the first installment page of the carnet
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000" // barcode of the first installment (page) of the carnet
        },
        {
          "charge_id": 511814, // unique identifier of the second installment of the carnet
          "parcel": "2", // installment number of the carnet
          "status": "waiting", // selected payment method, waiting for payment confirmation
          "value": 7500, // value in cents of the second installment of the carnet (7500 equals $75.00)
          "expire_at": "2023-01-20", // due date of the carnet installment in the format: 2023-01-20 (equals 20/01/2023)
          "url": "link_https_second_page", // link to the second installment page of the carnet
          "pdf": {
              "charge": "link_https_second_page" // link to the PDF of the second installment page of the carnet
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000" // barcode of the second installment (page) of the carnet
        },
        {
          "charge_id": 511815, // unique identifier of the third installment of the carnet
          "parcel": "3", // installment number of the carnet
          "status": "waiting", // selected payment method, waiting for payment confirmation
          "value": 7500, // value in cents of the third installment of the carnet (7500 equals $75.00)
          "expire_at": "2023-02-20", // due date of the carnet installment in the format: 2023-02-20 (equals 20/02/2023)
          "url": "link_https_third_page", // link to the third installment page of the carnet
          "pdf": {
              "charge": "link_https_third_page" // link to the PDF of the third installment page of the carnet
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000" // barcode of the third installment (page) of the carnet
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

<div className="admonition admonition_tip">
 <div>
    <img src="/img/info-circle-green.svg"/> <b>Attribute message</b>
  </div>
<p>If you use the <code>message</code> attribute, use the <code>\n</code> operator to make a line break. We've already included this operator in the code we provided.
</p>
</div>


<br/>

<div className="admonition admonition_tip">
  <div>
    <img src="/img/info-circle-green.svg"/> <b>Payment Made as a Juridical person (PJ)</b>
  </div>
  <p>The customer associated with the transaction can be a Juridical person. In this case, it is necessary to provide the Corporate Name and CNPJ of the paying company in the <code>juridical_person</code> attribute.</p>
</div>

<br/>

<div className="admonition admonition_tip">
  <div>
    <img src="/img/lightbulb-on-green.svg"/> <b>List of All Possible Statuses of a Carnet and Installments</b>
  </div>
  <p>All carnets have a status that represents their “situation.” It is important to know the possible statuses of the API to perform the necessary actions in your system.

  Check <a href="/en/docs/api-cobrancas/status" target="_blank">here</a> for all the details of the possible transaction statuses.</p>
</div>

<br/>

<div className="admonition admonition_tip">
  <div>
    <img src="/img/lightbulb-on-green.svg"/> <b>Callbacks (notifications) of Installments and Carnets from the API to Your System</b>
  </div>
  <p>Notifications allow you to receive information when the status of a transaction is changed, such as when an installment is paid, for example.

  Check <a href="/en/docs/api-cobrancas/notificacoes" target="_blank">here</a> for all the details on how to implement your notification URL.</p>
</div>
<br/>



## Return information from an existing carnet

To retrieve information about a created carnet, you should send a `GET` request to the route `/v1/carnet/:id`.

   
<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/carnet/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/carnet_id.md"/>
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  Input parameter: enter the "carnet_id" of the desired carnet
  ``` 
  </TabItem>
 
  </Tabs>
  <br/>

  <b>Responses</b>

  The responses below represent consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
     { label: '🟢 200 (Carnet with Bolix)', value: 'saida', },
     { label: '🟢 200 (Traditional carnet)', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "carnet_id": 14196, // number ID referring to the carnet
      "status": "active", // active carnet
      "repeats": 3, // number of installments in the carnet
      "cover": "link_https_to_access_Bolix_installment_plan_cover", // HTTP link to the carnet cover
      "link": "link_https_to_access_Bolix_installments", // HTTP link to access the carnet installments
      "pdf": {
          "carnet": "pdf_Bolix_installments",
          "cover": "pdf_Bolix_cover"
      },
      "value": 22500, // value in cents, for example: 22500 equals R$ 225.00
      "custom_id": null, // optional custom identifier
      "notification_url": null, // notification URL link
      "split_items": false, // split items among installments (Boolean).
      // Determines whether the carnet items will be divided among installments (true), or if the value of each installment will be the total value of the items (false)
      "charges": [
        {
          "charge_id": 184208, // ID number referring to the generated transaction
          "status": "waiting", // selected payment method, awaiting payment confirmation
          "url": "link_https_to_access_Bolix_installment", // HTTP link to the carnet's first installment
          "pdf": {
            "charge": "pdf_Bolix_installment"
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // barcode of the first installment's ticket
          "pix": {
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code image
          },
          "parcel": 1, // installment number of the carnet
          "expire_at": "2023-08-20", // due date of the carnet's first installment
          "configurations": {
            "interest": 33, // amount charged as interest per day after the due date
            "fine": 200 // amount charged as fine after the due date
          }
        },
        {
          "charge_id": 184209, // ID number referring to the generated transaction
          "status": "waiting", // selected payment method, awaiting payment confirmation
          "url": "link_https_to_access_Bolix_installment", // HTTP link to the carnet's second installment
          "pdf": {
              "charge": "pdf_Bolix_installment"
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // barcode of the second installment's ticket
          "pix": {
              "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
              "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code image
          },
          "parcel": 2, // installment number of the carnet
          "expire_at": "2023-09-20", // due date of the carnet's second installment
          "configurations": {
              "interest": 33, // amount charged as interest per day after the due date
              "fine": 200 // amount charged as fine after the due date
          }
        },
        {
          "charge_id": 184210, // ID number referring to the generated transaction
          "status": "waiting", // selected payment method, awaiting payment confirmation
          "url": "link_https_to_access_Bolix_installment", // HTTP link to the carnet's third installment
          "pdf": {
            "charge": "pdf_Bolix_installment"
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // barcode of the third installment's ticket
          "pix": {
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode or copy and paste
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code image
          },
          "parcel": 3, // installment number of the carnet
          "expire_at": "2023-10-20", // due date of the carnet's third installment
          "configurations": {
            "interest": 33, // amount charged as interest per day after the due date
            "fine": 200 // amount charged as fine after the due date
          }
        }
      ],
      "created_at": "2022-02-08 09:21:36",
      "history": [ // properties below with the entire history of this carnet
        {
          "message": "Active carnet",
          "created_at": "2022-02-08 09:21:36"
        }
      ]
    }
}
  ``` 
  </TabItem>
  <TabItem value="200">

  ```json
{
    "code": 200, // HTTP return "200" stating that the request was successful
    "data": {
      "carnet_id": 14196, // número da ID referente ao carnê
      "status": "active", // carnê ativo
      "repeats": 3, // número de parcelas do carnê
      "cover": "link_https_para_acesso_a_capa_carnê", // link HTTP da capa do carnê
      "link": "link_https_para_acesso_as_parcelas_carnê",
      "pdf": {
        "carnet": "pdf_parcelas_carnê",
        "cover": "pdf_capa_carnê"
      },
      "value": 22500, // valor, em centavos, por exemplo: 22500 equivale a R$ 225,00
      "custom_id": null, // identificador próprio opcional
      "notification_url": null, // link URL de notificação
      "split_items": false, // dividir itens entre as parcelas (Boolean). Define se os itens do carnê serão divididos entre as parcelas (true), ou se o valor de cada parcela será o valor total dos itens (false)
      "charges": [
        {
          "charge_id": 184208, // número da ID referente à transação gerada
          "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
          "url": "link_https_para_acesso_a_parcela_carnê", // link HTTP da primeira parcela do carnê
          "pdf": {
            "charge": "pdf_parcela_carnê_Bolix"
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // código de barras do boleto da primeira parcela
          "parcel": 1, // número da parcela do carnê
          "expire_at": "2023-08-20", // data de vencimento da primeira parcela do carnê
          "configurations": {
            "interest": 33, // valor cobrado de juros por dia após a data de vencimento
            "fine": 200 // valor cobrado de multa após o vencimento
          }
        },
        {
          "charge_id": 184209, // número da ID referente à transação gerada
          "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
          "url": "link_https_para_acesso_a_parcela_carnê", // link HTTP da segunda parcela do carnê
          "pdf": {
            "charge": "pdf_parcela_carnê_Bolix"
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // código de barras do boleto da segunda parcela
          "parcel": 2, // número da parcela do carnê
          "expire_at": "2023-09-20", // data de vencimento da segunda parcela do carnê
          "configurations": {
            "interest": 33, // valor cobrado de juros por dia após a data de vencimento
            "fine": 200 // valor cobrado de multa após o vencimento
          }
        },
        {
          "charge_id": 184210, // número da ID referente à transação gerada
          "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
          "url": "link_https_para_acesso_a_parcela_carnê", // link HTTP da terceira parcela do carnê
          "pdf": {
            "charge": "pdf_parcela_carnê_Bolix"
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // código de barras do boleto da terceira parcela
          "parcel": 3, // número da parcela do carnê
          "expire_at": "2023-10-20", // data de vencimento da terceira parcela do carnê
          "configurations": {
            "interest": 33, // valor cobrado de juros por dia após a data de vencimento
            "fine": 200 // valor cobrado de multa após o vencimento
          }
        }
      ],
      "created_at": "2022-02-08 09:21:36",
      "history": [ // propriedades abaixo com todo o histórico deste carnê
        {
          "message": "Carnê ativo",
          "created_at": "2022-02-08 09:21:36"
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


## Include "notification_url" and "custom_id" for carnets

You can define or modify the information sent in the <code>metadata</code> property of the transaction at any time. This endpoint is of <b>extreme importance</b> to update the notification URL linked to the transactions or modify the previously associated custom_id.

To change the <code>notification_url</code> and/or <code>custom_id</code> of a transaction, you must send a <code>PUT</code> request to the route <code>/v1/carnet/:id/metadata</code>.

<b>Use cases for this endpoint:</b>

<ol>
<li>The integrator person changed the server IP that was associated with the notification URL of the transactions;</li>
<li>The integrator person updated the notification URL for the new transactions created (<code>createCarnet</code>), but also needs to update the previous transactions (<code>updateCarnetMetadata</code>) that were generated and are associated with the incorrect/outdated URL;</li>
<li>SSL (https) was installed on the client's server, and even if the client sets a 301 or 302 redirection rule, it will be necessary to define the new URL in the transactions that are using the "old" URL;</li>
<li>The integrator person generated charges without informing the notification URL when sending the transaction creation request;</li>
<li>Modify or add information along with the <code>custom_id</code> attribute associated with the previously generated transactions; and other possible scenarios.</li>
</ol>


<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/metadata</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/carnet_url_de_retorno.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "notification_url": "htttp://www.meusite.com.br/notificacoes/",
    "custom_id": "258789877"
  }
  ``` 
  </TabItem>
  
  </Tabs>

  <br/>  
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Change due date of specific installment of the carnê

This feature allows you to change the due date of a specific installment of a carnê. However, only installments with status <code>waiting</code> or <code>unpaid</code> can have their due dates changed.

To make this change, you need to provide the <code>carnet_id</code>, the installment number you want to update, and the new due date <code>expire_at</code>, which must be in the format YYYY-MM-DD.

To change the due date of a specific installment of a carnê, make a <code>PUT</code> request to the route <code>/v1/carnet/:id/parcel/:parcel</code> where <code>:id</code> is the identifier of the carnê and <code>:parcel</code> is the number of the installment you want to update the due date (e.g., <code>3</code> - if it's the third installment you want to change the due date).


<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>Make sure that the new due date is <strong>after the current date</strong> for the change to be valid.</p>
</div>
<br/>



<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/<HighlightVar>:parcel</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/alterar_vencimento_parcela.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
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
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

## Change due dates for installments of a carnet

This feature allows you to change the due date for multiple installments of a carnet at once. However, only installments with a <code>waiting</code> or <code>unpaid</code> status can have their due dates changed.

To make this change, you need to provide the <code>carnet_id</code> and the number of the installment you want to update, along with the new due date <code>expire_at</code>, which must be in the format YYYY-MM-DD.

To change the due date of a specific installment of a carnet, make a <code>PUT</code> request to the route <code>/v1/carnet/:id/parcels</code>, where <code>:id</code> is the identifier of the carnet.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
<p>Make sure that the new due date is <strong>after the current date</strong> for the change to be valid.</p>
</div>
<br/>



<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcels</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/alterar_vencimento_parcela.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
  "parcels": [
      {
          "parcel": 1,
          "expire_at": "2024-01-10"
      },
      {
          "parcel": 2,
          "expire_at": "2024-02-11"
      },
      {
          "parcel": 3,
          "expire_at": "2024-03-15"
      },
      {
          "parcel": 4,
          "expire_at": "2024-04-19"
      }
  ]
}
  ``` 
  </TabItem>

  </Tabs>

  <br/>  
        
  <b>Responses</b>

  <br/> 

  The Responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: 'saida400', },
      { label: '🔴 500', value: 'saida500', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  <TabItem value="saida400">

  ```json
  //Attributes outside the schema
  {
  "code": 3500034,
  "error": "validation_error",
  "error_description": {
      "property": "/parcelss",
      "message": "Propriedade desconhecida (não está no schema)."
  }
}

//Missing parcel attribute
{
  "code": 3500034,
  "error": "validation_error",
  "error_description": {
      "property": "/parcels/0",
      "message": "A propriedade [parcel] é obrigatória."
  }
}

//Invalid expiration date format
{
  "code": 3500034,
  "error": "validation_error",
  "error_description": {
      "property": "/parcels/0/expire_at",
      "message": "A string não corresponde ao modelo: ^[12][0-9]{3}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$."
  }
}

//Missing due date
{
  "code": 3500034,
  "error": "validation_error",
  "error_description": {
      "property": "/parcels/0",
      "message": "A propriedade [expire_at] é obrigatória."
  }
}

  ```
  </TabItem>
  <TabItem value="saida500">

  ```json
  //Invalid Date
  {
  "code": 3500101,
  "error": "update_parcels",
  "error_description": "A propriedade [expire_at] informada é inválida. Não é possível antecipar o vencimento Parcela: [2]."
}

//Date before current day
{
  "code": 3500101,
  "error": "update_parcels",
  "error_description": "A propriedade [expire_at] informada é inválida. Data deve ser maior ou igual a data atual. Parcela: [2]."
}

//Change a paid or canceled installment
{
  "code": 3500101,
  "error": "update_parcels",
  "error_description": "Apenas transações com status [waiting] ou [unpaid] podem ser atualizadas. Parcela: [1]."
}

//Invalid parcel
{
  "code": 3500101,
  "error": "update_parcels",
  "error_description": "A propriedade [parcel] informada não existe. Parcela: [9]."
}

//Invalid carnet
{
  "code": 3500010,
  "error": "property_does_not_exists",
  "error_description": {
      "property": "id",
      "message": "A propriedade [id] informada não existe."
  }
}
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>
 

## Cancel a carnet

This feature allows you to cancel a specific carnet. To do this, you need to provide the <code>carnet_id</code> of the carnet you want to cancel. To cancel, make a <code>PUT</code> request to the route <code>/v1/carnet/:id/cancel</code>.


<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/cancel</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/carnet_id.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
Input parameter: enter the "carnet_id" of the desired carnet
  ``` 
  </TabItem>

  </Tabs>

  <br/>  
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>


## Cancel specific installment of a carnet

In addition to canceling an entire carnet, you can also cancel a specific installment within the carnet. To do this, provide the <code>carnet_id</code> of the carnet you want to cancel and the number of the installment you want to cancel. Then, send a <code>PUT</code> request to the route <code>/v1/carnet/:id/parcel/:parcel/cancel</code>, specifying the number of the installment you want to cancel (for example: <code>3</code> - if it's the third installment you want to cancel).

  

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/<HighlightVar>:parcel</HighlightVar>/cancel</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/cancelar_parcela.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
Input parameter: enter the "carnet_id" and the "parcel" of the desired transaction
  ``` 
  </TabItem>

  </Tabs>

  <br/>  
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>


 ## Resend the carnet to the desired email

You can also resend the carnet to a valid email address. To do this, make a <code>POST</code> request to the route <code>/v1/carnet/:id/resend</code>.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/carnet/<HighlightVar>:id</HighlightVar>/resend</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/carnet_resend_email.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
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
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  
  </Tabs>

</details>

</div>



<br/>


## Resending a specific installment of a carnet by email

It is possible to resend a specific installment of a carnet to a valid email address. To do this, make sure that the desired <code>carnet_id</code> is in the <code>waiting</code> status (i.e., "waiting").

If the installment is waiting, you can resend it by sending a <code>POST</code> request to the route <code>/v1/carnet/:id/resend</code>. In this request, you must provide the number of the installment you want to resend by email (for example: <code>3</code> - if it is the third installment you want to resend).
This way, the system will resend the selected installment to the desired email address.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/<HighlightVar>:parcel</HighlightVar>/resend</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/parcel_resend_email.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
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
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  
  </Tabs>

</details>

</div>



<br/>

## Adding a description to the history of a transaction

Just like individual transactions, a carnet also has a history that records all the actions the carnet has undergone over time. In this history, it is possible to add custom messages without affecting the flow of the carnet.

To add a custom message to the history of a carnet, simply send a <code>POST</code> request to the route <code>/v1/carnet/:id/history</code>.


<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/carnet/<HighlightVar>:id</HighlightVar>/history</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/carnet_acrecentar_info_historico.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
  {
    "description": "Charge for the 260MB internet service "
  }
  ``` 
  </TabItem>
 
  </Tabs>


  <br/>   
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  
  </Tabs>

</details>

</div>
<br/>


## Marking a specific carent as paid (manual settlement)

Sometimes, clients may make payments through other means, such as cash payments or bank transfers.

In the Efí account, it is only possible to manually confirm issuances made by slips or payment carnets. Charges made through payment links, even if the payment is made by slip, cannot be confirmed manually.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Important!</b>
</div>
In a transaction marked as paid, no payment amount is returned via API. Discounts, fines, and late fees will not be automatically applied.
</div>
<br/>

Learn about the two ways to manually confirm payment for a charge in Efí:


### 1. Through the Efí dashboard:

<ul>
<li>Log in to your Efí account <a href="https://usuario.gerencianet.com.br/login" target="_blank">here</a>;</li>
<li>Access the “Receber” menu and then “Gestão de cobranças”; </li>
<li>Select the “Carnês” option;</li>
<li>Choose the carnet you want to confirm;</li>
<li>Click on the blue "Marcar como pago" button.</li>
</ul>

There are no fees for this operation.

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Note</b>
</div>
It is not possible to manually confirm the payment of charges that have been canceled.
</div>
<br/>

### 2. Through API request:

Only transactions with status "waiting" or "unpaid" can be manually confirmed. There are two endpoints responsible for manual payment confirmations:

<ul>
<li><code>settleCharge</code>: Allows marking a specific transaction as paid (manual clearance);</li>
<li><code>settleCarnetParcel</code>: Allows marking a specific parcel of a carnet as paid (manual clearance).</li>
</ul>


<div class="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>NOTE</b>
</div>
<p>
Payment confirmations can be:
</p>
<p>
<li><b>Automatic Confirmations</b>: This is the default mechanism offered by the API through the <a href="/en/docs/api-cobrancas/notificacoes" target="_blank">notification URL.</a> In other words, we send a POST to your notification URL as soon as there is a change in the transaction status. Your system receives this information and performs the necessary processing. In this case, the status <code>paid</code> will be included in the notification we send. The transaction status will be <code>paid</code>.</li>

<li><b>Manual Confirmations</b>: Represented by the <code>settleCharge</code> and <code>settleCarnetParcel</code> endpoints. This is when the payment was made through alternative payment methods (e.g., cash payment), and the integrator manually confirms it through the Efí panel, via API request, or through their own management system. In this case, the transaction status will be <code>settled</code>.</li>
</p>
</div>
<br/>

To mark a transaction as paid (manual clearance), you should send a <code>PUT</code> request to the route <code>/v1/carnet/:id/settle</code>.


<div className="admonition admonition_caution">
  <div>
  <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
  </div>
Transações marcadas como paga não geram movimentações financeiras em uma conta Efí. Isso ocorre porque o controle financeiro não é realizado pela Efí.
</div>

<br/>

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/settle</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/carnet_id.md"/>
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
Input parameter: enter the "carnet_id" of the desired carnet
  ``` 
  </TabItem>

  </Tabs>

  <br/>  
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>


## Marking a specific installment of a payment plan as paid

To manually mark an installment of a payment plan as paid, you must provide the carnet ID (`carnet_id`) and the installment number you wish to mark as paid.

For instance, if you have a payment plan with 12 installments and want to mark the second installment as paid, you should send a <code>PUT</code> request to the route <code>/v1/carnet/:id/parcel/:parcel/settle</code>, where <code>:id</code> is the carnet ID (for example, 24744) and <code>:parcel</code> is the installment number (for example, 2).

Explore the two methods for manually confirming payment of a charge in Efí:


### 1. Through the Efí dashboard:

<ul>
<li>Log in to your Efí account <a href="https://usuario.gerencianet.com.br/login" target="_blank">here</a>;</li>
<li>Access the “Receber” menu, then “Gestão de cobranças”; </li>
<li>Select the “Carnês” option;</li>
<li>Choose the carnet you wish to confirm;</li>
<li>Then, click on the blue button "Marcar como pago".</li>
</ul>

This operation does not incur any fees.

<div class="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Note</b>
</div>
It is not possible to manually confirm the payment of charges that have been canceled.
</div>
<br/>

### 2. Through API request:

Only transactions with waiting or unpaid status can be manually confirmed. There are two endpoints responsible for manual payment confirmations:

<ul>
<li><code>settleCarnetParcel</code>: allows marking a specific installment of a payment plan as paid manually.</li>
</ul>

<br/>



<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/ <HighlightVar>:parcel</HighlightVar>/settle</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires activation of the <code>Billing API</code> in your application
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/charges/carnet/cancelar_parcela.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Input data', value: 'exemplo1', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
Input parameter: enter the "carnet_id" and the "parcel" of the desired transaction
  ``` 
  </TabItem>

  </Tabs>

  <br/>  
        
  <b>Responses</b>

  <br/> 

  The responses below represent consumption Success(200).
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "code": 200 // HTTP return "200" stating that the request was successful
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>



</div>