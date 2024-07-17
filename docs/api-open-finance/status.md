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
Informações referentes a todos os possíveis status de um pagamento iniciado pela API Open Finance Efí.
</div>
 
<br/>
<br/>

## PAGAMENTO INICIADO

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Descrição</th>
      </tr>
      <tr>
        <td><code>pendente</code>  </td>
        <td>A solicitação de pagamento foi recebida e está pendente.</td>
      </tr>
      <tr>
        <td><code>agendado</code>  </td>
        <td>O pagamento foi agendado.</td>
      </tr>
      <tr>
        <td><code>rejeitado</code>  </td>
        <td>O pagamento foi rejeitado.</td>
      </tr>
      <tr>
        <td><code>aceito</code>  </td>
        <td>O pagamento foi aceito com sucesso.</td>
      </tr>
       <tr>
        <td><code>cancelado</code>  </td>
        <td>O pagamento foi cancelado (Status para pagamento agendado).</td>
      </tr>
       <tr>
        <td><code>expirado</code>  </td>
        <td>O link de redirect foi gerado, mas não foi utilizado. </td>
      </tr>
    </tbody>
  </table>
</div>                                                                                                                                      


</div>