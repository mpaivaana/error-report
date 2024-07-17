import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../static/animation.json'


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const animationContainer1 = useRef(null);
  const animationContainer2 = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <main className="home-page">
      <Layout
        title={`${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <div className='home'>
          <header className={clsx('hero')}>
            <div className="container-inicial">
              <div className="info_inicial">
                <img src="/img/banner-hero.png" />
                <div className='info_inicial_texto'>
                  <div className='banner-navbar'>
                    <div className='banner-logo'>
                      <a href="https://sejaefi.com.br/efi-pay" target="_blank"><img src="img/logo-efi-pay.svg" alt="banner" /></a>
                    </div>
                    <div className='banner-buttons'>
                      <a href="https://sejaefi.com.br" target="_blank"><button className="buttonAbrirConta">
                        Abra sua conta grátis
                      </button></a>
                      <a href="https://app.sejaefi.com.br" target="_blank"><button className="buttonAcessarConta">
                        Acessar minha conta
                      </button></a>
                    </div>
                  </div>
                  <div className='info_inicial_left'>
                  </div>
                  <div className='info_inicial_right'>
                    <h1 className="titlegn"><span className="titlegnorange"><strong>APIs da Efí Pay</strong></span>, as preferidas dos <strong>desenvolvedores de software</strong></h1>
                    <p>Conecte múltiplas soluções de pagamento ao seu <strong>software, sistema de gestão ou plataforma de e-commerce</strong> e garanta mais tecnologia, escalabilidade e segurança nas suas operações!</p>
                    <a href="/docs/api-pix/credenciais"><button className="buttonHome">
                      <svg className="icon-home">
                      </svg>
                      Acessar documentação completa
                    </button></a>
                  </div>
                </div>
              </div>

              <div className="info_numbers">
                <div className="content_numbers">
                  <div className=".info_section_numbers">
                    <h1 className="titlenumbers"><span className="titlegnorange"><strong>Eficiência,</strong></span> <strong>isso conta muito</strong></h1>
                  </div>
                  <div className="content_section_numbers">
                    <div className="left-content">
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/ilustracao-server.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>+6 bilhões</strong></span></h1>
                          <p>de requisições aos nossos endpoints em 2023.</p>
                        </div>
                      </div>
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/ilustracao-money.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>+219 milhões</strong></span></h1>
                          <p>de cobranças emitidas em 2023.</p>
                        </div>
                      </div>
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/ilu-pagamento-entre-contas.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>+R$27 bilhões</strong></span></h1>
                          <p>transacionados em 2023.</p>
                        </div>
                      </div>
                    </div>

                    <div className="right-content">
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/brand-bacen.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>Nota máxima</strong></span></h1>
                          <p>na API Pix pelo Banco Central.</p>
                        </div>
                      </div>
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/ilustracao-interface-amigavel.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>99,9%</strong></span></h1>
                          <p>de disponibilidade.</p>
                        </div>
                      </div>
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/ilu-dev-api.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>Integração rápida</strong></span></h1>
                          <p>em até 3 dias* com suporte da consultoria técnica.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='img_info_apis'>
                    <div className='info_numbers_left'>
                    </div>
                    <div className='info_numbers_right'>
                    <img src="img/glass-mock.png" alt="banner" className='overlay-image-numbers' />
                    </div>
                  </div>

                </div>
                <div className="subtitulo p_numbers">
                <p><em>O prazo de 3 dias é referente à conexão com as APIs. Ajustes no sistema do cliente não estão contemplados neste período.</em></p>
                </div>
              </div>

              <div className="info_apis">
                <div className="section">
                  <div className="info_section">
                    <h1 className="titlegn"><strong>Experimente nossas APIs</strong></h1>
                    <p>Na Efí Pay, a tecnologia se une à comodidade! Acesse nossa documentação e descubra como é fácil e rápido configurar o seu ambiente.</p>
                  </div>
                  <div className="section1">
                    <div className="content">
                      <div className="image-title-content">
                        <div className="image-content">
                          <img src="/img/api_cobrancas.png" alt="banner" />
                        </div>
                        <div className="text-content">
                          <h1 className="titlegn"><strong>API Cobranças</strong></h1>
                        </div>
                      </div>
                      <div className="paragraph-content">
                        <p>
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Bolix e Boletos:</strong> receba à vista ou em até 1 dia útil. <br />
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Carnês:</strong> faça vendas de alto valor no boleto parcelado.<br />
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Links de pagamento:</strong> receba por boleto e cartão, sem site ou maquininha.<br />
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Assinaturas:</strong> receba de forma recorrente por boleto e cartão.<br />
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Checkout transparente:</strong> ofereça um pagamento seguro, sem redirecionamentos para outro site.<br />
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Split de pagamento:</strong> faça o repasse automático de pagamentos entre os recebedores.<br /><br />
                        </p>
                      </div>
                      <p><a href="/docs/api-cobrancas/credenciais">Saiba mais</a></p>
                    </div>
                  </div>
                  <div className='img_info_apis'>
                    <div className='info_apis_left'>
                    </div>
                    <div className='info_apis_right'>
                      <img src="img/elemento1.png" alt="banner" className="overlay-image" />
                    </div>
                  </div>

                </div>
                <div className="section2">
                  <div className="content content2">
                    <div className="image-title-content">
                      <div className="image-content">
                        <img src="/img/api_of.png" alt="banner" />
                      </div>
                      <div className="text-content">
                        <h1 className="titlegn"><strong>API Pix via Open Finance</strong></h1>
                      </div>
                    </div>
                    <div className="paragraph-content">
                      <p>
                        <img className="icon_check" src="/img/check-solid.svg" /> <strong>Conecte-se</strong> a diversos bancos e fintechs.<br />
                        <img className="icon_check" src="/img/check-solid.svg" /> Inicie pagamentos via Pix dentro do seu <strong>site, plataforma ou app</strong>.<br />
                        <img className="icon_check" src="/img/check-solid.svg" /> Ofereça um checkout rápido, fluido e com <strong>menos etapas</strong>.<br />
                        <img className="icon_check" src="/img/check-solid.svg" /> <strong>Reduza o abandono de carrinho</strong> com uma jornada de compra otimizada.
                      </p>
                    </div>
                    <p><a href="/docs/api-open-finance/credenciais">Saiba mais</a></p>
                    <br />
                    <br />
                    <br />
                  </div>

                  <div className="content content2 right-content">
                    <div className="image-title-content">
                      <div className="image-content">
                        <img src="/img/api_pix.png" alt="banner" />
                      </div>
                      <div className="text-content">
                        <h1 className="titlegn"><strong>API Pix</strong></h1>
                      </div>
                    </div>
                    <div className="paragraph-content">
                      <p>
                        <img className="icon_check" src="/img/check-solid.svg" /> Receba Pix de forma automatizada <strong>(Cash-In)</strong>.<br />
                        <img className="icon_check" src="/img/check-solid.svg" /> Envie Pix diretamente da API <strong>(Cash-Out)</strong>.<br />
                        <img className="icon_check" src="/img/check-solid.svg" /> Emita cobranças imediatas <strong>(Pix Cob)</strong>.<br />
                        <img className="icon_check" src="/img/check-solid.svg" /> Emita cobranças com data de vencimento <strong>(Pix CobV)</strong>.<br />
                        <img className="icon_check" src="/img/check-solid.svg" /> Configure uma <strong>interface</strong> para o Pix Cobrança.<br />
                        <img className="icon_check" src="/img/check-solid.svg" /> Faça o repasse automático de pagamentos com o <strong>Split Pix</strong>.<br />
                        <img className="icon_check" src="/img/check-solid.svg" /> Receba <strong>extratos de conciliação</strong> de forma automática.
                      </p>
                    </div>
                    <p><a href="/docs/api-pix/credenciais">Saiba mais</a></p>
                  </div>
                </div>
                <div className="content">
                  <div className="image-title-content">
                    <div className="image-content">
                      <img src="/img/api_abertura.png" alt="banner" />
                    </div>
                    <div className="text-content">
                      <h1 className="titlegn"><strong>APIs de Serviços Financeiros</strong></h1>
                    </div>
                  </div>
                  <div className="paragraph-content">
                    <p className="paragraph-content3">
                      <img className="icon_check" src="/img/check-solid.svg" /> <strong>API Abertura de Contas:</strong> inicie a abertura de conta dos seus clientes em lote e dentro do seu próprio sistema. É assim que você vai obter as credenciais e certificados necessários para utilizar a aplicação do cliente final — <i>exclusiva para parceiros</i>.
                    </p>
                    <p className="paragraph-content3">
                      <img className="icon_check" src="/img/check-solid.svg" /> <strong>API Pagamento de Contas:</strong> automatize os pagamentos em lote com uma API online. É possível detalhar os códigos de barras a serem pagos, fazer agendamentos, enviar ordens de pagamentos e verificar o resumo de status de cada um.
                    </p>
                    <p className="paragraph-content3">
                      <img className="icon_check" src="/img/check-solid.svg" /> <strong>API Extrato:</strong> receba de forma automática o extrato das movimentações (Pix e TED) e tenha uma conciliação bancária mais assertiva. É possível gerar relatórios com filtros personalizáveis de extrato nos formatos CSV,  JSON e OFX.
                    </p>

                  </div>
                  <p> <a href="/docs/api-abertura-de-contas/credenciais">Saiba mais</a></p>
                </div>
              </div>
              <div className="info_consultoria">
                <div className="lottie-left" ref={animationContainer1}></div>
                <div className='conteudo_info_consultoria'>
                  <img src="/img/time-consultoria-tecnica.png">
                  </img>
                  <h1 className="titlegn"><strong>Especialistas em APIs prontos para te ajudar de segunda a segunda</strong></h1>
                  <p>Se você tem vontade de aprender, trocar experiências e compartilhar seu conhecimento em APIs de pagamento, conecte-se ao servidor Discord da Efí.</p>
                  <a href="https://comunidade.sejaefi.com.br" target="_blank"><button className="buttonDiscord">
                    <svg className="icon-discord">
                    </svg>
                    Conectar ao Discord
                  </button></a>
                </div>
                <div className="lottie-right" ref={animationContainer2}></div>
              </div>
              <br />
              <div className="info_doc">
                <img src="/img/documentacao-descomplicada.png" />
                <div className='info_doc_texto'>
                  <div className='info_doc_left'>
                    <h1 className="titlegn"><strong>Documentação descomplicada</strong><span className="titlegnorange"><strong> para integrações de sucesso</strong></span></h1>
                    <p>Na documentação você encontra a referência técnica para integrar e usar nossas soluções em suas operações.</p>
                    <a href="/docs/api-pix/credenciais"><button className="buttonHome">
                      <svg className="icon-home">
                      </svg>
                      Documentação técnica
                    </button></a>
                  </div>
                  <div className='info_doc_right'>
                  </div>
                </div>
                <div className='info_doc_linguagens'>
                  <h2 className="titlegnorange"><strong>Integrações</strong></h2>
                  <div className='linguagens'>
                    <a href="/docs/sdk/php"><img className="item" src="/img/linguagem-php.svg" /></a>
                    <a href="/docs/sdk/node"><img className="item" src="/img/linguagem-js.svg" /></a>
                    <a href="/docs/sdk/python"><img className="item" src="/img/linguagem-python.svg" /></a>
                    <a href="/docs/sdk/java"><img className="item" src="/img/linguagem-java.svg" /></a>
                    <a href="/docs/sdk/go"><img className="item" src="/img/linguagem-go.svg" /></a>
                    <a href="/docs/sdk/ruby"><img className="item" src="/img/linguagem-ruby.svg" /></a>
                    <a href="/docs/sdk/delphi"><img className="item" src="/img/linguagem-delphi.svg" /></a>
                    <a href="/docs/sdk/type"><img className="item" src="/img/linguagem-typescript.svg" /></a>
                    <a href="/docs/sdk/flutter"><img className="item" src="/img/linguagem-flutter.svg" /></a>
                    <a href="/docs/modulos/introducao-modulos"><img className="item" src="/img/linguagem-modulos-plugins.svg" /></a>
                    <a href="/docs/modulos/WordPress"><img className="item" src="/img/linguagem-woocommerce.svg" /></a>
                    <a href="/docs/modulos/PrestaShop"><img className="item" src="/img/linguagem-prestashop.svg" /></a>
                    <a href="/docs/modulos/WHMCS"><img className="item" src="/img/linguagem-whmcs.svg" /></a>
                    <a href="/docs/modulos/OpenCart"><img className="item" src="/img/linguagem-opencart.svg" /></a>
                    <a href="/docs/modulos/Magento2"><img className="item" src="/img/linguagem-magento.svg" /></a>
                    <img className="item" src="/img/linguagem-boxbilling.svg" />
                    <img className="item" src="/img/linguagem-virtuemart.svg" />
                    <a href="/docs/sdk/introducao"><img className="item" src="/img/linguagem-muito-mais.svg" /></a>
                  </div>
                </div>
              </div>
              <div className='telas-image'>
                <img src="img/telas.png" alt="banner" />
              </div>

              <div className="info_efipay">
                <div className="bg-circulo">
                  <img src="/img/banner-inferior.png" />

                  <div className='info_efipay_texto'>
                    <div className='info_efipay_left'>
                    </div>
                    <div className='info_efipay_right'>
                      <h1 className="titlegn"><strong>Efí Pay para desenvolvedores</strong></h1>
                      <p>A mais alta tecnologia de pagamentos da Efí construída por meio de APIs robustas e escaláveis, com arquiteturas limpas e SDKs nas principais linguagens de programação.</p>
                      <a href="https://sejaefi.com.br/efi-pay" target="_blank"><button className="buttonHome">
                        <svg className="icon-home">
                        </svg>
                        Explore todas as soluções da Efí Pay!
                      </button></a>
                    </div>
                  </div>

                </div>
              </div>
              <div className="duvidas">
                <div className="section">
                  <h1 className="titlegn">Dúvidas frequentes sobre a Efí Pay</h1>
                  <p>Ainda tem dúvidas sobre a integração com a nossa API? A Efí explica todos os detalhes sobre a nova forma de receber pagamentos no Brasil.</p>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>Quais são as linguagens de programação?</b>
                      </summary>
                      <div className="content_duvidas">
                        <p>Você pode desenvolver seu projeto integrado com nossa API em qualquer linguagem de programação.</p>
                      </div>

                    </details>
                  </div>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>Quais as SDKs disponíveis?</b>
                      </summary>
                      <div className="content_duvidas">
                        <p> Disponibilizamos SDKs em diversas linguagens de programação:</p>
                        <p><ul>
                          <li>PHP</li>
                          <li>NodeJS</li>
                          <li>Ruby</li>
                          <li> Python</li>
                          <li>.NET Core</li>
                          <li> Java</li>
                          <li> Delphi</li>
                          <li>Go</li>
                          <li>TypeScript</li>
                          <li>Dart</li>
                          <li>Flutter</li>
                          <li>Android</li>
                        </ul></p>
                      </div>

                    </details>
                  </div>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>Como funciona o suporte e comunidade no Discord?</b>
                      </summary>
                      <div className="content_duvidas">
                        <p>Você pode acompanhar todas as discussões das nossas APIs da Efí através do nosso canal de comunicação no Discord, uma comunidade com mais de 6 mil membros e atendimento de segunda a sexta de 8hs às 20hs e nos finais de semana de 10hs às 15hs.</p>
                      </div>

                    </details>
                  </div>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>Preciso ter CNPJ para vender com a Efí Pay?</b>
                      </summary>
                      <div className="content_duvidas">
                        <p> Na verdade, não! O ecossistema de pagamentos da Efí Pay está disponível para as modalidades de conta Efí Pro (empreendedor sem CNPJ) e Efí Empresas (conta PJ).</p>

                        <p> Portanto, se você não tem CNPJ mas quer vender com a Efí, basta abrir a conta Efí Pro e aproveitar todas as vantagens de ser Efí.</p>
                      </div>

                    </details>
                  </div>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>Eu tenho suporte do time de desenvolvedores para fazer a integração?</b>
                      </summary>
                      <div className="content_duvidas">
                        <p>Sim. Pode contar, que a gente ajuda você em todo o processo! Nosso time de Consultoria Técnica está disponível, de segunda a segunda, no Discord, para ajudar você com o que for necessário.</p>
                      </div>

                    </details>
                  </div>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>Para onde vai o saldo das vendas realizadas?</b>
                      </summary>
                      <div className="content_duvidas">
                        <p>Vem para a sua <strong>Conta Digital gratuita na Efí!</strong></p>

                        <p>É que para usar o ecossistema de pagamentos da Efí Pay, é necessário abrir uma conta Efí Pro (empreendedor sem CNPJ) ou Efí Empresas (conta PJ).</p>

                        <p> Dessa forma, assim que você receber dos seus clientes, o saldo cai direto na conta — já com os descontos das tarifas de recebimento e pronto para você usar como preferir.</p>
                      </div>

                    </details>
                  </div>
                </div>
                <div className='summary'>

                </div>
              </div>
            </div>
          </header >

        </div >
      </Layout >
    </main >
  );
}

export default Home;
