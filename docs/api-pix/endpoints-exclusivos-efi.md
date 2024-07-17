---
id: endpoints-exclusivos-efi
title: Endpoints exclusivos Efí
hide_title: true
sidebar_label: Endpoints exclusivos Efí
---
<h1 className="titulo">Endpoints exclusivos EfÍ</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import { HighlightPost, HighlightPut, HighlightPatch, HighlightGet, HighlightDelete, HighlightVar } from "@site/src/components/highlight.js"
import Modal from "@site/src/scripts/modal.js" 

<!-- Embedding React components with MDX -->
<!-- fontWeight: 'bold', -->

<div className="subtitulo">
Os endpoints listados nesta seção visam à facilitação do uso da API Pix para os clientes Efí . Com os endpoints a seguir você poderá obter e alterar informações da sua conta diretamente pela API, conforme a necessidade da sua integração.

</div>

<br/>
<br/>

  ## Criar chave evp

Endpoint utilizado para criar uma chave Pix aleatória (<code>evp</code>).

<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v2/gn/evp</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.pix.evp.write</code> 
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
     
      
   A requisição enviada para esse endpoint não precisa de um body, apenas os cabeçalhos de autorização OAuth e o certificado da conta, assim como os endpoints anteriores.
    <br/> <br/> 
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 201', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  {
    "chave": "345e4568-e89b-12d3-a456-006655440001"
  }
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  {
    "nome": "limite_criacao_chave_atingido",
    "mensagem": "O limite de criação de chaves foi atingido"
  }
  ```
  </TabItem>

  <TabItem value="500">

  ```json
  {
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao solicitar a criação da chave"
  }
  ```
  </TabItem>
  
  </Tabs>

</details>

</div>

<br/>

  ## Listar chaves evp

Endpoint utilizado para listar as chaves Pix aleatórias (<code>evp</code>). A listagem somente mostrará as chaves do tipo aleatória.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/evp</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.pix.evp.read</code> 
          </div>
      </div>
      <br/> <br/>

  <p><b>Requisição</b></p> 
  A requisição enviada para esse endpoint não precisa de um body, apenas os cabeçalhos de autorização OAuth e o certificado da conta, assim como os endpoints anteriores.<br/> <br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "chaves": [
      "355e4568-e89b-1243-a456-006655440001",
      "133e4568-e89b-1243-a456-006655440000"
    ]
}
  ``` 
  </TabItem>
  
  <TabItem value="500">

  ```json
  {
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao buscar as chaves"
  }
  ```
  </TabItem>
  </Tabs>

</details>
</div> 

<br/>

  ## Remover chave evp
Endpoint utilizado para remover uma chave Pix aleatória (<code>evp</code>). É importante destacar que, ao remover uma chave aleatória, não será possível criá-la novamente, pois o <code>uuid</code> é gerado pelo DICT e cada solicitação de registro resulta em um hash diferente. Isso significa que as cobranças criadas para a chave removida não poderão mais ser pagas, pois o payload não será mais retornado.

<div className="delete">
<details className="col-100">
  <summary>
    <b><HighlightDelete>DELETE</HighlightDelete> /v2/gn/evp/<HighlightVar>:chave</HighlightVar></b>
 </summary>
        <div className="delete-div"> 
            <div className="left">
                Requer autorização para o escopo: <code>gn.pix.evp.write</code> 
              </div>
            <div className="right">
            <Modal filename="/markdown/pix/efi/Remover_chave.md" />
            </div>
        </div>
      <br/> <br/>


  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  Chave aleatória removida.
  ``` 
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "chave_nao_encontrada",
    "mensagem": "A chave informada não foi encontrada"
}
  ```
 </TabItem>
   <TabItem value="500">

  ```json
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao solicitar a exclusão da chave"
}
  ```
 </TabItem>
  </Tabs>

</details>
</div>

<br/>

  ## Buscar o saldo da conta 

