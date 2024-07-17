module.exports = {

  docs: {
    'API Pix': ['api-pix/credenciais', 'api-pix/cobrancas-imediatas', 'api-pix/cobrancas-com-vencimento', 'api-pix/envio-pagamento-pix', 'api-pix/gestao-de-pix', 'api-pix/payload-locations', 'api-pix/cobrancas-lote', 'api-pix/split-de-pagamento-pix', 'api-pix/webhooks', 'api-pix/endpoints-exclusivos-efi', 'api-pix/status', 'api-pix/glossario', 'api-pix/fluxogramas'],

    'API Pagamento de Contas': ['api-pagamento-de-contas/credenciais', 'api-pagamento-de-contas/pagamentos', 'api-pagamento-de-contas/webhooks', 'api-pagamento-de-contas/status', 'api-pagamento-de-contas/fluxogramas'],

    'API Pix via Open Finance': ['api-open-finance/credenciais', 'api-open-finance/configuracoes-de-aplicacao', 'api-open-finance/participantes', 'api-open-finance/pagamentos', 'api-open-finance/devolucao', 'api-open-finance/recebendo-callbacks', 'api-open-finance/status', 'api-open-finance/fluxogramas'],

    'API Abertura de Contas': ['api-abertura-de-contas/credenciais', 'api-abertura-de-contas/cadastro-simplificado', 'api-abertura-de-contas/webhook', 'api-abertura-de-contas/fluxogramas'],

    'API Cobranças': ['api-cobrancas/credenciais', 'api-cobrancas/boleto', 'api-cobrancas/cartao', 'api-cobrancas/carne', 'api-cobrancas/assinatura', 'api-cobrancas/link-de-pagamento', 'api-cobrancas/split-de-pagamento', 'api-cobrancas/notificacoes', 'api-cobrancas/status', 'api-cobrancas/erros', 'api-cobrancas/limites-de-consumo', 'api-cobrancas/fluxogramas'],

    'Erros': ['erros/introducao'],
    
    'SDKs': ['sdk/introducao', 'sdk/php', 'sdk/node', 'sdk/python', 'sdk/java', 'sdk/go', 'sdk/ruby', 'sdk/dotnet-core', 'sdk/type-script', 'sdk/delphi', 'sdk/flutter', 'sdk/android'],

    'Módulos e Plugins': ['modulos/introducao-modulos', 'modulos/WordPress', 'modulos/PrestaShop', 'modulos/WHMCS', , 'modulos/OpenCart', 'modulos/OpenMage', 'modulos/Magento2', 'modulos/Bubble'],

    'Exemplos de Integrações': ['exemplos-de-integracoes/introducao'],

    'Curso': ['curso/curso-online'],

    'Dúvidas': [{
      type: 'link',
      label: 'Discord', // The label that should be displayed (string).
      href: 'https://comunidade.sejaefi.com.br' // The target URL (string).
    },
    {
      type: 'link',
      label: 'FAQ', // The label that should be displayed (string).
      href: 'https://sejaefi.com.br/central-de-ajuda/api/oferecer-pagamento-online-em-site#conteudo' // The target URL (string).
    }, {
      type: 'link',
      label: 'Glossário', // The label that should be displayed (string).
      href: 'https://sejaefi.com.br/central-de-ajuda/api/glossario-com-os-termos-e-palavras-mais-comuns#conteudo' // The target URL (string).
    }, {
      type: 'link',
      label: 'Fale Conosco', // The label that should be displayed (string).
      href: 'https://sejaefi.com.br/central-de-ajuda/outros/entrar-em-contato#conteudo' // The target URL (string).
    }]
  },
};
