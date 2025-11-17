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
              At Burac.ai, we understand that consumer products aren’t just transactions — they’re experiences. Our expertise spans crowded markets, omnichannel optimization, and hyper-personalized content to ensure your brand stands out where it matters most. Here’s how we do it:
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
                  &nbsp;We leverage deep AI-powered insights to unlock untapped opportunities. By analyzing behavioral patterns, purchase history, and market trends, we deliver the right message at the right moment — from product discovery to post-purchase engagement — ensuring every interaction drives impact.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Aligning Creative and Channel Strategy</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  A message is only effective if delivered well. We align creative storytelling with channel strategy, ensuring campaigns reach audiences efficiently. By blending data-driven insights with human-first creativity, we produce content that stops scrollers, captures attention, and drives action across social, eCommerce, and digital platforms.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Accelerating Decisions with Actionable Data</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Speed matters in consumer markets. Burac.ai’s analytics empower your team to make confident decisions quickly — from entering new markets to optimizing ad spend. Faster decisions drive faster growth.
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
                  Acquisition gets customers in the door; retention builds brands. We design loyalty programs, automated touchpoints, and personalized engagement strategies that increase lifetime value. By combining AI insights with human intuition, we create relationships that keep consumers returning.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Measurement &amp; Incrementality Testing</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Every strategy is measured. Our frameworks isolate campaign impact, revealing which initiatives drive real growth. With continuous testing and optimization, we ensure your investment delivers measurable, repeatable results.
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
