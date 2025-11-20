import React from 'react'

export default function industries() {
  return (
    <>
      <section className="multi-text-section bg-dark">
        <div className="multi-text-section__text">
          <div className="title">
            <span className="badge rounded-pill bg-light">Industries</span>
            <h2>
              The Intelligence Behind Modern Growth          </h2>
          </div>
          <div className="paragraph">
            <a
              href="https://powerdigitalmarketing.com/company/"
              className="btn btn-secondary"
            >
              <div className="icon">
                <span>Learn more about our company</span>
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
        </div>
        {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
        <div className="multi-text-section__items-text">
          <div className="multi-text-section__row">
            <div className="item">
              <div className="text">
                <h3>Undeniable Speed</h3>
                <p>
                  In today’s markets, adaptability defines winners.   Burac.ai instantly reads performance data, recognizes profitable shifts, and initiates campaigns at the pace of opportunity – guaranteeing clients always stay ahead of the curve.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Undeniable Expertise</h3>
                <p>
                  Our team includes growth engineers, data scientists, and brand strategists – all focused on business impact.   It’s why we have a 96%+ retention rate and are trusted by prominent brands and investment firms worldwide.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="text">
                <h3>Undeniable Results</h3>
                <p>
                  We’re characterized by outcomes, not opinions.
                  Burac.ai clients grow 2.6x faster than the market average, delivering 27%+ YoY revenue gains through intelligence-led strategy and measurable optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
