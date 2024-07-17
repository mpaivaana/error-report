<div>
    <div className="espaco-1">
  

   #### Dados que podem ser utilizados para alterar atributos do link de pagamento
  <br/>                                        
<div className="subtitulo">
    (*) são atributos obrigatórios
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
               <b>Obrigatório</b>      
            </div>
          </div>
  </div>                                      

<br/>                                        
<div className="subtitulo"> 

integer
</div>

O campo id determina o <code>charge_id</code> da transação desejada.

****


   <div>  
   <p><code><strong> Body params </code></strong></p>
               <div className="left">
               <b>billet_discount</b>   
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
    
  Integer
  </div> 
 	Define um desconto, em reais, caso o pagador escolha boleto bancário como forma de pagamento (informar valor inteiro, em reais).

 <b>5000 equivale a R$ 50,00</b>

****

   <div>  
               <div className="left">
               <b>card_discount</b>   
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
    
  Integer
  </div> 
Define um desconto, em reais, caso o pagador escolha cartão de crédito como forma de pagamento (informar valor Inteiro).

 <b>5000 equivale a R$ 50,00</b>

****
   <div>  
               <div className="left">
               <b>conditional_discount</b>   
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
    
  Object
  </div> 
Define desconto condicional que é válido até uma data específica. Se o pagamento não for efetuado até aquela data, o desconto é invalidado.
<br/>
<br/>

``type`` - Tipo do desconto (String). Valores permitidos:<br/>
<b>percentage</b> - o desconto será informado em porcentagem.
<b>currency</b> - o desconto será informado em centavos;

``value`` - Valor do desconto (Integer). <br/>
Se o tipo do desconto for <code>currency</code>, o valor desta tag deverá ser informada pelo integrador em centavos (ou seja, 500 equivale a R$ 5,00). <br/>
Caso o tipo do desconto seja <code>percentage</code>, o valor deverá ser multiplicado por 100 (ou seja, 1500 equivale a 15%). Exemplos:
1) currency // deve ser informado em centavos, ou seja, se o desconto será de R$ 5,99, o integrador deve informar 599;
2) percentage // deve ser informado em centavos, ou seja, se o desconto é de 15%, o integrador deve informar 1500.

``until_date`` - Data máxima que o desconto será concedido. (String). Formato: YYYY-MM-DD

****

   <div>  
               <div className="left">
               <b>message</b>   
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
    
 String
  </div> 
Define uma mensagem para o pagador. A mensagem aparece na tela de pagamento, nos e-mails relacionados à cobrança e no boleto, caso esta seja a forma de pagamento escolhida.

 <b>Mínimo de 3 e máximo de 80 caracteres.</b>

****

   <div>  
              <div className="left">
               <b>expire_at</b>   
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
    
String
  </div>
Define a data de vencimento da tela de pagamento e do próprio boleto, caso esta seja a forma de pagamento escolhida.

 <b>Formato: YYYY-MM-DD</b>


****

   <div>  
              <div className="left">
               <b>request_delivery_address</b>   
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
    
  Boolean
  </div>
 Define se a tela de pagamento deve solicitar que o pagador informe um endereço de entrega. Há dois possíveis valores: <br/>

- true (equivale a "sim") ou; <br/>
- false (equivale a "não").

****

 <div>  
              <div className="left">
               <b>payment_method</b>   
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
    
  Boolean
  </div>
 Define as formas de pagamento que devem ficar disponíveis na tela para seu cliente escolher, podendo ser: <br/>

- banking_billet (boleto bancário); <br/>
- credit_card (cartão de crédito); <br/>
- all (permitir pagamento via boleto e cartão).

  </div>
     
    
    