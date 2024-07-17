---
id: configuracoes-de-aplicacao
title: Configurações da aplicação
hide_title: true
sidebar_label: Configurações da aplicação
---
<h1 className="titulo">Configurações da aplicação</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Informações referentes as configurações da aplicação disponíveis na API Open Finance.
</div>

<br/>
<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>API Open Finance</b>
</div>
<p>Para utilizar a API Open Finance, é recomendado definir o atributo <em>"receberSemChave"</em>, da API Pix, como <b><em>true</em></b>, pois a configuração incorreta pode afetar as transações. Você pode encontrar o link para o endpoint <a href="/docs/api-pix/endpoints-exclusivos-efi#criarmodifica-configurações-da-conta" target="_blank">aqui</a>.</p>
</div>
<br/>

## Configurar URLs da aplicação

Esse endpoint é utilizado para criar ou modificar uma configuração na aplicação relacionada à API Open Finance.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/config</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.opb.config.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/open-finance/config-aplicacao/config_urls.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Configurações das URLs - mTLS', value: 'exemplo', },
    { label: 'Configurações das URLs - hmac', value: 'exemplo2', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
  // Exemplo configurando uma URL
{
    "redirectURL": "https://client.com/redirect/here",
    "webhookURL": "https://client.com/callback/here",
    "webhookSecurity": {
      "type": "mtls"
    },
    "processPayment": "async"
}
  ``` 
  </TabItem>
  <TabItem value="exemplo2">

  ```json
  // Exemplo configurando uma URL
{
    "redirectURL": "https://client.com/redirect/here",
    "webhookURL": "https://client.com/callback/here",
    "webhookSecurity": {
      "type": "hmac",
      "hash": "abc123def567ghi"
    },
    "processPayment": "async"
}
  ``` 
  </TabItem>
 
  </Tabs>

  <br/>  
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 201 (mTLS)', value: 'saida', },
      { label: '🟢 201 (hmac)', value: 'saida2', },
      { label: '🔴 400', value: '400', },
      {label: '🔴 422', value: '422', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "redirectURL": "https://client.com/redirect/here",
    "webhookURL": "https://client.com/callback/here",
    "webhookSecurity": {
      "type": "mtls"
    }
}
  ```
  </TabItem>

  <TabItem value="saida2">

  ```json
{
    "redirectURL": "https://client.com/redirect/here",
    "webhookURL": "https://client.com/callback/here",
    "webhookSecurity": {
      "type": "hmac",
      "hash": "abc123def567ghi"
    }
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  {
    "nome": "redirect_url_obrigatorio",
    "mensagem": "O parâmetro redirectURL é obrigatório"
  }

Ou

{
    "nome": "webhook_url_obrigatorio",
    "mensagem": "O parâmetro webhookURL é obrigatório"
}

Ou

{
    "nome": "webhook_url_mtls_obrigatorio",
    "mensagem": "O webhookURL precisa ter um mTLS válido"
}
  ```
  </TabItem>
  <TabItem value="422">

  ```json
{
    "nome": "conta_nao_encontrada",
    "mensagem": "A conta não foi encontrada"
}

Ou

{
    "nome": "redirect_url_invalido",
    "mensagem": "O redirectURL é inválido"
}

Ou

{
    "nome": "webhook_seguranca_invalido",
    "mensagem": "O campo webhookSecurity é inválido"
}

Ou

{
    "nome": "webhook_seguranca_hash_invalido",
    "mensagem": "O campo hash é inválido"
}

Ou

{
    "nome": "webhook_url_invalido",
    "mensagem": "webhookURL não acessível"
}

Ou

{
    "nome": "webhook_url_invalido",
    "mensagem": "Erro ao fazer handshake com mTLS no webhookURL"
}

Ou

{
    "nome": "process_payment_invalido",
    "mensagem": "O campo processPayment é inválido, permitido (async/sync)"
}
  ```
  </TabItem>
  <TabItem value="500">

  ```json
  {
    "nome": "erro_aplicacao",
    "mensagem": "Erro interno do servidor"
  }
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

## Retornar as configurações da aplicação

Esse endpoint é utilizado para retornar as configurações da aplicação relacionada a API Open Finance, não é necessário informar nenhum parâmetro.

<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/config</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.opb.config.read</code> 
          </div>
          <div className="right">
          </div>
      </div>
      <br/><br/>

  <b>Respostas</b>

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 404', value: '400', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "redirectURL": "https://client.com/redirect/here",
    "webhookURL": "https://client.com/callback/here",
    "webhookSecurity": {
      "type": "mtls"
    }
}
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
  {
    "nome": "configuracao_nao_encontrada",
    "mensagem": "Nenhuma configuração encontrada"
  }
  ```
 </TabItem>
  <TabItem value="500">

  ```json
  {
    "nome": "configuracao_nao_encontrada",
    "mensagem": "Nenhuma configuração encontrada"
  }
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>


</div>