<div>
<div className="espaco-1">

#### Dados para configuração da conta
<br/>                                        
<div className="subtitulo">
(*) são atributos obrigatórios
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
              <b>Obrigatório</b>   
            </div>
          </div>
  </div>                                           

<br/>                                        
<div className="subtitulo"> 
Object 
</div>
<div>
<br/>
Objeto contendo as configurações da conta relacionadas ao Pix.
</div>

``receberSemChave*`` - Atributo booleano obrigatório que configura a possibilidade do recebimento de Pix sem chaves cadastradas.

``chaves`` - Atributo objeto opcional que pode conter uma ou mais chaves e suas configurações individuais.

``<chave pix>`` - Atributo string opcional que representa uma chave Pix e satisfaz à Regex ``^[a-zA-Z0-9-.@_+]{1,77}$``

``recebimento*`` - Atributo objeto obrigatório que contém as configurações relacionadas aos recebimentos de Pix por uma determinada chave.

``txidObrigatorio*`` - Atributo booleano obrigatório que configura a obrigatoriedade de txid nas cobranças recebidas por uma chave Pix.

``recusarTipoPessoa`` - Atributo string opcional que configura a restrição de recebimento por tipo de documento, podendo ser PF (pessoa física) e/ou PJ (Pessoa Jurídica).

``qrCodeEstatico*`` - Atributo objeto obrigatório que contém as configurações relacionadas à QR Codes estáticos para uma determinada chave Pix.

``recusarTodos*`` - Atributo booleano obrigatório que configura a rejeição de todos os QR Codes estáticos.

``webhook`` - Atributo objeto opcional que contém as configurações relacionadas aos recebimentos de informação das tarifas por cada cobrança Pix recebida ou enviada.

``notificação`` - Atributo objeto opcional que contém as configurações relacionada ao recebimentos de informação de cobranças Pix recebidos ou enviados.

``tarifa*`` - Atributo booleano obrigatório que configura o recebimento ou não do valor das tarifas pagas ao receber ou enviar Pix na conta Efí.

``pagador*`` - Atributo booleano obrigatório. Configura o recebimento dos dados do pagador da cobrança Pix recebida, os dados retornados são: nome completo e CPF/CNPJ mascarados.

``notificar`` - Atributo objeto opcional que contém as configurações relacionada ao recebimentos de informação de cobranças Pix recebidas.

``pixSemTxid*`` - Atributo booleano obrigatório que configura o recebimento ou não de notificações de cobranças Pix sem Txid.

``envio`` - Atributo objeto opcional que contém as configurações relacionadas aos envios de Pix por uma determinada chave.

``webhook*`` - Atributo objeto opcional que contém as configurações relacionadas aos recebimentos de informação das tarifas por cada cobrança Pix recebida ou enviada.

``notificação*`` - Atributo objeto opcional que contém as configurações relacionada ao recebimentos de informação de cobranças Pix recebidos ou enviados.

``tarifa*`` - Atributo booleano obrigatório que configura o recebimento ou não do valor das tarifas pagas ao enviar Pix na conta Efí.

``favorecido*`` - Atributo booleano obrigatório. Configura o recebimento dos dados do favorecido do Pix enviado, os dados retornados são: nome completo e CPF/CNPJ mascarados.

</div>
 

