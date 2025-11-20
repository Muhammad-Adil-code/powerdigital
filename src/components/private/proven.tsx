import React from 'react'
import CountUp from '../Home/CountUp'

export default function proven() {
  return (
    <>
      <section className="section-three-data-number bg-dark">
        <div className="section-three-data-number__text">
          <div className="title">
            <h2>Proven Success Stories</h2>
          </div>
          <div className="description">
            <p>
              Our track record speaks for itself.  We have successfully teamed with noteworthy firms including Cortec, Pink Lily, Cerberus, and Fingerhut, delivering tremendous value and growth.
            </p>
          </div>
          <div className="section-three-data-number__insight insight-section">
            <div>
              <div className="item">
                <CountUp end={2.6} duration={3} suffix="x" />
                <p>Faster growth rates than the industry average</p>
              </div>
            </div>
            <div>
              <div className="item">
                <CountUp end={27} duration={3} suffix="%" />
                <p>Average YoY increase in client revenue</p>
              </div>
            </div>
            <div>
              <div className="item">
                <CountUp end={330} duration={3} suffix="M+" />
                <p>
                  Data points utilized by Burac Core to drive investing intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
