---
id: status
title: Transaction Status
hide_title: true
sidebar_label: Transaction Status
---
<h1 className="titulo">Transaction Status</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<div className="subtitulo">
Information regarding all possible statuses of a payment initiated by the Open Finance Efí API.
</div>
 
<br/>
<br/>

## PAYMENT INITIATED

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>pendente</code>  </td>
        <td>The payment request has been received and is pending.</td>
      </tr>
      <tr>
        <td><code>agendado</code>  </td>
        <td>The payment has been scheduled.</td>
      </tr>
      <tr>
        <td><code>rejeitado</code>  </td>
        <td>The payment has been rejected.</td>
      </tr>
      <tr>
        <td><code>aceito</code>  </td>
        <td>The payment has been successfully accepted.</td>
      </tr>
       <tr>
        <td><code>cancelado</code>  </td>
        <td>The payment has been canceled (Status for scheduled payment).</td>
      </tr>
       <tr>
        <td><code>expirado</code>  </td>
        <td>The redirect link was generated but not used.</td>
      </tr>
    </tbody>
  </table>
</div>                                                                                                                                      


</div>