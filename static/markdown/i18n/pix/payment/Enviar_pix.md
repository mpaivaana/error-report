<div>
<div className="espaco-1">

#### Data for sending Pix
<br/>                                        
<div className="subtitulo">
(*) are required attributes
</div>
</div>

****

 <div>  
        <p><code><strong> Query params </code></strong></p>
          <div className="left">
           <b>idEnvio (Identificador da transação)</b>   
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

string (Transaction Identifier) ``^[a-zA-Z0-9]{1,35}$``
</div>

The idEnvio field determines the transaction identifier.

****

  <div>  
  <p><code><strong> Body params </code></strong></p>
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

string ``\d{1,10}\.\d{2}``
</div>

Monetary values related to the charge.

****
  <div>  
          <div className="left">
           <b>pagador</b>   
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
Natural Person (object) or Juridical Person (object)
</div>
<br/>
The payer field contains the Pix key associated with the authenticated account to which the defined amount will be debited.
<br/> <br/>

 <div>
<em>pagador:</em>
</div>

``chave*`` - The chave field determines the Pix key registered in the DICT that will be used to identify the payer of the Pix.  
string (Payer's DICT Key) ≤ 77 characters

``infoPagador`` - Information from the payer about the Pix to be sent.  
string < 140


****

 <div>  
          <div className="left">
           <b>favorecido</b>   
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
The favorecido field contains the Pix key that will be credited the defined amount.
<br/><br/> <div>
<em>Attributes favorecido:</em>
</div>

``chave`` - The chave field determines the Pix key registered in the DICT that will be used to identify the receiver of the Pix.  
string (Receiver's DICT Key) ``≤ 77 characters``

<div>

<em>Attributes chave:</em><br/>
``cpf`` - The cpf field validates if the Pix key registered in the DICT belongs to the holder of the informed document

``cnpj`` - The cnpj field validates if the Pix key registered in the DICT belongs to the holder of the informed document
</div>

Note: The attributes cpf and cnpj are optional, but once included in the schema, their completion becomes mandatory.

<div>
<em>Attributes contaBanco:</em>

  ``nome*`` - Receiver's name (string) ``< 200 characters``

  ``cpf`` - Receiver's CPF (string) ``^[0-9]{11}$``

  ``cnpj`` - Receiver's CNPJ (string) ``^[0-9]{14}$``

  ``codigoBanco*`` - <a href="https://www.bcb.gov.br/content/estabilidadefinanceira/str1/ParticipantesSTR.pdf">ISPB of the Receiver's Bank</a> (string) ``^[0-9]{8}$``

  ``agencia*`` - Receiver's Bank agency number without the check digit (string) ``^[0-9]{1,4}$``

  ``conta*`` - Receiver's Bank account number with the check digit, without a hyphen (string) ``^[0-9]+``

  ``tipoConta*`` - Type of receiver's Bank account (string) ``^[0-9]+``, which can be: ``cacc`` (Checking Account) or ``svgs`` (Savings Account)
</div>

****
 <div>  
           <div className="left">
           <b>status</b>   
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

The status field in the webhook response represents the status of the direct Pix send request to a Pix key, and can take the following states:

``"EM_PROCESSAMENTO"``,``"REALIZADO"``, ``"NAO_REALIZADO"``




</div>
 

