---
id: status
title: Status dos Pagamentos
hide_title: true
sidebar_label: Status dos Pagamentos
---
<h1 className="titulo">Status dos Pagamentos</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<div className="subtitulo">
Esta página contém a relação de todos os possíveis status de um pagamento requisitado pela API Pagamento de Contas Efí.
</div>

<br/>
<br/>

## PAGAMENTO REQUISITADO

A seguir, confira a tabela com a relação de todos os possíveis status de um pagamento requisitado.

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Descrição</th>
      </tr>
      <tr>
        <td><code>EM_PROCESSAMENTO</code>  </td>
        <td>A solicitação de pagamento foi recebida e está sendo processada.</td>
      </tr>
      <tr>
        <td><code>AGENDADO</code>  </td>
        <td>O pagamento foi agendado para ser realizado na data solicitada.</td>
      </tr>
      <tr>
        <td><code>EXECUTADO</code>  </td>
        <td>O pagamento foi enviado com sucesso para a ser liquidado.</td>
      </tr>
       <tr>
        <td><code>LIQUIDADO</code>  </td>
        <td>O pagamento foi liquidado com sucesso.</td>
      </tr>
       <tr>
        <td><code>CANCELADO</code>  </td>
        <td>O pagamento foi cancelado pelo cliente e o valor estornado.</td>
      </tr>
       <tr>
        <td><code>NAO_REALIZADO</code>  </td>
        <td>O pagamento teve um erro e não foi enviado para liquidação ou foi estornado o valor.</td>
      </tr>
    </tbody>
  </table>
</div>                                                                                                                                      


</div>