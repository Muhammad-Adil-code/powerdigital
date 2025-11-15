import React from 'react'

export default function service() {
  return (
    <>
      <section className="text-banner bg-light">
        <h3>
          Transparency is <span>our currency.</span>
        </h3>
      </section>
      <section className="service-category  bg-light">
        <ul className="service-category__list">
          <li className="service-category__item position-relative">
            <div className="service-category__item-number">
              <span>01</span>
            </div>
            <div className="service-category__item-content">
              <div className="title">
                <h3>Consumer Product</h3>
              </div>
              <div className="description">
                <p>
                  We employ AI, advanced analytics, and deep behavioral modeling to help consumer brands scale smarter.  From optimizing omnichannel marketing to identifying latent audience potential, we increase ROI and offer growth that compounds — not simply clicks that fade.
                </p>
              </div>
            </div>
            <div className="service-category__item-arrow">
              <a
                href="https://powerdigitalmarketing.com/vertical/consumer-product-b2c/"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
                style={{}}
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
          <li className="service-category__item position-relative">
            <div className="service-category__item-number">
              <span>02</span>
            </div>
            <div className="service-category__item-content">
              <div className="title">
                <h3>B2B</h3>
              </div>
              <div className="description">
                <p>
                  Our B2B business designs full-funnel solutions that align brand, pipeline, and income.By merging predictive lead scoring, content intelligence, and conversion optimization, we eliminate guesswork and help clients dominate every stage of the buyer’s journey.
                </p>
              </div>
            </div>
            <div className="service-category__item-arrow">
              <a
                href="https://powerdigitalmarketing.com/vertical/b2b-marketing/"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
                style={{}}
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
          <li className="service-category__item position-relative">
            <div className="service-category__item-number">
              <span>03</span>
            </div>
            <div className="service-category__item-content">
              <div className="title">
                <h3>Consumer Services</h3>
              </div>
              <div className="description">
                <p>
                  From education to health, lifestyle to economics — Burac.ai offers precision-targeted methods that convert interest into loyalty.
                  We improve every encounter with data-informed customisation, generating long-term customer relationships that fuel additional growth.
                </p>
              </div>
            </div>
            <div className="service-category__item-arrow">
              <a
                href="https://powerdigitalmarketing.com/vertical/consumer-services/"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
                style={{}}
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
          <li className="service-category__item position-relative">
            <div className="service-category__item-number">
              <span>04</span>
            </div>
            <div className="service-category__item-content">
              <div className="title">
                <h3>Private Equity</h3>
              </div>
              <div className="description">
                <p>
                  Burac.ai serves PE, VC, and growth investors with AI-powered marketing diligence and portfolio optimization.
                  Using our Burac Core platform, we identify undervalued growth levers, validate market theses, and optimize marketing efforts to generate stronger, faster valuation returns.
                </p>
              </div>
            </div>
            <div className="service-category__item-arrow">
              <a
                href="https://powerdigitalmarketing.com/vertical/private-equity/"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
                style={{}}
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .service-category__item:hover {\n    background-color: rgba(43, 42, 41, 1);\n  }\n"
        }}
      />
    </>
  )
}
