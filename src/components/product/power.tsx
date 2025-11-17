import React from 'react'

export default function power() {
  return (
    <>
    <section className="multi-text-section bg-light ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-dark">Why Burac.ai?</span>
          <h2>
            Accelerate consumer brand growth with holistic, AI-driven strategies.
          </h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              In competitive markets, products alone aren’t enough. Burac.ai designs campaigns that deliver measurable ROI, elevate visibility, and expand your customer base. From awareness to retention, we partner with your brand to achieve sustained, scalable growth.
            </span>
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 3 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Insights That Drive Action</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Consumer data is transformed into actionable strategies that resonate with your audience at the right time.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Creative Meets Performance</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Our campaigns combine beautiful design with tactical precision — ensuring every investment drives measurable results.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Scalable Solutions for Growth</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Whether launching new products or expanding legacy brands, our strategies evolve with your business.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los items restantes */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Cross-Channel Synergy</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We unify efforts across platforms to create seamless consumer experiences.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Results You Can Measure</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We don’t just promise IROAS — we deliver it, with measurable outcomes at every stage.
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
