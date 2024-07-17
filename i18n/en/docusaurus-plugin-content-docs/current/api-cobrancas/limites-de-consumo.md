---
id: limites-de-consumo
title: Consumption limits
hide_title: true
sidebar_label: Consumption limits
---
<h1 className="titulo">Consumption Limits</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"

<div className="subtitulo">
This page contains information about the usage limits of the Billings Efí API, so that you can use our services in the best possible way.
</div>

<br/>
<br/>

## Consumption Limits

Consumption limits refer to the consumption of API routes (_endpoints_). These limits apply to each application individually, meaning that if you have an account with 2 applications, each will have its own independent limits, which are reset (zeroed) daily (every 24 hours).

It is important to remember that a warning is triggered when 80% of the limit consumption for an _endpoint_ is reached for the _email_ registered in your Efí account profile.

In cases where the maximum number of requests for an endpoint is reached, a blocking warning will be sent to the _email_ registered in your Efí account profile, and that _endpoint_ will only be released for use after automatic unblocking.

Below, we will describe all available _endpoints_ for consumption and their respective limits.


<br/>

## Transactions

| Endpoint (Base route)                                                   | Requisition limit |
| :--------------------------------------------------                    | :-------------------- |
| <b><HighlightPost>POST</HighlightPost> /v1/charge/one-step</b>                 | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/charge</b>                  | 15.000                |
| <b><HighlightGet>GET</HighlightGet> /v1/charge/<HighlightVar>:id</HighlightVar></b>                | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/metadata</b>      | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/billet</b>        | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/cancel</b>        | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/pay</b>           | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/billet/resend</b> | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/history</b>      | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/link</b>          | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/link</b>           | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/charge/<HighlightVar>:id</HighlightVar>/balance-sheet</b> | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/charge/<HighlightVar>:id</HighlightVar>/settle</b>         | 15.000                |
| <b><HighlightGet>GET</HighlightGet> /v1/installments</b>       | 15.000                |

<br/>

## Carnets

| Endpoint Base route                                        | Requisition limit |
| :---------------------------------------------------------- | :-------------------- |
| <b><HighlightPost>POST</HighlightPost> /v1/carnet</b>                         | 15.000                |
| <b><HighlightGet>GET</HighlightGet> /v1/carnet/<HighlightVar>:id</HighlightVar></b>                      | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/metadata</b>             | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/<HighlightVar>:parcel</HighlightVar></b>         | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/cancel</b>               | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/<HighlightVar>:parcel</HighlightVar>/cancel</b>  | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/carnet/<HighlightVar>:id</HighlightVar>/resend</b>               | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/<HighlightVar>:parcel</HighlightVar>/resend</b> | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/carnet/<HighlightVar>:id</HighlightVar>/history</b>              | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/parcel/ <HighlightVar>:parcel</HighlightVar>/settle</b>  | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/carnet/<HighlightVar>:id</HighlightVar>/settle</b>              | 15.000                |

<br/>

## Subscriptions

| Endpoint Base route                                | Requisition limit |
| :-------------------------------------------------- | :-------------------- |
| <b><HighlightPost>POST</HighlightPost> /v1/plan</b>                   | 15.000                |
| <b><HighlightGet>GET</HighlightGet> /v1/plans</b>                   | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/plan/<HighlightVar>:id</HighlightVar></b>                | 15.000                |
| <b><HighlightDelete>DELETE</HighlightDelete>/v1/plan/<HighlightVar>:id</HighlightVar></b>              | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/plan/<HighlightVar>:id</HighlightVar>/subscription/one-step</b>    | 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/plan/<HighlightVar>:id</HighlightVar>/subscription/one-step/link</b>| 15.000                |      |
| <b><HighlightPost>POST</HighlightPost> /v1/plan/<HighlightVar>:id</HighlightVar>/subscription</b>   | 15.000                |
| <b><HighlightGet>GET</HighlightGet> /v1/subscription/<HighlightVar>:id</HighlightVar></b>         | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/subscription/<HighlightVar>:id</HighlightVar>/cancel</b>  | 15.000                |
| <b><HighlightPut>PUT</HighlightPut> /v1/subscription/<HighlightVar>:id</HighlightVar>/metadata</b>| 15.000                |
| <b><HighlightPost>POST</HighlightPost> /v1/subscription/<HighlightVar>:id</HighlightVar>/pay</b>    | 15.000                |
| <b><HighlightPost>POST</HighlightPost>/v1/subscription/<HighlightVar>:id</HighlightVar>/history</b>| 15.000                |      |

<br/>

## Notifications

| Endpoint Base route                                        | Requisition limit |
| :---------------------------------------------------------- | :-------------------- |
| <b><HighlightGet>GET</HighlightGet> /v1/notification/<HighlightVar>:token</HighlightVar></b>                             | 30.000                |


</div>