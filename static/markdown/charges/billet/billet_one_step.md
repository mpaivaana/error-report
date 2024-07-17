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
    
  Object
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

  Object	<br/></div>
    Define dados específicos da transação. <br/>

  ``custom_id`` - Permite associar uma transação Efí a uma ID específica de 
     seu sistema ou aplicação, permitindo identificá-la caso você possua uma
     identificação específica e queira mantê-la. Máximo de 255 caracteres. String/null.

  ``notification_url`` -  Endereço de sua URL válida que receberá as notificações de 
    mudanças de status das transações.  Máximo de 255 caracteres. String/null.
 

  ****

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
                  <b>Obrigatório</b>   
                </div>
              </div>
      </div>                                                
    
  <br/>                                        
<div className="subtitulo"> 
    
  String <em> Obs: Para Pessoa Jurídica não serão obrigatórios o nome e CPF, apenas os demais dados do cliente contidos em ``juridical_person``</em>
    </div>
 <div>
 Dados pessoais do pagador:
</div>

  ``name*`` - nome (String) ``^[ ]_(.+[ ]+)+.+[ ]_$``

  ``cpf*`` -  CPF do cliente (sem pontos, vírgulas ou hífen) (String)

  ``email`` - Endereço de email válido do cliente (String) ``^[a-zA-Z0-9._%+-]+@"descricao-at+\.to"><sp{2,}$``

  ``phone`` - Telefone válido do cliente, sem caracteres especiais (String) ``^[1-9]{2}9?[0-9]{8}$``

  ``birth`` - Data de Nascimento do cliente (data válida em formato YYYY-MM-DD) (String) ``^(?:19[0-9]{2}|2[0-9]{3})-(?:0[1-9]|1[0-2])-(?:0[1-9]\|[12][0-9]|3[01])$``

  ``address`` - Endereço de Entrega (Object)

  ``juridical_person`` -  Dados de pessoa jurídica (Object)<br/>
  <b>OBS</b>: Caso seja utilizado esse atributo, os campos <i>nome</i> e <i>cpf</i> não se tornam obrigatórios.


  ****

   <div>  
           <div className="left">
           <b>address</b>   
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
    
  Object
    </div>
   <div>
 Endereço da cobrança:
</div>

  ``street`` - nome da rua (Object)

  ``number`` -  número (String/Integer)

  ``neighborhood`` - Bairro (String)

  ``zipcode`` - CEP (sem pontos ou hífen) (String) ``^[0-9]{8}$``

  ``city`` - cidade (String)

  ``complement`` - complemento (String/null)

  ``state`` -  estado (2 caracteres) (Object) ``^(?:A[CLPM]|BA|CE|DF|ES|GO|M[ATSG]|P[RBAEI]|R[JNSOR]|S[CEP]|TO)$``  

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
              <b>Opcional</b>   
            </div>
          </div>
  </div> 

  <br/>                                        
<div className="subtitulo"> 

 Object
    </div>
   <div>
 Dados de pessoa jurídica:
</div>

``corporate_name`` - Nome da razão social. Mínimo de 1 caractere e máximo de 255. String.


``cnpj`` - CNPJ da empresa. Tamanho: 14 caracteres. String.

  

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
    Data de vencimento do boleto. <code>YYYY-MM-DD</code>


  ****
   <div>  
               <div className="left">
               <b>discount</b>   
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
 Define dados de desconto sobre a cobrança.<br/><br/>



``type`` - Tipo do desconto (String). Valores permitidos:<br/>
<b>currency</b>: o desconto será informado em centavos;<br/>
<b>percentage</b>: o desconto será informado em porcentagem.<br/>

``value`` - Valor do desconto (Integer). <br/>
Se o tipo do desconto for  <code>currency</code>, o valor desta tag deverá ser informada pelo integrador em centavos (ou seja,<br/> 500 equivale a R$ 5,00). Caso o tipo do desconto seja <code>percentage</code>, o valor deverá ser multiplicado por 100 (ou seja, 1500 equivale a 15%). <br/><br/>
<em>Exemplos:</em><br/>
1- <b>currency</b> - deve ser informado em centavos, ou seja, se o desconto será de R$ 5,99, o integrador deve informar 599;<br/>
2- <b>percentage </b> - deve ser informado em centavos, ou seja, se o desconto é de 15%, o integrador deve informar 1500.
    
  <b>Obs:</b> <em>boleto com valor abaixo de R$10,00 não será aplicado desconto</em>.

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
 Define desconto condicional que é válido até uma data específica. Se o pagamento não for efetuado até aquela data, o desconto é invalidado.<br/>

<br/>

``type`` - Tipo do desconto (String). Valores permitidos:<br/>
<b>currency</b>: o desconto será informado em centavos;<br/>
<b>percentage</b>: o desconto será informado em porcentagem.<br/>

``value`` - Valor do desconto (Integer). <br/>
Se o tipo do desconto for  <code>currency</code>, o valor desta tag deverá ser informada pelo integrador em centavos (ou seja,<br/> 500 equivale a R$ 5,00). Caso o tipo do desconto seja <code>percentage</code>, o valor deverá ser multiplicado por 100 (ou seja, 1500 equivale a 15%). <br/><br/>
<em>Exemplos:</em><br/>
1- <b>currency</b> - deve ser informado em centavos, ou seja, se o desconto será de R$ 5,99, o integrador deve informar 599;<br/>
2- <b>percentage </b> - deve ser informado em centavos, ou seja, se o desconto é de 15%, o integrador deve informar 1500.<br/>

``until_date`` - Data máxima que o desconto será concedido. (String). <code> YYYY-MM-DD</code>
    
  <b>Obs:</b> <em>boleto com valor abaixo de R$10,00 não será aplicado desconto</em>.

  ****
   <div>  
               <div className="left">
               <b>configurations</b>   
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

 Permite incluir no boleto multa e juros caso seja pago após o vencimento.
 <br/>

  ``days_to_write_off`` - Número de dias para ocorrer a baixa do boleto após o vencimento. Mínimo de 0 e máximo de 120. Integer.<br/>

  ``fine`` - valor cobrado de multa após o vencimento. Por exemplo: se você quiser 2%, você deve informar <code>200</code>. Mínimo de 0 e máximo de 1000. Integer.<br/>

  <b>Caso você possua configurações de multa ativada na Efí e queira gerar emissões na API sem multa, utilize <code>0</code> como valor do atributo <code>fine</code><br/></b>

  ``interest`` - Juros após a data de vencimento. <br/>

  ``valor`` - Valor cobrado de juros após a data de vencimento. Por exemplo: se você quiser 0,33%, você deve informar <code>330</code>. Mínimo de 0 e máximo de 330. Integer.<br/>

  ``type`` - Tipo do de juros, mensal ou diário (String). Valor permitido:<br/>
  <b>monthly</b>: o juro será mensal. Se não informar o tipo, por padrão, o juro será diário.<br/>

  <b>Caso você possua configurações de multa ativada na Efí e queira gerar emissões na API sem juros, utilize <code>0</code> como valor do atributo <code>interest</code></b>
    
  <b>Obs:</b> <em>boleto com valor abaixo de R$10,00 não será aplicado juros e multa.</em>.

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
 	Permite incluir no boleto uma "observação", ou em outras palavras, uma mensagem para o cliente. Essa mensagem poderá ser vista nos e-mails relacionados à cobrança, no boleto ou carnê.
  Até 4 linhas contendo 100 caracteres em cada linha. String.<br/><br/>

 <b>O operador <code>\n</code> é utilizado para efetuar a quebra de linha.</b>


  </div>
     
    
    