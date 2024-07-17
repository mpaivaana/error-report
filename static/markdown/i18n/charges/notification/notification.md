<div>
<div className="espaco-1">
 </div>

#### Description of Tags

****

   <div>  
          <div className="left">
           <b>id</b>   
          </div>
              </div> <br/>                                


Order indicator, starting at <code>1</code>. It is incremented for each change of a notification token. This is useful if you need to keep track of which change you have already processed.

****

   <div>  
          <div className="left">
           <b>type</b>   
          </div>
              </div>                                     
<br/>
Determines the type of billing that has changed.
<br/><br/>
   <div>
The possible types are:
</div>

  ``charge`` -  The change occurred in a transaction.

  ``subscription`` -  The change occurred in a subscription.

  ``carnet`` - The change occurred in a booklet.

  ``subscription_charge`` - The change occurred in a subscription installment.

  ``carnet_charge`` - The change occurred in a booklet installment.

****

   <div>  
          <div className="left">
           <b>custom_id</b>   
          </div>
              </div>
  </div>                                      
<br/>
Indicates the billing identifier defined by the integrator, if any.

****

   <div>  
          <div className="left">
           <b>status</b>   
          </div>
              </div>
  </div>                                      
<br/>
Defines the current status and the previous status of the transaction, subscription, or booklet.
<br/>
<br/>
   <div>
Status attributes:
</div>

  ``current`` -  Current status of the billing.

  ``previous`` -  Billing status before the change.
<br/>
<br/>
<b>Note:</b> if there is no previous state (i.e., for new charges), the previous value will be <code>null</code>.

****

   <div>  
          <div className="left">
           <b>identifiers</b>   
          </div>
              </div>
  </div>                                      
<br/>
Identifiers representing the billing. The attributes of this tag may vary depending on the type of change (parameter <code>type</code>).
<br/>
<br/>
   <div>
Identifiers that can be returned:
</div>

  ``charge_id`` -  Returned when ``type = "charge"``.

  ``subscription_id`` -  Returned when ``type = "subscription"``.

  ``carnet_id`` - Returned when ``type = "carnet"``.

  ``charge_id`` and ``subscription_id`` - Returned when<br/> ``type = "subscription_charge``.

   ``charge_id`` and ``carnet_id`` - Returned when ``type = "carnet_charge"``

****

   <div>  
          <div className="left">
           <b>value</b>   
          </div>
              </div>
  </div>                                      
<br/>
Value that accompanies the change. This tag will exist when the change is a payment confirmation, informing the confirmed paid amount.

</div>
 

