import React from 'react'

export default function approach() {
  return (
    <>
    <section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-dark">Our Approach</span>
          <h2>Speaking the Language of Value Creation</h2>
        </div>
        <div className="paragraph">
          <p>
            We understand the metrics and mindset of private equity. Our team focuses on delivering Alpha through AI-driven diligence, strategic value creation, and exit-ready marketing optimization.
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 2 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Diligence</h3>
              <p>
                We apply Burac Core across all marketing channels to uncover inefficiencies, benchmark competitive performance, and expose high-return opportunities that can elevate valuation and reduce acquisition risk.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Thesis Validation</h3>
              <p>
                Validate your investment hypothesis before committing capital.
Burac.ai quantifies the likelihood of achieving forecasted outcomes and pinpoints marketing-driven risks that could impact performance post-acquisition.
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los últimos 2 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Value Creation</h3>
              <p>
                We activate continuous optimization loops — ensuring marketing milestones, revenue KPIs, and operational efficiencies are met, driving consistent valuation uplift across your portfolio.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Exit Readiness</h3>
              <p>
                Burac.ai builds marketing and performance visibility over the full investment horizon, enabling data-backed exit narratives and proof-driven growth stories for profitable exits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
