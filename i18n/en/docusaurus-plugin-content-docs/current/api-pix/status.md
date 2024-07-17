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
This page contains the list of all possible transaction statuses of the Efí's Pix API.
</div>

<br/>
<br/>

## Pix Charge

Below, check the table containing the list of all possible statuses for a Pix Billing.

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>ATIVA</code>  </td>
        <td>This status indicates that the billing was successfully generated and is ready for payment.</td>
      </tr>
      <tr>
        <td><code>CONCLUIDA</code>  </td>
        <td>This status indicates that the billing was successfully generated and has been paid.</td>
      </tr>
      <tr>
        <td><code>REMOVIDA_PELO_USUARIO_RECEBEDOR</code>  </td>
         <td>This status indicates that the billing was successfully generated and was removed by the receiving user.</td>
      </tr>
      <tr>
        <td><code>REMOVIDA_PELO_PSP</code>  </td>
        <td>This status indicates that the billing was successfully generated and was removed by the PSP.</td>
      </tr>
    </tbody>
  </table>
</div>

<br/>          

## PIX SENDING

Below, a table containing the list of all possible statuses for a Pix Send.

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>EM_PROCESSAMENTO</code>  </td>
        <td>This status indicates that the Pix Send request was successfully received and is in the queue waiting to start processing.</td>
      </tr>
      <tr>
        <td><code>REALIZADO</code>  </td>
        <td>This status indicates that the Pix was successfully sent.</td>
      </tr>
      <tr>
        <td><code>NAO_REALIZADO</code>  </td>
        <td>This status indicates that the Pix was not sent successfully.</td>
      </tr>
    </tbody>
  </table>
</div>                                                             

<br/>          

## REFUND

Below is a table containing the list of all possible statuses for a Refund.

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>EM_PROCESSAMENTO</code>  </td>
       <td>This status indicates that the refund request was successfully received and is in the queue waiting to start processing.</td>
      </tr>
      <tr>
        <td><code>DEVOLVIDO</code>  </td>
        <td>This status indicates that the amount was refunded successfully.</td>
      </tr>
      <tr>
        <td><code>NAO_REALIZADO</code>  </td>
        <td>This status indicates that the amount was not refunded successfully.</td>
      </tr>
    </tbody>
  </table>
</div>                                                                          

<br/>          

## RECONCILIATION EXTRACT

Below is a table containing the list of all possible statuses for a Reconciliation extract.

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>AGUARDANDO_PROCESSAMENTO</code>  </td>
        <td>This status indicates that the extract request was successfully received and is in the queue waiting to start processing.</td>
      </tr>
      <tr>
        <td><code>EM_PROCESSAMENTO</code>  </td>
        <td>This status indicates that the file generation has started and is in the data processing stage.</td>
      </tr>
      <tr>
        <td><code>CONCLUIDO</code>  </td>
        <td>This status indicates that a extract with the same parameters was previously requested, and a file with the returned <code>id</code> is now available for download.</td>
      </tr>
    </tbody>
  </table>
</div>                                                                                             

</div>