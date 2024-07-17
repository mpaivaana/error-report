<div>
    <div className="espaco-1">
  

   #### Dados para geração do plano.
  <br/>                                        
<div className="subtitulo">
    (*) são atributos obrigatórios
    </div>
    </div>

  ****

   <div> 
   <p><code><strong> Body params </code></strong></p> 
              <div className="left">
               <b>name</b>   
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
Nome do plano de assinatura.

**Mínimo de 1 caractere e máximo de 255 caracteres.**

  ****

 <div>  
              <div className="left">
               <b>interval</b>   
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
    
Integer
    </div>
Determina o intervalo, **em meses**, que a cobrança da assinatura deve ser gerada. Informe <code>1</code> para assinatura mensal.  
  
Exemplo 1: se <code>interval = 1</code> e <code>repeats = null</code>, será gerada 1 (uma) cobrança por mês, ou seja, a cobrança recorrente será mensal, de acordo com a primeira data de vencimento escolhida e gerada indefinidamente.  
  
Exemplo 2: se <code>interval = 6</code> e <code>repeats = 2</code>, será gerada 1 (uma) cobrança a cada 6 (seis) meses, totalizando 2 (duas) cobranças em 12 meses (uma no 6º mês e outra no 12º mês).  
  
**Mínimo de 1 mês e máximo de 24 meses.**
    
  ****
    
   <div>  
              <div className="left">
               <b>repeats</b>   
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

  Integer
    </div>
Determina o número de vezes que a cobrança deve ser gerada. Se nada for enviado, a cobrança é gerada por tempo indeterminado ou até que o plano seja cancelado.  <br/>
  
Exemplo 1: se <code>interval = 1</code> e <code>repeats = null</code>, será gerada 1 (uma) cobrança por mês, ou seja, a cobrança recorrente será mensal, de acordo com a primeira data de vencimento escolhida.  
  
Exemplo 2: se <code>interval = 6</code> e <code>repeats = 2</code>, será gerada 1 (uma) cobrança a cada 6 (seis) meses, totalizando 2 (duas) cobranças em 12 meses (uma no 6º mês e outra no 12º mês).  
  
**Padrão: Ilimitado.  
Mínimo de 2 e máximo de 120.**



  </div>
     
    
    