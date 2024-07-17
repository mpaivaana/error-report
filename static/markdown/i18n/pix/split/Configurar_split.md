<div>
<div className="espaco-1">

#### Data for Generating the Split
<br/>                                        
<div className="subtitulo">
(*) are required attributes
</div>
</div>

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

The descricao field, optional, determines a text to be displayed when creating the Split configuration in free format. This text will be filled by the Split configuration creator. The field size is limited to 80 characters (string).
      
****

   <div>  
          <div className="left">
           <b>lancamento</b>   
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

Object (Release)
</div>
 <div>
<em>lancamento:</em>
</div>

``imediato*`` - (boolean)


****
  <div>  
          <div className="left">
           <b>split</b>   
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
Object (Split)
</div>
<div>
<br/>
<em>split:</em>

**``divisaoTarifa*`` - The way the fee will be charged. (string) 
E.g.: "assumir_total" or "proporcional"

``minhaParte*`` - Defines the transfer to the account of the customer configuring the Split. (string)

``valor*`` - Defines the amount to be transferred. (string). E.g.: "60.00" (60%)

``repasses*`` - Defines transfers to the accounts of the beneficiaries other than the Split configurator client (array)

``favorecido*`` - Defines the beneficiary's data. (object)

``cpf/cnpj*`` - Beneficiary's document. (string) /^\d{11}$/

``conta*`` - Beneficiary's account number (including final digit, without h**yphen).
</div>

</div>
 

