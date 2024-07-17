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
object (Calendar)
</div>
<br/>
The nested fields under the **calendario** identifier organize information regarding the timing control of the charge.

<div><br/>
<em>calendario:</em>
</div>

``criacao*`` - Timestamp indicating the moment the charge was created. Respects the format defined in RFC 3339. Minimum of 1 character and maximum of 255 characters (String).

``expiracao`` - Lifetime of the charge, specified in seconds from the creation date (Calendar.creation). Receives a number with a minimum value of 1 and maximum integer int32, passed as an integer.  

****
   <div>  
           <div className="left">
           <b>devedor</b>   
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
Natural Person (object) or Juridical Person (object)
</div>
<br/>
The nested fields under the debtor object are optional and identify the debtor, i.e., the person or institution to whom the charge is addressed. It does not necessarily identify who will actually make the payment. A CPF (Brazilian individual taxpayer registry number) can be the debtor of a charge, but it can happen that another CPF actually makes the payment. It is not allowed for the payer.cpf field and payer.cnpj field to be filled in at the same time. If the payer.cnpj field is filled in, then the payer.cpf field cannot be filled in, and vice versa. If the payer.name field is filled in, then there must be either a payer.cpf or a payer.cnpj field filled in.
<br/>
<br/> <div>
<em>devedor:</em>
</div>

``cpf*`` - CPF of the payer user. string /^\d{11}$/

``nome*`` - Payer's name. string (Name) ≤ 200 characters

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

All fields indicating monetary values adhere to the format of ID 54 of the EMV/BR Code specification for QR Codes. The decimal separator is the period character. It is not applicable to use a thousand separator. Examples of values adhering to the standard: “0.00”, “1.00”, “123.99”, “123456789.23”

<div>
<em>valor:</em><br/>
</div>

``original*`` - Original value of the charge. string ``\d{1,10}\.\d{2}``

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

string (Receiver's DICT key) ``≤ 77 characters``
</div>

The key field determines the Pix key registered in the DICT that will be used for the charge. This key will be read by the payer's PSP application to query the DICT, which will return the information identifying the recipient of the charge.


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
            <b>Opcional</b>
            </div>            
            </div>
          </div>
  </div>                                              

<br/>                                        
<div className="subtitulo"> 

Array of objects (Additional information) ``≤ 50``
</div> 

Each respective additional information contained in the list (name and value) must be presented to the payer.
<br/>
 <div>
<em>infoAdicionais:</em>
</div>

``nome*`` - Field name string (Name) ``≤ 50 characters``

``valor*`` - Field data string (Value) ``≤ 200 characters``

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
 

