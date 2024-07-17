---
id: glossario
title: Glossário
hide_title: true
sidebar_label: Glossário
---
<h1 className="titulo">Glossário</h1>
<div className="conteudo">


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Esta página tem o objetivo de alinhar a compreensão de termos relacionados à API Pix.
</div>

<br/>
<br/>

## location

Um location é a URL do tipo <a href="https://www.w3.org/TR/capability-urls/" target="_blank">URL de capacidade</a> que serve de **endereço para uma cobrança**. Em outras palavras, é através de um location que se torna possível resgatar as informações relacionadas a uma cobrança e, assim, realizar as movimentações.

## payload

Payload é o nome dado ao segundo fragmento do objeto JWS (JSON Web Signature) que contém um JSON com os dados referentes a uma cobrança.

## revisão

O campo "revisao" registra o número de alterações de uma cobrança. Uma cobrança nova sempre inicia com valor de revisão 0 (zero) e esse valor é incrementado uma unidade sempre que a cobrança sofrer alterações, exceto quando a alteração é o Location.

## txid

Cada transação Pix possui um **Identificador da Transação**, chamado <code>txid</code>, que no contexto de representação de uma cobrança, é único por CPF/CNPJ da pessoa usuária recebedora.. Um <code>txid</code> é uma <a href="https://pt.wikipedia.org/wiki/Alfanum%C3%A9rico" target="_blank"> string alfanumérica</a> com comprimentos mínimo de 26 e máximo de 35 caracteres. Um txid válido, portanto, deve obedecer à seguinte expressão regular (regex): <code>^[a-zA-Z0-9]{26,35}$</code>. Você pode validar strings txid sob a regex <a href="https://regex101.com/r/iZ08y4/1" target="_blank">aqui</a>.

## webhook

Nome da funcionalidade em que é possível cadastrar uma URL de callback para receber notificações sobre atualizações de transações que envolvem uma determinada chave do Dict.

## Ilustração do funcionamento das cobranças cobv após a data de vencimento

<Tabs className="tab"
  defaultValue="Exemplo_A"
  values={[
    { label: 'Exemplo A', value: 'Exemplo_A', },
    { label: 'Exemplo B', value: 'Exemplo_B', },
    { label: 'Exemplo C', value: 'Exemplo_C', },
    { label: 'Exemplo D', value: 'Exemplo_D', },
    { label: 'Exemplo E', value: 'Exemplo_E', },
    { label: 'Exemplo F', value: 'Exemplo_F', },
    { label: 'Exemplo G', value: 'Exemplo_G', },
  ]}>
<TabItem value="Exemplo_A">

```json
dataDeVencimento: 2020-10-20, terça-feira.
validadeAposVencimento: 4

Tenta-se pagar no dia 2020-10-20, terça: aceito. (#)(*)
Tenta-se pagar no dia 2020-10-21, quarta: aceito. (1)
Tenta-se pagar no dia 2020-10-22, quinta: aceito. (2)
Tenta-se pagar no dia 2020-10-23, sexta: aceito. (3)
Tenta-se pagar no dia 2020-10-24, sábado: aceito. 
Tenta-se pagar no dia 2020-10-25, domingo: aceito. (Feriado)
Tenta-se pagar no dia 2020-10-26, segunda: aceito. (4)
Tenta-se pagar no dia 2020-10-27, terça: negado.
```
</TabItem>
<TabItem value="Exemplo_B">

```json
dataDeVencimento: 2020-12-25, sexta-feira, feriado.
validadeAposVencimento: 0

Tenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)
Tenta-se pagar no dia 2020-12-26, sábado: aceito.
Tenta-se pagar no dia 2020-12-27, domingo: aceito.
Tenta-se pagar no dia 2020-12-28, segunda: aceito. (*)
Tenta-se pagar no dia 2020-12-29, terça: negado.
```
</TabItem>

<TabItem value="Exemplo_C">

