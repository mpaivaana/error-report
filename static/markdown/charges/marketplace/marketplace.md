
<div className="espaco-1">
  </div> 

#### Descrição das Tags

****
   <div>  
          <div className="left">
           <b>mode</b>   
          </div>
              </div> <br/>
Configura a modalidade da tarifa de intermediação.


  ``mode = 1`` para a tarifa ser descontada apenas da conta emissora da cobrança.

  ``mode = 2`` para a tarifa ser descontada proporcionalmente ao percentual definido para todas as contas que receberão os repasses.
<br/><br/>
Segue a regex: <code>^(1|2)$</code>

****
   <div>  
          <div className="left">
           <b>repass</b>   
          </div>
              </div> <br/>              
  Configura um repasse de Marketplace, que pode ser porcentagem ou valor fixo

Atributos de repass

  ``payeeCode`` - código da conta Efí que receberá o repasse - refere-se ao <a href="/img/identificador.png" target="_blank">identificador de conta</a>. (String) <code>^[a-fA-F0-9]{32}$</code>

  ``percentage`` -  incluindo dígitos de 2 casas decimais. Ex.: 90% = 9000. (Integer) 

  ``fixed`` -  incluindo dígitos de 2 casas decimais. Ex.: R$15,00 = 1500. (Integer)

<br/>

<b>Obs:</b> se não houver estado anterior (isto é, para novas charges), o valor anterior será <code>null</code>.

</div>
 

