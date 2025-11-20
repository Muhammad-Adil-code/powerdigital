import React from 'react'

export default function approach() {
  return (
    <>
      <section className="multi-text-section bg-light ">
        <div className="multi-text-section__text">
          <div className="title">
            <span className="badge rounded-pill bg-light">Our Approach</span>
            <h2>
              How Burac.ai Helps Consumer Brands Thrive
            </h2>
          </div>
          <div className="paragraph">
            <p>
              <span style={{ fontWeight: 400 }}>
                At Burac.ai, we recognize that consumer products aren’t just transactions - they’re experiences.  Our knowledge covers congested markets, multichannel optimization, and hyper-personalized content to guarantee your business shines out where it counts most.  Here’s how we do it:
              </span>
            </p>
          </div>
        </div>
        <div className="multi-text-section__items-text">
          {/* Primera fila con los primeros 3 items */}
          <div className="multi-text-section__row">
            <div className="item">
              <div className="text">
                <h3>Data-Driven Consumer Strategy</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    &nbsp;We employ deep AI-powered insights to discover unexplored opportunities.  By studying behavioral patterns, purchase history, and market trends, we offer the right message at the right moment – from product discovery to post-buy engagement — ensuring every encounter delivers effect.
                  </span>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Aligning Creative and Channel Strategy</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    A message is only effective if presented well.  We align creative storytelling with channel strategy, ensuring campaigns reach viewers efficiently.  By mixing data-driven insights with human-first creativity, we generate content that stops scrollers, attracts attention, and drives action across social, eCommerce, and digital platforms.
                  </span>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Accelerating Decisions with Actionable Data</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Speed counts in consumer markets.  Burac.ai’s analytics help your team to make solid decisions quickly – from entering new markets to optimizing ad expenditure.  Faster decisions create faster growth.
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Segunda fila con los items restantes */}
          <div className="multi-text-section__row">
            <div className="item">
              <div className="text">
                <h3>Mastering Customer Retention</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Acquisition brings clients in the door; retention creates brands.  We build loyalty programs, automated touchpoints, and individualized engagement tactics that maximize lifetime value.  By merging AI insights with human intuition, we establish partnerships that keep consumers coming.
                  </span>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Measurement &amp; Incrementality Testing</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Every strategy is measured.  Our frameworks separate campaign impact, exposing which activities promote genuine development.  With constant testing and optimization, we ensure your investment produces measurable, repeatable outcomes.
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
