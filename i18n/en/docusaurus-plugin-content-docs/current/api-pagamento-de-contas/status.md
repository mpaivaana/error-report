---
id: status
title: Payment status
hide_title: true
sidebar_label: Payment status
---
<h1 className="titulo">Payment status</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<div className="subtitulo">
This page lists all the possible statuses of a payment requested by the Efí Bill Payment API.
</div>

<br/>
<br/>

## PAYMENT REQUESTED

Below, check the table with the list of all possible statuses of a payment requested.

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>EM_PROCESSAMENTO</code>  </td>
        <td>The payment request has been received and is being processed.</td>
      </tr>
      <tr>
        <td><code>AGENDADO</code>  </td>
        <td>The payment was scheduled to be made on the requested date.</td>
      </tr>
      <tr>
        <td><code>EXECUTADO</code>  </td>
        <td>The payment was successfully sent to be settled.</td>
      </tr>
       <tr>
        <td><code>LIQUIDADO</code>  </td>
        <td>The payment was successfully settled.</td>
      </tr>
       <tr>
        <td><code>CANCELADO</code>  </td>
        <td>The payment was canceled by the customer and the amount refunded.</td>
      </tr>
       <tr>
        <td><code>NAO_REALIZADO</code>  </td>
        <td>The payment had an error and was not sent for settlement or the amount was reversed.</td>
      </tr>
    </tbody>
  </table>
</div>                                                                                                                                      


</div>