import React from 'react'

export default function power() {
  return (
    <>
      <section className="multi-text-section bg-light ">
        <div className="multi-text-section__text">
          <div className="title">
            <span className="badge rounded-pill bg-dark">Why Burac.ai?</span>
            <h2>Optimizing Investments with Intelligence That Scales</h2>
          </div>
          <div className="paragraph">
            <p>
              Our Private Equity solutions are intended for precision.  We mix deep industry experience, AI analytics, and data-backed forecasts to optimize every marketing dollar toward optimum return.
            </p>
          </div>
        </div>
        {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
        <div className="multi-text-section__items-text">
          <div className="multi-text-section__row">
            <div className="item">
              <div className="text">
                <h3>Data</h3>
                <p>
                  Burac.ai goes beyond surface-level indicators.  Our end-to-end platform blends performance, financial, and behavioral data to give full-funnel visibility — delivering actionable recommendations that boost portfolio value.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Growth</h3>
                <p>
                  Marketing isn’t a cost center – it’s a growth multiplier.  Where others trim marketing to save, Burac.ai leverages intelligence to expand – discovering efficient spend, reallocating resources, and transforming marketing into a recurring value creation lever for PE portfolios.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Value</h3>
                <p>
                  Interested in an AI-driven valuation analysis for your portfolio companies?  Connect with Burac.ai and explore how our intelligence platform can generate quantified ROI and risk-adjusted growth across your assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
