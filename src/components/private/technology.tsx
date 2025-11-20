import React from 'react'

export default function technology() {
  return (
    <><section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">
            Proprietary Technology
          </span>
          <h2>The Intelligence Behind the Edge – Burac Core</h2>
        </div>
        <div className="paragraph">
          <p>
            Burac Core, our proprietary AI engine, sits at the center of every engagement.  Built for private equity precision, it blends marketing data, business performance, and predictive analytics to boost valuation confidence and investment certainty.
          </p>
        </div>
      </div>
      {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
      <div className="multi-text-section__items-text">
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Precise Marketing Performance Analysis:</h3>
              <p>
                Burac Core gives detailed performance insights across digital, paid, organic, and CRM ecosystems – exposing which levers move the needle and where efficiency gains can quadruple EBITDA.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Data-Driven Valuation Increases:</h3>
              <p>
                Through advanced benchmarking and predictive modeling, Burac Core identifies and quantifies the marketing elements most likely to boost business value, guaranteeing partners realize measurable growth upside.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Significant Risk Reduction</h3>
              <p>
                By integrating first-party and third-party datasets, our AI enables decisions anchored in evidence — not assumptions — lowering execution risk and enhancing confidence in both acquisition and value creation stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
