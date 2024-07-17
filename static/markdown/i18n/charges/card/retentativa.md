<div>
    <div className="espaco-1">

#### Data to make a new payment attempt via credit card
  <br/>                                        
<div className="subtitulo">
    (*) are required attributes
    </div>
    </div>

  ****

<div>  
        <p><code><strong> Query params </code></strong></p>
          <div className="left">
         <b>id</b>   
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

integer
</div>

The id field determines the <code>charge_id</code> of the desired transaction.

****

  </div>

   <div>  
   <p><code><strong> Body params </code></strong></p>

   <div>  
              <div className="left">
               <b>customer</b>   
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
    
String <em>Note: For Legal Entities, only the other customer data contained in ``juridical_person`` will be required, the name and CPF will not be mandatory</em>
  </div>
<div>
Personal data of the payer:
</div>

  ``name*`` - name (String) ``^[ ]_(.+[ ]+)+.+[ ]_$``

``cpf*`` -  Customer's CPF (without dots, commas, or hyphens) (String)

``email`` - Valid email address of the customer (String) ``^[a-zA-Z0-9._%+-]+@"descricao-at+\.to"><sp{2,}$``

``phone`` - Valid customer phone number, without special characters (String) ``^[1-9]{2}9?[0-9]{8}$``

``birth`` - Customer's date of birth (valid date in YYYY-MM-DD format) (String) ``^(?:19[0-9]{2}|2[0-9]{3})-(?:0[1-9]|1[0-2])-(?:0[1-9]\|[12][0-9]|3[01])$``

``juridical_person`` -  Juridical person data (Object)<br/>
<b>Note</b>: If this attribute is used, the <i>name</i> and <i>cpf</i> fields are not mandatory.

  ****

   <div>  
           <div className="left">
           <b>juridical_person</b>   
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
    
 Object
    </div>
   <div>
<em>Juridical person data:</em>
</div>

``corporate_name`` - Corporate name. Minimum of 1 character and maximum of 255. String.


``cnpj`` - CNPJ of the company. Size: 14 characters. String.


****


   <div>  
              <div className="left">
               <b>billing_address</b>   
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
    
  Object
    </div>
   <div>
<em> Billing Address:</em>
</div>

``street`` - street name (Object)

``number`` -  number (String/Integer)

``neighborhood`` - Neighborhood (String)

``zipcode`` - ZIP code (without dots or hyphens) (String) ``^[0-9]{8}$``

``city`` - city (String)

``complement`` - complement (String/null)

``state`` -  state (2 characters) (Object) ``^(?:A[CLPM]|BA|CE|DF|ES|GO|M[ATSG]|P[RBAEI]|R[JNSOR]|S[CEP]|TO)$``  

****

   <div>  
              <div className="left">
               <b>payment_token</b>   
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
    
  String
    </div>
 Unique payment token obtained in the first step of transaction generation. ``^[a-fA-F0-9]{40}$``

  ****
    
    