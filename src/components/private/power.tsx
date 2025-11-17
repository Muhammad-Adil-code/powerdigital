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
            Our Private Equity solutions are built for precision.
We merge deep industry experience, AI analytics, and data-backed forecasting to optimize every marketing dollar toward maximum return.
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
                Burac.ai goes beyond surface-level metrics.
Our end-to-end platform integrates performance, financial, and behavioral data to deliver full-funnel visibility — driving actionable recommendations that enhance portfolio value.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Growth</h3>
              <p>
                Marketing isn’t a cost center — it’s a growth multiplier.
Where others cut marketing to save, Burac.ai uses intelligence to scale — identifying efficient spend, reallocating resources, and transforming marketing into a repeatable value creation lever for PE portfolios.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Value</h3>
              <p>
                Interested in an AI-driven valuation appraisal for your portfolio companies?
Connect with Burac.ai and discover how our intelligence platform can deliver quantifiable ROI and risk-adjusted growth across your investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}
