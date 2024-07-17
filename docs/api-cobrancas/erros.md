---
id: erros
title: Interpretando Erros da API
hide_title: true
sidebar_label: Interpretando Erros da API
---
<h1 className="titulo">Interpretando Erros da API</h1>
<div className="conteudo">

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="subtitulo">
Veja como interpretar os códigos de erros retornados pela API Efí
</div>

<br/>
<br/>

Esta página tem como objetivo apresentar o 'Histórico de Requisições', que permite que as pessoas integradoras visualizem todas as solicitações feitas por sua aplicação à API Efí. A página também inclui informações sobre como consultar os códigos de erro retornados pela nossa API, o que permitirá que você entenda as respostas da API, corrija possíveis erros de validação de dados ou outros problemas semelhantes, e identifique as solicitações feitas por sua aplicação aos nossos serviços web. Ambos os fluxos estão detalhados a seguir:

## Aprendendo a utilizar o "Histórico de Requisições" da API Efí

A API efetua validações nos dados da requisição enviada pelo sistema integrado aos nossos webservices. Portanto, dependendo do endpoint que seu sistema está tentando acessar, podem ocorrer erros em certas situações. Isso também se aplica se você estiver usando um sistema ou módulo com integração com a Efí.

Para acessar o "Histórico de Requisições", siga os passos:

- <a href="https://sejaefi.com.br/#login" target="_blank" title="Link Externo">Efetue login</a> em sua conta Efí;
- Acesse <code>API > Aplicações > Sua Aplicação</code>;
- Escolha o ambiente utilizado (produção ou homologação) e clique em <code>Histórico de Requisições</code> (<a href="https://sejaefi.link/H1x2CNAhr3" target="_blank">veja onde</a>).

Confira o vídeo onde ensinamos a utilizar o "Histórico de Requisições" da API:

<div className = "video" >
<iframe width="560" height="315" src="https://www.youtube.com/embed/4F-DQ6Dhdro" title="[Módulo 6]  Aula 1 - Interpretando erros da API | Curso API Gerencianet 2.0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


<br/>

## Códigos de erros retornado na API Cobranças

Essa seção apresenta os códigos de erro que podem ser retornados na API Cobranças Efí.

<div className = "erros-API">