Endpoint com a finalidade de consultar o saldo em sua conta Efí. Você pode habilitar o escopo nas configurações de sua aplicação em sua conta Efí.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/saldo/</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.balance.read</code> 
          </div>
          <div className="right">
         <Modal filename="/markdown/pix/efi/Buscar_saldo.md" />
          </div>
      </div>
      <br/> <br/>

  <p><b>Requisição</b></p> 
  A requisição enviada para esse endpoint não precisa de um <em>body</em>, com a opção de informar o parâmetro <code>bloqueios</code> igual a <code>true</code> ou <code>false</code>, como exibido no trecho de código abaixo. Esse parâmetro exibe ou não, os saldos bloqueados por MED ou ação judicial.<br/> <br/>

  <code>/v2/gn/saldo?bloqueios=true</code><br/> <br/>


  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🟢 200', value: '200', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  //Bloqueios = true
{
    "saldo": "100.00",
    "bloqueios": {
      "judicial": "0.00",
      "med": "0.00",
      "total": "0.00"
    }
}
  ``` 
  </TabItem>

  <TabItem value="200">

  ```json
//Bloqueios = false
{
   "saldo": "100.00"
}
  ``` 
  </TabItem>

  
  <TabItem value="500">

  ```json
  {
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao solicitar o saldo da conta"
  }
  ```
  </TabItem>
  </Tabs>

</details>
</div> 

<br/>

## Criar/modificar configurações da conta 

Endpoint com a finalidade de criar e modificar as configurações da conta do cliente relacionados à API. 

Por meio desse endpoint, é possível definir se deseja receber um Pix exclusivamente, por meio de uma transferência via chave (<code>receberSemChave = false</code>), ou permitir recebimentos também por dados bancários (<code>receberSemChave = true</code>). Além da configuração da conta, pode ser utilizado também, para modificar as configurações de recebimento de Pix associados a uma chave específica, como permitir um recebimento sem txid, ou bloquear o recebimento pelo tipo de documento CPF ou CNPJ, por exemplo, e as informações da tarifa e/ou pagador no webhook.

Para mais informações sobre esse endpoint, acesse o <a href="https://youtu.be/b5vbjQNdrCE?list=PLRqvcUTH2VsWufBmzOdTVeLEOTGrPNoiu&t=105" target="_blank">Módulo 5.1</a> do nosso curso online.


  <div className="put">
<details className="col-100">
  <summary>
    <b><HighlightPut>PUT</HighlightPut> /v2/gn/config</b>
  </summary>
      <div className="put-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.settings.write</code> 
          </div>
          <div className="right">
         <Modal filename="/markdown/pix/efi/Configurar_conta.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
       <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Exemplo', value: 'exemplo', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
{
    "pix": {
        "receberSemChave": true,
        "chaves": {
            "355e4568-e89b-1243-a456-006655440001": {
                "recebimento": {
                    "txidObrigatorio": false,
                    "recusarTipoPessoa": "PF",
                    "qrCodeEstatico": {
                        "recusarTodos": false
                    },
                    "webhook": {
                        "notificacao": {
                            "tarifa": true,
                            "pagador": true
                        },
                        "notificar": {
                            "pixSemTxid": true
                        }
                    }
                },
                "envio": {
                    "webhook": {
                        "notificacao": {
                            "tarifa": true,
                            "favorecido": true
                        }
                    }
                }
            }
        }
    }
}
  ``` 
  </TabItem>
  </Tabs>


  <br/>
        
  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(204) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      {label: '🟢 204', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  Configurações criados / modificadas
  ```
  </TabItem>
  <TabItem value="400">

  ```json
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao buscar as configurações da conta"
}
  ```
  </TabItem>
    <TabItem value="500">

  ```json
{
    "nome": "erro_aplicacao",
    "mensagem": "Ocorreu um erro ao validar a chave"
}
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>


  ## Listar configurações da conta 

  Endpoint com a finalidade de listar as configurações definidas na conta.

  <div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/config</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.settings.read</code> 
          </div>
      </div>
      <br/> <br/>

  <p><b>Requisição</b></p> 
  A requisição enviada para esse endpoint não precisa de um <em>body</em>, apenas os cabeçalhos de autorização OAuth e o certificado da conta, assim como os endpoints anteriores.

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "pix": {
      "receberSemChave": true,
      "chaves": {
        "355e4568-e89b-1243-a456-006655440001": {
          "recebimento": {
            "txidObrigatorio": true,
            "recusarTipoPessoa": "PF",
            "qrCodeEstatico": {
                "recusarTodos": false
            }
          }
        }
      }
    }
}
  ``` 
  </TabItem>
  </Tabs>

</details>
</div> 

<br/>

## Listar infrações MED da conta

Endpoint para listar as infrações abertas em uma conta.

<!-- Método GET -->
<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/infracoes</b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.infractions.read</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/med/Listar_med.md" />
          </div>
      </div>
      <br/> <br/>
  <p><b>Requisição</b></p>
  O trecho de código abaixo ilustra o consumo do endpoint em uma requisição com o mínimo de parâmetros possível (o intervalo de datas <code>inicio</code> e <code>fim</code>) e o formato em que esses parâmetros devem ser repassados.

<br/>
<br/>

  <code>
  /v2/gn/infracoes?inicio=2020-10-22T00:00:000Z&fim=2023-12-30T23:00:000Z
 </code>

  <br/>    
   <br/>

  <b>Respostas</b>

  <br/> 

  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
  
    "parametros":{
      "inicio":"2023-11-22T16:01:35Z",
      "fim":"2023-12-22T16:01:35Z",
      "paginacao":{
         "paginaAtual":0,
         "itensPorPagina":10,
         "quantidadeDePaginas":2,
         "quantidadeTotalDeItens":20
      }
    },
    "infracoes":[
      {
        "idInfracao":"8ad75c93-6150-422c-929e-822f361c7a6b",
        "endToEndId":"E09089356202312181249APId91a6304",
        "protocolo":"1313",
        "dataTransacao":"2023-12-22T16:01:35Z",
        "valor":"100",
        "chave": "chavepix@email.com", //OPCIONAL
        "status": "ABERTA", //ENUM["ABERTA", "ACEITA", "CANCELADA_EFI", "CANCELADA_EFI", "EM_DEFESA", "REJEITADA"]"razao":"Solicitacao de devolução",
        "tipoSituacao": "golpe", //OPCIONAL. ENUM["golpe", "aquisição da conta", "coerção", "acesso fraudulento", "outro", "desconhecido"]
        "tipoFraude": "aplicativo fraudulento", //OPCIONAL.
        "comentario": "Transação feita através de Qrcode falso em boleto", //OPCIONAL
        "defesa": "Comentario de defesa", //OPCIONAL 
        "justificativaAnalista": "Não foi identificado a fraude", //OPCIONAL
        "identificadorTicket":[
            94,
            95
        ],
        "dadosAnalise":{
            "abertura":"2023-12-22T16:01:35Z",
            "prazoFinalizacao":"2023-12-22T16:01:35Z",
            "recebimentoDefesa": "2023-12-22T16:01:35Z", //OPCIONAL 
            "finalizacao": "2023-12-22T16:01:35Z" //OPCIONAL
        },
        "origem":{
            "nomeParticipante":"BANCO XYZ",
            "conta":"10001",
            "nome":"Fulano de Tal",
            "documento":"800000000000000"
        },
        "destino":{
            "nomeParticipante":"Efí S/A",
            "conta":"10001",
            "nome":"Fulano de Tal",
            "documento":"800000000000000"
        },
        "criadoEm":"2023-12-22T16:01:35Z",
        "atualizadoEm":"2023-12-22T16:01:35Z"
      }
    ]
}
  ``` 
  </TabItem>

  <TabItem value="400">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/InfracoesConsultaInvalida",
    "title": "Consulta Inválida",
    "status": 400,
    "detail": "Os parâmetros de consulta não respeitam o schema ou não fazem sentido semanticamente.",
    "violacoes":[
      {
        "razao": "Algum dos parâmetros informados para a consulta não respeita o schema.",
        "propriedade": "infracoes.query.inicio" //O campo pode alterar de acordo com o campo informado errado
      }
    ]
}
  ```
  </TabItem>
<TabItem value="403">

  ```json
{
    "error": "insufficient_scope", 
    "error_description": "Access token has insufficient scope"
}
  ```
 </TabItem>
   <TabItem value="500">

  ```json
{
    "type": "https://pix.bcb.gov.br/api/v2/error/InfracaoErroInterno", 
    "title": "Erro Interno", 
    "status": 500, 
    "detail": "Ocorreu um erro interno ao obter a listagem de infrações."
}

