---
id: limites-de-consumo
title: Limites de Consumo
hide_title: true
sidebar_label: Limites de Consumo
---
<h1 className="titulo">Limites de Consumo</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"

<div className="subtitulo">
Esta página contém as infromações sobre os limites de uso da API Cobranças Efí, para que você possa utilizar nossos serviços da melhor maneira possível.
</div>

<br/>
<br/>

## Limites de consumo
Os limites de consumo se referem ao consumo das rotas (_endpoints_) da API, tais limites se aplicam a cada aplicação individualmente, ou seja, caso você possua uma conta com 2 aplicações, cada uma terá seus limites independentes, sendo estes reiniciados (zerados) diariamente (intervalo de 24 horas).  

É importante lembrar que é disparado um aviso quando se atinge 80% de consumo do limite de um _endpoint_ para o _email_ cadastrado no perfil de sua conta Efí.  

Em casos onde se atinge o número máximo de requisições para um _endpoint_ um aviso de bloqueio será disparado para o _email_ cadastrado no perfil de sua conta Efí , e tal _endpoint_ só será liberado para uso após o desbloqueio automático.  

A seguir descreveremos todos os _endpoints_ disponíveis para consumo e seus respectivos limites.

<br/>

## Transações

| Endpoint (Rota base)                                                   | Limite de requisições |
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

## Carnês

| Endpoint (Rota base)                                        | Limite de requisições |
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

## Assinaturas

| Endpoint (Rota base)                                | Limite de requisições |
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

## Notificações

| Endpoint (Rota base)                                        | Limite de requisições |
| :---------------------------------------------------------- | :-------------------- |
| <b><HighlightGet>GET</HighlightGet> /v1/notification/<HighlightVar>:token</HighlightVar></b>                             | 30.000                |


</div>