---
id: carne
title: Carnê
hide_title: true
sidebar_label: Carnê
---
<h1 className="titulo">Carnê</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Passo a passo para gerar um Carnê na API Efí
</div>

<br/>
<br/>

## Criando carnês

Um carnê é um conjunto de transações (parcelas) geradas em lote e com forma de pagamento já definida. As parcelas de um carnê vencem mensalmente, de acordo com a data definida pela pessoa integradora. Para gerar um carnê, você precisa informar os seguintes dados:
<ul>
<li><code>Item</code>: item que será sendo vendido;</li>
<li><code>Customer</code>: dados pessoais da pessoa pagadora;</li>
<li><code>Expire_at</code>: Data de vencimento da 1ª parcela do carnê;</li>
<li><code>Repeats</code>: Número de parcelas (repetições) do carnê.</li>
</ul>

Para gerar um carnê, você deve enviar uma requisição <code>POST</code> para a rota <code>/v1/carnet</code>  com o número de parcelas e o modo como será gerado, juntamente com os dados da transação e do cliente.

Cada carnê gerado possui um identificador único chamado <code>carnet_id</code>, e cada parcela desse carnê também possui um identificador único chamado <code>charge_id</code>.

<div className="payment">
<details className="col-100">
  <summary>
<b>Estrutura hierárquica dos atributos do Schema que podem ser utilizados:</b>
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
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/create_carnet.md" />
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200 (Carnê com Bolix)', value: 'saida', },
      { label: '🟢 200 (Carnê tradicional)', value: '200', },
    ]}>

  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "carnet_id": 12345, // identificador único do carnê
      "status": "up_to_date", // carnê encontra-se em dia, não há nenhuma parcela inadimplente. 
      "cover": "link_https_capa_do_carne", // link da capa do carnê
      "link": "link_https_do_carne", // link responsivo do carnê, de acordo com as repetições
      "carnet_link": "link_https_do_carne", // link do carnê, de acordo com as repetições
      "pdf": {
        "carnet": "link_https_do_pdf_do_carne", // link do PDF do Bolix (carnê), de acordo com as repetições
        "cover": "link_https_do_pdf_da_capa_do_carne" // link do PDF da capa do carnê
      },
      "charges": [
        {
          "charge_id": 511813, // número identificador da primeira parcela do carnê
          "parcel": "1", // número da parcela do carnê
          "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
          "value": 7500, // valor, em centavos, da primeira parcela do carnê (7500 equivale a R$ 75,00)
          "expire_at": "2023-12-20", // data de vencimento da parcela do carnê no seguinte formato: 2022-12-20 (equivale a 20/12/2022)       
          "url": "link_https_da_primeira_lamina", // link da primeira parcela (lâmina) do Bolix (carnê)
          "parcel_link": "link_https_da_primeira_lamina", // link responsivo da primeira parcela (lâmina) do Bolix (carnê)
          "pdf": {
            "charge": "link_https_da_primeira_lamina" // link do PDF da primeira parcela (lâmina) Bolix (carnê)
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // linha digitável da primeira parcela
          "pix": {
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode ou copia e cola
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code imagem
          }
        },
        {
          "charge_id": 511814, // número identificador da segunda parcela do carnê
          "parcel": "2", // número da parcela do carnê
          "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
          "value": 7500, // valor, em centavos, da segunda parcela do carnê (7500 equivale a R$ 75,00)
          "expire_at": "2023-01-20", // data de vencimento da parcela do carnê no seguinte formato: 2023-01-20 (equivale a 20/01/2023)
          "url": "link_https_da_segunda_lamina", // link da segunda parcela (lâmina) do carnê
          "parcel_link": "link_https_da_segunda_lamina", // link responsivo da segunda parcela (lâmina) do Bolix (carnê)
          "pdf": {
            "charge": "link_https_da_segunda_lamina" // link do PDF da segunda parcela (lâmina) do Bolix (carnê)
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // linha digitável da segunda parcela
          "pix": {
              "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode ou copia e cola
              "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code imagem
            }
        },
        {
          "charge_id": 511815, // número identificador da terceira parcela do carnê
          "parcel": "3", // número da parcela do carnê
          "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
          "value": 7500, // valor, em centavos, da terceira parcela do carnê (7500 equivale a R$ 75,00)
          "expire_at": "2023-02-20", // data de vencimento da parcela do carnê no seguinte formato: 2023-02-20 (equivale a 20/02/2023)
          "url": "link_https_da_terceira_lamina", // link da terceira parcela (lâmina) do carnê
          "parcel_link": "link_https_da_terceira_lamina", // link responsivo da terceira parcela (lâmina) do Bolix (carnê)
          "pdf": {
            "charge": "link_https_da_terceira_lamina" // link do PDF da terceira parcela (lâmina) Bolix (carnê)
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // linha digitável da terceira parcela
          "pix": {
             "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode ou copia e cola
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code imagem
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
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "carnet_id": 12345, // identificador único do carnê
      "status": "up_to_date", // carnê encontra-se em dia, não há nenhuma parcela inadimplente. Assim que o carnê é criado, ele também recebe este status up_to_date. O termo "up_to_date" equivale a "em dia"
      "cover": "link_https_capa_do_carne", // link da capa do carnê
      "link": "link_https_do_carne", // link do carnê, de acordo com as repetições
      "pdf": {
        "carnet": "link_https_do_pdf_do_carne", // link do PDF do carnê, de acordo com as repetições
        "cover": "link_https_do_pdf_da_capa_do_carne" // link do PDF da capa do carnê
      },
      "charges": [
        {
          "charge_id": 511813, // número identificador da primeira parcela do carnê
          "parcel": "1", // número da parcela do carnê
          "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
          "value": 7500, // valor, em centavos, da primeira parcela do carnê (7500 equivale a R$ 75,00)
          "expire_at": "2023-12-20", // data de vencimento da parcela do carnê no seguinte formato: 2022-12-20 (equivale a 20/12/2022)
          "url": "link_https_da_primeira_lamina", // link da primeira parcela (lâmina) do carnê
          "pdf": {
            "charge": "link_https_da_primeira_lamina" // link do PDF da primeira parcela (lâmina) do carnê
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000" // linha digitável da primeira parcela (lâmina) do carnê
        },
        {
          "charge_id": 511814, // número identificador da segunda parcela do carnê
          "parcel": "2", // número da parcela do carnê
          "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
          "value": 7500, // valor, em centavos, da segunda parcela do carnê (7500 equivale a R$ 75,00)
          "expire_at": "2023-01-20", // data de vencimento da parcela do carnê no seguinte formato: 2023-01-20 (equivale a 20/01/2023)
          "url": "link_https_da_segunda_lamina", // link da segunda parcela (lâmina) do carnê
          "pdf": {
            "charge": "link_https_da_segunda_lamina" // link do PDF da segunda parcela (lâmina) do carnê
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000" // linha digitável da segunda parcela (lâmina) do carnê
        },
        {
          "charge_id": 511815, // número identificador da terceira parcela do carnê
          "parcel": "3", // número da parcela do carnê
          "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
          "value": 7500, // valor, em centavos, da terceira parcela do carnê (7500 equivale a R$ 75,00)
          "expire_at": "2023-02-20", // data de vencimento da parcela do carnê no seguinte formato: 2023-02-20 (equivale a 20/02/2023)
          "url": "link_https_da_terceira_lamina", // link da terceira parcela (lâmina) do carnê
          "pdf": {
            "charge": "link_https_da_terceira_lamina" // link do PDF da terceira parcela (lâmina) do carnê
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000" // linha digitável da terceira parcela (lâmina) do carnê
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
    <img src="/img/info-circle-green.svg"/> <b>Atributo message</b>
  </div>
<p>Se você usar o atributo <code>message</code>, utilize o operador <code>\n</code> para efetuar a quebra de linha. Já incluímos esse operador no código que disponibilizamos.
</p>
</div>

<br/>

<div className="admonition admonition_tip">
 <div>
    <img src="/img/info-circle-green.svg"/> <b>Pagamento realizado como Pessoa Jurídica (PJ)</b>
  </div>
<p>O cliente associado à transação pode ser uma Pessoa Jurídica. Nesse caso,  é necessário informar a Razão Social e o CNPJ da empresa pagadora no atributo <code>juridical_person</code>.
</p>
</div>

<br/>

<div className="admonition admonition_tip">
 <div>
    <img src="/img/lightbulb-on-green.svg"/> <b>Relação de todos os possíveis status de um carnê e parcelas</b>
  </div>
<p>Todos as carnês possuem um status que representa sua “situação”. É importante conhecer os possíveis status da API para realizar as devidas ações em seu sistema.

Confira <a href="/docs/api-cobrancas/status" target="_blank">aqui</a> todos os detalhes dos possíveis status das transações.</p>
</div>

<br/>

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Callbacks (notificações) das parcelas e carnês da API para seu sistema</b>
</div>
As notificações permitem que você receba informações quando o status de uma transação for alterado, como quando uma parcela for paga, por exemplo.

Confira <a href="/docs/api-cobrancas/notificacoes" target="_blank">aqui</a> todos os detalhes sobre como implementar a sua URL de notificação.
</div>
<br/>


## Retornar informações de carnê existente

Para retornar informações de um carnê criado, você deve enviar uma requisição <code>GET</code> para a rota <code>/v1/carnet/:id</code>.
   
<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/carnet/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/carnet_id.md"/>
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
  Parâmetro de entrada: informe o "carnet_id" do carnê criado
  ``` 
  </TabItem>
 
  </Tabs>
  <br/>

  <b>Respostas</b>

  As respostas abaixo representam Sucesso(200) do consumo.
  <Tabs
    defaultValue="saida"
    values={[
     { label: '🟢 200 (Carnê com Bolix)', value: 'saida', },
      { label: '🟢 200 (Carnê tradicional)', value: '200', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
    "data": {
      "carnet_id": 14196, // número da ID referente ao carnê
      "status": "active", // carnê ativo
      "repeats": 3, // número de parcelas do carnê
      "cover": "link_https_para_acesso_a_capa_carnê_Bolix", // link HTTP da capa do carnê
      "link": "link_https_para_acesso_as_parcelas_carnê_Bolix",
      "pdf": {
        "carnet": "pdf_parcelas_carnê_Bolix",
        "cover": "pdf_capa_carnê_Bolix"
      },
      "value": 22500, // valor, em centavos, por exemplo: 22500 equivale a R$ 225,00
      "custom_id": null, // identificador próprio opcional
      "notification_url": null, // link URL de notificação
      "split_items": false, // dividir itens entre as parcelas (Boolean).
      //Define se os itens do carnê serão divididos entre as parcelas (true), ou se o valor de cada parcela será o valor total dos itens (false)
      "charges": [
        {
          "charge_id": 184208, // número da ID referente à transação gerada
          "status": "waiting", // forma de pagamento selecionada, aguardando a confirmação do pagamento
          "url": "link_https_para_acesso_a_parcela_Bolix", // link HTTP da primeira parcela do carnê
          "pdf": {
            "charge": "pdf_parcela_carnê_Bolix"
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // código de barras do boleto da primeira parcela
          "pix":{
             "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode ou copia e cola
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code imagem
            },
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
          "url": "link_https_para_acesso_a_parcela_Bolix", // link HTTP da segunda parcela do carnê
          "pdf": {
            "charge": "pdf_parcela_carnê_Bolix"
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // código de barras do boleto da segunda parcela
          "pix":{
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode ou copia e cola
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code imagem
          },
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
          "url": "link_https_para_acesso_a_parcela_Bolix", // link HTTP da terceira parcela do carnê
          "pdf": {
            "charge": "pdf_parcela_carnê_Bolix"
          },
          "barcode": "00000.00000 00000.000000 00000.000000 0 00000000000000", // código de barras do boleto da terceira parcela
          "pix":{
            "qrcode": "00020101021226990014BR.GOV.BCB.PIX2577qrcodes-pix.gerencianet.com.br/bolix/v2/cobv/0000000000000000000000000000GERENCIANET SA6010OURO PRETO62070503***63047CB1", // BRCode ou copia e cola
            "qrcode_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc vMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMCAwaDQ1djQ1SD..." // QR Code imagem
          },
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
  <TabItem value="200">

  ```json
{
    "code": 200, // retorno HTTP "200" informando que o pedido foi bem sucedido
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


  ## Incluir "notification_url" e "custom_id" de carnês

Você pode definir ou modificar as informações enviadas na propriedade <code>metadata</code> da transação a qualquer momento. Este endpoint é de <b>extrema importância</b> para atualizar a URL de notificação vinculada às transações ou modificar o custom_id associado anteriormente.

Para alterar a <code>notification_url</code> e/ou <code>custom_id</code> de uma transação, você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/carnet/:id/metadata</code>.

<b>Casos de uso deste endpoint:</b>

<ol>
<li>Pessoa integradora alterou o IP do servidor que estava associado à URL de notificação das transações;</li>
<li>Pessoa integradora atualizou a URL de notificação para as novas transações criadas (<code>createCarnet</code>), mas precisa atualizar também as transações anteriores (<code>updateCarnetMetadata</code>) que foram geradas e que estão associadas com a URL incorreta/desatualizada;</li>
<li>Foi instalado SSL (https) no servidor do cliente e mesmo que o cliente defina uma regra de redirecionamento 301 ou 302, será necessário definir a nova URL nas transações que estão usando a URL "antiga";</li>
<li>Pessoa integradora gerou cobranças sem informar a URL de notificação ao enviar a requisição de criação da transação;</li>
<li>Modificar ou acrescentar uma informação junto ao atributo <code>custom_id</code>associado às transações geradas previamente; e outros cenários possíveis. </li>
</ol>

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/metadata</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/carnet_url_de_retorno.md" />
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
    "notification_url": "htttp://www.meusite.com.br/notificacoes/",
    "custom_id": "258789877"
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

  ## Alterar vencimento de parcela específica do carnê

 Este recurso permite que você altere a data de vencimento de uma parcela específica de um carnê. No entanto, somente parcelas com status <code>waiting</code> ou <code>unpaid</code> podem ter suas datas de vencimento alteradas.

  Para realizar essa alteração, você precisa fornecer o <code>carnet_id</code>o número da parcela que deseja atualizar e a nova data de vencimento <code>expire_at</code>, que deve estar no formato YYYY-MM-DD.

  Para alterar a data de vencimento de uma parcela específica de um carnê, faça uma requisição <code>PUT</code> para a rota <code>/v1/carnet/:id/parcel/:parcel</code>onde <code>:id</code> é o identificador do carnê e <code>:parcel</code> é o número da parcela que você deseja atualizar a data de vencimento (por exemplo: <code>3</code> - se for a terceira parcela que você deseja alterar o vencimento)

  <div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Certifique-se de que a nova data de vencimento seja <strong>após à data atual</strong> para que a alteração seja válida.</p>
</div>
<br/>


<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/<HighlightVar>:parcel</HighlightVar></b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/alterar_vencimento_parcela.md" />
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

  ## Alterar vencimento de parcelas de um carnê

 Este recurso permite que você altere a data de vencimento de varias parcelas de um carnê, de uma só´vez. No entanto, somente parcelas com status <code>waiting</code> ou <code>unpaid</code> podem ter suas datas de vencimento alteradas.

  Para realizar essa alteração, você precisa fornecer o <code>carnet_id</code>o número da parcela que deseja atualizar e a nova data de vencimento <code>expire_at</code>, que deve estar no formato YYYY-MM-DD.

  Para alterar a data de vencimento de uma parcela específica de um carnê, faça uma requisição <code>PUT</code> para a rota <code>/v1/carnet/:id/parcels</code>onde <code>:id</code> é o identificador do carnê.

  <div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
<p>Certifique-se de que a nova data de vencimento seja <strong>após à data atual</strong> para que a alteração seja válida.</p>
</div>
<br/>


<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcels</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/alterar_vencimento_parcela.md" />
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas do consumo.
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
    "code": 200 // retorno HTTP "200" informando que o pedido foi bem sucedido
  }
  ```
  </TabItem>
  <TabItem value="saida400">

  ```json
  //Atributos fora do schema
  {
  "code": 3500034,
  "error": "validation_error",
  "error_description": {
      "property": "/parcelss",
      "message": "Propriedade desconhecida (não está no schema)."
  }
}

//Falta do aributo parcel
{
  "code": 3500034,
  "error": "validation_error",
  "error_description": {
      "property": "/parcels/0",
      "message": "A propriedade [parcel] é obrigatória."
  }
}

//Formato da data de vencimento inválida
{
  "code": 3500034,
  "error": "validation_error",
  "error_description": {
      "property": "/parcels/0/expire_at",
      "message": "A string não corresponde ao modelo: ^[12][0-9]{3}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$."
  }
}

//Falta da data de vencimento
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
  //Data inválida
  {
  "code": 3500101,
  "error": "update_parcels",
  "error_description": "A propriedade [expire_at] informada é inválida. Não é possível antecipar o vencimento Parcela: [2]."
}

//Data antes do dia atual
{
  "code": 3500101,
  "error": "update_parcels",
  "error_description": "A propriedade [expire_at] informada é inválida. Data deve ser maior ou igual a data atual. Parcela: [2]."
}

//Alterar uma parcela paga ou cancelada
{
  "code": 3500101,
  "error": "update_parcels",
  "error_description": "Apenas transações com status [waiting] ou [unpaid] podem ser atualizadas. Parcela: [1]."
}

//Parcela inválida
{
  "code": 3500101,
  "error": "update_parcels",
  "error_description": "A propriedade [parcel] informada não existe. Parcela: [9]."
}

//Carnê inválido
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
 

  ## Cancelar um carnê
  
  Este recurso permite que você cancele um carnê específico. Para isso, você precisa informar o <code>carnet_id</code> do carnê que deseja cancelar. Para efetuar o cancelamento, faça uma requisição <code>PUT</code> para a rota <code>/v1/carnet/:id/cancel</code>.


<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/cancel</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/carnet_id.md" />
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
Parâmetro de entrada: informe a "carnet_id" do carnê desejado
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


## Cancelar parcela específica de carnê
  
  Além do cancelamento completo de um carnê, você também pode cancelar uma parcela específica dentro do carnê. Para isso, informe o <code>carnet_id</code> o carnê que deseja cancelar e o número da parcela que deseja cancelar. Em seguida, envie uma requisição <code>PUT</code> para a rota <code>/v1/carnet/:id/parcel/:parcel/cancel</code>, informando o número da parcela que deseja cancelar (por exemplo: <code>3</code> - se for a terceira parcela que você deseja cancelar). 
  

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/<HighlightVar>:parcel</HighlightVar>/cancel</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/cancelar_parcela.md" />
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
Parâmetro de entrada: informe o "carnet_id" e a "parcel" da transação desejada
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


  ## Reenvio do carnê para o email desejado 
  
Você também pode reenviar o carnê para um endereço de e-mail válido. Para isso, faça uma requisição <code>POST</code> para a rota <code>/v1/carnet/:id/resend</code>.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/carnet/<HighlightVar>:id</HighlightVar>/resend</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/carnet_resend_email.md" />
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


## Reenvio de uma parcela específica de carnê por e-mail
  
É possível reenviar uma parcela específica de um carnê para um endereço de e-mail válido. Para isso, verifique que o <code>carnet_id </code> desejado esteja no status <code>waiting</code> (ou seja, "aguardando").

Se a parcela estiver aguardando, você pode fazer o reenvio enviando uma requisição <code>POST</code> para a rota <code>/v1/carnet/:id/resend</code>. Nessa requisição, você deve informar o número da parcela que deseja reenviar por e-mail (por exemplo: <code>3</code> - se for a terceira parcela que você deseja reenviar).
Dessa forma, o sistema irá reenviar a parcela selecionada para o endereço de e-mail desejado.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/<HighlightVar>:parcel</HighlightVar>/resend</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/parcel_resend_email.md" />
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
  
Assim como nas transações individuais, um carnê também possui um histórico que registra todas as ações que o carnê sofreu ao longo do tempo. Nesse histórico, é possível adicionar mensagens personalizadas, sem que elas afetem o fluxo do carnê.

Para adicionar uma mensagem personalizada ao histórico de um carnê, basta enviar uma requisição <code>POST</code> para a rota <code>/v1/carnet/:id/history</code>.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/carnet/<HighlightVar>:id</HighlightVar>/history</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
          Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/carnet_acrecentar_info_historico.md" />
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
    "description": "Camisa Polo tamanho G cor azul."
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


## Marcar como pago (baixa manual) um determinado carnê
  
  Por vezes, alguns clientes acabam efetuando o pagamento de cobranças de outras maneiras, como um pagamento em mãos ou um depósito bancário.

Na conta Efí, somente é possível confirmar manualmente as emissões que foram feitas por boletos ou carnês. As cobranças realizadas por meio de links de pagamento, mesmo que o pagamento seja realizado por boleto, não podem ser confirmadas manualmente.

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Importante!</b>
</div>
Em uma transação marcada como paga, nenhum valor de pagamento é retornado via API. Não serão aplicados automaticamente descontos, multas e moras.
</div>
<br/>

Conheça as duas maneiras de confirmar manualmente o pagamento de uma cobrança na Efí:

### 1. Por meio do painel Efí:

<ul>
<li>Faça <a href="https://usuario.gerencianet.com.br/login" target="_blank">login</a> em sua conta Efí;</li>
<li>Acesse o menu “Receber” e, logo em seguida, “Gestão de cobranças”; </li>
<li>Selecione a opção “Carnês”;</li>
<li>Escolha o carnê que deseja confirmar;</li>
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
<li><code>settleCharge</code>: permite marcar como pago (baixa manual) uma determinada transação;</li>
<li><code>settleCarnetParcel</code>: permite marcar como pago (baixa manual) uma determinada parcela de um carnê.</li>
</ul>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>NOTA</b>
</div>
<p>
As confirmações de pagamento podem ser:
</p>
<p>
<li><b>Confirmações Automáticas</b>: é o mecanismo padrão oferecido pela API por meio da <a href="/docs/api-cobrancas/notificacoes" target="_blank">URL de notificação.</a> Ou seja, disparamos um POST para sua URL de notificação assim que houver uma mudança no status da transação, seu sistema recepciona essa informação e realiza as tratativas para as quais foi designado. Em outras palavras, o status <code>paid</code> estará contido na notificação que enviamos. Neste caso, o status da transação será <code>paid</code>.</li>

<li><b>Confirmações Manuais</b>: representada pelos endpoints <code>settleCharge</code> e <code>settleCarnetParcel</code>.  É quando o pagamento foi realizado por formas de pagamento alternativas (ex: pagamento em mãos) e o integrador efetuou a confirmação manual pelo painel Efí, via requisição à API ou pelo seu próprio sistema de gestão. Neste caso, o status da transação será <code>settled</code>.</li>
</p>
</div>
<br/>


Para marcar uma transação como paga (baixa manual), você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/carnet/:id/settle</code>.

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
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/carnet_id.md"/>
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
Parâmetro de entrada: informe a "carnet_id" da transação desejada
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


## Marcar como pago determinada parcela de carnê

Para marcar manualmente uma parcela de um carnê como paga, você deve fornecer o ID do carnê (carnet_id) e o número da parcela do carnê que deseja marcar como pago.

Por exemplo, se você tem um carnê com 12 parcelas, e deseja marcar a segunda parcela como paga, você deve enviar uma requisição <code>PUT</code> para a rota <code>/v1/carnet/:id/parcel/:parcel/settle</code>, onde <code>:id</code> é o ID do carnê (por exemplo, 24744) e <code>:parcel</code> é o número da parcela (por exemplo, 2).

Conheça as duas maneiras de confirmar manualmente o pagamento de uma cobrança na Efí:

### 1. Por meio do painel Efí:

<ul>
<li>Faça <a href="https://usuario.gerencianet.com.br/login" target="_blank">login</a> em sua conta Efí;</li>
<li>Acesse o menu “Receber” e, logo em seguida, “Gestão de cobranças”; </li>
<li>Selecione a opção “Carnês”;</li>
<li>Escolha o carnê que deseja confirmar;</li>
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


<ul><li><code>settleCarnetParcel</code>: permite marcar como pago (baixa manual) uma determinada parcela de um carnê.</li></ul>

<br/>


<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/ <HighlightVar>:parcel</HighlightVar>/settle</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer ativação da <code>API de Emissão de cobranças</code> em sua aplicação
          </div>
          <div className="right">
          <Modal filename="/markdown/charges/carnet/cancelar_parcela.md" />
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
Parâmetro de entrada: informe o "carnet_id" e a "parcel" da transação desejada
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



</div>