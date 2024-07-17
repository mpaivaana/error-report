---
id: box-billing
title: Box Billing
hide_title: true
sidebar_label: Box Billing
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<h1 className="titulo">Box Billing</h1>
<div className="conteudo">

<div className="subtitulo">
Módulo de Integração Efí para Boxbilling Oficial - Versão 0.2.1 (Beta)
</div>

<br/>
<br/>

O módulo Efí para o Boxbilling permite gerar boletos com registro por meio da nossa API. Compatível com as versões superiores a versão 4.19 do Boxbilling.

Este é uma versão Beta do Módulo Oficial de integração fornecido pela Efí para **Boxbilling**. Com ele, o responsável pela conta **Box Billing** pode receber pagamentos por boleto bancário e, assim que a cobrança tem uma confirmação de pagamento ou é cancelada, a Efí envia uma notificação automática para o Boxbilling.

Caso você tenha alguma dúvida ou sugestão, entre em contato conosco pelo site Efí.

<br/>

## 1. Requisitos

* Versão do PHP: ``5.4.39`` à ``7.0.3``
* Versão mínima do Boxbilling: ``4.19``

<br/>

## 2. Instalação

1. Faça o <a href="https://codeload.github.com/gerencianet/gn-api-boxbilling/zip/master" target="_blank" title="Efetuar Download">download da última versão do módulo</a>;

2. Descompacte o arquivo baixado;

3. Copie o arquivo <code>gerencianetcharge.php</code> e a pasta <code>gerencianet_lib</code> (disponíveis na pasta <code>gn-api-boxbilling</code>) e cole no diretório <code>/bb-library/Payment/Adapter/</code> da instalação do Box Billing;

4. Copie a imagem <code>gerencianetcharge.png</code> (disponível no diretório <code>gn-api-boxbilling</code>) e cole no diretório <code>/bb-themes/huraga/assets/img/gateway_logos</code>;

5. No final do arquivo <code>logos.css</code>, localizado no diretório <code>/bb-themes/huraga/assets/css/</code>, cole o seguinte trecho de código:

```
.logo-gerencianetcharge{
   background: transparent url("/img/gateway_logos/gerencianetcharge.png") no-repeat scroll 0% 0%;
    background-size: contain;
    width:135px;
    height: 25px;
    border: 0;
    margin: 10px;
}
```

<br/>

Os arquivos do módulo Efí devem estar com a seguinte estrutura no Box Billing:

```
/bb-library/Payment/Adapter/
  |  gerencianet_lib/
  |  gerencianetcharge.php
```

<br/>

### Configurações do Módulo

![alt text](/img/boxbilling.png 'Box Billing configuração')

Dentro do painel administrativo do Boxbilling, acesse o menu <code>Configuration > Payment Gateways</code>. Clique para editar as configurações do módulo <code>gerencianetcharge</code>. A tela mostrada acima será exibida. Dentro do formulário, você deverá preencher os seguintes campos:

**1. Client_Id Produção:** Deve ser preenchido com o <code>Client_Id</code> de produção de sua conta Efí. Este campo é obrigatório e pode ser encontrado no menu <code>API > Minhas Aplicações</code>. Em seguida, selecione sua aplicação criada, conforme é mostrado <a href="https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/001a47-b9e519bf-b76d-4178-b564-eb8d4981b203.png" target="_blank">neste link</a>;

**2. Client_Secret Produção:** Deve ser preenchido com o <code>Client_Secret</code> de produção de sua conta Efí. Este campo é obrigatório e pode ser encontrado no menu <code>API > Minhas Aplicações</code>. Em seguida, selecione sua aplicação criada, conforme é mostrado <a href="https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/a803ce-592ac502-6ead-44c4-bd75-fce1c1ed8637.png" target="_blank">neste link</a>;

**3. Client_Id Homologação:** Deve ser preenchido com o <code>Client_Id</code> de Homologação de sua conta Efí. Este campo é obrigatório e pode ser encontrado no menu <code>API > Minhas Aplicações</code>. Em seguida, selecione sua aplicação criada, conforme é mostrado <a href="https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/622255-9e257a75-4884-4e73-89f5-d7ec7b1f5b4c.png" target="_blank">neste link</a>;

**4. Client_Secret Homologação:** Deve ser preenchido com o <code>Client_Secret</code> de Homologação de sua conta Efí. Este campo é obrigatório e pode ser encontrado no menu <code>API > Minhas Aplicações</code>. Em seguida, selecione sua aplicação criada, conforme é mostrado <a href="https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/680331-39fadf5b-6807-4ffa-a433-b2f656060984.png" target="_blank">neste link</a>;

**5. Identificador de conta:** Deve ser preenchido com o identificador de sua conta Efí. Este campo é obrigatório. Confira onde localizá-lo em sua plataforma (<a href="/img/identificador.png" target="_blank">Identificador de conta</a>);

**6. E-mail de cobrança - Efí:** Caso seja de seu interesse, habilite o envio de emails de cobrança da Efí para o cliente final;

**7. Sandbox:** Caso seja de seu interesse, habilite o ambiente de testes da API Efí;

**8. Moeda:** Escolha a opção <code>R$ Real</code> (a mesma deve estar definida no seu Boxbilling);

**9. Enabled:** Escolha a opção <code>Yes</code> para ativar o módulo da Efí;

**10. Allow one time payments:** Marque a opção <code>Yes</code>;

**11. Allow subscription payments:** Marque a opção <code>No</code> (o módulo Efí não suporta transações por assinatura);

Por fim, clique em <code>UPDATE</code>.

<div className="admonition admonition_caution">
<div>
    <img src="/img/exclamation-triangle-orange.svg"/> <b>Atenção!</b>
</div>

Importante salientar que **os boletos gerados em sandbox não são válidos e não podem ser pagos**, possuem a linha digitável "zerada" e uma marca d'água ao fundo informando ser um boleto de teste.

**Os pagamentos de cobranças de sandbox utilizando cartão de crédito são fictícios, mesmo se utilizar um cartão "real".** Todos os pagamentos de cartão neste ambiente terão o pagamento confirmado automaticamente, mas é apenas uma alteração de status para "Pago". Este recurso permite que você teste a notificação do status <code>paid</code>.

**Isso significa que todos os pagamentos realizados em sandbox não são reais e, portanto, não há cobrança de nenhuma importância financeira.** 

É importante saber que as palavras **Playground, Sandbox e Ambiente de Homologação**, no contexto da Efí, são sinônimos no sentido de fazerem referência ao local de testes que oferecemos em que você pode testar à vontade sua integração com a API.
</div>
<br/>



<br/>

---

## 3. Erros Comuns de Integração

Ainda que nenhum destes erros de validação sejam retornados, a API Efí poderá retornar erros referentes à geração da cobrança. Para interpretar os retornos da API e, claro, corrigir possíveis erros de validação de dados ou outros similares, acesse a página interpretando erros da API.

</div>