OU

{
    "type": "https://pix.bcb.gov.br/api/v2/error/InfracaoErroInterno", 
    "title": "Erro Interno", 
    "status": 500, 
    "detail": "Funcionalidade desabilitada em ambiente de homologação."
}
  ```
  </TabItem>
  </Tabs>

</details>
</div> 
<br/>

 ## Submeter defesa de infração MED
Endpoint que permite criar uma defesa para uma infração específica.

<!-- Método POST -->
<div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v2/gn/infracoes/<HighlightVar>:idInfracao</HighlightVar>/defesa</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.infractions.write</code> 
          </div>
          <div className="right">
          <Modal filename="/markdown/pix/med/criar_defesa.md" />
          </div>
      </div>
      <br/> <br/>
      <p><p><b>Requisição</b></p></p>
     
  <Tabs
    defaultValue="exemplo"
    values={[
    { label: 'Exemplo', value: 'exemplo', },
    ]}>
    
  <TabItem value="exemplo">

  ```json
  {
    "analise": "aceito",
    "justificativa": "Justificativa"
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
      { label: '🟢 201', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 403', value: '403', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 409', value: '409', },
      { label: '🔴 422', value: '422', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  Defesa de infração MED criada
  ```
  </TabItem>
  <TabItem value="400">

  ```json
  { 
    "type": "https://pix.bcb.gov.br/api/v2/error/InfracoesConsultaInvalida",
    "title": "Consulta Inválida",
    "status": 400,
    "detail": "A requisição que busca apresentar uma defesa de infração não respeita o schema ou está semanticamente errada.",
    "violacoes":[
      {
        "razao": "Algum dos parâmetros informados não respeita o schema.", // O campo pode alterar de acordo com o campo informado errado
        "propriedade": "infracoes.params.idInfracao" // O campo pode alterar de acordo com o campo informado errado
      }
    ]
  }
  ```
  </TabItem>
  <TabItem value="403">

  ```json
  { 
    "error": "insufficient_scope", 
    "error_description": "Access token has insufficient scope" 
  }
  ```
  </TabItem>
  <TabItem value="404">

  ```json
  { 
    "type": "https://pix.bcb.gov.br/api/v2/error/InfracaoNaoEncontrada", 
    "title": "Não Encontrado", 
    "status": 404, 
    "detail": "Infração não encontrada." 
  }
  ```
  </TabItem>
  <TabItem value="409">

  ```json
  { 
    "type": "https://pix.bcb.gov.br/api/v2/error/InfracaoOperacaoInvalida",
    "title": "Operação Inválida",
    "status": 409,
    "detail": "A requisição que busca apresentar uma defesa de infração não respeita o schema ou está semanticamente errada.",
    "violacoes":[
      {
        "razao": "A defesa para essa infração já foi criada.",
        "propriedade": "body.infractionId"
      }
    ] 
  }

  OU

  { 
    "type": "https://pix.bcb.gov.br/api/v2/error/InfracaoOperacaoInvalida",
    "title": "Operação Inválida",
    "status": 409,
    "detail": "A requisição que busca apresentar uma defesa de infração não respeita o schema ou está semanticamente errada.",
    "violacoes":[
      {
        "razao": "O documento da infração não é o mesmo utilizado na criação da defesa.",
        "propriedade": "body.infractionId"
      }
    ] 
  }
  ```
  </TabItem>
  <TabItem value="422">

  ```json
  { 
    "type": "https://pix.bcb.gov.br/api/v2/error/InfracaoOperacaoInvalida", 
    "title": "Operação Inválida", 
    "status": 422, 
    "detail": "A requisição que busca apresentar uma defesa de infração não respeita o schema ou está semanticamente errada.", 
    "violacoes": [ 
      { 
        "razao": "O prazo para defesa foi excedido.", 
        "propriedade": "body.infractionId" 
      } 
    ]
  }
  ```
  </TabItem>
  <TabItem value="500">

  ```json
  { 
    "type": "https://pix.bcb.gov.br/api/v2/error/InfracaoErroInterno", 
    "title": "Erro Interno", 
    "status": 500, 
    "detail": "Ocorreu um erro interno ao processar a requisição de defesa da infração."
  }

  OU

  { 
    "type": "https://pix.bcb.gov.br/api/v2/error/InfracaoErroInterno", 
    "title": "Erro Interno", 
    "status": 500, 
    "detail": "Funcionalidade desabilitada em ambiente de homologação."
  }
  ```
  </TabItem>
  </Tabs>

</details>

</div>

<br/>

  ## Requisitar Extrato Conciliação
Endpoint para solicitar extrato de conciliação.
  <div className="post">
<details className="col-100">
  <summary>
    <b><HighlightPost>POST</HighlightPost> /v2/gn/relatorios/extrato-conciliacao</b>
  </summary>
      <div className="post-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.reports.write</code> 
          </div>
          <div className="right">
         <Modal filename="/markdown/pix/efi/Requisitar_extrato.md" />
          </div>
      </div>
      <br/> <br/>
      <p><b>Requisição</b></p>
       <br/> 
    <Tabs
    defaultValue="exemplo1"
    values={[
    { label: 'Exemplo 1', value: 'exemplo1', },
    { label: 'Exemplo 2', value: 'exemplo2', },
    ]}>
    
  <TabItem value="exemplo1">

  ```json
{
    "dataMovimento": "2023-12-15",
    "tipoRegistros": {
      "pixRecebido": true,
      "pixEnviadoChave": true,
      "pixEnviadoDadosBancarios": true,
      "estornoPixEnviado": true,
      "pixDevolucaoEnviada": true,
      "pixDevolucaoRecebida": true,
      "tarifaPixEnviado": true,
      "tarifaPixRecebido": true,
      "estornoTarifaPixEnviado": true,
      "saldoDiaAnterior": true,
      "saldoDia": true,
      "transferenciaEnviada": true,
      "transferenciaRecebida": true,
      "estornoTransferenciaEnviada": true,
      "tarifaTransferenciaEnviada": true,
      "estornoTarifaTransferenciaEnviada": true,
      "estornoTarifaPixRecebido": true
    }
}
  ``` 
  </TabItem>
  <TabItem value="exemplo2">

  ```json
{
    "dataMovimento": "2022-04-24",
    "tipoRegistros": {
      "pixRecebido": true
    }
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
      { label: '🟢 202', value: 'saida', },
      { label: '🔴 400', value: '400', },
      { label: '🔴 400', value: 'not-found', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
{
    "id": "3d0ca315-aff9–4fc2-be61–3b76b9a2d798",
    "dataSolicitacao": "“2022-02-14T14:42:51.013Z",
    "status": "AGUARDANDO_PROCESSAMENTO"
}
  ```
  </TabItem>
  <TabItem value="400">

  ```json
{
    "type": "https://api-pix.gerencianet.com.br/v2/gn/ExtratoConciliacaoConsultaInvalida",
    "title": "Consulta inválida",
    "status": 400,
    "detail": "Os parâmetros de consulta não respeitam o schema ou não fazem sentido semanticamente",
    "violacoes": [
      {
      "razao": "não são permitidas propriedades adicionais",
      "propriedade": ".body.parametros"
      },
      {
      "razao": "deve ter a propriedade obrigatória dataMovimento",
      "propriedade": ".body"
      }
    ]
}
  ```
  </TabItem>

  <TabItem value="not-found">

  ```json
{
    "type": "https://api-pix.gerencianet.com.br/v2/gn/ExtratoConciliacaoConsultaInvalida",
    "title": "Consulta inválida",
    "status": 400,
    "detail": "A data do extrato de conciliação deve ser anterior à data corrente"
}
  ```
  </TabItem>

  <TabItem value="500">

  ```json
{
    "type": "https://api-pix.gerencianet.com.br/v2/gn/ErroInterno",
    "title": "Erro Interno",
    "status": 500,
    "detail": "Ocorreu um erro interno ao processar a requisição"
}
  ```
  </TabItem>
  
  </Tabs>
<br/>

  <b>Tipos de status retornado no body:</b>
  <br/><br/>
<ul>
<li>AGUARDANDO_PROCESSAMENTO: esse status indica que a solicitação de extrato foi recebida com sucesso e está na fila aguardando para iniciar o processamento;</li>
<li>EM_PROCESSAMENTO: esse status indica que a geração do arquivo foi iniciada e está em etapa de processamento dos dados;</li>
<li>CONCLUIDO: esse status indica que um extrato com os mesmos parâmetros foi solicitado anteriormente e um arquivo com o <code>id</code> retornado já se encontra passível para download.</li>
</ul>

</details>

</div>
<br/>

<div className="admonition admonition_tip">
<div>
<img src="/img/lightbulb-on-green.svg"/> <b>Boa Prática</b>
</div>
<p>Após realizar a requisição POST, a API tem um tempo médio de espera de 30 segundos até processar o extrato. Então é recomendado esperar esse tempo para realizar a requisição GET.</p>
</div>

<br/>

  ## Solicitar Download Extrato Conciliação 

Endpoint para solicitar download do extrato de conciliação.

<div className="get">
<details className="col-100">
  <summary>
    <b><HighlightGet>GET</HighlightGet> /v2/gn/relatorios/<HighlightVar>:id</HighlightVar></b>
  </summary>
      <div className="get-div"> 
          <div className="left">
            Requer autorização para o escopo: <code>gn.reports.read</code> 
          </div>
          <div className="right">
         <Modal filename="/markdown/pix/efi/Solicitar_download.md" />
          </div>
      </div>
      <br/> <br/>


<div className="admonition admonition_caution">
<div>
<img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>
  <p>Se consumir o endpoint GET e o extrato ainda não tiver sido processado, a resposta será sucesso(202) e o retorno será semelhante ao que é retornado na solicitação, informando em qual etapa de processamento está a solicitação.</p>
</div>
        <br/> 
  <b>Respostas</b>


<br/>
  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.
  <Tabs
    defaultValue="saida"
    values={[
      { label: '🟢 200', value: 'saida', },
      { label: '🟢 202', value: '202', },
      { label: '🔴 404', value: '404', },
      { label: '🔴 500', value: '500', },
    ]}>
  <TabItem value="saida">

  ```json
  CA;Gerencianet;364;1;517613;João da Silva;2021-12-17;2021-12-10;Extrato de Conciliação API Pix;1.0
T;0;0;0;0;0;0
  ``` 
  </TabItem>

  <TabItem value="202">

  ```json
{
    "id": "b02c2b3a-0ab2-4ab5-bc8e-b3ce607e7829",
    "dataSolicitacao": "2022-06-02T20:08:39.000Z",
    "status": "AGUARDANDO_PROCESSAMENTO"
}
  ``` 
  </TabItem>
  <TabItem value="404">

  ```json
{
    "type": "https://api-pix.gerencianet.com.br/v2/gn/NaoEncontrado",
    "title": "Não encontrado",
    "status": 404,
    "detail": "Recurso não encontrado ou não pertence à conta autenticada"
}
  ```
  </TabItem>
  
  <TabItem value="500">

  ```json
{
    "type": "https://api-pix.gerencianet.com.br/v2/gn/ErroInterno",
    "title": "Erro Interno",
    "status": 500,
    "detail": "Ocorreu um erro interno na geração do relatório. Tente solicitar um novo relatório."
}
  ```
  </TabItem>
  </Tabs>

</details>
</div> 
<br/>

<div className="admonition admonition_info">
<div>
<img src="/img/lightbulb-on-blue.svg"/><b>Detalhamento de retorno</b>
</div>
<p>Para mais informações sobre o documento .CSV que é retornado e a legenda dos campos, baixe o PDF disponível abaixo ou por meio deste <a href="https://gerencianet-pub-prod-1.s3.amazonaws.com/Extrato+de+Concilia%C3%A7%C3%A3o+%E2%80%A2+API+Pix+-+v4.0.pdf" target="_blank">link</a>.</p>
</div>
<br/>
 <embed src="/pdfelement/Extrato_conciliacao_API_Pix_v4.0.pdf" type="application/pdf" width="100%" height="972px"></embed>  
 
</div>