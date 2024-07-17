<div>
<div className="espaco-1">

#### Application URL Configuration Data
<br/>                                        
<div className="subtitulo">
(*) are required attributes
</div>
</div>

****

   <div>  
   <p><code><strong> Body params </code></strong></p>
          <div className="left">
           <b>redirectURL</b>   
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

string
</div>

 URL where the end customer will be redirected after the transaction.
The redirectURL will be triggered when the customer is redirected to the originating store, i.e., to the environment that the integrator prepares to receive the customer after completing actions in the banking environment.
    ****

   <div>  
          <div className="left">
           <b>webhookURL</b>   
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

string
</div>

URL where the notification will be sent.

****
   <div>  
           <div className="left">
           <b>webhookSecurity	</b>   
          </div>
           <div className="right">
           <div className="opcional">
            <svg id="minus-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19359" data-name="Caminho 19359" d="M728,200a8,8,0,1,0,8,8A8.009,8.009,0,0,0,728,200Zm0,15.2a7.2,7.2,0,1,1,7.2-7.2A7.208,7.208,0,0,1,728,215.2Z" transform="translate(-720 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19360" data-name="Caminho 19360" d="M732.541,209.5H725.5a.4.4,0,1,0,0,.8h7.043a.4.4,0,0,0,0-.8Z" transform="translate(-721.02 -201.9)" fill="#2f2f2f"/>
</svg> 
              <b>Opcional </b>   
            </div>
          </div>
  </div>                                               

<br/>                                        
<div className="subtitulo"> 

string *If not informed, assumes the default value which is <code>mtls</code>.
</div>

Fields nested under the webhookSecurity identifier organize information to ensure the security of the webhook.

``type*`` // Type of security that will be used in the communication with the webhookURL:
*hmac* - Communication will send this hash to confirm the identity.
*mtls* - Communication will require a configured mtls. For more details, access the <a href="/docs/api-pix/webhooks#entendendo-o-padrão-mtls" target="_blank">link</a>.

``hash*`` - // This field becomes mandatory when the type informed is hmac. Example: abc123def567ghi

****
   <div>  
           <div className="left">
           <b>processPayment	</b>   
          </div>
           <div className="right">
           <div className="opcional">
            <svg id="minus-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19359" data-name="Caminho 19359" d="M728,200a8,8,0,1,0,8,8A8.009,8.009,0,0,0,728,200Zm0,15.2a7.2,7.2,0,1,1,7.2-7.2A7.208,7.208,0,0,1,728,215.2Z" transform="translate(-720 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19360" data-name="Caminho 19360" d="M732.541,209.5H725.5a.4.4,0,1,0,0,.8h7.043a.4.4,0,0,0,0-.8Z" transform="translate(-721.02 -201.9)" fill="#2f2f2f"/>
</svg> 
              <b>Opcional </b>   
            </div>
          </div>
  </div>                                               

<br/>                                        
<div className="subtitulo"> 

string *If not informed, assumes the default value which is <code>sync</code>.
</div>

The client can inform the Open Finance API how the payment processing will be done.

The processPayment attribute accepts two values ​​"async" and "sync". If the value informed is "async", the client will no longer see <a href="/img/loading.gif" target="_blank">this screen</a> during the redirection process.

<b>NOTE</b>: Webhook or payment inquiry will be necessary to know the situation.



</div>
 

