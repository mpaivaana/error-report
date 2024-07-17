<div>
<div className="espaco-1">

#### Data to review batch of due charges
<br/>                                        
<div className="subtitulo">
(*) are required attributes
</div>
</div>


****

  <div> 
  <p><code><strong> Query params </code></strong></p>
          <div className="left">
           <b>id (Batch id)</b>   
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

integer (int64) </div>

The id field determines the ID of the batch of invoices with due dates.

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
              <b>Optional</b>   
            </div>
          </div>
  </div>                                       


<br/>                                        
<div className="subtitulo"> 
string 
</div>
<br/>
  Description of the batch.

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
              <b>Optional</b>   
            </div>
          </div>
  </div>                                                   

<br/>                                        
<div className="subtitulo"> 
object
</div>
<br/>
The cobsv object organizes the information of the data sent for the creation or modification of the invoice with due dates via Pix API.
<br/> <div>
<br/>

<em>cobsv:</em><br/>
 ``txid*`` - Required string attribute that determines the transaction identifier and satisfies the regex ``[a-zA-Z0-9]{26,35}``
  
  ``calendário*`` - Required object attribute that organizes information regarding time control of the payment slip.
  
  ``dataDeVencimento*`` - Required string attribute that represents a date, in the format ``yyyy-mm-dd``, according to ISO 8601. It's the due date of the payment slip. The payment can be made until this day, including, at any time of the day.
  
  ``validadeAposVencimento`` - Optional integer attribute that represents the number of calendar days after the due date when the payment slip can be paid. If this period has passed and the payment slip has not been paid, it will remain ACTIVE. ``int32``
  <b>Default: 30</b>
  
  ``devedor*`` - Required object attribute that organizes information about the payer of the payment slip.
  
  ``cpf*`` - Required string attribute that represents the payer's CPF. ``/^\d{11}$/``
  
  ``nome*`` - Required string attribute that represents the payer's name. ``<= 200 characters``
  
  ``logradouro`` - Optional string attribute that represents the payer's address. ``≤ 200 characters``
  
  ``cidade`` - Optional string attribute that represents the payer's city. ``≤ 200 characters``
  
  ``uf`` - Optional string attribute that represents the payer's state. ``≤ 2 characters``
  
  ``cep`` - Optional string attribute that represents the payer's postal code. ``≤ 8 characters``
  
  ``loc`` - Optional object attribute that represents the identifier of the payload's location.
  
  ``valor*`` - Required object attribute that represents monetary values.
  
  ``original*`` - Required string attribute that represents the original value of the payment slip. ``\d{1,10}\.\d{2}``
  
  ``multa`` - Optional object attribute that represents the fine applied to the payment slip. 
  
  ``modalidade*`` - Penalty mode, according to the domain table. integer ``<int32>``

<div className="table">
 <table>
          <tbody>
          <tr>
          <th>Description</th>
          <th align="center">Domain</th>
          </tr>
          <tr>
          <td align="left">Fixed Value </td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentage Value </td>
          <td>2</td>
          </tr>
          </tbody>
</table>
</div>
</br>


  ``valorPerc*`` - Penalty of the document in absolute value or percentage, according to "value.penalty.mode". string ``\d{1,10}\.\d{2}``
  
  ``juros`` - Optional object attribute representing the interest applied to the charge.
  
  ``modalidade*`` - Interest mode, according to the domain table. integer ``<int32>``

<div className="table">
 <table>
          <tbody>
          <tr>
          <th>Description</th>
          <th align="center">Domain</th>
          </tr>
          <tr>
          <td align="left">Value (calendar days) </td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentage per day (calendar days) </td>
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
          <td align="left">Value (business days)</td>
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
          <td align="left">Fixed value until the specified date(s)</td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentage until the specified date</td>
          <td>2</td>
          </tr>
          <tr>
          <td align="left">Value for advance payment on calendar day</td>
          <td>3</td>
          </tr>
          <tr>
          <td align="left">Value for advance payment on business day</td>
          <td>4</td>
          </tr>
          <tr>
          <td align="left">Percentage for advance payment on calendar day</td>
          <td>5</td>
          </tr>
          <tr>
          <td align="left">Percentage for advance payment on business day</td>
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
          <td align="left">Fixed value until the specified date(s)</td>
          <td>1</td>
          </tr>
          <tr>
          <td align="left">Percentage until the specified date</td>
          <td>2</td>
          </tr>
          <tr>
          <td align="left">Value for advance payment on calendar day</td>
          <td>3</td>
          </tr>
          <tr>
          <td align="left">Value for advance payment on business day</td>
          <td>4</td>
          </tr>
          <tr>
          <td align="left">Percentage for advance payment on calendar day</td>
          <td>5</td>
          </tr>
          <tr>
          <td align="left">Percentage for advance payment on business day</td>
          <td>6</td>
          </tr>
          </tbody>
          </table>
</div>

 ``chave*`` - Mandatory string attribute that determines the Pix key registered in the DICT that will be used for billing. ``<= 77 characters``
  
  ``solicitacaoPagador`` - Optional string attribute that determines a text to be presented to the payer so that he or she can enter related information, in free format, to be sent to the recipient. ``<= 140 characters``
  
  ``infoAdicionais`` - Optional object attribute where each additional information contained in the list (name and value) must be presented to the payer.
  
  ``nome*`` - Mandatory string attribute that represents the name of the field. ``≤ 50 characters``
  
  ``valor*`` - Mandatory string attribute that represents the field Data. ``≤ 200 characters``


</div>



