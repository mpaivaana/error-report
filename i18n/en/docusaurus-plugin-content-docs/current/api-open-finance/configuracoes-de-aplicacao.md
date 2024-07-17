---
id: configuracoes-de-aplicacao
title: Application Settings
hide_title: true
sidebar_label: Application Settings
---
<h1 className="titulo">Application Settings</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Information regarding application settings available in the Open Finance API.
</div>

<br/>
<br/>

<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Open Finance API</b>
</div>
<p>To use the Open Finance API, it is recommended to set the <em>"receberSemChave"</em> attribute of the Pix API to <b><em>true</em></b>, as incorrect configuration can affect transactions. You can find the link to the endpoint <a href="/en/docs/api-pix/endpoints-exclusivos-efi#createmodify-account-settings" target="_blank">here</a>.</p>
</div>
<br/>

## Configure Application URLs

This endpoint is used to create or modify a configuration in the application related to the Open Finance API.

<!-- Método PUT -->
<div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v1/config</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.opb.config.write</code>  
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/open-finance/config-aplicacao/config_urls.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'URL settings - mTLS', value: 'exemplo', },
    { label: 'URL settings - hmac', value: 'exemplo2', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
  // Example configuring a URL
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
  // Example configuring a URL
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
        
  <b>Responses</b>

  <br/> 

  The responses below represent Success(201) and consumption failures/errors.
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

Or

{
    "nome": "webhook_url_obrigatorio",
    "mensagem": "O parâmetro webhookURL é obrigatório"
}

Or

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

Or

{
    "nome": "redirect_url_invalido",
    "mensagem": "O redirectURL é inválido"
}

Or

{
    "nome": "webhook_seguranca_invalido",
    "mensagem": "O campo webhookSecurity é inválido"
}

Or

{
    "nome": "webhook_seguranca_hash_invalido",
    "mensagem": "O campo hash é inválido"
}

Or

{
    "nome": "webhook_url_invalido",
    "mensagem": "webhookURL não acessível"
}

Or

{
    "nome": "webhook_url_invalido",
    "mensagem": "Erro ao fazer handshake com mTLS no webhookURL"
}

Or

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

## Get Application Settings

This endpoint is used to retrieve application settings related to the Open Finance API, no parameters need to be provided.

<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/config</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.opb.config.read</code>
          </div>
          <div className="right">
          </div>
      </div>
      <br/><br/>

  <b>Responses</b>

  The responses below represent Success(200) and consumption failures/errors.
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