<div>
<div className="espaco-1">

#### Dados para revisar lote de cobranças com vencimento
<br/>                                        
<div className="subtitulo">
(*) são atributos obrigatórios
</div>
</div>


****

  <div> 
  <p><code><strong> Query params </code></strong></p>
          <div className="left">
           <b>id (Id do lote)</b>   
          </div>
           <div className="right">
           <div className="obrigatorio">
             <svg id="check-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19146" data-name="Caminho 19146" d="M127.946,200a8,8,0,1,0,8,8A7.936,7.936,0,0,0,127.946,200Zm0,15.2a7.2,7.2,0,0,1-5.09-12.29,7.131,7.131,0,0,1,5.09-2.11,7.2,7.2,0,0,1,0,14.4Z" transform="translate(-119.946 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19147" data-name="Caminho 19147" d="M127.964,211.4l-2.4-2.4a.4.4,0,0,1,.564-.565l2.115,2.115,4.234-4.234a.4.4,0,1,1,.569.57l-4.518,4.514a.393.393,0,0,1-.564,0Z" transform="translate(-121.046 -201.241)" fill="#2f2f2f"/>
</svg> 
              <b>Obrigatório</b>   
            </div>
          </div>
  </div>                                      

<br/>                                        
<div className="subtitulo"> 

integer (int64) </div>

O campo id determina o Id do lote de cobranças com vencimento.

****

   <div>  
   <p><code><strong> Body params </code></strong></p>
          <div className="left">
           <b>descricao</b>   
          </div>
           <div className="right">
           <div className="opcional">
            <svg id="minus-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19359" data-name="Caminho 19359" d="M728,200a8,8,0,1,0,8,8A8.009,8.009,0,0,0,728,200Zm0,15.2a7.2,7.2,0,1,1,7.2-7.2A7.208,7.208,0,0,1,728,215.2Z" transform="translate(-720 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19360" data-name="Caminho 19360" d="M732.541,209.5H725.5a.4.4,0,1,0,0,.8h7.043a.4.4,0,0,0,0-.8Z" transform="translate(-721.02 -201.9)" fill="#2f2f2f"/>
</svg> 
              <b>Opcional</b>   
            </div>
          </div>
  </div>                                       


<br/>                                        
<div className="subtitulo"> 
string 
</div>
<br/>
Descrição do lote.

****
   <div>  
          <div className="left">
           <b>cobsv</b>   
          </div>
           <div className="right">
           <div className="opcional">
            <svg id="minus-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19359" data-name="Caminho 19359" d="M728,200a8,8,0,1,0,8,8A8.009,8.009,0,0,0,728,200Zm0,15.2a7.2,7.2,0,1,1,7.2-7.2A7.208,7.208,0,0,1,728,215.2Z" transform="translate(-720 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19360" data-name="Caminho 19360" d="M732.541,209.5H725.5a.4.4,0,1,0,0,.8h7.043a.4.4,0,0,0,0-.8Z" transform="translate(-721.02 -201.9)" fill="#2f2f2f"/>
</svg> 
              <b>Opcional</b>   
            </div>
          </div>
  </div>                                                   

<br/>                                        
<div className="subtitulo"> 
object
</div>
<br/>
O objeto cobsv organiza as informações dos dados enviados para criação ou alteração da cobrança com vencimento via API Pix.
<br/> <div>
<br/>

<em>cobsv:</em><br/>
``txid*`` - Atributo string obrigatório que determina o identificador da transação e satisfaz à Regex ``[a-zA-Z0-9]{26,35}``

``calendário`` - Atributo objeto opcional que organiza informações a respeito de controle de tempo da cobrança.

``dataDeVencimento*`` - Atributo string obrigatório que trata-se de uma data, no formato ``yyyy-mm-dd``, segundo ISO 8601. É a data de vencimento da cobrança. A cobrança pode ser honrada até esse dia, inclusive, em qualquer horário do dia.

``validadeAposVencimento*`` - Atributo integer opcional que trata-se da quantidade de dias corridos após o vencimento em que a cobrança poderá ser paga. Caso vencido este período e a cobrança não tenha sido paga, esta continuará ATIVA. ``int32``
<b>Default: 30</b>

``devedor`` - Atributo objeto opcional que organiza as informações sobre o devedor da cobrança.

``cpf*`` -  Atributo string obrigatório que representa o CPF do usuário pagador. ``/^\d{11}$/``

``nome*`` - Atributo string obrigatório que representa o Nome do usuário. ``<= 200 characters``

``logradouro`` - Atributo string opcional que representa o Logradouro do usuário. ``≤= 200 characters``

``cidade`` - Atributo string opcional que representa a Cidade do usuário. ``≤= 200 characters``

``uf`` - Atributo string opcional que representa o UF do usuário. ``≤ 2 characters``

``cep`` - Atributo string opcional que representa o CEP do usuário. ``≤ 8 characters``

``loc`` - Atributo objeto opcional que representa o identificador da localização do payload.

``valor`` - Atributo objeto opcional que representa os valores monetários.

``original`` - Atributo string opcional que representa o valor original da cobrança. ``\d{1,10}\.\d{2}``

``multa`` - Atributo objeto opcional que representa a multa aplicada à cobrança. 

``modalidade*`` - Modalidade da multa, conforme tabela de domínios. integer ``<int32>``

