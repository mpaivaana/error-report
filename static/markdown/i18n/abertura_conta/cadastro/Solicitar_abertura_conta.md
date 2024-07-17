<div>
<div className="espaco-1">

 #### Data for opening a simplified account
<br/>                                        
<div className="subtitulo">
(*) are required attributes
</div>
</div>

****


   <div>  
   <p><code><strong> Body params </code></strong></p>
          <div className="left">
           <b>clienteFinal</b>   
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
<br/>
The nested fields under the clienteFinal identifier organize information about the data of the end customer for whom the account will be generated.
<br/><br/> <div>
<em>clienteFinal:</em>
</div>

``cpf*`` - CPF of the final customer who is an natural person. (String)

``nomeCompleto*`` - Full name of the final customer who is an natural person. (String)

``dataNascimento*`` - Date of birth of the final customer who is an natural person.
(String in the format: ``DD/MM/YYYY``)

``nomeMae`` - Mother's name of the final customer who is an natural person. (String)

``celular*`` - Cell phone of the final customer. (String)

``email*`` - Email of the final customer. (String)

``cnpj`` - CNPJ of the final customer who is a Juridical person. (String)

``razaoSocial`` - Corporate name of the final customer who is a Juridical person. (String)

``endereco`` - Address of the final customer. (Object)

``cep*`` - Postal code of the final customer who is an natural person. (String)

``estado*`` - State of the final customer who is an natural person. (String)

``Enum`` - AC, AL, AP, AM, BA, CE, DF, ES, GO, MA, MT, MS, MG, PA, PB, PR, PE, PI, RJ, RN, RS, RO, RR, SC, SP, SE, TO

``cidade*`` - City of the final customer who is an natural person. (String)

``bairro*`` - Neighborhood of the final customer who is an natural person. (String)

``logradouro*`` - Street of the final customer who is an natural person. (String)

``numero*`` - Number of the final customer who is an natural person. (String)

``complemento`` - Complement of the final customer who is an natural person. (String)

****

   <div>  
          <div className="left">
           <b>meioDeNotificacao</b>   
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
<br/>
The means by which the final customer will receive notification to approve the request.
<br/><br/> 

Enum: ``sms``, ``whatsapp``


****

 <div>  
          <div className="left">
           <b>escoposIntegrados</b>   
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
<br/>
Scopes of services that the integrator wants to access in the end customer's account. It is not possible to request service scopes that are not configured for the requesting integrator's application.
<br/><br/> 

Enum: ``cob.write``, ``cob.read``, ``pix.write``, ``pix.read``, ``webhook.write``, ``webhook.read``, ``payloadlocation.write``, ``payloadlocation.read``, ``gn.pix.evp.write``, ``gn.pix.evp.read``, ``gn.balance.read``, ``gn.settings.write``, ``gn.settings.read`` 

``gn.opb.participants.read``, ``gn.opb.payment.pix.send``, ``gn.opb.payment.pix.read``, ``gn.opb.payment.pix.refund``, ``gn.opb.payment.pix.cancel``, ``gn.opb.config.write``, ``gn.opb.config.read``


</div>
 


 

