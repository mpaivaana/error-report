---
id: cadastro-simplificado
title: Simplified Registration
hide_title: true
sidebar_label: Simplified Registration
---
<h1 className="titulo">Simplified Registration</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
The following set of endpoints is intended to handle the registration of a simplified account
</div>

<br/>
<br/>

## Request to open a simplified account.

In this step, you can request the opening of a simplified account for integration. Just provide the end customer's data. If the data is correct, the customer will receive a link to authorize integration with their Efí account.

<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Creation of account/application</b>
</div>
<p>If the end customer already has an account with Efí, they will have two options:</p>
<p>
<li>Create an application in the current account, where you will have access to the credentials and can define the scopes;</li>
<li>Create a secondary account for the end customer with the settings/access defined in your request.</li>
</p>
</div>

<br/>
<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Denial of account opening</b>
</div>
<p>If your customer declines the account opening process, you will need to wait 2 calendar days before starting a new process.</p>
</div>

<br/>
<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Account modalities</b>
</div>
<p>If the account generated for the customer is for an natural person, without a linked CNPJ, it will be allocated in the Efí Pro modality. In cases where the created account has a linked CNPJ, it will automatically be classified as Efí Empresas.</p>
</div>

<br/>
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/conta-simplificada</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.registration.write</code>
          </div>
           <div className="right">
          <Modal filename="/markdown/i18n/abertura_conta/cadastro/Solicitar_abertura_conta.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Request</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Individual end customer', value: 'exemplo1', },
    { label: 'Corporate end customer', value: 'exemplo2', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "clienteFinal": {
      "cpf": "12345678900",
      "nomeCompleto": "Nome Exemplo",
      "dataNascimento": "13/08/2000",
      "nomeMae": "Exemplo de nome da mãe",
      "celular": "31987654321",
      "email": "emaildeexemplo@sejaefi.com.br",
      "endereco": {
        "cep": "35400000",
        "estado": "MG",
        "cidade": "Ouro Preto",
        "bairro": "Bairro exemplo",
        "logradouro": "Exemplo do nome da rua",
        "numero": "777",
        "complemento": "apto 101"
      }
    },
    "meioDeNotificacao": [
      "sms",
      "whatsapp"
    ],
    "escoposIntegrados": [
      "cob.write",
      "cob.read",
      "pix.write",
      "pix.read",
      "pix.send",
      "webhook.write",
      "webhook.read",
      "payloadlocation.write",
      "payloadlocation.read",
      "gn.pix.send.read",
      "gn.pix.evp.write",
      "gn.pix.evp.read",
      "gn.balance.read",
      "gn.settings.write",
      "gn.settings.read"
    ]
}
  ``` 
  </TabItem>
  <TabItem value="exemplo2">

  ```json
{
    "clienteFinal": {
      "cpf": "12345678900",
      "nomeCompleto": "Nome Exemplo",
      "dataNascimento": "13/08/2000",
      "nomeMae": "Exemplo de nome da mãe",
      "celular": "31987654321",
      "email": "emaildeexemplo@sejaefi.com.br",
      "cnpj": "12345678901000",
      "razaoSocial": "Ongan Comércio LTDA",
      "endereco": {
        "cep": "35400000",
        "estado": "MG",
        "cidade": "Ouro Preto",
        "bairro": "Bairro exemplo",
        "logradouro": "Exemplo do nome da rua",
        "numero": "777",
        "complemento": "apto 101"
      }
    },
    "meioDeNotificacao": [
      "whatsapp"
   ],
    "escoposIntegrados": [
      "cob.write",
      "cob.read",
      "pix.write",
      "pix.read",
      "pix.send",
      "webhook.write",
      "webhook.read",
      "payloadlocation.write",
      "payloadlocation.read",
      "gn.pix.send.read",
      "gn.pix.evp.write",
      "gn.pix.evp.read",
      "gn.balance.read",
      "gn.settings.write",
      "gn.settings.read"
    ]
}
  ```
  </TabItem>
  </Tabs>
  <br/>   
        
  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: '400', },
      {label: '🔴 401', value: '401', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 409', value: '409', },
      {label: '🔴 412', value: '412', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "contaSimplificada": {
      "identificador": "92ccd29b-54c9-49fc-b8e8-717a3b373c5e"
    }
  }
  ```
  </TabItem>
  <TabItem value="400">

  ```json
Invalid CPF
{
    "nome": "cpf_invalido",
    "mensagem": "Este CPF se encontra restrito na Efí."
}

Or

Invalid full name
{
    "nome": "nome_completo_invalido",
    "mensagem": "O nome completo não corresponde ao CPF do cliente final."
}

Or

Minority

{
    "nome": "menoridade",
    "mensagem": "O cliente final é menor de idade."
}

Or

Invalid date of birth
{
    "nome": "data_nascimento_invalida",
    "mensagem": "A data de nascimento não corresponde ao CPF do cliente final."
}

Or

Invalid mother's name
{
    "nome": "nome_mae_invalido",
    "mensagem": "O nome da mãe não corresponde ao CPF do cliente final."
}

Or

Invalid cell phone
{
    "nome": "celular_invalido",
    "mensagem": "O celular é inválido."
}

Or

Non-similar cell phone
{
    "nome": "celular_nao_similar",
    "mensagem": "O Celular informado não corresponde ao Celular cadastrado na Conta Efí."
}

Or

Invalid email
{
    "nome": "email_invalido",
    "mensagem": "O email é inválido."
}

Or

Invalid CEP
{
    "nome": "cep_invalido",
    "mensagem": "O CEP é inválido."
}

Or

Invalid CNPJ
{
    "nome": "cnpj_invalido",
    "mensagem": "O CNPJ é inválido."
}

Or

Invalid company name
{
    "nome": "razao_social_invalida",
    "mensagem": "A razão social não corresponde ao CNPJ do cliente final."
}

Or

Invalid full name
{
    "nome": "nomeCompleto_invalido",
    "mensagem": "ClienteFinal deve ter a propriedade obrigatória nomeCompleto."
}

Or

Inactive CPF
{
    "nome": "cpf_inativo",
    "mensagem": "O CPF está em situação cadastral inativa."
}

Or

Inactive CNPJ
{
    "nome": "cnpj_inativo",
    "mensagem": "O CNPJ está em situação cadastral inativa."
}
  ```
  </TabItem>
    <TabItem value="401">

  ```json
This error occurs in the following situations:

* Certificate or credentials do not exist;
* Certificate or credentials are disabled;
* Certificate and credentials are not linked to the same Efí account;
* Integrator does not have permission for the required service scope to consume this endpoint.
  ```
  </TabItem>
    <TabItem value="403">

  ```json
{
    "nome": "escopo_invalido",
    "mensagem": "Não é possível solicitar escopos não configurados na aplicação do integrador."
}
```
  </TabItem>
    <TabItem value="409">

  ```json
Registered cell phone
{
    "nome": "celular_cadastrado",
    "mensagem": "O celular é utilizado por outro cliente."
}

Or

Registered email

{
    "nome": "email_cadastrado",
    "mensagem": "O email é utilizado por outro cliente."
}

Or

Duplicate request
{
    "nome": "solicitacao_duplicada",
    "mensagem": "Já existe uma solicitação de abertura de conta aberta para este cliente final."
}
  ```
  </TabItem>
    <TabItem value="412">

  ```json
Precondition Failed. This error occurs in the following situations:

* The integrator must have at least one Webhook registered.
{
    "nome": "webhook_nao_cadastrado",
    "mensagem": "Sua conta não possui webhook cadastrado na API de Cadastro."
}
  ```
  </TabItem>
    <TabItem value="500">

  ```json
Application error

{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro na aplicação."
}

Or

{
    "nome": "cpf_restrito",
    "mensagem": "Este CPF se encontra restrito na Efí."
}

Or

{
    "nome": "cpf_nao_permitido",
    "mensagem": "Este CPF se encontra bloqueado pela Efí."
}

Or

{
    "nome": "cnpj_nao_permitido",
    "mensagem": "Este CNPJ se encontra bloqueado pela Efí."
}

  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>


  ## Get credentials from a simplified account.
Retrieves the ``Client_Id`` and ``Client_Secret`` credentials to integrate into a simplified account.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/conta-simplificada/<HighlightVar>:idContaSimplificada</HighlightVar>/credenciais</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.registration.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/abertura_conta/cadastro/Recuperar_credenciais.md" />
          </div>
      </div>
      <br/><br/>

  <b>Responses</b>

  <br/> 

  The responses below represent Success(200) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      {label: '🔴 401', value: '401', },
      { label: '🔴 404', value: '404', },
      {label: '🔴 412', value: '412', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
  "clientId": "92ccd29b-54c9-49fc-b8e8-717a3b373c5e",
  "clientSecret": "b2e9dcca-c46d-4b9b-89d2-c625949bea40",
  "conta": {
    "numero": "10000",
    "payeeCode": "6edo0034843gfr5trtPtgt343"
  },
  "escopos": [
    "pix.send",
    "cob.write",
    "webhook.read"
  ],
  "ativo": true
}
  ``` 
  </TabItem>
  <TabItem value="401">

  ```json
 This error occurs in the following situations:

* Certificate or credentials do not exist;
* Certificate or credentials are disabled;
* Certificate and credentials are not linked to the same Efí account;
* Integrator does not have permission for the required service scope to consume this endpoint.
  ```
 </TabItem>

  <TabItem value="404">

  ```json
{
    "nome": "conta_nao_encontrada",
    "mensagem": "Conta simplificada não encontrada."
}
  ```
 </TabItem>
   <TabItem value="412">

  ```json
{
    "nome": "conta_nao_aprovada_ou_recusada",
    "mensagem": "O cliente final não aprovou ou recusou a conta simplificada."
}

Or

{
    "nome": "conta_em_processamento",
    "mensagem": "A Efí está processando a conta simplificada."
}
  ```
 </TabItem>
   <TabItem value="500">

  ```json
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro na aplicação."
}

  ```
 </TabItem>
  </Tabs>

