<div>
<div className="espaco-1">

#### Data to retrieve participating institutions
<br/>                                        
<div className="subtitulo">
(*) are required attributes
</div>
</div>

****

 <div>  
 <p><code><strong> Query params </code></strong></p>
           <div className="left">
           <b>nome</b>   
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
  </div>     

<br/>                                        
<div className="subtitulo"> 

String
</div> 

Name of the PSP to be searched	

</div>


****

 <div>  
 <p><code><strong> Query params </code></strong></p>
           <div className="left">
           <b>organizacao</b>   
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
  </div>     

<br/>                                        
<div className="subtitulo"> 

boolean
</div> 

Assigning the value <code>false</code> to the organization field returns only the specified institution, reducing the fields that are queried.

Example: When searching using the term ITAU, 3 institutions are returned, which belong to BCO ITAUCARD S.A. ("Itaú", "Iti", and "Player’s Bank"). By informing the organization parameter, only the institution identifier "Itaú" will be returned.

</div>
 

