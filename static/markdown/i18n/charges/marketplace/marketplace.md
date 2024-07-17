
<div className="espaco-1">
  </div> 

#### Description of Tags

****
   <div>  
          <div className="left">
           <b>mode</b>   
          </div>
              </div> <br/>
Configures the intermediation fee mode.

  ``mode = 1`` for the fee to be deducted only from the account that issued the charge.

  ``mode = 2`` for the fee to be deducted proportionally according to the percentage defined for all accounts receiving the transfers.
<br/><br/>
The regex is: <code>^(1|2)$</code>

****
   <div>  
          <div className="left">
           <b>repass</b>   
          </div>
              </div> <br/>              
Configures a Marketplace transfer.

Attributes of repass:

  ``payeeCode`` - Efí account code that will receive the transfer - refers to the <a href="/img/identificador.png" target="_blank">account identifier</a>. (String) <code>^[a-fA-F0-9]{32}$</code>

  ``percentage`` - including 2 decimal digits. Ex.: 90% = 9000. (Integer)
<br/>

<b>Note:</b> if there is no previous state (i.e., for new charges), the previous value will be <code>null</code>.

</div>
 

