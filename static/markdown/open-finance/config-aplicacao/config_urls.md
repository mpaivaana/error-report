<div>
<div className="espaco-1">

#### Dados para configurar URLs da aplicação
<br/>                                        
<div className="subtitulo">
(*) são atributos obrigatórios
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
               <b>Obrigatório</b>      
            </div>
          </div>
  </div>                                      

<br/>                                        
<div className="subtitulo"> 

string
</div>

Url para onde o cliente final vai ser direcionado após a transação.
A redirectURL será acionada no momento em que o cliente for direcionado para a loja de origem, ou seja, para o ambiente que o integrador prepara para receber o cliente após finalizar as ações no ambiente bancário.

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
              <b>Obrigatório</b>   
            </div>
          </div>
  </div>                                       


<br/>                                        
<div className="subtitulo"> 

string
</div>

Url para onde a notificação vai ser enviada.	

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

string *Se não informado, assume o valor padrão que é <code>mtls</code>.
</div>

Os campos aninhados sob o identificador webhookSecurity organizam informações para garantir a segurança do webhook.

``type*`` // Tipo de segurança que será usada na comunicação com o webhookURL:
*hmac* - A comunicação enviará este hash para confirmar a identidade.
*mtls* - A comunicação exigirá um mtls configurado. Para mais detalhes, acesse o <a href="/docs/api-pix/webhooks#entendendo-o-padrão-mtls" target="_blank">link</a>.

``hash*`` - // Este campo se torna obrigatório quando o type informado for igual a hmac. Exemplo: abc123def567ghi

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

string *Se não informado, assume o valor padrão que é <code>sync</code>.
</div>

O cliente poderá informar a API Open Finance como será feito o processamento do pagamento. 

O atributo processPayment aceita dois valores “async” e “sync”. Caso o valor informado seja “async”, o cliente não verá mais <a href="/img/loading.gif" target="_blank">essa tela</a> durante o processo de redirecionamento.

<b>OBS</b>: Será necessário webhook ou consulta do pagamento para saber a situação.</b>



</div>
 