```json
[
    {
        "code": "3500000",
        "message": "Erro interno do servidor.",
        "solve": "Esse erro acontece quando não é possivel receber a chamada de seu servidor para processamento",
        "endpoints": "Em todos os endpoints"
    },
    {
        "code": "3500001",
        "message": "A aplicação fornecida não tem permissão para utilizar este endpoint.",
        "solve": "A aplicação não tem permissão para utilizar certo endpoint, nesse caso entre em contato com o suporte Efí",
        "endpoints": "Em todos os endpoints"
    },
    {
        "code": "3500002",
        "message": "O parâmetro [data] é obrigatório.",
        "solve": "O parâmetro data é obrigatório principalmente nas requisições do tipo POST, verifique sua requisição se está passando esse parâmetro",
        "endpoints": "Em todos os endpoints, exceto o endpoint do tipo GET"
    },
    {
        "code": "3500007",
        "message": "O tipo de pagamento informado na propriedade [type] não está disponível.",
        "solve": "Os tipo para pagamentos são 'banking_billet' e 'credit_card'",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "3500008",
        "message": "Requisição não autorizada.",
        "solve": "Entre em contato com o suporte Efí",
        "endpoints": [
            {
                "method": "GET",
                "route": "/v1/installments"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "3500010",
        "message": "A propriedade [%s] informada não existe.",
        "solve": "Você está passando algum parâmetro que não está no Schema da requisição ou o valor da propriedade está incorreto",
        "endpoints": [
            {
                "method": "GET",
                "route": "/v1/charge/:id"
            },
            {
                "method": "PUT",
                "route": "/v1/subscription/:id/metadata"
            },
            {
                "method": "PUT",
                "route": "/v1/charge/:id/metadata"
            },
            {
                "method": "PUT",
                "route": "/v1/charge/:id/billet"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/metadata"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/parcel/:parcel"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/cancel"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/history"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/link"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/history"
            }
        ]
    },
    {
        "code": "3500021",
        "message": "A propriedade [installments] não pode ser superior a 1 para assinaturas.",
        "solve": "Não é possivel dividir o valor da assinatura por já ser um valor recorrente",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            }
        ]
    },
    {
        "code": "3500023",
        "message": "A propriedade [%s] é obrigatória.",
        "solve": "O parâmetro informado é obrigatório, verifique sua requisição se está passando esse parâmetro",
        "endpoints": [
            {
                "method": "GET",
                "route": "/v1/subscription/:id"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/parcel/:parcel"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/:id/resend"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/:id/parcel/:parcel/resend"
            }
        ]
    },
    {
        "code": "3500030",
        "message": "Esta transação já possui uma forma de pagamento definida.",
        "solve": "Nesse caso você está tentando utilizar o endpoint de pagamento para um cobrança ja existente",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "3500032",
        "message": "O plano não pode ser removido pois possui transações associadas.",
        "solve": "É necessario remover transações associadas aquele plano primeiramente",
        "endpoints": [
            {
                "method": "DELETE",
                "route": "/v1/plan/:id"
            }
        ]
    },
    {
        "code": "3500034",
        "message": "Este código está diretamente relacionado aos dados contidos em sua requisição e pode ter sido causado por inúmeros fatores. Para visualizar a razão exata, conheça e explore a sub-aba Histórico de Requisições da sua aplicação. Neste link da documentação explicamos como utilizar esta ferramenta.",
        "solve": "Entre em contato com o suporte Efí",
        "endpoints": "Em todos os endpoints"
    },
    {
        "code": "3500036",
        "message": "A forma de pagamento da transação não é boleto bancário.",
        "solve": "Quando você está tentando fazer a alteração por exemplo da data de vencimeto mas a cobrança está com metodo de pagamento cartão",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/billet"
            }
        ]
    },
    {
        "code": "3500037",
        "message": "A propriedade [%s] informada é inválida.",
        "solve": "Você está passando algum parâmetro incorreto de acordo com o modelo do Schema da requisição",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/billet"
            }
        ]
    },
    {
        "code": "3500038",
        "message": "Apenas transações com status [waiting] ou [unpaid] podem ser atualizadas.",
        "solve": "Nesse caso um exemplo seria tentar cancelar uma cobrança com status paga ou o inverso, tentar pagar uma cobrança com status cancelada ou seja status finais não podem ser atualizados",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/billet"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/parcel/:parcel"
            }
        ]
    },
    {
        "code": "3500040",
        "message": "Apenas assinaturas com status [new] ou [active] podem ser canceladas.",
        "solve": "Verifique o status da assinatura que está tentando cancelar",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/subscription/:id/cancel"
            }
        ]
    },
    {
        "code": "3500041",
        "message": "A propriedade [repeats] deve ser maior ou igual a dois.",
        "solve": "Verifique a propriedade repeats, pois caso pretente utilizar a propriedade com o valor igual a 1 é recomedado utilizar o titulo avulso (boleto)",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/carnet"
            }
        ]
    },
    {
        "code": "3500042",
        "message": "O parâmetro [data] deve ser um JSON.",
        "solve": "Verifique em sua requisição o formato que está passando o parâmetro data",
        "endpoints": "Em todos os endpoints, exceto o endpoint do tipo GET "
    },
    {
        "code": "3500043",
        "message": "Apenas transações com status [new],[link],[waiting] ou [unpaid] podem ser canceladas.",
        "solve": "Verifique se o status da transação que está tentando cancelar não está em um status diferente dos mencionados",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/cancel"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/parcel/:parcel/cancel"
            }
        ]
    },
    {
        "code": "3500044",
        "message": "A transação não pode ser paga pois possui o status [%s].",
        "solve": "Verifique o status da transação não é [new] ou [canceled]",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "3500050",
        "message": "O identificador de conta fornecido é inválido.",
        "solve": "Verifique o seu indetificador da conta está correto",
        "endpoints": [
            {
                "method": "GET",
                "route": "/v1/installments"
            }
        ]
    },
    {
        "code": "3500051",
        "message": "É necessário chamar a função $gn.ready.",
        "solve": "É necessário instanciar a função $gn.ready antes de utiliziar por exemplo ligthbox ou a obtenção do payment_token",
        "endpoints": []
    },
    {
        "code": "3500052",
        "message": "A função de callback é obrigatória.",
        "solve": "",
        "endpoints": []
    },
    {
        "code": "3500053",
        "message": "O parâmetro [total] é obrigatório e deve ser um inteiro.",
        "solve": "O valor total deve ser passado em inteiro por exemplo total = 1040 isso é igual a R$10,40",
        "endpoints": []
    },
    {
        "code": "3500054",
        "message": "O parâmetro [brand] é obrigatório.",
        "solve": "A bandeira do cartão é obrigatório",
        "endpoints": []
    },
    {
        "code": "3500056",
        "message": "O parâmetro [brand] informado é inválido. As opções válidas são: 'visa', 'mastercard', 'amex', 'elo' ou 'hipercard'.",
        "solve": "A bandeira informada não é aceita pela Efí",
        "endpoints": []
    },
    {
        "code": "3500057",
        "message": "O parâmetro [number] é obrigatório.",
        "solve": "O numero do cartão é obrigatório.",
        "endpoints": []
    },
    {
        "code": "3500058",
        "message": "O parâmetro [number] informado é inválido.",
        "solve": "O numero do cartão informado é inválido",
        "endpoints": []
    },
    {
        "code": "3500059",
        "message": "O parâmetro [cvv] é obrigatório.",
        "solve": "Verifique se está sendo informado cvv",
        "endpoints": []
    },
    {
        "code": "3500060",
        "message": "O parâmetro [expiration_month] é obrigatório.",
        "solve": "",
        "endpoints": []
    },
    {
        "code": "3500061",
        "message": "O parâmetro [expiration_year] é obrigatório.",
        "solve": "",
        "endpoints": []
    },
    {
        "code": "3500062",
        "message": "O parâmetro [expiration_month] informado é inválido.",
        "solve": "",
        "endpoints": []
    },
    {
        "code": "3500063",
        "message": "O parâmetro [available_payment_forms] é obrigatório.",
        "solve": "As opções disponíveis são: 'banking_billet' ou 'credit_card' ou 'pix'",
        "endpoints": []
    },
    {
        "code": "3500064",
        "message": "O parâmetro [available_payment_forms] informado é inválido.",
        "solve": "As opções disponíveis são: 'banking_billet' ou 'credit_card' ou 'pix'",
        "endpoints": []
    },
    {
        "code": "3500066",
        "message": "Apenas transações com status [waiting] podem ser atualizadas.",
        "solve": "Cobranças com status [paid] ou [canceled] não pode ser reenviada no email",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/billet/resend"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/link/resend"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/subscription/resend"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/:id/resend"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/:id/parcel/:parcel/resend"
            }
        ]
    },
    {
        "code": "3500068",
        "message": "Apenas carnês com status [active] podem ser atualizados.",
        "solve": "Verifique os status dos carnês que está tentando atualizar",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/cancel"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/parcel/:parcel/cancel"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/:id/resend"
            }
        ]
    },
    {
        "code": "3500070",
        "message": "Apenas cobranças com status [waiting] que não foram pagas com cartão de crédito podem ser atualizadas.",
        "solve": "Cobranças definada com metódo de pagamento cartão de crédito ficam com o status waiting durante seu processamento por isso não podem ser atualizadas",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/cancel"
            }
        ]
    },
    {
        "code": "3500072",
        "message": "Não foi possível finalizar sua solicitação. Por favor, entre em contato com o suporte Efí.",
        "solve": "Verifique se existe algum bloqueio de emissão em sua conta ou caso esteja emitindo uma cobrança com o pagamento para cartão de credito verifique se o ramo de atividade ja foi cadastrado",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/billet"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/parcel/:parcel"
            },
            {
                "method": "PUT",
                "route": "/v1/plan/:id"
            },
            {
                "method": "POST",
                "route": "/v1/charge"
            },
            {
                "method": "POST",
                "route": "/v1/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/plan"
            },
            {
                "method": "POST",
                "route": "/v1/plan/:id/subscription"
            }
        ]
    },
    {
        "code": "3500073",
        "message": "Não é possível aplicar desconto para cobranças que utilizam Marketplace.",
        "solve": "Verifique se está tentando aplicar algum tipo de desconto na cobrança",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "3500080",
        "message": "Essa cobrança já teve um link de pagamento definido.",
        "solve": "Não é possivel associar um link de pagamento a uma cobrança que já tem um link",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/link"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/link"
            }
        ]
    },
    {
        "code": "3500081",
        "message": "A cobrança não possui status [%s].",
        "solve": "A cobrança não possui um status que pode associar a um link de pagamento",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/link"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/link"
            }
        ]
    },
    {
        "code": "3500085",
        "message": "A cobrança não deve pertencer a um carnê ou assinatura.",
        "solve": "O balancete so é possivel para titulos avulsos",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/balance-sheet"
            }
        ]
    },
    {
        "code": "3500086",
        "message": "Já existe um balancete definido para esta cobrança.",
        "solve": "Ja foi inserido anteriomente um balancete para está cobrança",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/balance-sheet"
            }
        ]
    },
    {
        "code": "3500090",
        "message": "Esta cobrança já possui um rateio de tarifas definido.",
        "solve": "",
        "endpoints": []
    },
    {
        "code": "3500097",
        "message": "A transação %s não possui um link de pagamento associado",
        "solve": "Verifique se a cobrança que está tentando fazer o reenvio está associada a um link de pagamento",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/link/resend"
            }
        ]
    },
    {
        "code": "3500098",
        "message": "O link de pagamento deve ter o status waiting",
        "solve": "Não é possivel fazer o reenvio de cobranças com os status finais",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/link/resend"
            }
        ]
    },
    {
        "code": "4600001",
        "message": "Pagamento não encontrado.",
        "solve": "Verifique o id que está tentando fazer a requisição",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/billet"
            },
            {
                "method": "PUT",
                "route": "/v1/charge/:id/cancel"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/cancel"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/parcel/:parcel/cancel"
            }
        ]
    },
    {
        "code": "4600002",
        "message": "Erro de validação no campo %s.",
        "solve": "Entre em contato com o suporte Efí",
        "endpoints": [
            {
                "method": "GET",
                "route": "/v1/installments"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4600007",
        "message": "A data do vencimento do boleto deve ser maior ou igual que a data atual.",
        "solve": "Verifique a data que está passando na requisição",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/billet"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/link"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4600035",
        "message": "Serviço indisponível para a conta. Por favor, solicite que o recebedor entre em contato com o suporte Efí.",
        "solve": "Entre em contato com o suporte Efí",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4600036",
        "message": "valor da emissão %s é inferior ao limite mínimo para esta transação (5,00)",
        "solve": "Verifique o valor que está tentando emitir ele deve ser superior a R$5,00",
        "endpoints": [
            {
                "method": "GET",
                "route": "/v1/installments"
            }
        ]
    },
    {
        "code": "4600037",
        "message": "O valor da emissão é superior ao limite operacional da conta. Por favor, entre em contato com o Suporte Efí.",
        "solve": "Entre em contato com o suporte Efí",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4600057",
        "message": "valor da emissão de cada folha do carnê %s é superior ao valor máximo %s",
        "solve": "Verifique o valor de cada parcela, caso necessario um aumento entre em contato com o suporte Efí",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/carnet"
            }
        ]
    },
    {
        "code": "4600059",
        "message": "O número máximo de folhas por carnê é 12.",
        "solve": "Verifique a quantidade de laminas de carnê que está tentando emitir, por questão de segurança não é possivel emitir mais de 12 por vez",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/carnet"
            }
        ]
    },
    {
        "code": "4600060",
        "message": "A data informada é inválida.",
        "solve": "Verifique se a data não é inferior a data de hoje e está no formato yyyy-MM-dd",
        "endpoints": [
            {
                "method": "PUT",
                "route": "/v1/charge/:id/billet"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/link"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4600100",
        "message": "Timeout: Não foi possível validar os dados enviados. Por favor, tente novamente mais tarde.",
        "solve": "Não foi possivel realizar a operação no momento",
        "endpoints": "Em todos os endpoints"
    },
    {
        "code": "4600142",
        "message": "Transação não processada por conter incoerência nos dados cadastrais.",
        "solve": "Verifique se o CPF informado está vinculado ao respectivo cliente",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4600209",
        "message": "Limite de emissões diárias excedido. Por favor, solicite que o recebedor entre em contato com o suporte Efí.",
        "solve": "Entre em contato com o suporte Efí",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            }
        ]
    },
    {
        "code": "4600210",
        "message": "Não é possível emitir três cobranças idênticas. Por favor, entre em contato com nosso suporte para orientações sobre o uso correto dos serviços Efí.",
        "solve": "Alterar a descrição do cobrança inserindo um ponto final por exemplo ja resolveria ou ainda alterar a data de vencimento ou o valor",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4600211",
        "message": "Limite de emissões mensais excedido. Por favor, solicite que o recebedor entre em contato com o suporte Efí.",
        "solve": "Emissão para clientes diferentes utilizando o mesmo email ou telefone",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4600222",
        "message": "Recebedor e cliente não podem ser a mesma pessoa.",
        "solve": "Verifique se está utiliziando algum dado do titular da conta para emitir a cobrança",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4600224",
        "message": "Problemas na validação da autorização do App. Por favor, solicite que o recebedor entre em contato com o suporte Efí",
        "solve": "Entre em contato com o suporte Efí",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4600414",
        "message": "vencimento máximo atingido",
        "solve": "A data limite é em torno de 3 anos e 5 meses",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            }
        ]
    },
    {
        "code": "4600523",
        "message": "Valor total com desconto está abaixo do mínimo permitido para emissão. Valor total: %s, valor mínimo para emissão: R$ 5,00.",
        "solve": "Verifique se o valor total da cobranca menos o desconto é superior a R$5,00",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            }
        ]
    },
    {
        "code": "4699999",
        "message": "falha inesperada",
        "solve": "Entre em contato com o suporte Efí",
        "endpoints": "Em todos os endpoints"
    },
    //A partir daqui o levantamento é novo!
    //Revisar texto de sugestões de solução
    {
        "code": "3500006",
        "message": "O total fornecido é superior ao limite máximo por transação.",
        "solve": "Verifique se o limite da conta permite que seja emitido uma cobrança com o valor referente. Para aumentar o limite da conta é necessário entrar com o suporte Efí.",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/link"
            },
            {
                "method": "PUT",
                "route": "/v1/charge/:id/link"
            }
        ]
    },
    {
        "code": "3500018",
        "message": "O payment_token fornecido já foi utilizado.",
        "solve": "Verifique se o payment_token gerado está correto ou tente gerar um payment_token novo",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/plan/:id/subscription/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([a-f0-9]{32})/charge/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([a-f0-9]{32})/plan/:id/subscription/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([0-9a-f]{32})/charge/:id/pay"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code/subscription/:id/pay"

            }
        ]
    },
    {
        "code": "3500025",
        "message": "A propriedade [%s] informada é inválida.",
        "solve": "Verifique se o propriedade referente está no formato correto",
        "endpoints": "Em todos os endpoints"
    },
    {
        "code": "3500026",
        "message": "A propriedade payee_code está duplicada.",
        "solve": "Verifique se a propriedate payee_code está sendo utilizada mais de uma vez na requisição",
        "endpoints": [
            {
                "method": "POST",
                "route": "/v1/charge/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/plan/:id/subscription/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([a-f0-9]{32})/charge/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([a-f0-9]{32})/plan/:id/subscription/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([0-9a-f]{32})/charge/:id/pay"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code/subscription/:id/pay"

            }
        ]
    },
    {
        "code": "3500029",
        "message": "Erro ao mapear repasses.",
        "solve": "Verifique se as propriedates de repasse de cobrança estão informadas corretamete",
        "endpoints": [
    	  	{	
                "method": "POST",
                "route": "/v1/charge/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/plan/:id/subscription/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([a-f0-9]{32})/charge/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([a-f0-9]{32})/plan/:id/subscription/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([0-9a-f]{32})/charge/:id/pay"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code/subscription/:id/pay"

            }
        ]
    },
    {
        "code": "3500049",
        "message": "O limite de consumo para este endpoint foi excedido.",
        "solve": "Entre em contato com o suporte Efí",
        "endpoints": "Em todos os endpoints"
    },
    {
        "code": "3500055",
        "message": "O limite de consumo para este endpoint foi excedido.",
        "solve": "Entre em contato com o suporte Efí",
        "endpoints": "Em todos os endpoints"
    },
    {
        "code": "3500067",
        "message": "A assinatura não pode ser paga pois possui o status [%s].",
        "solve": "A assinatura possui um status final e não pode ter uma cobrança associada paga",
        "endpoints": [
            {   
                "method": "POST",
                "route": "/v1/charge/pay"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/:account_code([0-9a-f]{32})/charge/:id/pay"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code/subscription/:id/pay"

            }
        ]
    },
    {
        "code": "3500069",
        "message": "Apenas transações com status [new], [waiting] ou [unpaid] podem ser atualizadas.",
        "solve": "O status da atual cobrança não permite que mesma seja marcada como paga",
        "endpoints": [
            {   
                "method": "PUT",
                "route": "/v1/charge/:id/settle"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/:id/settle"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/parcel/:parcel/settle"

            }
        ]
    },
    {
        "code": "3500083",
        "message": "Carnês com status [finished] não podem ser atualizados.",
        "solve": "O carnê está finalizado e não pode ter a ação referente executada",
        "endpoints": [
            {   
                "method": "PUT",
                "route": "/v1/carnet/:id/cancel"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/:id/parcel/:parcel/cancel"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/:id/settle"
            },
            {
                "method": "PUT",
                "route": "/v1/carnet/:id/parcel/:parcel/settle"

            },
            {
                "method": "POST",
                "route": "/v1/carnet/:id/resend"

            }
        ]
    },
    {
        "code": "3500084",
        "message": "A atualização de parcelas de carnês deve ser efetuado através do endpoint [PUT /carnet/:id/parcel/:parcel/cancel].",
        "solve": "Verifique se os endpoints utilizados estão corretos para a cobrança em questão",
        "endpoints": [
            {   
                "method": "PUT",
                "route": "/v1/charge/:id/cancel"
            },
            {   
                "method": "PUT",
                "route": "/v1/charge/:id/settle"
            }
        ]
    },
    {
        "code": "3500087",
        "message": "Este endpoint está disponível apenas para clientes autorizados.",
        "solve": "Verifique se os parâmetros de parceiros estão sendo enviados corretamente.",
        "endpoints": [
            {   
                "method": "POST",
                "route": "/v1/partner/charge/:id([0-9]+)/rate"
            },
            {   
                "method": "GET",
                "route": "/v1/partner/charge/:id([0-9]+)"
            },
            {   
                "method": "POST",
                "route": "/v1/partner/charge/:id([0-9]+)/pay"
            },
            {   
                "method": "POST",
                "route": "/v1/partner/carnet"
            },
            {   
                "method": "POST",
                "route": "/v1/partner/charge/one-step"
            },
            {   
                "method": "GET",
                "route": "/v1/partner/notification/:token"
            }
        ]
    },
    {
        "code": "3500088",
        "message": "Não foi possível encontrar pelo menos um dos códigos informados.",
        "solve": "Verifique se os payee_codes enviados estão corretos",
        "endpoints": [
             {   
                "method": "POST",
                "route": "/v1/partner/charge/:id([0-9]+)/rate"
            }
        ]
    },
    {
        "code": "3500089",
        "message": "O somatório das porcentagens enviadas deve ser exatamente 100%.",
        "solve": "Verifique o valor das porcentagens enviadas",
        "endpoints": [
             {   
                "method": "POST",
                "route": "/v1/partner/charge/:id([0-9]+)/rate"
            }
        ]
    },
    {
        "code": "3500095",
        "message": "Itens de valor negativo não são permitidos para cobranças de marketplace.",
        "solve": "Verifique se há valores negativos nas cobranças de marketplace",
        "endpoints": [
            {   
                "method": "POST",
                "route": "/v1/charge/pay"
            },
            {
                "method": "POST",
                "route": "/v1/charge/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/carnet/one-step"
            },
            {
                "method": "POST",
                "route": "/v1/subscription/:id/pay"
            },
            {
                "method": "POST",
                "route": "/v1/plan/:id/subscription/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([a-f0-9]{32})/charge/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([a-f0-9]{32})/plan/:id/subscription/one-step"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code([0-9a-f]{32})/charge/:id/pay"

            },
            {
                "method": "POST",
                "route": "/v1/:account_code/subscription/:id/pay"

            }
        ]
    },
    {
        "code": "3500100",
        "message": "Não foi possível alterar tal cobrança, já que ela pertence a um carnê ou assinatura. Por favor, verifique tal situação e consuma o endpoint correto.",
        "solve": "A cobrança é dependente ( carnê ou assinatura ). Consuma o endpoint correto para alterar a url de notificação da cobrança",
        "endpoints": [
            {   
                "method": "PUT",
                "route": "/v1/charge/:id/metadata"
            }
        ]
    },
]
```
</div>

<br/>

### Aprendendo a pesquisar os códigos de erros da API Efí

Para facilitar a compreensão de cada erro retornado por nossas APIs, disponibilizamos uma página que lista todos os erros para consulta.
 
Para acessá-la, clique <a href="https://gerencianet.github.io/gn-erros-api/" target="_blank" title="Link Externo"><b>aqui</b></a> .

<div className="figure"><img src="https://files.readme.io/adf97a7-consultando_error_exemplo.gif" width="1920"/><p>Consultando códigos de erros - API Efí</p></div>

<br/>

## Motivos de recusas de transações do tipo Cartão de Crédito

Existem alguns motivos que podem fazer com que um pagamento com cartão de crédito seja recusado.  
Baixe o PDF disponível abaixo ou por <a href="https://gerencianet-pub-prod-1.s3.amazonaws.com/Motivos+de+recusa+de+cart%C3%A3o+(1).pdf" target="_blank">aqui</a> para saber os possíveis motivos dessa recusa, que são retornados pela API.

<embed src="/pdfelement/Motivos_de_recusa_de_cartao.pdf" type="application/pdf" width="100%" height="972px"></embed>  


 
</div>