<div className="table">
 <table>
          <tbody>
          <tr>
          <th>Descrição</th>
          <th align="center">Domínio</th>
          </tr>
          <tr>
          <td align="left">Valor Fixo </td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Valor Percentual </td>
          <td>2</td>
          </tr>
          </tbody>
</table>
</div>
</br>


``valorPerc*`` - Multa do documento em valor absoluto ou percentual, conforme "valor.multa.modalidade". string ``\d{1,10}\.\d{2}``

``juros`` - Atributo objeto opcional que representa os juros aplicados à cobrança.

``modalidade*`` - Modalidade da juros, conforme tabela de domínios. integer ``<int32>``

<div className="table">
 <table>
          <tbody>
          <tr>
          <th>Descrição</th>
          <th align="center">Domínio</th>
          </tr>
          <tr>
          <td align="left">Valor (dias corridos) </td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentual ao dia (dias corridos) </td>
          <td>2</td>
          </tr>
          <tr>
          <td align="left">Percentual ao mês (dias corridos)</td>
          <td>3</td>
          </tr>
          <tr>
          <td align="left">Percentual ao ano (dias corridos)</td>
          <td>4</td>
          </tr>
          <tr>
          <td align="left">Valor (dias úteis)</td>
          <td>5</td>
          </tr>
          <tr>
          <td align="left">Percentual ao dia (dias úteis)</td>
          <td>6</td>
          </tr>
          <tr>
          <td align="left">Percentual ao mês (dias úteis)</td>
          <td>7</td>
          </tr>
          <tr>
          <td align="left">Percentual ao ano (dias úteis)</td>
          <td>8</td>
          </tr>
          </tbody>
          </table>
</div>
</br>

``valorPerc*`` - Juros do documento. string ``\d{1,10}\.\d{2}``

``abatimento`` - Abatimento aplicado à cobrança. ``object``

``modalidade*`` - Modalidade de abatimentos, conforme tabela de domínios. integer ``<int32>``

<div className="table">
<table>
          <tbody>
          <tr>
          <th>Descrição</th>
          <th align="center">Domínio</th>
          </tr>
          <tr>
          <td align="left">Valor Fixo </td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Valor Percentual </td>
          <td>2</td>
          </tr>
          </tbody>
          </table>
</div>
  <br/>

``valorPerc*`` - Abatimentos ou outras deduções aplicadas ao documento, em valor absoluto ou percentual do valor original do documento. string ``\d{1,10}\.\d{2}``

``desconto`` -  Atributo objeto opcional que representa os descontos aplicados à cobrança.

``descontoDataFixa`` -  Descontos absolutos aplicados à cobrança. Array of objects

Array () valor": {\n "original": "567.89"\n,
\n"solicitacaoPagador": "567.89"\n,
"language": "json",
"name": "Exemplo 2"
},

``modalidade*`` - Modalidade de desconto, conforme tabela de domínios. integer ``<int32>``

<div className="table">
<table>
          <tbody>
          <tr>
          <th>Descrição</th>
          <th align="center">Domínio</th>
          </tr>
          <tr>
          <td align="left">Valor Fixo até a[s] data[s] informada[s]</td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentual até a data informada</td>
          <td>2</td>
          </tr>
          <tr>
          <td align="left">Valor por antecipação dia corrido</td>
          <td>3</td>
          </tr>
          <tr>
          <td align="left">Valor por antecipação dia útil</td>
          <td>4</td>
          </tr>
          <tr>
          <td align="left">Percentual por antecipação dia corrido</td>
          <td>5</td>
          </tr>
          <tr>
          <td align="left">Percentual por antecipação dia útil</td>
          <td>6</td>
          </tr>
          </tbody>
          </table>
</div>
  <br/>

OU

``valorPerc*`` - Abatimentos ou outras deduções aplicadas ao documento, em valor absoluto ou percentual do valor original do documento. string ``\d{1,10}\.\d{2}``

``modalidade*`` - Modalidade de desconto, conforme tabela de domínios. integer ``<int32>``

<div className="table">
 <table>
          <tbody>
          <tr>
          <th>Descrição</th>
          <th align="center">Domínio</th>
          </tr>
          <tr>
          <td align="left">Valor Fixo até a[s] data[s] informada[s]</td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentual até a data informada</td>
          <td>2</td>
          </tr>
          <tr>
          <td align="left">Valor por antecipação dia corrido</td>
          <td>3</td>
          </tr>
          <tr>
          <td align="left">Valor por antecipação dia útil</td>
          <td>4</td>
          </tr>
          <tr>
          <td align="left">Percentual por antecipação dia corrido</td>
          <td>5</td>
          </tr>
          <tr>
          <td align="left">Percentual por antecipação dia útil</td>
          <td>6</td>
          </tr>
          </tbody>
          </table>
</div>

``chave`` - Atributo string opcional que determina a chave Pix registrada no DICT que será utilizada para a cobrança. ``<= 77 characters``

``solicitacaoPagador`` - Atributo string opcional que determina um texto a ser apresentado ao pagador para que ele possa digitar uma informação correlata, em formato livre, a ser enviada ao recebedor. ``<= 140 characters``

``infoAdicionais`` - Atributo objeto opcional onde cada respectiva informação adicional contida na lista (nome e valor) deve ser apresentada ao pagador.

``nome*`` - Atributo string obrigatório que representa o Nome do campo. ``≤ 50 characters``

``valor*`` - Atributo string obrigatório que representa os Dados do campo. ``≤ 200 characters``


</div>



