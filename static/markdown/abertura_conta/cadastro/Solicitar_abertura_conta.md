<div>
<div className="espaco-1">

#### Dados para abertura de conta simplificada
<br/>                                        
<div className="subtitulo">
(*) são atributos obrigatórios
</div>
</div>

****


   <div>  
   <p><code><strong> Body params </code></strong></p>
          <div className="left">
           <b>clienteFinal</b>   
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
<br/>
Os campos aninhados sob o identificador clienteFinal organizam informações a respeito de dados do cliente final ao qual vai se gerar a conta.
<br/><br/> <div>
<em>clienteFinal:</em>
</div>

``cpf*`` - CPF do cliente final pessoa física. String

``nomeCompleto*`` - Nome completo do cliente final pessoa física. (String)

``dataNascimento*`` - Data de nascimento do cliente final pessoa física.
(String No formato: ``DD/MM/AAAA``)

``nomeMae`` - Nome da mãe do cliente final pessoa física.
(String)

``celular*`` -  Celular do cliente final.
(String)

``email*`` - E-mail do cliente final.
(String)

``cnpj`` - CNPJ do cliente final pessoa jurídica.
(String)

``razaoSocial`` - Razão social do cliente final pessoa jurídica.
(String)

``endereco`` - Endereço do cliente final.
(Object)

``cep*`` - CEP do cliente final pessoa física.
(String)

``estado*`` - Estado do cliente final pessoa física.
(String)

``Enum`` - AC, AL, AP, AM, BA, CE, DF, ES, GO, MA, MT, MS, MG, PA, PB, PR, PE, PI, RJ, RN, RS, RO, RR, SC, SP, SE, TO

``cidade*`` - Cidade do cliente final pessoa física.
(String)

``bairro*`` - Bairro do cliente final pessoa física.
(String)

``logradouro*`` -Logradouro do cliente final pessoa física.
(String)

``numero*`` - Número do cliente final pessoa física.
(String)

``complemento`` - Complemento do cliente final pessoa física.
(String)

****

   <div>  
          <div className="left">
           <b>meioDeNotificacao</b>   
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
<br/>
Meio pelo qual o cliente final receberá notificação para aprovar a solicitação.
<br/><br/> 

Enum: ``sms``, ``whatsapp``


****

 <div>  
          <div className="left">
           <b>escoposIntegrados</b>   
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
<br/>
Escopos de serviços que o integrador deseja acessar na conta do cliente final. Não é possível solicitar escopos de serviços não configurados para a aplicação do integrador solicitante.
<br/><br/> 

Enum: ``cob.write``, ``cob.read``, ``pix.write``, ``pix.read``, ``webhook.write``, ``webhook.read``, ``payloadlocation.write``, ``payloadlocation.read``, ``gn.pix.evp.write``, ``gn.pix.evp.read``, ``gn.balance.read``, ``gn.settings.write``, ``gn.settings.read`` 

``gn.opb.participants.read``, ``gn.opb.payment.pix.send``, ``gn.opb.payment.pix.read``, ``gn.opb.payment.pix.refund``, ``gn.opb.payment.pix.cancel``, ``gn.opb.config.write``, ``gn.opb.config.read``


</div>
 


 

