<div>
<div className="espaco-1">

  #### Data for Generating Charge
<br/>                                        
<div className="subtitulo">
(*) are required attributes
</div>
</div>


****

  <div> 
  <p><code><strong> Query params </code></strong></p>
          <div className="left">
           <b>txid (Transaction identifier)</b>   
          </div>
           <div className="right">
           <div className="obrigatorio">
             <svg id="check-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19146" data-name="Caminho 19146" d="M127.946,200a8,8,0,1,0,8,8A7.936,7.936,0,0,0,127.946,200Zm0,15.2a7.2,7.2,0,0,1-5.09-12.29,7.131,7.131,0,0,1,5.09-2.11,7.2,7.2,0,0,1,0,14.4Z" transform="translate(-119.946 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19147" data-name="Caminho 19147" d="M127.964,211.4l-2.4-2.4a.4.4,0,0,1,.564-.565l2.115,2.115,4.234-4.234a.4.4,0,1,1,.569.57l-4.518,4.514a.393.393,0,0,1-.564,0Z" transform="translate(-121.046 -201.241)" fill="#2f2f2f"/>
</svg> 
              <b>Required</b>   
            </div>
          </div>
  </div>                                      

<br/>                                        
<div className="subtitulo"> 

string (Transaction ID) ``^[a-zA-Z0-9]{26,35}$``
  </div>
  
  The txid field determines the transaction identifier. For more details <a href="/docs/api-pix/glossary">click here</a>.

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
              <b>Required</b>   
            </div>
          </div>
  </div>                                       


<br/>                                        
<div className="subtitulo"> 
object 
</div>
<br/>
The fields nested under the identifier **calendario** organize information regarding the timing control of the charge.
<br/><br/> <div>
<em>calendario:</em>
</div>

``dataDeVencimento*`` - This is a date in the format YYYY-MM-DD, according to ISO 8601. It is the due date of the charge. The charge can be honored until this day, including, at any time of the day. (String).

``validadeAposVencimento`` - This is the number of calendar days after calendar.dueDate, during which the charge can be paid.  

Whenever the due date falls on a weekend or a holiday for the paying user, it must be automatically extended to the next business day. All fields referencing this date (``validadeAposVencimento``; ``desconto``; ``juros`` e ``multa``) must assume this extension when applicable. (Integer <int 16>).

To understand how post-due date payment works, see the examples at this <a href="/docs/api-pix/glossario#section-ilustra-o-do-funcionamento-das-cobran-as-cobv-ap-s-a-data-de-vencimento">link</a>.

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
              <b>Required</b>   
            </div>
          </div>
  </div>                                                   

<br/>                                        
<div className="subtitulo"> 
object
</div>
<br/>
The debtor object organizes information about the debtor of the charge.

The fields nested under the debtor object identify the debtor, that is, the person or institution to whom the charge is addressed. <br/>
It does not necessarily identify who will actually make the payment. <br/>
A CPF can be the debtor of a charge, but it may happen that another CPF actually makes the payment of the document. <br/>
It is not allowed for both the debtor.cpf and debtor.cnpj fields to be filled at the same time. <br/>
If the debtor.cnpj field is filled, then the debtor.cpf field cannot be filled, and vice versa.
<br/> <div>

<em>devedor:</em><br/>
``cpf*`` - CPF of the paying user.string ``/^\d{11}$/``

``cnpj*`` - CNPJ of the paying user.string ``/^\d{14}$/``

``nome*`` - Name of the paying user. string (Name) ``≤ 200 characters``

``email`` - Email of the paying user. string (Email)

``logradouro`` - Public address of the paying user. string (Logradouro) ``≤ 200 characters``

``cidade*`` - City of the paying user. string (City) ``≤ 200 characters``

``uf`` - UF of the paying user. string (UF) ``≤ 2 characters``

``cep`` - CEP of the paying user. string (CEP) ``≤ 8 characters``

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
              <b>Optional</b>   
            </div>
            </div>
          </div>
  </div>                                                

<br/>                                        
<div className="subtitulo"> 

Object
</div>

Identifier of the payload location. To associate the location with a due charge, this generated location must be of type ``cobv``.
<br/> <div>

<em>loc:</em><br/>
``id*`` -  id of the location to be associated with the due charge. int

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
              <b>Required</b>   
            </div>
          </div>
  </div>  

<br/>                                        
<div className="subtitulo"> 
(object)
</div>
<br/>
All fields indicating monetary values follow the format of ID 54 of the EMV/BR Code specification for QR Codes. The decimal separator is the dot character. It is not applicable to use thousand separators. Examples of values adhering to the standard: “0.00”, “1.00”, “123.99”, “123456789.23”
<br/><br/> <div>

<em>valor:</em><br/>
``original*`` - Original value of the charge. string ``\d{1,10}\ .\d{2}``

``multa`` - Fine applied to the charge. ``object``

``modalidade*`` - Fine modality, according to the domain table. integer ``<int32>``

<div className="table">
 <table>
          <tbody>
          <tr>
          <th>Description</th>
          <th align="center">Domain</th>
          </tr>
          <tr>
          <td align="left">Fixed Amount</td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentage Amount</td>
          <td>2</td>
          </tr>
          </tbody>
</table>
</div>
</br>


``valorPerc*`` - Fine on the document as an absolute or percentage value, according to "valor.multa.modalidade". string ``\d{1,10}\.\d{2}``

``juros`` - Interest applied to the charge. ``object``

