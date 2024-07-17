<div>
<div className="espaco-1">
  </div> 

#### Descrição dos Códigos de status HTTP (2xx, 3xx, 4xx e 5xx)

****
   <div>  
          <div className="left">
           <b>200(OK)</b>   
          </div>
              </div>
                                     
<br/>
Requisição ocorreu com sucesso.

****

   <div>  
          <div className="left">
           <b>301(Moved Permanently)</b>   
          </div>
              </div>
                                    
<br/>
Redirecionamento de uma página para outro endereço, de forma permanente.<br/><br/>
Você deve atualizar para a URL correta para recebimento do token de notificação.<br/><br/>
O ajuste da URL pode ser realizada no lado de seu servidor ou enviando requisições <code>PUT</code> para a rota adequada.

****

   <div>  
          <div className="left">
           <b>302(Found)</b>   
          </div>
              </div>
  </div>                                      
<br/>
Redirecionamento de uma página para outro endereço, mas com indicação de caráter temporário, não permanente.<br/><br/>
Você deve atualizar para a URL correta para recebimento do token de notificação.<br/><br/>
O ajuste da URL pode ser realizada no lado de seu servidor ou enviando requisições <code>PUT</code> para a rota adequada.

****

   <div>  
          <div className="left">
           <b>400(Bad Request)</b>   
          </div>
              </div>
  </div>                                      
<br/>
Algum parâmetro obrigatório não foi enviado ou foi enviado de maneira inválida.Consulte o "histórico de requisições" para interpretar os retornos da API e corrija a sintaxe e/ou parâmetros da requisição que está enviando à API Efí.

****

   <div>  
          <div className="left">
           <b>401(Not Found)</b>   
          </div>
              </div>
  </div>                                      
<br/>
O recurso requisitado não foi encontrado. Ou seja, o retorno 401 surge quando o recurso (URL/documento/arquivo) requisitado a um servidor de destino não existe ou não é encontrado. <br/><br/>
Certifique-se que sua URL está correta para o recebimento do token de notificação. <br/><br/>
O ajuste da URL pode ser realizada no lado de seu servidor ou enviando requisições <code>PUT</code> para a rota adequada

****

   <div>  
          <div className="left">
           <b>404(Not Found)</b>   
          </div>
              </div>
  </div>                                      
<br/>
O recurso requisitado não foi encontrado. Ou seja, o retorno 404 surge quando o recurso (URL/documento/arquivo) requisitado a um servidor de destino não existe ou não é encontrado. <br/><br/>
Certifique-se que sua URL está correta para o recebimento do token de notificação. <br/><br/>
O ajuste da URL pode ser realizada no lado de seu servidor ou enviando requisições <code>PUT</code> para a rota adequada

****

   <div>  
          <div className="left">
           <b>500(Internal Server Error)</b>   
          </div>
              </div>
  </div>                                      
<br/>
Erro interno do servidor. O servidor encontrou uma condição inesperada que impediu o cumprimento da solicitação. Normalmente indica erro oriundo do servidor web. Uma causa comum é algum erro no <code>.htaccess</code>. Para apurar, leia o log de erros do seu servidor.<br/><br/>
Vale lembrar que esse tipo de erro não é acessível pelo PHP, por isso você não conseguirá ler os detalhes do log ativando a exibição dos erros no PHP.<br/><br/>
Contudo, nem sempre o erro é do webserver, pois é possível configurar o ambiente para que erros do PHP ou outro módulo, por exemplo, sejam tratados pelo webserver com o status 500.

</div>
 

