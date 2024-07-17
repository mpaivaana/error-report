---
id: checkout-lightbox
title: Checkout via Lightbox
hide_title: true
sidebar_label: Checkout via Lightbox
---
<h1 className="titulo">Checkout via Lightbox</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Modal from "@site/src/scripts/modal.js" 
import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Passo a passo para a integração com o Lightbox na API Efí
</div>

<br/>
<br/>

## Utilizando Lightbox

A integração com o Lightbox da Efí lhe permite exibir o formulário de coleta das informações de pagamento sobreposta à sua página de checkout. Por exemplo, quando o cliente adiciona os produtos no carrinho e fecha o pedido, apenas esmaecemos o fundo do seu site e o comprador visualiza uma nova janela modal para preenchimento dos dados de pagamento.

Apesar de ser um facilitador, o Lightbox requer que a integração no backend seja realizada normalmente.
<br/>

## Adicionando o Lightbox em sua página

Primeiramente, será necessário adicionar um script em sua página que disponibiliza as funções necessárias à construção e funcionamento do Lightbox.

Após a inserção do script, as seguintes funções ficarão disponíveis:

- <code>ready()</code>
- <code>lightbox()</code>
- <code>show()</code>

<br/>


## Inicialização do Lightbox

<div className="tables">
<table>
  <tbody>
    <tr>
      <th>Parâmetros</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>callback*</td>
      <td>Function</td>
      <td>Função de inicialização que possibilita a chamada das demais funções.  <br/>
  
<em>Parâmetro(s) de callback</em><br/>
  
<code>object\*</code>, Objeto que recebe as instâncias das outras funções.</td>
    </tr>
  </tbody>
</table>
</div>


<br/>


## Métodos de pagamentos disponíveis

<div className="tables">
<table>
  <tbody>
    <tr>
      <th>Parâmetros</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>available_payment_forms</td>
      <td>Array</td>
      <td>Array com a(s) forma(s) de pagamento que o Lightbox contemplará. <br/>
  
As opções disponíveis são:<br/>
  
- banking_billet (boleto bancário);<br/>
- credit_card (cartão de crédito);<br/>
- pix (pix)
</td>
    </tr>
  </tbody>
</table>
</div>

<br/>

## Exibição do Lightbox

<div className="tablea">
<table>
  <tbody>
    <tr>
      <th>Parâmetros</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>data</td>
      <td>Object</td>
      <td>Objeto com as informações essências para a construção do Lightbox. Os atributos são: <br/>
  
- items: Array com os items que serão adquiridos pelo cliente. Cada instância deste array será um objeto que deverá ter, obrigatoriamente, name e value (<strong>valor inteiro, ex.: R$ 123,00 = 12300</strong>). As instâncias também poderão ter amount, cujo valor padrão é 1.<br/>
  
- actionForm: URL do backend para onde serão enviadas as informações coletadas do cliente.<br/>
- shippingCosts: Valor do frete, em inteiro. (<strong >R$ 50,00 = 5000</strong>)<br/>
- customer: Boolean que indica se deverá solicitar os dados do cliente (true) ou não (false). O valor padrão é true <br/>
- shippingAddress: Boolean que indica se deverá solicitar os dados de endereço de entrega (true) ou não (false). O valor padrão é true.
</td>
    </tr>
  </tbody>
</table>
</div>

<br/>

## Realizando a integração
O Lightbox funciona como uma tela de pagamento para seu site ou aplicação. Quando o comprador preencher os campos, escolher a forma de pagamento e finalizar no Lightbox, um POST será enviado para a URL do back-end informada no parâmetro <code>actionForm</code>, contendo os dados para a emissão da cobrança.

Recebendo em seu back-end as informações de pagamento vindos do Lightbox, deverá ser implementada a integração com a API da Efí e realizar a requisição para registro da transação, podendo ser utilizada uma de nossas [SDKs disponíveis](/docs/sdk/introducao). Sendo necessário o integrador desenvolver também a solução de retorno das notificações, utilizando da funcionalidade de callback para boleto e cartão, e o webhook para Pix.  
<br/>

## Exemplo

Tendo o script com Identificador de conta adicionado, ele irá preparar a pagina para a execução do Lightbox, sendo necessário a função <code>ready((obj) => {})</code> para inicialização.  
Para ser aberto o modal do Lightbox através do click em um botão, este botão deverá conter o atributo obrigatório <code>rel="gn_lightbox"</code> que irá executar a função <code>show(data)</code>.

