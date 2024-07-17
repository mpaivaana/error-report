<div>
<div className="espaco-1">
 </div>

#### Descrição das Tags

****

   <div>  
          <div className="left">
           <b>id</b>   
          </div>
              </div> <br/>                                


Indicador de ordem, iniciado em <code>1</code>. É incrementado para cada mudança de um token de notificação. Isso é útil se você precisar manter o controle sobre qual alteração você já processou.

****

   <div>  
          <div className="left">
           <b>type</b>   
          </div>
              </div>                                     
<br/>
Determina o tipo da cobrança que sofreu a alteração.
<br/><br/>
   <div>
Os tipos possíveis são:
</div>

  ``charge`` -  A alteração ocorreu em uma transação.

  ``subscription`` -  A alteração ocorreu em uma assinatura.

  ``carnet`` - A alteração ocorreu em um carnê.

  ``subscription_charge`` - A alteração ocorreu em uma parcela de assinatura.

  ``carnet_charge`` - A alteração ocorreu em uma parcela de carnê.

****

   <div>  
          <div className="left">
           <b>custom_id</b>   
          </div>
              </div>
  </div>                                      
<br/>
Informa o identificador da cobrança definido pelo integrador, se existir.

****

   <div>  
          <div className="left">
           <b>status</b>   
          </div>
              </div>
  </div>                                      
<br/>
Define o status atual e o status anterior da transação, assinatura ou carnê.
<br/>
<br/>
   <div>
Atributos de status:
</div>

  ``current`` -  Status atual da cobrança.

  ``previous`` -  Status da cobrança antes da alteração.
<br/>
<br/>
<b>Obs:</b> se não houver estado anterior (isto é, para novas charges), o valor anterior será <code>null</code>.

****

   <div>  
          <div className="left">
           <b>identifiers</b>   
          </div>
              </div>
  </div>                                      
<br/>
Identificadores que representam a cobrança. Os atributos desta tag podem variar conforme o tipo da alteração (parâmetro <code>type</code>).
<br/>
<br/>
   <div>
Identificadores que podem ser retornados:
</div>

  ``charge_id`` -  Retornado quando ``type = "charge"``.

  ``subscription_id`` -  Retornado quando ``type = "subscription"``.

  ``carnet_id`` - Retornado quando ``type = "carnet"``.

  ``charge_id`` e ``subscription_id`` - Retornados quando<br/> ``type = "subscription_charge``.

   ``charge_id`` e ``carnet_id`` - Retornados quando ``type = "carnet_charge"``

****

   <div>  
          <div className="left">
           <b>value</b>   
          </div>
              </div>
  </div>                                      
<br/>
Valor que acompanha a alteração. Esta tag existirá quando a alteração for uma confirmação de pagamento, informando o valor pago que foi confirmado.

</div>
 

