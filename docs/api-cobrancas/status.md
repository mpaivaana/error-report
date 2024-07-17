---
id: status
title: Status das Transações
hide_title: true
sidebar_label: Status das Transações
---
<h1 className="titulo">Status das Transações</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<div className="subtitulo">
Esta página apresenta a lista de todos os possíveis status das transações da API Cobranças Efí.
</div>

<br/>
<br/>

O fluxo de Transações da Efí funciona da seguinte forma:

<div className="figure"><img src="/img/transacao.png" alt="banner"/><p>Fluxo de transações Efí- API</p></div>

<br/>

## TRANSAÇÕES (BOLETO BANCÁRIO E CARTÃO DE CRÉDITO)

A seguir, confira a tabela contendo a relação de todos os possíveis status de uma transação:

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Descrição</th>
      </tr>
      <tr>
        <td><code>new</code>  </td>
        <td>Cobrança gerada, aguardando definição da forma de pagamento. O termo "new" equivale a "novo".</td>
      </tr>
      <tr>
        <td><code>waiting</code>  </td>
        <td>Forma de pagamento selecionada, aguardando a confirmação do pagamento. O termo "waiting" equivale a "aguardando".</td>
      </tr>
      <tr>
        <td><code>identified</code>  </td>
        <td>Pagamento identificado. O termo "identified" equivale a "identificado". Indica que o pagamento foi efetuado antes do dinheiro ser creditado.</td>
      </tr>
      <tr>
        <td><code>approved</code>  </td>
        <td>Pagamento aprovado. O termo "approved" equivale a "aprovado". Indica que o pagamento foi aprovado pela operadora do cartão mas ainda não foi creditado.</td>
      </tr>
       <tr>
        <td><code>paid</code>  </td>
        <td>Pagamento confirmado. O termo "paid" equivale a "pago".</td>
      </tr>
       <tr>
        <td><code>unpaid</code>  </td>
        <td>Não foi possível confirmar o pagamento da cobrança. O termo "unpaid" equivale a "não pago".</td>
      </tr>
       <tr>
        <td><code>refunded</code>  </td>
        <td>Pagamento devolvido pelo lojista ou pelo intermediador Efí. O termo "refunded" equivale a "devolvido".</td>
      </tr>
       <tr>
        <td><code>contested</code>  </td>
        <td> Pagamento em processo de contestação. O termo "contested" equivale a "contestado".</td>
      </tr>
       <tr>
        <td><code>canceled</code>  </td>
        <td>Cobrança cancelada pelo vendedor ou pelo pagador. O termo "canceled" equivale a "cancelado".</td>
      </tr>
       <tr>
        <td><code>settled</code>  </td>
        <td>Cobrança foi confirmada manualmente. O termo "settled" equivale a "marcar como pago".</td>
      </tr>
       <tr>
        <td><code>link</code>  </td>
        <td>Status aplicável a Link de Pagamento. Este status indica que trata-se de uma cobrança que está associada a um link de pagamento. O termo "link" equivale a "link". </td>
      </tr>
       <tr>
        <td><code>expired</code>  </td>
        <td>Status aplicável a Link de Pagamento. Um link de pagamento receberá este status ao atingir a data de vencimento definida no campo <code>expire_at</code> ao consumir o endpoint <code>/charge/:id/link</code>. O termo "expired" equivale a "expirado".</td>
      </tr>
    </tbody>
  </table>
</div>                                                                                                                                      

<br/>          

## ASSINATURAS

A seguir, confira a tabela contendo a relação de todos os possíveis status de uma assinatura:

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Descrição</th>
      </tr>
      <tr>
        <td><code>new</code>  </td>
        <td>Assinatura criada, porém nenhuma cobrança foi paga. O termo "new" equivale a "nova". </td>
      </tr>
      <tr>
        <td><code>active</code>  </td>
        <td>Assinatura ativa. Todas as cobranças estão sendo geradas. O termo "active" equivale a "ativa". </td>
      </tr>
      <tr>
        <td><code>new_charge</code>  </td>
        <td>Assinatura ativa e gerando novas transações. O termo "new_charge" aparece sempre que uma nova cobranças da assinatura é criada.</td>
      </tr>
       <tr>
        <td><code>canceled</code>  </td>
        <td>Assinatura foi cancelada pelo vendedor ou pelo pagador. O termo "canceled" equivale a "cancelada".</td>
      </tr>
       <tr>
        <td><code>expired</code>  </td>
        <td>Assinatura expirada. Todas as cobranças configuradas para a assinatura já foram emitidas. O termo "expired" equivale a "expirada".</td>
      </tr>
    </tbody>
  </table>
</div>


<br/>          

## CARNÊS

A seguir, confira a tabela contendo a relação de todos os possíveis status de um carnê:

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Descrição</th>
      </tr>
      <tr>
        <td><code>up_to_date</code>  </td>
        <td>Carnê encontra-se em dia, não há nenhuma parcela inadimplente. Assim que o carnê é criado, ele também recebe este status <code>up_to_date</code>. O termo "up_to_date" equivale a "em dia".</td>
      </tr>
      <tr>
        <td><code>unpaid</code>  </td>
        <td>Carnê encontra-se inadimplente. Se identificarmos a inadimplência de pelo menos uma parcela, o status do carnê é alterado para <code>unpaid</code>. O termo "unpaid" equivale a "não pago".</td>
      </tr>
      <tr>
        <td><code>finished</code>  </td>
        <td>Carnê está finalizado, ou seja, todas as parcelas foram resolvidas e possuem um status final. A partir desse momento, o status do carnê nunca mais muda. O termo "finished" equivale a "finalizado".</td>
      </tr>
    </tbody>
  </table>
</div>                                                                                                

<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/info-circle-blue.svg"/> <b>Cobranças resolvidas</b>
</div>
<p>Por <i>cobrança resolvida</i>, entende-se que é toda cobrança que atingiu um status final. Ela não sai mais desse status a não ser para outro status também final. São eles:</p>
<p>
<li><b>paid</b></li>
<li><b>contested</b></li>
<li><b>refunded</b></li>
<li><b>settled</b></li>
<li><b>canceled</b></li></p>
</div>


</div>