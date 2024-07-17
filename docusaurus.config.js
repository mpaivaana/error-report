const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: 'Documentação Técnica API',
  url: 'https://dev.efipay.com.br',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'Efí', // Usually your GitHub org/user name.
  projectName: 'docusaurus-Efi', // Usually your repo name.
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },
  themeConfig: {
    homePageId: 'home',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    prism: {
      additionalLanguages: ['powershell','clike','csharp','go','json','ruby', 'php', 'java'],
    },
    zoom: {
      selector: '.markdown :not(em) > .figure img, .fluxograma img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(29, 29, 29)'
        }
      }
    },
    navbar: {
      hideOnScroll: false,
      title: '',
      logo: {
        alt: 'Logo do Site',
        src: 'img/efi-pay.svg',
      }, 
       
      items: [
        {
          type: 'search',
          position: 'right',
          className:'navbar__item--search',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          className: 'navbar__item--locale'
        },
        {
          // to: 'docs/',
          href: 'https://comunidade.sejaefi.com.br',
          // activeBasePath: 'docs',
          position: 'right',
          className:'navbar__item--discord buttondiscord',
          'arial-label': 'Discord'  
        },
        {
          // to: 'docs/',
          to: 'https://sejaefi.com.br',
          // activeBasePath: 'docs',
          label: 'Abra sua conta grátis',
          position: 'right',
          className:'navbar__item--abrirconta  buttonblue',
        },
        {
          // to: 'docs/',
          to: 'https://app.sejaefi.com.br/',
          // activeBasePath: 'docs',
          label: 'Acessar minha conta',
          position: 'right',
          className: 'navbar__item--acessarconta'
        },
        
      ],
    }, 
    
    algolia: {
      apiKey: '02cbd730a8b40c9e469e51859869516d',
      indexName: 'doc',
      appId: 'OJBNVK5U9C',  
        // Optional: see doc section bellow
      contextualSearch: true,
      placeholder: "O que você busca?",
    },  
   
    footer: {
      logo: {
        alt: 'Efi Logo',
        src: 'img/gerencianet_logo.svg',
        href: 'https://sejaefi.com.br/'
        // position: 'top'
      },
      style: 'dark',
      links: [
        {
          title: 'PRECISA DE AJUDA?',
          items: [
            {
              label: 'Blog',
              href: 'https://sejaefi.com.br/blog',
              // to: 'docs/',
            },
            {
              label: 'Central de Ajuda',
              href: 'https://sejaefi.com.br/central-de-ajuda',
              // to: 'docs/doc2/',
            },
            {
              label: 'Fale Conosco',
              href: 'https://sejaefi.com.br/fale-conosco',
            },
            {
              label: 'Ouvidoria',
              href: 'https://sejaefi.com.br/fale-conosco#ouvidoria',
            },
            {
              label: 'Desenvolvedores',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'CONHEÇA MAIS',
          items: [
            {
              label: 'Boletos',
              href: 'https://sejaefi.com.br/efi-pay#boletos',
            },
            {
              label: 'Carnês',
              href: 'https://sejaefi.com.br/solucoes/#carnes',
            },
            {
              label: 'Links de pagamento',
              href: 'https://sejaefi.com.br/solucoes/#links-de-pagamento',
            },
            {
              label: 'APIEmissaoCobrancas/Assinaturas',
              href: 'https://sejaefi.com.br/solucoes/#assinaturas',
            },
            {
              label: 'APIEmissaoCobrancas/Marketplace',
              href: 'https://sejaefi.com.br/solucoes/#marketplace',
            },
            {
              label: 'Cartão Pré-Pago',
              href: 'https://sejaefi.com.br/solucoes/#cartao-pre-pago',
            },
            {
              label: 'Meu Cartão',
              href: 'https://sejaefi.com.br/meu-cartao/',
            },
            {
              label: 'Tarifas',
              href: 'https://sejaefi.com.br/tarifas/',
            },
            {
              label: 'Parceiros',
              href: 'https://sejaefi.com.br/parceiros/',
            },
            {
              label: 'Sobre a Efí',
              href: 'https://sejaefi.com.br/empresa/',
            },
          ],
        },
        {
          title: 'UTILIDADES',
          items: [
            {
              label: 'Trabalhe Conosco',
              href: 'https://jobs.kenoby.com/gerencianet',
            },
            {
              label: 'Diretrizes da Marca',
              href: 'https://sejaefi.com.br/diretrizes-da-marca/',
            },
            {
              label: 'Status das Confirmações',
              href: 'https://sejaefi.com.br/confirmacoes/',
            },
            {
              label: 'Termos de Uso',
              href: 'https://sejaefi.com.br/termos-de-uso/', 
            },
            {
              label: 'Termos de Uso Cartão',
              href: 'https://sejaefi.com.br/termo-de-uso-cartao/',
            },
            {
              label: 'Política de Privacidade',
              href: 'https://sejaefi.com.br/politica-de-privacidade/',
              

            },
            {
              label: 'Webinars',
              href: 'https://sejaefi.com.br/webinars/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Efí`,
    },
  },

  
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
  ],
 
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: 'Pix',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // blog: {
        //   showReadingTime: true,
          
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-58FCSP',
        },
      },
      
    ],
  ],
};
