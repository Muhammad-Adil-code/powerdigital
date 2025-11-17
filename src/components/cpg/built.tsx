import React from 'react'

export default function built() {
  return (
    <>
    <section className="multi-text-section bg-light ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">
            Built for CPG. Engineered for IROAS.
          </span>
          <h2> A Smarter Growth Engine, Tuned for Your P&amp;L</h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              You don’t just need more data — you need data that drives action. Leveraging 300M+ consumer data points and proprietary Burac.ai technology, we map your best opportunities across DTC, retail, and in-store media. Then we execute with precision — from scroll to shelf.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              Our mission isn’t just to drive sales — it’s to make them sustainable, measurable, and margin-positive.
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
                  We help you understand your customers — and then communicate like you really know them. Insights fuel messaging that converts online engagement into in-store and digital revenue.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Omnichannel Strategy &amp; Execution </h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  No more silos between DTC, retail, or Amazon. Burac.ai connects the dots with integrated campaigns that drive total revenue and measurable lift.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Measurement &amp; Incrementality</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We bring clarity to your full funnel using incrementality testing and MMM frameworks, showing exactly what channels drive impact — so you can scale strategies that work and stop wasting spend on those that don’t.
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
