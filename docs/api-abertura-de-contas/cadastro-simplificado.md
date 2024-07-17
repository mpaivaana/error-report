---
id: cadastro-simplificado
title: Cadastro Simplificado
hide_title: true
sidebar_label: Cadastro Simplificado
---
<h1 className="titulo">Cadastro Simplificado </h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
O conjunto de endpoints a seguir são destinados a lidar com o Cadastro de uma conta simplificada
</div>

<br/>
<br/>

  ## Solicitar abertura de conta simplificada.
Neste passo, você pode solicitar a abertura de uma conta simplificada para integração. Basta fornecer os dados do cliente final. Se os dados estiverem corretos, o cliente receberá um link para autorizar a integração à sua conta Efí.

<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Criação de conta/aplicação</b>
</div>
<p>Se o cliente final já tiver uma conta na Efí, ele terá duas opções:</p>
<p>
<li>Criar uma aplicação na conta atual, onde você terá acesso às credenciais e poderá definir os escopos;</li>
<li>Criar uma conta secundária para o cliente final com as configurações/acessos definidos em sua requisição.</li>
</p>
</div>

<br/>
<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Negação da abertura de conta</b>
</div>
<p>Caso o seu cliente recuse o processo de abertura de conta, será necessário esperar 2 dias corridos até iniciar um novo processo.</p>
</div>

<br/>
<div className="admonition admonition_tip">
<div>
<img src="/img/info-circle-green.svg"/> <b>Modalidade das contas</b>
</div>
<p>Se a conta gerada para o cliente for pessoa física, sem CNPJ vinculado,  ela será alocada na modalidade Efí Pro. Em casos em que a conta criada tem um CNPJ vinculado, ela será automaticamente classificada como Efí empresas.</p>
</div>

<br/>
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/conta-simplificada</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.registration.write</code> 
          </div>
           <div className="right">
          <Modal filename="/markdown/abertura_conta/cadastro/Solicitar_abertura_conta.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
      <p></p>
  <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Cliente final pessoa física', value: 'exemplo1', },
    { label: 'Cliente final pessoa jurídica', value: 'exemplo2', },
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
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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
CPF inválido
{
    "nome": "cpf_invalido",
    "mensagem": "Este CPF se encontra restrito na Efí."
}

Ou

Nome completo inválido
{
    "nome": "nome_completo_invalido",
    "mensagem": "O nome completo não corresponde ao CPF do cliente final."
}

Ou

Menoridade

{
    "nome": "menoridade",
    "mensagem": "O cliente final é menor de idade."
}

Ou

Data de nascimento inválida
{
    "nome": "data_nascimento_invalida",
    "mensagem": "A data de nascimento não corresponde ao CPF do cliente final."
}

Ou

Nome da mãe inválido
{
    "nome": "nome_mae_invalido",
    "mensagem": "O nome da mãe não corresponde ao CPF do cliente final."
}

Ou

Celular inválido
{
    "nome": "celular_invalido",
    "mensagem": "O celular é inválido."
}

Ou

Celular não similar
{
    "nome": "celular_nao_similar",
    "mensagem": "O Celular informado não corresponde ao Celular cadastrado na Conta Efí."
}

Ou

Email inválido
{
    "nome": "email_invalido",
    "mensagem": "O email é inválido."
}

Ou

CEP inválido
{
    "nome": "cep_invalido",
    "mensagem": "O CEP é inválido."
}

Ou

CNPJ inválido
{
    "nome": "cnpj_invalido",
    "mensagem": "O CNPJ é inválido."
}

Ou

Razão social inválida
{
    "nome": "razao_social_invalida",
    "mensagem": "A razão social não corresponde ao CNPJ do cliente final."
}

Ou

Nome completo inválido
{
    "nome": "nomeCompleto_invalido",
    "mensagem": "ClienteFinal deve ter a propriedade obrigatória nomeCompleto."
}

Ou

CPF inativo
{
    "nome": "cpf_inativo",
    "mensagem": "O CPF está em situação cadastral inativa."
}

Ou

CNPJ inativo
{
    "nome": "cnpj_inativo",
    "mensagem": "O CNPJ está em situação cadastral inativa."
}
  ```
  </TabItem>
    <TabItem value="401">

  ```json
Este erro ocorre nas seguintes situações:

* Certificado ou credenciais não existem;
* Certificado ou credenciais estão desativados;
* Certificado e credenciais não estão vinculados a mesma conta Efí
* Integrador não tem permissão para o escopo de serviço necessário para consumir este endpoint.
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
Celular cadastrado
{
    "nome": "celular_cadastrado",
    "mensagem": "O celular é utilizado por outro cliente."
}

Ou

Email cadastrado

{
    "nome": "email_cadastrado",
    "mensagem": "O email é utilizado por outro cliente."
}

Ou

Solicitação duplicada
{
    "nome": "solicitacao_duplicada",
    "mensagem": "Já existe uma solicitação de abertura de conta aberta para este cliente final."
}
  ```
  </TabItem>
    <TabItem value="412">

  ```json
Precondition Failed. Este erro ocorre nas seguintes situações:

* Integrador deve ter pelo menos um Webhook cadastrado.
{
    "nome": "webhook_nao_cadastrado",
    "mensagem": "Sua conta não possui webhook cadastrado na API de Cadastro."
}
  ```
  </TabItem>
    <TabItem value="500">

  ```json
Erro na aplicação

{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro na aplicação."
}

Ou

{
    "nome": "cpf_restrito",
    "mensagem": "Este CPF se encontra restrito na Efí."
}

Ou

{
    "nome": "cpf_nao_permitido",
    "mensagem": "Este CPF se encontra bloqueado pela Efí."
}

Ou

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


  ## Recuperar credenciais de uma conta simplificada.
Recupera as credenciais ``Client_Id`` e ``Client_Secret`` para integrar à uma conta simplificada.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v1/conta-simplificada/<HighlightVar>:idContaSimplificada</HighlightVar>/credenciais</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.registration.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/abertura_conta/cadastro/Recuperar_credenciais.md" />
          </div>
      </div>
      <br/><br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
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
 Este erro ocorre nas seguintes situações:

* Certificado ou credenciais não existem;
* Certificado ou credenciais estão desativados;
* Certificado e credenciais não estão vinculados a mesma conta Efí
* Integrador não tem permissão para o escopo de serviço necessário para consumir este endpoint.
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

OU

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

  ## Criar certificado de uma conta simplificada.
Cria o certificado para integrar à uma conta simplificada.

  <div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v1/conta-simplificada/<HighlightVar>:idContaSimplificada</HighlightVar>/certificado</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.registration.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/abertura_conta/cadastro/Recuperar_certificado.md" />
          </div>
      </div>
      <br/><br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo.
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
 Este erro ocorre nas seguintes situações:

* Certificado ou credenciais não existem;
* Certificado ou credenciais estão desativados;
* Certificado e credenciais não estão vinculados a mesma conta Efí
* Integrador não tem permissão para o escopo de serviço necessário para consumir este endpoint.
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

OU

{
    "nome": "conta_em_processamento",
    "mensagem": "A Efí está processando a conta simplificada."
}
  ```
 </TabItem>
   <TabItem value="500">

  ```json
Erro na aplicação
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