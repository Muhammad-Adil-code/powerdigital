import React from 'react'

export default function intelligent() {
  return (
    <>
      <section className="multi-text-section bg-dark ">
        <div className="multi-text-section__text">
          <div className="title">
            <span className="badge rounded-pill bg-dark">
              Intelligent Growth, Elevated
            </span>
            <h2>Your IROAS Growth Engine. Powered by Data. Driven by Results.</h2>
          </div>
          <div className="paragraph">
            <p>
              <span style={{ fontWeight: 400 }}>
                Leveraging over 300M+ consumer data points and collaborations with top eCommerce, social, and digital platforms, Burac.ai develops tactics that beat the market.  By merging AI-driven data, unique product experiences, and streamlined customer journeys, we achieve scalable, repeatable growth.  From shelf to scroll, from app to website, we ensure your products dominate attention and create measurable outcomes.
              </span>
            </p>
          </div>
        </div>
        {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
        <div className="multi-text-section__items-text">
          <div className="multi-text-section__row">
            <div className="item">
              <div className="text">
                <h3>Customer Insight &amp; Messaging</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    We understand the motives, preferences, and habits of your consumers to guarantee every message resonates.  By translating data into captivating storytelling, we build campaigns that transform casual shoppers into committed brand supporters.
                  </span>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Full-Funnel Strategy</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    From discovery to repeat purchase, we design seamless, integrated strategies guiding consumers through their journey.  Whether launching new goods or growing established brands, every touchpoint is optimized for precision and performance.
                  </span>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Performance at Scale</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Burac.ai optimizes every dollar spent – reducing acquisition costs, maximizing engagement, and enhancing customer lifetime value.  Efficiency is not a goal; it’s our promise.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
