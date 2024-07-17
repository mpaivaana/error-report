<div>
    <div className="espaco-1">
  

   #### Data for generating the charge
  <br/>                                        
<div className="subtitulo">
    (*) are required attributes
    </div>
    </div>

  ****

   <div>  
   <p><code><strong> Body params </code></strong></p>
              <div className="left">
               <b>items</b>   
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
    
  Array
  </div>
Item being sold. A single transaction can have unlimited items.<br/><br/>

``name`` - Item name, product, or service. Minimum of 1 character and maximum of 255 characters (String).

``value`` - Value, in cents. Ex: R$ 10.00 = 1000. Integer.

``amount`` - Quantity. Integer (default: 1)

``marketplace`` - Regarding transfer settings. 

    
****

   <div>  
              <div className="left">
               <b>marketplace</b>   
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
    
  Array
  </div>

``mode`` - Defines the fee discount method. Integer(default: 2)<br/>
Options: <br/>
<b>1</b> - fee is deducted only from the account that issued the charge<br/>
<b>2</b> - fee is deducted proportionally according to the percentage defined for each account receiving the transfer.

``repasses*`` -  Array with transfer definitions<br/>
<b>payee_code</b> - Efí account identifier code, unique per account - see (<a href="/img/identificador.png" target="_blank">Efí account identifier code</a>) String.<br/>
<b>percentage</b> - transfer percentage, where 9000 equals 90%. Integer.

    
  ****
    
   <div>  
              <div className="left">
               <b>shippings</b>   
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

   Array
    </div>
Determines the shipping value(s) of a transaction. A single transaction can have unlimited shipping values.<br/><br/>

``name`` - Shipping label. Maximum of 255 characters. String.

``value`` - Shipping value, in cents (1990 equals R$19.90). Integer.

  ****
   <div>  
               <div className="left">
               <b>metadata</b>   
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
  Defines specific transaction data. <br/>

``custom_id`` - Allows associating an Efí transaction with a specific ID from your system or application, allowing you to identify it if you have a specific identification and want to maintain it. Maximum of 255 characters. String/null.

``notification_url`` -  Your valid URL address that will receive notifications of transaction status changes.  Maximum of 255 characters. String/null.
 
 </div>