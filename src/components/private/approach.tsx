import React from 'react'

export default function approach() {
  return (
    <>
      <section className="multi-text-section bg-dark ">
        <div className="multi-text-section__text">
          <div className="title">
            <span className="badge rounded-pill bg-dark">Our Approach</span>
            <h2>Speaking the Language of Making Value</h2>
          </div>
          <div className="paragraph">
            <p>

              We know how private equity works and what it means. Our team works hard to offer Alpha by using AI to do due diligence, create strategic value, and optimize marketing for exits.
            </p>
          </div>
        </div>
        <div className="multi-text-section__items-text">
          {/* Primera fila con los primeros 2 items */}
          <div className="multi-text-section__row">
            <div className="item">
              <div className="text">
                <h3>Hard Work</h3>
                <p>
                  We utilize Burac Core across all marketing channels to find inefficiencies, evaluate competitive performance, and expose high-return prospects that can enhance valuation and reduce acquisition risk.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Thesis Validation</h3>
                <p>
                  Validate your investment theory before committing funds.  Burac.ai analyzes the possibility of reaching projected outcomes and pinpoints marketing-driven risks that could effect performance post-acquisition.
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
                  We trigger ongoing optimization loops – ensuring marketing milestones, revenue KPIs, and operational efficiencies are reached, driving consistent valuation uplift across your portfolio.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Exit Readiness</h3>
                <p>
                  Burac.ai builds marketing and performance visibility throughout the whole investment horizon, enabling data-backed exit narratives and proof-driven growth stories for lucrative exits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
