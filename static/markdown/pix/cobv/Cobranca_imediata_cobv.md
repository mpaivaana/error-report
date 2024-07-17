<div>
<div className="espaco-1">

#### Dados para geração da cobrança
<br/>                                        
<div className="subtitulo">
(*) são atributos obrigatórios
</div>
</div>


****

  <div> 
  <p><code><strong> Query params </code></strong></p>
          <div className="left">
           <b>txid (Identificador da transação)</b>   
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

string (Id da Transação) ``^[a-zA-Z0-9]{26,35}$``
</div>

O campo txid determina o identificador da transação. Para mais detalhes <a href="/docs/api-pix/glossario">clique aqui</a>.

****

   <div>  
   <p><code><strong> Body params </code></strong></p>
          <div className="left">
           <b>calendario</b>   
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
object 
</div>
<br/>
Os campos aninhados sob o identificador **calendário** organizam informações a respeito de controle de tempo da cobrança.
<br/><br/> <div>
<em>calendario:</em>
</div>

``dataDeVencimento*`` - Trata-se de uma data, no formato YYYY-MM-DD, segundo ISO 8601. É a data de vencimento da cobrança. A cobrança pode ser honrada até esse dia, inclusive, em qualquer horário do dia. (String ).

``validadeAposVencimento`` - Trata-se da quantidade de dias corridos após calendario.dataDeVencimento, em que a cobrança poderá ser paga.  

Sempre que a data de vencimento cair em um fim de semana ou em um feriado para o usuário pagador, ela deve ser automaticamente prorrogada para o primeiro dia útil subsequente. Todos os campos que façam referência a esta data (``validadeAposVencimento``; ``desconto``; ``juros`` e ``multa``) devem assumir essa prorrogação, quando for o caso. (Integer <int 16>).

Para entender o funcionamento do pagamento após o vencimento, veja os exemplos neste <a href="/docs/api-pix/glossario#section-ilustra-o-do-funcionamento-das-cobran-as-cobv-ap-s-a-data-de-vencimento">link</a>.

****
   <div>  
          <div className="left">
           <b>devedor</b>   
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
object
</div>
<br/>
O objeto devedor organiza as informações sobre o devedor da cobrança.

Os campos aninhados sob o objeto devedor identificam o devedor, ou seja, a pessoa ou a instituição a quem a cobrança está endereçada. <br/>
Não identifica, necessariamente, quem irá efetivamente realizar o pagamento. <br/>
Um CPF pode ser o devedor de uma cobrança, mas pode acontecer de outro CPF realizar, efetivamente, o pagamento do documento. <br/>
Não é permitido que o campo devedor.cpf e campo devedor.cnpj estejam preenchidos ao mesmo tempo. <br/>
Se o campo devedor.cnpj está preenchido, então o campo devedor.cpf não pode estar preenchido, e vice-versa.
<br/> <div>

<em>devedor:</em><br/>
``cpf*`` - CPF do usuário pagador.string ``/^\d{11}$/``

``cnpj*`` - CNPJ do usuário pagador.string ``/^\d{14}$/``

``nome*`` - Nome do usuário pagador. string (Nome) ``≤ 200 characters``

``email`` - Email do usuário pagador. string (Email)

``logradouro`` - Logradouro do usuário pagador. string (Logradouro) ``≤ 200 characters``

``cidade*`` - Cidade do usuário pagador. string (Cidade) ``≤ 200 characters``

``uf`` - UF do usuário pagador. string (UF) ``≤ 2 characters``

``cep`` - CEP do usuário pagador. string (CEP) ``≤ 8 characters``

</div>

****
 <div>  
           <div className="left">
           <b>loc</b>   
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
  </div>                                                

<br/>                                        
<div className="subtitulo"> 

Object
</div>

Identificador da localização do payload. Para associar a location a uma cobrança com vencimento, este location gerado deve ser do tipo ``cobv``.
<br/> <div>

<em>loc:</em><br/>
``id*`` -  id do location a ser associada a cobrança com vencimento. int

</div>

****

 <div>  
          <div className="left">
           <b>valor</b>   
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
(object)
</div>
<br/>
Todos os campos que indicam valores monetários obedecem ao formato do ID 54 da especificação EMV/BR Code para QR Codes. O separador decimal é o caractere ponto. Não é aplicável utilizar separador de milhar. Exemplos de valores aderentes ao padrão: “0.00”, “1.00”, “123.99”, “123456789.23”
<br/><br/> <div>

<em>valor:</em><br/>
``original*`` - Valor original da cobrança.string ``\d{1,10}\ .\d{2}``

``multa`` - Multa aplicada à cobrança.  ``object``

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

``juros`` - Juros aplicado à cobrança. ``object``

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

``desconto`` -  Descontos aplicados à cobrança. ``object``

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
  </div>

****
 <div>  
          <div className="left">
           <b>chave</b>   
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

string (Chave DICT do recebedor) ``≤ 77 characters``
</div>

O campo chave determina a chave Pix registrada no DICT que será utilizada para a cobrança. Essa chave será lida pelo aplicativo do PSP do pagador para consulta ao DICT, que retornará a informação que identificará o recebedor da cobrança.

Os tipos de chave podem ser: telefone, e-mail, cpf/cnpj ou EVP.

O formato das chaves pode ser encontrado na seção "Formatação das chaves do DICT no BR Code" do <a href="https://www.bcb.gov.br/estabilidadefinanceira/pix">Manual de Padrões para iniciação do Pix.</a>.
 

****

 <div>  
           <div className="left">
           <b>solicitacaoPagador</b>   
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
  </div>     

<br/>                                        
<div className="subtitulo"> 

string (Solicitação ao pagador) ``≤ 140 characters``
</div> 

O campo *solicitacaoPagador* *, opcional, determina um texto a ser apresentado ao pagador para que ele possa digitar uma informação correlata, em formato livre, a ser enviada ao recebedor. Esse texto será preenchido, na pacs.008, pelo PSP do pagador, no campo RemittanceInformation . O tamanho do campo na pacs.008 está limitado a 140 caracteres.

****
 <div>  
           <div className="left">
           <b>infoAdicionais</b>   
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
  </div>                                              

<br/>                                        
<div className="subtitulo"> 

Array of objects (Informações adicionais) ``≤ 50``
</div> 

Cada respectiva informação adicional contida na lista (nome e valor) deve ser apresentada ao pagador.
<br/> <div>

<em>infoAdicionais:</em><br/>
``nome*`` - Nome do campo string (Nome) ``≤ 50 characters``

``valor*`` - Dados do campo string (Valor) ``≤ 200 characters``

</div>

****
 <div>  
           <div className="left">
           <b>loc</b>   
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
  </div>                                              

<br/>                                        
<div className="subtitulo"> 

(object)
</div> 

``id*`` - Id do location cadastrada para servir um payload


</div>
 

