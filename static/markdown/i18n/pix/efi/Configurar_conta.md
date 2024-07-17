<div>
<div className="espaco-1">

#### Data for account configuration
<br/>                                        
<div className="subtitulo">
(*) are required attributes
</div>
</div>

****
  <div>  
     <p><code><strong> Body params </code></strong></p>
          <div className="left">
           <b>pix</b>   
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
<br/>
Object containing the account settings related to Pix.
</div>

``receberSemChave*`` - Mandatory boolean attribute that configures the possibility of receiving Pix without registered keys.

``chaves`` - Optional object attribute that can contain one or more keys and their individual configurations.

``<chave pix>`` - Optional string attribute representing a Pix key and satisfying the Regex ``^[a-zA-Z0-9-.@_+]{1,77}$``

``recebimento*`` - Mandatory object attribute containing the settings related to Pix receipts for a specific key.

``txidObrigatorio*`` - Mandatory boolean attribute that configures the requirement of txid in received Pix charges for a Pix key.

``recusarTipoPessoa`` - Optional string attribute that configures the restriction of receiving by document type, can be PF (individual) and/or PJ (legal entity).

``qrCodeEstatico*`` - Mandatory object attribute containing the settings related to static QR Codes for a specific Pix key.

``recusarTodos*`` - Mandatory boolean attribute that configures the rejection of all static QR Codes.

``webhook`` - Optional object attribute containing the settings related to receiving information about fees for each received or sent Pix charge.

``notificação`` - Optional object attribute containing the settings related to receiving information about received or sent Pix charges.

``tarifa*`` - Mandatory boolean attribute that configures whether to receive the fee amount paid when receiving or sending Pix to the Efí account.

``pagador*`` - Mandatory boolean attribute. Configures the receipt of payer data from the received Pix charge, the returned data is: full name and masked CPF/CNPJ.

``notificar`` - Optional object attribute containing the settings related to receiving information about received Pix charges.

``pixSemTxid*`` - Mandatory boolean attribute that configures whether to receive notifications of Pix charges without Txid.

``envio`` - Optional object attribute containing the settings related to sending Pix for a specific key.

``webhook*`` - Optional object attribute containing the settings related to receiving information about fees for each received or sent Pix charge.

``notificação*`` - Optional object attribute containing the settings related to receiving information about received or sent Pix charges.

``tarifa*`` - Mandatory boolean attribute that configures whether to receive the fee amount paid when sending Pix to the Efí account.

``favorecido*`` - Mandatory boolean attribute. Configures the receipt of data from the beneficiary of the sent Pix, the returned data is: full name and masked CPF/CNPJ.

</div>
 

