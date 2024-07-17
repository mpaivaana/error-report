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
This page contains the list of all possible transaction statuses of the Billings Efí API.
</div>

<br/>
<br/>


## TRANSACTIONS (BANK SLIP AND CREDIT CARD)

Below is a table containing the list of all possible statuses of a transaction:


<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>new</code></td>
        <td>Charge generated, awaiting payment method selection.</td>
      </tr>
      <tr>
        <td><code>waiting</code></td>
        <td>Payment method selected, awaiting payment confirmation.</td>
      </tr>
      <tr>
        <td><code>identified</code></td>
        <td>Payment identified. Indicates that the payment was made before the money was credited.</td>
      </tr>
      <tr>
        <td><code>approved</code></td>
        <td>Payment approved. Indicates that the payment was approved by the card operator but has not yet been credited.</td>
      </tr>
      <tr>
        <td><code>paid</code></td>
        <td>Payment confirmed.</td>
      </tr>
      <tr>
        <td><code>unpaid</code></td>
        <td>Unable to confirm the payment of the charge.</td>
      </tr>
      <tr>
        <td><code>refunded</code></td>
        <td>Payment refunded by the merchant or the intermediary Efí.</td>
      </tr>
      <tr>
        <td><code>contested</code></td>
        <td>Payment in dispute process.</td>
      </tr>
      <tr>
        <td><code>canceled</code></td>
        <td>Charge canceled by the seller or the payer.</td>
      </tr>
      <tr>
        <td><code>settled</code></td>
        <td>Charge was manually confirmed.</td>
      </tr>
      <tr>
        <td><code>link</code></td>
        <td>Status applicable to Payment Link. This status indicates that it is a charge associated with a payment link.</td>
      </tr>
      <tr>
        <td><code>expired</code></td>
        <td>Status applicable to Payment Link. A payment link will receive this status when it reaches the expiration date defined in the <code>expire_at</code> field when consuming the <code>/charge/:id/link</code> endpoint.</td>
      </tr>
    </tbody>
  </table>
</div>
                                                                                                                            

<br/>          

## SUBSCRIPTIONS

Below is a table containing the list of all possible statuses of a subscription:

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>new</code></td>
        <td>Subscription created, but no charge has been paid.</td>
      </tr>
      <tr>
        <td><code>active</code></td>
        <td>Active subscription. All charges are being generated.</td>
      </tr>
      <tr>
        <td><code>new_charge</code></td>
        <td>Active subscription generating new transactions. The term "new_charge" appears whenever a new subscription charge is created.</td>
      </tr>
      <tr>
        <td><code>canceled</code></td>
        <td>Subscription was canceled by the seller or the payer.</td>
      </tr>
      <tr>
        <td><code>expired</code></td>
        <td>Expired subscription. All charges configured for the subscription have been issued.</td>
      </tr>
    </tbody>
  </table>
</div>



<br/>          

## CARNETS

Below is a table containing the list of all possible statuses of a payment booklet:

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>up_to_date</code></td>
        <td>Booklet is up to date, there are no overdue installments. When the booklet is created, it also receives this <code>up_to_date</code> status.</td>
      </tr>
      <tr>
        <td><code>unpaid</code></td>
        <td>Booklet is overdue. If we identify the overdue status of at least one installment, the booklet status is changed to <code>unpaid</code>.</td>
      </tr>
      <tr>
        <td><code>finished</code></td>
        <td>Booklet is finished, meaning all installments have been resolved and have a final status. From this moment on, the booklet status never changes.</td>
      </tr>
    </tbody>
  </table>
</div>                                                                                                

<br/>


<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Resolved Charges</b>
</div>
<p>By <i>resolved charge</i>, it is understood to be any charge that has reached a final status. It no longer changes from this status except to another final status. These are:</p>
<p>
<li><b>paid</b></li>
<li><b>contested</b></li>
<li><b>refunded</b></li>
<li><b>settled</b></li>
<li><b>canceled</b></li></p>
</div>


</div>