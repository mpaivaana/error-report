<div>
    <div className="espaco-1">
  

   #### Dados para geração da cobrança
  <br/>                                        
<div className="subtitulo">
    (*) são atributos obrigatórios
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
                   <b>Obrigatório</b>      
                </div>
              </div>
      </div>                                      
    
  <br/>                                        
<div className="subtitulo"> 
    
  Array
  </div>
  Item que está sendo vendido. Uma mesma transação pode possuir ilimitados itens.<br/><br/>

  ``name`` - Nome do item, produto ou serviço. Mínimo de 1 caractere e máximo de 255 caracteres (String).

  ``value`` - Valor, em centavos. Ex: R$ 10,00 = 1000. Integer.

  ``amount`` - Quantidade. Integer (padrão: 1)

    
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
                      <b>Opcional</b>   
                    </div>
                  </div>
          </div>                                       
    
    
  <br/>                                        
<div className="subtitulo"> 
   Array
    </div>
    <br/>
    Determina o(s) valor(es) de frete(s) de uma transação. Uma mesma transação pode possuir ilimitados valores de frete.<br/><br/>

  ``name`` - Rótulo do frete. Máximo de 255 caracteres. String.

  ``value`` - Valor do frete, em centavos (1990 equivale a R$19,90). Integer.

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
                  <b>Opcional</b>   
                </div>
              </div>
      </div>                                               
    
  <br/>                                        
<div className="subtitulo"> 
    	Define dados específicos da transação.<br/></div>

  <br/>

  ``custom_id`` - Permite associar uma transação Efí a uma ID específica de 
     seu sistema ou aplicação, permitindo identificá-la caso você possua uma
     identificação específica e queira mantê-la. Máximo de 255 caracteres. String/null.

  ``notification_url`` -  Endereço de sua URL válida que receberá as notificações de 
    mudanças de status das transações.  Máximo de 255 caracteres. String/null.
 
 </div>