<Tabs
    defaultValue="front-end"
    values={[
      { label: 'Front-end', value: 'front-end', },
      { label: 'Back-end', value: 'back-end', }
    ]}>
  <TabItem value="front-end">

  ```html
    <!DOCTYPE html>
  <head>
    <script type='text/javascript'>
    var identificadorConta = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    var v = parseInt(Math.random() * 1000000);
    s.src = 'https://api.gerencianet.com.br/v1/cdn/lightbox/' + identificadorConta + '/' + v;
    s.async = false;
    s.id = identificadorConta;
    if (!document.getElementById(identificadorConta)) {
        document.getElementsByTagName('head')[0].appendChild(s);
    };
    $gn = {
        validForm: true,
        processed: false,
        done: {},
        ready: function (fn) {
            $gn.done = fn;
        }
    };
		</script>
    
    <script>
      $gn.ready(function(obj){
 
        var payment_forms = ["credit_card", "banking_billet","pix"];
  			obj.lightbox(payment_forms);
 
        obj.jq('#button_lightbox').click(function(evt) {
 
          var data = {
            items: [
              {
                name: 'Item 1', // nome do item, produto ou serviço
                value: 12000 // valor (12000 = R$ 120,00) (Obs: É possível a criação de itens com valores negativos. Porém, o valor total da fatura deve ser superior ao valor mínimo para geração de transações.)
              },
              {
                name: 'Item 2', // nome do item, produto ou serviço
                value: 4000, // valor (4000 = R$ 40,00)
                amount: 1 // quantidade
              }
            ],
            shippingCosts: 3560,
            actionForm: 'http://your_domain/your_backend_url'
          };
 
          obj.show(data);
 
        });
 
      });
    </script>
  </head>
 
  <body>
    <button rel="gn_lightbox" id='button_lightbox'>
      Abrir Lightbox
    </button>
  </body>
</html>
  ```
  </TabItem>

   <TabItem value="back-end">

  ```php
    <?php

/**
 * Iniciação da SDK
 */
require_once __DIR__ . '/vendor/autoload.php';

use Gerencianet\Exception\GerencianetException;
use Gerencianet\Gerencianet;


/**
 * Definição das credenciais
 */
$options = [
    "client_id" => "Client_Id_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "client_secret" => "Client_Secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "pix_cert" => "./certs/developmentCertificate.pem",
    "sandbox" => true,
    "debug" => false,
    "timeout" => 30
];

$expirationTime = 5; // (int) quantidade de dias para vencimento do Boleto e Pix

$pixKey = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";


/**
 * Recebendo dados do pedido enviados pelo Lightbox
 */
$postItems = isset($_POST['items']) ? $_POST['items'] : null;
$postShipping = isset($_POST['shippingCosts']) ? $_POST['shippingCosts'] : null;
$postCustomer = isset($_POST['customer']) ? $_POST['customer'] : null;
$postShippingAddress = isset($_POST['shippingAddress']) ? $_POST['shippingAddress'] : null;
$postPayment = isset($_POST['payment']) ? $_POST['payment'] : null;

$json = file_get_contents("./db/products.json");
$products = json_decode($json);
$totalValue = 0;

foreach ($postItems as $item) {
    $i = null;
    $i = [
        'name' => $item['name'],
        'amount' => (int)$item['amount']
    ];

    // Observe que você deve obter os valores do produto da sessão/banco de dados.
    // O exemplo fornecido abaixo é apenas para fins ilustrativos
    foreach ($products as $product) {
        if ($product->code == $item['code']) {
            $i['value'] = $product->price * 100;
            $totalValue += $i['value'];
            break;
        }
    }
    $items[] = $i;
}


try {

    /**
     * Método de pagamento Pix
     */
    if ($postPayment['method'] == 'pix') {

        $body = [
            "calendario" => [
                "expiracao" => ((int)$expirationTime * 86400) // Expiração definida em segundos
            ],
            "valor" => [
                "original" => number_format(strval(($totalValue + (int)$postShipping) / 100), 2, '.', '')
            ],
            "chave" => $pixKey, // Chave pix da conta Gerencianet do recebedor
            "infoAdicionais" => [
                [
                    "nome" => "Produtos",
                    "valor" => "Valor total: " . number_format(($totalValue / 100), 2, ',', '.')
                ],
                [
                    "nome" => "Frete",
                    "valor" => "Valor: " . number_format(((int)$postShipping / 100), 2, ',', '.')
                ]
            ]
        ];

        if ($postCustomer['person'] === 'juridical') {
            $body['devedor'] = [
                'nome' => $postCustomer['corporate_name'],
                'cnpj' => $postCustomer['cnpj']
            ];
        } else {
            $body['devedor'] = [
                'nome' => $postCustomer['name'],
                'cpf' => $postCustomer['cpf']
            ];
        }

        $api = Gerencianet::getInstance($options);

        // Gera a cobrança Pix
        $pix = $api->pixCreateImmediateCharge([], $body);

        // Verifica a resposta recebida
        if ($pix['txid']) {

            $params = [
                'id' => $pix['loc']['id']
            ];

            // Obtém o QR Code da cobrança gerada
            $qrcode = $api->pixGenerateQRCode($params);

            $returnPix = [
                "code" => 200,
                "data" => [
                    "pix" => $pix,
                    "qrcode" => $qrcode
                ]
            ];

            echo json_encode($returnPix);
        } else {
            echo json_encode($pix);
        }
    } // #Método de pagamento Pix

    /**
     * Método de pagamento Boleto ou Cartão
     */
    else {
        $shippings[] = [
            'name' => 'Frete',
            'value' => (int)$postShipping
        ];

        $customer = [
            'name' => $postCustomer['name'],
            'email' => $postCustomer['email'],
            'cpf' => $postCustomer['cpf'],
            'birth' => $postCustomer['birth'],
            'phone_number' => $postCustomer['phone']
        ];

        if ($postCustomer['person'] === 'juridical') {
            $customer['juridical_person'] = [
                'corporate_name' => $postCustomer['corporate_name'],
                'cnpj' => $postCustomer['cnpj']
            ];
        }

        if ($postShippingAddress) {
            $shippingAddress = [
                'street' => $postShippingAddress['street'],
                'number' => $postShippingAddress['number'],
                'neighborhood' => $postShippingAddress['neighborhood'],
                'city' => $postShippingAddress['city'],
                'state' => $postShippingAddress['state'],
                'zipcode' => $postShippingAddress['zipcode']
            ];

            if (isset($postShippingAddress['complement']))
                $shippingAddress['complement'] = $postShippingAddress['complement'];

            $customer['address'] = $shippingAddress;
        }

        /**
         * Método de pagamento Cartão de Crédito
         */
        if ($postPayment['method'] == 'credit_card') {
            $billingAddress = [
                'street' => $postPayment['address']['street'],
                'number' => $postPayment['address']['number'],
                'neighborhood' => $postPayment['address']['neighborhood'],
                'city' => $postPayment['address']['city'],
                'state' => $postPayment['address']['state'],
                'zipcode' => $postPayment['address']['zipcode']
            ];

            if (isset($postPayment['address']['complement']))
                $shippingAddress['complement'] = $postPayment['address']['complement'];


            $payment['credit_card'] = [
                'installments' => (int)$postPayment['installments'],
                'billing_address' => $billingAddress,
                'payment_token' => $postPayment['payment_token'],
                'customer' => $customer
            ];
        }
        /**
         * Método de pagamento Boleto/Bolix
         */
        else {
            $expire = new DateTime();
            $expire = date_add($expire, date_interval_create_from_date_string("$expirationTime days"));

            $payment['banking_billet'] = [
                'expire_at' => $expire->format('Y-m-d'),
                'customer' => $customer
            ];
        }

        $chargeBody = [
            'items' => (array)$items,
            'shippings' => (array)$shippings,
            'payment' => (array)$payment
        ];

        unset($options['pix_cert']);
        $apiGN = new Gerencianet($options);

        $returnCharge = $apiGN->oneStep([], $chargeBody);

        echo json_encode($returnCharge);
    } // #Método de pagamento Boleto ou Cartão
} catch (GerencianetException $e) {
    $err = [
        'code' => $s->code,
        'error' => $e->error,
        'error_description' => $e->errorDescription
    ];
    echo json_encode($err);
} catch (Exception $ex) {
    $err = [
        'error' => $ex->getMessage()
    ];
    echo json_encode($err);
}
  ```
  </TabItem>
 
  </Tabs>

  Com estas implementações, o Lightbox já poderá ser aberto em sua página, porém ainda será necessário realizar a integração no backend para que ele tenha um funcionamento correto.

  <br/>

  ## Loja de demonstração
<img src="/img/exemplo-lightbox.gif"/>

Neste exemplo utilizamos como dependência a SDK de PHP, que é responsável por realizar as requisições na a API Efí .

  Mas o nosso Lightbox, lhe permite integrar sua aplicação também com as <a href="https://dev.gerencianet.com.br/docs/instalacao-da-api" target="_blank">SDKs Efí em outras linguagens disponíveis</a>.

  <a href="https://www.gerencianet.com.br/wp-content/themes/Gerencianet/lightbox/"  target="_blank" alt="Exemplos"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Acessar Loja de demonstração
</button></a>

<br/>
<br/>

  <a href="https://github.com/efipay/lightbox-efi"  target="_blank" alt="Exemplos"><button className="buttonPostman">
<svg className="icon">
 
</svg>
  Acessar código de exemplo no Github
</button></a>


</div>