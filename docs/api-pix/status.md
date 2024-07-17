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
Esta página contém a relação de todos os possíveis status das transações da API Pix Efí.
</div>

<br/>
<br/>

## COBRANÇA PIX

A seguir, confira a tabela contendo a relação de todos os possíveis status de uma Cobrança Pix.

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Descrição</th>
      </tr>
      <tr>
        <td><code>ATIVA</code>  </td>
        <td>Esse status indica que a cobrança foi gerada com sucesso e que está apta para pagamento.</td>
      </tr>
      <tr>
        <td><code>CONCLUIDA</code>  </td>
        <td>Esse status indica que a cobrança foi gerada com sucesso e está paga.</td>
      </tr>
      <tr>
        <td><code>REMOVIDA_PELO_USUARIO_RECEBEDOR</code>  </td>
        <td>Esse status indica que a cobrança foi gerada com sucesso e foi removida pelo usuário recebedor.</td>
      </tr>
      <tr>
        <td><code>REMOVIDA_PELO_PSP</code>  </td>
        <td>Esse status indica que a cobrança foi gerada com sucesso e foi removida pelo PSP.</td>
      </tr>
    </tbody>
  </table>
</div>

<br/>          

## ENVIO DE PIX

A seguir, tabela contendo a relação de todos os possíveis status de um Envio de Pix.

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Descrição</th>
      </tr>
      <tr>
        <td><code>EM_PROCESSAMENTO</code>  </td>
        <td>Esse status indica que a solicitação de Envio de Pix foi recebida com sucesso e está na fila aguardando para iniciar o processamento.</td>
      </tr>
      <tr>
        <td><code>REALIZADO</code>  </td>
        <td>Esse status indica que o Pix foi enviado com sucesso.</td>
      </tr>
      <tr>
        <td><code>NAO_REALIZADO</code>  </td>
        <td>Esse status indica que o Pix não foi enviado com sucesso.  </td>
      </tr>
    </tbody>
  </table>
</div>                                                             

<br/>          

## DEVOLUÇÕES

A seguir, tabela contendo a relação de todos os possíveis status de uma Devolução.

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Descrição</th>
      </tr>
      <tr>
        <td><code>EM_PROCESSAMENTO</code>  </td>
        <td>Esse status indica que a solicitação de devolução foi recebida com sucesso e está na fila aguardando para iniciar o processamento.</td>
      </tr>
      <tr>
        <td><code>DEVOLVIDO</code>  </td>
        <td>Esse status indica que o valor foi devolvido com sucesso.</td>
      </tr>
      <tr>
        <td><code>NAO_REALIZADO</code>  </td>
        <td>Esse status indica que o valor não foi devolvido com sucesso.</td>
      </tr>
    </tbody>
  </table>
</div>                                                                          

<br/>          

## EXTRATO DE CONCILIAÇÃO

A seguir, tabela contendo a relação de todos os possíveis status do Extrato de Conciliação

<div className="table-status">
  <table>
    <tbody>
      <tr>
        <th>Status</th>
        <th>Descrição</th>
      </tr>
      <tr>
        <td><code>AGUARDANDO_PROCESSAMENTO</code>  </td>
        <td>Esse status indica que a solicitação de extrato foi recebida com sucesso e está na fila aguardando para iniciar o processamento.</td>
      </tr>
      <tr>
        <td><code>EM_PROCESSAMENTO</code>  </td>
        <td>Esse status indica que a geração do arquivo foi iniciada e está em etapa de processamento dos dados.</td>
      </tr>
      <tr>
        <td><code>CONCLUIDO</code>  </td>
        <td>Esse status indica que um extrato com os mesmos parâmetros foi solicitado anteriormente e um arquivo com o <code>id</code> retornado já se encontra passível para download. </td>
      </tr>
    </tbody>
  </table>
</div>                                                                                             

</div>