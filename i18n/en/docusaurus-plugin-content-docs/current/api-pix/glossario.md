---
id: glossario
title: Glossary
hide_title: true
sidebar_label: Glossary
---
<h1 className="titulo">Glossary</h1>
<div className="conteudo">


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
This page is intended to align the understanding of terms related to the Pix API.
</div>

<br/>
<br/>

## location

A location is a URL of the <a href="https://www.w3.org/TR/capability-urls/" target="_blank">capability URL</a> type that serves as **address for a charge**. In other words, it is through a location that it is possible to retrieve information related to a charge and, thus, carry out the transactions.

## payload

Payload is the name given to the second fragment of the JWS object(JSON Web Signature) that contains a JSON with data related to a charge.

## revisão

The "revisao" field records the number of changes to a charge. A new charge always starts with revision value of 0 (zero),and this value is incremented one unit whenever the charge changes, except when the change is the Location.

## txid

Each Pix transaction has a **Transaction Identifier**, called <code>txid</code>, which in the context of representing a charge, is unique per CPF/CNPJ of the receiving user. A <code>txid</code> is an <a href="https://en.wikipedia.org/wiki/Alphanumeric" target="_blank">alphanumeric string</a> with a minimum length of 26 and a maximum of 35 characters. A valid txid therefore, must obey the following regular expression (regex): <code>^[a-zA-Z0-9]{26,35}$</code>. You can to validate txid strings under the regex <a href="https://regex101.com/r/iZ08y4/1" target="_blank">here</a>.

## webhook

Name of the functionality in which it is possible to register a callback URL to receive notifications about updates of transactions involving a certain Dict key.

## Illustration of how cobv charges work after the due date

<Tabs className="tab"
  defaultValue="Exemplo_A"
  values={[
    { label: 'Example A', value: 'Exemplo_A', },
    { label: 'Example B', value: 'Exemplo_B', },
    { label: 'Example C', value: 'Exemplo_C', },
    { label: 'Example D', value: 'Exemplo_D', },
    { label: 'Example E', value: 'Exemplo_E', },
    { label: 'Example F', value: 'Exemplo_F', },
    { label: 'Example G', value: 'Exemplo_G', },
  ]}>
<TabItem value="Exemplo_A">

```json
dueDate: 2020-10-20, Tuesday.
validityAfterDue: 4

Attempt to pay on 2020-10-20, Tuesday: accepted. (#)(*)
Attempt to pay on 2020-10-21, Wednesday: accepted. (1)
Attempt to pay on 2020-10-22, Thursday: accepted. (2)
Attempt to pay on 2020-10-23, Friday: accepted. (3)
Attempt to pay on 2020-10-24, Saturday: accepted.
Attempt to pay on 2020-10-25, Sunday: accepted. (Holiday)
Attempt to pay on 2020-10-26, Monday: accepted. (4)
Attempt to pay on 2020-10-27, Tuesday: denied.
```
</TabItem>
<TabItem value="Exemplo_B">

```json
dueDate: 2020-12-25, Friday, holiday.
validityAfterDue: 0

Attempt to pay on 2020-12-25, Friday: accepted. (#)(Holiday)
Attempt to pay on 2020-12-26, Saturday: accepted.
Attempt to pay on 2020-12-27, Sunday: accepted.
Attempt to pay on 2020-12-28, Monday: accepted. (*)
Attempt to pay on 2020-12-29, Tuesday: denied.
```
</TabItem>

<TabItem value="Exemplo_C">

```json
dueDate: 2020-12-25, Friday, holiday.
validityAfterDue: 1

Attempt to pay on 2020-12-25, Friday: accepted. (#)(Holiday)
Attempt to pay on 2020-12-26, Saturday: accepted.
Attempt to pay on 2020-12-27, Sunday: accepted.
Attempt to pay on 2020-12-28, Monday: accepted. (*)
Attempt to pay on 2020-12-29, Tuesday: accepted. (1)
Attempt to pay on 2020-12-30, Wednesday: denied.
```
</TabItem>

<TabItem value="Exemplo_D">

```json
dueDate: 2020-12-25, Friday, holiday.
validityAfterDue: 3

Attempt to pay on 2020-12-25, Friday: accepted. (#)(Holiday)
Attempt to pay on 2020-12-26, Saturday: accepted.
Attempt to pay on 2020-12-27, Sunday: accepted.
Attempt to pay on 2020-12-28, Monday: accepted. (*)
Attempt to pay on 2020-12-29, Tuesday: accepted. (1)
Attempt to pay on 2020-12-30, Wednesday: accepted. (2)
Attempt to pay on 2020-12-31, Thursday: accepted. (3)
Attempt to pay on 2021-01-01, Friday: denied.
```
</TabItem>
<TabItem value="Exemplo_E">

```json
dueDate: 2020-12-25, Friday, holiday.
validityAfterDue: 4

Attempt to pay on 2020-12-25, Friday: accepted. (#)(Holiday)
Attempt to pay on 2020-12-26, Saturday: accepted.
Attempt to pay on 2020-12-27, Sunday: accepted.
Attempt to pay on 2020-12-28, Monday: accepted. (*)
Attempt to pay on 2020-12-29, Tuesday: accepted. (1)
Attempt to pay on 2020-12-30, Wednesday: accepted. (2)
Attempt to pay on 2020-12-31, Thursday: accepted. (3)
Attempt to pay on 2021-01-01, Friday: accepted. (Holiday)
Attempt to pay on 2021-01-02, Saturday: accepted.
Attempt to pay on 2021-01-03, Sunday: accepted.
Attempt to pay on 2021-01-04, Monday: accepted. (4)
Attempt to pay on 2021-01-05, Tuesday: denied.
```
</TabItem>
<TabItem value="Exemplo_F">

```json
dueDate: 2021-08-27, Friday.
validityAfterDue: 5

Attempt to pay on 2020-08-27, Friday: accepted. (#)(*)
Attempt to pay on 2020-08-28, Saturday: accepted. (1)
Attempt to pay on 2020-08-29, Sunday: accepted. (2)
Attempt to pay on 2020-08-30, Monday: accepted. (3)
Attempt to pay on 2020-12-31, Tuesday: accepted. (4)
Attempt to pay on 2020-12-01, Wednesday: accepted. (5)
Attempt to pay on 2020-12-02, Thursday: denied.
```
</TabItem>

<TabItem value="Exemplo_G">

```json
dueDate: 2021-08-28, Saturday.
validityAfterDue: 5

Attempt to pay on 2020-08-28, Saturday: accepted. (#)
Attempt to pay on 2020-08-29, Sunday: accepted.
Attempt to pay on 2020-08-30, Monday: accepted. (*)
Attempt to pay on 2020-08-31, Tuesday: accepted. (1)
Attempt to pay on 2020-09-01, Wednesday: accepted. (2)
Attempt to pay on 2020-09-02, Thursday: accepted. (3)
Attempt to pay on 2020-09-03, Friday: accepted. (4)
Attempt to pay on 2020-09-04, Saturday: accepted.
Attempt to pay on 2020-09-05, Sunday: accepted.
Attempt to pay on 2020-09-06, Monday: accepted. (5)
```
</TabItem>


</Tabs>

<br/>

</div>