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
                In competitive markets, products alone aren’t enough.  Burac.ai builds campaigns that produce demonstrable ROI, enhance exposure, and extend your client base.  From awareness to retention, we partner with your brand to create sustainable, scalable growth.
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
                    Consumer data is translated into effective solutions that resonate with your audience at the correct time.
                  </span>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Creative Meets Performance</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Our campaigns blend stunning design with tactical precision - guaranteeing every investment produces measurable results.
                  </span>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Scalable Solutions for Growth</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Whether launching new goods or extending heritage brands, our tactics adapt with your business.
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
                    We combine efforts across platforms to provide seamless consumer experiences.
                  </span>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Results You Can Measure</h3>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    We don’t simply offer IROAS – we deliver it, with demonstrable outcomes at every stage.
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
