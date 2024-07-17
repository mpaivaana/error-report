import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../../static/animation.json'


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
                        Open your free account
                      </button></a>
                      <a href="https://app.sejaefi.com.br" target="_blank"><button className="buttonAcessarConta">
                        Access my account
                      </button></a>
                    </div>
                  </div>
                  <div className='info_inicial_left'>
                  </div>
                  <div className='info_inicial_right'>
                    <h1 className="titlegn"><span className="titlegnorange"><strong>Efí Pay APIs</strong></span>, the favorites of <strong>software developers</strong></h1>
                    <p>Connect multiple payment solutions to your <strong>software, management system or e-commerce platform</strong> and ensure more technology, scalability and security in your operations!</p>
                    <a href="/en/docs/api-pix/credenciais"><button className="buttonHome">
                      <svg className="icon-home">
                      </svg>
                      Access full documentation
                    </button></a>
                  </div>
                </div>
              </div>

              <div className="info_numbers">
                <div className="content_numbers">
                  <div className=".info_section_numbers">
                    <h1 className="titlenumbers"><span className="titlegnorange"><strong>Efficiency,</strong></span> <strong>that counts a lot</strong></h1>
                  </div>
                  <div className="content_section_numbers">
                    <div className="left-content">
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/ilustracao-server.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>+6 billion</strong></span></h1>
                          <p>requests to our endpoints in 2023.</p>
                        </div>
                      </div>
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/ilustracao-money.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>+219 million</strong></span></h1>
                          <p>charges issued in 2023.</p>
                        </div>
                      </div>
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/ilu-pagamento-entre-contas.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>+R$27 billion</strong></span></h1>
                          <p>transacted in 2023.</p>
                        </div>
                      </div>
                    </div>

                    <div className="right-content">
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/brand-bacen.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>Top marks</strong></span></h1>
                          <p>in the Pix API by the Central Bank.</p>
                        </div>
                      </div>
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/ilustracao-interface-amigavel.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>99,9%</strong></span></h1>
                          <p>availability.</p>
                        </div>
                      </div>
                      <div className="image-title-content">
                        <div className="icon-content">
                          <img src="/img/ilu-dev-api.svg" alt="banner" />
                        </div>
                        <div className="text-numbers">
                          <h1 className="titleorange"><span><strong>Fast integration</strong></span></h1>
                          <p>in up to 3 days* with technical consultancy support.</p>
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
                <p><em>The 3-day period refers to the connection with the APIs. Adjustments to the client's system are not included in this period.</em></p>
                </div>
              </div>

              <div className="info_apis">
                <div className="section">
                  <div className="info_section">
                    <h1 className="titlegn"><strong>Try our APIs</strong></h1>
                    <p>At Efí Pay, technology meets convenience! Access our documentation and discover how easy and quick it is to set up your environment.</p>
                  </div>
                  <div className="section1">
                    <div className="content">
                      <div className="image-title-content">
                        <div className="image-content">
                          <img src="/img/api_cobrancas.png" alt="banner" />
                        </div>
                        <div className="text-content">
                          <h1 className="titlegn"><strong>Billings API</strong></h1>
                        </div>
                      </div>
                      <div className="paragraph-content">
                        <p>
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Bolix and Boletos:</strong> receive in cash or within 1 working day.
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Carnês:</strong> make high-value sales on installment payment.
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Payment links:</strong> receive by boleto and credit card, without needing a website or card machine.
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Subscriptions:</strong> receive recurrently by boleto and credit card.
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Transparent checkout:</strong> offer a secure payment, without redirecting to another website.
                          <img className="icon_check" src="/img/check-solid.svg" /> <strong>Payment split:</strong> automatically transfer payments among receivers.
                        </p>
                      </div>
                      <p><a href="/en/docs/api-cobrancas/credenciais">Learn more</a></p>
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
                        <h1 className="titlegn"><strong>Pix API through Open Finance</strong></h1>
                      </div>
                    </div>
                    <div className="paragraph-content">
                      <p>
                        <img className="icon_check" src="/img/check-solid.svg" /> <strong>Connect</strong> to various banks and fintechs.
                        <img className="icon_check" src="/img/check-solid.svg" /> Initiate Pix payments within your <strong>website, platform, or app</strong>.
                        <img className="icon_check" src="/img/check-solid.svg" /> Offer a quick, smooth checkout experience with <strong>fewer steps</strong>.
                        <img className="icon_check" src="/img/check-solid.svg" /> <strong>Reduce cart abandonment</strong> with an optimized purchasing journey.
                      </p>
                    </div>
                    <p><a href="/en/docs/api-open-finance/credenciais">Learn more</a></p>
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
                        <h1 className="titlegn"><strong>Pix API</strong></h1>
                      </div>
                    </div>
                    <div className="paragraph-content">
                      <p>
                        <img className="icon_check" src="/img/check-solid.svg" /> Receive Pix payments automatically <strong>(Cash-In)</strong>.
                        <img className="icon_check" src="/img/check-solid.svg" /> Send Pix directly from the API <strong>(Cash-Out)</strong>.
                        <img className="icon_check" src="/img/check-solid.svg" /> Issue immediate charges <strong>(Pix Cob)</strong>.
                        <img className="icon_check" src="/img/check-solid.svg" /> Issue charges with due dates <strong>(Pix CobV)</strong>.
                        <img className="icon_check" src="/img/check-solid.svg" /> Set up an <strong>interface</strong> for Pix Charging.
                        <img className="icon_check" src="/img/check-solid.svg" /> Automatically transfer payments with <strong>Split Pix</strong>.
                        <img className="icon_check" src="/img/check-solid.svg" /> Receive <strong>reconciliation extract</strong> automatically.
                      </p>
                    </div>
                    <p><a href="/en/docs/api-pix/credenciais">Learn more</a></p>
                  </div>
                </div>
                <div className="content">
                  <div className="image-title-content">
                    <div className="image-content">
                      <img src="/img/api_abertura.png" alt="banner" />
                    </div>
                    <div className="text-content">
                      <h1 className="titlegn"><strong>Financial Services APIs</strong></h1>
                    </div>
                  </div>
                  <div className="paragraph-content">
                  <p className="paragraph-content3">
                    <img className="icon_check" src="/img/check-solid.svg" /> <strong>Account Opening API:</strong> initiate the account opening process for your clients in batch and within your own system. This is how you will obtain the necessary credentials and certificates to use the end-client application — <i>exclusive to partners</i>.
                  </p>
                  <p className="paragraph-content3">
                    <img className="icon_check" src="/img/check-solid.svg" /> <strong>Bill Payment API:</strong> automate batch payments with an online API. You can specify the barcodes to be paid, schedule payments, send payment orders, and check the status summary of each one.
                  </p>
                  <p className="paragraph-content3">
                    <img className="icon_check" src="/img/check-solid.svg" /> <strong>Reconciliation Extract:</strong> automatically receive extract of transactions (Pix and TED) and have a more accurate bank reconciliation. You can generate reports with customizable extract filters in CSV, JSON, and OFX formats.
                  </p>

                  </div>
                  <p> <a href="/en/docs/api-abertura-de-contas/credenciais">Learn more</a></p>
                </div>
              </div>
              <div className="info_consultoria">
                <div className="lottie-left" ref={animationContainer1}></div>
                <div className='conteudo_info_consultoria'>
                  <img src="/img/time-consultoria-tecnica.png">
                  </img>
                  <h1 className="titlegn"><strong>API Specialists Ready to Help You Seven Days a Week</strong></h1>
                  <p>If you're eager to learn, exchange experiences, and share your knowledge in payment APIs, connect to the Efí Discord server.</p>
                  <a href="https://comunidade.sejaefi.com.br" target="_blank"><button className="buttonDiscord">
                    <svg className="icon-discord">
                    </svg>
                    Connect to Discord
                  </button></a>
                </div>
                <div className="lottie-right" ref={animationContainer2}></div>
              </div>
              <br/>
              <div className="info_doc">
                <img src="/img/documentacao-descomplicada.png" />
                <div className='info_doc_texto'>
                  <div className='info_doc_left'>
                  <h1 className="titlegn"><strong>Uncomplicated documentation</strong><span className="titlegnorange"><strong> for Successful Integrations</strong></span></h1>
                  <p>In the documentation, you will find the technical reference to integrate and use our solutions in your operations.</p>
                    <a href="/en/docs/api-pix/credenciais"><button className="buttonHome">
                      <svg className="icon-home">
                      </svg>
                      Technical documentation
                    </button></a>
                  </div>
                  <div className='info_doc_right'>
                  </div>
                </div>
                <div className='info_doc_linguagens'>
                  <h2 className="titlegnorange"><strong>Integrations</strong></h2>
                  <div className='linguagens'>
                    <a href="/en/docs/sdk/php"><img className="item" src="/img/linguagem-php.svg" /></a>
                    <a href="/en/docs/sdk/node"><img className="item" src="/img/linguagem-js.svg" /></a>
                    <a href="/en/docs/sdk/python"><img className="item" src="/img/linguagem-python.svg" /></a>
                    <a href="/en/docs/sdk/java"><img className="item" src="/img/linguagem-java.svg" /></a>
                    <a href="/en/docs/sdk/go"><img className="item" src="/img/linguagem-go.svg" /></a>
                    <a href="/en/docs/sdk/ruby"><img className="item" src="/img/linguagem-ruby.svg" /></a>
                    <a href="/en/docs/sdk/delphi"><img className="item" src="/img/linguagem-delphi.svg" /></a>
                    <a href="/en/docs/sdk/type"><img className="item" src="/img/linguagem-typescript.svg" /></a>
                    <a href="/en/docs/sdk/flutter"><img className="item" src="/img/linguagem-flutter.svg" /></a>
                    <a href="/en/docs/modulos/introducao-modulos"><img className="item" src="/img/linguagem-modulos-plugins.svg" /></a>
                    <a href="/en/docs/modulos/WordPress"><img className="item" src="/img/linguagem-woocommerce.svg" /></a>
                    <a href="/en/docs/modulos/PrestaShop"><img className="item" src="/img/linguagem-prestashop.svg" /></a>
                    <a href="/en/docs/modulos/WHMCS"><img className="item" src="/img/linguagem-whmcs.svg" /></a>
                    <a href="/en/docs/modulos/OpenCart"><img className="item" src="/img/linguagem-opencart.svg" /></a>
                    <a href="/en/docs/modulos/Magento2"><img className="item" src="/img/linguagem-magento.svg" /></a>
                    <img className="item" src="/img/linguagem-boxbilling.svg" />
                    <img className="item" src="/img/linguagem-virtuemart.svg" />
                    <a href="/en/docs/sdk/introducao"><img className="item" src="/img/linguagem-muito-mais.svg" /></a>
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
                      <h1 className="titlegn"><strong>Efí Pay for developers</strong></h1>
                      <p>Efí's latest payments technology built through robust and scalable APIs, with clean architectures and SDKs in the main programming languages.</p>
                      <a href="https://sejaefi.com.br/efi-pay" target="_blank"><button className="buttonHome">
                        <svg className="icon-home">
                        </svg>
                        Explore all Efí Pay solutions!
                      </button></a>
                    </div>
                  </div>

                </div>
              </div>
              <div className="duvidas">
                <div className="section">
                <h1 className="titlegn">Frequently Asked Questions about Efí Pay</h1>
                <p>Still have questions about integrating with our API? Efí explains all the details about the new way to receive payments in Brazil.</p>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>What programming languages are supported?</b>
                      </summary>
                      <div className="content_duvidas">
                        <p>You can develop your project integrated with our API in any programming language.</p>
                      </div>

                    </details>
                  </div>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                       <b>What SDKs are available?</b>
                      </summary>
                      <div className="content_duvidas">
                        <p>We provide SDKs in various programming languages:</p>
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
                          <li>Flutter</li>
                          <li>Android</li>
                        </ul></p>
                      </div>

                    </details>
                  </div>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>How does support and community work on Discord?</b>
                      </summary>
                      <div className="content_duvidas">
                        <p>You can follow all discussions about our Efí APIs through our communication channel on Discord, a community with over 6,000 members and support available from Monday to Friday from 8am to 8pm and on weekends from 10am to 3pm.</p>
                      </div>

                    </details>
                  </div>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>Do I need a CNPJ to sell with Efí Pay?</b>
                      </summary>
                      <div className="content_duvidas">
                      <p>Actually, no! The Efí Pay payment ecosystem is available for Efí Pro (individual entrepreneur without CNPJ) and Efí Empresas (PJ account) account types.</p>
                      <p>So, if you don't have a CNPJ but want to sell with Efí, just open an Efí Pro account and enjoy all the advantages of being Efí.</p>
                    </div>

                    </details>
                  </div>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>Do I have support from the development team to make the integration?</b>
                      </summary>
                      <div className="content_duvidas">
                        <p>Yes. You can count on us, we'll help you throughout the process! Our Technical Consulting team is available on Discord every day to assist you with whatever you need.</p>
                      </div>      

                    </details>
                  </div>
                  <div className="section_duvidas">
                    <details className="col-100">
                      <summary>
                        <b>Where does the balance from sales go?</b>
                      </summary>
                      <div className="content_duvidas">
                      <p>It goes to your <strong>free Digital Account at Efí!</strong></p>
                      <p>To use the Efí Pay payment ecosystem, you need to open an Efí Pro (individual entrepreneur without CNPJ) or Efí Empresas (PJ account) account.</p>
                      <p>That way, as soon as you receive payments from your customers, the balance goes directly to your account — already with the deductions from receipt fees and ready for you to use as you prefer.</p>
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