``modalidade*`` - Interest modality, according to the domain table. integer ``<int32>``

<div className="table">
 <table>
          <tbody>
          <tr>
          <th>Description</th>
          <th align="center">Domain</th>
          </tr>
          <tr>
          <td align="left">Amount (calendar days)</td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentage per day (calendar days)</td>
          <td>2</td>
          </tr>
          <tr>
          <td align="left">Percentage per month (calendar days)</td>
          <td>3</td>
          </tr>
          <tr>
          <td align="left">Percentage per year (calendar days)</td>
          <td>4</td>
          </tr>
          <tr>
          <td align="left">Amount (business days)</td>
          <td>5</td>
          </tr>
          <tr>
          <td align="left">Percentage per day (business days)</td>
          <td>6</td>
          </tr>
          <tr>
          <td align="left">Percentage per month (business days)</td>
          <td>7</td>
          </tr>
          <tr>
          <td align="left">Percentage per year (business days)</td>
          <td>8</td>
          </tr>
          </tbody>
          </table>
</div>
</br>

``valorPerc*`` - Interest on the document. string ``\d{1,10}\.\d{2}``

``abatimento`` - Discount applied to the charge. ``object``

``modalidade*`` - Discount modality, according to the domain table. integer ``<int32>``

<div className="table">
<table>
          <tbody>
          <tr>
          <th>Description</th>
          <th align="center">Domain</th>
          </tr>
          <tr>
          <td align="left">Fixed Amount</td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentage Amount</td>
          <td>2</td>
          </tr>
          </tbody>
          </table>
</div>
  <br/>

``valorPerc*`` - Discounts or other deductions applied to the document, as an absolute value or percentage of the original document value. string ``\d{1,10}\.\d{2}``

``desconto`` - Discounts applied to the charge. ``object``

``descontoDataFixa`` - Absolute discounts applied to the charge. Array of objects

Array () "valor": {"original": "567.89"},
\n "solicitacaoPagador": "567.89",
"language": "json",
"name": "Example 2"
},

``modalidade*`` - Discount modality, according to the domain table. integer ``<int32>``

<div className="table">
<table>
         <tbody>
          <tr>
          <th>Description</th>
          <th align="center">Domain</th>
          </tr>
          <tr>
          <td align="left">Fixed Amount until the specified date(s)</td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentage until the specified date</td>
          <td>2</td>
          </tr>
          <tr>
          <td align="left">Amount for early payment (calendar day)</td>
          <td>3</td>
          </tr>
          <tr>
          <td align="left">Amount for early payment (business day)</td>
          <td>4</td>
          </tr>
          <tr>
          <td align="left">Percentage for early payment (calendar day)</td>
          <td>5</td>
          </tr>
          <tr>
          <td align="left">Percentage for early payment (business day)</td>
          <td>6</td>
          </tr>
          </tbody>
          </table>
</div>
  <br/>

OR

``valorPerc*`` - Discounts or other deductions applied to the document, as an absolute value or percentage of the original document value. string ``\d{1,10}\.\d{2}``

``modalidade*`` - Discount modality, according to the domain table. integer ``<int32>``

<div className="table">
 <table>
          <tbody>
          <tr>
          <th>Description</th>
          <th align="center">Domain</th>
          </tr>
          <tr>
          <td align="left">Fixed Amount until the specified date(s)</td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentage until the specified date</td>
          <td>2</td>
          </tr>
          <tr>
          <td align="left">Amount for early payment (calendar day)</td>
          <td>3</td>
          </tr>
          <tr>
          <td align="left">Amount for early payment (business day)</td>
          <td>4</td>
          </tr>
          <tr>
          <td align="left">Percentage for early payment (calendar day)</td>
          <td>5</td>
          </tr>
          <tr>
          <td align="left">Percentage for early payment (business day)</td>
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
              <b>Required</b>   
            </div>
          </div>
  </div>                                                

<br/>                                        
<div className="subtitulo"> 

string (Recipient's DICT Key) ``≤ 77 characters``
</div>

The "chave" field determines the Pix key registered in the DICT that will be used for the charge. This key will be read by the payer's PSP application to query the DICT, which will return the information identifying the recipient of the charge.

The types of keys can be: phone, email, CPF/CNPJ, or EVP.

The format of the keys can be found in the section "Formatting of DICT keys in BR Code" of the <a href="https://www.bcb.gov.br/estabilidadefinanceira/pix">Pix Initialization Standards Manual</a>.
 

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
              <b>Optional</b>   
            </div>
            </div>
          </div>
  </div>     

<br/>                                        
<div className="subtitulo"> 

string (Request by payer) ``≤ 140 characters``
  </div> 
  
The *solicitacaoPagador* field, optional, determines a text to be presented to the payer so that they can enter related information, in free format, to be sent to the receiver. This text will be filled in the pacs.008 by the payer's PSP, in the RemittanceInformation field. The size of the field in pacs.008 is limited to 140 characters.
  
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
              <b>Optional</b>   
            </div>
            </div>
          </div>
  </div>                                              

<br/>                                        
<div className="subtitulo"> 

Array of objects (Additional information) ``≤ 50``
  </div> 
  
  Each respective additional information contained in the list (name and value) must be presented to the payer.
<br/> <div>

<em>infoAdicionais:</em><br/>
``nome*`` - Field name string (Name) ``≤ 50 characters``
  
``valor*`` - Field data string (Value) ``≤ 200 characters``

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

``id*`` - Location ID registered to serve a payload


</div>
 