```json
dataDeVencimento: 2020-12-25, sexta-feira, feriado.
validadeAposVencimento: 1

Tenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)
Tenta-se pagar no dia 2020-12-26, sábado: aceito.
Tenta-se pagar no dia 2020-12-27, domingo: aceito.
Tenta-se pagar no dia 2020-12-28, segunda: aceito. (*)
Tenta-se pagar no dia 2020-12-29, terça: aceito. (1)
Tenta-se pagar no dia 2020-12-30, quarta: negado.
```
</TabItem>

<TabItem value="Exemplo_D">

```json
dataDeVencimento: 2020-12-25, sexta-feira, feriado.
validadeAposVencimento: 3

Tenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)
Tenta-se pagar no dia 2020-12-26, sábado: aceito.
Tenta-se pagar no dia 2020-12-27, domingo: aceito.
Tenta-se pagar no dia 2020-12-28, segunda: aceito. (*)
Tenta-se pagar no dia 2020-12-29, terça: aceito. (1)
Tenta-se pagar no dia 2020-12-30, quarta: aceito. (2)
Tenta-se pagar no dia 2020-12-31, quinta: aceito. (3)
Tenta-se pagar no dia 2021-01-01, sexta: negado.
```
</TabItem>
<TabItem value="Exemplo_E">

```json
dataDeVencimento: 2020-12-25, sexta-feira, feriado.
validadeAposVencimento: 4

Tenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)
Tenta-se pagar no dia 2020-12-26, sábado: aceito.
Tenta-se pagar no dia 2020-12-27, domingo: aceito.
Tenta-se pagar no dia 2020-12-28, segunda: aceito. (*)
Tenta-se pagar no dia 2020-12-29, terça: aceito. (1)
Tenta-se pagar no dia 2020-12-30, quarta: aceito. (2)
Tenta-se pagar no dia 2020-12-31, quinta: aceito. (3)
Tenta-se pagar no dia 2021-01-01, sexta: aceito. (Feriado)
Tenta-se pagar no dia 2021-01-02, sábado: aceito.
Tenta-se pagar no dia 2021-01-03, domingo: aceito.
Tenta-se pagar no dia 2021-01-04, segunda: aceito. (4)
Tenta-se pagar no dia 2021-01-05, terça: negado.
```
</TabItem>
<TabItem value="Exemplo_F">

```json
dataDeVencimento: 2021-08-27, sexta-feira.
validadeAposVencimento: 5

Tenta-se pagar no dia 2020-08-27, sexta: aceito. (#)(*)
Tenta-se pagar no dia 2020-08-28, sábado: aceito. (1)
Tenta-se pagar no dia 2020-08-29, domingo: aceito. (2)
Tenta-se pagar no dia 2020-08-30, segunda: aceito. (3)
Tenta-se pagar no dia 2020-12-31, terça: aceito. (4)
Tenta-se pagar no dia 2020-12-01, quarta: aceito. (5)
Tenta-se pagar no dia 2020-12-02, quinta: negado.
```
</TabItem>

<TabItem value="Exemplo_G">

```json
dataDeVencimento: 2021-08-28, sábado.
validadeAposVencimento: 5

Tenta-se pagar no dia 2020-08-28, sábado: aceito. (#)
Tenta-se pagar no dia 2020-08-29, domingo: aceito. 
Tenta-se pagar no dia 2020-08-30, segunda: aceito. (*)
Tenta-se pagar no dia 2020-08-31, terça: aceito. (1)
Tenta-se pagar no dia 2020-09-01, quarta: aceito. (2)
Tenta-se pagar no dia 2020-09-02, quinta: aceito. (3)
Tenta-se pagar no dia 2020-09-03, sexta: aceito. (4)
Tenta-se pagar no dia 2020-09-04, sabado: aceito. 
Tenta-se pagar no dia 2020-09-05, domingo: aceito. 
Tenta-se pagar no dia 2020-09-06, segunda: aceito. (5)
```
</TabItem>


</Tabs>

<br/>

</div>