</details>
</div> 

<br/>

## Create certificate for a simplified account.
Creates the certificate to integrate with a simplified account.

  <div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/conta-simplificada/<HighlightVar>:idContaSimplificada</HighlightVar>/certificado</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requires authorization for the scope: <code>gn.registration.read</code>
          </div>
          <div className="right">
          <Modal filename="/markdown/i18n/abertura_conta/cadastro/Recuperar_certificado.md" />
          </div>
      </div>
      <br/><br/>

  <b>Responses</b>

  <br/> 

  The responses below represent Success(201) and consumption failures/errors.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 201', value: 'saida', },
      {label: '🔴 401', value: '401', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 404', value: '404', },
      {label: '🔴 412', value: '412', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  "MIIKYQIBAzCCCicGCSqGSIb3DQEHAaCCChgEggoUMIIKEDCCBMcGCSqGSIb3DQEHAaCCBLgEggS0MIIEsDCCBKwGCyqGSIb3DQEMCgEDoIIEdDCCBHAGCiqGSIb3DQEJFgGgggRgBIIEXDCCBFgwggJAoAMCAQICEJ4WQNAm+z3pWRYsltA2KeAwDQYJKoZIhvcNAQELBQAwgbIxCzAJBgNVBAYTAkJSMRUwEwYDVQQIDAxNaW5hcyBHZXJhaXMxLDAqBgNVBAoMI0VmaSBTLkEuIC0gSW5zdGl0dWljYW8gZGUgUGFnYW1lbnRvMRcwFQYDVQQLDA5JbmZyYWVzdHJ1dHVyYTEgMB4GA1UEAwwXYXBpcy50ZXN0ZWVmaXBheS5jb20uYnIxIzAhBgkqhkiG9w0BCQEWFGluZnJhQHNlamFlZmkuY29tLmJyMB4XDTIzMDkxMjEzNTE1N1oXDTI2MDkxMjEzNTE1N1owHTEOMAwGA1UEAxMFMzA4MjYxCzAJBgNVBAYTAkJSMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvFqf7tNldp0nTEZyxDRTpINayIbD7SIsVuwKgJTFkgzKzSo/CcFGHlamRGWxxpqKoiFZ/dToxD5YQyKpLW+AHSwCMIpRlqyipsr67dXEiVimulpvvmCRpJcnC8MQLWvBOIuomh4Ig3185BxBLwIR79TV1hO7SzeDUvWBZBXbFnadEkXhHuFQV0lwsrFaY2/4K/c3bFkYiWVf3DHYuNeu7fZWXm1kAI6Bx5Tks5oBlVQl2za7X0LnTtoFgZI6/xS0MGbSosW7wk11uqJFSepmo/0HmAZCPlOX4zLz4y1Fs8uKRJpK2kFvP6IN23I5dDSP7yIbCiTayA..."
  ``` 
  </TabItem>
  <TabItem value="401">

  ```json
 This error occurs in the following situations:

* Certificate or credentials do not exist;
* Certificate or credentials are disabled;
* Certificate and credentials are not linked to the same Efí account;
* Integrator does not have permission for the required service scope to consume this endpoint.
  ```
 </TabItem>
     <TabItem value="403">

  ```json
{
    "nome": "quantidade_limite_de_certificados",
    "mensagem": "A conta atingiu a quantidade máxima de certificados."
}
```
  </TabItem>
    <TabItem value="404">

  ```json
{
    "nome": "conta_nao_encontrada",
    "mensagem": "Conta simplificada não encontrada."
}
  ```
 </TabItem>
   <TabItem value="412">

  ```json
{
    "nome": "conta_nao_aprovada_ou_recusada",
    "mensagem": "O cliente final não aprovou ou recusou a conta simplificada."
}

Or

{
    "nome": "conta_em_processamento",
    "mensagem": "A Efí está processando a conta simplificada."
}
  ```
 </TabItem>
   <TabItem value="500">

  ```json
Application error
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro na aplicação."
}
  ```
 </TabItem>
  </Tabs>

</details>
</div> 

<br/>

</div>